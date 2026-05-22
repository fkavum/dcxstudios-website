<script setup>
const { t } = useI18n({
  useScope: 'local'
})

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
  <section
    id="about"
    class="py-20 lg:py-32 bg-dark-surface relative overflow-hidden text-white"
  >
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
          <UIcon
            name="i-heroicons-information-circle"
            class="w-4 h-4 text-white/60"
          />
          <span class="text-sm font-medium text-white/60">{{ t('aboutUs') }}</span>
        </div>

        <h2 class="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">
          {{ t('title') }}
        </h2>
        <p class="text-lg text-white/70 leading-relaxed">
          {{ t('story') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="value in values"
          :key="value.title"
          class="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
        >
          <div class="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
            <UIcon
              :name="value.icon"
              class="w-8 h-8 text-primary group-hover:text-dark-surface transition-colors duration-300"
            />
          </div>

          <h3 class="text-xl font-bold text-white mb-3">
            {{ t(value.title) }}
          </h3>

          <p class="text-white/60 leading-relaxed">
            {{ t(value.description) }}
          </p>
        </div>
      </div>

      <div class="text-center mt-12">
        <UButton
          to="/about"
          color="primary"
          variant="outline"
          size="lg"
          class="rounded-full font-semibold"
        >
          {{ t('learnMore') }}
          <UIcon
            name="i-heroicons-arrow-right"
            class="w-4 h-4 ml-1"
          />
        </UButton>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "aboutUs": "About Us",
    "title": "Crafting Games That Matter",
    "story": "DCX Studios was born from a simple idea: games should be more than just entertainment—they should be experiences that stay with you. Founded in 2024, we're a passionate indie studio dedicated to creating unique, engaging experiences that bring joy to players worldwide.",
    "innovation": "Innovation",
    "innovationDesc": "We constantly push the boundaries of game design, exploring new mechanics and creative solutions.",
    "passion": "Passion",
    "passionDesc": "Every game we create is a labor of love, built by people who genuinely care about the craft.",
    "community": "Community",
    "communityDesc": "Our players are at the heart of everything we do. We listen, learn, and grow together.",
    "quality": "Quality",
    "qualityDesc": "We never compromise on quality. Every detail matters, from gameplay to visuals to sound.",
    "learnMore": "Learn more about us"
  },
  "tr": {
    "aboutUs": "Hakkımızda",
    "title": "Önemli Oyunlar Yaratıyoruz",
    "story": "DCX Studios basit bir fikirden doğdu: oyunlar sadece eğlenceden fazlası olmalı—sizinle kalacak deneyimler olmalılar. 2024'te kurulan stüdyomuz, dünya çapında oyunculara keyif veren benzersiz ve ilgi çekici deneyimler yaratmaya adanmış tutkulu bir bağımsız oyun stüdyosudur.",
    "innovation": "Yenilik",
    "innovationDesc": "Oyun tasarımının sınırlarını sürekli zorluyoruz, yeni mekanikler ve yaratıcı çözümler keşfediyoruz.",
    "passion": "Tutku",
    "passionDesc": "Yarattığımız her oyun, bu işe gerçekten önem veren insanlar tarafından inşa edilmiş bir emek ürünüdür.",
    "community": "Topluluk",
    "communityDesc": "Oyuncularımız yaptığımız her şeyin merkezindedir. Dinliyor, öğreniyor ve birlikte büyüyoruz.",
    "quality": "Kalite",
    "qualityDesc": "Kaliteden asla ödün vermeyiz. Oynanıştan görsellere, sesten tasarıma her detay önemlidir.",
    "learnMore": "Hakkımızda daha fazla"
  }
}
</i18n>
