
import axios from 'axios'
import * as jose from 'jose'

export default {
  namespaced: true,
  state: {
    access: null,
    user: null,
  },
  getters: { 
    authenticated (state){
        return state.access && state.user
    },
    user(state){
        return state.user
    }
  },
  mutations: {
    SET_TOKEN(state, access) {
      state.access = access;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    async logIn({ dispatch }, Credentials) {
      let response = await axios.post('admin', Credentials);
      
        
        // console.log(response.data.data);
        //  console.log(response.data.data.access);
      dispatch("attempt", response.data.data.access);
     
       
    },
    
    async attempt({ commit, state }, access) {
      commit("SET_TOKEN", access);
      // console.log(access);
        if(access){
           commit("SET_TOKEN", access);
        }
        if (!state.access) return;
     
      // console.log(token);
      try {
        //  let dec = jose.decodeJwt(access)
        //     auth.user = (dec as unknown as JWTCLAIMS).aud as SET_USER
        //     commit("SET_USER", response.data.data);
         let dec = jose.decodeJwt(access)
            // user = dec as unknown as JWTCLAIMS => aud as User

            console.log(dec)
            
            commit("SET_USER", dec);
            // setUserToken(auth.token)
        // let response = await axios.get("/admin/user", {
        //   headers: {
        //     Authorization: "Bearer" + access,
        //   },
        // });
        // commit("SET_USER", response.data.data);
        // console.log(response.data.data);
      } catch (e) {
        commit('SET_TOKEN', null)
        commit('SET_USER', null);
        console.log('failed');
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
