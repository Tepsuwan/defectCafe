<template>
  <div class="carousel carousel-center p-4 space-x-4 rounded-box">

    <div v-for="(item, key) in images" :key="key" class="carousel-item">
      <img :src="item.Image" class="rounded-box h-60 w-full" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    this.getImage();
  },
  methods: {
    getImage() {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/images",
      };

      axios
        .request(config)
        .then((response) => {
          this.images = response.data;
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
