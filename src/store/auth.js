
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  getters: { 
    authenticated (state){
        return state.token && state.user
    },
    user(state){
        return state.user
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    async logIn({ dispatch }, Credentials) {
      let response = await axios.post('admin', Credentials);
        //  let response = await fetch("https://prep50.herokuapp.com/admin", {
        //    method: "POST",
        //    headers: { "Content-Type": "application/json" },
        //    body: JSON.stringify(Credentials),
        //  });
      return dispatch("attempt", response.data.token);
      //  console.log(response.data);
    },
    async attempt({ commit, state }, token) {
        if(token){
           commit("SET_TOKEN", token);
        }
        if(!state.token)
        return
     
      // console.log(token);
      try {
        let response = await axios.get('auth/me',{
            headers:{
                'Authorization':'Bearer' + token
            }
        });
        commit("SET_USER", response.data);
      } catch (e) {
        commit('SET_TOKEN', null)
        commit('SET_USER', null);
        // console.log('failed');
      }
    },
    logOut({commit}){
        return axios.post('auth/logOut').then(() => {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        })

    }
  },
};
