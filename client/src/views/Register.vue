<template>
  <div class="register">
    <Register msg="Welcome to Register Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";

export default {
  name: "register",
  components: {
    Register
  }
};
</script>
