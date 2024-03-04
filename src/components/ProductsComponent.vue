<template>
  <!-- drinks -->
  <div v-if="productId === 'drinksId'">
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <!-- Coffee Section -->
      <div
        class="grid grid-cols-12 gap-3 mb-3 text-gray-300 py-1 bg-gradient-to-r from-green-700 to-green-600"
      >
        <div class="col-span-6 font-extrabold text-2xl mt-3 sm:mt-2 ml-3">
          กาแฟ
        </div>
        <div class="col-span-2 text-center">
          <div><i class="text-xl fa-duotone fa-mug-hot"></i></div>
          <h2 class="font-bold">ร้อน</h2>
        </div>
        <div class="col-span-2 text-center">
          <div><i class="text-xl fa-regular fa-cup-togo"></i></div>
          <h2 class="font-bold">เย็น</h2>
        </div>
        <div class="col-span-2 text-center">
          <div><i class="text-xl fa-duotone fa-cup-togo"></i></div>
          <h2 class="font-bold">ปั่น</h2>
        </div>
      </div>
      <ul>
        <div v-for="item in filteredDrinksItems" :key="item.id">
          <div v-if="item.category_id === 1">
            <a
              @click="clickDetail(item)"
              class="grid grid-cols-12 gap-3 text-black z-10 hover:bg-green-600 hover:text-white cursor-pointer"
            >
              <div class="col-span-6 font-bold text-lg ml-3">
                {{ item.name }}
              </div>
              <div class="col-span-2 text-center">
                <div v-if="item.hot > 0" class="font-bold text-green-800">
                  <i class="fa-solid fa-coffee-bean"></i>
                </div>
              </div>
              <div class="col-span-2 text-center">
                <div v-if="item.iced > 0" class="font-bold text-green-800">
                  <i class="fa-solid fa-coffee-bean"></i>
                </div>
              </div>
              <div class="col-span-2 text-center">
                <div v-if="item.frappe > 0" class="font-bold text-green-800">
                  <i class="fa-solid fa-coffee-bean"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </ul>

      <!-- Tea Section -->
      <div
        class="grid grid-cols-12 mt-10 gap-3 mb-3 text-gray-300 py-1 bg-gradient-to-r from-green-700 to-green-600"
      >
        <div class="col-span-6 font-extrabold text-2xl mt-3 sm:mt-2 ml-3">
          ชา
        </div>
        <div class="col-span-2 text-center">
          <div><i class="text-xl fa-duotone fa-mug-hot"></i></div>
          <h2 class="font-bold">ร้อน</h2>
        </div>
        <div class="col-span-2 text-center">
          <div><i class="text-xl fa-regular fa-cup-togo"></i></div>
          <h2 class="font-bold">เย็น</h2>
        </div>
        <div class="col-span-2 text-center">
          <div><i class="text-xl fa-duotone fa-cup-togo"></i></div>
          <h2 class="font-bold">ปั่น</h2>
        </div>
      </div>
      <ul>
        <div v-for="item in filteredDrinksItems" :key="item.id">
          <div v-if="item.category_id === 2">
            <a
              @click="clickDetail(item)"
              class="grid grid-cols-12 gap-3 text-black z-10 hover:bg-green-600 hover:text-white cursor-pointer"
            >
              <div class="col-span-6 font-bold text-lg ml-3">
                {{ item.name }}
              </div>
              <div class="col-span-2 text-center">
                <div v-if="item.hot > 0" class="font-bold text-green-800">
                  <i class="fa-solid fa-coffee-bean"></i>
                </div>
              </div>
              <div class="col-span-2 text-center">
                <div v-if="item.iced > 0" class="font-bold text-green-800">
                  <i class="fa-solid fa-coffee-bean"></i>
                </div>
              </div>
              <div class="col-span-2 text-center">
                <div v-if="item.frappe > 0" class="font-bold text-green-800">
                  <i class="fa-solid fa-coffee-bean"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </ul>

      <!-- Tea Section -->
      <div
        class="grid grid-cols-12 mt-10 gap-3 mb-3 text-gray-300 py-1 bg-gradient-to-r from-green-700 to-green-600"
      >
        <div class="col-span-6 font-extrabold text-2xl mt-3 sm:mt-2 ml-3">
          น้ำผลไม้
        </div>
        <div class="col-span-2 text-center">
          <div><i class="text-xl fa-duotone fa-mug-hot"></i></div>
          <h2 class="font-bold">ร้อน</h2>
        </div>
        <div class="col-span-2 text-center">
          <div><i class="text-xl fa-regular fa-cup-togo"></i></div>
          <h2 class="font-bold">เย็น</h2>
        </div>
        <div class="col-span-2 text-center">
          <div><i class="text-xl fa-duotone fa-cup-togo"></i></div>
          <h2 class="font-bold">ปั่น</h2>
        </div>
      </div>
      <ul>
        <div v-for="item in filteredDrinksItems" :key="item.id">
          <div v-if="item.category_id === 3">
            <a
              @click="clickDetail(item)"
              class="grid grid-cols-12 gap-3 text-black z-10 hover:bg-green-600 hover:text-white cursor-pointer"
            >
              <div class="col-span-6 font-bold text-lg ml-3">
                {{ item.name }}
              </div>
              <div class="col-span-2 text-center">
                <div v-if="item.hot > 0" class="font-bold text-green-800">
                  <i class="fa-solid fa-coffee-bean"></i>
                </div>
              </div>
              <div class="col-span-2 text-center">
                <div v-if="item.iced > 0" class="font-bold text-green-800">
                  <i class="fa-solid fa-coffee-bean"></i>
                </div>
              </div>
              <div class="col-span-2 text-center">
                <div v-if="item.frappe > 0" class="font-bold text-green-800">
                  <i class="fa-solid fa-coffee-bean"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </ul>
    </div>
  </div>

  <!-- desserts -->
  <div v-if="productId === 'dessertsId'">
    <div
      class="text-center text-2xl font-bold text-white bg-gradient-to-r from-green-700 to-green-600"
    >
      ของหวาน
    </div>
    <div class="grid grid-cols-12 gap-1 sm:gap-5 px-3 sm:px-3">
      <div
        v-for="(item, key) in filteredDessertsItems"
        :key="key"
        class="col-span-4 mt-5"
      >
        <div v-if="item.category_id == 7">
          <div class="skeleton h-40 sm:h-72 w-full bg-gray-300">
            <img class="h-36 sm:h-64 mx-auto" :src="item.image" alt="" />
          </div>
          <div
            class="skeleton h-6 sm:h-10 sm:text-xl w-full mt-1 sm:pt-1 font-bold text-center text-el"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const productId = route.query.id;
    const productDetail = route.query.detail;

    const filteredDrinksItems = ref([]);
    const filteredDessertsItems = ref([]);

    const isLoading = ref(false);
    const errorMessage = ref("");

    const getCategoryName = (categoryId) => {
      switch (categoryId) {
        case 1:
          return "Coffee";
        case 2:
          return "Tea";
        case 3:
          return "Juice";
        default:
          return "Unknown";
      }
    };

    const getData = async () => {
      isLoading.value = true;
      try {
        const response = await axios.post(
          "https://defectcafe.com/apiDefectCafe/product_api"
        );
        const items = response.data;

        filteredDrinksItems.value = items
          .filter((item) => item.category_id >= 1 && item.category_id <= 3)
          .map((item) => ({
            ...item,
            categoryName: getCategoryName(item.category_id),
          }));

        filteredDessertsItems.value = items
          .filter((item) => item.category_id === 7)
          .map((item) => ({
            ...item,
            categoryName: "Dessert",
          }));
      } catch (error) {
        errorMessage.value = "Error fetching data: " + error.message;
      } finally {
        isLoading.value = false;
      }
    };

    const clickDetail = (data) => {
      // Prepare your data object
      const receivedData = {
        item: data.item_id,
        name: data.name,
        image: data.image,
        price: data.price,
        des: data.description,
        h: data.hot,
        i: data.iced,
        f: data.frappe,
        cat: data.category_id,
      };

      const serializedData = encodeURIComponent(JSON.stringify(receivedData));

      //console.log(receivedData);
      router.push({
        path: "/productDetail",
        query: { receivedData: serializedData },
      });
    };

    onMounted(() => {
      getData();
    });

    return {
      filteredDrinksItems,
      filteredDessertsItems,
      isLoading,
      errorMessage,
      productId,
      productDetail,

      clickDetail,
    };
  },
};
</script>

<style></style>
