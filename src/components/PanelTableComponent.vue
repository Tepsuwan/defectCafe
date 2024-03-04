<template>
  <!-- ปุ่มเพิ่มเมนู -->
  <button
    class="btn btn-outline btn-success hover:text-white"
    onclick="my_modal_2.showModal()"
  >
    + เพิ่มเมนูเครื่องดื่ม
  </button>
  <!-- modal เพิ่มเมนู -->
  <dialog id="my_modal_2" class="modal">
    <div class="modal-box bg-white">
      <h3 class="font-bold text-lg text-gray-600">เพิ่มเมนู</h3>
      <div class="grid grid-cols-12 py-4">
        <div
          class="col-span-3 text-center font-bold text-gray-600 mt-2 sm:mt-3"
        >
          ประเภท
        </div>
        <div class="col-span-9">
          <select
            v-model="increase.category_id"
            class="select select-bordered w-full bg-slate-200 text-gray-400 font-bold"
          >
            <option disabled selected>เลือกประเภท</option>
            <option>กาแฟ</option>
            <option>ชา</option>
            <option>น้ำผลไม้</option>
          </select>
        </div>

        <div
          class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
        >
          ชื่อ
        </div>
        <div class="col-span-9 mt-3">
          <input
            type="text"
            v-model="increase.name"
            placeholder="ชื่อ"
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
            type="text"
            v-model="increase.image"
            placeholder="รูปภาพ"
            class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
          />
        </div>

        <div
          class="col-span-3 text-center font-bold text-gray-600 mt-4 sm:mt-3"
        >
          ชนิด
        </div>
        <div class="col-span-3 text-center">
          <div class="grid grid-cols-2 mt-4">
            <div class="text-center">
              <input
                type="checkbox"
                v-model="increase.selectHot"
                class="checkbox border-2 border-gray-200"
              />
            </div>
            <div class="text-center font-bold text-gray-400">ร้อน</div>
          </div>
        </div>
        <div class="col-span-3 text-center">
          <div class="grid grid-cols-2 mt-4">
            <div class="text-center">
              <input
                type="checkbox"
                v-model="increase.selectIced"
                class="checkbox border-2 border-gray-200"
              />
            </div>
            <div class="text-center font-bold text-gray-400">เย็น</div>
          </div>
        </div>
        <div class="col-span-3 text-center">
          <div class="grid grid-cols-2 mt-4">
            <div class="text-center">
              <input
                type="checkbox"
                v-model="increase.selectFrappe"
                class="checkbox border-2 border-gray-200"
              />
            </div>
            <div class="text-center font-bold text-gray-400">ปั่น</div>
          </div>
        </div>

        <div
          v-if="increase.selectHot"
          class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
        >
          ราคาร้อน
        </div>
        <div v-if="increase.selectHot" class="col-span-9 mt-3">
          <input
            type="text"
            v-model="increase.hot"
            placeholder="ราคา"
            class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
          />
        </div>

        <div
          v-if="increase.selectIced"
          class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
        >
          ราคาเย็น
        </div>
        <div v-if="increase.selectIced" class="col-span-9 mt-3">
          <input
            type="text"
            v-model="increase.iced"
            placeholder="ราคา"
            class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
          />
        </div>

        <div
          v-if="increase.selectFrappe"
          class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
        >
          ราคาปั่น
        </div>
        <div v-if="increase.selectFrappe" class="col-span-9 mt-3">
          <input
            type="text"
            v-model="increase.frappe"
            placeholder="ราคา"
            class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
          />
        </div>

        <div
          class="col-span-3 text-center font-bold text-gray-600 mt-4 sm:mt-3"
        >
          คำอธิบาย
        </div>
        <div class="col-span-9 mt-3">
          <textarea
            v-model="increase.description"
            class="textarea textarea-bordered w-full bg-gray-200 font-bold text-gray-400"
            placeholder="คำอธิบาย"
          ></textarea>
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
          onclick="document.getElementById('my_modal_2').close()"
        >
          ปิด
        </button>
      </div>
    </div>
  </dialog>

  <!-- header หัวข้อ -->
  <div
    class="grid grid-cols-12 gap-1 sm:text-xl text-gray-200 py-1 font-bold mt-3 bg-gradient-to-t from-green-500 to-green-900 rounded-md"
  >
    <div class="col-span-3 text-center">ประเภท</div>
    <div class="col-span-3 text-center">ชื่อ</div>
    <div class="col-span-4 text-center">อธิบาย</div>
    <div class="col-span-2 text-center">จัดการ</div>
  </div>

  <!-- ส่วนแสดงข้อมูล -->
  <div v-for="(item, key) in products" :key="key">
    <div v-if="item.category_id != 7">
      <div
        class="grid grid-cols-12 gap-1 text-sm sm:text-lg text-black font-bold mt-1"
      >
        <div v-if="item.category_id == 1" class="col-span-3">กาแฟ</div>
        <div v-if="item.category_id == 2" class="col-span-3">ชา</div>
        <div v-if="item.category_id == 3" class="col-span-3">น้ำผลไม้</div>
        <div class="col-span-3 text-el">{{ item.name }}</div>
        <div class="col-span-4 text-el">{{ item.description }}</div>
        <div class="col-span-2 text-center">
          <div class="grid grid-cols-2 space-x-1 sm:space-x-3">
            <div
              @click="showChange(item)"
              class="text-center bg-amber-400 rounded-md text-black"
            >
              <i class="fa-duotone fa-sliders"></i>
            </div>
            <div
              @click="deleteProduct(item.item_id)"
              class="text-center bg-rose-400 rounded-md text-black"
            >
              <i class="fa-duotone fa-trash"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- เมื่อคลิกแก้ไขให้ขึ้น -->
      <div v-if="formProduct">
        <div v-if="change.item_id == item.item_id">
          <div class="text-center my-3 text-sm bg-white rounded-md">
            <div
              class="grid grid-cols-12 py-4 p-5 sm:p-10 sm:text-xl shadow-2xl"
            >
              <div
                class="col-span-3 text-center font-bold text-gray-600 mt-2 sm:mt-3"
              >
                ประเภท
              </div>
              <div class="col-span-9">
                <select
                  v-model="change.category_id"
                  class="select select-bordered w-full bg-slate-200 text-gray-400 font-bold"
                >
                  <option disabled selected>เลือกประเภท</option>
                  <option value="1">กาแฟ</option>
                  <option value="2">ชา</option>
                  <option value="3">น้ำผลไม้</option>
                </select>
              </div>

              <div
                class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-3"
              >
                ชื่อ
              </div>
              <div class="col-span-9 mt-3">
                <input
                  type="text"
                  v-model="change.name"
                  placeholder="ชื่อ"
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
                  type="text"
                  v-model="increase.image"
                  placeholder="รูปภาพ"
                  class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
                />
              </div>

              <div
                class="col-span-3 text-center font-bold text-gray-600 mt-4 sm:mt-3"
              >
                ชนิด
              </div>
              <div class="col-span-3 text-center">
                <div class="grid grid-cols-2 mt-4">
                  <div class="text-center">
                    <input
                      type="checkbox"
                      v-model="change.selectHot"
                      :true-value="true"
                      :false-value="false"
                      class="checkbox border-2 border-gray-200"
                    />
                  </div>
                  <div class="text-center font-bold text-gray-400">ร้อน</div>
                </div>
              </div>
              <div class="col-span-3 text-center">
                <div class="grid grid-cols-2 mt-4">
                  <div class="text-center">
                    <input
                      type="checkbox"
                      v-model="change.selectIced"
                      :true-value="true"
                      :false-value="false"
                      class="checkbox border-2 border-gray-200"
                    />
                  </div>
                  <div class="text-center font-bold text-gray-400">เย็น</div>
                </div>
              </div>
              <div class="col-span-3 text-center">
                <div class="grid grid-cols-2 mt-4">
                  <div class="text-center">
                    <input
                      type="checkbox"
                      v-model="change.selectFrappe"
                      :true-value="true"
                      :false-value="false"
                      class="checkbox border-2 border-gray-200"
                    />
                  </div>
                  <div class="text-center font-bold text-gray-400">ปั่น</div>
                </div>
              </div>

              <div
                v-if="change.selectHot"
                class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
              >
                ราคาร้อน
              </div>
              <div v-if="change.selectHot" class="col-span-9 mt-3">
                <input
                  type="text"
                  v-model="change.hot"
                  placeholder="ราคา"
                  class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
                />
              </div>
              <div
                v-if="change.selectIced"
                class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
              >
                ราคาร้อน
              </div>
              <div v-if="change.selectIced" class="col-span-9 mt-3">
                <input
                  type="text"
                  v-model="change.iced"
                  placeholder="ราคา"
                  class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
                />
              </div>
              <div
                v-if="change.selectFrappe"
                class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
              >
                ราคาร้อน
              </div>
              <div v-if="change.selectFrappe" class="col-span-9 mt-3">
                <input
                  type="text"
                  v-model="change.frappe"
                  placeholder="ราคา"
                  class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
                />
              </div>

              <div
                class="col-span-3 text-center font-bold text-gray-600 mt-4 sm:mt-3"
              >
                คำอธิบาย
              </div>
              <div class="col-span-9 mt-3">
                <textarea
                  v-model="change.description"
                  class="textarea textarea-bordered w-full bg-gray-200 font-bold text-gray-400"
                  placeholder="คำอธิบาย"
                ></textarea>
              </div>

              <div
                @click="changeProduct"
                class="col-start-2 col-span-5 mt-3 text-center btn btn-success text-white"
              >
                ยืนยัน
                
              </div>
              <div
                @click="formProduct = false"
                class="col-start-8 col-span-5 mt-3 text-center btn btn-error text-white"
              >
                ยกเลิก
              </div>
            </div>
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
  name: "PanelTableComponent",
  data() {
    return {
      products: "",
      formProduct: false,
      increase: {
        item_id: "",
        category_id: "",
        name: "",
        price: "",
        selectHot: false,
        hot: "0.00",
        selectIced: false,
        iced: "0.00",
        selectFrappe: false,
        frappe: "0.00",
        description: "",
      },
      change: {
        item_id: "",
        category_id: "",
        image: "",
        name: "",
        price: "",
        selectHot: false,
        hot: "",
        selectIced: false,
        iced: "",
        selectFrappe: false,
        frappe: "",
      },
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/product_api",
        headers: {},
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          this.products = response.data;
          //console.log(this.products);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showChange(data) {
      this.formProduct = !this.formProduct;

      if (data.hot > 1) {
        this.change.selectHot = true;
      } else {
        this.change.selectHot = false;
      }
      if (data.iced > 1) {
        this.change.selectIced = true;
      } else {
        this.change.selectIced = false;
      }
      if (data.frappe > 1) {
        this.change.selectFrappe = true;
      } else {
        this.change.selectFrappe = false;
      }

      this.change.category_id = data.category_id;
      this.change.description = data.description;
      this.change.hot = data.hot;
      this.change.iced = data.iced;
      this.change.frappe = data.frappe;
      this.change.item_id = data.item_id;
      this.change.name = data.name;
      this.change.price = data.price;

      //console.log(this.change);
    },

    changeProduct() {
      if (this.change.selectHot == false) {
        this.change.hot = 0;
      }
      if (this.change.selectIced == false) {
        this.change.iced = 0;
      }
      if (this.change.selectFrappe == false) {
        this.change.frappe = 0;
      }

      let data = {
        id: this.change.item_id,
        category_id: this.change.category_id,
        name: this.change.name,
        description: this.change.description,
        price: this.change.price,
        hot: this.change.hot,
        iced: this.change.iced,
        frappe: this.change.frappe,
      };

      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/product_chage",
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
          this.formProduct = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteProduct(id) {
      let data = JSON.stringify({
        item_id: id,
      });

      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/product_del",
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
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async insertProduct() {
      console.log(this.increase.category_id);
      if (
        this.increase.category_id == "" &&
        this.increase.name == "" &&
        this.increase.price == "" &&
        this.increase.image == ""
      ) {
        Swal.fire({
          icon: "error",
          title: "ผิดพลาด",
          text: "กรุณาใส่ข้อมูลให้ครบ",
        });
      }

      if (this.increase.category_id == "กาแฟ") {
        this.increase.category_id = 1;
      }
      if (this.increase.category_id == "ชา") {
        this.increase.category_id = 2;
      }
      if (this.increase.category_id == "น้ำผลไม้") {
        this.increase.category_id = 3;
      }
      let data = {
        category_id: this.increase.category_id,
        name: this.increase.name,
        description: this.increase.description,
        price: this.increase.price,
        image: this.increase.image,
        hot: this.increase.hot,
        iced: this.increase.iced,
        frappe: this.increase.frappe,
      };
      //console.log(data);

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/product_is",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      await axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          document.getElementById("my_modal_2").close();
          //window.location.reload();
          this.getProduct();
          Swal.fire({
            icon: "success",
            title: "เพิ่มเมนูสำเร็จ",
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
