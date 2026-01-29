<template>
  <div class="game-container">
    <div
class="wheel-container" 
         @mouseup="endDrag"
         @mouseleave="endDrag"
         @touchend="endDrag"
         @touchcancel="endDrag"
         @touchmove="onTouchMove">
      <svg class="connection-layer" viewBox="0 0 320 320">
        <path 
          v-if="connections.length > 0"
          :d="connectionPath" 
          stroke="#6366f1" 
          stroke-width="3" 
          fill="none" 
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      
      <button :class="['center-icon', { 'shuffling': isShuffling }]" title="Harfleri Karıştır" @click="shuffleLetters">
        <Icon name="lucide:shuffle" />
      </button>
      
      <div class="letter-circle">
        <div
          v-for="(letter, index) in letters"
          :key="letter.id"
          :ref="(el) => { if (el) letterRefs[index] = el as HTMLElement }"
          :class="['letter-button', { 'selected': selectedLetters.includes(index) }]"
          :style="getLetterPosition(index)"
          @mousedown.stop="startDragOnLetter(index)"
          @mouseenter="onLetterHover(index)"
          @touchstart.prevent.stop="startDragOnLetter(index)"
        >
          {{ letter.char }}
        </div>
      </div>
    </div>
    
    <div class="selected-word">
      <div class="word-display">
        <span v-for="(index, i) in selectedLetters" :key="i" class="letter-chip">
          {{ letters[index]?.char }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import confetti from 'canvas-confetti'

const letters = ref([
  { id: 'c', char: 'C' },
  { id: 'x', char: 'X' },
  { id: 'd', char: 'D' },
  { id: 'e', char: 'E' },
  { id: 'r', char: 'R' },
  { id: 'a', char: 'A' }
])
const selectedLetters = ref<number[]>([])
const targetWord = 'DCX'
const isDragging = ref(false)
const letterRefs = ref<(HTMLElement | null)[]>([])
const connections = ref<{x: number, y: number}[]>([])
const isShuffling = ref(false)

const shuffleLetters = () => {
  if (isShuffling.value) return
  
  isShuffling.value = true
  clearSelection()
  
  setTimeout(() => {
    const shuffled = [...letters.value]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = shuffled[i]
      if (temp && shuffled[j]) {
        shuffled[i] = shuffled[j]
        shuffled[j] = temp
      }
    }
    letters.value = shuffled
    
    setTimeout(() => {
      isShuffling.value = false
    }, 600)
  }, 100)
}

const getLetterPosition = (index: number) => {
  const angle = (index * 60 - 90) * (Math.PI / 180)
  const radius = 120
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius
  
  return {
    '--x': `${x}px`,
    '--y': `${y}px`,
    transform: `translate(var(--x), var(--y))`
  }
}

const getLetterCenter = (index: number) => {
  const angle = (index * 60 - 90) * (Math.PI / 180)
  const radius = 120
  return {
    x: 160 + Math.cos(angle) * radius,
    y: 160 + Math.sin(angle) * radius
  }
}

const connectionPath = computed(() => {
  if (connections.value.length === 0) return ''
  
  const points = connections.value
  const firstPoint = points[0]
  if (!firstPoint) return ''
  
  let path = `M ${firstPoint.x} ${firstPoint.y}`
  
  for (let i = 1; i < points.length; i++) {
    const point = points[i]
    if (point) {
      path += ` L ${point.x} ${point.y}`
    }
  }
  
  return path
})

const startDragOnLetter = (index: number) => {
  isDragging.value = true
  selectedLetters.value = [index]
  
  const center = getLetterCenter(index)
  connections.value = [center]
}

const onLetterHover = (index: number) => {
  if (!isDragging.value) return
  
  if (selectedLetters.value.includes(index)) return
  
  selectedLetters.value.push(index)
  
  const center = getLetterCenter(index)
  connections.value.push(center)
  
  checkWord()
}

const onTouchMove = (e: TouchEvent) => {
  if (!isDragging.value) return
  
  const touch = e.touches[0]
  if (!touch) return
  
  const element = document.elementFromPoint(touch.clientX, touch.clientY)
  if (!element) return
  
  const letterButton = element.closest('.letter-button')
  if (!letterButton) return
  
  const index = letterRefs.value.findIndex(ref => ref === letterButton)
  if (index !== -1 && !selectedLetters.value.includes(index)) {
    onLetterHover(index)
  }
}

