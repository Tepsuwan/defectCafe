<template>
  <div>
    <input type="text" v-model="name" placeholder="Enter your name">
    <input type="file" ref="fileInput" multiple @change="handleFileUpload">
    <div v-if="selectedImages.length > 0">
      <h3>Selected Images:</h3>
      <ul>
        <li v-for="(image, index) in selectedImages" :key="index">
          <img :src="image" alt="Selected Image">
        </li>
      </ul>
    </div>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "TestPage",
  data() {
    return {
      name: '',
      selectedImages: [],
    };
  },
  methods: {
    async uploadImages(images, name) {
      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append(`image${index + 1}`, image);
      });
      // Append the name to the FormData
      formData.append('name', name);

      try {
        const response = await axios.post('https://defectcafe.com/apiDefectCafe/postImage', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Upload successful', response);
      } catch (error) {
        console.error('Error uploading images', error);
      }
    },
    handleFileUpload() {
      const files = this.$refs.fileInput.files;
      if (files.length > 0) {
        // Convert FileList to Array
        const imagesArray = Array.from(files);
        // Call uploadImages method to handle the upload
        this.uploadImages(imagesArray, this.name);

        // Display selected images
        this.selectedImages = [];
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.selectedImages.push(e.target.result);
          };
          reader.readAsDataURL(files[i]);
        }
      }
    },
    submit() {
      // You can add additional logic here if needed
      this.handleFileUpload();
    },
  },
};
</script>