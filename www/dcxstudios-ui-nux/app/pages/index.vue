<script setup>
import HomeHero from '~/components/HomeHero.vue'
import GallerySection from '~/components/GallerySection.vue'

useSeoMeta({
  title: 'DCX Studios — Independent Mobile Game Studio',
  description: 'Independent mobile game studio creating immersive experiences. Play Crossle, our daily word puzzle game on iOS & Android.',
  ogTitle: 'DCX Studios — Independent Mobile Game Studio',
  ogDescription: 'Independent mobile game studio creating immersive experiences. Play Crossle, our daily word puzzle game on iOS & Android.',
  ogUrl: 'https://dcxstudios.org',
  ogType: 'website',
  ogImage: 'https://dcxstudios.org/icon.png',
  twitterCard: 'summary_large_image',
  twitterSite: '@dcxstudios'
})

// Crossle app schema — Organization identity is handled globally by @nuxtjs/seo
useSchemaOrg([
  defineWebSite({
    name: 'DCX Studios',
    url: 'https://dcxstudios.org'
  }),
  {
    '@type': 'SoftwareApplication',
    'name': 'Crossle',
    'operatingSystem': 'iOS, Android',
    'applicationCategory': 'GameApplication',
    'offers': {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '100',
      bestRating: '5'
    },
    'author': {
      '@type': 'Organization',
      name: 'DCX Studios'
    }
  }
])
</script>

<template>
  <div>
    <HomeHero />
    <GallerySection />
    <AboutSection />
    <ContactSection />
    <CommunityCta />
  </div>
</template>
