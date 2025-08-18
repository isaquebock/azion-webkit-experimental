<template>
  <footer class="py-3 bg-transparent border-t border-solid border-neutral-800 bg-white">
    <div class="flex flex-col gap-9 px-6 max-w-[1600px] mx-auto">
      <div class="flex justify-between sm:gap-12 gap-0 mb-8 flex-wrap sm:flex-nowrap">
        <div class="w-full"></div>
        <div class="w-full font-proto-mono text-black text-xs">{{ cta.text }} {{ cta.phone }}</div>
      </div>
      <div class="flex flex-col box-border gap-14 lg:flex-row justify-between w-full">
        <div class="flex justify-between w-full">
          <h3 class="text-7xl text-black leading-none w-[520px] font-sora tracking-tight">
            Our Mission is to <strong class="font-sora">Power</strong> the Hyper-Connected Economy
          </h3>
        </div>
        <div class="flex flex-wrap gap-y-6 gap-x-1 justify-between w-full">
          <div
            :key="index"
            v-for="({ title, list }, index) in listData"
            class="w-1/4 text-black"
          >
            <slot name="list-data" />
            <span class="font-proto-mono text-xs pb-2 mb-4 border-b border-black w-full block">{{
              title
            }}</span>
            <ul class="list-none p-0 m-0 mt-4 flex flex-col gap-2">
              <li
                v-for="({ link, title }, i) in list"
                :key="i"
                class="text-sm"
              >
                <a
                  :href="link"
                  target="_blank"
                  class="font-sora relative inline-block transition-colors duration-300 hover:text-gray-700 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  {{ title }}
                </a>
              </li>
            </ul>
          </div>
          <div class="w-1/4 text-black">
            <ul class="list-none p-0 m-0 mt-4 flex flex-col gap-2">
              <li class="text-sm">
                <a
                  :href="link"
                  target="_blank"
                  class="font-sora relative inline-block transition-colors duration-300 hover:text-gray-700 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  redes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <Divider />
      </div>
      <div class="flex justify-between md:items-center flex-col md:flex-row gap-8">
        <div class="w-full"></div>
        <div class="w-full font-proto-mono text-black text-xs">
          {{ copyright }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import Divider from 'primevue/divider'

  defineProps({
    lang: {
      type: String,
      required: true
    },
    listData: {
      type: Array,
      required: true
    },
    copyright: {
      type: String,
      required: true
    },
    cta: {
      type: Object,
      required: true
    },
    socialButtons: {
      type: Array,
      required: false
    }
  })
</script>
