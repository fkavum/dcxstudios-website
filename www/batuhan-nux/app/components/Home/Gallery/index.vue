<template>
  <section class="bg-background-light w-full py-16 lg:py-24">
    <div class="container mx-auto px-6">
      <div class="text-center mb-10 lg:mb-14">
        <h2
          class="text-4xl lg:text-5xl font-black tracking-tight text-dark-surface"
        >
          Gallery &amp; Media
        </h2>
        <p class="mt-3 text-sm lg:text-base text-dark-surface/60">
          A glimpse into the world of Crossle.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_270px] items-stretch">
        <!-- Main Display -->
        <div
          class="relative rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg h-full flex flex-col group"
        >
          <div
            class="flex-1 min-h-0 bg-gradient-to-br from-accent-gray to-gray-100 flex items-center justify-center relative"
          >
            <!-- Loading Skeleton -->
            <div
              v-if="imageLoading"
              class="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
            >
              <svg
                class="w-12 h-12 text-gray-400 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>

            <!-- Main Image/Video with Transition -->
            <Transition name="gallery-fade" mode="out-in">
              <div
                :key="selectedItem.id"
                class="relative flex items-center justify-center w-full h-full"
              >
                <!-- Video Player -->
                <video
                  v-if="selectedItem.type === 'video'"
                  ref="videoPlayer"
                  :src="selectedItem.src"
                  class="max-h-[500px] w-auto max-w-full object-contain transition-transform duration-500"
                  :class="imageLoading ? 'opacity-0' : 'opacity-100'"
                  autoplay
                  loop
                  muted
                  playsinline
                  @loadeddata="onVideoLoaded"
                  @click="toggleVideoPlay"
                >
                  Your browser does not support the video tag.
                </video>

                <!-- Image -->
                <NuxtImg
                  v-else
                  :src="selectedItem.src"
                  :alt="selectedItem.alt"
                  fit="contain"
                  class="max-h-[500px] w-auto max-w-full object-contain transition-transform duration-500"
                  :class="imageLoading ? 'opacity-0' : 'opacity-100'"
                  @load="imageLoading = false"
                />

                <!-- Video Play/Pause Button Overlay -->
                <button
                  v-if="selectedItem.type === 'video'"
                  type="button"
                  class="absolute inset-0 flex items-center justify-center group/play"
                  @click="toggleVideoPlay"
                >
                  <Transition name="fade-scale">
                    <div
                      v-if="!isVideoPlaying"
                      class="w-20 h-20 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover/play:scale-110 group-hover/play:bg-black/80 transition-all duration-300"
                    >
                      <svg
                        class="w-10 h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </Transition>
                </button>
              </div>
            </Transition>

            <!-- Navigation Arrows -->
            <button
              v-if="currentIndex > 0"
              type="button"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Previous image"
              @click="navigateGallery(-1)"
            >
              <svg
                class="w-6 h-6 text-dark-surface"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              v-if="currentIndex < items.length - 1"
              type="button"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Next image"
              @click="navigateGallery(1)"
            >
              <svg
                class="w-6 h-6 text-dark-surface"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <!-- Image Counter -->
            <div
              class="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium"
            >
              {{ currentIndex + 1 }} / {{ items.length }}
            </div>
          </div>

          <div
            class="px-6 py-5 shrink-0 bg-gradient-to-r from-white to-gray-50"
          >
            <Transition name="slide-fade" mode="out-in">
              <p
                :key="selectedItem.id"
                class="text-base font-semibold text-dark-surface"
              >
                {{ selectedItem.title }}
              </p>
            </Transition>
          </div>
        </div>

        <!-- Thumbnails Sidebar -->
        <div
          class="flex flex-row lg:flex-col gap-3 lg:max-h-[600px] overflow-x-auto lg:overflow-x-visible overflow-y-visible lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent p-1 -m-1 pb-2 lg:pb-1"
        >
          <button
            v-for="item in items"
            :key="item.id"
            type="button"
            class="group shrink-0 lg:w-full w-36 text-left rounded-xl lg:rounded-2xl overflow-hidden bg-white border-2 shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            :class="
              item.id === selectedItem.id
                ? 'ring-2 ring-primary border-primary shadow-lg scale-[1.02]'
                : 'border-gray-200 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02]'
            "
            :aria-current="item.id === selectedItem.id ? 'true' : 'false'"
            @click="selectItem(item.id)"
            @keydown.enter="selectItem(item.id)"
            @keydown.space.prevent="selectItem(item.id)"
          >
            <div
              class="aspect-16/10 w-full bg-gradient-to-br from-accent-gray to-gray-100 relative overflow-hidden"
            >
              <video
                v-if="item.type === 'video'"
                :src="item.src"
                class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                :class="
                  item.id === selectedItem.id
                    ? 'brightness-100'
                    : 'brightness-90 group-hover:brightness-100'
                "
                muted
                playsinline
                preload="metadata"
                @loadedmetadata="(e) => { if (item.thumbnailTime) (e.target as HTMLVideoElement).currentTime = item.thumbnailTime; }"
              />

              <NuxtImg
                v-else
                :src="item.src"
                :alt="item.alt"
                class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                :class="
                  item.id === selectedItem.id
                    ? 'brightness-100'
                    : 'brightness-90 group-hover:brightness-100'
                "
              />

              <div
                v-if="item.type === 'video'"
                class="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none"
              >
                <div
                  class="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    class="w-4 h-4 lg:w-5 lg:h-5 text-primary ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div
                v-if="item.id === selectedItem.id"
                class="absolute top-1.5 right-1.5 lg:top-2 lg:right-2 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-primary flex items-center justify-center shadow-lg"
              >
                <svg
                  class="w-3 h-3 lg:w-4 lg:h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <div class="px-3 py-2 lg:px-4 lg:py-3">
              <p
                class="text-xs lg:text-sm font-semibold transition-colors duration-200 line-clamp-2"
                :class="
                  item.id === selectedItem.id
                    ? 'text-primary'
                    : 'text-dark-surface group-hover:text-primary'
                "
              >
                {{ item.title }}
              </p>
            </div>
          </button>
        </div>
      </div>

      <div class="mt-8 text-center">
        <p class="text-xs text-dark-surface/40">
          Use arrow keys to navigate • Click thumbnails to select
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  type?: 'image' | 'video';
  thumbnailTime?: number;
};

