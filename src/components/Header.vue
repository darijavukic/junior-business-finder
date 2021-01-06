<template>
  <v-toolbar dense>
    <router-link to="/" class="black--text text-decoration-none"><v-toolbar-title>Junior Business Finder</v-toolbar-title></router-link>
    <v-spacer></v-spacer>
    <router-link to="/" class="text-decoration-none">
      <v-btn depressed color="white">Home</v-btn>
    </router-link>
    <router-link to="/profile" class="text-decoration-none">
      <v-btn depressed color="white">My Profile</v-btn>
    </router-link>
    <router-link to="/about" class="text-decoration-none">
      <v-btn depressed color="white">About Us</v-btn>
    </router-link>
    <v-btn depressed color="white" @click="signOut">Sign Out</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$store.dispatch('logoutUser');
      this.$router.replace('/login');
    }
  },
  name: "Header.vue"
}
</script>

<style scoped>
.header {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #333;
}
</style>
