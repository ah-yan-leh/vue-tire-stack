<template>
  <div class="container">
    <LoadingSpinner-component v-if="loading"></LoadingSpinner-component>
    <BackButton-component v-if="!loading"></BackButton-component>

    <div class="row">

      <div class="col-sm-3 col-md-3 hidden-xs leftCol">
        <h3 v-if="filtered_model_array.length > 0">Models</h3>
        <p v-for="(ti,index) in filtered_model_array" :key="index">
          <input type="checkbox" v-model="tireBox" v-bind:value="ti" v-on:change="tireModChecked" /> {{ti}}
        </p>
      </div>
      <div class="col-xs-12 col-sm-9 col-md-9 listingBox rightCol" v-for="(tire,index) in newlyFilteredData" :key="index">
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <img :src="tire.image_link" max-width="200px" height="auto" :alt="tire.prod_brand">
            <Star-component></Star-component>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-5 col-lg-5">
            <h3>
              <router-link :to="{ name: 'detail-2', params: {tire2:tire,item_id:tire.item_id } }">
                {{tire.prod_brand}} - {{tire.custom_label_2}}
              </router-link>
            </h3>
            <p>
            </p>
            <div>
              <p>Size: {{tire.size}}</p>
            </div>
            <div>
              <p>Category: {{tire.category_name}}</p>
            </div>
            <div>
              <p>All-Season: {{tire["All-Season"]}}</p>
            </div>
            <div>
              <p>Winter: {{tire.Winter}}</p>
            </div>
            <div>
              <p>Run flat: {{tire["Run flat"]}}</p>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <AddToCart-component :cartItem="tire" @cartCount="detailPageCartCount($event)"></AddToCart-component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoadingSpinner from "./shared/LoadingSpinner";
import BackButton from "./shared/BackButton";
import AddToCart from "./shared/AddToCart";
import Star from "./shared/Star";
import { eventBus } from "../main";
export default {
  watch: {
    "$route.params.id": function(id) {
      this.getCurrentParam();
    }
  },
  data: function() {
    return {
      tiredata: "",
      errors: [],
      filteredData: [],
      filtered_model_array: [],
      tireBox: [],
      tiresizeBox: [],
      loading: true,
      currentQueryParam: ""
    };
  },
  methods: {
    getTires: function(id, filterCall) {
      axios
        .get(`../../../data/all-tires.json`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.tiredata = response.data;
          filterCall(id, this.uniqueModelNames, this.uniqueSizes);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    filterCall(i, callback, callback2) {
      this.filteredData = this.tiredata.filter(tire => {
        return tire.prod_id == i;
      });
      this.loading = false;
      callback();
      callback2();
    },

    uniqueModelNames: function() {
      for (var i = 0; i < this.filteredData.length; i++) {
        if (
          this.filtered_model_array.indexOf(
            this.filteredData[i].custom_label_2
          ) === -1
        ) {
          this.filtered_model_array.push(this.filteredData[i].custom_label_2);
        }
      }
      return this.filtered_model_array;
    },
    tireModChecked() {
      console.log("tire model checked");
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },

    getCurrentParam: function() {
      if (
        this.currentQueryParam !== this.$route.params.id &&
        this.currentQueryParam !== "undefined" &&
        this.currentQueryParam !== undefined
      ) {
        console.log("this.$route.params = ", this.$route.params.id);
      }
    }
  },
  created: function() {
    this.currentQueryParam = this.$route.params.id;
    this.getTires(this.$route.params.id, this.filterCall);
  },
  computed: {
    newlyFilteredData() {
      if (!this.tireBox.length) return this.filteredData;
      return this.filteredData.filter(j =>
        this.tireBox.includes(j.custom_label_2)
      );
    },
    newlyFilteredSizeData() {
      if (!this.tiresizeBox.length) return this.filteredData;
      return this.filteredData.filter(j => this.tiresizeBox.includes(j.size));
    }
  },
  components: {
    "AddToCart-component": AddToCart,
    "LoadingSpinner-component": LoadingSpinner,
    "Star-component": Star,
    "BackButton-component": BackButton
  }
};
</script>

<style scoped>
.leftCol {
  float: left;
}
.rightCol {
  float: right;
}
</style>
