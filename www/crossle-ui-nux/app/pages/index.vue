<script setup>
const features = [
  {
    icon: 'i-lucide-swords',
    title: 'PvP Duels',
    description: 'Challenge your friends or match with random opponents in real-time crossword battles.'
  },
  {
    icon: 'i-lucide-brain-circuit',
    title: 'Strategy & Skill',
    description: 'It\u2019s not just about big words. Use the board multipliers and block your opponent to win.'
  },
  {
    icon: 'i-lucide-trophy',
    title: 'Global Rankings',
    description: 'Climb the leaderboards and prove you are the best word master in the world.'
  }
]

const downloadLinks = [
  {
    to: 'https://apps.apple.com/tr/app/crossle-online-word-duel/id6751605835',
    icon: 'i-simple-icons-apple',
    iconClass: 'w-8 h-8',
    labelSmall: 'Download on the',
    labelLarge: 'App Store'
  },
  {
    to: 'https://play.google.com/store/apps/details?id=com.dcxstudios.dcm',
    icon: 'i-simple-icons-googleplay',
    iconClass: 'w-7 h-7 ml-0.5',
    labelSmall: 'GET IT ON',
    labelLarge: 'Google Play',
    contentClass: 'ml-0.5'
  }
]

// Schema.org structured data via nuxt-schema-org
useSchemaOrg([
  defineWebSite({
    name: 'Crossle',
    description: 'Competitive online multiplayer word game with crossword-style PvP duels.'
  }),
  defineSoftwareApp({
    name: 'Crossle',
    applicationCategory: 'GameApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250'
    },
    description: 'The ultimate multiplayer word game. Compete in crossword-style duels.',
    author: {
      '@type': 'Organization',
      name: 'DCX Studios',
      url: 'https://dcxstudios.org'
    },
    installUrl: [
      'https://apps.apple.com/tr/app/crossle-online-word-duel/id6751605835',
      'https://play.google.com/store/apps/details?id=com.dcxstudios.dcm'
    ]
  })
])

// OG Image
defineOgImage({
  url: '/images/hero-mockup.png',
  width: 1200,
  height: 630,
  alt: 'Crossle - Online Word Duel'
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <!-- Text Content -->
          <div class="flex-1 text-center lg:text-left">
            <h1 class="text-5xl lg:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              Crossle
              <span class="block text-4xl lg:text-5xl text-gray-900 dark:text-white mt-2">Online Word Duel</span>
            </h1>
            <p class="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The ultimate multiplayer word game. Compete in crossword-style duels, use strategy to outsmart your opponents, and climb the global ranks.
            </p>

            <div class="flex flex-wrap justify-center lg:justify-start gap-4">
              <UButton
                v-for="link in downloadLinks"
                :key="link.to"
                :to="link.to"
                target="_blank"
                rel="noopener noreferrer"
                color="neutral"
                variant="solid"
                class="rounded-xl px-6 py-3 h-[60px] min-w-[180px] shadow-xl hover:scale-105 transition-transform duration-200"
              >
                <div class="flex items-center gap-3">
                  <UIcon
                    :name="link.icon"
                    :class="link.iconClass"
                  />
                  <div
                    class="flex flex-col items-start leading-none"
                    :class="link.contentClass"
                  >
                    <span class="text-[10px] uppercase font-medium opacity-60">{{ link.labelSmall }}</span>
                    <span class="text-xl font-bold">{{ link.labelLarge }}</span>
                  </div>
                </div>
              </UButton>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="flex-1 w-full flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[240px] lg:max-w-[300px]">
              <div class="absolute inset-0 bg-yellow-400/30 blur-3xl rounded-full scale-110" />
              <NuxtImg
                src="/images/hero-mockup.png"
                alt="Crossle multiplayer word duel game screenshot showing PvP crossword gameplay"
                class="relative z-10 w-full h-auto rounded-[2.5rem] shadow-2xl border-4 border-gray-900/10 dark:border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500"
                width="300"
                height="600"
                format="webp"
                loading="eager"
                fetchpriority="high"
                placeholder
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gameplay Video Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">
            Gameplay Trailer
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            See the action unfold in real-time.
          </p>
        </div>
        <div class="relative mx-auto border-gray-900 dark:border-gray-700 bg-gray-900 border-[8px] rounded-[2.5rem] w-full max-w-[300px] aspect-[9/16] shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-4 ring-gray-200/20">
          <div class="rounded-[2rem] overflow-hidden w-full h-full bg-black">
            <video
              controls
              poster="/images/hero-mockup.png"
              preload="none"
              class="w-full h-full object-cover"
            >
              <source
                src="/videos/crossle-gameplay-trailer.mp4"
                type="video/mp4"
              >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">
            Why Play Crossle?
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Discover the features that make Crossle the most addictive word game.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <UCard
            v-for="feature in features"
            :key="feature.title"
            class="hover:scale-105 transition-transform duration-300 border border-gray-100 dark:border-gray-800"
          >
            <div class="flex flex-col items-center text-center p-6">
              <div class="w-16 h-16 rounded-2xl bg-yellow-400/20 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 flex items-center justify-center mb-6">
                <UIcon
                  :name="feature.icon"
                  class="w-8 h-8"
                  aria-hidden="true"
                />
              </div>
              <h3 class="text-xl font-bold mb-3">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ feature.description }}
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Interactive Game Section -->
    <GameSection />

    <!-- Bottom CTA -->
    <section class="py-24">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-8">
          Ready to Duel?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-10">
          Download Crossle now and start your journey to become the ultimate word master.
        </p>
        <div class="flex justify-center gap-4">
          <UButton
            v-for="link in downloadLinks"
            :key="'cta-' + link.to"
            :to="link.to"
            target="_blank"
            rel="noopener noreferrer"
            color="black"
            variant="solid"
            class="rounded-xl px-6 py-3 h-[60px] min-w-[180px] shadow-xl hover:scale-105 transition-transform duration-200 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            <div class="flex items-center gap-3">
              <UIcon
                :name="link.icon"
                :class="link.iconClass"
              />
              <div
                class="flex flex-col items-start leading-none"
                :class="link.contentClass"
              >
                <span class="text-[10px] uppercase font-medium text-gray-600 dark:text-gray-500">{{ link.labelSmall }}</span>
                <span class="text-xl font-bold">{{ link.labelLarge }}</span>
              </div>
            </div>
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>
