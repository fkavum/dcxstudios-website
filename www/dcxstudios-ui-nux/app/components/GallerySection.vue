<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { t } = useI18n({
  useScope: 'local'
})

const items = [
  {
    id: 'trailer',
    src: '/videos/crossle-gameplay-trailer.mp4',
    alt: 'Crossle word puzzle game gameplay trailer video',
    title: 'trailerTitle',
    description: 'trailerDesc',
    tag: 'tagVideo',
    type: 'video'
  },
  {
    id: 'shot-1',
    src: '/images/crossle-leaderboard.webp',
    alt: 'Crossle game leaderboard showing global rankings and player statistics',
    title: 'leaderboardTitle',
    description: 'leaderboardDesc',
    tag: 'tagScreen',
    type: 'image'
  },
  {
    id: 'shot-2',
    src: '/images/crossle-home-screen.webp',
    alt: 'Crossle mobile game home screen with daily puzzle challenge',
    title: 'homeTitle',
    description: 'homeDesc',
    tag: 'tagScreen',
    type: 'image'
  },
  {
    id: 'shot-3',
    src: '/images/crossle-gameplay.webp',
    alt: 'Crossle word puzzle gameplay showing letter connections and word formation',
    title: 'gameplayTitle',
    description: 'gameplayDesc',
    tag: 'tagScreen',
    type: 'image'
  }
]

const selectedId = ref(items[0].id)
const selectedItem = computed(() => items.find(i => i.id === selectedId.value) || items[0])
const selectedIndex = computed(() => items.indexOf(selectedItem.value))

function selectItem(id) {
  selectedId.value = id
}

function next() {
  if (selectedIndex.value < items.length - 1) {
    selectedId.value = items[selectedIndex.value + 1].id
  }
}

function prev() {
  if (selectedIndex.value > 0) {
    selectedId.value = items[selectedIndex.value - 1].id
  }
}

