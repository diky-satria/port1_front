<template> 

    <FrontEnd> 

    <!-- carousel -->
    <div class="section-edited1">
        <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="white"
        navigation
        arrows
        class="carousel-edited"
        infinite
        autoplay
        >
        <q-carousel-slide :name="1" class="column col-edited">
            <div class="row fit justify-start items-center">
            <q-img class="car-img" :src="url + 'carousel/car1.jpg'" />
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column col-edited">
            <div class="row fit justify-start items-center">
            <q-img class="car-img" :src="url + 'carousel/car2.jpg'" />
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column col-edited">
            <div class="row fit justify-start items-center">
            <q-img class="car-img" :src="url + 'carousel/car3.jpg'" />
            </div>
        </q-carousel-slide>
        </q-carousel>
    </div>
    <!-- akhir carousel -->

    <!-- video -->
    <div class="container-lg kon-mar-ed">
        <div class="row q-ma-lg">
        <div class="text-h5 sec-title">Videos</div>
        </div>
        <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md q-mb-sm">
            <q-card class="my-card">
                <!-- <q-video class="video" :src="url+'video_beranda/COMPANY PROFILE BISMILLAH.mp4'" style="width:100%;height:100%;"/> -->
                <img alt="" class="gam-thumb">
            </q-card>
            <q-card-section class="q-pa-none q-mt-sm text-bold text-capitalize" align="justify">
            Company Profile P2SDM-IPB
            </q-card-section>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md q-mb-sm">
            <q-card class="my-card">
                <!-- <q-video class="video" :src="url+'video_beranda/Pelatihan Pekerti-AA-P2SDM.m4v'" /> -->
                <img alt="" class="gam-thumb">
            </q-card>
            <q-card-section class="q-pa-none q-mt-sm text-bold text-capitalize" align="justify">
            Pelatihan Pekerti AA-P2SDM
            </q-card-section>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md q-mb-sm">
            <q-card class="my-card">
                <!-- <q-video class="video" :src="url+'video_beranda/tot-standarisasi.m4v'" /> -->
                <img alt="" class="gam-thumb">
            </q-card>
            <q-card-section class="q-pa-none q-mt-sm text-bold text-capitalize" align="justify">
            Bimtek & Sertifikasi TOT Standarisasi
            </q-card-section>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md q-mb-sm">
            <q-card class="my-card">
                <!-- <q-video class="video" :src="url+'video_beranda/Bimtek Manajemen-Risiko-PT-P2SDM.m4v'" /> -->
                <img alt="" class="gam-thumb">
            </q-card>
            <q-card-section class="q-pa-none q-mt-sm text-bold text-capitalize" align="justify">
            BImtek Manajemen Risiko
            </q-card-section>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md q-mb-sm">
            <q-card class="my-card">
                <!-- <q-video class="video" :src="url+'video_beranda/Bimtek Sertifikasi TOT Trainer-P2SDM.m4v'" /> -->
                <img alt="" class="gam-thumb">
            </q-card>
            <q-card-section class="q-pa-none q-mt-sm text-bold text-capitalize" align="justify">
            Bimtek & Sertifikasi TOT Trainer
            </q-card-section>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md q-mb-sm">
            <q-card class="my-card">
                <!-- <q-video class="video" :src="url+'video_beranda/Bimtek-Sertifikasi Pendamping UMKM-revisi-mp4.m4v'" /> -->
                <img alt="" class="gam-thumb">
            </q-card>
            <q-card-section class="q-pa-none q-mt-sm text-bold text-capitalize" align="justify">
            Bimtek & Sertifikasi Pendamping UMKM
            </q-card-section>
        </div>
        </div>
    </div>
    <!-- akhir video -->

    <!-- fasilitas -->
    <div class="container-lg section-edited2 kon-mar-ed">
        <div class="row q-ma-md">
        <div class="text-h5 sec-title">Fasilitas</div>
        </div>
        <div class="row q-mx-md q-mt-lg">
        <div style="font-size:16px;">P2SDM mempunyai beberapa fasilitas, baik yang dikelola langsung maupun yang dikelola oleh IPB. Fasilitas yang dimiliki digunakan secara penuh untuk menunjang kegiatan pusat. Beberapa diantara fasilitas tersebut adalah :</div>
        </div>
        <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md q-mb-sm">
            <q-card class="my-card">
                <!-- <img :src="url+'beranda/baranagsiangIPB.jpg'" alt="" class="gam-thumb"> -->
                <img alt="" class="gam-thumb">
            </q-card>
            <q-card-section class="q-pa-none q-mt-sm text-bold text-capitalize" align="justify">
            Gedung Kantor di IPB Kampus Baranangsiang
            </q-card-section>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md q-mb-sm">
            <q-card class="my-card">
                <!-- <img :src="url+'beranda/baranagsiangIPB.jpg'" alt="" class="gam-thumb"> -->
                <img alt="" class="gam-thumb">
            </q-card>
            <q-card-section class="q-pa-none q-mt-sm text-bold text-capitalize" align="justify">
            penelitian, laporan kajian, prosiding seminar dan materi pelatihan
            </q-card-section>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md q-mb-sm">
            <q-card class="my-card">
                <!-- <img :src="url+'beranda/baranagsiangIPB.jpg'" alt="" class="gam-thumb"> -->
                <img alt="" class="gam-thumb">
            </q-card>
            <q-card-section class="q-pa-none q-mt-sm text-bold text-capitalize" align="justify">
            Fasilitas penunjang berupa komputer, LCD proyektor, OHP, peralatan audio visual, dan lain-lain
            </q-card-section>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md q-mb-sm">
            <q-card class="my-card">
                <!-- <img :src="url+'beranda/baranagsiangIPB.jpg'" alt="" class="gam-thumb"> -->
                <img alt="" class="gam-thumb">
            </q-card>
            <q-card-section class="q-pa-none q-mt-sm text-bold text-capitalize" align="justify">
            Fasilitas ruang pelatihan P2SDM lengkap dengan furniture.
            </q-card-section>
        </div>
        </div>
    </div>
    <!-- akhir fasilitas -->

    </FrontEnd>

</template>

<script>
import { onMounted, ref } from 'vue'
import FrontEnd from '../layout/FrontEnd.vue'
import axios from 'axios'
export default{
    name: 'Beranda',

    components: {
        FrontEnd
    },

    setup () {

        const url = ref() 

        const getCarousel = async () => {
            let response = await axios.get('api/minio_url')

            url.value = response.data.url
            console.log(response.data.url)
        }

        onMounted(() => {
            getCarousel()
        })

        return {
                tab: ref(''),
                slide: ref(1),
                getCarousel,
                url
            }
    }
}
</script>
