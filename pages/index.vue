<template>
  <div>
    <Nav />
    <h1>Hello</h1>
    <div v-for="user in users" :key="user.id">
      {{ user.first_name }} - {{ user.last_name }} - {{ user.email }}
    </div>
  </div>
</template>

<script>
import { mapGetters ,mapActions,mapMutations,mapState} from "vuex";
export default {
  name: "IndexPage",

  data() {
    return {};
  },
  computed:{
    ...mapGetters(['users'])
   
  
  },
  mounted:{
    ...mapActions(['loadUsers'])
  }
};
</script>
