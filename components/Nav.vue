<template>
  <div>
    <v-app-bar
    color="blue accent-2"
      height="80"
      class="el"
      
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
      <v-toolbar-title class="mr-5" >
        Email
      </v-toolbar-title>

      <v-btn  @click="ToggleTheme" class="mr-5" color="cyan accent-3">
        Logout
      </v-btn>

      <!-- if user is not auth -->
      <v-btn nuxt to="/products" class="mr-5" color="teal lighten-1">
        Login
      </v-btn>

      <v-btn  @click="ToggleTheme" class="mr-5" color="teal lighten-1">
        Register
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    ToggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style></style>
