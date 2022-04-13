<template>

    <FrontEnd>

    <div class="container-lg kon-isi kon-mb">
        <div class="row q-ma-md">
            <div class="col-md-8 col-sm-12 col-xs-12">

                <!-- payung penelitian -->
                <div class="row q-mb-md">
                    <div class="text-h5 sec-title">Kegiatan Penelitian</div>
                </div>
                <div class="row ">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="img-kon-animate q-mb-lg">
                                <img :src="url+'gedung/side.jpg'" class="img-ten-ged">
                            </div>
                        </div>
                        <div class="text-justify q-mb-md p-text-mar-right">
                            Program Ibm
                        </div>
                        <ol class="ol-edited ol-ed-tuj-mot">
                            <li>
                                Ibm Kelompok Usaha Kerajinan Berbahan Dasar Flora Di Desa Petir, Kecamatan Dramaga. Kabupaten Bogor
                            </li>
                            <li>
                                Ibm Kelas Gizi Plus Sebagai Model Pembentuk Balita Berkarakter Di Desa Girimulya, Kecamatan Cibungbulang, Kabupaten Bogor
                            </li>
                            <li>
                                Ibm Komputer Untuk Pemberdayaan Keluarga (Kompudaya)
                            </li>
                            <li>
                                Ibm Kelompok Usaha Kripik Ubi Jalar Di Desa Petir Kecamatan Dramaga Dan Desa Cihideung Ilir Kecamatan Ciampea Kabupaten Bogor
                            </li>
                            <li>
                                Ibm Biopori Dan Pengolahan Limbah Plastik Di Posdaya Kenanga, Desa Girimulya Bogor Dan Posdaya Kalibata Bantarjati, Kota Bogor
                            </li>
                            <li>
                                Ibm Kelas Perempuan Sebagai Model Pembentuk Keluarga Berkualitas Di Kelurahan Pasirkuda, Kota Bogor Dan Desa Dramaga, Kabupaten Bogor
                            </li>
                            <li>
                                Ibm Pembinaan Taman Bacaan Posdaya/Perpustakaan Desa Untuk Mendukung Pemberdayaan Masyarakat Desa Lingkar Kampus Ipb
                            </li>
                            <li>
                                Ibm Kebun Bergizi Untuk Meningkatkan Ketahanan Pangan Dan Gizi Keluarga Di Posdaya Kenanga Kelurahan Situgede Dan Posdaya Mandiri Terpadu Desa Cikarawang
                            </li>
                            <li>
                                Ibm Inkubator Wirausaha Sosial Di Desa Cimanggu I Dan Desa Situ Udik Kecamatan Cibungbulang Kabupaten Bogor
                            </li>
                            <li>
                                Ibm Kelompok “Cassava Chips” Berbasis Keluarga Pra Sejahtera Di Kelurahan Menteng Kota Bogor Dan Desa Neglasari Kabupaten Bogor
                            </li>
                            <li>
                                (PPDM) “Kampung Tematik Casava Sebagai Strategi Optimalisasi Peran Kelompok Tani Ubikayu Menuju Desa Wisata Pangan”
                            </li>
                        </ol>
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