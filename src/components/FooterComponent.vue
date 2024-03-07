<template>
  <div
    class="fixed bottom-0 left-0 z-50 w-full h-16 sm:h-24 bg-gradient-to-r from-green-700 to-green-500 border-t border-gray-200">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      <a href="/" type="button"
        class="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
        <i class="fa-duotone fa-house group-hover:text-blue-600  text-white"></i>
        <span class="text-sm text-white group-hover:text-blue-600">หน้าแรก</span>
      </a>
      <button type="button"
        class="inline-flex flex-col items-center justify-center px-5 border-e border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
        <i class="fa-duotone fa-list text-white group-hover:text-blue-600"></i>
        <span class="text-sm text-white group-hover:text-blue-600">รายการ</span>
      </button>
      <button type="button"
        class="inline-flex flex-col items-center justify-center px-5 border-e border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
        <i class="fa-solid fa-money-check-dollar text-white group-hover:text-blue-600"></i>
        <span class="text-sm text-white group-hover:text-blue-600">ชำระเงิน</span>
      </button>
      <a href="/promotion" type="button"
        class="inline-flex flex-col items-center justify-center px-5 border-e border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
        <i class="fa-duotone fa-crown text-white group-hover:text-blue-600"></i>
        <span class="text-sm text-white group-hover:text-blue-600">โปรโมชั่น</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style></style>
