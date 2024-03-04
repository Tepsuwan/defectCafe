<template>
  <!-- ปุ้มเปิด Modal -->
  <button
    class="btn btn-outline btn-success hover:text-white"
    onclick="my_modal_3.showModal()"
  >
    + เพิ่มหมวดหมู่สินค้า
  </button>

  <!-- ส่วนแสดง modal -->
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box bg-white">
      <h3 class="font-bold text-lg text-gray-600">เพิ่มหมวดหมู่</h3>

      <div class="grid grid-cols-12 py-4">
        <div
          class="col-span-3 text-center font-bold text-gray-600 mt-2 sm:mt-3"
        >
          หมวดหมู่
        </div>
        <div class="col-span-9">
          <select
            class="select select-bordered w-full bg-slate-200 text-gray-400 font-bold"
            v-model="increase.ParentCategoryID"
          >
            <option :value="1">อาหาร</option>
            <option :value="2">เครื่องดิ่ม</option>
            <option :value="3">ของหวาน</option>
            <option :value="4">อื่นๆ</option>
          </select>
        </div>

        <div
          class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
        >
          ประเภท
        </div>
        <div class="col-span-9 mt-3">
          <input
            v-model="increase.Name"
            type="text"
            placeholder="ประเภท"
            class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
          />
        </div>
      </div>
      <div class="flex justify-around gap-3">
        <button
          @click="increaseCategory()"
          class="text-center btn btn-success text-white w-1/2"
        >
          ยืนยัน
        </button>
        <button
          class="btn btn-error text-white w-1/2"
          onclick="document.getElementById('my_modal_3').close()"
        >
          ปิด
        </button>
      </div>
    </div>
  </dialog>

  <!-- ส่วนแสดงหัวข้อตาราง -->
  <div
    class="grid grid-cols-12 gap-1 bg-gradient-to-t from-green-400 to-green-800 text-white mt-5 rounded-md py-1"
  >
    <div class="col-span-3 text-center">หมวดหมู่</div>
    <div class="col-span-5 text-center">ประเภท</div>
    <div class="col-span-4 text-center">จัดการ</div>
  </div>

  <!-- ส่วนแสดงข้อมูลในตาราง -->
  <div v-for="(item, key) in category" :key="key">
    <div class="grid grid-cols-12 gap-1 py-1 font-bold">
      <div class="col-span-3 text-center">{{ item.ParentCategoryID }}</div>
      <div class="col-span-5">{{ item.Name }}</div>
      <div class="col-span-4 text-center">
        <div class="grid grid-cols-2 gap-1">
          <div
            @click="showChange(item)"
            class="cursor-pointer text-center bg-amber-500 text-white rounded-md"
          >
            แก้ไข
          </div>
          <div
            @click="deleteCategory(item.CategoryID)"
            class="cursor-pointer text-center bg-rose-500 text-white rounded-md"
          >
            ลบ
          </div>
        </div>
      </div>
    </div>

    <div v-if="formChangeCategory">
      <div v-if="change.CategoryID == item.CategoryID">
        <div class="grid grid-cols-12 pb-5 p-5 sm:p-10 sm:text-xl shadow-2xl">
          <div
            class="col-span-3 text-center font-bold text-gray-600 mt-2 sm:mt-3"
          >
            หมวดหมู่
          </div>
          <div class="col-span-9">
            <select
              class="select select-bordered w-full bg-slate-200 text-gray-400 font-bold"
              v-model="change.ParentCategoryID"
            >
              <option :value="1">อาหาร</option>
              <option :value="2">เครื่องดิ่ม</option>
              <option :value="3">ของหวาน</option>
              <option :value="4">อื่นๆ</option>
            </select>
          </div>
          <div
            class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-3"
          >
            หมวดหมู่
          </div>

          <div class="col-span-9 mt-3">
            <input
              type="text"
              v-model="change.Name"
              placeholder="ชื่อ"
              class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
            />
          </div>
          <div
            @click="changeCategory"
            class="col-start-2 col-span-5 mt-3 text-center btn btn-success text-white"
          >
            ยืนยัน
          </div>
          <div
            @click="formChangeCategory = false"
            class="col-start-8 col-span-5 mt-3 text-center btn btn-error text-white"
          >
            ยกเลิก
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      category: "",
      formChangeCategory: false,

      increase: {
        Name: "",
        ParentCategoryID: "",
      },

      change: {
        CategoryID: "",
        Name: "",
        ParentCategoryID: "",
      },
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/category",
        headers: {},
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          this.category = response.data;
          //console.log(this.category);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    showChange(data) {
      this.formChangeCategory = !this.formChangeCategory;

      this.change.CategoryID = data.CategoryID;
      this.change.Name = data.Name;
      this.change.ParentCategoryID = data.ParentCategoryID;
    },

    changeCategory() {
      let data = {
        CategoryID: this.change.CategoryID,
        Name: this.change.Name,
        ParentCategoryID: this.change.ParentCategoryID,
      };

      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/category",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.getCategory();
          this.formChangeCategory = false;
          Swal.fire({
            icon: "success",
            title: "แกไขข้อมูลสำเร็จ",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteCategory(CategoryID) {
      let data = {
        CategoryID: CategoryID,
      };

      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/category",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));

          this.getCategory();
          Swal.fire({
            icon: "success",
            title: "ลบหมวดหมู่สำเร็จ",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    increaseCategory() {
      let data = {
        Name: this.increase.Name,
        ParentCategoryID: this.increase.ParentCategoryID,
      };

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/category",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));

          this.getCategory();
          document.getElementById("my_modal_3").close();
          Swal.fire({
            icon: "success",
            title: "เพิ่มรูปภาพสำเร็จ",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
