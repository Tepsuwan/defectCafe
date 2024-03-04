<template>
  <!-- ปุ้มเปิด Modal -->
  <button
    class="btn btn-outline btn-success hover:text-white"
    onclick="my_modal_4.showModal()"
  >
    + เพิ่มสินค้า
  </button>

  <!-- ส่วนแสดง modal -->
  <dialog id="my_modal_4" class="modal">
    <div class="modal-box bg-white">
      <h3 class="font-bold text-lg text-gray-600">เพิ่มสินค้า</h3>

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
          <select
            class="select select-bordered w-full bg-slate-200 text-gray-400 font-bold"
            v-model="increase.CategoryID"
          >
            <option
              v-for="(item, key) in category"
              :key="key"
              :value="item.CategoryID"
            >
              {{ item.Name }}
            </option>
          </select>
        </div>

        <div
          class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
        >
          ชื่อสินค้า
        </div>
        <div class="col-span-9 mt-3">
          <input
            v-model="increase.Name"
            type="text"
            placeholder="ชื่อสินค้า"
            class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
          />
        </div>

        <div
          v-if="increase.ParentCategoryID != 2"
          class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
        >
          ราคา
        </div>
        <div v-if="increase.ParentCategoryID != 2" class="col-span-9 mt-3">
          <input
            v-model="increase.Price"
            type="text"
            placeholder="ราคา"
            class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
          />
        </div>

        <div
          v-if="increase.ParentCategoryID == 2"
          class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
        >
          ราคาร้อน
        </div>
        <div v-if="increase.ParentCategoryID == 2" class="col-span-9 mt-3">
          <input
            v-model="increase.Hot"
            type="text"
            placeholder="ราคาร้อน"
            class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
          />
        </div>

        <div
          v-if="increase.ParentCategoryID == 2"
          class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
        >
          ราคาเย็น
        </div>
        <div v-if="increase.ParentCategoryID == 2" class="col-span-9 mt-3">
          <input
            v-model="increase.Iced"
            type="text"
            placeholder="ราคาเย็น"
            class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
          />
        </div>

        <div
          v-if="increase.ParentCategoryID == 2"
          class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
        >
          ราคาปั่น
        </div>
        <div v-if="increase.ParentCategoryID == 2" class="col-span-9 mt-3">
          <input
            v-model="increase.Frappe"
            type="text"
            placeholder="ราคาปั่น"
            class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
          />
        </div>

        <div
          class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
        >
          รูปภาพ
        </div>
        <div class="col-span-9 mt-3">
          <input
            v-model="increase.Image"
            type="text"
            placeholder="รูปภาพ"
            class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
          />
        </div>
      </div>
      <div class="flex justify-around gap-3">
        <button
          @click="insertProduct()"
          class="text-center btn btn-success text-white w-1/2"
        >
          ยืนยัน
        </button>
        <button
          class="btn btn-error text-white w-1/2"
          onclick="document.getElementById('my_modal_4').close()"
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
    <div class="col-span-3 text-center text-el">ประเภท</div>
    <div class="col-span-6 text-center text-el">ชื่อ</div>
    <div class="col-span-3 text-center text-el">จัดการ</div>
  </div>

  <div v-for="(item, key) in products" :key="key">
    <div class="grid grid-cols-12 gap-1 text-sm sm:text-lg font-bold mt-1">
      <div class="col-span-3 text-center text-el">
        {{ item.ParentCategoryID }}
      </div>
      <div class="col-span-6 text-el">{{ item.Name }}</div>
      <div class="col-span-3 text-center text-el">
        <div class="grid grid-cols-2 gap-1">
          <div
            @click="showChange(item)"
            class="cursor-pointer text-center bg-amber-500 text-white rounded-md"
          >
            แก้ไข
          </div>
          <div
            @click="deleteProduct(item.ProductID)"
            class="cursor-pointer text-center bg-rose-500 text-white rounded-md"
          >
            ลบ
          </div>
        </div>
      </div>
    </div>

    <div v-if="formChangeProducts">
      <div v-if="change.ProductID == item.ProductID">
        <div class="grid grid-cols-12 py-4">
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
            class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
          >
            ประเภท
          </div>
          <div class="col-span-9 mt-3">
            <select
              class="select select-bordered w-full bg-slate-200 text-gray-400 font-bold"
              v-model="change.CategoryID"
            >
              <option
                v-for="(item, key) in category"
                :key="key"
                :value="item.CategoryID"
              >
                {{ item.Name }}
              </option>
            </select>
          </div>

          <div
            class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
          >
            ชื่อสินค้า
          </div>
          <div class="col-span-9 mt-3">
            <input
              v-model="change.Name"
              type="text"
              placeholder="ชื่อสินค้า"
              class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
            />
          </div>
          <div
            v-if="change.ParentCategoryID != 2"
            class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
          >
            ราคา
          </div>
          <div v-if="change.ParentCategoryID != 2" class="col-span-9 mt-3">
            <input
              v-model="change.Price"
              type="text"
              placeholder="ราคา"
              class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
            />
          </div>

          <div
            v-if="change.ParentCategoryID == 2"
            class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
          >
            ราคาร้อน
          </div>
          <div v-if="change.ParentCategoryID == 2" class="col-span-9 mt-3">
            <input
              v-model="change.Hot"
              type="text"
              placeholder="ราคาร้อน"
              class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
            />
          </div>

          <div
            v-if="change.ParentCategoryID == 2"
            class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
          >
            ราคาเย็น
          </div>
          <div v-if="change.ParentCategoryID == 2" class="col-span-9 mt-3">
            <input
              v-model="change.Iced"
              type="text"
              placeholder="ราคาเย็น"
              class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
            />
          </div>

          <div
            v-if="change.ParentCategoryID == 2"
            class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
          >
            ราคาปั่น
          </div>
          <div v-if="change.ParentCategoryID == 2" class="col-span-9 mt-3">
            <input
              v-model="change.Frappe"
              type="text"
              placeholder="ราคาปั่น"
              class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
            />
          </div>

          <div
            class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
          >
            รูปภาพ
          </div>
          <div class="col-span-9 mt-3">
            <input
              v-model="change.Image"
              type="text"
              placeholder="รูปภาพ"
              class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
            />
          </div>

          <div
            @click="changProduct"
            class="col-start-2 col-span-5 mt-3 text-center btn btn-success text-white"
          >
            ยืนยัน
          </div>
          <div
            @click="formChangeProducts = false"
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
      products: "",
      formChangeProducts: false,

      increase: {
        CategoryID: "",
        Name: "",
        Price: "",
        Hot: "",
        Iced: "",
        Frappe: "",
        Image: "",
        ParentCategoryID: "",
      },

      change: {
        ProductID: "",
        CategoryID: "",
        Name: "",
        Price: "",
        Hot: "",
        Iced: "",
        Frappe: "",
        Image: "",
        ParentCategoryID: "",
      },
    };
  },
  mounted() {
    this.getCatgory();
    this.getProduct();
  },
  methods: {
    getProduct() {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/products",
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          this.products = response.data;
          //console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCatgory() {
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

    insertProduct() {
      //console.log(this.increase);

      let data = JSON.stringify({
        Name: this.increase.Name,
        Price: this.increase.Price,
        Hot: this.increase.Hot,
        Iced: this.increase.Iced,
        Frappe: this.increase.Frappe,
        CategoryID: this.increase.CategoryID,
        Image: this.increase.Image,
        ParentCategoryID: this.increase.ParentCategoryID,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/products",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));

          this.getProduct();
          document.getElementById("my_modal_4").close();
          Swal.fire({
            icon: "success",
            title: "เพิ่มสินค้าสำเร็จ",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showChange(data) {
      this.formChangeProducts = !this.formChangeProducts;

      this.change.CategoryID = data.CategoryID;
      this.change.Description = data.Description;
      this.change.Frappe = data.Frappe;
      this.change.Hot = data.Hot;
      this.change.Iced = data.Iced;
      this.change.Image = data.Image;
      this.change.Name = data.Name;
      this.change.ParentCategoryID = data.ParentCategoryID;
      this.change.Price = data.Price;
      this.change.ProductID = data.ProductID;
    },

    changProduct() {
      let data = {
        CategoryID: this.change.CategoryID,
        Price: this.change.Price,
        Frappe: this.change.Frappe,
        Hot: this.change.Hot,
        Iced: this.change.Iced,
        Image: this.change.Image,
        Name: this.change.Name,
        ParentCategoryID: this.change.ParentCategoryID,
        ProductID: this.change.ProductID,
      };

      console.log(data);
      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/products",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.formChangeProducts = false;
          this.getProduct();
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

    deleteProduct(ProductID) {
      let data = JSON.stringify({
        ProductID: ProductID,
      });

      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/products",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.formChangeProducts = false;
          this.getProduct();
          Swal.fire({
            icon: "success",
            title: "ลบข้อมูลสำเร็จ",
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
