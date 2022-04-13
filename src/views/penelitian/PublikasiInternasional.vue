<template>

    <FrontEnd>

    <div class="container-lg kon-isi kon-mb">
        <div class="row q-ma-md">
            <div class="col-md-8 col-sm-12 col-xs-12">

                <!-- Publikasi Internasional -->
                <div class="row q-mb-md">
                    <div class="text-h5 sec-title">Publikasi Internasional</div>
                </div>
                <div class="row ">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="row ">
                            <div class="img-kon-animate q-mb-lg">
                                <img :src="url+'gedung/side.jpg'" class="img-ten-ged">
                            </div>
                        </div>
                        <div>
                            <div class="text-h3 text-red">----</div>
                            <!-- <q-card class="my-card my-card-edited card-mb-edited">
                                <div class="row q-pa-md">
                                    <div class="col-7 text-bold">
                                        Judul
                                    </div>
                                    <div class="col-1 text-bold" align="right">
                                        Tahun
                                    </div>
                                    <div class="col-2 text-bold" align="right">
                                        Nama
                                    </div>
                                    <div class="col-2 text-bold" align="right">
                                        Link
                                    </div>
                                </div>
                                <q-separator />
                                <div class="row q-pa-md">
                                    <div class="col-7">
                                        Identifikasi Kebutuhan Pengetahuan Dasar Dalam Pengelolaan Sumber Daya Manusia
                                    </div>
                                    <div class="col-1" align="right">
                                        2018
                                    </div>
                                    <div class="col-2" align="right">
                                        Raply	
                                    </div>
                                    <div class="col-2">	
                                    </div>
                                </div>
                            </q-card> -->
                        </div>
                    </div>
                </div>
                <!-- akhir Publikasi Internasional -->

            </div>
            <div class="col-md-4 col-sm-12 col-xs-12 sec-img img-lg-right pl-edited">
                <div class="full-height full-width">
                    <img :src="url+'gedung/side.jpg'" class="img-ten-ged">
                </div>
                <div class="bor-bott-right"></div>
            </div>
        </div>
        <div class="container-lg kon-mb bor-bot-animate">
            <div class="row q-ma-md">
                <div class="col-md-8 col-sm-12 col-xs-12">
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12 sec-img">
                    <div class="bor-bott-right"></div>
                </div>
            </div> 
        </div>
    </div>

    </FrontEnd>

</template>

<script>
import FrontEnd from '../layout/FrontEnd.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
export default {

    components: {
        FrontEnd
    },

    setup() {
        
        const url = ref()

        const getUrl = async () => {
            let response = await axios.get('api/minio_url')
            url.value = response.data.url
        }

        onMounted(() => {
            getUrl()
        })

        return {
            url,
            getUrl
        }

    },

}
</script>