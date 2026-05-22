<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'desktop',
    validator: (value) => ['desktop', 'mobile'].includes(value)
  }
})

const { locale, setLocale, availableLocales: locales } = useI18n()
</script>

<template>
  <!-- Desktop Variant -->
  <div
    v-if="variant === 'desktop'"
    class="hidden md:flex items-center bg-gray-100 rounded-full p-1 mr-2 relative"
  >
    <!-- Sliding Background -->
    <div
      class="absolute top-1 bottom-1 bg-white rounded-full shadow-sm transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
      :class="locale === 'en' ? 'left-1 w-[calc(50%-4px)]' : 'left-[50%] w-[calc(50%-4px)]'"
    />
    
    <button
      v-for="code in locales"
      :key="code"
      class="relative z-10 w-10 py-1.5 rounded-full text-xs font-bold transition-colors duration-300"
      :class="locale === code ? 'text-dark-surface' : 'text-gray-400 hover:text-gray-600'"
      @click="setLocale(code)"
    >
      {{ code.toUpperCase() }}
    </button>
  </div>

  <!-- Mobile Variant -->
  <div
    v-else
    class="flex gap-2 p-4 justify-center"
  >
    <div class="flex items-center bg-gray-100 rounded-full p-1 relative w-32 justify-between">
      <!-- Sliding Background -->
      <div
        class="absolute top-1 bottom-1 bg-white rounded-full shadow-sm transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        :class="locale === 'en' ? 'left-1 w-[calc(50%-4px)]' : 'left-[50%] w-[calc(50%-4px)]'"
      />
      
      <button
        v-for="code in locales"
        :key="code"
        class="relative z-10 w-full py-2 rounded-full text-sm font-bold transition-colors duration-300"
        :class="locale === code ? 'text-dark-surface' : 'text-gray-400'"
        @click="setLocale(code)"
      >
        {{ code.toUpperCase() }}
      </button>
    </div>
  </div>
</template>
