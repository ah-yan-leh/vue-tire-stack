<template>
  <div class="col-sm-12">
    <BackButton-component></BackButton-component>
    <h1>Cart page</h1>
    <div class="row">
      <ShoppingCartItem-component :cartData="cartData"></ShoppingCartItem-component>
    </div>
  </div>
</template>

<script>
import BackButton from "./shared/BackButton";
import ShoppingCartItem from "./ShoppingCartItem";
export default {
  watch: {},
  props: {
    cartvar: {
      type: String,
      default: "Default value"
    }
  },
  data: function() {
    return {
      cartData: ""
    };
  },
  methods: {},
  created: function() {
    if (
      localStorage.getItem("shopping-cart") !== null ||
      localStorage.getItem("shopping-cart") !== undefined
    ) {
      this.cartData = JSON.parse(localStorage.getItem("shopping-cart"));
    }
  },
  computed: {},
  components: {
    "ShoppingCartItem-component": ShoppingCartItem,
    "BackButton-component": BackButton
  }
};
</script>

<style>
</style>
