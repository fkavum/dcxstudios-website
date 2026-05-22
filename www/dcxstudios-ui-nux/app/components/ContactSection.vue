<script setup>
const { t } = useI18n({
  useScope: 'local'
})

const contactMethods = [
  {
    icon: 'i-heroicons-envelope',
    title: 'email',
    value: 'dcxstudios@gmail.com',
    link: 'mailto:dcxstudios@gmail.com'
  },
  {
    icon: 'i-simple-icons-discord',
    title: 'discord',
    value: 'discord.gg/vsWZqhUHA8',
    link: 'https://discord.gg/vsWZqhUHA8'
  },
  {
    icon: 'i-simple-icons-linkedin',
    title: 'linkedin',
    value: 'dcx-studios',
    link: 'https://www.linkedin.com/company/dcx-studios/'
  }
]

// X: https://x.com/dcxstudios
// Instagram: https://www.instagram.com/dcxstudios/
</script>

<template>
  <section
    id="contact"
    class="py-20 lg:py-32 bg-background-light"
  >
    <div class="container mx-auto px-6">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-surface/5 border border-dark-surface/10 mb-6">
          <UIcon
            name="i-heroicons-chat-bubble-left-right"
            class="w-4 h-4 text-dark-surface/60"
          />
          <span class="text-sm font-medium text-dark-surface/60">{{ t('getInTouch') }}</span>
        </div>

        <h2 class="text-4xl lg:text-5xl font-black tracking-tight text-dark-surface mb-4">
          {{ t('title') }}
        </h2>
        <p class="text-lg text-dark-surface/60">
          {{ t('subtitle') }}
        </p>
      </div>

      <!-- Contact Methods -->
      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <a
          v-for="method in contactMethods"
          :key="method.title"
          :href="method.link"
          target="_blank"
          class="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center"
        >
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
            <UIcon
              :name="method.icon"
              class="w-6 h-6 text-primary"
            />
          </div>
          <h3 class="text-sm font-bold text-dark-surface mb-1">
            {{ t(method.title) }}
          </h3>
          <p class="text-dark-surface/60 text-sm">
            {{ method.value }}
          </p>
        </a>
      </div>

      <!--
      <div class="max-w-3xl mx-auto mt-16">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          ... form alanları buraya gelecek ...
        </form>
      </div>
      -->
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "getInTouch": "Get In Touch",
    "title": "Let's Talk",
    "subtitle": "Have a question, feedback, or just want to say hi? We'd love to hear from you.",
    "email": "Email",
    "discord": "Discord",
    "linkedin": "LinkedIn"
  },
  "tr": {
    "getInTouch": "İletişime Geçin",
    "title": "Konuşalım",
    "subtitle": "Bir sorunuz, geri bildiriminiz var mı yoksa sadece merhaba mı demek istiyorsunuz? Sizden haber almayı çok isteriz.",
    "email": "E-posta",
    "discord": "Discord",
    "linkedin": "LinkedIn"
  }
}
</i18n>
