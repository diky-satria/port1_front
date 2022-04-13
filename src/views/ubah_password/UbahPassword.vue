<template>
    <DashboardLayout>
        <div>
            <div class="text-subtitle2 text-bold">
                Ubah Password
            </div>
            <div class="q-pt-md">

                <div class="row">
                    <div class="col-md-5 col-sm-6 col-xs-12">

                        <q-form @submit.prevent="ubah">

                            <q-card>
                                <q-card-section>

                                    <q-input type="password"
                                        class="q-mt-md" 
                                        outlined 
                                        v-model="form.password_lama"
                                        label="Password Lama"
                                    />
                                    <div v-if="errors['password_lama']" style="color:red;">
                                        {{ errors['password_lama'][0] }}
                                    </div>

                                    <div v-if="errors['invalid']" style="color:red;">
                                        {{ errors['invalid'][0] }}
                                    </div>

                                    <!-- ------------------------------------------------------------------ -->

                                    <q-input type="password"
                                        class="q-mt-md" 
                                        outlined 
                                        v-model="form.password_baru"
                                        label="Password Baru"
                                    />
                                    <div v-if="errors['password_baru']" style="color:red;">
                                        {{ errors['password_baru'][0] }}
                                    </div>

                                    <q-input type="password"
                                        class="q-mt-md" 
                                        outlined 
                                        v-model="form.konfirmasi_password_baru"
                                        label="Konfirmasi Password Baru"
                                    />
                                    <div v-if="errors['konfirmasi_password_baru']" style="color:red;">
                                        {{ errors['konfirmasi_password_baru'][0] }}
                                    </div>

                                </q-card-section>
                                <q-card-actions class="q-pt-none q-px-md q-pb-md">
                                    <div style="width:100%;">
                                        <q-btn type="submit" :loading="submitting" color="primary float-right btn-edited-col text-bold" label="Ubah"/>
                                    </div>
                                </q-card-actions>
                            </q-card>   

                        </q-form>

                    </div>
                </div>
                

            </div>

        </div>
    </DashboardLayout>
</template>

<script>
import DashboardLayout from '../layout/DashboardLayout.vue'
import { ref, reactive } from 'vue'
import axios from 'axios'
import { useQuasar } from 'quasar'
export default {
    name: 'UbahPassword',

    components: {
        DashboardLayout
    },

    setup(){

        const form = reactive({
            password_lama: '',
            password_baru: '',
            konfirmasi_password_baru: ''
        })

        const errors = ref([])

        const submitting = ref(false)

        const q = useQuasar()

        const ubah = async () => {
            submitting.value = true
            errors.value = []
            try{
                await axios.post('api/ubah_password', form)
                submitting.value = false

                form.password_lama = ''
                form.password_baru = ''
                form.konfirmasi_password_baru = ''

                q.notify({
                    type: 'positive',
                    message: 'Password berhasil diubah',
                    position: 'top-right',
                    timeout: 1500
                })
            }catch(e){
                errors.value = e.response.data.errors
                submitting.value = false
            }
        }

        return {
            form,
            errors,
            submitting,
            ubah,
            q
        }
    }
}
</script>