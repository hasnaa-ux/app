<template>
  <div>
    <v-container>
      <v-form>
        <v-text-field v-model="loginInfo.email" label="Email" type="email" />
        <v-text-field v-model="loginInfo.password" label="Password" type="password"/>
        <v-btn @click="LoginUser">Login</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        email: null,
        password: null,
      },
    };
  },
  methods:{
    LoginUser(){
        this.$store.dispatch('LoginUser', this.loginInfo)
    }
  }
};
</script>

<style></style>
