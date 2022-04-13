<template>
    <DashboardLayout>
        <div>
            <div class="text-subtitle2 text-bold">
                Riwayat
            </div>
            <div class="row">
                <div class="col q-mt-lg">
                    <q-table
                    title="Riwayat"
                    :rows="rows"
                    :columns="columns"
                    row-key="id"
                    :filter="filter"
                    :loading="loading"
                >

                    <template v-slot:top>
                        <q-space />
                        <q-input borderless dense debounce="300" color="primary" v-model="filter">
                        <template v-slot:append>
                            <q-icon name="search" />
                            </template>
                            </q-input>
                        </template>
    
                        <template v-slot:body="props">
                            <q-tr :props="props" @click="detailData(props.row.id)">
                                <q-td key="gambar" :props="props">
                                    <img :src="url + props.row.gambar" style="width:100px;height:100px;border-radius:5px;">
                                </q-td>
                                <q-td key="judul" :props="props">{{ props.row.judul.substring(0,30)+'.....' }}</q-td>
                                <q-td key="konten" :props="props">
                                    <div v-html="props.row.konten.substring(0,30)+'...'"></div>
                                </q-td>
                                <q-td key="tanggal" :props="props">{{ props.row.tanggal }}</q-td>
                            </q-tr>
                        </template>

                    </q-table>
                </div>
            </div>

        </div>


        <q-dialog
            v-model="dialog"
            persistent
            :maximized="maximizedToggle"
            transition-show="flip-up"
            transition-hide="flip-down"
        >
            <q-card class="">
                <q-bar class="modal-tol-nav">
                <q-space />

                <q-btn dense flat icon="close" class="modal-tol-ed" @click="tutupModal"> 
                    <q-tooltip>Tutup</q-tooltip>
                </q-btn>
                </q-bar>

                <q-card-section class="q-mt-xl">
                <div align="center">
                    <div class="img-modal">
                        <img :src="url2+detail.gambar" alt="" class="gam-thumb img-radius-modal">
                    </div>
                    </div>
                </q-card-section>

                <q-card-section class="q-my-sm">
                <div class="text-h6 text-bold q-ma-none" align="center">
                    {{detail.judul}}
                    </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <div class="q-mb-md">
                        <div v-html="detail.konten" style="width:100%;" class="konten-modal">
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
        <!-- akhir bimtek digital marketing -->

    </DashboardLayout>
</template>

<script>
import { ref, onMounted } from 'vue'
import DashboardLayout from '../layout/DashboardLayout.vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
export default {
    name: 'Pos',

    components: {
        DashboardLayout
    },

    setup(){

        // riwayat
        const columns = [
                    {
                        name: 'gambar',
                        required: true,
                        label: 'Gambar',
                        align: 'left',
                        field: row => row.gambar,
                        format: val => `${val}`,
                        sortable: true,
                        class:'text-bold'
                    },
                    { name: 'judul', align: 'left', label: 'Judul', field: 'judul', sortable: true },
                    { name: 'konten', align: 'left', label: 'Konten', field: 'konten', sortable: true },
                    { name: 'tanggal', align: 'left', label: 'Tanggal', field: 'tanggal', sortable: true },
                ]
        const rows = ref([])
        const loading = ref(false)
        const filter = ref('')

        const par = useRoute()

        const url = ref()

        // modal
        const dialog = ref(false)
        const detail = ref([])
        const url2 = ref()

        const ambilPostingan = async () => {
            let response = await axios.get('api/pos/'+ par.params.id)

            url.value = response.data.url
            rows.value = response.data.riwayat
        } 

        const detailData = async (id) => {
            dialog.value = true
            let response = await axios.get('api/detail_riwayat/'+id)
            detail.value = response.data.data
            url2.value = response.data.url
        }

        const tutupModal = () => {
            dialog.value = false
        }

        onMounted(() => {
            ambilPostingan()
        })

        return {
            // modal
            dialog,
            maximizedToggle: ref(true),
            detail,
            url2,

            columns,
            rows,
            ambilPostingan,
            loading,
            filter,
            url,
            par,
            detailData,
            tutupModal,
        }
    }
}
</script>