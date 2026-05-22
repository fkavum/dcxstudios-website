<script setup>
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <footer class="bg-dark-surface border-t border-white/10 pt-16 pb-8 text-white relative overflow-hidden">
    <!-- Dekoratif Arkaplan -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        <!-- Logo ve Açıklama (4 birim) -->
        <div class="lg:col-span-4 flex flex-col gap-6">
          <NuxtLink
            to="/"
            class="flex gap-2 items-center"
          >
            <div class="size-10 rounded-full flex items-center justify-center text-dark-surface bg-white">
              <UIcon
                name="i-heroicons-cube-transparent"
                class="w-6 h-6"
              />
            </div>
            <div class="font-bold text-xl tracking-tight">DCX Studios</div>
          </NuxtLink>
          <p class="text-accent-gray/60 leading-relaxed max-w-sm">
            {{ t('description') }}
          </p>
          <div class="flex gap-4">
            <!-- X: https://x.com/dcxstudios -->
            <!-- Instagram: https://www.instagram.com/dcxstudios/ -->
            <UButton
              to="https://www.linkedin.com/company/dcx-studios/"
              target="_blank"
              color="white"
              variant="ghost"
              class="hover:bg-white/10 text-white"
              icon="i-simple-icons-linkedin"
              aria-label="LinkedIn"
            />
            <UButton
              to="https://discord.gg/vsWZqhUHA8"
              target="_blank"
              color="white"
              variant="ghost"
              class="hover:bg-white/10 text-white"
              icon="i-simple-icons-discord"
              aria-label="Discord"
            />
          </div>
        </div>

        <!-- Boşluk (1 birim) -->
        <div class="hidden lg:block lg:col-span-1" />

        <!-- Footer Linkleri (Keşfet) -->
        <div class="lg:col-span-2">
          <h4 class="font-bold text-lg mb-6 text-white">{{ t('explore') }}</h4>
          <ul class="flex flex-col gap-4">
            <li><NuxtLink to="/about" class="text-accent-gray/60 hover:text-primary transition-colors">{{ t('about') }}</NuxtLink></li>
            <li><NuxtLink to="/games" class="text-accent-gray/60 hover:text-primary transition-colors">{{ t('games') }}</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-accent-gray/60 hover:text-primary transition-colors">{{ t('contact') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Footer Linkleri (Yasal) -->
        <div class="lg:col-span-2">
          <h4 class="font-bold text-lg mb-6 text-white">{{ t('legal') }}</h4>
          <ul class="flex flex-col gap-4">
            <li><NuxtLink to="/privacy-policy" class="text-accent-gray/60 hover:text-primary transition-colors">{{ t('privacy') }}</NuxtLink></li>
            <li><NuxtLink to="/terms" class="text-accent-gray/60 hover:text-primary transition-colors">{{ t('terms') }}</NuxtLink></li>
            <li><NuxtLink to="/cookie-policy" class="text-accent-gray/60 hover:text-primary transition-colors">{{ t('cookies') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- İletişim (3 birim) -->
        <div class="lg:col-span-3">
          <h4 class="font-bold text-lg mb-6 text-white">{{ t('getInTouch') }}</h4>
          <p class="text-accent-gray/60 mb-2">{{ t('emailUs') }}</p>
          <a href="mailto:dcxstudios@gmail.com" class="text-primary hover:text-white transition-colors font-medium text-lg">dcxstudios@gmail.com</a>
        </div>
      </div>

      <!-- Alt Telif Hakkı -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-accent-gray/40 text-sm">
          &copy; {{ new Date().getFullYear() }} DCX Studios. {{ t('copyright') }}
        </p>
        <p class="text-accent-gray/40 text-xs">
          Made with ❤️ for gamers.
        </p>
      </div>
    </div>
  </footer>
</template>

<i18n lang="json">
{
  "en": {
    "description": "Creating memorable digital experiences. Follow us on our journey to redefine mobile gaming.",
    "copyright": "All rights reserved.",
    "explore": "Explore",
    "legal": "Legal",
    "about": "About Us",
    "games": "Our Games",
    "contact": "Contact",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "cookies": "Cookie Policy",
    "getInTouch": "Get in Touch",
    "emailUs": "Have a question? Email us at"
  },
  "tr": {
    "description": "Unutulmaz dijital deneyimler yaratıyoruz. Mobil oyunculuğu yeniden tanımlama yolculuğumuzda bizi takip edin.",
    "copyright": "Tüm hakları saklıdır.",
    "explore": "Keşfet",
    "legal": "Yasal",
    "about": "Hakkımızda",
    "games": "Oyunlarımız",
    "contact": "İletişim",
    "privacy": "Gizlilik Politikası",
    "terms": "Kullanım Koşulları",
    "cookies": "Çerez Politikası",
    "getInTouch": "İletişime Geçin",
    "emailUs": "Bir sorunuz mu var? Bize yazın"
  }
}
</i18n>
