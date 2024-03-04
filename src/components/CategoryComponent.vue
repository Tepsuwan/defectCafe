<template>
  <div>
    <ParentCategoryComponent @sendParentcategory="getParentID" />
    <div class="carousel carousel-center p-4 space-x-4 rounded-box w-full">
      <!-- <div class="carousel-item">
        <button @click="categorySelect('All')"
          class="p-2 sm:p-3 px-6 sm:px-8 rounded-lg font-bold text-gray-100 text-xl bg-green-700 focus:ring focus:ring-green-900">
          ทั้งหมด
        </button>
      </div> -->
      <div v-for="(item, key) in categories" :key="key" class="carousel-item">
        <div v-if="categories.length > 0">
          <button @click="categorySelect(item.CategoryID)"
            class="p-2 sm:p-3 px-6 sm:px-8 rounded-lg font-bold text-gray-100 text-xl bg-green-700 focus:ring focus:ring-green-900">
            <p>{{ item.Name }}</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ParentCategoryComponent from "./ParentCategoryComponent.vue";

export default {
  name: "Test2Page",
  components: {
    ParentCategoryComponent,
  },
  data() {
    return {
      ParentID: 1,
      categories: 1,
    };
  },
  watch: {
    ParentID(ParentID) {
      this.categorySelect(ParentID);
    },
  },
  mounted() {
    this.getCategorys();
  },
  methods: {
    getParentID(ParentID) {
      this.ParentID = ParentID;
      this.getCategorys();
    },
    getCategorys() {
      let params = {
        ParentCategoryID: this.ParentID,
      };

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/categoryParent",
        headers: {
          "Content-Type": "application/json",
        },
        params: params,
      };

      axios
        .request(config)
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    categorySelect(CategoryID) {
      const data = {
        ParentID: this.ParentID,
        CategoryID: CategoryID,
      };
      // ส่งค่าไปยัง data ไปยัง ProductComponent
      this.$emit("sendParentCategoryID", data);


    },
  },
};
</script>

<style></style>
