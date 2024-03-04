<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <label for="my-drawer" class="btn"
        ><i class="fa-solid fa-bars"></i
      ></label>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul
        class="menu p-4 w-80 min-h-full text-base-conten text-white bg-base-200"
        style="
          background-image: url('https://www.cafe-amazon.com/images/bg-aica.jpg');
        "
      >
        <li><a href="/">หน้าแรก</a></li>
        <li @click="toggleDropdown">
          <a>สินค้า <i class="fa-solid fa-circle-chevron-down"></i></a>
        </li>
        <li class="ml-3 bg-green-600" v-if="isDropdownVisible === true">
          <a href="/products?id=drinksId"><i class="fa-solid fa-circle-small fa-xs"></i>เครื่องดิ่ม</a>
        </li>
        <li class="ml-3 bg-green-600" v-if="isDropdownVisible === true">
          <a href="/products?id=dessertsId"><i class="fa-solid fa-circle-small fa-xs"></i>ของหวาน</a>
        </li>
        <li class="ml-3 bg-green-600" v-if="isDropdownVisible === true">
          <a href="/products?id=foodsId"><i class="fa-solid fa-circle-small fa-xs"></i>อาหาร</a>
        </li>
        <li><a href="/payment">รายการสั่งซื้อ</a></li>
        <li><a>โปรโมชั่น</a></li>
        <li><a>ข่าวและอัพเดต</a></li>
        <li><a>ร้านและสาขา</a></li>
        <li><a>ร่วมธุรกิจกับเรา</a></li>
        <li><a>ศูนย์ธุรกิจไลฟ์สไตล์</a></li>
        <li><a>เกร็ดความรู้เรื่องกาแฟ</a></li>
        <li><a>ติดต่อเรา</a></li>

        <div class="mt-10">
          <li><a>เกี่ยวกับคาเฟ่ อเมซอน</a></li>
          <li><a>คำถามที่พบบ่อย</a></li>
          <li>
            <a>ความรับผิดชอบต่อสังคม ชุมชน สิ่งแวดล้อม</a>
          </li>
          <li><a>นโยบายความเป็นส่วนตัว</a></li>
          <li><a>นโยบายการใช้คุกกี้</a></li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, nextTick } from "vue";
("vue");
export default {
  name: "DrawerComponent",
  setup() {
    const isDropdownVisible = ref(false);

    const toggleDropdown = async () => {
      isDropdownVisible.value = !isDropdownVisible.value;
      await nextTick();
    };

    return {
      isDropdownVisible,
      toggleDropdown,
    };
  },
};
</script>

<style scoped></style>
