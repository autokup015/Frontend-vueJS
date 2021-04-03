<template>
  <div class="bar">
    <div>
      <img class="mt-10" src="@/assets/Group 252.png" />
      <h4>Management</h4>
    </div>
    <br />
    <br />
    <br />
    <div>
      <div v-for="(item, index) in data" :key="index">
        <a>
          <h4 @click="link(item.link)">{{ item.txt }}</h4>
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
        { icon: "helllo", txt: "Home", link: "/" },
        { icon: "hi", txt: "Dashboard" },
        { icon: "hi", txt: "รายรับ" },
        { icon: "hi", txt: "รายจ่าย" },
        { icon: "hi", txt: "จัดการบิล", link: "/Bill" },
        { icon: "hi", txt: "Mail box" },
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
</style>
