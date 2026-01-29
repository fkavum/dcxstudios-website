<template>
  <div class="flex flex-col">
    <section
      class="relative bg-dark-surface text-white py-20 lg:py-32 overflow-hidden rounded-b-[3rem]"
    >
      <div
        class="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
      />
      <div
        class="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
      />

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-20 items-center">
          <div class="flex flex-col gap-8 text-center lg:text-left">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 w-fit mx-auto lg:mx-0 backdrop-blur-sm"
            >
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span
                class="text-xs font-medium text-white/90 uppercase tracking-wider"
              >
                New Release v1.0
              </span>
            </div>
            <h1
              class="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight"
            >
              Unleash your <br >
              <span
                class="text-transparent bg-clip-text bg-linear-to-r from-primary to-white"
                >inner genius.
              </span>
            </h1>
            <p
              class="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Crossle isn't just a puzzle game. It's a daily ritual for your
              brain. Dive into infinite procedural levels and compete globally.
            </p>
            <div
              class="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
            >
              <InputButton> App Store </InputButton>
              <InputButton> Google Play </InputButton>
            </div>
          </div>
          <div
            class="w-full max-w-md mx-auto rotate-5 hover:rotate-0 transition-transform duration-500"
          >
            <NuxtImg
              src="/images/hero-mockup.png"
              alt="App Mockup"
              width="auto"
              height="100%"
              class="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white w-full border-b border-gray-200">
      <div class="container mx-auto flex justify-center py-12">
        <div class="flex flex-col gap-2 items-center pr-6">
          <div class="text-3xl text-dark-surface font-semibold">4.8/5</div>
          <p class="text-sm text-dark-surface">App Store Rating</p>
        </div>
        <div
          class="flex flex-col gap-2 items-center border-x border-gray-200 px-6"
        >
          <div class="text-3xl text-dark-surface font-semibold">100+</div>
          <p class="text-sm text-dark-surface">Downloads</p>
        </div>
        <div class="flex flex-col gap-2 items-center pl-6">
          <div class="text-3xl text-dark-surface font-semibold">#1</div>
          <p class="text-sm text-dark-surface">Puzzle Game</p>
        </div>
      </div>
    </section>
  </div>
</template>
