<template>
    <LayoutCafe>
        <h1 class="text-center pt-20 text-3xl text-gray-500 font-extrabold">
            โปรโมชั่น
        </h1>
        <div v-if="promotion" class="text-center">
            <div class="p-5" v-for="(item, key) in promotion" :key="key">
                <img :src="item.Image" :alt="item.Name">
                <!-- <p class="text-md sm:text-2xl mt-5 text-gray-500 font-bold">{{ item.Description }}</p> -->
            </div>
        </div>

        <div v-else class="text-center">
            <p>Loading...</p>
        </div>

        <FooterComponent />
    </LayoutCafe>
</template>

<script>
import axios from 'axios';
import LayoutCafe from "@/layouts/LayoutCafe.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
    name: "PromotionPage",
    components: {
        LayoutCafe,
        FooterComponent,
    },
    data() {
        return {
            promotion: "",
        }
    },
    mounted() {
        this.getPromotions();
    },
    methods: { // 'methods', not 'method'
        async getPromotions() { // 'methods', not 'method'
            try {
                const response = await axios.get('https://defectcafe.com/apiDefectCafe/promotion');
                this.promotion = response.data;
                console.log(this.promotion);
            } catch (error) {
                console.log('Error getting promotion data:', error)
            }
        }
    }
}
</script>

<style>
/* Add your styles here if needed */
</style>
