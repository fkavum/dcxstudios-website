<script setup>
const { t } = useI18n({
  useScope: 'local'
})

useSeoMeta({
  title: 'Our Games - DCX Studios',
  description: 'Explore the games created by DCX Studios. Play Crossle, an innovative word puzzle game available on iOS and Android.',
  ogTitle: 'Our Games - DCX Studios',
  ogDescription: 'Explore the games created by DCX Studios. Play Crossle, an innovative word puzzle game available on iOS and Android.',
  ogUrl: 'https://dcxstudios.org/games'
})

const { data: appData } = await useFetch('/api/app-data', {
  lazy: true
})

const games = computed(() => [
  {
    id: 'crossle',
    title: 'Crossle',
    tagline: 'crossleTagline',
    description: 'crossleDescription',
    image: '/images/hero-mockup.png',
    status: 'live',
    platforms: ['ios', 'android'],
    rating: appData.value?.rating || '4.8',
    downloads: appData.value?.downloads || '100+',
    links: {
      ios: appData.value?.ios?.url || 'https://apps.apple.com/tr/app/crossle/id6751605835',
      android: appData.value?.android?.url || 'https://play.google.com/store/apps/details?id=com.dcxstudios.dcm'
    },
    features: ['dailyPuzzles', 'globalLeaderboards', 'offlinePlay', 'regularUpdates']
  }
])

