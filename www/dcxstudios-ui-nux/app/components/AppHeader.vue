<script setup>
const { t } = useI18n({
  useScope: 'local'
})

const isOpen = ref(false)

const navLinks = [
  { to: '/#about', label: 'about' },
  { to: '/#gallery-app', label: 'gallery' },
  { to: '/#contact', label: 'contact' }
]

function toggleMenu() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

function closeMenu() {
  isOpen.value = false
  document.body.style.overflow = ''
}

// Watch for route changes to close menu
const route = useRoute()
watch(() => route.fullPath, () => {
  closeMenu()
})
</script>

<template>
  <header class="w-full backdrop-blur-md bg-white/95 border-b border-gray-200 sticky top-0 z-[80]">
    <div class="container mx-auto px-4 lg:px-6 py-3 lg:py-4 flex items-center justify-between relative z-[80]">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex gap-2 items-center"
      >
        <div class="size-12 rounded-full flex items-center justify-center text-primary bg-dark-surface">
          <UIcon
            name="i-heroicons-cube-transparent"
            class="w-8 h-8"
          />
        </div>
        <div class="font-bold text-xl">DCX Studios</div>
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:block">
        <ul class="flex space-x-6">
          <li
            v-for="link in navLinks"
            :key="link.to"
          >
            <NuxtLink
              :to="link.to"
              class="text-dark-surface hover:text-dark-surface/70 transition-colors duration-200 font-medium"
            >
              {{ t(link.label) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-3">
        <!-- Desktop Language Switcher -->
        <LanguageSwitcher variant="desktop" />

        <!-- Mobile Menu Toggle -->
        <button
          type="button"
          class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-[80]"
          aria-label="Toggle menu"
          @click="toggleMenu"
        >
          <UIcon
            v-if="!isOpen"
            name="i-heroicons-bars-3"
            class="w-6 h-6 text-dark-surface"
          />
          <UIcon
            v-else
            name="i-heroicons-x-mark"
            class="w-6 h-6 text-dark-surface"
          />
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Menu Overlay & Drawer -->
  <div
    class="mobile-menu-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
    :class="{ open: isOpen }"
    @click="toggleMenu"
  />
  <nav
    class="mobile-menu-drawer fixed top-0 left-0 right-0 h-screen bg-white z-[70] md:hidden overflow-y-auto pt-[73px]"
    :class="{ open: isOpen }"
  >
    <ul class="flex flex-col p-6 space-y-1">
      <li
        v-for="link in navLinks"
        :key="link.to"
      >
        <NuxtLink
          :to="link.to"
          class="block text-dark-surface hover:text-primary transition-colors duration-200 font-semibold text-lg py-4 px-4 rounded-xl hover:bg-gray-50 active:bg-gray-100"
          @click="toggleMenu"
        >
          {{ t(link.label) }}
        </NuxtLink>
      </li>
      <li class="pt-6 border-t border-gray-100 mt-2">
        <LanguageSwitcher variant="mobile" />
      </li>
    </ul>
  </nav>
</template>

<i18n lang="json">
{
  "en": {
    "gallery": "Gallery",
    "game": "Play",
    "about": "About",
    "contact": "Contact",
    "playCrossle": "Play Crossle"
  },
  "tr": {
    "features": "Özellikler",
    "gallery": "Galeri",
    "game": "Oyna",
    "about": "Hakkımızda",
    "contact": "İletişim",
    "playCrossle": "Crossle Oyna"
  }
}
</i18n>
