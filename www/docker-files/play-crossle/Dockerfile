# Hafif bir nginx imajı kullanıyoruz
FROM nginx:alpine

# Yerel 'play-crossle' klasöründeki dosyaları (Unity WebGL build çıktısı) nginx'in varsayılan klasörüne kopyalıyoruz
COPY ./play-crossle /usr/share/nginx/html

# .unityweb gzip headers, html no-cache, Build/ immutable — required, the stock conf breaks the loader
COPY ./docker-files/play-crossle/config/default.conf /etc/nginx/conf.d/default.conf
