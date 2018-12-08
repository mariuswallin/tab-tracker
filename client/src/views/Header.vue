<template>
  <div class="header-wrapper">
    <Headers/>
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from "@/components/Headers.vue";

export default {
  name: "headers",
  components: {
    Headers
  }
};
</script>