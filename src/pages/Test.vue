<template>
  <div class="bg-red-500 h-screen">
    <PanelSidebar />

  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: "TestPage",
  components: {
  }
  ,
  mounted() {
    axios.get('https://defectcafe.com/apiDefectCafe/test')
      .then(response => {
        // รับข้อมูลที่ส่งกลับมา
        console.log(response.data);
      })
      .catch(error => {
        // แสดงข้อผิดพลาดที่เกิดขึ้น
        console.error('Error fetching data:', error);
      });
  },
}
</script>

<style lang="">

</style>