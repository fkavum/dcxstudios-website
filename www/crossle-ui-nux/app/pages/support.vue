<script setup>
useSeoMeta({
  title: 'Support - Crossle',
  description: 'Get help with Crossle. Report bugs, recover lost progress, or learn how to play the game.',
  ogTitle: 'Support - Crossle',
  ogDescription: 'Get help with Crossle. Report bugs, recover lost progress, or learn how to play.'
})

// FAQ Schema.org via nuxt-schema-org
useSchemaOrg([
  defineWebPage({
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'I found a bug. How can I report it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Please email us at fatihkavum@gmail.com with details and (if possible) screenshots. The more info you provide, the faster we can fix it!'
        }
      },
      {
        '@type': 'Question',
        name: 'I lost my progress. Can you restore it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact us with your Player ID (found in the Player Profile popup) and device information. We\'ll do our best to help.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I play Crossle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Crossle is a turn-based PvP word game. Build words on the board using your letters, earn points, and defeat your opponent before the game ends!'
        }
      }
    ]
  })
])
</script>

<template>
  <div class="container mx-auto px-4 py-12 max-w-4xl text-gray-800 dark:text-gray-200">
    <div class="flex flex-col items-center mb-12 text-center">
      <h1 class="text-4xl font-black mb-4">
        Crossle Support
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        How can we help you today?
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-16">
      <!-- Contact Card -->
      <UCard class="border-t-4 border-t-primary">
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon
              name="i-lucide-mail"
              class="w-6 h-6 text-primary"
              aria-hidden="true"
            />
            <h2 class="text-xl font-bold">
              Contact Us
            </h2>
          </div>
        </template>
        <p class="mb-4 text-gray-500 dark:text-gray-400">
          Experiencing a bug or have a suggestion? Reach out directly to our team.
        </p>
        <UButton
          to="mailto:fatihkavum@gmail.com"
          color="primary"
          variant="soft"
          block
        >
          fatihkavum@gmail.com
        </UButton>
      </UCard>

      <!-- Privacy Card -->
      <UCard class="border-t-4 border-t-gray-500">
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon
              name="i-lucide-shield"
              class="w-6 h-6 text-gray-500"
              aria-hidden="true"
            />
            <h2 class="text-xl font-bold">
              Privacy & Data
            </h2>
          </div>
        </template>
        <p class="mb-4 text-gray-500 dark:text-gray-400">
          Learn how we handle your data and protect your privacy while playing Crossle.
        </p>
        <UButton
          to="/privacy-policy"
          color="neutral"
          variant="soft"
          block
        >
          View Privacy Policy
        </UButton>
      </UCard>
    </div>

    <section aria-label="Frequently Asked Questions">
      <h2 class="text-2xl font-bold border-b border-gray-200 dark:border-gray-800 pb-4">
        Frequently Asked Questions
      </h2>

      <div class="space-y-6 mt-8">
        <details class="group">
          <summary class="font-bold text-lg flex items-center gap-2 cursor-pointer list-none">
            <UIcon
              name="i-lucide-bug"
              class="w-5 h-5 text-red-500 shrink-0"
              aria-hidden="true"
            />
            I found a bug. How can I report it?
          </summary>
          <p class="text-gray-600 dark:text-gray-400 pl-7 mt-2">
            Please email us with details and (if possible) screenshots. The more info you provide, the faster we can fix it!
          </p>
        </details>

        <details class="group">
          <summary class="font-bold text-lg flex items-center gap-2 cursor-pointer list-none">
            <UIcon
              name="i-lucide-save"
              class="w-5 h-5 text-blue-500 shrink-0"
              aria-hidden="true"
            />
            I lost my progress. Can you restore it?
          </summary>
          <p class="text-gray-600 dark:text-gray-400 pl-7 mt-2">
            Contact us with your <strong>Player ID</strong> (found in the Player Profile popup) and device information. We'll do our best to help.
          </p>
        </details>

        <details class="group">
          <summary class="font-bold text-lg flex items-center gap-2 cursor-pointer list-none">
            <UIcon
              name="i-lucide-help-circle"
              class="w-5 h-5 text-green-500 shrink-0"
              aria-hidden="true"
            />
            How do I play Crossle?
          </summary>
          <p class="text-gray-600 dark:text-gray-400 pl-7 mt-2">
            Crossle is a turn-based PvP word game. Build words on the board using your letters, earn points, and defeat your opponent before the game ends!
          </p>
        </details>
      </div>
    </section>
  </div>
</template>
