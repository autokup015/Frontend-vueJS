<template>
  <v-container>
    <div class="header d-flex">
      <v-row>
        <v-col class="pa-10" cols="12" xl="7" lg="7" md="7" sm="12">
          <div class="d-flex">
            <h1>header ,</h1>
            <h1>Hi what the fuck dude</h1>
          </div>
          <div>
            <p>Have a nice day at work</p>
          </div>
        </v-col>
        <v-col cols="12" xl="5" lg="5" md="5" sm="12">
          <img src="@/assets/bg1.png" />
        </v-col>
      </v-row>
    </div>
    <div class="mywork">
      <h1>My work</h1>
      <div class="list">
        <div class="item">
          <img class="mt-5" src="../assets/bill.png" />
          <h2>Add bill</h2>
        </div>
        <div class="item"></div>
      </div>
    </div>
    <div class="total d-flex">
      <h1 class="mr-15">Total</h1>
      <h1>15 January, 2021</h1>
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
              <h4>รายได้ (Income)</h4>
              <h2>฿ 123,456.-</h2>
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
              <h4>รายจ่าย(Expend)</h4>
              <h2>฿ 12,345.-</h2>
            </v-col>
          </v-row>
          <br />
          <div class="income2">
            <v-card shaped class="mx-auto">
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
            </v-card>
          </div>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="6" sm="12">
          <h1>Calender</h1>
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
  flex-wrap: wrap;
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
</style>
