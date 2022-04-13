<template>

    <FrontEnd> 

    <div class="container-lg kon-isi kon-mb">
        <div class="row q-ma-md" align="justify">
            <div class="col-md-12 col-sm-12 col-xs-12">

                <!-- Berita -->
                <div class="row q-mb-md">
                    <div class="text-h5 sec-title">Berita</div>
                </div>
                <div v-for="d in data" :key="d.id" class="row ">
                    <div class="col-md-12">
                        <div class="text-h6 text-bold text-center">
                            {{ d.judul.substring(0,30)+'.....' }}
                        </div>
                        <div class="cov-img-screenshoot q-my-md">
                            <div class="img-screenshoot">
                                <img :src="url+d.gambar" alt="" class="gam-thumb">
                            </div>
                        </div>
                        <div v-html="d.konten" style="width:100%;">
                        </div>
                        <q-separator class="q-mt-sm q-mb-xl" />
                    </div>
                </div>
                <!-- akhir Berita -->

            </div>
        </div>
    </div>

    </FrontEnd>

</template>

<script>
import { ref, onMounted } from 'vue'
import FrontEnd from '../layout/FrontEnd.vue'
import axios from 'axios'
export default {

    components: {
        FrontEnd
    },

    setup () {

        const data = ref([])
        const url = ref()
        const detail = ref([])

        const ambilPostingan = async () => {
            let response = await axios.get('api/berita')
            data.value = response.data.data
            url.value = response.data.url
        }

        const detailData = async (id) => {
            let response = await axios.get('api/berita/'+id)
            detail.value = response.data.data
        }

        onMounted(() => {
            ambilPostingan()
        })

        return {
            data,
            ambilPostingan,
            detailData,
            detail,
            url
        }
    }
}
</script>