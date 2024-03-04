<template>
  <LayoutCafeVue>
    <div class="text-center text-2xl text-gray-500 font-extrabold pt-10">
      Defact Cafe`
    </div>
    <div><ImageAboveComponent /></div>
    <div><ProductComponent /></div>

    <FooterComponent />
  </LayoutCafeVue>
</template>

<script>
import LayoutCafeVue from "@/layouts/LayoutCafe.vue";
import ImageAboveComponent from "@/components/ImageAboveComponent.vue";
import ProductComponent from "@/components/ProductComponent.vue";

import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomePage",
  components: {
    LayoutCafeVue,
    ImageAboveComponent,
    ProductComponent,
    FooterComponent,
  },
};
</script>

<style scoped></style>