const upcomingGames = [
  {
    id: 'tba-1',
    title: 'comingSoon',
    tagline: 'stayTuned',
    description: 'upcomingDescription',
    image: '/images/hero-mockup.png',
    status: 'development'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-dark-surface text-white py-20 lg:py-32 overflow-hidden">
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-6">
            <UIcon name="i-heroicons-puzzle-piece" class="w-4 h-4" />
            <span class="text-sm font-medium">{{ t('ourGames') }}</span>
          </div>
          
          <h1 class="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            {{ t('heroTitle') }}
          </h1>
          
          <p class="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            {{ t('heroDescription') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Live Games Section -->
    <section class="py-20 lg:py-32 bg-background-light">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-black text-dark-surface mb-4">
            {{ t('liveGames') }}
          </h2>
          <p class="text-lg text-dark-surface/60">
            {{ t('liveGamesDescription') }}
          </p>
        </div>

        <div class="space-y-16">
          <div
            v-for="(game, index) in games"
            :key="game.id"
            class="group"
          >
            <div
              class="grid lg:grid-cols-2 gap-12 items-center"
              :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''"
            >
              <!-- Game Image -->
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <div class="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <NuxtImg
                    :src="game.image"
                    :alt="game.title"
                    format="webp"
                    width="600"
                    height="1200"
                    loading="lazy"
                    class="w-full h-auto"
                  />
                </div>
              </div>

              <!-- Game Info -->
              <div :class="index % 2 === 1 ? 'lg:order-first' : ''">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                  <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {{ t('live') }}
                </div>

                <h3 class="text-4xl lg:text-5xl font-black text-dark-surface mb-4">
                  {{ game.title }}
                </h3>

                <p class="text-xl text-primary font-semibold mb-6">
                  {{ t(game.tagline) }}
                </p>

                <p class="text-lg text-dark-surface/80 leading-relaxed mb-8">
                  {{ t(game.description) }}
                </p>

                <!-- Stats -->
                <div class="flex flex-wrap gap-6 mb-8">
                  <div>
                    <div class="text-3xl font-black text-dark-surface">{{ game.rating }}/5</div>
                    <div class="text-sm text-dark-surface/60">{{ t('rating') }}</div>
                  </div>
                  <div>
                    <div class="text-3xl font-black text-dark-surface">{{ game.downloads }}</div>
                    <div class="text-sm text-dark-surface/60">{{ t('downloads') }}</div>
                  </div>
                </div>

                <!-- Features -->
                <div class="grid grid-cols-2 gap-3 mb-8">
                  <div
                    v-for="feature in game.features"
                    :key="feature"
                    class="flex items-center gap-2 text-sm text-dark-surface/80"
                  >
                    <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary shrink-0" />
                    <span>{{ t(feature) }}</span>
                  </div>
                </div>

                <!-- Download Buttons -->
                <div class="flex flex-wrap gap-4">
                  <UButton
                    v-if="game.links.ios"
                    :to="game.links.ios"
                    target="_blank"
                    color="primary"
                    variant="solid"
                    size="lg"
                    class="rounded-full font-bold text-dark-surface hover:opacity-90 px-6 py-3"
                  >
                    <UIcon name="i-simple-icons-apple" class="w-5 h-5 mr-2" />
                    App Store
                  </UButton>

                  <UButton
                    v-if="game.links.android"
                    :to="game.links.android"
                    target="_blank"
                    color="primary"
                    variant="solid"
                    size="lg"
                    class="rounded-full font-bold text-dark-surface hover:opacity-90 px-6 py-3"
                  >
                    <UIcon name="i-simple-icons-googleplay" class="w-5 h-5 mr-2" />
                    Google Play
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Games Section -->
    <section class="py-20 lg:py-32 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-black text-dark-surface mb-4">
            {{ t('upcomingGames') }}
          </h2>
          <p class="text-lg text-dark-surface/60">
            {{ t('upcomingDescription') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="game in upcomingGames"
            :key="game.id"
            class="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-dark-surface to-dark-surface/80 p-8 text-white hover:scale-[1.02] transition-transform duration-300"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div class="relative z-10">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-bold mb-4">
                <UIcon name="i-heroicons-clock" class="w-4 h-4" />
                {{ t('inDevelopment') }}
              </div>

              <h3 class="text-2xl font-black mb-2">{{ t(game.title) }}</h3>
              <p class="text-primary font-semibold mb-4">{{ t(game.tagline) }}</p>
              <p class="text-white/80">{{ t(game.description) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-dark-surface text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl lg:text-5xl font-black mb-6">
          {{ t('stayUpdated') }}
        </h2>
        <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          {{ t('stayUpdatedDescription') }}
        </p>
        
        <UButton
          to="/contact"
          color="primary"
          variant="solid"
          size="xl"
          class="rounded-full font-bold text-dark-surface hover:opacity-90 px-8 py-4"
        >
          {{ t('contactUs') }}
        </UButton>
      </div>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "ourGames": "Our Games",
    "heroTitle": "Games We've Created",
    "heroDescription": "Each game is crafted with passion, innovation, and a commitment to delivering unforgettable experiences.",
    "liveGames": "Live Games",
    "liveGamesDescription": "Available now on your favorite platforms",
    "live": "Live",
    "crossleTagline": "Your Daily Brain Workout",
    "crossleDescription": "A unique word puzzle game that challenges your mind every day. Connect letters, form words, and compete with players worldwide. Simple to learn, impossible to master.",
    "rating": "Rating",
    "downloads": "Downloads",
    "dailyPuzzles": "Daily Puzzles",
    "globalLeaderboards": "Global Leaderboards",
    "offlinePlay": "Offline Play",
    "regularUpdates": "Regular Updates",
    "upcomingGames": "What's Next",
    "upcomingDescription": "Exciting projects in development",
    "comingSoon": "Coming Soon",
    "stayTuned": "Stay Tuned",
    "inDevelopment": "In Development",
    "stayUpdated": "Stay Updated",
    "stayUpdatedDescription": "Want to be the first to know about new releases? Get in touch with us.",
    "contactUs": "Contact Us"
  },
  "tr": {
    "ourGames": "Oyunlarımız",
    "heroTitle": "Yarattığımız Oyunlar",
    "heroDescription": "Her oyun tutku, yenilik ve unutulmaz deneyimler sunma taahhüdüyle hazırlanmıştır.",
    "liveGames": "Yayında Olan Oyunlar",
    "liveGamesDescription": "Favori platformlarınızda şimdi mevcut",
    "live": "Yayında",
    "crossleTagline": "Günlük Beyin Egzersiziniz",
    "crossleDescription": "Her gün zihninizi zorlayan benzersiz bir kelime bulmaca oyunu. Harfleri birleştirin, kelimeler oluşturun ve dünya çapındaki oyuncularla yarışın. Öğrenmesi basit, ustalaşması imkansız.",
    "rating": "Puan",
    "downloads": "İndirme",
    "dailyPuzzles": "Günlük Bulmacalar",
    "globalLeaderboards": "Küresel Liderlik Tabloları",
    "offlinePlay": "Çevrimdışı Oyun",
    "regularUpdates": "Düzenli Güncellemeler",
    "upcomingGames": "Sırada Ne Var",
    "upcomingDescription": "Geliştirme aşamasındaki heyecan verici projeler",
    "comingSoon": "Yakında",
    "stayTuned": "Takipte Kalın",
    "inDevelopment": "Geliştiriliyor",
    "stayUpdated": "Güncel Kalın",
    "stayUpdatedDescription": "Yeni sürümler hakkında ilk öğrenen siz olmak ister misiniz? Bizimle iletişime geçin.",
    "contactUs": "İletişime Geçin"
  }
}
</i18n>
