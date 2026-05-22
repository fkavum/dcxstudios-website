<script setup>
const { t } = useI18n({
  useScope: 'local'
})

const { $script } = useNuxtApp()
const isBannerOpen = ref(false)
const consentStatus = ref('pending') // pending, accepted, rejected

const config = useRuntimeConfig()
const googleAnalyticsId = config.public.googleAnalyticsId

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
    console.warn('Google Analytics ID is not defined in runtime config.')
    return
  }

  $script(`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`, {
    trigger: 'immediate'
  })
    .then(() => {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
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
    class="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-white/95 backdrop-blur shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-gray-200"
  >
    <div class="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="text-sm text-dark-surface/80 text-center md:text-left">
        <p class="font-medium mb-1">
          {{ t('title') }}
        </p>
        <p>{{ t('description') }}</p>
      </div>
      <div class="flex gap-3 shrink-0">
        <UButton
          color="gray"
          variant="soft"
          size="sm"
          @click="reject"
        >
          {{ t('reject') }}
        </UButton>
        <UButton
          color="primary"
          variant="solid"
          size="sm"
          @click="accept"
        >
          {{ t('accept') }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "title": "We value your privacy",
    "description": "We use cookies to analyze our traffic and track app downloads. Please accept to help us improve.",
    "accept": "Accept",
    "reject": "Decline"
  },
  "tr": {
    "title": "Gizliliğinize önem veriyoruz",
    "description": "Trafiğimizi analiz etmek ve uygulama indirmelerini takip etmek için çerezler kullanıyoruz. Geliştirmemize yardımcı olmak için lütfen kabul edin.",
    "accept": "Kabul Et",
    "reject": "Reddet"
  }
}
</i18n>
