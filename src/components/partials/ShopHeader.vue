<template>

  <div class="col-xs-12 col-sm-12 col-md-12 bellowSpace">
    <BackButton-component></BackButton-component>
    <div class="col-xs-6 col-sm-6 col-md-6">
      <div>
        <i class="fa fa-check"></i> FREE delivery to a TireBuyer installer.
      </div>
      <div>
        <i class="fa fa-check"></i> We've partnered with trusted installers near you.
      </div>
      <div>
        <i class="fa fa-check"></i> Your order is at the tire shop in as little as 1-2 business days.
      </div>
    </div>
    <div class="col-xs-6 col-sm-6 col-md-6">
      <img src="../../assets/images/tire_pros.png" max-width="100%" height="auto">
    </div>
  </div>

</template>
  
<script>
import BackButton from "../shared/BackButton";
export default {
  computed: {},
  data: function() {
    return {};
  },
  props: {},
  methods: {},
  components: {
    "BackButton-component": BackButton
  }
};
</script>

<style scoped>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
strong {
  background-color: #1e4164;
  color: white;
  padding: 3px;
  margin-left: 15px;
  margin-top: 5px;
}
i.fa.fa-check {
  color: #8bc53f;
  font-size: 30px;
  border: 1px solid #8bc53f;
  border-radius: 20px;
  margin: 5px;
  padding: 5px;
}
.bellowSpace {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid gray;
}
</style>