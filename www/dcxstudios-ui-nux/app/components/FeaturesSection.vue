<script setup>
const { t } = useI18n({
  useScope: 'local'
})

const features = [
  {
    icon: 'i-lucide-brain-circuit',
    title: 'brainTraining',
    description: 'brainTrainingDesc'
  },
  {
    icon: 'i-lucide-infinity',
    title: 'infiniteLevels',
    description: 'infiniteLevelsDesc'
  },
  {
    icon: 'i-lucide-trophy',
    title: 'globalRankings',
    description: 'globalRankingsDesc'
  },
  {
    icon: 'i-lucide-zap',
    title: 'dailyUnwind',
    description: 'dailyUnwindDesc'
  }
]
</script>

<template>
  <section
    id="features"
    class="py-20 lg:py-32 bg-white relative overflow-hidden"
  >
    <!-- Dekoratif Arkaplan -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-accent-gray/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-4xl lg:text-5xl font-black tracking-tight text-dark-surface mb-6">
          {{ t('title') }}
        </h2>
        <p class="text-lg text-dark-surface/60 leading-relaxed">
          {{ t('subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="group p-8 rounded-3xl bg-background-light border border-gray-100 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-dark-surface transition-all duration-300 text-dark-surface/80">
            <UIcon
              :name="feature.icon"
              class="w-8 h-8"
            />
          </div>
          <h3 class="text-xl font-bold text-dark-surface mb-3">
            {{ t(feature.title) }}
          </h3>
          <p class="text-dark-surface/60 leading-relaxed text-sm">
            {{ t(feature.description) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Why Play Crossle?",
    "subtitle": "Discover what makes our flagship game a daily essential for thousands of players worldwide.",
    "brainTraining": "Brain Training",
    "brainTrainingDesc": "Sharpen your cognitive skills with puzzles designed to challenge your vocabulary and logic.",
    "infiniteLevels": "Infinite Levels",
    "infiniteLevelsDesc": "Never run out of challenges. Our procedural engine generates unique puzzles for endless fun.",
    "globalRankings": "Global Rankings",
    "globalRankingsDesc": "Compete with players from around the world. Climb the leaderboards and prove your mastery.",
    "dailyUnwind": "Daily Unwind",
    "dailyUnwindDesc": "The perfect way to relax. Smooth animations and satisfying interactions to melt the stress away."
  },
  "tr": {
    "title": "Neden Crossle?",
    "subtitle": "Binlerce oyuncu için amiral gemisi oyunumuzu vazgeçilmez kılan özellikleri keşfedin.",
    "brainTraining": "Beyin Egzersizi",
    "brainTrainingDesc": "Kelime dağarcığınızı ve mantığınızı zorlamak için tasarlanmış bulmacalarla zihninizi keskinleştirin.",
    "infiniteLevels": "Sonsuz Seviye",
    "infiniteLevelsDesc": "Asla bulmaca sıkıntısı çekmeyin. Motorumuz sonsuz eğlence için benzersiz bulmacalar üretir.",
    "globalRankings": "Küresel Sıralama",
    "globalRankingsDesc": "Dünyanın her yerinden oyuncularla yarışın. Liderlik tablolarına tırmanın ve ustalığınızı kanıtlayın.",
    "dailyUnwind": "Günlük Rahatlama",
    "dailyUnwindDesc": "Rahatlamanın mükemmel yolu. Stresi eritmek için pürüzsüz animasyonlar ve tatmin edici etkileşimler."
  }
}
</i18n>
