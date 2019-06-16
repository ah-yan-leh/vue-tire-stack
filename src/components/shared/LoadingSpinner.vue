<template>
  <div class="loader"></div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created: function() {}
};
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #9bdb34;
  width: 120px;
  height: 120px;
  margin-top: 15%;
  margin-left: 45%;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
