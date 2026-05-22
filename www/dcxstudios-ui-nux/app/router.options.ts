import type { RouterScrollBehavior } from 'vue-router'

const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }

  if (to.hash) {
    return {
      el: to.hash,
      top: 80,
      behavior: 'smooth'
    }
  }

  return { top: 0, behavior: 'smooth' }
}

export default {
  scrollBehavior
}
