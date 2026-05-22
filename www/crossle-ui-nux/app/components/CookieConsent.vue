<script setup>
const { $script } = useNuxtApp()
const isBannerOpen = ref(false)
const consentStatus = ref('pending') // pending, accepted, rejected

const config = useRuntimeConfig()
const googleAnalyticsId = config.public?.googleAnalyticsId

// Check consent on mount
onMounted(() => {
  const savedConsent = localStorage.getItem('cookie_consent')
  if (savedConsent) {
    consentStatus.value = savedConsent
    if (savedConsent === 'accepted') {
      loadAnalytics()
    }
  } else {
    isBannerOpen.value = true
  }
})

function accept() {
  consentStatus.value = 'accepted'
  isBannerOpen.value = false
  localStorage.setItem('cookie_consent', 'accepted')
  loadAnalytics()
}

function reject() {
  consentStatus.value = 'rejected'
  isBannerOpen.value = false
  localStorage.setItem('cookie_consent', 'rejected')
}

// Function to load Google Analytics
function loadAnalytics() {
  if (!googleAnalyticsId) {
    // console.warn('Google Analytics ID is not defined in runtime config.')
    return
  }

  $script(`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`, {
    trigger: 'immediate'
  })
    .then(() => {
      window.dataLayer = window.dataLayer || []
      function gtag(...args) {
        window.dataLayer.push(args)
      }
      gtag('js', new Date())
      gtag('config', googleAnalyticsId)
    })
    .catch((err) => {
      console.error('Failed to load Google Analytics script', err)
    })
}
</script>

<template>
  <div
    v-if="isBannerOpen"
    role="dialog"
    aria-label="Cookie consent"
    class="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-gray-200 dark:border-gray-800"
  >
    <div class="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="text-sm text-gray-700 dark:text-gray-200 text-center md:text-left">
        <p class="font-bold mb-1">
          We value your privacy
        </p>
        <p>We use cookies to analyze our traffic and track app downloads. Please accept to help us improve.</p>
      </div>
      <div class="flex gap-3 shrink-0">
        <UButton
          color="gray"
          variant="ghost"
          size="sm"
          class="dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          @click="reject"
        >
          Decline
        </UButton>
        <UButton
          color="primary"
          variant="solid"
          size="sm"
          class="px-6 font-bold text-white dark:text-gray-900"
          @click="accept"
        >
          Accept
        </UButton>
      </div>
    </div>
  </div>
</template>
