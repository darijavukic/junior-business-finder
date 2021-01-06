<template>
  <v-container class="users" fluid>
    <v-row class="fill-height">
      <v-col cols="3" class="d-flex flex-column align-center justify-center pa-0 ma-0">
        <v-card class="mt-1" height="100%" width="100%">

        <v-list>
          <v-list-item-group>
            <v-list-item
                :to="`/users/${item.value}`"
                v-for="(item, i) in this.$store.state.positions"
                :key="i"
            >

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-row>
          <v-col cols="3" v-for="user in members" v-bind:key="user.id">
            <User  :data="user" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import User from '../components/User'
export default {
name: "Users.vue",
  computed: {
    members() {
      let position = this.$route.params['position']
      return this.$store.state.members.filter(item => item.position === position)
    }
  },
  components: {
    User
  }
}
</script>

<style scoped>
.users {
  width: 100%;
  background: url('../assets/4853433.jpg') center no-repeat;
  height: calc(100% - 48px);
  box-sizing: border-box;
}
</style>
