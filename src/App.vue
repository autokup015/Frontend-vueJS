<template>
  <v-app>
    <v-main class="bgmain">
      <navbar />
      <div class="bgmain2 pdTop over">
        <v-container>
          <div class="flex">
            <bar />
            <v-container>
              <router-view></router-view>
            </v-container>
          </div>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Bar from "./components/Bar.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar, Bar },
};
</script>
<style>
.main {
  width: 100%;
  height: auto;
}
.v-application p {
  margin-bottom: 0px !important;
}
.bgmain {
  position: relative;
  background: linear-gradient(to right, #fae7eb 0%, #ffffff 100%);
  width: 100%;
  height: auto;
}
.bgmain2 {
  background-image: url("./assets/bg.png");
  /* overflow: scroll; */
}
.pdTop {
  padding-top: 100px;
}
.flex {
  display: flex;
}
.over {
  overflow: hidden;
}
@media only screen and (max-width: 472px) {
  .flex {
    display: table-row;
  }
}
@media screen and (min-width: 1920px) {
  .bgmain2 {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
@media only screen and (max-width: 680px) {
  .over {
    overflow: scroll;
  }
}
</style>
