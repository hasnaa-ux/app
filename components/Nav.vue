<template>
  <div>
    <v-app-bar
      height="80"
      class="el"
      color="blue accent-2"
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
        <v-btn class="mr-5" color="white" @click="logout"> Logout </v-btn>
      </div>

      <div v-else>
        <v-btn nuxt to="/login" class="mr-5" color="white"> Login </v-btn>

        <v-btn class="mr-5" color="white"> Register </v-btn>
      </div>

      <!-- if user is not auth -->
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
    }
  },
};
</script>

<style></style>
