<template>
  <div id="app">
    <Nav />
    <router-view id="view" />
  </div>
</template>

<script>
import Nav from "@/components/common/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss"></style>