const endDrag = () => {
  isDragging.value = false
  
  if (selectedLetters.value.length > 0) {
    const currentWord = selectedLetters.value
      .map(i => letters.value[i]?.char)
      .join('')
    
    if (currentWord !== targetWord) {
      setTimeout(() => {
        clearSelection()
      }, 500)
    }
  }
}

const clearSelection = () => {
  selectedLetters.value = []
  connections.value = []
}

const checkWord = () => {
  if (selectedLetters.value.length < targetWord.length) return
  
  const currentWord = selectedLetters.value
    .map(i => letters.value[i]?.char)
    .join('')
  
  if (currentWord === targetWord) {
    triggerConfetti()
  }
}

const triggerSimpleConfetti = () => {
  const duration = 3000
  const end = Date.now() + duration

  const frame = () => {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#6366f1', '#8b5cf6', '#d946ef']
    })
    
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#6366f1', '#8b5cf6', '#d946ef']
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  }
  
  frame()
}

const triggerMegaConfetti = () => {
  const duration = 8000
  const animationEnd = Date.now() + duration
  const defaults = { 
    startVelocity: 45, 
    spread: 360, 
    ticks: 80, 
    zIndex: 9999,
    colors: ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e', '#fb923c', '#fbbf24', '#34d399', '#3b82f6']
  }

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min
  }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 80 * (timeLeft / duration)

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    })
    
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    })
    
    confetti({
      ...defaults,
      particleCount: particleCount / 2,
      origin: { x: randomInRange(0.4, 0.6), y: Math.random() - 0.1 }
    })
  }, 150)

  confetti({
    particleCount: 200,
    spread: 180,
    origin: { y: 0.5 },
    startVelocity: 60,
    colors: ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e']
  })
  
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.6 },
        colors: ['#f43f5e', '#fb923c', '#fbbf24']
      })
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.6 },
        colors: ['#34d399', '#3b82f6', '#8b5cf6']
      })
    }, 200 * i)
  }
  
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 70,
        spread: 120,
        origin: { y: 0.3, x: randomInRange(0.2, 0.8) },
        shapes: ['star'],
        colors: ['#fbbf24', '#fb923c', '#f43f5e', '#d946ef']
      })
    }, 300 * i)
  }
  
  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 360,
      origin: { y: 0.5 },
      shapes: ['circle'],
      colors: ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899'],
      startVelocity: 50
    })
  }, 400)
  
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 180,
      origin: { y: 0.4 },
      shapes: ['square'],
      colors: ['#f43f5e', '#fb923c', '#fbbf24', '#34d399']
    })
  }, 800)
  
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const x = randomInRange(0.2, 0.8)
      confetti({
        particleCount: 120,
        spread: 360,
        origin: { x, y: 0.3 },
        startVelocity: 55,
        ticks: 100,
        colors: ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e', '#fb923c']
      })
    }, 1000 + (i * 400))
  }
  
  setTimeout(() => {
    confetti({
      particleCount: 250,
      spread: 200,
      origin: { y: 0.5 },
      startVelocity: 70,
      colors: ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e', '#fb923c', '#fbbf24']
    })
  }, duration - 1000)
}

const triggerConfetti = () => {
  triggerSimpleConfetti()
  triggerMegaConfetti()
}
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
}

.wheel-container {
  position: relative;
  width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.connection-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.center-icon {
  position: absolute;
  width: 60px;
  height: 60px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  font-size: 2rem;
  color: #6366f1;
  cursor: pointer;
  transition: all 0.3s ease;
}

.center-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.center-icon.shuffling {
  animation: spin 0.6s ease-in-out;
}

@keyframes spin {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

.center-icon.shuffling {
  animation: spin 0.6s ease-in-out;
}

@keyframes spin {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

.letter-circle {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.letter-button {
  position: absolute;
  width: 60px;
  height: 60px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  left: 50%;
  top: 50%;
  margin-left: -30px;
  margin-top: -30px;
}

.letter-button:hover {
  background: #f3f4f6;
  transform: translate(var(--x), var(--y)) scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.letter-button.selected {
  background: #6366f1;
  color: white;
  border-color: #4f46e5;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

.selected-word {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.word-display {
  display: flex;
  gap: 0.5rem;
  min-height: 60px;
  align-items: center;
}

.letter-chip {
  width: 50px;
  height: 50px;
  background: #6366f1;
  color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.clear-btn {
  padding: 0.5rem 1.5rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.clear-btn:hover {
  background: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}
</style>