function handleKeydown(e) {
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section
    id="gallery-app"
    class="bg-background-light w-full py-16 lg:py-24"
  >
    <div class="container mx-auto px-6">
      <div class="text-center mb-10 lg:mb-14">
        <h2 class="text-4xl lg:text-5xl font-black tracking-tight text-dark-surface">
          {{ t('title') }}
        </h2>
        <p class="mt-3 text-sm lg:text-base text-dark-surface/60">
          {{ t('subtitle') }}
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_270px] items-start">
        <!-- Main Display -->
        <div class="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg group">
          <!-- Media Area -->
          <div class="relative bg-gradient-to-br from-accent-gray to-gray-100 flex items-center justify-center overflow-hidden" style="height: 600px;">
            <transition name="fade" mode="out-in">
              <div
                v-if="selectedItem.type === 'video'"
                :key="selectedItem.id"
                class="flex items-center justify-center w-full h-full"
              >
                <video
                  :src="selectedItem.src"
                  class="w-full h-full object-contain"
                  autoplay
                  loop
                  muted
                  playsinline
                  preload="none"
                />
              </div>
              <NuxtImg
                v-else
                :key="selectedItem.id + '-img'"
                :src="selectedItem.src"
                :alt="selectedItem.alt"
                format="webp"
                class="w-full h-full object-contain"
              />
            </transition>

            <!-- Navigation Arrows -->
            <button
              v-if="selectedIndex > 0"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100 z-10"
              aria-label="Previous"
              @click="prev"
            >
              <UIcon name="i-heroicons-chevron-left" class="w-6 h-6 text-dark-surface" />
            </button>

            <button
              v-if="selectedIndex < items.length - 1"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100 z-10"
              aria-label="Next"
              @click="next"
            >
              <UIcon name="i-heroicons-chevron-right" class="w-6 h-6 text-dark-surface" />
            </button>

            <!-- Counter -->
            <div class="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium z-10">
              {{ selectedIndex + 1 }} / {{ items.length }}
            </div>
          </div>

          <!-- Info Panel -->
          <transition name="fade" mode="out-in">
            <div :key="selectedItem.id + '-info'" class="px-6 py-5 border-t border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <UIcon
                    :name="selectedItem.type === 'video' ? 'i-heroicons-play-circle' : 'i-heroicons-device-phone-mobile'"
                    class="w-5 h-5 text-dark-surface"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1">
                    <h3 class="font-bold text-dark-surface text-base">
                      {{ t(selectedItem.title) }}
                    </h3>
                    <span class="text-xs font-medium px-2 py-0.5 rounded-full bg-accent-gray text-dark-surface/60 shrink-0">
                      {{ t(selectedItem.tag) }}
                    </span>
                  </div>
                  <p class="text-sm text-dark-surface/60 leading-relaxed">
                    {{ t(selectedItem.description) }}
                  </p>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Thumbnails -->
        <div class="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible overflow-y-visible lg:overflow-y-auto scrollbar-thin p-1 -m-1 pb-2 lg:pb-1">
          <button
            v-for="item in items"
            :key="item.id"
            class="group shrink-0 lg:w-full w-36 text-left rounded-2xl overflow-hidden bg-white border-2 shadow-md transition-all duration-300 focus:outline-none"
            :class="[
              selectedId === item.id
                ? 'ring-2 ring-primary border-primary shadow-lg scale-[1.02]'
                : 'border-gray-200 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]'
            ]"
            @click="selectItem(item.id)"
          >
            <div class="w-full h-36 bg-gradient-to-br from-accent-gray to-gray-100 overflow-hidden flex items-center justify-center">
              <video
                v-if="item.type === 'video'"
                :src="item.src"
                muted
                preload="metadata"
                class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                :class="[selectedId === item.id ? 'brightness-100' : 'brightness-90 group-hover:brightness-100']"
              />
              <NuxtImg
                v-else
                :src="item.src"
                :alt="item.alt"
                format="webp"
                loading="lazy"
                class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                :class="[selectedId === item.id ? 'brightness-100' : 'brightness-90 group-hover:brightness-100']"
              />
            </div>
            <div class="px-3 py-2.5">
              <p
                class="text-xs font-semibold transition-colors duration-200 line-clamp-2"
                :class="[selectedId === item.id ? 'text-primary' : 'text-dark-surface group-hover:text-primary']"
              >
                {{ t(item.title) }}
              </p>
            </div>
          </button>
        </div>
      </div>

      <div class="mt-6 text-center">
        <p class="text-xs text-dark-surface/40">
          {{ t('usage') }}
        </p>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Gallery & Media",
    "subtitle": "A closer look at the world of Crossle.",
    "usage": "Use arrow keys to navigate • Click thumbnails to select",
    "tagVideo": "Trailer",
    "tagScreen": "Screenshot",
    "trailerTitle": "Official Gameplay Trailer",
    "trailerDesc": "Watch Crossle in action — see how players spin the letter wheel and race to form words in this fast-paced daily puzzle game.",
    "leaderboardTitle": "Global Leaderboard",
    "leaderboardDesc": "Compete with players worldwide. Your score, streak, and ranking are updated in real time so the race never stops.",
    "homeTitle": "Home Screen",
    "homeDesc": "A clean daily dashboard showing your active streak, today's challenge status, and quick access to every game mode.",
    "gameplayTitle": "Gameplay",
    "gameplayDesc": "The letter wheel at the heart of Crossle — spin, connect, and solve each handcrafted puzzle before the timer runs out."
  },
  "tr": {
    "title": "Galeri & Medya",
    "subtitle": "Crossle dünyasına daha yakından bir bakış.",
    "usage": "Gezinmek için ok tuşlarını kullanın • Seçmek için küçük resimlere tıklayın",
    "tagVideo": "Fragman",
    "tagScreen": "Ekran Görüntüsü",
    "trailerTitle": "Resmi Oynanış Fragmanı",
    "trailerDesc": "Crossle'ı aksiyonda izleyin — oyuncuların harf çarkını nasıl çevirip bu hızlı tempolu günlük bulmacada kelimeleri nasıl oluşturduğunu görün.",
    "leaderboardTitle": "Küresel Sıralama",
    "leaderboardDesc": "Dünyanın dört bir yanındaki oyuncularla yarışın. Puanınız, seriniz ve sıralamanız gerçek zamanlı güncellenir.",
    "homeTitle": "Ana Ekran",
    "homeDesc": "Aktif serinizi, bugünkü meydan okuma durumunuzu ve her oyun moduna hızlı erişimi gösteren sade bir günlük panel.",
    "gameplayTitle": "Oynanış",
    "gameplayDesc": "Crossle'ın kalbindeki harf çarkı — zamanlayıcı bitmeden her el yapımı bulmacayı çözmek için çevirin, bağlayın ve çözün."
  }
}
</i18n>
