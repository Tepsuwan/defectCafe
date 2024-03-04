<template>
  <LayoutPanel>
    <div class="mt-12">
      <div class="mt-10"><PanelImagesAboveComponentVue /></div>
      <div class="mt-10"><PanelCategoryComponent /></div>
      <div class="mt-10"><PanelProductComponent /></div>

      <!-- <PanelTable /> -->
    </div>
  </LayoutPanel>
</template>

<script>
import LayoutPanel from "@/layouts/LayoutPanel.vue";
import PanelCategoryComponent from "@/components/PanelCategoryComponent.vue";
import PanelImagesAboveComponentVue from "@/components/PanelImagesAboveComponent.vue";
import PanelProductComponent from "@/components/PanelProductComponent.vue";

// import PanelTable from "@/components/PanelTableComponent.vue";
export default {
  name: "PanelPage",
  components: {
    LayoutPanel,
    PanelImagesAboveComponentVue,
    PanelCategoryComponent,
    PanelProductComponent,
    // PanelTable,
  },
};
</script>

<style></style>
