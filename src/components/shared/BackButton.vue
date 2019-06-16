<template>
    <span>
        <h4>
            <a href="#" @click="goBack">back</a>
        </h4>
    </span>
</template>
  
<script>
export default {
  computed: {},
  data() {
    return {};
  },
  props: {},
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>