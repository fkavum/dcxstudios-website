<script setup>
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <section class="py-24 lg:py-32 bg-dark-surface relative overflow-hidden text-white">
    <!-- Arkaplan Efektleri -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

    <div class="container mx-auto px-6 relative z-10">
      <div class="rounded-3xl bg-white/5 border border-white/10 p-8 lg:p-16 backdrop-blur-sm shadow-2xl overflow-hidden relative">
        <!-- Dekoratif Çizgiler -->
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
        
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mb-6">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span class="text-xs font-bold text-primary uppercase tracking-wider">
                {{ t('communityTag') }}
              </span>
            </div>
            
            <h2 class="text-4xl lg:text-5xl font-black mb-6 tracking-tight">
              {{ t('title') }} <span class="text-primary">{{ t('titleHighlight') }}</span>
            </h2>
            
            <p class="text-lg text-white/70 mb-8 leading-relaxed max-w-md">
              {{ t('description') }}
            </p>

            <!-- X: https://x.com/dcxstudios -->
            <!-- Instagram: https://www.instagram.com/dcxstudios/ -->
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton
                to="https://discord.gg/vsWZqhUHA8"
                target="_blank"
                color="primary"
                variant="solid"
                size="xl"
                class="rounded-full font-bold text-dark-surface hover:scale-105 transition-transform duration-200 justify-center"
              >
                <UIcon name="i-simple-icons-discord" class="w-5 h-5 mr-2" />
                {{ t('joinDiscord') }}
              </UButton>

              <UButton
                to="https://www.linkedin.com/company/dcx-studios/"
                target="_blank"
                color="white"
                variant="outline"
                size="xl"
                class="rounded-full font-bold text-white hover:bg-white/10 hover:border-white transition-all duration-200 justify-center"
              >
                <UIcon name="i-simple-icons-linkedin" class="w-5 h-5 mr-2" />
                {{ t('followLinkedIn') }}
              </UButton>
            </div>
          </div>

          <div class="relative lg:h-full min-h-[300px] flex items-center justify-center">
             <!-- Soyut Topluluk Görseli / İkonu -->
             <div class="relative w-64 h-64">
                <div class="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20" style="animation-duration: 3s;" />
                <div class="absolute inset-4 bg-primary/20 rounded-full animate-ping opacity-40" style="animation-duration: 3s; animation-delay: 0.5s;" />
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-32 h-32 bg-gradient-to-br from-primary to-orange-400 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl shadow-primary/30 z-10 hover:rotate-6 transition-transform duration-500">
                        <UIcon name="i-heroicons-user-group" class="w-16 h-16 text-dark-surface" />
                    </div>
                    <!-- Arka kartlar -->
                    <div class="absolute w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl -rotate-6 scale-90 z-0 border border-white/20" />
                    <div class="absolute w-32 h-32 bg-white/5 backdrop-blur-md rounded-3xl rotate-[30deg] scale-75 -z-10 border border-white/10" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "communityTag": "Join the Community",
    "title": "Be Part of the",
    "titleHighlight": "Journey",
    "description": "We are building the next generation of puzzle games. Follow us on social media for behind-the-scenes, updates, and upcoming titles.",
    "joinDiscord": "Join Discord",
    "followLinkedIn": "Follow on LinkedIn"
  },
  "tr": {
    "communityTag": "Topluluğa Katıl",
    "title": "Yolculuğun Bir",
    "titleHighlight": "Parçası Ol",
    "description": "Yeni nesil bulmaca oyunları geliştiriyoruz. Kamera arkası görüntüler, güncellemeler ve gelecek oyunlar için bizi sosyal medyada takip et.",
    "joinDiscord": "Discord'a Katıl",
    "followLinkedIn": "LinkedIn'de Takip Et"
  }
}
</i18n>
