<script setup>
const { t } = useI18n({
  useScope: 'local'
})

useSeoMeta({
  title: 'Contact Us - DCX Studios',
  description: 'Get in touch with DCX Studios. Report bugs, share feedback, or propose collaborations.',
  ogTitle: 'Contact Us - DCX Studios',
  ogDescription: 'Get in touch with DCX Studios. Report bugs, share feedback, or propose collaborations.',
  ogUrl: 'https://dcxstudios.org/contact'
})

// X: https://x.com/dcxstudios
// Instagram: https://www.instagram.com/dcxstudios/
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

// Form — hazır olduğunda açılacak
// const formData = ref({ name: '', email: '', subject: '', message: '' })
// const isSubmitting = ref(false)
// const submitStatus = ref(null)
// const errorMessage = ref('')
// async function handleSubmit() { ... }
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-dark-surface text-white py-20 lg:py-32 overflow-hidden">
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-6">
            <UIcon name="i-heroicons-chat-bubble-left-right" class="w-4 h-4" />
            <span class="text-sm font-medium">{{ t('getInTouch') }}</span>
          </div>

          <h1 class="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            {{ t('heroTitle') }}
          </h1>

          <p class="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            {{ t('heroDescription') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="py-20 bg-background-light">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a
            v-for="method in contactMethods"
            :key="method.title"
            :href="method.link"
            target="_blank"
            class="group p-8 rounded-3xl bg-white border border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
          >
            <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <UIcon :name="method.icon" class="w-8 h-8 text-primary" />
            </div>
            <h3 class="text-lg font-bold text-dark-surface mb-2">
              {{ t(method.title) }}
            </h3>
            <p class="text-dark-surface/70">
              {{ method.value }}
            </p>
          </a>
        </div>
      </div>
    </section>

    <!--
    <section class="py-20 lg:py-32 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl lg:text-5xl font-black text-dark-surface mb-4">{{ t('sendMessage') }}</h2>
            <p class="text-lg text-dark-surface/60">{{ t('formDescription') }}</p>
          </div>
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-dark-surface mb-2">{{ t('name') }} *</label>
                <input id="name" v-model="formData.name" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" :placeholder="t('namePlaceholder')">
              </div>
              <div>
                <label for="email" class="block text-sm font-semibold text-dark-surface mb-2">{{ t('email') }} *</label>
                <input id="email" v-model="formData.email" type="email" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" :placeholder="t('emailPlaceholder')">
              </div>
            </div>
            <div>
              <label for="subject" class="block text-sm font-semibold text-dark-surface mb-2">{{ t('subject') }} *</label>
              <input id="subject" v-model="formData.subject" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" :placeholder="t('subjectPlaceholder')">
            </div>
            <div>
              <label for="message" class="block text-sm font-semibold text-dark-surface mb-2">{{ t('message') }} *</label>
              <textarea id="message" v-model="formData.message" required rows="6" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" :placeholder="t('messagePlaceholder')" />
            </div>
            <div v-if="submitStatus === 'success'" class="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800">
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5" />
                <span class="font-semibold">{{ t('successMessage') }}</span>
              </div>
            </div>
            <div v-if="submitStatus === 'error'" class="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
              <div class="flex items-start gap-2">
                <UIcon name="i-heroicons-x-circle" class="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p class="font-semibold">{{ t('errorMessage') }}</p>
                  <p v-if="errorMessage" class="text-sm mt-1">{{ errorMessage }}</p>
                </div>
              </div>
            </div>
            <button type="submit" :disabled="isSubmitting" class="w-full py-4 px-8 rounded-full bg-primary text-dark-surface font-bold text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              <span v-if="!isSubmitting">{{ t('sendButton') }}</span>
              <span v-else class="flex items-center justify-center gap-2">
                <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 animate-spin" />
                {{ t('sending') }}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="py-20 bg-background-light">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl lg:text-5xl font-black text-dark-surface mb-4">{{ t('faq') }}</h2>
            <p class="text-lg text-dark-surface/60">{{ t('faqDescription') }}</p>
          </div>
          <div class="space-y-4">
            <details class="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary transition-colors">
              <summary class="flex items-center justify-between cursor-pointer font-bold text-dark-surface">{{ t('faq1Question') }}<UIcon name="i-heroicons-chevron-down" class="w-5 h-5 group-open:rotate-180 transition-transform" /></summary>
              <p class="mt-4 text-dark-surface/70 leading-relaxed">{{ t('faq1Answer') }}</p>
            </details>
            <details class="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary transition-colors">
              <summary class="flex items-center justify-between cursor-pointer font-bold text-dark-surface">{{ t('faq2Question') }}<UIcon name="i-heroicons-chevron-down" class="w-5 h-5 group-open:rotate-180 transition-transform" /></summary>
              <p class="mt-4 text-dark-surface/70 leading-relaxed">{{ t('faq2Answer') }}</p>
            </details>
            <details class="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary transition-colors">
              <summary class="flex items-center justify-between cursor-pointer font-bold text-dark-surface">{{ t('faq3Question') }}<UIcon name="i-heroicons-chevron-down" class="w-5 h-5 group-open:rotate-180 transition-transform" /></summary>
              <p class="mt-4 text-dark-surface/70 leading-relaxed">{{ t('faq3Answer') }}</p>
            </details>
          </div>
        </div>
      </div>
    </section>
    -->
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "getInTouch": "Get In Touch",
    "heroTitle": "Let's Talk",
    "heroDescription": "Have a question, feedback, or just want to say hi? We'd love to hear from you.",
    "email": "Email",
    "discord": "Discord",
    "linkedin": "LinkedIn",
    "sendMessage": "Send Us a Message",
    "formDescription": "Fill out the form below and we'll respond within 24 hours",
    "name": "Name",
    "namePlaceholder": "Your name",
    "emailPlaceholder": "your.email{'@'}example.com",
    "subject": "Subject",
    "subjectPlaceholder": "What's this about?",
    "message": "Message",
    "messagePlaceholder": "Tell us what's on your mind...",
    "sendButton": "Send Message",
    "sending": "Sending...",
    "successMessage": "Thanks! We've received your message and will get back to you soon.",
    "errorMessage": "Oops! Something went wrong. Please try again or email us directly.",
    "faq": "Frequently Asked Questions",
    "faqDescription": "Quick answers to common questions",
    "faq1Question": "How can I report a bug in one of your games?",
    "faq1Answer": "We appreciate bug reports! Please use the contact form above with 'Bug Report' as the subject, and include as much detail as possible about the issue, including your device model and OS version.",
    "faq2Question": "Do you accept game ideas or collaboration proposals?",
    "faq2Answer": "We love hearing creative ideas! While we can't implement every suggestion, we're always open to collaboration opportunities. Send us your proposal via the contact form.",
    "faq3Question": "When will your next game be released?",
    "faq3Answer": "We're currently working on exciting new projects! Follow us on social media or check our Games page regularly for updates on upcoming releases."
  },
  "tr": {
    "getInTouch": "İletişime Geçin",
    "heroTitle": "Konuşalım",
    "heroDescription": "Bir sorunuz, geri bildiriminiz var mı yoksa sadece merhaba mı demek istiyorsunuz? Sizden haber almayı çok isteriz.",
    "email": "E-posta",
    "discord": "Discord",
    "linkedin": "LinkedIn",
    "sendMessage": "Bize Mesaj Gönderin",
    "formDescription": "Aşağıdaki formu doldurun, 24 saat içinde yanıt verelim",
    "name": "İsim",
    "namePlaceholder": "Adınız",
    "emailPlaceholder": "eposta{'@'}ornek.com",
    "subject": "Konu",
    "subjectPlaceholder": "Ne hakkında?",
    "message": "Mesaj",
    "messagePlaceholder": "Aklınızdan geçenleri bize anlatın...",
    "sendButton": "Mesaj Gönder",
    "sending": "Gönderiliyor...",
    "successMessage": "Teşekkürler! Mesajınızı aldık ve en kısa sürede size geri döneceğiz.",
    "errorMessage": "Hata! Bir şeyler ters gitti. Lütfen tekrar deneyin veya bize doğrudan e-posta gönderin.",
    "faq": "Sıkça Sorulan Sorular",
    "faqDescription": "Yaygın sorulara hızlı yanıtlar",
    "faq1Question": "Oyunlarınızdan birindeki bir hatayı nasıl bildirebilirim?",
    "faq1Answer": "Hata raporlarını takdir ediyoruz! Lütfen yukarıdaki iletişim formunu 'Hata Raporu' konusuyla kullanın ve cihaz modeliniz ve işletim sistemi sürümünüz dahil olmak üzere sorun hakkında mümkün olduğunca fazla ayrıntı ekleyin.",
    "faq2Question": "Oyun fikirleri veya işbirliği teklifleri kabul ediyor musunuz?",
    "faq2Answer": "Yaratıcı fikirleri duymayı seviyoruz! Her öneriyi uygulayamasak da, işbirliği fırsatlarına her zaman açığız. Teklifinizi iletişim formu aracılığıyla bize gönderin.",
    "faq3Question": "Bir sonraki oyununuz ne zaman çıkacak?",
    "faq3Answer": "Şu anda heyecan verici yeni projeler üzerinde çalışıyoruz! Yaklaşan sürümler hakkında güncellemeler için bizi sosyal medyada takip edin veya Oyunlar sayfamızı düzenli olarak kontrol edin."
  }
}
</i18n>
