<script setup>
import confetti from 'canvas-confetti'

const letters = [
  { id: 'c', char: 'C' },
  { id: 'r', char: 'R' },
  { id: 'o', char: 'O' },
  { id: 's1', char: 'S' },
  { id: 's2', char: 'S' },
  { id: 'l', char: 'L' },
  { id: 'e', char: 'E' }
]

const lettersState = ref([...letters])
const selectedIndices = ref([])
const targetWord = 'CROSSLE'
const isDragging = ref(false)
const isShuffling = ref(false)

// Calculate path for SVG line
const draggingPath = computed(() => {
  if (selectedIndices.value.length === 0) return ''

  const points = selectedIndices.value.map((idx) => {
    // 7 letters -> 360 / 7 ≈ 51.4 degrees spacing
    // -90 to start from top
    const angle = (idx * (360 / 7) - 90) * (Math.PI / 180)
    const radius = 120
    return {
      x: 160 + Math.cos(angle) * radius,
      y: 160 + Math.sin(angle) * radius
    }
  })

  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    d += ` L ${points[i].x} ${points[i].y}`
  }
  return d
})

function shuffle() {
  if (isShuffling.value) return
  isShuffling.value = true
  selectedIndices.value = []

  setTimeout(() => {
    // Fisher-Yates shuffle
    const arr = [...lettersState.value]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    lettersState.value = arr

    setTimeout(() => {
      isShuffling.value = false
    }, 600)
  }, 100)
}

function startDrag(index) {
  isDragging.value = true
  selectedIndices.value = [index]
}

function onLetterEnter(index) {
  if (!isDragging.value) return
  if (selectedIndices.value.includes(index)) return
  selectedIndices.value.push(index)
}

function endDrag() {
  if (!isDragging.value) return
  isDragging.value = false

  const currentWord = selectedIndices.value.map(i => lettersState.value[i].char).join('')
  if (currentWord === targetWord) {
    triggerConfetti()
  } else {
    setTimeout(() => {
      selectedIndices.value = []
    }, 500)
  }
}

function onTouchMove(e) {
  if (!isDragging.value) return
  e.preventDefault()
  const touch = e.touches[0]
  const el = document.elementFromPoint(touch.clientX, touch.clientY)
  if (!el) return

  const letterEl = el.closest('[data-letter-index]')
  if (letterEl) {
    const index = parseInt(letterEl.getAttribute('data-letter-index'))
    if (!isNaN(index) && !selectedIndices.value.includes(index)) {
      onLetterEnter(index)
    }
  }
}

function triggerConfetti() {
  const duration = 3000
  const end = Date.now() + duration
  // Use Crossle theme colors (Yellows/Oranges)
  const colors = ['#eab308', '#f59e0b', '#fbbf24'] 

  ;(function frame() {
    confetti({ particleCount: 7, angle: 60, spread: 55, origin: { x: 0 }, colors: colors })
    confetti({ particleCount: 7, angle: 120, spread: 55, origin: { x: 1 }, colors: colors })
    if (Date.now() < end) requestAnimationFrame(frame)
  })()

  setTimeout(() => {
    confetti({ particleCount: 150, spread: 360, origin: { y: 0.5 }, shapes: ['circle'], colors: colors })
  }, 400)
}

function getX(index) {
  // 360 / 7 ≈ 51.428...
  return Math.cos((index * (360 / 7) - 90) * (Math.PI / 180)) * 120
}

function getY(index) {
  return Math.sin((index * (360 / 7) - 90) * (Math.PI / 180)) * 120
}
</script>

<template>
  <div class="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 w-full py-24 pb-32">
    <div class="container mx-auto px-4 text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Try It Yourself!</h2>
      <p class="text-gray-600 dark:text-gray-400">Can you find the hidden word? Connect the letters to spell <strong>CROSSLE</strong>.</p>
    </div>

    <div
      id="game-container"
      class="game-container container mx-auto"
    >
      <div
        class="wheel-container"
        @mouseup="endDrag"
        @mouseleave="endDrag"
        @touchend="endDrag"
        @touchcancel="endDrag"
        @touchmove="onTouchMove"
      >
        <svg
          class="connection-layer"
          viewBox="0 0 320 320"
          aria-hidden="true"
        >
          <path
            id="connection-path"
            :d="draggingPath"
            stroke="#eab308"
            stroke-width="6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="drop-shadow-md"
          />
        </svg>

        <button
          class="center-icon"
          :class="{ shuffling: isShuffling }"
          aria-label="Shuffle Letters"
          @click="shuffle"
        >
          <UIcon
            name="i-lucide-shuffle"
            class="text-2xl"
          />
        </button>

        <div class="letter-circle">
          <button
            v-for="(letter, index) in lettersState"
            :key="letter.id"
            type="button"
            class="letter-button"
            :class="{ selected: selectedIndices.includes(index) }"
            :style="{
              '--x': `${getX(index)}px`,
              '--y': `${getY(index)}px`
            }"
            :aria-label="letter.char"
            :data-letter-index="index"
            @mousedown.stop="startDrag(index)"
            @mouseenter="onLetterEnter(index)"
            @touchstart.prevent.stop="startDrag(index)"
          >
            {{ letter.char }}
          </button>
        </div>
      </div>

      <div
        class="selected-word h-16"
        role="status"
        aria-live="polite"
      >
        <div
          v-if="selectedIndices.length > 0"
          class="word-display"
        >
          <span
            v-for="idx in selectedIndices"
            :key="idx"
            class="letter-chip"
          >
            {{ lettersState[idx].char }}
          </span>
        </div>
        <div v-else class="text-gray-500 font-medium animate-pulse">
          Drag to connect...
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.letter-button {
  transform: translate(var(--x), var(--y));
}
</style>
