<template>
  <div class="min-h-screen bg-white bg-fixed hover:bg-fixed" :style="'background-image: url(' + bg + ');'">
    <!-- ส่วนของ header -->
    <HeaderPanelComponentVue></HeaderPanelComponentVue>
    <div class="pt-8 md:pt-14 min-h-screen transition-position">
      <div class="p-5 xl:max-w-7xl xl:mx-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPanelComponentVue from '@/components/HeaderPanelComponent.vue';
import background from "../assets/images/bgImage.jpg";
import { ref } from "vue";
export default {
  name: "LayoutPanel",
  components: {
    HeaderPanelComponentVue
  },
  setup() {
    const bg = ref(background);
    return {
      bg,
    };
  },
};
</script>

<style></style>
