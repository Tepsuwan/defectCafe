<template>
  <LayoutCafe>
    <div class="text-center text-black"></div>
    <!-- รูปภาพบนสุด -->
    <div class="sm:grid sm:grid-cols-2 gap-1 pt-10">
      <div class="">
        <img :src="receivedData.image" alt="Cafe Amazon Product" />
      </div>

      <div class="flex flex-col justify-center items-center text-center">
        <h2 class="text-gray-600 font-bold text-3xl">
          {{ receivedData.name }}
        </h2>
        <p class="text-xl text-gray-500 font-bold">
          {{ receivedData.des }}
        </p>

        <div class="text-center grid grid-cols-3 gap-3 mt-6">
          <div v-if="receivedData.h > 1"
            class="bg-zinc-100 hover:bg-emerald-700 numbercircle flex-col cursor-pointer shadow-2xl "
          >
            <i class="text-gray-100 fa-duotone fa-mug-hot text-2xl"></i>
            <p>ร้อน</p>
          </div>
          <div v-if="receivedData.i > 1"
            class="bg-zinc-100 hover:bg-emerald-700 numbercircle flex-col cursor-pointer shadow-2xl"
          >
            <i 
              class="text-gray-100 fa-sharp fa-regular fa-cup-straw-swoosh text-2xl"
            ></i>
            <p>เย็น</p>
          </div>
          <div v-if="receivedData.f > 1"
            class="bg-zinc-100 hover:bg-emerald-700 numbercircle flex-col cursor-pointer shadow-2xl"
          >
            <i class="text-gray-100 fa-duotone fa-cup-straw text-2xl"></i>
            <p>ปั่น</p>
          </div>
        </div>

        <div class="text-ceitemsnter space-x-2">
          <button
            @click="decrement"
            class="px-2 bg-rose-700 text-white font-bold rounded"
          >
            -
          </button>

          <span class="font-bold text-xl">{{ count }}</span>

          <button
            @click="increment"
            class="px-2 bg-emerald-600 text-white font-bold rounded"
          >
            +
          </button>

          <a class="pl-7 w-1/2" href="#">
            <button class="btn btn-success text-gray-100">ยืนยัน</button>
          </a>
          <a class="w-1/2" href="/products?id=drinksId">
            <button class="btn text-gray-100 mt-10">ยกเลิก</button>
          </a>
        </div>
      </div>
    </div>
  </LayoutCafe>
</template>

<script>
import LayoutCafe from "@/layouts/LayoutCafe.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "ProductDetail",
  components: {
    LayoutCafe,
  },
  setup() {
    const count = ref(1);
    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      if (count.value > 1) {
        count.value--;
      }
    };

    const route = useRoute();
    const receivedData = ref("");
    const parseReceivedData = () => {
      if (route.query.receivedData) {
        receivedData.value = JSON.parse(
          decodeURIComponent(route.query.receivedData)
        );
      }
    };

    onMounted(() => {
      parseReceivedData();
    });

    return {
      count,
      increment,
      decrement,
      receivedData,
    };
  },
};
</script>

<style></style>
