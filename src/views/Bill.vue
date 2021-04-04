<template>
  <v-container>
    <div>
      <div class="d-flex  align-center">
        <img class="mr-3" src="../assets/icon-g.png" />
        <h3 class="purple--text">All Bill</h3>
      </div>
      <br />
      <b-row>
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
      <br />
    </div>
    <div class="listbill">
      <div class="d-flex align-center">
        <h3 class="mr-10 purple--text">รายการบิลทั้งหมด</h3>
        <h5 v-if="value == ''">วันที่ : -- / -- / --</h5>
        <h5 v-else>วันที่ : {{ value }}</h5>
        <v-spacer></v-spacer>
        <div class="d-flex align-center">
          <h5>ทั้งหมด</h5>
          <img class="ml-3" src="../assets/icon-all.png" style="width: 20px;" />
        </div>
      </div>
    </div>
    <div class="listitem">
      <Table :date="value" />
    </div>
  </v-container>
</template>

<script>
import Table from "../components/table";
export default {
  components: { Table },
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
.wrap {
  flex-wrap: wrap;
}
.img {
  width: 300px;
  padding: 10px;
}
.listitem {
  border-radius: 20px;
}
</style>
