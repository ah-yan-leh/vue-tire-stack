<template>
    <div class="col-sm-12">
        <div class="row listingBox" v-for="(tire,index) in cartData" :key="index">
            <div v-if="tire.prod_brand !== ''">
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                    <img :src="tire.image_link" max-width="100px" height="auto" :alt="tire.prod_brand">
                    <Star-component></Star-component>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <h3>

                        <router-link :to="{ name: 'detail-2', params: {tire:tire,item_id:tire.item_id } }">
                            {{tire.prod_brand}} - {{tire.custom_label_2}}
                        </router-link>
                    </h3>
                    <div>
                        <h3>Size: {{tire.size}}</h3>
                    </div>
                    <div>
                        <h3>Qty: {{tire.qty}}</h3>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div class="col-xs-12" v-if="tire.prod_brand == 'Nitto'">
                        <h3 class="saleprice">Special Price: ${{tire.price * tire.qty}}</h3>

                    </div>
                    <div class="col-xs-12" v-else-if="tire.sale_price !== tire.price">
                        <h3>Price: ${{tire.sale_price * tire.qty }}</h3>
                        <h4 class="saleprice">${{(tire.price * tire.qty) - (tire.sale_price * tire.qty)}} savings</h4>
                    </div>
                    <div class="col-xs-12" v-else>
                        <h3>Price: ${{tire.price * tire.qty}}</h3>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-12" v-if="tire['Installer Discount'] == 'Yes'">
                        <h3 class="saleprice">FREE DELIVERY</h3>
                        <h4>to Tire-Stack Installer</h4>
                    </div>
                    <div class="col-xs-6 col-sm-6" v-else>
                        <h4>
                            <strong>SHIPPING FEE</strong>
                        </h4>
                        <h4>$15 (per tire)</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Star from "./shared/Star";
export default {
  watch: {},
  props: {
    cartData: {
      type: Array,
      required: false
    }
  },
  data: function() {
    return {};
  },
  methods: {},
  created: function() {},
  computed: {},
  components: {
    "Star-component": Star
  }
};
</script>

<style>
</style>
