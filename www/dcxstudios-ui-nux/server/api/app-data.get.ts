import gplay from 'google-play-scraper'

export default defineEventHandler(async () => {
  const iosId = '6751605835'
  const androidId = 'com.dcxstudios.dcm'

  let iosData = null
  let androidData = null

  // Fetch iOS Data
  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${iosId}`)
    const json = await response.json()
    if (json.results && json.results.length > 0) {
      iosData = json.results[0]
    }
  } catch (e) {
    console.error('Failed to fetch iOS data', e)
  }

  // Fetch Android Data
  try {
    // google-play-scraper might fail in some server environments (e.g. strict scraping blocks)
    // so we wrap it in try-catch
    androidData = await gplay.app({ appId: androidId }).catch(err => {
      console.error('Google Play Scraper Error:', err);
      return null;
    });
  } catch (e) {
    console.error('Failed to fetch Android data', e)
  }

  // Calculate weighted average rating
  const iosRating = iosData?.averageUserRating || 0
  const iosCount = iosData?.userRatingCount || 0

  const androidRating = androidData?.score || 0
  const androidCount = androidData?.ratings || 0

  let finalRating = 4.8 // Default backup
  let totalCount = 0

  if (iosCount > 0 || androidCount > 0) {
    if (iosCount > 0 && androidCount > 0) {
      // Weighted average
      totalCount = iosCount + androidCount
      finalRating = ((iosRating * iosCount) + (androidRating * androidCount)) / totalCount
    } else if (iosCount > 0) {
      finalRating = iosRating
      totalCount = iosCount
    } else if (androidCount > 0) {
      finalRating = androidRating
      totalCount = androidCount
    }
  }

  // Fallbacks
  const latestVersion = iosData?.version || androidData?.version || '1.0'
  const downloads = androidData?.installs || '100+'
  const ratingsCount = totalCount > 0 ? totalCount : '50+'

  // Format rating to 1 decimal place
  const formattedRating = Number(finalRating).toFixed(1)

  return {
    version: latestVersion,
    rating: formattedRating,
    downloads: downloads,
    ratingsCount: ratingsCount, // Added specific count
    ios: {
      version: iosData?.version,
      rating: iosData?.averageUserRating,
      count: iosData?.userRatingCount,
      url: iosData?.trackViewUrl
    },
    android: {
      version: androidData?.version,
      rating: androidData?.score,
      count: androidData?.ratings,
      downloads: androidData?.installs,
      url: androidData?.url,
      error: !androidData ? 'Could not fetch Android data' : null
    }
  }
})
