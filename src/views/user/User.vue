<template>
    <DashboardLayout>
        <div>
            <div class="text-subtitle2 text-bold">
                User
            </div>
            <div class="q-pt-md">
                <q-table
                    title="Treats"
                    :rows="rows"
                    :columns="columns"
                    row-key="id"
                    :filter="filter"
                    :loading="loading"
                >

                    <template v-slot:top>
                        <q-btn color="primary float-right btn-edited-col text-white" :disable="loading" @click="tambahUser"><i class="fas fa-plus q-mr-sm"></i>Tambah</q-btn>
                        <q-space />
                        <q-input borderless dense debounce="300" color="primary" v-model="filter">
                        <template v-slot:append>
                            <q-icon name="search" />
                        </template>
                        </q-input>
                    </template>

                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="nama" :props="props">
                            {{ props.row.nama }}
                            </q-td>
                            <q-td key="username" :props="props">{{ props.row.username }}</q-td>
                            <q-td key="role" :props="props">{{ props.row.role }}</q-td>
                            <q-td key="opsi" :props="props">
                                <div class="justify-center q-gutter-x-xs">
                                    <q-btn color="teal"
                                        dense size="sm"
                                        class="q-px-xs"
                                        @click="editUser(props.row.id)"
                                        ><i class="fas fa-edit q-mx-xs"></i>Edit</q-btn>
                                    <q-btn
                                    color="red"
                                    dense
                                    size="sm"
                                    @click="hapusUser(props.row.id, index)"
                                    class="q-px-xs"
                                    ><i class="fas fa-trash q-mx-xs"></i>Hapus</q-btn>
                                </div>
                            </q-td>
                        </q-tr>
                    </template>

                </q-table>
            </div>
 
            <!-- modal -->
            <q-dialog v-model="prompt" persistent transition-show="flip-down" transition-hide="flip-up">
                <q-card style="min-width: 350px">

                    <q-form @submit.prevent="!editMode ? actionTambahUser() : actionEditUser(formEdit.id)" id="form">
                        <q-card-section>
                        <div v-if="!editMode" class="text-h6">Tambah User</div>
                        <div v-if="editMode" class="text-h6">Edit User</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                        
                            <!-- tambah -->
                            <q-input v-if="!editMode" type="text"
                                class="q-mt-md" 
                                outlined 
                                v-model="form.nama"
                                label="Nama"
                            />
                            <!-- edit -->
                            <q-input v-if="editMode" type="text"
                                class="q-mt-md" 
                                outlined 
                                v-model="formEdit.nama"
                                label="Nama"
                            />

                            <div v-if="errors['nama']" style="color:red;">
                                {{ errors['nama'][0] }}
                            </div>

                            <!-- tambah -->
                            <q-input v-if="!editMode" type="text"
                                class="q-mt-md" 
                                outlined 
                                v-model="form.username"
                                label="Username"
                            />
                            <!-- edit -->
                            <q-input v-if="editMode" type="text"
                                class="q-mt-md" 
                                outlined 
                                v-model="formEdit.username"
                                label="Username"
                            />

                            <div v-if="errors['username']" style="color:red;">
                                {{ errors['username'][0] }}
                            </div>

                            <!-- tambah -->
                            <q-select v-if="!editMode" outlined 
                                class="q-mt-md"
                                v-model="form.role" 
                                :options="['admin']"
                                label="Role"
                                lazy-rules
                            />
                            <!-- edit -->
                            <q-select v-if="editMode" outlined 
                                class="q-mt-md"
                                v-model="formEdit.role" 
                                :options="['admin']"
                                label="Role"
                                lazy-rules
                                readonly
                            />

                            <div v-if="errors['role']" style="color:red;">
                                {{ errors['role'][0] }}
                            </div>

                            <!-- tambah -->
                            <q-input v-if="!editMode" type="password"
                                class="q-mt-md" 
                                outlined 
                                v-model="form.password"
                                label="Password"
                            />
                            <!-- edit -->
                            <!-- <q-input v-if="editMode" type="password"
                                class="q-mt-md" 
                                outlined 
                                v-model="formEdit.password"
                                label="Password"
                            /> -->

                            <div v-if="errors['password']" style="color:red;">
                                {{ errors['password'][0] }}
                            </div>

                            <!-- tambah -->
                            <q-input v-if="!editMode" type="password"
                                class="q-mt-md" 
                                outlined 
                                v-model="form.konfirmasi_password"
                                label="Konfirmasi Password"
                            />
                            <!-- edit -->
                            <!-- <q-input v-if="editMode" type="password"
                                class="q-mt-md" 
                                outlined 
                                v-model="formEdit.konfirmasi_password"
                                label="Konfirmasi Password"
                            /> -->

                            <div v-if="errors['konfirmasi_password']" style="color:red;">
                                {{ errors['konfirmasi_password'][0] }}
                            </div>

                        </q-card-section>

                        <q-card-actions align="right" class="text-primary">
                            <q-btn flat label="Kembali" @click="btnKembali" v-close-popup />
                            <q-btn type="submit" :loading="submitting" flat color="primary float-right btn-edited-col text-white">
                                <div v-if="!editMode">Tambah</div>
                                <div v-if="editMode">Edit</div>
                            </q-btn>
                        </q-card-actions>
                    </q-form>

                </q-card>
            </q-dialog>
            <!-- akhir modal -->

        </div>
    </DashboardLayout>
