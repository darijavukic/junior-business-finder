<template>
  <v-app>
    <v-main >
      <Header v-if="this.$route.name !== 'Login' && this.$route.name !== 'Register'"></Header>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style>
html {
  overflow: auto !important;
}
.v-application {
  background-color: #ececec !important;
}
</style>
