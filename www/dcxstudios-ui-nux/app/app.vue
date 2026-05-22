<script setup>
const { locale } = useI18n()
const route = useRoute()
const baseUrl = 'https://dcxstudios.org'

useHead({
  htmlAttrs: {
    lang: locale
  },
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'canonical', href: computed(() => `${baseUrl}${route.path === '/' ? '' : route.path}`) }
  ]
})

const title = 'DCX Studios: Innovative Mobile Game Development'
const description = 'DCX Studios creates immersive mobile gaming experiences. Discover our latest games like Crossle and join our growing community.'

useSeoMeta({
  title,
  description,
  ogType: 'website',
  ogSiteName: 'DCX Studios',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/dcx-social-card.png',
  ogUrl: 'https://dcxstudios.org',
  twitterImage: '/images/dcx-social-card.png',
  twitterCard: 'summary_large_image',
  themeColor: '#ffdb2d'
})
</script>

<template>
  <UApp>
    <div class="flex flex-col min-h-screen bg-background-light font-sans text-dark-surface">
      <AppHeader />

      <main class="flex-1">
        <NuxtPage />
      </main>

      <AppFooter />
      <CookieConsent />
    </div>
  </UApp>
</template>
