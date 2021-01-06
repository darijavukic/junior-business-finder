<template>
  <v-container class="d-flex align-center justify-center fill-height">
    <v-card >

      <v-form class="ma-4 pa-8 login-form d-flex justify-center flex-column" @submit.prevent="login"  v-model="formValid">
        <h1 class="title mb-4 text-center">Login</h1>
        <v-text-field v-model="form.username" outlined dense placeholder="Username" :rules="usernameRules" />
        <v-text-field v-model="form.password" outlined dense placeholder="Password" type="password" :rules="passwordRules" />
        <v-btn type="submit" color="primary">Login</v-btn>
        <router-link to="/register" class="grey--text mt-2 text-center"><span>Create an account</span></router-link>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  mounted() {
    if (this.$store.state.currentUser.username) {
      alert('You are already logged in;')
      this.$router.go(-1);
    }
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      formValid: false,
      usernameRules: [v => !!v || 'Username is required'],
      passwordRules: [v => !!v || 'Password is required']
    }
  },
  methods: {
    login() {
      this.$store.dispatch('loginUser', this.form)
    }
  },
  name: "Login"
}
</script>

<style scoped>
.login-form {
  width: 550px;
}
</style>