</template>

<script>
import DashboardLayout from '../layout/DashboardLayout.vue'
import { ref, onMounted, reactive } from 'vue'
import axios from 'axios'
// import $ from 'jquery'
import { useQuasar } from 'quasar'
export default {
    name: 'User',

    components: {
        DashboardLayout
    },

    setup(){
        const columns = [
                    {
                        name: 'nama',
                        required: true,
                        label: 'Nama',
                        align: 'left',
                        field: row => row.nama,
                        format: val => `${val}`,
                        sortable: true,
                        class:'text-bold'
                    },
                    { name: 'username', align: 'center', label: 'Username', field: 'username', sortable: true },
                    { name: 'role', align: 'center', label: 'Role', field: 'role', sortable: true },
                    { name: 'opsi', align: 'right', label: 'Opsi', field: 'opsi', sortable: true }
                ]
        const rows = ref([])
        
        const loading = ref(false)
        const filter = ref('')
        const rowCount = ref(10)
        
        const prompt = ref(false)
        const editMode = ref(false)
        const form = reactive({
            nama: '',
            username: '',
            role: '',
            password: '',
            konfirmasi_password: ''
        })
        const errors = ref([])
        const submitting = ref(false)
        const formEdit = ref([])
        const q = useQuasar()

        const ambilUser = async () => {
            let response = await axios.get('api/user_dash')
            rows.value = response.data.data
        }

        const btnKembali = async () => {
            form.nama = ''
            form.username = ''
            form.role = ''
            form.password = ''
            form.konfirmasi_password = ''
            errors.value = []
        }
 
        const tambahUser = async () => {
            editMode.value = false
            prompt.value = true
        }

        const actionTambahUser = async () => {
            errors.value = []
            submitting.value = true
            try{
                let response = await axios.post('api/user_dash', form)
                rows.value.unshift(response.data.data)
                prompt.value = false
                btnKembali()
                submitting.value = false
                q.notify({
                    type: 'positive',
                    message: 'User berhasil ditambahkan',
                    position: 'top-right',
                    timeout: 1500
                })
            }catch(e){
                errors.value = e.response.data.errors
                submitting.value = false
            }
        }

        const editUser = async (id) => {
            editMode.value = true
            prompt.value = true
            let response = await axios.get('api/user_dash/'+id)
            formEdit.value = response.data.data
        }

        const actionEditUser = async (id) => {
            submitting.value = true
            try{
                await axios.patch('api/user_dash/'+id, formEdit.value)
                prompt.value = false
                submitting.value = false
                btnKembali()
                ambilUser()
                q.notify({
                    type: 'positive',
                    message: 'User berhasil di edit',
                    position: 'top-right',
                    timeout: 1500
                })
            }catch(e){
                errors.value = e.response.data.errors
                submitting.value = false
            }
        }

        const hapusUser = (id, index) => {
            q.dialog({
                title: 'Apa kamu yakin ?',
                message: 'ingin menghapus user ini',
                cancel: true,
                persistent: true
            }).onOk(() => {
                axios.delete('api/user_dash/'+id)
                rows.value.splice(index, 1)
                q.notify({
                    type: 'positive',
                    message: 'User berhasil di hapus',
                    position: 'top-right',
                    timeout: 1500
                })  
            }).onCancel(() => {
                
            })
        }

        onMounted(() => {
            ambilUser()
        })

        return {
            columns,
            rows,
            loading,
            filter,
            rowCount,
            prompt,
            ambilUser,
            editUser,
            hapusUser,
            tambahUser,
            editMode,
            actionTambahUser,
            form,
            errors,
            btnKembali,
            submitting,
            formEdit,
            actionEditUser,
            q,
        }
    }
}
</script>