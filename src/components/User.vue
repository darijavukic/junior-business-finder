<template>
<v-card class="d-flex flex-column align-center justify-center pa-2" rounded elevation="0" outlined>
  <v-avatar size="64" rounded><v-img :src="require(`../assets/${data.avatar}`)"></v-img></v-avatar>
  <v-card-title>{{data.first_name}} {{data.last_name}}</v-card-title>
  <v-card-subtitle>{{this.$store.state.positions.filter(item => item.value === data.position)[0].text}}</v-card-subtitle>
  <v-card-subtitle>{{ data.age }} years old</v-card-subtitle>
  <v-card-actions>
    <v-btn right color="primary" @click="goToProfile(data.id)">Open profile</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  methods: {
    goToProfile(id) {
      this.$router.push(`/view-profile/${id}`);
    }
  },
  props: ["data"],
  name: "User"
}
</script>

<style scoped>

</style>
