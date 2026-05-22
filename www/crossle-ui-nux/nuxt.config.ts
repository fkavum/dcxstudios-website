// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    // '@nuxt/a11y',
    // '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/seo'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  // Site config shared across all SEO modules
  site: {
    url: 'https://crossle.app',
    name: 'Crossle',
    description: 'Competitive online multiplayer word game with crossword-style PvP duels. Challenge your friends or rank up globally!',
    defaultLocale: 'en'
  },

  runtimeConfig: {
    public: {
      googleAnalyticsId: ''
    }
  },

  routeRules: {
    '/': { swr: 86400 },
    '/support': { swr: 86400 },
    '/privacy-policy': { swr: 86400 },
    '/terms': { swr: 86400 }
  },
  experimental: {
    emitRouteChunkError: 'automatic',
    payloadExtraction: false
  },
  compatibilityDate: '2025-01-15',

  nitro: {
    logLevel: process.env.LOG_LEVEL ? Number(process.env.LOG_LEVEL) : undefined,
    minify: true,
    compressPublicAssets: { gzip: true, brotli: true },
    experimental: {
      openAPI: false,
      typescriptBundlerResolution: true
    },
    prerender: {
      concurrency: 2,
      interval: 50
    },
    publicAssets: [
      {
        dir: 'public',
        maxAge: 60 * 60 * 24 * 365 // 1 year for hashed assets
      }
    ]
  },

  vite: {
    build: {
      assetsInlineLimit: 4096,
      sourcemap: false,
      minify: 'esbuild',
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.plugin === '@tailwindcss/vite:generate:build') return
          if (warning.plugin === 'nuxt:module-preload-polyfill') return
          warn(warning)
        }
      }
    },
    esbuild: {
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
    },
    optimizeDeps: {
      include: [
        '@nuxt/ui > prosemirror-state',
        '@nuxt/ui > prosemirror-transform',
        '@nuxt/ui > prosemirror-model',
        '@nuxt/ui > prosemirror-view',
        '@nuxt/ui > prosemirror-gapcursor',
        'vue',
        'vue-router'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  // OG Image
  ogImage: {
    enabled: true
  },

  // Robots: allow all crawlers including AI bots (ChatGPT, Perplexity, Claude, etc.)
  robots: {
    blockAiBots: false,
    groups: [
      {
        userAgent: ['*'],
        allow: ['/'],
        disallow: []
      }
    ]
  },

  // Schema.org identity (Organization)
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'DCX Studios',
      url: 'https://dcxstudios.org',
      logo: 'https://crossle.app/icon.webp'
    }
  },

  // Automatic SEO defaults (canonical, og:url, title templates, etc.)
  seo: {
    automaticDefaults: true,
    fallbackTitle: true
  },

  // Sitemap with per-route priorities
  sitemap: {
    cacheMaxAgeSeconds: 3600
  }
})
