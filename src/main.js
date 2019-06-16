// packages and dependancies
import Vue from "vue";
import VueRouter from "vue-router";
import * as VueGoogleMaps from "vue2-google-maps";

// enable routing
Vue.use(VueRouter);

// enable google maps
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBXzw_66pIoJMRo1Am2TpNyN0XaIl-0QKY"
  }
});


// components
import App from "./App.vue";

import TireDetail from "./components/TireDetail";
import TireHome from "./components/TireHome";
import TireCategoryLanding from "./components/TireCategoryLanding";
import TiresByBrand from "./components/TiresByBrand";
import TiresBySize from "./components/TiresBySize";
import TireListPage from "./components/TireListPage";
import TireByBrandDetail from "./components/TireByBrandDetail";
import ItemDetail from "./components/ItemDetail";
import ShoppingCart from "./components/ShoppingCartPage";
import Footer from "./components/partials/Footer";
import Shops from "./components/Shops";
import Shop from "./components/Shop";
import PromoHeader from "./components/partials/PromoHeader";
import ShopHeader from "./components/partials/ShopHeader";

export const eventBus = new Vue();

// Define routes
const routes = [{
    path: "/",
    name: "home",
    components: {
      header: PromoHeader,
      content: TireHome,
      footer: Footer
    },
    props: {
      content: false,
      footer: false
    }
  },
  {
    path: "/tires/categories",
    components: {
      header: PromoHeader,
      content: TireHome,
      footer: Footer
    },
    props: {
      content: false,
      footer: false
    }
  },
  {
    path: "/tires/categories/:category_id",
    name: "tireCategories",
    components: {
      header: PromoHeader,
      content: TireCategoryLanding,
      footer: Footer
    },
    props: {
      content: false,
      footer: false
    }
  },
  {
    path: "/shops",
    components: {
      header: ShopHeader,
      content: Shops,
      footer: Footer
    },
    props: {
      content: false,
      footer: false
    }
  },
  {
    path: "/tires/tires-by-size",
    components: {
      content: TiresBySize
    }
  },
  {
    path: "/tires/tires-by-brand",
    components: {
      content: TiresByBrand
    }
  },
  {
    path: "/tires/search-results/:tireSizeID",
    components: {
      content: TireListPage
    }
  },
  {
    path: "/tires/brands/:id",
    name: "tireBrandDetail",
    components: {
      content: TireByBrandDetail
    }
  },
  {
    path: "/shopping-cart",
    name: "shopping-cart",
    components: {
      content: ShoppingCart
    }
  },
  {
    path: "/tires/details/:item_id",
    components: {
      content: ItemDetail
    }
  },
  {
    path: "/tires/detail-2/:item_id",
    name: "detail-2",
    components: {
      content: TireDetail
    },
    props: {
      content: true
    }
  },
  {
    path: "/tires/shop-info/:shop_id",
    name: "shop-info",
    components: {
      header: ShopHeader,
      content: Shop
    },
    props: {
      content: true
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});
// Define a filter to title is more than 60 characters long
Vue.filter("truncate", function (value) {
  var length = 60;

  if (value.length <= length) {
    return value;
  } else {
    return value.substring(0, length) + "...";
  }
});

// Define a custom filter called "currency". 
Vue.filter("currency", function (value) {
  return "$" + value.toFixed(2);
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});