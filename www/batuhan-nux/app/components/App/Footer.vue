<template>
  <footer
    class="bg-dark-surface border-t border-white/10 pt-12 lg:pt-16 pb-6 lg:pb-8 text-white"
  >
    <div class="container mx-auto px-4 lg:px-6 mb-8 lg:mb-12">
      <div class="max-w-md">
        <div class="mb-6">
          <AppLogo variant="dark" />
        </div>
        <p class="text-accent-gray text-sm lg:text-base leading-relaxed">
          Creating memorable digital experiences. Follow us on our journey to
          redefine mobile gaming.
        </p>
      </div>
    </div>
    <div class="container mx-auto px-4 lg:px-6 border-t border-white/10 pt-6 lg:pt-8">
      <p class="text-accent-gray text-xs lg:text-sm">
        &copy; {{ new Date().getFullYear() }} DCX Studios. Bütün hakları
        sakladım bulamazsınız.
      </p>
    </div>
  </footer>
</template>
