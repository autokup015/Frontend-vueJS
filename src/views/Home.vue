<template>
  <div class="main">
    <div class="header">
      <v-row class="hg">
        <v-col class="pa-10" cols="12" xl="6" lg="6" md="6" sm="6">
          <h2 class="lin">Hi ,</h2>
          <p>Have a nice day at work</p>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="6" sm="6">
          <img src="@/assets/bg1.png" class="img" />
        </v-col>
      </v-row>
    </div>
    <br />
    <div class="mywork">
      <h2>My work</h2>
      <div class="list">
        <div class="item">
          <img class="mt-5" src="../assets/bill.png" />
          <h2>Add bill</h2>
        </div>
        <div class="item"></div>
      </div>
    </div>
    <v-row>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12">
        <h2 class="mr-15">Total</h2></v-col
      >
      <v-col cols="12" xl="6" lg="6" md="6" sm="12">
        <h2 v-if="value == ''">15 January, 2021</h2>
        <h2 v-else>{{ value }}</h2>
      </v-col>
    </v-row>
    <br />
    <div class="income">
      <v-row>
        <v-col cols="12" xl="6" lg="6" md="6" sm="12">
          <v-row>
            <v-col
              style="text-align:center"
              cols="12"
              xl="6"
              lg="6"
              md="6"
              sm="12"
            >
              <h5>รายได้ (Income)</h5>
              <h4>฿ 123,456.-</h4>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col
              style="text-align:center"
              cols="12"
              xl="6"
              lg="6"
              md="6"
              sm="12"
            >
              <h5>รายจ่าย(Expend)</h5>
              <h4>฿ 12,345.-</h4>
            </v-col>
          </v-row>
          <br />
          <div class="income2">
            <v-card class="mx-auto" max-width="344" shaped>
              <v-card-text class="mx-auto">
                <v-card-text style="text-align:center">
                  <div class="d-flex align-center justify-center">
                    <p class=" text--primary">
                      ยอดคงเหลือสุทธิ
                    </p>
                    <p>( Net balance )</p>
                  </div>
                  <br />
                  <p class="display-1 text--primary">฿ 123,456.-</p>
                </v-card-text>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
        <v-col
          cols="12"
          xl="6"
          lg="6"
          md="6"
          sm="12"
          style="background-color:white;text-align:center"
        >
          <h3>Calendar</h3>
          <b-row class="d-flex justify-center">
            <b-col md="auto">
              <b-calendar
                v-model="value"
                @context="onContext"
                locale="en-US"
              ></b-calendar>
            </b-col>
            <!-- <b-col>
              <p>
                Value: <b>'{{ value }}'</b>
              </p>
              <p class="mb-0">Context:</p>
              <pre class="small">{{ context }}</pre>
            </b-col> -->
          </b-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: "",
      context: null,
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
}
.list {
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  /* overflow: scroll; */
  /* overflow-x: scroll; */
  /* overflow-y: hidden;  */
  /* overflow-x: hidden; */
}
.item {
  background-color: #fff;
  height: 250px;
  width: 250px;
  margin-left: 10px;
  text-align: center;
  border-radius: 20px;
}
.income {
  width: 100%;
  height: auto;
}
.hg {
  height: 220px;
}
.img {
  width: 100%;
  height: auto;
}
.lin::after {
  content: " Linna Li";
  color: purple;
}
@media only screen and (max-width: 960px) {
  .hg {
    height: auto;
  }
}
</style>
