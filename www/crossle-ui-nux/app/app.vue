<script setup>
useHead({
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: { lang: 'en' }
})

const title = 'Crossle: Online Word Duel'
const description = 'Competitive online multiplayer word game with crossword-style PvP duels. Challenge your friends or rank up globally!'

useSeoMeta({
  title,
  description,
  ogType: 'website',
  ogSiteName: 'Crossle',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/hero-mockup.png',
  twitterImage: '/images/hero-mockup.png',
  twitterCard: 'summary_large_image',
  themeColor: '#eab308'
})

// Quick links for Footer
const footerLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Support', to: '/support' }
]
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
    <header class="border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 font-bold text-xl hover:text-primary transition-colors"
        >
          <NuxtImg
            src="/icon.webp"
            alt="Crossle - Online Word Duel Game"
            class="h-10 w-10 rounded-xl shadow-sm"
            width="40"
            height="40"
            format="webp"
          />
          <span>Crossle</span>
        </NuxtLink>

        <div class="flex items-center gap-4">
          <UColorModeButton aria-label="Toggle dark mode" />
        </div>
      </div>
    </header>

    <main class="flex-1">
      <NuxtPage />
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-800 py-8 bg-gray-50 dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            &copy; {{ new Date().getFullYear() }}
            <a
              href="https://dcxstudios.org"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary transition-colors"
            >DCX Studios</a>. All rights reserved.
          </p>

          <nav aria-label="Footer navigation">
            <div class="flex gap-6 text-sm">
              <NuxtLink
                v-for="link in footerLinks"
                :key="link.to"
                :to="link.to"
                class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </nav>
        </div>
      </div>
    </footer>

    <CookieConsent />
  </div>
</template>
