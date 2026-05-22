// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    // '@nuxt/a11y',
    // '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/i18n',
    '@nuxtjs/seo'
  ],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap', as: 'style', onload: 'this.onload=null;this.rel=\'stylesheet\'' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap', media: 'print', onload: 'this.media=\'all\'' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  // Site-wide config — used by all Nuxt SEO sub-modules
  site: {
    url: 'https://dcxstudios.org',
    name: 'DCX Studios',
    description: 'Independent mobile game studio creating immersive experiences.',
    defaultLocale: 'en',
    trailingSlash: false
  },

  runtimeConfig: {
    public: {
      googleAnalyticsId: '' // NUXT_PUBLIC_GOOGLE_ANALYTICS_ID
    }
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

  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US' },
      { code: 'tr', name: 'Türkçe', language: 'tr-TR' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // OG Image — disabled until templates are set up
  ogImage: {
    enabled: false
  },

  // Robots — allow all crawlers including AI bots
  robots: {
    sitemap: 'https://dcxstudios.org/sitemap.xml',
    groups: [
      {
        userAgent: ['*'],
        allow: ['/']
      },
      // AI crawlers — explicitly allowed
      {
        userAgent: [
          'GPTBot', // OpenAI
          'ChatGPT-User', // ChatGPT browsing
          'Claude-Web', // Anthropic
          'anthropic-ai', // Anthropic API
          'PerplexityBot', // Perplexity
          'Applebot-Extended', // Apple AI
          'GoogleOther', // Google AI
          'Gemini', // Google Gemini
          'CCBot', // Common Crawl (used by many AI)
          'FacebookBot', // Meta AI
          'cohere-ai', // Cohere
          'Diffbot' // Diffbot AI
        ],
        allow: ['/']
      }
    ]
  },

  // Schema.org — global Organization identity
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'DCX Studios',
      url: 'https://dcxstudios.org',
      logo: 'https://dcxstudios.org/icon.png',
      description: 'Independent mobile game studio creating immersive experiences.',
      sameAs: [
        'https://x.com/dcxstudios',
        'https://www.instagram.com/dcxstudios/',
        'https://www.linkedin.com/company/dcx-studios/',
        'https://discord.gg/vsWZqhUHA8'
      ]
    }
  },

  // Sitemap — auto-discovers pages, priority overrides per route
  sitemap: {
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/games', priority: 0.8, changefreq: 'monthly' },
      { loc: '/about', priority: 0.7, changefreq: 'monthly' },
      { loc: '/contact', priority: 0.6, changefreq: 'monthly' },
      { loc: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
      { loc: '/terms', priority: 0.3, changefreq: 'yearly' },
      { loc: '/cookie-policy', priority: 0.3, changefreq: 'yearly' }
    ]
  }
})
