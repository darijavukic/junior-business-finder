import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    positions: [
      {
        text: 'Frontend Developer',
        value: 'frontend'
      },
      {
        text: 'Backend Developer',
        value: 'backend'
      },
      {
        text: 'Fullstack Developer',
        value: 'fullstack'
      },
      {
        text: 'UI Designer',
        value: 'uidesigner'
      }
    ],
    members: [{
      id: 1,
      first_name: "Graham",
      last_name: "Pollich",
      position: "frontend",
      age: 24,
      avatar: "male.png"
    },
      {
        id: 2,
        first_name: "Juliette",
        last_name: "Morissette",
        position: "frontend",
        age: 22,
        avatar: "female.png"
      },
      {
        id: 3,
        first_name: "Arthur",
        last_name: "Walker",
        position: "backend",
        age: 23,
        avatar: "male.png"
      },
      {
        id: 4,
        first_name: "Samuel",
        last_name: "Rutherford",
        position: "backend",
        age: 25,
        avatar: "male.png"

      },
      {
        id: 5,
        first_name: "Phillip",
        last_name: "Little",
        position: "fullstack",
        age: 21,
        avatar: "male.png"

      },
      {
        id: 6,
        first_name: "Katarina",
        last_name: "Cvitković",
        position: "uidesigner",
        age: 23,
        avatar: "female.png"
      },
      {
        id: 7,
        first_name: "Darija",
        last_name: "Vukić",
        position: "uidesigner",
        age: 23,
        avatar: "female.png"
      }],
    users: JSON.parse(window.localStorage.getItem("users")) || [],
    currentUser: {}
  },
  mutations: {
    ADD_USER: function(state, user) {
      state.users.push(user)
    },
    LOGIN_USER: function(state, user) {
      state.currentUser = user;
    },
    LOGOUT_USER: function(state) {
      state.currentUser = {};
    }
  },
  actions: {
    logoutUser: function({commit}) {
      commit('LOGOUT_USER');
    },
    loginUser: function({commit}, form) {
      let lsUsers;
      if (this.state.users) {
        lsUsers = this.state.users;
      } else {
        lsUsers = JSON.parse(window.localStorage.getItem("users"));
      }
      lsUsers.forEach(function(user) {
        if (user.username === form.username) {
          console.log("user found");
          if (user.password === form.password) {
            commit('LOGIN_USER', user);
            router.push('/');
          }
        }
      })

    },
    createUser: function({commit}, form) {
      delete form["currentPassword"];
      let lsUsers = JSON.parse(window.localStorage.getItem("users"));
      if (!lsUsers) {
        lsUsers = [];
      }
      lsUsers.push(form);
      window.localStorage.setItem("users", JSON.stringify(lsUsers))
      commit("ADD_USER", form);
      alert('Account created sucessfully');
      router.push('/login')
    }
  },
  modules: {
  }
})
