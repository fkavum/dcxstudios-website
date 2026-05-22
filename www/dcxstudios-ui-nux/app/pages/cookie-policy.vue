<script setup>
const { t, locale } = useI18n({
  useScope: 'local'
})

const lastUpdated = computed(() => {
  return new Date('2025-12-15').toLocaleDateString(locale.value === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })
})

useSeoMeta({
  title: computed(() => t('meta.title')),
  description: computed(() => t('meta.description')),
  robots: 'noindex, follow'
})
</script>

<template>
  <div class="bg-dark-surface min-h-screen pt-24 pb-20 relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

    <div class="container mx-auto px-6 relative z-10 max-w-4xl">
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{{ t('title') }}</h1>
        <p class="text-accent-gray text-lg">
          {{ t('lastUpdated') }}: {{ lastUpdated }}
        </p>
      </div>

      <div class="prose prose-invert prose-lg max-w-none text-accent-gray/80">
        <p class="lead text-xl text-white">
          {{ t('intro') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.what.title') }}</h2>
        <p>
          {{ t('sections.what.content') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.how.title') }}</h2>
        <p>
          {{ t('sections.how.content') }}
        </p>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>{{ t('sections.how.types.essential.title') }}:</strong> {{ t('sections.how.types.essential.desc') }}</li>
          <li><strong>{{ t('sections.how.types.analytics.title') }}:</strong> {{ t('sections.how.types.analytics.desc') }}</li>
          <li><strong>{{ t('sections.how.types.functionality.title') }}:</strong> {{ t('sections.how.types.functionality.desc') }}</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.thirdParty.title') }}</h2>
        <p>
          {{ t('sections.thirdParty.content') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.choices.title') }}</h2>
        <p class="mb-4">
          {{ t('sections.choices.content1') }}
        </p>
        <p>
          {{ t('sections.choices.content2') }} 
          <a href="https://www.allaboutcookies.org" target="_blank" class="text-primary hover:text-white transition-colors">wikipedia.org</a>, 
          <a href="https://www.allaboutcookies.org" target="_blank" class="text-primary hover:text-white transition-colors">www.allaboutcookies.org</a>, 
          {{ t('or') }} <a href="https://www.aboutcookies.org" target="_blank" class="text-primary hover:text-white transition-colors">www.aboutcookies.org</a>.
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('contact.title') }}</h2>
        <p>
          {{ t('contact.content') }} <a href="mailto:hello@dcxstudios.com" class="text-primary hover:text-white transition-colors">hello@dcxstudios.com</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "meta": {
      "title": "Cookie Policy | DCX Studios",
      "description": "Cookie Policy for DCX Studios. Understand how we use cookies to improve your experience."
    },
    "title": "Cookie Policy",
    "lastUpdated": "Last updated",
    "intro": "This Cookie Policy explains what cookies are, how DCX Studios uses them on our website, and what your choices are.",
    "or": "or",
    "sections": {
      "what": {
        "title": "What Are Cookies?",
        "content": "Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site."
      },
      "how": {
        "title": "How We Use Cookies",
        "content": "We use cookies for the following purposes:",
        "types": {
          "essential": {
            "title": "Essential Cookies",
            "desc": "These are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website."
          },
          "analytics": {
            "title": "Analytics Cookies",
            "desc": "These help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our website's performance and user experience."
          },
          "functionality": {
            "title": "Functionality Cookies",
            "desc": "These allow the website to remember choices you make (such as your preferred language) and provide enhanced features."
          }
        }
      },
      "thirdParty": {
        "title": "Third-Party Cookies",
        "content": "In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. These third parties may include Google Analytics, Facebook, and other service providers."
      },
      "choices": {
        "title": "Your Choices",
        "content1": "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.",
        "content2": "To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit"
      }
    },
    "contact": {
      "title": "Contact Us",
      "content": "If you have any questions about our Cookie Policy, please contact us at"
    }
  },
  "tr": {
    "meta": {
      "title": "Çerez Politikası | DCX Studios",
      "description": "DCX Studios Çerez Politikası. Deneyiminizi iyileştirmek için çerezleri nasıl kullandığımızı anlayın."
    },
    "title": "Çerez Politikası",
    "lastUpdated": "Son güncelleme",
    "intro": "Bu Çerez Politikası, çerezlerin ne olduğunu, DCX Studios'un web sitemizde bunları nasıl kullandığını ve seçeneklerinizin neler olduğunu açıklar.",
    "or": "veya",
    "sections": {
      "what": {
        "title": "Çerezler Nedir?",
        "content": "Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınızda veya mobil cihazınızda saklanan küçük metin dosyalarıdır. Web sitelerinin çalışmasını veya daha verimli çalışmasını sağlamak ve site sahiplerine bilgi sağlamak amacıyla yaygın olarak kullanılırlar."
      },
      "how": {
        "title": "Çerezleri Nasıl Kullanıyoruz",
        "content": "Çerezleri aşağıdaki amaçlar için kullanıyoruz:",
        "types": {
          "essential": {
            "title": "Zorunlu Çerezler",
            "desc": "Bunlar web sitesinin düzgün çalışması için gereklidir. Sayfa gezinme ve web sitesinin güvenli alanlarına erişim gibi temel işlevleri etkinleştirirler."
          },
          "analytics": {
            "title": "Analitik Çerezler",
            "desc": "Bunlar, ziyaretçilerin web sitemizle nasıl etkileşime girdiğini anonim olarak toplayıp raporlayarak anlamamıza yardımcı olur. Bu verileri web sitemizin performansını ve kullanıcı deneyimini iyileştirmek için kullanırız."
          },
          "functionality": {
            "title": "İşlevsellik Çerezleri",
            "desc": "Bunlar, web sitesinin yaptığınız seçimleri (tercih edilen dil gibi) hatırlamasını sağlar ve gelişmiş özellikler sunar."
          }
        }
      },
      "thirdParty": {
        "title": "Üçüncü Taraf Çerezleri",
        "content": "Kendi çerezlerimize ek olarak, Hizmetin kullanım istatistiklerini raporlamak, Hizmet üzerinde ve aracılığıyla reklamlar sunmak vb. için çeşitli üçüncü taraf çerezlerini de kullanabiliriz. Bu üçüncü taraflar arasında Google Analytics, Facebook ve diğer hizmet sağlayıcılar yer alabilir."
      },
      "choices": {
        "title": "Seçimleriniz",
        "content1": "Çerezleri dilediğiniz gibi kontrol edebilir ve/veya silebilirsiniz. Bilgisayarınızda zaten bulunan tüm çerezleri silebilir ve çoğu tarayıcıyı bunların yerleştirilmesini engelleyecek şekilde ayarlayabilirsiniz. Ancak bunu yaparsanız, bir siteyi her ziyaret ettiğinizde bazı tercihleri manuel olarak ayarlamanız gerekebilir ve bazı hizmetler ve işlevler çalışmayabilir.",
        "content2": "Çerezler hakkında daha fazla bilgi edinmek, hangi çerezlerin ayarlandığını görmek ve bunları nasıl yöneteceğinizi ve sileceğinizi öğrenmek için şu adresleri ziyaret edin:"
      }
    },
    "contact": {
      "title": "Bize Ulaşın",
      "content": "Çerez Politikamız hakkında herhangi bir sorunuz varsa, lütfen şu adresten bizimle iletişime geçin:"
    }
  }
}
</i18n>
