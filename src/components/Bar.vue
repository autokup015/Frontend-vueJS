<template>
  <div class="bar">
    <div>
      <img class="mt-10" src="@/assets/Group 252.png" />
      <h5>Management</h5>
    </div>
    <br />
    <br />
    <br />
    <div>
      <div
        class="d-flex align-center justify-center mb-3"
        v-for="(item, index) in data"
        :key="index"
      >
        <img :src="item.icon" style="width: 20px;margin-right : 10px" />
        <a>
          <p @click="link(item.link)">{{ item.txt }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bar",
  data() {
    return {
      data: [
        { icon: require("../assets/icon-home.png"), txt: "Home", link: "/" },
        { icon: require("../assets/icon-dash.png"), txt: "Dashboard" },
        { icon: require("../assets/icon-in.png"), txt: "รายรับ" },
        { icon: require("../assets/icon-ex.png"), txt: "รายจ่าย" },
        {
          icon: require("../assets/icon-g.png"),
          txt: "จัดการบิล",
          link: "/Bill",
        },
        { icon: require("../assets/icon-mail.png"), txt: "Mail box" },
      ],
    };
  },
  methods: {
    link(value) {
      this.$router.push(value);
    },
  },
};
</script>

<style scoped>
.bar {
  background: linear-gradient(to bottom, #ffffff 0%, transparent 100%);
  width: 200px;
  height: auto;
  text-align: center;
  border-radius: 30px;
}
h4 {
  margin: 0px;
}
</style>
