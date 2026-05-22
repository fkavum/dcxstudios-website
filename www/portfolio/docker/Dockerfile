# --- Aşama 1: Build (Derleme) ---
# Node'un hafif alpine versiyonunu kullanarak bağımlılıkları yüklüyor ve build alıyoruz.
FROM node:26-alpine AS builder
WORKDIR /app

# Önce sadece package dosyalarını kopyalıyoruz (Docker cache mekanizmasından yararlanmak için)
COPY package*.json ./
RUN npm ci

# Tüm proje kodlarını kopyalayıp statik çıktı üretiyoruz
COPY . .
RUN npm run build

# --- Aşama 2: Runtime (Çalışma Ortamı) ---
# Sadece üretilen statik HTML/CSS/JS dosyalarını servis etmek için Nginx kullanıyoruz.
FROM nginx:alpine

# Astro'nun ürettiği 'dist' klasörünü Nginx'in varsayılan yayın klasörüne kopyalıyoruz
COPY --from=builder /app/dist /usr/share/nginx/html

# Astro'nun dosya tabanlı yönlendirmesinin (about/index.html gibi) Nginx'te düzgün çalışması için
# varsayılan Nginx ayarını basitçe koruyoruz. Standart SSG için ekstra bir router ayarına gerek yoktur.

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]