<template>
  <div class="headers">
    <router-link class="home" tag="span" :to="{
			name: 'songs'
		}">TabTracker</router-link>
    <router-link class="btn" tag="button" :to="{
			name: 'songs'
		}">Browse</router-link>
    <router-link class="btn" tag="button" :to="{
          name: 'login'
        }">Login</router-link>
    <router-link class="btn" tag="button" :to="{
          name: 'register'
        }">Sign Up</router-link>
    <button class="btn" @click="logout">Log Out</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {}
  }
};
</script>

<style scoped>
</style>