const items = ref<GalleryItem[]>([
  {
    id: 'trailer',
    src: '/videos/tobegif.mp4',
    alt: 'Crossle gameplay video',
    title: 'Official Gameplay Trailer',
    type: 'video',
    thumbnailTime: 2,
  },
  {
    id: 'shot-1',
    src: '/images/crossle-1.webp',
    alt: 'Crossle screenshot 1',
    title: 'Gameplay Screenshot',
    type: 'image',
  },
  {
    id: 'shot-2',
    src: '/images/crossle-2.webp',
    alt: 'Crossle screenshot 2',
    title: 'Daily Challenge',
    type: 'image',
  },
  {
    id: 'shot-3',
    src: '/images/crossle-3.webp',
    alt: 'Crossle screenshot 3',
    title: 'Stats & Leaderboard',
    type: 'image',
  },
]);

const fallbackItem: GalleryItem = {
  id: 'fallback',
  src: '/images/hero-mockup.png',
  alt: 'Crossle preview',
  title: 'Gallery Item',
  type: 'image',
};

const selectedId = ref(items.value[0]?.id ?? fallbackItem.id);
const imageLoading = ref(false);
const isVideoPlaying = ref(false);
const videoPlayer = ref<HTMLVideoElement | null>(null);

const selectedItem = computed<GalleryItem>(() => {
  return (
    items.value.find((i) => i.id === selectedId.value) ??
    items.value[0] ??
    fallbackItem
  );
});

const currentIndex = computed(() => {
  return items.value.findIndex((i) => i.id === selectedId.value);
});

const onVideoLoaded = () => {
  imageLoading.value = false;
  if (videoPlayer.value) {
    videoPlayer.value
      .play()
      .then(() => {
        isVideoPlaying.value = true;
      })
      .catch(() => {
        isVideoPlaying.value = false;
      });
  }
};

const selectItem = (id: string) => {
  if (id !== selectedId.value) {
    imageLoading.value = true;
    isVideoPlaying.value = false;
    selectedId.value = id;
  }
};

const toggleVideoPlay = () => {
  if (videoPlayer.value) {
    if (isVideoPlaying.value) {
      videoPlayer.value.pause();
      isVideoPlaying.value = false;
    } else {
      videoPlayer.value
        .play()
        .then(() => {
          isVideoPlaying.value = true;
        })
        .catch(() => {
          isVideoPlaying.value = false;
        });
    }
  }
};

const navigateGallery = (direction: number) => {
  const newIndex: number = currentIndex.value + direction;
  if (newIndex >= 0 && newIndex < items.value.length) {
    const item = items.value[newIndex];
    if (item) {
      selectItem(item.id);
    }
  }
};

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    navigateGallery(-1);
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    navigateGallery(1);
  } else if (event.key === ' ' && selectedItem.value.type === 'video') {
    event.preventDefault();
    toggleVideoPlay();
  }
};

// Watch for selectedId changes to auto-play videos
watch(selectedId, () => {
  if (selectedItem.value.type === 'video') {
    nextTick(() => {
      if (videoPlayer.value) {
        videoPlayer.value
          .play()
          .then(() => {
            isVideoPlaying.value = true;
          })
          .catch(() => {
            isVideoPlaying.value = false;
          });
      }
    });
  }
});

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Gallery Fade Transition */
.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: all 0.4s ease;
}

.gallery-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.gallery-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

/* Slide Fade for Title */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Custom Scrollbar - Modern & Beautiful */
.scrollbar-thin::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #e5e7eb 0%, #d1d5db 100%);
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: padding-box;
  transition: all 0.3s ease;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #9ca3af 0%, #6b7280 100%);
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.scrollbar-thin::-webkit-scrollbar-thumb:active {
  background: linear-gradient(180deg, #6b7280 0%, #4b5563 100%);
}

/* Firefox Scrollbar */
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #d1d5db transparent;
}

/* Smooth Scrolling */
.overflow-y-auto,
.overflow-x-auto {
  scroll-behavior: smooth;
}

/* Fade Scale Transition for Video Play Button */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
