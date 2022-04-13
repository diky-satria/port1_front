import axios from 'axios'
import router from '@/router'

export default({
    namespaced: true,

    state:{
        token: null,
        user: null
    },
    getters: {
        authenticated(state){
            return state.token && state.user
        }, 
        user(state){
            return state.user
        }
    },
    mutations: {
        SET_TOKEN(state, token){
            state.token = token
        },
        SET_USER(state, data){
            state.user = data
        }
    },
    actions: {
        async login({dispatch}, form){
            let res = await axios.post('api/login', form)
            await dispatch('me', res.data.data.token)
        },
        async me({commit, state}, token){
            if(token){
                commit('SET_TOKEN', token)
            }
            if(!state.token){
                return
            }
            try{
                let response = await axios.get('api/user')

                if(response.data.role !== 'super admin'){
                    router.replace('/pos')
                }else{
                    router.replace('/user')
                }

                commit("SET_USER", response.data)
            }catch(e){
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }

        },
        async logout({ commit }){
            await axios.post('api/logout')
            commit("SET_TOKEN", null)
            commit("SET_USER", null)
        }
    }

})