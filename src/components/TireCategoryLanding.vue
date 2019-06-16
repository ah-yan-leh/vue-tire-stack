<template>
  <article>
    <div class="container">

      <LoadingSpinner-component v-if="loading"></LoadingSpinner-component>
      <div class="row is-flex" v-if="filteredData.length > 0">
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 listingBox" v-for="(tire,index) in filteredData" :key="index">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <br>
            <img :src="tire.prod_image" max-width="300px" height="auto" :alt="tire.prod_brand">
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h2>
              {{tire.prod_brand}}
            </h2>
            <router-link :to="{ name: 'tireBrandDetail', params: {id:tire.prod_id } }">
              <button type="button" class="btn btn-success btn-lg">Shop now
                <i class="fa fa-angle-right"></i>
              </button>
            </router-link>
          </div>
        </div>

      </div>
      <div class="col-sm-12 col-md-12" v-else>
        <br>
        <h1>Products coming soon</h1>
        <h3>Look over our passenger/truck tires while you're here. Check other
          <router-link to="/tires/categories">Categories</router-link>
        </h3>
        <br>
        <hr>
      </div>
    </div>
  </article>
</template>

<script>
import LoadingSpinner from "./shared/LoadingSpinner";
import axios from "axios";
export default {
  watch: {},
  data: function() {
    return {
      tiredata: [],
      errors: [],
      filteredData: [],
      loading: true
    };
  },
  methods: {
    getTires: function(id, filterCall) {
      axios
        .get(`../../../data/tire-brands.json`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.tiredata = response.data;
          filterCall(id);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },

    filterCall(i) {
      this.filteredData = this.tiredata.filter(tire => {
        return tire.category_id == i;
      });
      this.loading = false;
    }
  },
  created: function() {
    this.getTires(this.$route.params.category_id, this.filterCall);
  },
  computed: {},
  components: {
    "LoadingSpinner-component": LoadingSpinner
  }
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