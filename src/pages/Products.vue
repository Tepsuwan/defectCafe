<template>
  <LayoutCafe>
    <!-- รูปภาพบนสุด -->
    <div class="bg-cover bg-center h-full relative">
      <img
        class="h-80 w-full object-cover"
        src="https://www.cafe-amazon.com/BackEnd/TempBanner1/e4a8790137dd4dadac10e704e3d92700.png"
        alt="Image"
      />
      <div
        class="absolute inset-0 text-center"
        style="opacity: 100; position: absolute; width: 100"
      >
        <div
          class="text-gray-950 font-extrabold text-2xl sm:text-4xl mt-40"
        ></div>
        <img
          class="mx-auto sm:w-1/2"
          src="https://www.cafe-amazon.com/images/products/products-coffee.png"
          alt=""
        />
      </div>
    </div>
    <!-- <div class="mt-20 sm:mt-60"><ProductDessertComponent /></div> -->
    <div class="mt-20 sm:mt-60"><ProductsComponent /></div>
  </LayoutCafe>
</template>

<script>
import LayoutCafe from "@/layouts/LayoutCafe.vue";
import ProductsComponent from "@/components/ProductsComponent.vue";
// import ProductDessertComponent from "@/components/ProductDessertComponent.vue";
export default {
  name: "ProductPage",
  components: {
    LayoutCafe,
    ProductsComponent,
    // ProductDessertComponent,
  },
};
</script>

<style></style>
