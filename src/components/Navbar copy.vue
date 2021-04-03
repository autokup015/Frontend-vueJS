<template>
  <div class="bar d-flex align-center justify-center" :style="style">
    <v-container>
      <!-- <div class="d-flex justify-center align-center">
        <img class="mr-5" src="../assets/Group 252.png" />
        <p>Management</p>
        <v-spacer></v-spacer>
        <img class="mr-5 icon" src="../assets/icon-setting.png" />
        <img class="mr-5 icon" src="../assets/icon-alert.png" />
        <v-avatar size="62">
          <img src="../assets/people.png" />
        </v-avatar>
        <div class="ml-3">
          <h3>Name</h3>
          <p>Marketing</p>
        </div>
        <div class="status mt-8 ml-3"></div>
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
      </div> -->
      <b-navbar toggleable="lg" type="dark" variant="info">
        <div class="d-flex align-center">
          <img src="../assets/Group 252.png" />
          <p class="ml-2">Management</p>
        </div>
        <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <img src="../assets/meat.png" id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav> -->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <img class="mr-5 icon" src="../assets/icon-setting.png" />
            <img class="mr-5 icon" src="../assets/icon-alert.png" />

            <v-avatar size="62">
              <img src="../assets/people.png" />
            </v-avatar>
            <div class="ml-3">
              <h3>Name</h3>
              <p>Marketing</p>
            </div>
            <div class="status mt-8 ml-3"></div>
            <img
              v-b-toggle.sidebar-right
              src="../assets/icon.png"
              class="iconV"
            />
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

            <!-- <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
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
  /* height: 100px; */
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
