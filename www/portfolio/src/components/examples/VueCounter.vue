<template>
  <div class="bg-emerald-900 p-6 rounded-xl border border-emerald-700 text-center">
    <h3 class="text-xl font-bold text-emerald-300 mb-2">Ben Bir Vue Bileşeniyim!</h3>
    <p class="text-white mb-4">Sayaç: {{ count }}</p>
    <button 
      @click="count++" 
      class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded transition-colors"
    >
      Vue Sayacını Arttır
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>