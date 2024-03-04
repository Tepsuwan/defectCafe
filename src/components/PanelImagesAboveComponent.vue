<template>
  <!-- ปุ้มเปิด Modal -->
  <button
    class="btn btn-outline btn-success hover:text-white"
    onclick="my_modal_2.showModal()"
  >
    + เพิ่มรูปภาพด้านบน
  </button>

  <!-- ส่วนแสดง modal -->
  <dialog id="my_modal_2" class="modal">
    <div class="modal-box bg-white">
      <h3 class="font-bold text-lg text-gray-600">เพิ่มรูปภาพด้านบน</h3>

      <div class="grid grid-cols-12 py-4">
        <div
          class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-6"
        >
          ชื่อรูปภาพ
        </div>
        <div class="col-span-9 mt-3">
          <input
            v-model="increase.Name"
            type="text"
            placeholder="ชื่อรูปภาพ"
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
          @click="insertImage()"
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

  <!-- ส่วนแสดงหัวข้อตาราง -->
  <div
    class="grid grid-cols-12 gap-1 bg-gradient-to-t from-green-400 to-green-800 text-white mt-5 rounded-md py-1"
  >
    <div class="col-span-2 text-center">รหัส</div>
    <div class="col-span-3 text-center">ชื่อรูปภาพ</div>
    <div class="col-span-4 text-center">ลิ้งรูปภาพ</div>
    <div class="col-span-3 text-center">จัดการ</div>
  </div>

  <!-- ส่วนแสดงข้อมูลในตาราง -->
  <div v-for="(item, key) in getImages" :key="key">
    <div class="grid grid-cols-12 gap-1 py-1 font-bold">
      <div class="col-span-2 text-center text-el">{{ item.ImageID }}</div>
      <div class="col-span-3 text-center text-el">{{ item.Name }}</div>
      <div class="col-span-4 text-center text-el">{{ item.Image }}</div>
      <div class="col-span-3 text-center text-el">
        <div class="grid grid-cols-2 gap-1">
          <div
            @click="showChange(item)"
            class="cursor-pointer text-center bg-amber-500 text-white rounded-md"
          >
            แก้ไข
          </div>
          <div
            @click="deleteImage(item.ImageID)"
            class="cursor-pointer text-center bg-rose-500 text-white rounded-md"
          >
            ลบ
          </div>
        </div>
      </div>
    </div>

    <!-- โชว์ข้อมูลที่จะแก้ไข -->
    <div v-if="formChangeImage">
      <div v-if="change.ImageID == item.ImageID">
        <div class="grid grid-cols-12 pb-5 p-5 sm:p-10 sm:text-xl shadow-2xl">
          <div
            class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-3"
          >
            ชื่อรูปภาพ
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
            class="col-span-3 text-center font-bold text-gray-600 mt-6 sm:mt-3"
          >
            รูปภาพ
          </div>

          <div class="col-span-9 mt-3">
            <input
              type="text"
              v-model="change.Image"
              placeholder="ชื่อ"
              class="input input-bordered w-full bg-slate-200 text-gray-400 font-bold"
            />
          </div>
          <div
            @click="changeImage"
            class="col-start-2 col-span-5 mt-3 text-center btn btn-success text-white"
          >
            ยืนยัน
          </div>
          <div
            @click="formChangeImage = false"
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
      getImages: "",
      formChangeImage: false,
      increase: {
        Name: "",
        Imdage: "",
      },
      change: {
        ImageID: "",
        Name: "",
        Image: "",
      },
    };
  },
  mounted() {
    this.getImageAbove();
  },
  methods: {
    getImageAbove() {
      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/images",
        headers: {},
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          this.getImages = response.data;
          //console.log(this.getImages);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    showChange(data) {
      this.formChangeImage = !this.formChangeImage;

      this.change.ImageID = data.ImageID;
      this.change.Name = data.Name;
      this.change.Image = data.Image;
    },

    changeImage() {
      let data = {
        ImageID: this.change.ImageID,
        Name: this.change.Name,
        Image: this.change.Image,
      };

      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/images",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.getImageAbove();
          this.formChangeImage = false;
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

    deleteImage(ImageID) {
      let data = JSON.stringify({
        ImageID: ImageID,
      });

      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: "https://defectcafe.com/apiDefectCafe/images",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.getImageAbove();
          Swal.fire({
            icon: "success",
            title: "ลบรูปภาพสำเร็จ",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    insertImage() {
      let formData = new FormData();
      formData.append("Name", this.increase.Name);
      formData.append("Image", this.increase.Image);

      axios
        .post("https://defectcafe.com/apiDefectCafe/images", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(JSON.stringify(response.data));
          document.getElementById("my_modal_2").close();
          this.getImageAbove();
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
