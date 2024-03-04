<template>
  <div class="zz bg-gradient-to-r from-green-800 to-green-600 fixed w-full">
    <nav
      class="container px-6 py-5 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/panel"
          class="text-xl font-bold text-zinc-300 md:text-2xl hover:text-zinc-500"
          >Defect Cafe`
        </router-link>

        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-zinc-300 hover:text-zinc-400 focus:outline-none focus:text-zinc-50"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="text-zinc-300 hover:text-zinc-500">
          <i class="fa-sharp fa-solid fa-house"></i>
          <router-link class="pl-1" to="/panel">หน้าแรก</router-link>
        </li>
        <li class="text-zinc-300 hover:text-zinc-500">
          <i class="fa-regular fa-users"></i
          ><router-link class="pl-1" to="/panel">สมาชิก</router-link>
        </li>
        <li @click="logout" class="text-zinc-300 hover:text-zinc-500">
          <i class="fa-solid fa-right-from-bracket"></i>
          <router-link class="pl-1" to="/panel">ออกจากระบบ</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HeaderPanelComponent",
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);

    return { showMenu, toggleNav };
  },
};
</script>

<style></style>
