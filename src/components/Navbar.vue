<template>
  <nav class="navbar navbar-expand-lg navbar-light lock bar">
    <v-container>
      <div class="d-flex align-center">
        <img src="../assets/Group 252.png" />
        <p class="ml-2 font-weight-bold">Management</p>
      </div>
      <div>
        <v-text-field name="name" label="label" id="id" solo></v-text-field>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="@/assets/meat.png" class="icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto font-weight-bold">
          <li class="nav-item active mr-5 ml-5 d-flex align-center">
            <img class="mr-5 icon" src="../assets/icon-setting.png" />
            <img class="mr-5 icon" src="../assets/icon-alert.png" />
          </li>
          <li class="nav-item active mr-5 ml-5">
            <v-avatar size="62">
              <img src="../assets/people.png" />
            </v-avatar>
          </li>
          <li class="nav-item active mr-5 ml-5">
            <h3>Name</h3>
            <p>Marketing</p>
          </li>
          <li class="nav-item active">
            <div class="status mt-12"></div>
          </li>
        </ul>
        <img v-b-toggle.sidebar-right src="../assets/icon.png" class="iconV" />
        <b-sidebar id="sidebar-right" right shadow>
          <div class="px-3 py-2 txt-cen">
            <div class="d-flex justify-center">
              <img src="../assets/people.png" alt="" />
            </div>
            <div class="mt-3">
              <h4>Linna Li</h4>
              <p>Marketing</p>
            </div>
            <br />
            <a class="text-decoration-underline black--text"
              >Edit Profile Picture</a
            >
            <v-row no-gutters class="mt-5 justify-center ">
              <div
                class="d-flex align-center justify-center"
                v-for="(item, index) in data"
                :key="index"
              >
                <v-col xl="5" lg="5" md="5" sm="5">
                  <p class="txtS">{{ item.text1 }}</p>
                </v-col>
                <v-col xl="1" lg="1" md="1" sm="1">
                  <p>:</p>
                </v-col>
                <v-col xl="5" lg="5" md="5" sm="5">
                  <p class="txtS">{{ item.text2 }}</p>
                </v-col>
              </div>
            </v-row>
          </div>
        </b-sidebar>
      </div>
    </v-container>
  </nav>
</template>

<script>
export default {
  name: "Navebar",
  data() {
    return {
      scrollPosition: null,
      style: "",
      data: [
        {
          text1: "Code",
          text2: 123456789,
        },
        {
          text1: "Firstname",
          text2: "Linna",
        },
        {
          text1: "Lastname",
          text2: "Linna",
        },
        {
          text1: "Nickname",
          text2: "Linna",
        },
        {
          text1: "Position",
          text2: "Sales & Marketing",
        },
        {
          text1: "Team",
          text2: "Sailor Moon",
        },
        {
          text1: "Contact",
          text2: "08 888 8888",
        },
        {
          text1: "Bank",
          text2: "K Bank",
        },
        {
          text1: "Acc No.",
          text2: "123-4-56789-0",
        },
        {
          text1: "Amount",
          text2: "12,000.-",
        },
      ],
    };
  },
};
</script>

<style scoped>
.icon {
  width: 25px;
}
.bar {
  width: 100%;
  position: fixed;
  z-index: 999;
  box-shadow: 0 8px 6px -6px #ffccd7;
  transition: 0.5s;
  background-color: #fae7eb;
}
.status {
  background-color: green;
  width: 15px;
  height: 15px;
  border-radius: 20px;
}
.iconV {
  width: 15px;
  margin-left: 10px;
}
.txt-cen {
  text-align: center;
}
.txtS {
  font-size: 15px;
}
</style>
