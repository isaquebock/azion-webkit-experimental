<template>
  <section class="h-[600px] text-white bg-black">
    <div>
      <h2>Build</h2>

      <div>
        <div>conteudo</div>
        <div>conteudo</div>
      </div>
    </div>
    <div>image</div>
  </section>
</template>

<script setup>
  // Props
  const props = defineProps({
    backgroundColor: {
      type: String,
      default: '#ff5100'
    }
  })
</script>
