<template>
  <LayoutCafe>
    <h1 class="text-center pt-20 text-3xl text-gray-500 font-extrabold">
      รายการชำระเงิน
    </h1>

    <div v-for="(item, key) in listOrder" :key="key">
      <div class="grid grid-cols-4 gap-1 px-3 shadow-2xl mt-5 bg-white">
        <div class="">
          <img :src="item.image" alt="item" />
        </div>
        <div class="col-span-2 ml-5 flex items-center">
          <div>
            <h2 class="text-gray-400 font-bold">{{ item.name }}</h2>
            <p class="text-green-600 font-bold text-2xl">{{ item.Price }}</p>
            <p class="text-gray-400 font-bold">
              จำนวน {{ item.Quantity }} แก้ว
            </p>
          </div>
        </div>

        <div class=" flex items-center">
          <button class="btn btn-neutral bg-gray-100 mt-5">
            <i class="fa-duotone fa-trash"></i> ลบ
          </button>
        </div>
      </div>

      <!-- ส่วนของการชำระเงิน -->
      <div class="fixed bottom-0 left-0 right-0 z-50 p-6 bg-gray-200">
        <div class="flex justify-between">
          <div class="">
            <p class="text-gray-500 font-extrabold text-2xl">ราคารวม</p>
          </div>
          <div class="flex space-x-3">
            <p class="text-amber-500 font-extrabold text-2xl">
              {{ item.TotalAmount }}
            </p>
            <div class="text-end font-extrabold text-xl mt-1">บาท</div>
          </div>
        </div>
        <button class="btn btn-success w-full text-white mt-3">
          สั่งซื้อเลย
        </button>
      </div>
    </div>
  </LayoutCafe>
</template>

<script>
import axios from "axios";
import LayoutCafe from "@/layouts/LayoutCafe.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "PaymantPage",
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

    // axios order
    const listOrder = ref([]);
    const getOrderApi = async () => {
      try {
        const response = await axios.post(
          "https://defectcafe.com/apiDefectCafe/order_api",
          { orderId: "1" }
        );
        listOrder.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      parseReceivedData();
      getOrderApi();
    });

    return {
      count,
      increment,
      decrement,
      receivedData,

      listOrder,
    };
  },
};
</script>

<style></style>
