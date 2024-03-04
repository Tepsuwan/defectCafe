<!-- Test2Page.vue -->
<template>
  <div>
    <Test @sendItem="getItem" />
  </div>
</template>

<script>
import Test from "./Test.vue";
export default {
  name: "Test2Page",
  components: {
    Test,
  },
  methods: {
    getItem(getItem) {
      console.log(getItem);

      
    },
  },
};
</script>
