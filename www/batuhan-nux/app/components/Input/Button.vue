<template>
  <button
    :class="`${
      variantClasses[props.variant as keyof typeof variantClasses]
    } px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity duration-200`"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String as () => 'primary' | 'secondary' | 'text',
    default: 'primary',
  },
});

const variantClasses = {
  primary: 'bg-primary text-dark-surface',
  secondary: 'bg-dark-surface text-primary',
  text: 'bg-transparent text-primary',
};
</script>
