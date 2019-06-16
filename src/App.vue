<template>
  <div id="app">
    <div class="row">
      <nav class="navbar navbar-inverse">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="/" class="navbar-brand">Tire Seller</a>
        </div>
        <!-- Collection of nav links, forms, and other content for toggling -->
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/tires/tires-by-brand">Tire Brands</router-link>
            </li>
            <li>
              <router-link to="/tires/categories">Categories</router-link>
            </li>
          </ul>
          <form class="navbar-form navbar-left">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search">
              <span class="input-group-btn">
                <button type="button" class="btn btn-default">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/shops">
                <i class="fa fa-wrench"> </i>
              </router-link>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-user-circle"></i>
              </a>
            </li>
            <li>
              <router-link :to="{name: 'shopping-cart', params: { cartQty:'cart text' } }">
                <span class="cart">
                  <i class="fa fa-shopping-cart">
                    <span id="updatedcart">0</span>
                  </i>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
    <router-view name="sidenav"></router-view>
    <router-view name="footer"></router-view>
    <router-view></router-view>

  </div>
</template>

<script>
import { eventBus } from "./main";
export default {
  name: "app",
  watch: {},
  data: function() {
    return {
      cart: 0,
      cartQty: "",
      appmsg: "Tire Seller.com"
    };
  },
  methods: {},
  filter: {},
  created() {
    var c = 0;
    eventBus.$on("cartItems", function(data) {
      this.cart = data;
      this.cartQty = data.qty;

      alert("listening in App.vue");
      var temp = $("#updatedcart").text();
      temp = parseInt(this.cartQty) + parseInt(temp);
      console.log("this.cartQty", this.cartQty);
      console.log("this.cart", this.cart);
      $("#updatedcart").text(temp);
    });
  },
  updated() {}
};
</script>

<style>
i.fa.fa-shopping-cart,
i.fa.fa-user-circle,
i.fa.fa-wrench {
  font-size: 30px;
}
.cart {
  position: block;
}
#updatedcart {
  background-color: #8bc53f;
  font-size: 15px;
  border-radius: 10px;
  color: white;
  position: absolute;
  display: block;
  top: 10px;
  right: 0;
  min-width: 10px;
  padding: 4px 7px;
  white-space: nowrap;
  text-align: center;
  min-height: 20px;
  font-weight: bolder;
}
</style>
