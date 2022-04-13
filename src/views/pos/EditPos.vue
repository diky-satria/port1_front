<template>
    <DashboardLayout>
        <div>
            <div class="row text-subtitle2 text-bold">
                Perbarui Postingan
            </div>
                
            <form @submit.prevent="editPos">
                <div class="row q-py-md">
                    <div style="width:100%;">
                        <q-btn type="submit" :loading="submitting" color="primary float-right btn-edited-col text-bold" label="Perbarui"/>
                    </div>
                </div>
                <div class="row">
                    <q-linear-progress
                        v-for="size in ['lg']"
                        :key="size"
                        :size="size"
                        :value="prog"
                        color="primary"
                        id="progress-bar"
                    />
                </div>
                <div class="row q-pt-sm">
                    <div class="col-sm-8 col-xs-12">
                        <q-input type="text"
                            class="q-mt-md w-full" 
                            outlined 
                            label="Judul"
                            v-model="form.judul"
                        />
                        <div v-if="errors['judul']" style="color:red;">
                            {{ errors['judul'][0] }}
                        </div>

                        <q-select
                            outlined 
                            v-model="form.kategori"
                            class="q-mt-md w-full"
                            :options="['Bimtek Pendamping UMKM','Bimtek Digital Marketing','Bimtek Trainer','Bimtek Manajemen Risiko','Bimtek SPMI','Pelatihan AMI-PT','Pelatihan Audit Non Academic','Webinar','Berita']"
                            label="Kategori"
                        />
                        <div v-if="errors['kategori']" style="color:red;">
                            {{ errors['kategori'][0] }}
                        </div>

                        <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->

                        <q-editor
                            class="q-mt-md"
                            v-model="form.konten"
                            :dense="$q.screen.lt.md"
                            :toolbar="[
                                [
                                {
                                    label: $q.lang.editor.align,
                                    icon: $q.iconSet.editor.align,
                                    fixedLabel: true,
                                    options: ['left', 'center', 'right', 'justify']
                                }
                                ],
                                ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                                ['token', 'hr', 'link', 'custom_btn'],
                                ['print', 'fullscreen'],
                                [
                                {
                                    label: $q.lang.editor.formatting,
                                    icon: $q.iconSet.editor.formatting,
                                    list: 'no-icons',
                                    options: [
                                    'p',
                                    'h1',
                                    'h2',
                                    'h3',
                                    'h4',
                                    'h5',
                                    'h6',
                                    ]
                                },
                                {
                                    label: $q.lang.editor.fontSize,
                                    icon: $q.iconSet.editor.fontSize,
                                    fixedLabel: true,
                                    fixedIcon: true,
                                    list: 'no-icons',
                                    options: [
                                    'size-1',
                                    'size-2',
                                    'size-3',
                                    'size-4',
                                    'size-5',
                                    'size-6',
                                    'size-7'
                                    ]
                                },
                                {
                                    label: $q.lang.editor.defaultFont,
                                    icon: $q.iconSet.editor.font,
                                    fixedIcon: true,
                                    list: 'no-icons',
                                    options: [
                                    'default_font',
                                    'arial',
                                    'arial_black',
                                    'comic_sans',
                                    'courier_new',
                                    'impact',
                                    'lucida_grande',
                                    'times_new_roman',
                                    'verdana'
                                    ]
                                },
                                'removeFormat'
                                ],
                                ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                                ['undo', 'redo'],
                                ['viewsource']
                            ]"
                            :fonts="{
                                arial: 'Arial',
                                arial_black: 'Arial Black',
                                comic_sans: 'Comic Sans MS',
                                courier_new: 'Courier New',
                                impact: 'Impact',
                                lucida_grande: 'Lucida Grande',
                                times_new_roman: 'Times New Roman',
                                verdana: 'Verdana'
                            }"
                        />
                        <div v-if="errors['konten']" style="color:red;">
                            {{ errors['konten'][0] }}
                        </div>
                    
                    </div>
                    <div class="col-sm-4 col-xs-12 post-input">
                        <img :src="url + tampilGambar" class="q-mt-md" style="width:100%;height:200px;border-radius:5px;">
                        <div class="q-mt-md set-img-crop" v-show="fileURL">
                            <img :src="fileURL" id="img-crop" ref="imageCrop">
                        </div>
                        <!-- <q-btn type="submit" @click.prevent="handleImageCropped" v-if="fileURL" class="full-width q-mt-md" color="primary float-right btn-edited-col text-bold" label="Crop"/> -->
                        <input
                            type="file"
                            class="input-file-edited q-mt-md"
                            accept="image/*" @change="ubahGambar"
                        >
                        <div v-if="errors['gambar']" style="color:red;">
                            {{ errors['gambar'][0] }}
                        </div>

                    </div>
                </div>

            </form>

            <!-- <div class="row">
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
                        <div>Riwayat</div>
                        <q-space />
                        <q-input borderless dense debounce="300" color="primary" v-model="filter">
                        <template v-slot:append>
                            <q-icon name="search" />
                            </template>
                            </q-input>
                        </template>
    
                        <template v-slot:body="props">
                            <q-tr :props="props">
                                <q-td key="gambar" :props="props">
                                    <img :src="url + props.row.gambar" style="width:100px;height:100px;border-radius:5px;">
                                </q-td>
                                <q-td key="konten" :props="props">
                                    <div v-html="props.row.konten.substring(0,200)+'...'"></div>
                                </q-td>
                                <q-td key="tanggal" :props="props">{{ props.row.tanggal }}</q-td>
                            </q-tr>
                        </template>

                    </q-table>
                </div>
            </div> -->

        </div>
    </DashboardLayout>
