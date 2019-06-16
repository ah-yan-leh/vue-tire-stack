<template>
  <div class="container">
    <div class="row is-flex">
      <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 listingBox" v-for="(tire,index) in tiredata" :key="index">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <br>
          <img :src="tire.prod_image" max-width="300px" height="auto" :alt="tire.prod_brand">
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h2>
            {{tire.prod_brand}}
          </h2>
          <router-link :to="`/tires/brands/${tire.prod_id}`">
            <button type="button" class="btn btn-success btn-lg">Shop now
              <i class="fa fa-angle-right"></i>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  watch: {},
  data: function() {
    return {
      tiredata: [],
      errors: []
    };
  },
  methods: {
    getTires: function() {
      axios
        .get(`../../data/tire-brands.json`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.tiredata = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  created: function() {
    this.getTires();
  },
  computed: {}
};
</script>

<style scoped>
.row.is-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.listingBox {
  margin: 5px;
}
.col-xs-6,
.col-sm-6,
.col-md-4,
.col-lg-4 {
  width: 48%;
}
</style>
