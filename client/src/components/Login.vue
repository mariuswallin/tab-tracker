<template>
  <div>
    <h1>{{msg}}</h1>
    <label for="email">Email</label>
    <input type="email" name="email" placeholder="email" id="email" v-model="email">
    <br>
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="password" id="password" v-model="password">
    <br>
    <div class="error" v-html="error"></div>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  props: {
    msg: String
  },
  methods: {
    async login() {
      try {
        await AuthService.login({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>


<style scoped>
</style>
