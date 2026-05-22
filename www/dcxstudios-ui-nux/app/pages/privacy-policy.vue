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
          {{ t('intro.p1') }}
        </p>

        <p>
          {{ t('intro.p2') }}
        </p>

        <p>
          {{ t('intro.p3') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.info.title') }}</h2>
        <p>
          {{ t('sections.info.content') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.logData.title') }}</h2>
        <p>
          {{ t('sections.logData.content') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.cookies.title') }}</h2>
        <p>
          {{ t('sections.cookies.content1') }}
        </p>
        <p>
          {{ t('sections.cookies.content2') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.providers.title') }}</h2>
        <p>
          {{ t('sections.providers.content') }}
        </p>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li>{{ t('sections.providers.list.l1') }}</li>
          <li>{{ t('sections.providers.list.l2') }}</li>
          <li>{{ t('sections.providers.list.l3') }}</li>
          <li>{{ t('sections.providers.list.l4') }}</li>
        </ul>
        <p>
          {{ t('sections.providers.disclaimer') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.security.title') }}</h2>
        <p>
          {{ t('sections.security.content') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.links.title') }}</h2>
        <p>
          {{ t('sections.links.content') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.children.title') }}</h2>
        <p>
          {{ t('sections.children.content') }}
        </p>

        <h2 class="text-2xl font-bold text-white mt-12 mb-6">{{ t('sections.changes.title') }}</h2>
        <p>
          {{ t('sections.changes.content') }}
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
      "title": "Privacy Policy | DCX Studios",
      "description": "Privacy Policy for DCX Studios. Learn how we collect, use, and protect your personal information."
    },
    "title": "Privacy Policy",
    "lastUpdated": "Last updated",
    "intro": {
      "p1": "DCX Studios operates the website https://dcxstudios.com, which provides information about our game development services and products.",
      "p2": "This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the DCX Studios website.",
      "p3": "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy."
    },
    "sections": {
      "info": {
        "title": "Information Collection and Use",
        "content": "For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, email address, and phone number. The information that we collect will be used to contact or identify you."
      },
      "logData": {
        "title": "Log Data",
        "content": "We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol (\"IP\") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics."
      },
      "cookies": {
        "title": "Cookies",
        "content1": "Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.",
        "content2": "Our website uses these \"cookies\" to collect information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service."
      },
      "providers": {
        "title": "Service Providers",
        "content": "We may employ third-party companies and individuals due to the following reasons:",
        "list": {
          "l1": "To facilitate our Service;",
          "l2": "To provide the Service on our behalf;",
          "l3": "To perform Service-related services; or",
          "l4": "To assist us in analyzing how our Service is used."
        },
        "disclaimer": "We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."
      },
      "security": {
        "title": "Security",
        "content": "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security."
      },
      "links": {
        "title": "Links to Other Sites",
        "content": "Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
      },
      "children": {
        "title": "Children's Privacy",
        "content": "Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions."
      },
      "changes": {
        "title": "Changes to This Privacy Policy",
        "content": "We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page."
      }
    },
    "contact": {
      "title": "Contact Us",
      "content": "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at"
    }
  },
  "tr": {
    "meta": {
      "title": "Gizlilik Politikası | DCX Studios",
      "description": "DCX Studios Gizlilik Politikası. Kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu öğrenin."
    },
    "title": "Gizlilik Politikası",
    "lastUpdated": "Son güncelleme",
    "intro": {
      "p1": "DCX Studios, oyun geliştirme hizmetlerimiz ve ürünlerimiz hakkında bilgi sağlayan https://dcxstudios.com web sitesini işletmektedir.",
      "p2": "Bu sayfa, web sitesi ziyaretçilerini, birisi Hizmetimizi, yani DCX Studios web sitesini kullanmaya karar verirse Kişisel Bilgilerin toplanması, kullanılması ve ifşa edilmesiyle ilgili politikalarımız hakkında bilgilendirmek için kullanılır.",
      "p3": "Hizmetimizi kullanmayı seçerseniz, bu politikayla ilgili bilgilerin toplanmasını ve kullanılmasını kabul etmiş olursunuz. Topladığımız Kişisel Bilgiler, Hizmeti sağlamak ve iyileştirmek için kullanılır. Bilgilerinizi bu Gizlilik Politikasında açıklanan durumlar dışında kimseyle kullanmayacağız veya paylaşmayacağız."
    },
    "sections": {
      "info": {
        "title": "Bilgi Toplama ve Kullanım",
        "content": "Hizmetimizi kullanırken daha iyi bir deneyim için, adınız, e-posta adresiniz ve telefon numaranız dahil ancak bunlarla sınırlı olmamak üzere bize belirli kişisel olarak tanımlanabilir bilgileri sağlamanızı isteyebiliriz. Topladığımız bilgiler sizinle iletişim kurmak veya sizi tanımlamak için kullanılacaktır."
      },
      "logData": {
        "title": "Günlük Verileri (Log Data)",
        "content": "Hizmetimizi her ziyaret ettiğinizde, tarayıcınızın bize gönderdiği ve Günlük Verileri olarak adlandırılan bilgileri topladığımızı size bildirmek isteriz. Bu Günlük Verileri, bilgisayarınızın İnternet Protokolü (\"IP\") adresi, tarayıcı sürümü, Hizmetimizin ziyaret ettiğiniz sayfaları, ziyaretinizin saati ve tarihi, bu sayfalarda geçirilen süre ve diğer istatistikler gibi bilgileri içerebilir."
      },
      "cookies": {
        "title": "Çerezler",
        "content1": "Çerezler, genellikle anonim benzersiz tanımlayıcı olarak kullanılan küçük miktarda veri içeren dosyalardır. Bunlar, ziyaret ettiğiniz web sitesinden tarayıcınıza gönderilir ve bilgisayarınızın sabit sürücüsünde saklanır.",
        "content2": "Web sitemiz bu \"çerezleri\" bilgi toplamak ve Hizmetimizi iyileştirmek için kullanır. Bu çerezleri kabul etme veya reddetme seçeneğiniz vardır ve bir çerezin bilgisayarınıza ne zaman gönderildiğini bilirsiniz. Çerezlerimizi reddetmeyi seçerseniz, Hizmetimizin bazı kısımlarını kullanamayabilirsiniz."
      },
      "providers": {
        "title": "Hizmet Sağlayıcılar",
        "content": "Aşağıdaki nedenlerden dolayı üçüncü taraf şirketleri ve bireyleri istihdam edebiliriz:",
        "list": {
          "l1": "Hizmetimizi kolaylaştırmak için;",
          "l2": "Hizmeti bizim adımıza sağlamak için;",
          "l3": "Hizmetle ilgili hizmetleri gerçekleştirmek için; veya",
          "l4": "Hizmetimizin nasıl kullanıldığını analiz etmemize yardımcı olmak için."
        },
        "disclaimer": "Hizmet kullanıcılarımızı, bu üçüncü tarafların Kişisel Bilgilerinize erişimi olduğu konusunda bilgilendirmek istiyoruz. Bunun nedeni, kendilerine verilen görevleri bizim adımıza yerine getirmektir. Ancak, bilgileri başka herhangi bir amaçla ifşa etmemek veya kullanmamakla yükümlüdürler."
      },
      "security": {
        "title": "Güvenlik",
        "content": "Kişisel Bilgilerinizi bize sağlama konusundaki güveninize değer veriyoruz, bu nedenle ticari olarak kabul edilebilir koruma yöntemlerini kullanmaya çalışıyoruz. Ancak internet üzerinden hiçbir iletim yönteminin veya elektronik depolama yönteminin %100 güvenli ve güvenilir olmadığını ve mutlak güvenliğini garanti edemeyeceğimizi unutmayın."
      },
      "links": {
        "title": "Diğer Sitelere Bağlantılar",
        "content": "Hizmetimiz diğer sitelere bağlantılar içerebilir. Bir üçüncü taraf bağlantısına tıklarsanız, o siteye yönlendirilirsiniz. Bu harici sitelerin bizim tarafımızdan işletilmediğini unutmayın. Bu nedenle, bu web sitelerinin Gizlilik Politikasını incelemenizi önemle tavsiye ederiz. Herhangi bir üçüncü taraf sitesinin veya hizmetinin içeriği, gizlilik politikaları veya uygulamaları üzerinde hiçbir kontrolümüz yoktur ve hiçbir sorumluluk kabul etmeyiz."
      },
      "children": {
        "title": "Çocukların Gizliliği",
        "content": "Hizmetlerimiz 13 yaşın altındaki kişilere hitap etmemektedir. 13 yaşın altındaki çocuklardan bilerek kişisel olarak tanımlanabilir bilgiler toplamıyoruz. 13 yaşın altındaki bir çocuğun bize kişisel bilgiler sağladığını keşfedersek, bunu derhal sunucularımızdan sileriz. Bir ebeveyn veya vasi iseniz ve çocuğunuzun bize kişisel bilgiler sağladığının farkındaysanız, gerekli işlemleri yapabilmemiz için lütfen bizimle iletişime geçin."
      },
      "changes": {
        "title": "Bu Gizlilik Politikasındaki Değişiklikler",
        "content": "Gizlilik Politikamızı zaman zaman güncelleyebiliriz. Bu nedenle, herhangi bir değişiklik olup olmadığını görmek için bu sayfayı periyodik olarak incelemenizi öneririz. Yeni Gizlilik Politikasını bu sayfada yayınlayarak sizi herhangi bir değişiklikten haberdar edeceğiz. Bu değişiklikler, bu sayfada yayınlandıktan hemen sonra geçerlilik kazanır."
      }
    },
    "contact": {
      "title": "Bize Ulaşın",
      "content": "Gizlilik Politikamız hakkında herhangi bir sorunuz veya öneriniz varsa, lütfen şu adresten bizimle iletişime geçmekten çekinmeyin:"
    }
  }
}
</i18n>
