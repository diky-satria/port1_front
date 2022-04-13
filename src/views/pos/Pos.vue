<template>
    <DashboardLayout>
        <div>
            <div class="text-subtitle2 text-bold">
                Semua Postingan
            </div>
            <div class="q-pt-md">
                <q-table
                    title="Semua postingan"
                    :rows="rows"
                    :columns="columns"
                    row-key="id"
                    :filter="filter"
                    :loading="loading"
                >

                    <template v-slot:top>
                        <q-btn to="/tambah_pos" color="primary float-right btn-edited-col text-white"><i class="fas fa-plus q-mr-sm"></i>Tambah</q-btn>
                        <q-space />
                        <q-input borderless dense debounce="300" color="primary" v-model="filter">
                        <template v-slot:append>
                            <q-icon name="search" />
                        </template>
                        </q-input>
                    </template>
 
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="judul" :props="props">
                            {{ props.row.judul.substring(0,30)+'.....' }}
                            </q-td>
                            <q-td key="kategori" :props="props">{{ props.row.kategori }}</q-td>
                            <q-td key="gambar" :props="props">
                                <img :src="url + props.row.gambar" style="width:100px;height:80px;border-radius:5px;">
                            </q-td>
                            <q-td key="dibuat_oleh" :props="props">{{ props.row.dibuat_oleh }}</q-td>
                            <q-td key="opsi" :props="props">
                                <div class="justify-center q-gutter-x-xs">
                                    <q-btn :to="{ name: 'EditPos', params:{id:props.row.id} }" color="teal"
                                        dense size="sm"
                                        class="q-px-xs"
                                        ><i class="fas fa-edit q-mx-xs"></i>Perbarui
                                    </q-btn>
                                    <q-btn :to="{ name: 'RiwayatPos', params:{id:props.row.id} }" color="primary"
                                        dense size="sm"
                                        class="q-px-xs"
                                        ><i class="fas fa-history q-mx-xs"></i>Riwayat
                                    </q-btn>
                                    <!-- <q-btn
                                        color="red"
                                        dense
                                        size="sm"
                                        @click="hapusPostingan(props.row.id, index)"
                                        class="q-px-xs"
                                        ><i class="fas fa-trash q-mx-xs"></i>Hapus
                                    </q-btn> -->
                                </div>
                            </q-td>
                        </q-tr>
                    </template>

                </q-table>
            </div>

        </div>
    </DashboardLayout>
</template>

<script>
import { ref, onMounted } from 'vue'
import DashboardLayout from '../layout/DashboardLayout.vue'
import axios from 'axios'
import { useQuasar } from 'quasar'
export default {
    name: 'Pos',

    components: {
        DashboardLayout
    },

    setup(){
        const columns = [
                    {
                        name: 'judul',
                        required: true,
                        label: 'Judul',
                        align: 'left',
                        field: row => row.judul,
                        format: val => `${val}`,
                        sortable: true,
                        class:'text-bold'
                    },
                    { name: 'kategori', align: 'left', label: 'Kategori', field: 'kategori', sortable: true },
                    { name: 'gambar', align: 'left', label: 'Gambar', field: 'gambar', sortable: true },
                    { name: 'dibuat_oleh', align: 'left', label: 'Dibuat Oleh', field: 'dibuat_oleh', sortable: true },
                    { name: 'opsi', align: 'right', label: 'Opsi', field: 'opsi', sortable: true }
                ]
        const rows = ref([])
        const url = ref()

        const loading = ref(false)
        const filter = ref('')
        const rowCount = ref(10)

        //hapus
        const q = useQuasar()

        const ambilPostingan = async () => {
            let response = await axios.get('api/pos')
            rows.value = response.data.data
            url.value = response.data.url
        }

        const hapusPostingan = (id, index) => {
            q.dialog({
                title: 'Apa kamu yakin ?',
                message: 'ingin menghapus postingan ini',
                cancel: true,
                persistent: true
            }).onOk(() => {
                axios.delete('api/pos/'+id)
                rows.value.splice(index, 1)
                q.notify({
                    type: 'positive',
                    message: 'Postingan berhasil di hapus',
                    position: 'top-right',
                    timeout: 1500
                })  
            }).onCancel(() => {
                
            })
        }

        onMounted(() => {
            ambilPostingan()
        })

        return {
            columns,
            rows,
            rowCount,
            ambilPostingan,
            loading,
            filter,
            hapusPostingan,
            url
        }
    }
}
</script>