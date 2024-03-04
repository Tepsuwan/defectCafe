<template>
  <div class="px-5 grid grid-cols-4 gap-3">
    <button
      v-for="(item, key) in parentCategory"
      :key="key"
      class="p-3 bg-gradient-to-r from-gray-100 via-gray-100 to-gray-100 shadow-2xl rounded-xl focus:ring focus:ring-gray-400"
    >
      <div
        @click="sendParentcategory( item.ParentCategoryID )"
        class="text-center"
      >
        <img
          class="mx-auto h-10 sm:h-28 w-full"
          :src="item.Image"
          :alt="item.Name"
        />
      </div>
      <div class="text-center text-gray-500 font-extrabold mt-2">
        <p class="whitespace-nowrap">{{ item.Name }}</p>
      </div>
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ParentCategoryComponent",
  emits: ["sendParentcategory"],
  data() {
    return {
      parentCategory: "",
    };
  },
  mounted() {
    this.getParentCategory();
  },
  methods: {
    sendParentcategory(ParentCategoryID) {
      this.$emit("sendParentcategory", ParentCategoryID);
    },
    getParentCategory() {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/parentCategory",
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          this.parentCategory = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
