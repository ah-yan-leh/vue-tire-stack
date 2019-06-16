<template>
  <div class="col-sm-12 aqua">

    <input type="text" v-model="searchBySizeString" placeholder="Search tire size" />
    <table class="table table-bordered">
      <tbody>
      </tbody>
    </table>
  </div>
</template>

<script>

import axios from "axios";
export default {
  watch: {},
  data: function() {
    return {
      searchBySizeString: "",
      tiredata: [],
      errors: []
    };
  },
  methods: {
    getTires: function() {
      axios
        .get(`.././data/tire-sizes.json`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.tiredata = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  created: function() {
    this.getTires();
  },
  computed: {
    // A computed property that holds only those tires that match the searchBySizeString.
    filteredTires: function() {
      var tiredataArray = this.tiredata,
        searchBySizeString = this.searchBySizeString;
      if (!searchBySizeString) {
        return tiredataArray;
      }
      searchBySizeString = searchBySizeString.trim().toLowerCase();
      tiredataArray = tiredataArray.filter(function(item) {
        if (item.size.toLowerCase().indexOf(searchBySizeString) !== -1) {
          return item;
        }
      });
      // Return an array with the filtered data.
      return tiredataArray;
    }
  },
  components: {}
};
</script>

<style scoped>
</style>
