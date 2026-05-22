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

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.conditions.title') }}</h2>
        <p>
          {{ t('sections.conditions.content') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.ip.title') }}</h2>
        <p>
          {{ t('sections.ip.content1') }}
        </p>
        <p>
          {{ t('sections.ip.content2') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.accounts.title') }}</h2>
        <p>
          {{ t('sections.accounts.content1') }}
        </p>
        <p>
          {{ t('sections.accounts.content2') }}
        </p>
        <p>
          {{ t('sections.accounts.content3') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.law.title') }}</h2>
        <p>
          {{ t('sections.law.content') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.indemnification.title') }}</h2>
        <p>
          {{ t('sections.indemnification.content') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.liability.title') }}</h2>
        <p>
          {{ t('sections.liability.content1') }}
        </p>
        <p>
          {{ t('sections.liability.content2') }}
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
      "title": "Terms of Service | DCX Studios",
      "description": "Terms of Service for DCX Studios. Read our conditions of use, intellectual property rights, and user responsibilities."
    },
    "title": "Terms of Service",
    "lastUpdated": "Last updated",
    "intro": "Please read these terms and conditions carefully before using the https://dcxstudios.com website operated by DCX Studios.",
    "sections": {
      "conditions": {
        "title": "Conditions of Use",
        "content": "By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the website accordingly. DCX Studios only grants use and access of this website, its products, and its services to those who have accepted its terms."
      },
      "ip": {
        "title": "Intellectual Property",
        "content1": "You agree that all materials, products, and services provided on this website are the property of DCX Studios, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the DCX Studios’s intellectual property in any way, including electronic, digital, or new trademark registrations.",
        "content2": "You grant DCX Studios a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement."
      },
      "accounts": {
        "title": "User Accounts",
        "content1": "As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.",
        "content2": "If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly.",
        "content3": "We reserve all rights to terminate accounts, edit or remove content and cancel orders at our sole discretion."
      },
      "law": {
        "title": "Applicable Law",
        "content": "By visiting this website, you agree that the laws of Turkey, without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between DCX Studios and you, or its business partners and associates."
      },
      "indemnification": {
        "title": "Indemnification",
        "content": "You agree to indemnify DCX Studios and its affiliates and hold DCX Studios harmless against legal claims and demands that may arise from your use or misuse of our services. We reserve the right to select our own legal counsel."
      },
      "liability": {
        "title": "Limitation on Liability",
        "content1": "DCX Studios is not liable for any damages that may occur to you as a result of your misuse of our website.",
        "content2": "DCX Studios reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between DCX Studios and the user, and this supersedes and replaces all prior agreements regarding the use of this website."
      }
    },
    "contact": {
      "title": "Contact Us",
      "content": "If you have any questions or suggestions about our Terms of Service, do not hesitate to contact us at"
    }
  },
  "tr": {
    "meta": {
      "title": "Kullanım Koşulları | DCX Studios",
      "description": "DCX Studios Kullanım Koşulları. Kullanım şartlarımızı, fikri mülkiyet haklarını ve kullanıcı sorumluluklarını okuyun."
    },
    "title": "Kullanım Koşulları",
    "lastUpdated": "Son güncelleme",
    "intro": "DCX Studios tarafından işletilen https://dcxstudios.com web sitesini kullanmadan önce lütfen bu şartlar ve koşulları dikkatlice okuyun.",
    "sections": {
      "conditions": {
        "title": "Kullanım Şartları",
        "content": "Bu web sitesini kullanarak, bu Sözleşmeyi okuyup incelediğinizi ve şartlarına uymayı kabul ettiğinizi beyan edersiniz. Bu Sözleşmenin şartlarına bağlı kalmak istemiyorsanız, web sitesini kullanmayı bırakmanız önerilir. DCX Studios, bu web sitesinin, ürünlerinin ve hizmetlerinin kullanımını ve erişimini yalnızca şartlarını kabul edenlere verir."
      },
      "ip": {
        "title": "Fikri Mülkiyet",
        "content1": "Bu web sitesinde sağlanan tüm materyallerin, ürünlerin ve hizmetlerin DCX Studios'un, iştiraklerinin, yöneticilerinin, memurlarının, çalışanlarının, aracılarının, tedarikçilerinin veya lisans verenlerinin mülkiyetinde olduğunu, tüm telif hakları, ticari sırlar, ticari markalar, patentler ve diğer fikri mülkiyet hakları dahil olmak üzere kabul edersiniz. Ayrıca, DCX Studios'un fikri mülkiyetini elektronik, dijital veya yeni ticari marka tescilleri dahil olmak üzere hiçbir şekilde çoğaltmayacağınızı veya yeniden dağıtmayacağınızı kabul edersiniz.",
        "content2": "Yüklediğiniz ve yayınladığınız içeriği görüntülemek, kullanmak, kopyalamak, iletmek ve yayınlamak için DCX Studios'a telifsiz ve münhasır olmayan bir lisans verirsiniz. Fikri mülkiyet talepleriyle ilgili sorunlar için şirketle iletişime geçerek bir anlaşmaya varmalısınız."
      },
      "accounts": {
        "title": "Kullanıcı Hesapları",
        "content1": "Bu web sitesinin bir kullanıcısı olarak, bize kaydolmanız ve özel bilgiler vermeniz istenebilir. Bu bilgilerin doğruluğundan siz sorumlusunuz ve tanımlayıcı bilgilerinizin güvenliğini ve emniyetini sağlamaktan da siz sorumlusunuz. Ayrıca hesabınız veya şifreniz altında gerçekleşen tüm faaliyetlerden de siz sorumlusunuz.",
        "content2": "Web sitesindeki hesabınızın güvenliğiyle ilgili olası bir sorun olduğunu düşünüyorsanız, derhal bize bildirin ki buna göre ele alabilelim.",
        "content3": "Hesapları feshetme, içeriği düzenleme veya kaldırma ve siparişleri iptal etme hakkımız tamamen kendi takdirimize bağlı olarak saklıdır."
      },
      "law": {
        "title": "Uygulanacak Hukuk",
        "content": "Bu web sitesini ziyaret ederek, Türkiye yasalarının, kanunlar ihtilafı ilkelerine bakılmaksızın, bu şartlar ve koşulları veya DCX Studios ile sizin veya iş ortakları ve iştirakleri arasında doğabilecek her türlü anlaşmazlığı yöneteceğini kabul edersiniz."
      },
      "indemnification": {
        "title": "Tazminat",
        "content": "DCX Studios'u ve iştiraklerini tazmin etmeyi ve hizmetlerimizi kullanımınızdan veya kötüye kullanımınızdan kaynaklanabilecek yasal iddialara ve taleplere karşı DCX Studios'u zarar görmemesini sağlamayı kabul edersiniz. Kendi hukuk danışmanımızı seçme hakkımız saklıdır."
      },
      "liability": {
        "title": "Sorumluluk Sınırlaması",
        "content1": "DCX Studios, web sitemizi kötüye kullanmanızın bir sonucu olarak size gelebilecek herhangi bir zarardan sorumlu değildir.",
        "content2": "DCX Studios, bu Sözleşmeyi herhangi bir zamanda düzenleme, değiştirme ve modifiye etme hakkını saklı tutar. Bu değişiklikleri kullanıcılarımıza elektronik posta yoluyla bildireceğiz. Bu Sözleşme, DCX Studios ile kullanıcı arasındaki bir anlaşmadır ve bu web sitesinin kullanımına ilişkin önceki tüm anlaşmaların yerini alır."
      }
    },
    "contact": {
      "title": "Bize Ulaşın",
      "content": "Kullanım Koşullarımız hakkında herhangi bir sorunuz veya öneriniz varsa, lütfen şu adresten bizimle iletişime geçmekten çekinmeyin:"
    }
  }
}
</i18n>
