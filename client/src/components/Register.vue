<template>
  <div>
    <h1>{{msg}}</h1>
    <input type="email" name="email" placeholder="email" id="email" v-model="email">
    <br>
    <input type="password" name="password" placeholder="password" id="password" v-model="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  props: {
    msg: String
  },
  watch: {
    email(value) {
      console.log(`email has change to ${value}`);
    }
  },
  methods: {
    async register() {
      await AuthService.register({
        email: this.email,
        password: this.password
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.email = "test";
    }, 1000);
  }
};
</script>


<style scoped>
</style>
