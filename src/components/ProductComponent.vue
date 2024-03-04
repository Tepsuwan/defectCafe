<template>
  <CategoryComponent @sendParentCategoryID="getCategoryID" />

  <!-- <div>
    <pre>{{ products }}</pre>
  </div> -->

  <div class="grid grid-cols-3 gap-3 px-3 sm:pb-20">
    <div v-if="products.message"
      class="text-center col-span-3 bg-white rounded-xl py-5 text-2xl font-extrabold text-gray-500">
      ไม่มีสินค้า
    </div>


    <div v-for="(item, key) in products" :key="key" class="text-center bg-white shadow-2xl rounded-xl">
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
  </div>
</template>

<script>
import CategoryComponent from "./CategoryComponent.vue";
import axios from "axios";

export default {
  data() {
    return {
      products: "",

      ParentCategoryID: 2,
      CategoryID: 1,
    };
  },
  components: {
    CategoryComponent,
  },
  mounted() {
    // this.getProducts();
  },
  methods: {
    // getProducts() {
    //   axios
    //     .get("https://defectcafe.com/apiDefectCafe/allProductsCategory", {
    //       params: {
    //         ParentCategoryID: this.ParentCategoryID,
    //       },
    //     })
    //     .then((response) => {
    //       this.products = response.data;
    //       //console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

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
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
