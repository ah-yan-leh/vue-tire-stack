<template>
  <div class="col-xs-12 col-sm-12">
    <form class="col-xs-6 col-sm-6 col-md-12">
      <div class="col-xs-12" v-if="cartItem.prod_brand == 'Nitto'">
        <h3 class="strikethru">Orig: ${{cartItem.price}}</h3>
        <h4>See price in cart</h4>
      </div>
      <div class="col-xs-12" v-else-if="cartItem.sale_price !== cartItem.price">
        <h3 class="saleprice">Sale: ${{cartItem.sale_price}}</h3>
        <h4 class="strikethru">Orig: ${{cartItem.price}}</h4>
      </div>
      <div class="col-xs-12" v-else>
        <h3>Price: ${{cartItem.price}}</h3>
      </div>
      <div class="col-xs-12 form-inline">
        <label for="Quantity">Quantity:</label>
        <input type="tex" class="form-control" id="Quantity" value="4" placeholder="quantity" v-model="qty" maxlength="4" size="4">
      </div>
      <button type="submit" class="btn btn-success" @click.prevent="addItemToCart">Add To Cart</button>
    </form>

    <div class="col-xs-6 col-sm-6 col-md-12" v-if="cartItem['Installer Discount'] == 'Yes'">
      <h3 class="saleprice">FREE DELIVERY</h3>
      <h4>to Tire-Seller Installer</h4>
    </div>
    <div class="col-xs-6 col-sm-6 col-md-12" v-else>
      <h4>
        <strong>SHIPPING FEE</strong>
      </h4>
      <h4>$15 (per tire)</h4>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  watch: {},
  props: {
    cartItem: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tiredata: "",
      qty: "",
      shoppingCart: []
    };
  },
  methods: {
    addItemToCart: function() {
      this.cartItem.qty = this.qty;
      eventBus.$emit("cartItems", this.cartItem);
      var temp = localStorage.getItem("shopping-cart");
      temp = JSON.parse(temp);
      if (
        temp == "undefined" ||
        temp == "null" ||
        temp == null ||
        temp == undefined
      ) {
        this.shoppingCart.push(this.cartItem);
        localStorage.setItem(
          "shopping-cart",
          JSON.stringify(this.shoppingCart)
        );
      } else {
        for (var i = 0; i < temp.length; i++) {
          this.shoppingCart.push(temp[i]);
        }
        this.shoppingCart.push(this.cartItem);
        localStorage.setItem(
          "shopping-cart",
          JSON.stringify(this.shoppingCart)
        );
      }
      console.log("$emitted cartItems");
    }

    // below event works when you can attach to instance of the component
    // like so <AddToCart-component :cartItem="tire" @cartCount="detailPageCartCount($event)"></AddToCart-component>
    // in this component (AddToCart), you create the method below
    // addItemToCart: function() {
    //   this.$emit("cartCount", this.cartItem);
    //   console.log("$emitted cartCount", this.cartItem.brand);
    // }

    // in the parent component (TireDetail), you create this method to list
    // detailPageCartCount: function(qty) {
    //       this.cartData = qty;
    //       console.log("Listening in detail page", this.cartData.size);
    //     }
  },
  computed: {}
};
</script>

<style>
.saleprice {
  color: rgb(235, 64, 2);
  font-weight: bold;
}
.strikethru {
  text-decoration: line-through;
}
</style>
