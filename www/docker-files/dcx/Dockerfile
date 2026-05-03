# Hafif bir nginx imajı kullanıyoruz
FROM nginx:alpine

# Yerel 'html' klasöründeki dosyaları nginx'in varsayılan klasörüne kopyalıyoruz
COPY ./dcxstudios /usr/share/nginx/html

# Eğer özel bir nginx.conf dosyan varsa onu da içeri atabilirsin:
# COPY nginx.conf /etc/nginx/conf.d/default.conf