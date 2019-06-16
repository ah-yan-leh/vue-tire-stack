<template>
  <div class="container">
    <div class="row bottomLine" v-for="(shop, index) in shops" :key="index">
      <div class="col-xs-12 col-sm-9 col-md-9">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <router-link :to="{ name: 'shop-info', params: {shopDetail:shop,shop_id:shop.shop_id } }">
            <span class="title-heading">{{shop.shop_name}}</span>
          </router-link>

          <span class="see-details">
            <router-link :to="{ name: 'shop-info', params: {shopDetail:shop,shop_id:shop.shop_id } }">
              See more info
            </router-link>
          </span>
        </div>
        <Star-component></Star-component>
        <div class="col-xs-2 col-sm-12 col-md-12">
          <strong>{{shop.shop_address}}, {{shop.shop_location}}</strong>
          <br>
          <p> {{shop.shop_phone}} </p>
          <p>Mon-Fri:7:30 - 5:00</p>

          <p>Additional tire pressure Monitoring System (TPMS) service may be required</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-3 col-md-3">
        <button class="btn btn-success">Shop services
          <i class="fa fa-chevron-right"></i>
        </button>
        <br>
        <button class="btn btn-success">Shop rates
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Star from "./shared/Star";
export default {
  watch: {},
  props: {},
  data: function() {
    return {
      shops: {},
      errors: []
    };
  },
  methods: {
    getShops: function() {
      axios
        .get(`../../data/TireProsList.json`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.shops = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  computed: {},
  created: function() {
    this.getShops();
  },
  components: {
    "Star-component": Star
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}
.title-heading {
  font-size: 20px;
  color: #0092d0;
  text-transform: uppercase;
  font-weight: bolder;
}
.btn-success {
  width: 220px;
}
.bottomLine {
  border-bottom: 1px solid gray;
  margin-bottom: 15px;
}
</style>
