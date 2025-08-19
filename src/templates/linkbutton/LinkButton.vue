<template>
  <Button
    :as="'a'"
    :href="link"
    :title="label"
    :target="target"
    rel="noopener noreferrer"
    :label="label ? capitalizeLetter(String(label).trim()) : undefined"
    :icon="iconPos ? `pi ${icon}` : undefined"
    :iconPos="iconPos === 'left' ? 'left' : iconPos === 'right' ? 'right' : undefined"
    :outlined="outlined"
    :text="text || textLink"
    :severity="severity"
    :size="size === 'small' ? 'small' : undefined"
    class="w-fit no-underline justify-center gap-2 px-4"
    :class="[
      { 'hover:surface-hover': outlined || text },
      { 'flex flex-row-reverse': iconPos === 'left' },
      { 'p-button-icon-only': iconPos === 'center' },
      { 'md:justify-start': iconPos !== 'center' },
      { 'pl-0 pr-0 hover:underline': textLink }
    ]"
    :style="iconPos ? customIconStyle : undefined"
  />
</template>

<script setup>
  import Button from 'primevue/button'

  defineProps({
    icon: {
      type: String,
      required: false
    },
    customIconStyle: {
      type: String,
      required: false
    },
    iconPos: {
      type: String,
      required: false,
      options: ['left', 'right', 'center']
    },
    label: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: true
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: Boolean,
      required: false,
      default: false
    },
    severity: {
      type: String,
      required: false,
      options: ['secondary', 'info']
    },
    target: {
      type: String,
      options: ['_blank', '_self'],
      default: '_self',
      required: false
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      options: ['small', 'medium']
    },
    textLink: {
      type: Boolean,
      required: false
    }
  })

  function capitalizeLetter(word) {
    return word.replace(word[0], word.charAt(0).toUpperCase())
  }
</script>
