<template>

    <FrontEnd>

    <!-- Gallery -->
    <div class="container-lg kon-isi kon-mar-ed">
        <div class="row q-ma-md">
            <div class="text-h5 sec-title">Gallery</div>
        </div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 q-pa-md q-mb-sm">
                <q-tabs v-model="tab" class="tab-edited">
                    <q-tab class="tab-text" label="Foto" name="one" />
                    <q-tab class="tab-text" label="Video" name="two" />
                </q-tabs>

            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 q-mb-sm">
                <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="one">
                        <div class="row">

                            <!-- pics one -->
                            <div v-if="data1.length != 0" class="col-md-4 col-sm-12 col-xs-12">
                                <div  v-for="d1 in data1" :key="d1.id">
                                    <div class="row">
                                        <div class="col-12 gallerys" @click="modal(d1.kategori)">
                                            <img :src="url+'/'+d1.gambar" alt="" class="q-pa-xs img-gallery">
                                        </div>
                                        <!-- <div class="col-4 gallerys2">
                                            <div class="row gallery-top-right">
                                                <div class="col-12">
                                                    <img src="" alt="" class="q-pa-xs img-gallery">
                                                </div>
                                            </div>
                                            <div class="row gallery-bot-right">
                                                <div class="col-12">
                                                    <img src="" alt="" class="q-pa-xs img-gallery">
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="text-h6 text-bold q-ml-xs">
                                                {{ d1.kategori }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="col-md-4 col-sm-12 col-xs-12">
                                <div class="row">
                                    <div class="col-12 gallerys">
                                        <img :src="url+'/dummy-horizontal.jpg'" alt="" class="q-pa-xs img-gallery">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="text-h6 text-bold q-ml-xs">
                                            Pics One
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- pics two -->
                            <div v-if="data2.length != 0" class="col-md-4 col-sm-12 col-xs-12">
                                <div  v-for="d2 in data2" :key="d2.id">
                                    <div class="row">
                                        <div class="col-12 gallerys" @click="modal(d2.kategori)">
                                            <img :src="url+'/'+d2.gambar" alt="" class="q-pa-xs img-gallery">
                                        </div>
                                        <!-- <div class="col-4 gallerys2">
                                            <div class="row gallery-top-right">
                                                <div class="col-12">
                                                    <img src="" alt="" class="q-pa-xs img-gallery">
                                                </div>
                                            </div>
                                            <div class="row gallery-bot-right">
                                                <div class="col-12">
                                                    <img src="" alt="" class="q-pa-xs img-gallery">
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="text-h6 text-bold q-ml-xs">
                                                {{ d2.kategori }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="col-md-4 col-sm-12 col-xs-12">
                                <div class="row">
                                    <div class="col-12 gallerys">
                                        <img :src="url+'/dummy-horizontal.jpg'" alt="" class="q-pa-xs img-gallery">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="text-h6 text-bold q-ml-xs">
                                            Pics Two
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- pics three -->
                            <div v-if="data3.length != 0" class="col-md-4 col-sm-12 col-xs-12">
                                <div v-for="d3 in data3" :key="d3.id">
                                    <div class="row">
                                        <div class="col-12 gallerys"  @click="modal(d3.kategori)">
                                            <img :src="url+'/'+d3.gambar" alt="" class="q-pa-xs img-gallery">
                                        </div>
                                        <!-- <div class="col-4 gallerys2">
                                            <div class="row gallery-top-right">
                                                <div class="col-12">
                                                    <img src="" alt="" class="q-pa-xs img-gallery">
                                                </div>
                                            </div>
                                            <div class="row gallery-bot-right">
                                                <div class="col-12">
                                                    <img src="" alt="" class="q-pa-xs img-gallery">
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="text-h6 text-bold q-ml-xs">
                                                {{ d3.kategori }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="col-md-4 col-sm-12 col-xs-12">
                                <div class="row">
                                    <div class="col-12 gallerys">
                                        <img :src="url+'/dummy-horizontal.jpg'" alt="" class="q-pa-xs img-gallery">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="text-h6 text-bold q-ml-xs">
                                            Pics Three
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </q-tab-panel>

                    <q-tab-panel name="two">
                    Saksikan lebih banyak video di <a href="https://www.youtube.com/c/p2sdmIpb/videos" target="_blank">Youtube P2SDM-IPB</a>
                    </q-tab-panel>
                </q-tab-panels>
            </div>
        </div>
    </div>
    <!-- akhir Gallery -->

    <!-- modal -->
    <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="flip-up"
        transition-hide="flip-down"
        class="modal-gallery-edited"
    >
        <q-card class="card-gallery-edited">
            <q-bar class="modal-tol-nav">
            <q-space />
            <q-btn dense flat icon="close" class="modal-tol-ed" @click="tutupModal"> 
                <q-tooltip>Tutup</q-tooltip>
            </q-btn>
            </q-bar>

            <div class="c" style="margin-bottom:100px;"></div>

            <div class="co">
                <Carousel :autoplay="2000" :itemsToShow="3.95" :wrapAround="true" :breakpoints="breakpoints">
                    <Slide v-for="d in detail " :key="d.id" class="q-py-auto">
                        <div class="carousel__item">
                            <div class="carousel__item__img">
                                <img :src="url2+d.gambar" alt="" class="img-gallery">
                            </div>
                            <div class="txt">
                                <div class="text-h6">
                                    {{ d.judul }}
                                </div>
                                <p v-if="d.deskripsi == NULL">
                                    ----
                                </p>
                                <p v-else>
                                    {{ d.deskripsi }}
                                </p>
                            </div>
                        </div>
                    </Slide>
                </Carousel>
            </div>



        </q-card>
    </q-dialog>
    <!-- akhir modal -->

    </FrontEnd>

</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

import { ref, onMounted } from 'vue'
import FrontEnd from '../layout/FrontEnd.vue'
import axios from 'axios'
export default defineComponent({

    name: 'Autoplay',

    components: {
        FrontEnd,
        Carousel,
        Slide,
    },

    data: () => ({
        // carousel settings
        settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 600px and up
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // 600px and up
            600: {
                itemsToShow: 1.5,
                snapAlign: 'center',
            },
            // 700px and up
            700: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 4.5,
                snapAlign: 'center',
            },
            },
        }),

    setup () {

        const data1 = ref([])
        const data2 = ref([])
        const data3 = ref([])
        const url = ref('')

        // dialog modal
        const dialog = ref(false)

        // detail data modal
        const detail = ref([])
        const url2 = ref('')

        const getData = async () => {
            let response = await axios.get('api/gallery')

            data1.value = response.data.data1
            data2.value = response.data.data2
            data3.value = response.data.data3
            url.value = response.data.url
        }

        const modal = async (kategori) => {
            let response = await axios.get('api/gallery/'+kategori)
            detail.value = response.data.data
            url2.value = response.data.url
            dialog.value = true
        }

        const tutupModal = () => {
            dialog.value = false
            detail.value = []
        }

        onMounted(() => {
            getData()
        })

        return {
            // tab animation
            tab: ref('one'),

            // data
            data1,
            data2,
            data3,
            url,

            // modal
            dialog,
            maximizedToggle: ref(true),
            modal,
            tutupModal,
            detail,
            url2,

            // carousel
            slide: ref(1),
        }
    }
})
</script>

<style scoped>
    .co{
        padding: 20px;
    }
    .modal-gallery-edited{
        background-color: rgba(0, 0, 0, 0.452) !important;
    }
    .card-gallery-edited{
        background-color: white !important;
    }
    .modal-tol-nav{
        background-color: transparent !important;
    }
    .modal-tol-ed{
        color: black !important;
    }

    /* animasi carousel */
    .carousel__item{
        /* background-color: red; */
        width: 100%;
        margin: 0 5px;
        height: auto;
    }
    .carousel__slide > .carousel__item {
    transform: scale(1);
    opacity: 0.5;
    transition: 0.5s;
    }
    .carousel__slide--visible > .carousel__item {
    opacity: 1;
    transform: rotateY(0);
    }
    .carousel__slide--next > .carousel__item {
    transform: scale(0.9) translate(-10px);
    }
    .carousel__slide--prev > .carousel__item {
    transform: scale(0.9) translate(10px);
    }
    .carousel__slide--active > .carousel__item {
    transform: scale(1.1);
    /* background-color: rgba(0, 0, 0, 0.281); */
    margin: 0 15px;
    }
    .carousel__slide--active {
    margin: 0 10px;
    height: auto;
    }
    .carousel__slide--active .carousel__item__img{
    height:45vh;
    }
    .carousel__item__img{
        height: 40vh;
    }
    .carousel__slide--active .txt{
    min-height:auto;
    padding: 0 0 20px 0;
    }
</style>