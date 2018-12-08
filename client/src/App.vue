<template>
  <div id="app">
    <page-header/>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from "@/views/Header.vue";
export default {
  name: "app",
  components: {
    PageHeader
  }
};
</script>

<style>
</style>
