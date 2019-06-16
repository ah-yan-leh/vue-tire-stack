<template>
  <div class="row is-flex">
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 listingBox" v-for="(tire,index) in tiredata" :key="index">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <img :src="tire.category_image" max-width="100%" height="auto" :alt="tire.category_name">
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <h2>
          {{tire.category_name}}
        </h2>
        <router-link :to="`/tires/categories/${tire.category_id}`">
          <button type="button" class="btn btn-success btn-lg">Shop now
            <i class="fa fa-angle-right"></i>
          </button>
        </router-link>
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
        .get(`.././data/categories.json`)
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
.col-xs-6,
.col-sm-6,
.col-md-6,
.col-lg-6 {
  width: 48%;
}
.listingBox {
  margin: 5px;
}
</style>
