<template>
  <div class="bar d-flex align-center justify-center" :style="style">
    <v-container>
      <div class="d-flex justify-center align-center">
        <img class="mr-5" src="../assets/Group 252.png" />
        <p>Management</p>
        <v-spacer></v-spacer>
        <img class="mr-5 icon" src="../assets/icon-setting.png" />
        <img class="mr-5 icon" src="../assets/icon-alert.png" />
        <v-avatar size="62">
          <img src="../assets/people.png" />
        </v-avatar>
        <div class="ml-3">
          <h2>Name</h2>
          <h5>Marketing</h5>
        </div>
        <div class="status mt-8 ml-3"></div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrollPosition: null,
      style: "",
    };
  },
  watch: {
    scrollPosition() {
      if (this.scrollPosition == 0) {
        this.style = "background-color:transparent";
      } else {
        this.style = "background-color:#EBB5D0";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped>
.bar {
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 999;
  box-shadow: 0 8px 6px -6px #ffccd7;
  transition: 0.5s;
}
.status {
  background-color: green;
  width: 15px;
  height: 15px;
  border-radius: 20px;
}
.icon {
  width: 25px;
  height: 25px;
}
</style>
