<template>
  <LayoutCafe>
    <div class="text-center text-2xl text-gray-500 font-extrabold pt-10">
      Defact Cafe`
    </div>

    <ImageAboveComponent />
    <ProductComponent />

  </LayoutCafe>
  <FooterComponent />
</template>

<script>
import LayoutCafe from "@/layouts/LayoutCafe.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ImageAboveComponent from "@/components/ImageAboveComponent.vue";
import ProductComponent from "@/components/ProductComponent.vue";

export default {
  name: "Home2Page",
  components: {
    LayoutCafe,
    FooterComponent,
    ImageAboveComponent,
    ProductComponent,
  },
};
</script>

<style></style>
