<template>
  <div class="col-sm-12 col-md-12">
    <BackButton-component></BackButton-component>
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
        <img :src="tire2.image_link" max-width="200px" height="auto" :alt="tire2.prod_brand">
        <Star-component></Star-component>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <h3>
          <router-link :to="{ name: 'tireBrandDetail', params: {id:tire2.prod_id } }">
            {{tire2.prod_brand}}
          </router-link>
          {{tire2.custom_label_2}}
        </h3>
        <div>
          <p>Size: {{tire2.size}}</p>
        </div>
        <div>
          <p>Category: {{tire2.category_name}}</p>
        </div>
        <div>
          <p>All-Season: {{tire2["All-Season"]}}</p>
        </div>
        <div>
          <p>Winter: {{tire2.Winter}}</p>
        </div>
        <div>
          <p>Run flat: {{tire2["Run flat"]}}</p>
        </div>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <AddToCart-component :cartItem="tire2" @cartCount="detailPageCartCount($event)"></AddToCart-component>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
      <h3>Description</h3>
      <div>
        {{tire2.description}}
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
import BackButton from "./shared/BackButton";
import AddToCart from "./shared/AddToCart";
import Star from "./shared/Star";
export default {
  watch: {},
  props: {
    tire2: {
      type: Object,
      required: false
    }
  },
  data: function() {
    return {
      cartData: "",
      tiredata: "",
      tiredata2: "",
      currentQueryParam: "",
      errors: []
    };
  },
  methods: {
    detailPageCartCount: function(qty) {
      this.cartData = qty;
      console.log("Listening in detail page", this.cartData.size);
    }
  },
  created: function() {},
  computed: {},
  components: {
    "AddToCart-component": AddToCart,
    "Star-component": Star,
    "BackButton-component": BackButton
  }
};
</script>

<style>
</style>
