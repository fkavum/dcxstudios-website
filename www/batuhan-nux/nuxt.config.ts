import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],

  css: ['~/assets/css/tailwind.css', '~/assets/scss/app.scss'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
