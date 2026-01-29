<template>
  <header
    class="w-full backdrop-blur bg-white/95 border-b border-gray-200 sticky top-0 z-[80]"
  >
    <div class="container mx-auto px-4 lg:px-6 py-3 lg:py-4 flex items-center justify-between relative z-[80]">
      <AppLogo />
      <AppHeaderMenu :is-mobile-open="isMobileMenuOpen" @close="closeMobileMenu" />
      <div class="flex items-center gap-3">
        <InputButton variant="primary" class="hidden md:flex">Play Crossle</InputButton>
        <button
          type="button"
          class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-[80]"
          aria-label="Toggle menu"
          @click="toggleMobileMenu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="w-6 h-6 text-dark-surface"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="w-6 h-6 text-dark-surface"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
