<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-9 col-md-9">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <span class="title-heading">{{shopDetail.shop_name}}</span>
        </div>
        <Star-component></Star-component>
        <div class="col-xs-2 col-sm-12 col-md-12">
          <strong>{{shopDetail.shop_address}}, {{shopDetail.shop_location}}</strong>
          <br>
          <p> {{shopDetail.shop_phone}} </p>
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
    <Map-component :mapData="shopDetail"></Map-component>
  </div>
</template>

<script>
import Star from "./shared/Star";
import MapComp from "./shared/Map";
export default {
  watch: {},
  props: {
    shopDetail: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {};
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  created: function() {},
  computed: {},
  components: {
    "Map-component": MapComp,
    "Star-component": Star
  }
};
</script>

<style scoped>
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
