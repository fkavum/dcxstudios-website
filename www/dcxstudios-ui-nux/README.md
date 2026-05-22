# DCX Studios Website

DCX Studios'un kurumsal web sitesi projesi. Bu proje, oyun stüdyomuzun oyunlarını, hakkımızda bilgilerini ve iletişim kanallarını sergilemek amacıyla Nuxt 4 ve Tailwind CSS kullanılarak geliştirilmiştir.

## 📂 Proje Yapısı

Proje standart Nuxt dosya yapısını takip eder:

- **`app/`**: Uygulamanın ana frontend kodları (Sayfalar, Componentler, Layoutlar).
  - `components/`: Tekrar kullanılabilir Vue bileşenleri.
  - `pages/`: Uygulamanın sayfaları ve yönlendirme yapısı.
  - `layouts/`: Sayfa şablonları.
- **`server/`**: Backend API rotaları (örn. `/api/contact` iletişim formu endpoint'i).
- **`public/`**: Statik dosyalar (görseller, favicon vb.).
- **`assets/`**: Derlenen stil (CSS) dosyaları.
- **`nuxt.config.ts`**: Nuxt konfigürasyon dosyası.

## 🚀 Geliştirme (Local Development)

Projeyi yerel ortamınızda geliştirip çalıştırmak için aşağıdaki adımları izleyin:

1. **Bağımlılıkları Yükleyin:**
   ```bash
   pnpm install
   ```
   *(Eğer pnpm yüklü değilse `npm install -g pnpm` komutu ile yükleyebilirsiniz)*

2. **Çevresel Değişkenleri Ayarlayın (.env):**
   Proje ana dizinindeki `.env.example` dosyasının adını `.env` olarak değiştirin ve gerekli değerleri girin:
   ```env
   # Email gönderimi için Resend API Key (Gerekli)
   # API anahtarını https://resend.com adresinden alabilirsiniz.
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

   # Google Analytics ID (Opsiyonel)
   NUXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```

3. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   pnpm dev
   ```
   Uygulama `http://localhost:3000` adresinde çalışacaktır. Hot-reload (canlı yenileme) aktiftir, yaptığınız değişiklikler anında yansır.

## ☁️ Coolify ile Dağıtım (Deployment)

Bu proje Docker altyapısını destekler ve Coolify üzerinde "Environment Variables" (Ortam Değişkenleri) kullanılarak kolayca çalıştırılabilir.

### Coolify Kurulum ve Ayar Adımları:

1. **Proje Kaynağı Oluşturma**:
   - Coolify panelinde projenizi oluşturun ve GitHub/GitLab reponuzu bağlayın veya "Private Repository" seçeneği ile ilerleyin.

2. **Build Configuration (Build Ayarları)**:
   - Coolify genellikle projedeki `Dockerfile`'ı otomatik algılar. Build Pack olarak **Docker** seçili olduğundan emin olun.
   - Bu proje Nuxt'un "standalone" build özelliğini kullanır ve Dockerfile buna göre optimize edilmiştir.

3. **Environment Variables (Ortam Değişkenleri)**:
   Projenin **Environment Variables** sekmesine gidin ve aşağıdaki değişkenleri ekleyin. Bu değişkenler uygulamanın çalışması için kritiktir:

   | Değişken Adı (Key) | Değer (Value) | Açıklama |
   |-------------------|---------------|----------|
   | `RESEND_API_KEY` | `re_...` | (Zorunlu) İletişim formunun çalışması için Resend API anahtarı. |
   | `NUXT_PUBLIC_GOOGLE_ANALYTICS_ID` | `G-...` | (Opsiyonel) Google Analytics takibi için ID. |
   | `HOST` | `0.0.0.0` | Sunucunun tüm ağ arayüzlerini dinlemesi için gereklidir. |
   | `PORT` | `3000` | Uygulamanın çalışacağı port (Coolify internal port ile aynı olmalı). |

4. **Port Ayarları**:
   - "General" sekmesinde **Internal Port** değerinin `3000` olduğundan emin olun.

5. **Deploy**:
   - "Deploy" butonuna basarak dağıtımı başlatın.
   - Coolify imajı oluşturacak, ortam değişkenlerini enjekte edecek ve uygulamayı başlatacaktır.

## 🤖 AI-Assisted Development (Claude Code & Agents)

Bu proje, AI destekli geliştirme araçlarının konfigürasyon dosyalarını **bilinçli olarak** versiyon kontrolünde tutar. Bu dosyalar `.gitignore`'a eklenmemiştir çünkü tüm ekip üyelerinin aynı AI bağlamını paylaşması amaçlanmaktadır.

### `CLAUDE.md`

Proje kök dizinindeki `CLAUDE.md` dosyası, [Claude Code](https://claude.ai/code) CLI aracına proje hakkında bağlam sağlar. Bu dosya sayesinde Claude Code:

- Proje mimarisini, kullanılan teknolojileri ve dosya yapısını bilir.
- Doğru komutları (`pnpm dev`, `pnpm build` vb.) kullanır.
- Kod yazarken projenin stilistik kurallarına (ESLint, Tailwind, i18n pattern) uyar.
- Gereksiz sorular sormadan doğrudan geliştirmeye başlayabilir.

### `.agents/` Dizini

`.agents/skills/` altında Claude Code'un kullanabileceği özelleştirilmiş skill tanımları bulunur:

| Skill | Açıklama |
|-------|----------|
| `accessibility` | WCAG 2.1 uyumluluğu ve erişilebilirlik denetimi |
| `best-practices` | Modern web geliştirme en iyi uygulamaları |
| `core-web-vitals` | LCP, INP, CLS optimizasyonu |
| `performance` | Sayfa hızı ve yükleme performansı |
| `seo` | Arama motoru optimizasyonu |
| `web-quality-audit` | Kapsamlı web kalite denetimi |

### Neden `.gitignore`'a Eklenmedi?

1. **Ekip tutarlılığı**: Tüm geliştiriciler aynı AI bağlamı ve skill setini kullanır — farklı kişilerin farklı sonuçlar alması önlenir.
2. **Bilgi birikimi**: `CLAUDE.md` projenin yaşayan dokümantasyonudur; mimari kararlar ve konvansiyonlar burada kayıt altına alınır.
3. **Tekrarlanabilirlik**: Yeni bir geliştirici projeyi klonladığında, AI araçları sıfırdan yapılandırma gerektirmeden çalışır.
4. **Code review**: AI konfigürasyonundaki değişiklikler PR sürecinden geçer, böylece ekip bu değişiklikleri inceleyebilir.

> **Not:** Bu dosyalar hassas bilgi içermez. API anahtarları, kişisel ayarlar veya gizli veriler `.env` dosyasında tutulur ve `.gitignore`'dadır.

### Notlar:
- Eğer `RESEND_API_KEY` girilmezse, backend tarafı (`server/api/contact.post.ts`) bunu algılar ve iletişim formu "simülasyon modunda" çalışır (gerçek mail atmaz, sadece başarılı dönmüş gibi davranır).
- `NUXT_PUBLIC_...` ile başlayan değişkenler Nuxt tarafından otomatik olarak frontend tarafına (`runtimeConfig.public`) aktarılır.
