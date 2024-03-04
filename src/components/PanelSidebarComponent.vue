<template>
    <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
            <!-- Page content here -->
            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
                <i class="fa-solid fa-bars"></i>
            </label>

        </div>
        <div class="drawer-side">
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li><a href="#">หน้าแรก</a></li>
                <li><a hred="#">ออกแบบหน้าเว็บ</a></li>
            </ul>

        </div>
    </div>
</template>
<script>

export default {
    name: "PanelSidebar"
}
</script>
<style scoped></style>