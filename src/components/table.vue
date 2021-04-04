<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr style="background-color: rgb(158, 67, 184,0.7);">
          <th class="text-left white--text">
            การอนุมัติ
          </th>
          <th class="text-left white--text">
            ลำดับ
          </th>
          <th class="text-left white--text">
            เลขที่บิล
          </th>
          <th class="text-left white--text">
            รายการ
          </th>
          <th class="text-left white--text">
            หมวดหมู่
          </th>
          <th class="text-left white--text">
            ประเภท
          </th>
          <th class="text-left white--text">
            จำนวน (ชิ้น)
          </th>
          <th class="text-left white--text">
            ราคา (ชิ้น)
          </th>
          <th class="text-left white--text">
            ราคารวม
          </th>
          <th class="text-left white--text">
            วันหมดอายุ
          </th>
          <th class="text-left white--text">
            จัดการ
          </th>
          <th class="text-left white--text">
            หมายเหตุ
          </th>
        </tr>
      </thead>
      <tbody v-for="item in items" :key="item.name">
        <tr>
          <td @click="item._showDetails = !item._showDetails">
            <div class="status" :style="status(item.confirm)"></div>
          </td>
          <td @click="item._showDetails = !item._showDetails">
            {{ item.lumdub }}
          </td>
          <td @click="item._showDetails = !item._showDetails">
            {{ item.numberbill }}
          </td>
          <td @click="item._showDetails = !item._showDetails">
            {{ item.list }}
          </td>
          <td @click="item._showDetails = !item._showDetails">
            {{ item.category }}
          </td>
          <td @click="item._showDetails = !item._showDetails">
            {{ item.type }}
          </td>
          <td @click="item._showDetails = !item._showDetails">
            {{ item.number }}
          </td>
          <td @click="item._showDetails = !item._showDetails">
            {{ item.price }}
          </td>
          <td @click="item._showDetails = !item._showDetails">
            {{ item.allprice }}
          </td>
          <td @click="item._showDetails = !item._showDetails">
            {{ item.expdate }}
          </td>
          <td class="d-flex align-center">
            <img
              class="mr-2"
              src="../assets/icon-edit.png"
              style="width: 20px;"
            />
            <img
              src="../assets/icon-del.png"
              style="width: 20px;cursor: pointer;"
              @click="del(item.id)"
            />
          </td>
          <td><img src="../assets/icon-pen.png" style="width: 20px;" /></td>
        </tr>
        <div class="d-flex" v-if="item._showDetails">
          <div v-for="item in item.image" :key="item">
            <img :src="item.img" style="width: 300px;padding:10px" />
          </div>
        </div>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          confirm: "yes",
          lumdub: 1,
          numberbill: "B01202012090001",
          list: "โน็ตบุค",
          category: "อุปกรณ์คอม",
          type: "คอมพิวเตอร์",
          number: 10,
          price: 100,
          allprice: 10000,
          expdate: "ไม่มี",
          date: "2021-04-05",
          image: [
            {
              img: require("../assets/com (1).png"),
            },
            {
              img: require("../assets/com (2).png"),
            },
          ],
          _showDetails: false,
        },
        {
          id: 2,
          confirm: "no",
          lumdub: 1,
          numberbill: "B01202012090001",
          list: "โน็ตบุค",
          category: "อุปกรณ์คอม",
          type: "คอมพิวเตอร์",
          number: 10,
          price: 100,
          allprice: 10000,
          expdate: "ไม่มี",
          image: [
            {
              img: require("../assets/com (1).png"),
            },
            {
              img: require("../assets/com (2).png"),
            },
          ],
          _showDetails: false,
        },
        {
          id: 3,
          confirm: "wait",
          lumdub: 1,
          numberbill: "B01202012090001",
          list: "โน็ตบุค",
          category: "อุปกรณ์คอม",
          type: "คอมพิวเตอร์",
          number: 10,
          price: 100,
          allprice: 10000,
          expdate: "ไม่มี",
          image: [
            {
              img: require("../assets/com (1).png"),
            },
            {
              img: require("../assets/com (2).png"),
            },
          ],
          _showDetails: false,
        },
        {
          id: 4,
          confirm: "yes",
          lumdub: 1,
          numberbill: "B01202012090001",
          list: "โน็ตบุค",
          category: "อุปกรณ์คอม",
          type: "คอมพิวเตอร์",
          number: 10,
          price: 100,
          allprice: 10000,
          expdate: "ไม่มี",
          image: [
            {
              img: require("../assets/com (1).png"),
            },
            {
              img: require("../assets/com (2).png"),
            },
          ],
          _showDetails: false,
        },
        {
          id: 5,
          confirm: "yes",
          lumdub: 1,
          numberbill: "B01202012090001",
          list: "โน็ตบุค",
          category: "อุปกรณ์คอม",
          type: "คอมพิวเตอร์",
          number: 10,
          price: 100,
          allprice: 10000,
          expdate: "ไม่มี",
          image: [
            {
              img: require("../assets/com (1).png"),
            },
            {
              img: require("../assets/com (2).png"),
            },
          ],
          _showDetails: false,
        },
        {
          id: 6,
          confirm: "yes",
          lumdub: 1,
          numberbill: "B01202012090001",
          list: "โน็ตบุค",
          category: "อุปกรณ์คอม",
          type: "คอมพิวเตอร์",
          number: 10,
          price: 100,
          allprice: 10000,
          expdate: "ไม่มี",
          image: [
            {
              img: require("../assets/com (1).png"),
            },
            {
              img: require("../assets/com (2).png"),
            },
          ],
          _showDetails: false,
        },
      ],
    };
  },
  props: {
    date: String,
  },

  methods: {
    status(value) {
      if (value == "no") {
        return "background-color:red";
      } else if (value == "yes") {
        return "background-color:green";
      } else {
        return "background-color:gray";
      }
    },
    del(value) {
      this.items = this.items.filter((id) => id.id != value);
    },
  },
};
</script>
<style scoped>
.img {
  width: 300px;
  padding: 10px;
}
.status {
  width: 15px;
  height: 15px;
  border-radius: 50px;
}
</style>
