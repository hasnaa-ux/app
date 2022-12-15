import axios from '@nuxtjs/axios';

export const state = () => ({
  users:[],
  currentUser:''    
})





// contains your actions
export const actions = {
  async loadUsers({commit}){
    let response = await axios.get('/api/users?page=2');
    let users = response.data.data

  },
  async LoginUser({commit}, loginInfo){
    let response = await axios.post('/api/login',loginInfo)
    let user = response.data.data.attribute

    commit('')
  },
  async logout({commit}){
    commit('logout')
  }
}






// contains your mutations
export const mutations = {
  SET_USERS(state,users){
    state.users = users
  },
  SET_CURRENT_USER(state,user){
    state.currentUser = user;
    window.localStorage.currentUser=JSON.stringify(user)

  },
  logout(state){
    state.currentUser = null
  }
}
// your root getters
export const getters = {
  loadUsers(state){
    return state.users
  },
  currentUser(state){
    return state.currentUser
  },
}