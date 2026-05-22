<script setup>
const { t } = useI18n({
  useScope: 'local'
})

useSeoMeta({
  title: 'About Us - DCX Studios',
  description: 'Learn about DCX Studios - A passionate indie game development studio creating memorable gaming experiences.',
  ogTitle: 'About Us - DCX Studios',
  ogDescription: 'Learn about DCX Studios - A passionate indie game development studio creating memorable gaming experiences.',
  ogUrl: 'https://dcxstudios.org/about'
})

const { data: appData } = await useFetch('/api/app-data', {
  lazy: true
})

const stats = computed(() => [
  { value: '2024', label: 'founded' },
  { value: '1', label: 'games' },
  { value: appData.value?.downloads || '100+', label: 'players' },
  { value: appData.value?.rating || '4.8', label: 'rating' }
])

const values = [
  {
    icon: 'i-heroicons-light-bulb',
    title: 'innovation',
    description: 'innovationDesc'
  },
  {
    icon: 'i-heroicons-heart',
    title: 'passion',
    description: 'passionDesc'
  },
  {
    icon: 'i-heroicons-users',
    title: 'community',
    description: 'communityDesc'
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'quality',
    description: 'qualityDesc'
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
            <UIcon name="i-heroicons-information-circle" class="w-4 h-4" />
            <span class="text-sm font-medium">{{ t('aboutUs') }}</span>
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

    <!-- Stats Section -->
    <section class="bg-white border-b border-gray-200 py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center"
          >
            <div class="text-4xl lg:text-5xl font-black text-dark-surface mb-2">
              {{ stat.value }}
            </div>
            <p class="text-sm text-dark-surface/60 uppercase tracking-wider">
              {{ t(stat.label) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 lg:py-32 bg-background-light">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-black text-dark-surface mb-8 text-center">
            {{ t('ourStory') }}
          </h2>
          
          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-dark-surface/80 leading-relaxed mb-6">
              {{ t('storyPart1') }}
            </p>
            
            <p class="text-lg text-dark-surface/80 leading-relaxed mb-6">
              {{ t('storyPart2') }}
            </p>
            
            <p class="text-lg text-dark-surface/80 leading-relaxed">
              {{ t('storyPart3') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 lg:py-32 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-black text-dark-surface mb-4">
            {{ t('ourValues') }}
          </h2>
          <p class="text-lg text-dark-surface/60 max-w-2xl mx-auto">
            {{ t('valuesDescription') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="value in values"
            :key="value.title"
            class="group p-8 rounded-3xl bg-background-light border border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <UIcon :name="value.icon" class="w-8 h-8 text-primary" />
            </div>
            
            <h3 class="text-xl font-bold text-dark-surface mb-3">
              {{ t(value.title) }}
            </h3>
            
            <p class="text-dark-surface/70 leading-relaxed">
              {{ t(value.description) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-dark-surface text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl lg:text-5xl font-black mb-6">
          {{ t('joinJourney') }}
        </h2>
        <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          {{ t('joinDescription') }}
        </p>
        
        <div class="flex flex-wrap gap-4 justify-center">
          <UButton
            to="/games"
            color="primary"
            variant="solid"
            size="xl"
            class="rounded-full font-bold text-dark-surface hover:opacity-90 px-8 py-4"
          >
            {{ t('exploreGames') }}
          </UButton>
          
          <UButton
            to="/contact"
            color="white"
            variant="outline"
            size="xl"
            class="rounded-full font-bold hover:bg-white/10 px-8 py-4"
          >
            {{ t('getInTouch') }}
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "aboutUs": "About Us",
    "heroTitle": "Crafting Games That Matter",
    "heroDescription": "We're a passionate indie game studio dedicated to creating unique, engaging experiences that bring joy to players worldwide.",
    "founded": "Founded",
    "games": "Games",
    "players": "Players",
    "rating": "Avg Rating",
    "ourStory": "Our Story",
    "storyPart1": "DCX Studios was born from a simple idea: games should be more than just entertainment—they should be experiences that stay with you. Founded in 2024, we started with a small team of passionate developers who believed in the power of creative gameplay.",
    "storyPart2": "Our first game, Crossle, represents everything we stand for: innovative mechanics, beautiful design, and a focus on player engagement. It's a daily brain workout disguised as a puzzle game, and it's just the beginning.",
    "storyPart3": "Today, we continue to push boundaries, experiment with new ideas, and most importantly, listen to our community. Every game we create is a labor of love, crafted with attention to detail and a commitment to quality.",
    "ourValues": "Our Values",
    "valuesDescription": "The principles that guide everything we do",
    "innovation": "Innovation",
    "innovationDesc": "We constantly push the boundaries of game design, exploring new mechanics and creative solutions.",
    "passion": "Passion",
    "passionDesc": "Every game we create is a labor of love, built by people who genuinely care about the craft.",
    "community": "Community",
    "communityDesc": "Our players are at the heart of everything we do. We listen, learn, and grow together.",
    "quality": "Quality",
    "qualityDesc": "We never compromise on quality. Every detail matters, from gameplay to visuals to sound.",
    "joinJourney": "Join Our Journey",
    "joinDescription": "Be part of our story. Play our games, share your feedback, and help us shape the future of gaming.",
    "exploreGames": "Explore Our Games",
    "getInTouch": "Get In Touch"
  },
  "tr": {
    "aboutUs": "Hakkımızda",
    "heroTitle": "Önemli Oyunlar Yaratıyoruz",
    "heroDescription": "Dünya çapında oyunculara keyif veren benzersiz ve ilgi çekici deneyimler yaratmaya adanmış tutkulu bir bağımsız oyun stüdyosuyuz.",
    "founded": "Kuruluş",
    "games": "Oyun",
    "players": "Oyuncu",
    "rating": "Ort. Puan",
    "ourStory": "Hikayemiz",
    "storyPart1": "DCX Studios basit bir fikirden doğdu: oyunlar sadece eğlenceden fazlası olmalı—sizinle kalacak deneyimler olmalılar. 2024'te kurulan stüdyomuz, yaratıcı oynanışın gücüne inanan küçük bir tutkulu geliştirici ekibiyle başladı.",
    "storyPart2": "İlk oyunumuz Crossle, temsil ettiğimiz her şeyi yansıtıyor: yenilikçi mekanikler, güzel tasarım ve oyuncu etkileşimine odaklanma. Bulmaca oyunu kılığına girmiş günlük bir beyin egzersizi ve bu sadece başlangıç.",
    "storyPart3": "Bugün sınırları zorlamaya, yeni fikirlerle deney yapmaya ve en önemlisi topluluğumuzu dinlemeye devam ediyoruz. Yarattığımız her oyun, detaylara gösterilen özen ve kalite taahhüdüyle hazırlanmış bir emek ürünüdür.",
    "ourValues": "Değerlerimiz",
    "valuesDescription": "Yaptığımız her şeye rehberlik eden ilkeler",
    "innovation": "Yenilik",
    "innovationDesc": "Oyun tasarımının sınırlarını sürekli zorluyoruz, yeni mekanikler ve yaratıcı çözümler keşfediyoruz.",
    "passion": "Tutku",
    "passionDesc": "Yarattığımız her oyun, bu işe gerçekten önem veren insanlar tarafından inşa edilmiş bir emek ürünüdür.",
    "community": "Topluluk",
    "communityDesc": "Oyuncularımız yaptığımız her şeyin merkezindedir. Dinliyor, öğreniyor ve birlikte büyüyoruz.",
    "quality": "Kalite",
    "qualityDesc": "Kaliteden asla ödün vermeyiz. Oynanıştan görsellere, sesten tasarıma her detay önemlidir.",
    "joinJourney": "Yolculuğumuza Katılın",
    "joinDescription": "Hikayemizin bir parçası olun. Oyunlarımızı oynayın, geri bildirimlerinizi paylaşın ve oyunculuğun geleceğini şekillendirmemize yardımcı olun.",
    "exploreGames": "Oyunlarımızı Keşfedin",
    "getInTouch": "İletişime Geçin"
  }
}
</i18n>
