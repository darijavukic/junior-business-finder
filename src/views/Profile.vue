<template>
  <v-container class="profile">
    <v-card flat class="mt-4">
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <v-card-title>
            <v-img class="rounded" max-height="128" max-width="128" contain
                   :src="require(`../assets/${this.profile.avatar}`)"></v-img>
          </v-card-title>
          <v-card-text>
            <div>
              <span class="text-h5">Ime i Prezime: </span> <span class="text-h6">{{
                this.profile.first_name
              }} {{ this.profile.last_name }}</span>
            </div>
            <div>
              <span class="text-h5">Grad: </span> <span class="text-h6">{{ this.profile.city }}</span>
            </div>
            <div>
              <span class="text-h5">Godine: </span> <span class="text-h6">{{ this.profile.age }}</span>
            </div>
            <div>
              <span class="text-h5">Zanimanje: </span> <span class="text-h6">{{
                this.profile.position
              }}</span>
            </div>
            <div class="mt-4">
              <v-btn class="orange text-capitalize">
                <v-icon>mdi-plus</v-icon>
                <span class="font-weight-bold ml-1">Add CV</span>
              </v-btn>
            </div>
            <router-link to="#" class="grey--text text-decoration-none">
              <div class="mt-4">
                <v-icon>mdi-email</v-icon>
                <span> Email</span>
              </div>
            </router-link>
            <router-link to="#" class="grey--text text-decoration-none">
              <div class="mt-4">
                <v-icon>mdi-phone</v-icon>
                <span> +387 63 123 456</span>
              </div>
            </router-link>
            <router-link to="#" class="grey--text text-decoration-none">
              <div class="mt-4">
                <v-icon>mdi-map-marker</v-icon>
                <span> Location</span>
              </div>
            </router-link>
            <router-link to="#" class="grey--text text-decoration-none">
              <div class="mt-4">
                <v-icon>mdi-facebook</v-icon>
                <span> Facebook</span>
              </div>
            </router-link>
            <v-divider class="mt-2"></v-divider>
            <div class="add-container d-flex align-center justify-center">

              <div class="pa-16" style="width: 50%; border: 3px dashed #000; border-radius: 15px">
              <router-link to="#" class="grey--text text-decoration-none d-flex align-center justify-center ">
                <v-icon size="48">mdi-plus</v-icon>
                <span class="text-h5">Add new project</span>
              </router-link>
              </div>
            </div>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <h1 class="text-h3 text-center mb-8">My Projects</h1>
          <div v-for="(project, i) in this.profile.projects" v-bind:key="i">
            <h1 class="text-h5 mb-4 font-weight-bold">{{project.title}}</h1>
            <p>{{project.description}}</p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Profile.vue",
  data() {
    return {
      profile: {
        first_name: 'John',
        last_name: 'Doe',
        position: 'Frontend Developer',
        city: 'Mostar',
        avatar: 'male.png',
        age: 25,
        projects: [{
          title: 'Project 1',
          description: 'Soluta ducimus ea veniam. Quasi est non fuga delectus unde amet. Dolores atque fugiat doloremque corrupti quia. Est doloremque eos aut ipsa. Officia corporis molestiae numquam esse. Laudantium nam vero iste voluptatem. Recusandae eum sequi. Velit cupiditate esse vitae accusantium repellendus.'
        },
          {
            title: 'Project 2',
            description: 'Soluta ducimus ea veniam. Quasi est non fuga delectus unde amet. Dolores atque fugiat doloremque corrupti quia. Est doloremque eos aut ipsa. Officia corporis molestiae numquam esse. Laudantium nam vero iste voluptatem. Recusandae eum sequi. Velit cupiditate esse vitae accusantium repellendus.'
          },
          {
            title: 'Project 3',
            description: 'Soluta ducimus ea veniam. Quasi est non fuga delectus unde amet. Dolores atque fugiat doloremque corrupti quia. Est doloremque eos aut ipsa. Officia corporis molestiae numquam esse. Laudantium nam vero iste voluptatem. Recusandae eum sequi. Velit cupiditate esse vitae accusantium repellendus.'
          }]
      }
    }
  }
}
</script>

<style scoped>
.profile {
  width: 100%;
  background: url('../assets/4853433.jpg') center no-repeat;
  height: calc(100% - 48px);
  box-sizing: border-box;
}
.add-container {
  width: 100%;
  height: 350px;
}
</style>
