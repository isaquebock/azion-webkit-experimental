<template>
  <div class="bg-transparent ">
    <section
      aria-label="main section"
      class="bg-cover bg-center bg-no-repeat h-[34rem] flex items-center relative"
      style="background-image: url('/assets/images/background.png')"
    >
      <div class="container mx-auto px-4 relative z-10">
        <div class="">
          <h1 class="text-neutral-100 font-sora text-4xl md:text-6xl mb-6 md:text-left text-center">
            The Web Platform to Build, Secure and Scale applications
          </h1>
          <div
            class="flex justify-between flex-col-reverse gap-4 md:gap-0 md:flex-row flex-wrap md:flex-nowrap"
          >
            <div class="flex gap-4 w-full justify-center md:justify-start">
              <Button
                type="secondary"
                size="large"
                label="View demo"
                icon="pi pi-chevron-right"
              ></Button>
              <Button
                type="secondary"
                size="large"
                label="View demo"
                icon="pi pi-chevron-right"
              ></Button>
            </div>
            <p
              class="md:max-w-[33rem] w-full font-sora text-neutral-100 md:text-base text-xs md:text-left text-center"
            >
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import Button from '../../components/Button'

  const props = defineProps({
    description: {
      type: String,
      default:
        'We make every application fast and reliable. Deploy your project instantly on the most reliable global network, leverage enterprise-grade security, and scale from zero to peak without cold start.'
    }
  })
</script>
