<template>
  <div
    class="bg-cover min-h-screen"
    :style="'background-image: url(' + bg + ');'"
  >
    <div class="fixed top-0 left-0 right-0 z-50 p-3 flex justify-between">
      <div>
        <DrawerComponentVue />
      </div>
      <!-- <div class="cursor-pointer">
        <img
          src="https://www.cafe-amazon.com/images/logo-for-mobile.png"
          alt="logo"
        />
      </div> -->
      <div class="text-2xl cursor-pointer">
        <i class="fab fa-facebook"></i>
      </div>
    </div>
    <div class="min-h-screen transition-position">
      <div class="xl:max-w-7xl xl:mx-auto pb-20">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import DrawerComponentVue from "@/components/DrawerComponent.vue";
import background from "../assets/images/bgImage.jpg";
import { ref } from "vue";
export default {
  name: "LayoutCafe",
  components: {
    DrawerComponentVue,
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
