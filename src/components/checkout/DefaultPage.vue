<template>
    <div class="container">
        <div class="row">
            <ul class="list-inline">
                <li>
                    <router-link :to="{ name: 'content-home'}">ContentHome</router-link>
                </li>
                <!-- specify the link by passing the `to` prop. -->
                <li>
                    <router-link :to="{ name: 'one', params: { color: 'red', title: 'Page One', description: 'Color and Title set. Default Text.' } }">ContentOne</router-link>
                </li>
                <!--  -->
                <li>
                    <router-link :to="{ name: 'two', params: { color: 'green', customClasses: ['classOne'], title: 'Page Two', description: 'This is our new description.' } }">ContentTwo</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'three', params: { color: 'purple', text: 'This is some random text.', description: 'Color and Text set. Default Title.' } }">ContentThree</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'four', params: { title: 'Page Four', action: 'actionOne', description: 'Only Title set. Action One.' } }">ContentFour</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'five', params: { action: 'actionTwo', description: 'All Defaults. Action Two.' } }">ContentFive</router-link>
                </li>
            </ul>
        </div>
        <div class="row">
            <router-view name="checkout"></router-view>
        </div>
    </div>
</template>

<script>
import BackButton from "./shared/BackButton";
import Star from "./shared/Star";
import MapComp from "./shared/Map";

export default {
  watch: {},
  props: {},
  data: function() {
    return {};
  },
  methods: {},
  created: function() {},
  computed: {},
  components: {
      "BackButton-component":BackButton,
      "Star-component":Star,
      "MapComp-component":MapComp

  }
};
</script>

<style scoped>
</style>
