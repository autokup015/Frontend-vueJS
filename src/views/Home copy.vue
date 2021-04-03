<template>
  <v-container>
    <!-- <div class="header d-flex">
      <v-row class="hg">
        <v-col class="pa-10" cols="12" xl="6" lg="6" md="6" sm="12">
          <h2>header , Hi what the fuck dude</h2>

          <p>Have a nice day at work</p>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="6" sm="12">
          <img src="@/assets/bg1.png" />
        </v-col>
      </v-row>
    </div> -->
    <!-- <br />
    <div class="mywork">
      <h2>My work</h2>
      <div class="list">
        <div class="item">
          <img class="mt-5" src="../assets/bill.png" />
          <h2>Add bill</h2>
        </div>
        <div class="item"></div>
      </div>
    </div> -->
    <div class="total d-flex">
      <h2 class="mr-15">Total</h2>
      <h2>15 January, 2021</h2>
    </div>
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
            <v-card-text shaped class="mx-auto">
              <v-card-text  style="text-align:center">
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
          </div>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="6" sm="12">
          <h3>Calender</h3>
          <v-text-field
            label="วันที่"
            required
            v-model="date"
            type="date"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.header {
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
}
.list {
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
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
  width: 800px;
  height: auto;
}
.hg {
  height: 220px;
}
@media only screen and (max-width: 960px) {
  .hg {
    height: auto;
  }
}
</style>
