<template>
  <v-container class="d-flex align-center justify-center fill-height">
    <v-card>
      <v-form class="ma-4 pa-8 register-form d-flex justify-center flex-column" @submit.prevent="register" v-model="formValid">
        <h1 class="title mb-4 text-center">Create account</h1>
        <v-text-field outlined dense label="Username" :rules="usernameRules" v-model="form.username"/>
        <v-text-field outlined dense label="E-mail" :rules="emailRules" v-model="form.email" />
        <v-radio-group label="Gender" row mandatory v-model="form.gender">
          <v-radio label="Male" value="male"></v-radio>
          <v-radio label="Female" value="female"></v-radio>
        </v-radio-group>
        <v-text-field outlined dense label="Password" type="password" :rules="passwordRules" v-model="form.password"/>
        <v-text-field outlined dense label="Confirm password" type="password" :rules="confirmPasswordRules" v-model="form.confirmPassword"/>
        <v-btn type="submit" color="primary">Register</v-btn>
        <router-link to="/login" class="grey--text mt-2 text-center"><span>Already have an account? Login</span></router-link>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        gender: ""
      },
      formValid: false,
      usernameRules: [v => !!v || 'Username is required'],
      passwordRules: [v => !!v || 'Password is required', v => v.length >= 8 || 'Password must have at least 8 characters'],
      confirmPasswordRules: [v => v === this.form.password || 'Passwords must match'],
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid']
    }
  },
  methods: {
    register() {
      this.$store.dispatch('createUser', this.form);
    }
  },
  name: "Login"
}
</script>

<style scoped>
.register-form {
  width: 550px;
}
</style>
