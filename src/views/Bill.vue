<template>
  <v-container>
    <div>
      <h3>All Bill</h3>
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
        <h5>ทั้งหมด</h5>
      </div>
    </div>
    <div class="listitem">
      <div>
        <b-table :items="items" :fields="fields" striped responsive="sm">
          <template #cell(show_details)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">
              {{ row.detailsShowing ? "Hide" : "Show" }} Details
            </b-button>
          </template>

          <template #row-details="row">
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
                <b-col>{{ row.item.age }}</b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
                <b-col>{{ row.item.isActive }}</b-col>
              </b-row>
            </b-card>
          </template>
        </b-table>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      context: null,
      // -----
      fields: ["first_name", "last_name", "show_details"],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        {
          isActive: false,
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson",
          _showDetails: false,
        },
        {
          isActive: false,
          age: 55,
          first_name: "at",
          last_name: "Bo",
          _showDetails: true,
        },
      ],
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
  },
};
</script>

<style scoped></style>
