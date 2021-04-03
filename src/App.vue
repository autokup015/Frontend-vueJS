<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->
    <v-main class="bgmain ">
      <navbar />
      <div class="bgmain2 pdTop">
        <v-container>
          <div class="d-flex ">
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
  components: { Navbar, Bar },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
.v-application p {
  margin-bottom: 0px !important;
}
.bgmain {
  position: relative;
  background: linear-gradient(to right, #fae7eb 0%, #ffffff 100%);
}
.bgmain2 {
  background-image: url("./assets/bg.png");
}
.pdTop {
  padding-top: 100px;
}
</style>
