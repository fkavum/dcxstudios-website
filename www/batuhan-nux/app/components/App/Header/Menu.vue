<template>
  <!-- Desktop Navigation -->
  <nav class="hidden md:block">
    <ul class="flex space-x-6">
      <li v-for="item in menuItems" :key="item.title">
        <NuxtLink
          :to="item.link"
          class="text-dark-surface hover:text-dark-surface/70 transition-colors duration-200 font-medium"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>

  <!-- Mobile Navigation Overlay -->
  <Transition name="fade">
    <div
      v-if="isMobileOpen"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
      @click="$emit('close')"
    />
  </Transition>

  <!-- Mobile Navigation Drawer -->
  <Transition name="slide">
    <nav
      v-if="isMobileOpen"
      class="fixed top-0 left-0 right-0 h-screen bg-white z-[70] md:hidden overflow-y-auto pt-[73px]"
    >
      <ul class="flex flex-col p-6 space-y-1">
        <li v-for="item in menuItems" :key="item.title">
          <NuxtLink
            :to="item.link"
            class="block text-dark-surface hover:text-primary transition-colors duration-200 font-semibold text-lg py-4 px-4 rounded-xl hover:bg-gray-50 active:bg-gray-100"
            @click="$emit('close')"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
        <li class="pt-6">
          <InputButton variant="primary" class="w-full justify-center text-base py-3">
            Play Crossle
          </InputButton>
        </li>
      </ul>
    </nav>
  </Transition>
</template>

<script lang="ts" setup>
defineProps<{
  isMobileOpen: boolean;
}>();

defineEmits<{
  close: [];
}>();

const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Services', link: '/services' },
  { title: 'Contact', link: '/contact' },
];
</script>

<style scoped>
/* Fade Transition for Overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide Transition for Drawer */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>
