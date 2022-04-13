<template>

    <FrontEnd>

    <!-- bimtek webinar -->
    <div class="container-lg kon-isi kon-mar-ed">
        <div class="row q-ma-md">
            <div class="text-h5 sec-title">Webinar</div>
        </div>
        <div v-for="d in data" :key="d.id" class="row webinar-row">
            <div class="col-md-5 col-sm-6 col-xs-12 q-pa-md q-mb-sm">
                <q-card class="my-card-webinar">
                    <img :src="url+d.gambar" alt="" class="gam-thumb">
                </q-card>
            </div>
            <div class="col-md-7 col-sm-6 col-xs-12">
                <q-card-section class="q-pa-none text-capitalize webinar-card" align="justify">
                    <div class="text-h5 text-bold">
                        {{ d.judul.substring(0,30)+'.....' }}
                    </div>
                    <!-- <div class="text-caption q-mb-md">
                        23 Agustus 2021
                    </div> -->
                    <div align="justify">
                        <div v-html="d.konten.substring(0,450)+'.....'" style="width:100%;">
                    </div>
                    </div>
                    <div class="q-mt-sm">
                        <q-btn color="primary float-right btn-edited-col text-bold" label="Selengkapnya" @click="detailData(d.id)" />
                    </div>
                </q-card-section>
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

          <!-- <q-btn dense flat icon="minimize" class="modal-tol-ed" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" class="modal-tol-ed" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle">Maximize</q-tooltip>
          </q-btn> -->
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
    <!-- akhir webinar -->

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
        const url2 = ref()

        const dialog = ref(false)

        const ambilPostingan = async () => {
            let response = await axios.get('api/webinar')
            data.value = response.data.data
            url.value = response.data.url
        }

        const detailData = async (id) => {
            dialog.value = true
            let response = await axios.get('api/webinar/'+id)
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
            dialog,
            maximizedToggle: ref(true),
            data,
            ambilPostingan,
            detailData,
            detail,
            tutupModal,
            url,
            url2
        }
    }
}
</script>