<template>
  <div class="col-xs-12 col-sm-12 col-md-12">
    <div v-if="tiredata2[0]">
      <h3>New call to get data</h3>
      <ItemDetail-component :tire2="tiredata2[0]"></ItemDetail-component>
    </div>
    <div v-else>
      <ItemDetail-component :tire2="tire2"></ItemDetail-component>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ItemDetail from "./ItemDetail";
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
      errors: [],
      goBack: ""
    };
  },
  methods: {
    getCurrentParam: function(callback, id) {
      if (this.tire2 == "undefined" || this.tire2 == undefined) {
        //alert("this.tire2 is undefined");
        callback(id);
      }
    },
    getTires: function(id, filterCall) {
      axios
        .get(`../../../data/all-tires.json`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.tiredata = response.data;
          this.filterCall(id);
          //console.log("this.tiredata", this.tiredata);
          //console.log("this.tiredata2", this.tiredata2[0]);
        })
        .catch(e => {
          this.errors.push(e);
          console.log("this.errors", e);
        });
    },
    filterCall(i) {
      this.tiredata2 = this.tiredata.filter(tire => {
        return tire.item_id == i;
      });
    },
    detailPageCartCount: function(qty) {
      this.cartData = qty;
      console.log("Listening in detail page", this.cartData.size);
    }
  },
  created: function() {
    this.currentQueryParam = this.$route.params.item_id;
    this.getCurrentParam(this.getTires, this.$route.params.item_id);
  },
  computed: {
    backUpData: function(callback, id) {
      if (this.tire2 == "undefined" || this.tire2 == undefined) {
        return this.tiredata2;
      }
    }
  },
  components: {
    "ItemDetail-component": ItemDetail
  }
};
</script>

<style scoped>
</style>
