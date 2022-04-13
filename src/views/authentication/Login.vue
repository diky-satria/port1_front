<template>

    <Login>

        <div class="row cov-login">
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-11">
                <q-form @submit.prevent="login">
                    <q-card class="my-card login-card">
                        <q-card-section class="login-title">
                            <div class="text-h6 text-center text-white text-bold">LOGIN</div>
                        </q-card-section>
                        <q-card-section>
                            <q-input type="text"
                                class="q-mt-md" 
                                v-model="form.username" 
                                outlined 
                                label="Username"
                            />
                            <div v-if="errors['username']" style="color:red;">
                                {{ errors['username'][0] }}
                            </div>

                            <div v-if="errors['invalid']" style="color:red;">
                                {{ errors['invalid'][0] }}
                            </div>

                            <q-input type="password"
                                class="q-mt-md" 
                                v-model="form.password" 
                                outlined 
                                label="Password"
                            />
                            <div v-if="errors['password']" style="color:red;">
                                {{ errors['password'][0] }}
                            </div>
                        </q-card-section>
                        <q-card-actions class="q-pt-none q-px-md q-pb-md">
                            <div style="width:100%;">
                                <q-btn type="submit" :loading="submitting" color="primary float-right btn-edited-col text-bold" label="Login"/>
                            </div>
                        </q-card-actions>
                    </q-card>        
                </q-form>
            </div>
        </div>

    </Login>

</template>

<script>
import Login from '../layout/Login.vue'
import { ref, reactive } from 'vue'
import store from '@/store'
// import router from '@/router'
// import axios from 'axios'

export default {

    components: {
        Login
    },

    setup(){

        const errors = ref([])
        const rules = ref([])
        const submitting = ref(false)
        
        const form = reactive({
            username: '',
            password: ''
        })

        const login = async () => {
            submitting.value = true 
            errors.value = []
            try{

                await store.dispatch('auth/login', form)
                
            }catch(e){
                errors.value = e.response.data.errors
                submitting.value = false
            }
        }

        return {
            login,
            form,
            errors,
            rules,
            submitting
        }

    }
}
</script>