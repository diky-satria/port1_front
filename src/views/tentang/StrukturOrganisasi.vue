<template>

    <FrontEnd>

    <div class="container-lg kon-isi kon-mb">
        <div class="row q-ma-md">
            <div class="text-h5 sec-title">Struktur Organisasi</div>
        </div>
        <div class="row q-ma-md">
            <div class="col-md-5 col-sm-12 col-xs-12">

                <!-- table pejabat -->
                <div class="text-justify q-mb-md p-text-mar-right text-bold">
                    PROFIL PEJABAT :
                </div>
                <div>
                    <q-card class="my-card my-card-edited-struk-org">
                        <div class="row q-pa-md">
                            <div class="col text-bold">
                                Foto
                            </div>
                            <div class="col text-bold" align="center">
                                Nama
                            </div>
                            <div class="col text-bold" align="right">
                                Jabatan
                            </div> 
                        </div>
                        <q-separator />
                        <div class="row q-pa-md">
                            <div class="col">
                                <div class="img-pejabat">
                                    <img :src="url+'struktur_organisasi/amirudin.jpg'" height="100" width="100">
                                </div>
                            </div>
                            <div class="col">
                                Dr. Ir. Amiruddin Saleh, M.Si
                            </div>
                            <div class="col" align="right">
                                Kepala P2SDM IPB
                            </div>
                        </div>
                        <q-separator />
                        <div class="row q-pa-md">
                            <div class="col">
                                <div class="img-pejabat">
                                    <img :src="url+'struktur_organisasi/warcito.jpg'" height="100" width="100">
                                </div>
                            </div>
                            <div class="col">
                                Warcito, SP,MM
                            </div>
                            <div class="col" align="right">
                                Sekretaris P2SDM IPB
                            </div>
                        </div>
                        <q-separator />
                        <div class="row q-pa-md">
                            <div class="col">
                                <div class="img-pejabat">
                                    <img :src="url+'struktur_organisasi/saepul.jpg'" height="100" width="100">
                                </div>
                            </div>
                            <div class="col">
                                Saepul Asikin, SP
                            </div>
                            <div class="col" align="right">
                                Kepala Tata Usaha
                            </div>
                        </div>
                        <q-separator />
                        <div class="row q-pa-md">
                            <div class="col">
                                <div class="img-pejabat">
                                    <img :src="url+'struktur_organisasi/wonny.jpg'" height="100" width="100">
                                </div>
                            </div>
                            <div class="col">
                                Dr. Wonny Ahmad Ridwan
                            </div>
                            <div class="col" align="right">
                                Pengkajian dan Pengembangan Kebijakan SDM
                            </div>
                        </div>
                        <q-separator />
                        <div class="row q-pa-md">
                            <div class="col">
                                <div class="img-pejabat">
                                    <img :src="url+'struktur_organisasi/sarianti.jpg'" height="100" width="100">
                                </div>
                            </div>
                            <div class="col">
                                Tintin Sarianti, S.P., M.M
                            </div>
                            <div class="col" align="right">
                                Ketua Pelatihan dan Diseminasi Teknologi
                            </div>
                        </div>
                        <q-separator />
                        <div class="row q-pa-md">
                            <div class="col">
                                <div class="img-pejabat">
                                    <img :src="url+'struktur_organisasi/yannef.jpg'" height="100" width="100">
                                </div>
                            </div>
                            <div class="col">
                                Ir. M. Yannefri Bakhtiar, M.Si
                            </div>
                            <div class="col" align="right">
                                Pendampingan & Pemberdayaan Masyarakat
                            </div>
                        </div>
                        <q-separator />
                        <div class="row q-pa-md">
                            <div class="col">
                                <div class="img-pejabat">
                                    <img :src="url+'struktur_organisasi/ringga.jpg'" height="100" width="100">
                                </div>
                            </div>
                            <div class="col">
                                Rangga Gilang Baskoro, M.Kom
                            </div>
                            <div class="col" align="right">
                                Pengembangan Sistem Informasi SDM
                            </div>
                        </div>
                    </q-card>
                </div>
                <!-- akhir table pejabat -->

                <!-- table peneliti -->
                <div class="text-justify q-mb-md p-text-mar-right text-bold q-mt-lg">
                    PROFIL PENELITI :
                </div>
                <div>
                    <q-card class="my-card my-card-edited-struk-org">
                        <div class="row q-pa-md">
                            <div class="col text-bold">
                                Foto
                            </div>
                            <div class="col text-bold" align="center">
                                Nama
                            </div>
                            <div class="col text-bold" align="right">
                                Jabatan
                            </div>
                        </div>
                        <q-separator />
                        <div class="row q-pa-md">
                            <div class="col">
                                <div class="img-pejabat">
                                    <img :src="url+'struktur_organisasi/warcito.jpg'" height="100" width="100">
                                </div>
                            </div>
                            <div class="col">
                                Warcito, SP,MM
                            </div>
                            <div class="col" align="right">
                                Sekretaris P2SDM IPB
                            </div>
                        </div>
                        <q-separator />
                    </q-card>
                </div>
                <!-- akhir table peneliti -->

            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 cov-img-str-o">
                <div class="row q-ma-md">
                    <img :src="url+'struktur_organisasi/strOr.jpg'" class="img-str-o">
                </div>
                <div class="row q-ml-lg">
                    <div class="col-12">
                        <div><span class="text-bold">Kepala:</span> Dr. Ir. Amiruddin Saleh, M.Si</div>
                        <div><span class="text-bold">Sekretaris:</span> Warcito, S.P, M.M</div>
                        <div>
                            <div class="text-bold">Ketua Divisi:</div>
                            <ol class="">
                                <li>
                                    Pengkajian dan Pengembangan Kebijakan SDM : Dr. Wonny Ahmad Ridwan
                                </li>
                                <li>
                                    Pelatihan dan Diseminasi Teknologi: Tintin Sarianti, S.P., M.M
                                </li>
                                <li>
                                    Pendampingan & Pemberdayaan Masyarakat : Ir. M. Yannefri Bakhtiar, M.Si
                                </li>
                                <li>
                                    Pengembangan Sistem Informasi SDM : Rangga Gilang Baskoro, M.Kom
                                </li>
                            </ol>
                        </div>
                        <div>
                            <div class="text-bold">Gugus Kendali Mutu:</div>
                            <ol class="">
                                <li>
                                    Bidang Monitoring, Review dan Validasi : Adi Hadianto, SP., MSi
                                </li>
                                <li>
                                    Bidang Dokumentasi dan Publikasi : Rindang Matoati, SE, MSc
                                </li>
                            </ol>
                        </div>
                        <div>
                            <div class="text-bold">Gugus Layanan:</div>
                            <ol class="">
                                <li>
                                    Kemitraan dan Kerjasama : Ir. Mintarti, MSi
                                </li>
                                <li>
                                    Pengembangan Kelembagaan : Ir. Ujang Sehabudin, MSi
                                </li>
                            </ol>
                        </div>
                        <div>
                            <div class="text-bold">Bagian Tata Usaha:</div>
                            <ol class="">
                                <li>
                                    Kepala Tata Usaha : Saepul Asikin, SP
                                </li>
                                <li>
                                    Adm. Umum & kesekretariatan : Irma Yanti
                                </li>
                                <li>
                                    Adm. kepegawaian dan asset : Yayuk Rahayu, SPd, MSi
                                </li>
                                <li>
                                    Adm. Data dan Informaasi : M. Hajat Syafi'i, SKomp
                                </li>
                            </ol>
                        </div>
                        <div><span class="text-bold">Bagian Keuangan Pusat:</span> Sugeng Haryanto</div>
                    </div>
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

    setup () {

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

    }
}
</script>