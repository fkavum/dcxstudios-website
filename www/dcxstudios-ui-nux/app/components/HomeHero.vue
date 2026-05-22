<script setup>
const { t } = useI18n({
  useScope: 'local'
})

const { data: appData } = await useFetch('/api/app-data', {
  lazy: true
})
</script>

<template>
  <div class="flex flex-col">
    <section class="relative bg-dark-surface text-white py-20 lg:py-32 overflow-hidden rounded-b-[3rem]">
      <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-20 items-center">
          <div class="flex flex-col gap-8 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 w-fit mx-auto lg:mx-0 backdrop-blur-sm">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span class="text-xs font-medium text-white/90 uppercase tracking-wider">
                {{ t('newRelease', { version: appData?.version || '1.0' }) }}
              </span>
            </div>
            <h1 class="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight">
              {{ t('titlePart1') }} <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">{{ t('titlePart2') }}</span>
            </h1>
            <p class="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {{ t('description') }}
            </p>
            <div class="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <UButton
                to="https://apps.apple.com/tr/app/crossle/id6751605835"
                target="_blank"
                color="primary"
                variant="solid"
                size="xl"
                class="rounded-full font-bold text-dark-surface hover:opacity-90 px-8 py-4"
              >
                {{ t('appStore') }}
              </UButton>
              <UButton
                to="https://play.google.com/store/apps/details?id=com.dcxstudios.dcm"
                target="_blank"
                color="primary"
                variant="solid"
                size="xl"
                class="rounded-full font-bold text-dark-surface hover:opacity-90 px-8 py-4"
              >
                {{ t('googlePlay') }}
              </UButton>
            </div>
          </div>
          <div class="w-full max-w-md mx-auto rotate-5 hover:rotate-0 transition-transform duration-500">
            <NuxtImg
              src="/images/hero-mockup.png"
              alt="Crossle mobile word puzzle game screenshot showing gameplay interface"
              width="448"
              height="896"
              format="webp"
              loading="eager"
              fetchpriority="high"
              class="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white w-full border-b border-gray-200">
      <div class="container mx-auto flex justify-center py-12">
        <div class="flex flex-col gap-2 items-center pr-6">
          <div class="text-3xl text-dark-surface font-semibold">
            {{ appData?.rating || '4.8' }}/5
          </div>
          <p class="text-sm text-dark-surface">
            {{ t('rating') }}
          </p>
        </div>
        <div class="flex flex-col gap-2 items-center border-x border-gray-200 px-6">
          <div class="text-3xl text-dark-surface font-semibold">
            {{ appData?.downloads || '100+' }}
          </div>
          <p class="text-sm text-dark-surface">
            {{ t('downloads') }}
          </p>
        </div>
        <div class="flex flex-col gap-2 items-center pl-6">
          <div class="text-3xl text-dark-surface font-semibold">
            #1
          </div>
          <p class="text-sm text-dark-surface">
            {{ t('puzzleGame') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "newRelease": "New Release v{version}",
    "titlePart1": "Unleash your",
    "titlePart2": "inner genius.",
    "description": "Crossle isn't just a puzzle game. It's a daily ritual for your brain. Dive into infinite procedural levels and compete globally.",
    "appStore": "App Store",
    "googlePlay": "Google Play",
    "rating": "App Store Rating",
    "downloads": "Downloads",
    "puzzleGame": "Puzzle Game"
  },
  "tr": {
    "newRelease": "Yeni Sürüm v{version}",
    "titlePart1": "İçindeki dahiyi",
    "titlePart2": "ortaya çıkar.",
    "description": "Crossle sadece bir bulmaca oyunu değil. Beyniniz için günlük bir ritüel. Sonsuz prosedürel seviyere dalın ve küresel çapta rekabet edin.",
    "appStore": "App Store",
    "googlePlay": "Google Play",
    "rating": "App Store Puanı",
    "downloads": "İndirme",
    "puzzleGame": "Bulmaca Oyunu"
  }
}
</i18n>
