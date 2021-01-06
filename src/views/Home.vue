<template>
  <v-container class="home" fluid>
    <v-row class="fill-height">
      <v-col cols="6" class="d-flex flex-column align-center justify-center">
        <div class="text-center">

        <h1 class="text-h3">Junior Business Finder</h1>
        <v-autocomplete class="mt-8"
            v-model="selectedPosition"
            :items="this.$store.state.positions"
            dense
            label="Select position"
        ></v-autocomplete>
          <v-btn color="primary" @click="goToUsers">Search users</v-btn>
        </div>
      </v-col>
      <v-col cols="6" class="d-flex align-center justify-center">
        <span class="text-h3">Create and find your first job!</span>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      selectedPosition: "",


    }
  },
  methods: {
    goToUsers() {
      this.$router.push(`/users/${this.selectedPosition}`)
    }
  },
  components: {

  }
}
</script>

<style scoped>

.home {
  width: 100%;
  background: url('../assets/4853433.jpg') center no-repeat;
  height: calc(100% - 48px);
  box-sizing: border-box;
}

</style>
