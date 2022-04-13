<template>

    <FrontEnd>

    <div class="container-lg kon-isi kon-mb">
        <div class="row q-ma-md">
            <div class="col-md-8 col-sm-12 col-xs-12">

                <!-- payung penelitian -->
                <div class="row q-mb-md">
                    <div class="text-h5 sec-title">Payung Penelitian</div>
                </div>
                <div class="row ">
                    <div class="col-md-12">
                        <div class="text-justify q-mb-md p-text-mar-right">
                            Payung PPM memiliki komponen yang dapat dikembangkan yang menjadi arahan program penelitian di masing-masing departemen dan pusat. Berdasarkan hasil perumusan sementara, direncanakan komponen payung PPM terdiri dari 10 komponen. Namun untuk memahami komponen tersebut perlu dipahami terlebih dahulu beberapa pengertian yang mencakup:
                        </div>
                        <ol class="ol-edited ol-ed-tuj-mot">
                            <li>
                                Pertanian yang dimaksud dalam komponen payung PPM yaitu mencakup tanaman pangan, hortikultura, perkebunan, perikanan-kelautan, peternakan dan kehutanan
                            </li>
                            <li>
                                Industri pertanian meliputi industri tanaman pangan, hortikultura, perkebunan, perikanan-kelautan, peternakan dan kehutanan
                            </li>
                            <li>
                                Lingkup industri pertanian yaitu industri hulu (primer), dan industri hilir (sekunder termasuk bioproses dan tersier yang menjadi penunjang keberlangsungan industri)
                            </li>
                        </ol>
                        <div class="row">
                            <div class="img-kon-animate q-mb-lg">
                                <img :src="url+'gedung/side.jpg'" class="img-ten-ged">
                            </div>
                        </div>
                        <div class="text-justify q-mb-md p-text-mar-right">
                            Komponen payung PPM yang dimaksud adalah
                        </div>
                        <ol class="ol-edited ol-ed-tuj-mot">
                            <li>
                                <div>Renewable Resources based Industry</div>
                                <div>Industri pertanian berbasis sumberdaya terbarukan</div>  
                            </li>
                            <li>
                                <div>Biorelated Sciences and Health</div>
                                <div>Ilmu-ilmu yang berhubungan langsung atau yang terkait dengan biologi di darat maupun di perairan</div>
                            </li>
                            <li>
                                <div>Indigenous Knowledge/Technology</div>
                                <div>Ilmu pengetahuan/teknologi lokal dan spesifik terutama yang sudah diterapkan di masyarakat setempat</div>
                            </li>
                            <li>
                                <div>Food Security and Food Safety</div>
                                <div>Ketersediaan pangan dan Peningkatan Produksi Pertanian yang berkelanjutan</div>  
                            </li>
                            <li>
                                <div>Genetic Resources & Engineering and Breeding</div>
                                <div>Rekayasa biologi molekuler dan seluler tanaman, hewan di darat dan di perairan serta mikroorganisme</div>  
                            </li>
                            <li>
                                <div>Conservation and Environment</div>
                                <div>Pelestarian sumberdaya alam hayati dan lingkungan</div>  
                            </li>
                            <li>
                                <div>Social, Economy, and Culture</div>
                                <div>Aspek sosial, ekonomi, keuangan, budaya dan kelembagaan yang berkaitan dengan pembangunan pertanian dan ekonomi</div>  
                            </li>
                            <li>
                                <div>Biophysics, Mechanics and Equipment</div>
                                <div>Peralatan industri pertanian yang digunakan untuk ekploitasi, budidaya dan pengolahan hasil pertanian</div>  
                            </li>
                            <li>
                                <div>Management and Information Technology</div>
                                <div>Aspek-aspek pengembangan teknologi informasi dan manajemen</div>  
                            </li>
                        </ol>
                        <div class="text-justify q-mb-md p-text-mar-right">
                            Regional Development and Community Empowerment Aspek-aspek perencanaan dan pengembangan wilayah dan masyarakat
                        </div>
                    </div>
                </div>
                <!-- akhir payung penelitian -->

            </div>
            <div class="col-md-4 col-sm-12 col-xs-12 sec-img img-lg-right">
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