</template>

<script>
import DashboardLayout from '../layout/DashboardLayout.vue'

import { useRoute } from 'vue-router'

import { reactive, ref, watch, onMounted, watchEffect, onUnmounted } from 'vue'
import axios from 'axios'
import router from '@/router'
import { useQuasar } from 'quasar'
import Cropper from 'cropperjs'

export default {
    name: 'EditPos',

    components: {
        DashboardLayout
    },

    setup(){
        const role = ref()
        const fileGambar = ref('')
        const fileURL = ref('')

        // progress bar
        const prog = ref()

        const form = reactive({
            judul: '',
            kategori: '',
            konten: '',
            gambar: ''
        })
        const url = ref()
        // const riwayat = ref([])

        const errors = ref([])
        const q = useQuasar()
        const submitting = ref(false)

        const tampilGambar = ref('')

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
                    { name: 'konten', align: 'left', label: 'Konten', field: 'konten', sortable: true },
                    { name: 'tanggal', align: 'left', label: 'Tanggal', field: 'tanggal', sortable: true },
                ]
        const rows = ref([])
        const loading = ref(false)
        const filter = ref('')

        const par = useRoute()

        // crop
        const fileReader = new FileReader()
        const imageCrop = ref(null)
        const data_crop = ref()
        const bool = ref(false)
        let cropper = null
        let interval_waktu = null

        fileReader.onload = (event) => {
            fileURL.value = event.target.result
        }

        const detailPostingan = async () => {
            let response = await axios.get('api/pos/'+ par.params.id)
            form.judul = response.data.data.judul
            form.kategori = response.data.data.kategori

            form.konten = response.data.data.konten
            tampilGambar.value = response.data.data.gambar
            
            // data untuk riwayat
            // form.konten = response.data.data_riwayat.konten
            // tampilGambar.value = response.data.data_riwayat.gambar

            url.value = response.data.url
            rows.value = response.data.riwayat
        }   

        //ubah gambar
        const ubahGambar = (e) => {
            if(e.target.files.length === 0){
                fileGambar.value = ''
                fileURL.value = ''
                return
            }
            fileGambar.value = e.target.files[0]

            interval_waktu = setInterval(function(){
                handleImageCropped()
            }, 300)
        }

        watchEffect(() => {
            if(fileGambar.value){
                fileReader.readAsDataURL(fileGambar.value)
            }else{
                fileURL.value = null
            }
        })

        const handleImageCropped = () => {
            cropper.getCroppedCanvas({
                width: 256,
                height: 256,
            }).toBlob((blob) => {

                data_crop.value = blob
                bool.value = true

            }, 'image/*')
        }
        
    // watch(fileGambar, (fileGambar) => {
        //     if(!(fileGambar instanceof File)){
        //         return
        //     }
        //     const fileReader = new FileReader()

        //     fileReader.readAsDataURL(fileGambar)

        //     fileReader.addEventListener("load", () => {
        //         fileURL.value = fileReader.result
        //     })
    // })

        const editPos = async () => {
            errors.value = []
            submitting.value = true
            try{
                const data = new FormData() 
                data.append('judul', form.judul)
                data.append('kategori', form.kategori)
                data.append('konten', form.konten)
                if(bool.value == true){
                    data.append('gambar', data_crop.value, '123.png')
                }else{
                    data.append('gambar', fileGambar.value)
                }
        
                await axios.post('api/pos/'+ par.params.id, data, {
                    onUploadProgress: e => {
                        if(e.lengthComputable){
                            prog.value = (e.loaded / e.total) * 1
                        }
                    }
                })

                // menghilangkan interval crop
                clearInterval(interval_waktu)
                
                router.replace('/pos')
                // detailPostingan()
                prog.value = 0
                fileGambar.value = ''
                fileURL.value = ''

                submitting.value = false
                q.notify({
                    type: 'positive',
                    message: 'postingan berhasil diedit',
                    position: 'top-right',
                    timeout: 1500
                })
            }catch(e){
                prog.value = 0
                submitting.value = false
                errors.value = e.response.data.errors
            }
        }

        onMounted(() => {
            detailPostingan()
            cropper = new Cropper(imageCrop.value, {
               // aspectRatio: 16/9,
                minCropBoxWidth: 50,
                minCropBoxHeight: 50,
                viewMode: 2,
                dragMode: 'move',
                background: true,
                cropBoxMovable: true,
                cropBoxResizable: true,
                // maxCanvasWidth: 100,
                movable: true,
                scalable: true,
                zoomable: true,
                zoomOnTouch: true,
                zoomOnWheel: true
            })
        })

        onUnmounted(() => {
            cropper.destroy()
        })

        watch(
            fileURL,
            () => {
                if(fileURL.value){
                    cropper.replace(fileURL.value)
                }
            },
            {
                flush: 'post'
            }
        )

        return {
            detailPostingan,
            tampilGambar,

            role,
            qeditor: ref(''),
            form,
            fileGambar,
            fileURL,
            ubahGambar,
            editPos,
            errors,
            q,
            submitting,
            url,
            // progress bar
            prog,

            // riwayat
            columns,
            rows,
            loading,
            filter,

            // crop
            fileReader,
            imageCrop,
            handleImageCropped,
            data_crop,
            bool,
            cropper,
            interval_waktu
        }
    }
}
</script>