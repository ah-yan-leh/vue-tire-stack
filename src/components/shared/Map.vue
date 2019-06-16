<template>
  <div class="row">
    <h3>Shop Coordinates (Lat:
      <strong>{{mapData.shop_lat}}</strong> , long:
      <strong>{{mapData.shop_long}}</strong> )</h3>
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
      <gmap-marker :position="{lat:mapData.shop_lat, lng:mapData.shop_long}"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  watch: {},
  props: {
    mapData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      markers: []
    };
  },

  methods: {
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: this.mapData.shop_lat,
          lng: this.mapData.shop_long
        };
        console.log("position", position);
      });
      console.log(this.mapData);
    }
  },

  created() {
    this.geolocate();
  },
  computed: {
    center() {
      return { lat: this.mapData.shop_lat, lng: this.mapData.shop_long };
    }
  }
};
</script>
<style>
</style>
