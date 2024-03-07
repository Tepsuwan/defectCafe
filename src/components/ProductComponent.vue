<template>
  <CategoryComponent @sendParentCategoryID="getCategoryID" />

  <div class="grid grid-cols-3 gap-3 px-3 sm:pb-20">
    <div v-if="products.message"
      class="text-center col-span-3 bg-white rounded-xl py-5 text-2xl font-extrabold text-gray-500">
      ไม่มีสินค้า
    </div>


    <div v-for="(item, key) in products" :key="key" class="text-center bg-white shadow-2xl rounded-xl"
      onclick="my_modal_1.showModal()" @click="click(item)">
      <div v-if="!products.message">
        <img :src="item.Image" :alt="item.Name" />

        <div class="bg-gray-100 pt-2 rounded-b-xl shadow-2xl">
          <p class="text-black font-bold text-md sm:text-xl text-el">
            {{ item.Name }}
          </p>
          <div class="flex justify-center text-el">
            <p class="text-green-600 font-bold text-lg sm:text-2xl pb-3">
              {{ item.Iced }}
            </p>
            <p class="text-black font-bold text-md sm:text-2xl ml-1">บาท</p>
          </div>
        </div>
      </div>
    </div>

    <!-- เปิด modal รายการสินค้า -->
    <dialog id="my_modal_1" class="modal">

      <div class="modal-box bg-white">
        <h3 class="font-extrabold text-2xl sm:text-3xl text-center text-gray-400">Defect Cafe`</h3>
        <div v-if="selectProduct">
          <div>
            <div class="modal-action">
              <form method="dialog">
                <div class="grid grid-cols-2 gap-1">
                  <div>
                    <img :src="selectProduct.Image" :alt="selectProduct.Name">
                  </div>
                  <div class="flex flex-col items-center justify-center space-y-3 sm:space-y-5">
                    <span class="font-extrabold text-xl sm:text-3xl">{{ selectProduct.Name }}</span>
                    <div class="flex items-center justify-center space-x-3 sm:space-x-5">
                      <div @click="decrement" class="px-2 bg-rose-700 text-xl text-white font-bold rounded">-</div>
                      <span class="font-bold text-xl">{{ count }}</span>
                      <div @click="increment" class="px-2 bg-emerald-600 text-2xl text-white font-bold rounded">+</div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-3 mt-6">
                  <div class="btn btn-success text-xl text-white">ยืนยัน</div>
                  <button class="btn text-xl text-white">ยกเลิก</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </dialog>


  </div>
</template>

<script>
import CategoryComponent from "./CategoryComponent.vue";
import axios from "axios";

export default {
  data() {
    return {
      products: "",
      selectProduct: "",
      count: 1,

      ParentCategoryID: 2,
      CategoryID: 45,
    };
  },
  components: {
    CategoryComponent,
  },
  mounted() {
    // this.getProducts();
  },
  methods: {
    click(data) {
      this.selectProduct = data;

      console.log(this.selectProduct);
    },

    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 1) {
        this.count--;
      }
    },

    // รับค่า CategoryID และ ParentID เพื่อ get products
    getCategoryID(data) {
      this.CategoryID = data.CategoryID;
      this.ParentID = data.ParentID;
      //console.log(this.CategoryID);
      let data2 = {
        CategoryID: data.CategoryID,
        ParentCategoryID: data.ParentID,
      };

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://defectcafe.com/apiDefectCafe/productCategory?CategoryID=${data2.CategoryID}&ParentCategoryID=${data2.ParentCategoryID}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data2,
      };

      axios
        .request(config)
        .then((response) => {
          this.products = response.data;
          //console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
