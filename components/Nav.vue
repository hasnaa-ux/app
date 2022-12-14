<template>
  <div>
    <v-app-bar
      height="80"
      class="el"
      color="white"
      app
      :style="{ padding: $vuetify.breakpoint.mdAndUp ? '0px 100px' : '' }"
    >
      <v-toolbar-title
        @click="$router.push('/')"
        class="text-md-h5 font-weight-blod pointer"
      >
        MyAPP
      </v-toolbar-title>
      <v-spacer />

      <!-- if user is auth -->

      <div v-if="currentUser.name">
        <v-btn class="mr-5" text>
          <v-spacer>{{ currentUser.name }}</v-spacer>
        </v-btn>
        <v-btn @click="ToggleTheme" class="mr-5" color="teal lighten-1">
        Logout
      </v-btn>
      </div>
      <div v-else>
        <v-btn nuxt to="/products" class="mr-5" color="teal lighten-1">
          Login
        </v-btn>
        
      <v-btn @click="ToggleTheme" class="mr-5" color="teal lighten-1">
        Register
      </v-btn>
      </div>
  

      <!-- if user is not auth -->

    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },

  methods: {
    ToggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style></style>
