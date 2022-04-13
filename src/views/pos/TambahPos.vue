<template>
    <DashboardLayout>
        <div>
            <div class="row text-subtitle2 text-bold">
                Tambah Pos
            </div>
                
            <form @submit.prevent="tambahPos">
                <div class="row q-py-md">
                    <div style="width:100%;">
                        <q-btn type="submit" :loading="submitting" color="primary float-right btn-edited-col text-bold" label="Simpan"/>
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

                <div class="row">
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
                            <div class="q-mt-md set-img-crop" v-show="fileURL">
                                <img :src="fileURL" id="img-crop" ref="imageCrop">
                            </div>
                            <img ref="image">
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


        <!-- --------------------------------- bisa (menggunakan cropperjs) ---------------------------------- -->


            <!-- <div class="q-mt-lg" style="height:300px;width:300px;">
                <img v-show="imageSrc" class="crop-img" ref="img" :src="imageSrc">
            </div>
            <div class="q-mt-lg">
                <div>
                    <button v-if="!imageSrc" @click="imageInput.click()">select image</button>
                    <button v-if="imageSrc" @click="handleImageCropped">Crop image</button>
                </div>
                <button @click="fileCleared">clear</button>
                <form @submit.prevent="tambah">
                    <input type="text" v-model="form.judul">
                    <input type="text" v-model="form.kategori">
                    <input type="text" v-model="form.konten">
                    <input 
                        type="file"
                        ref="imageInput"
                        @change="fileChanged"
                        accept="image/*"
                        :style="{ display: 'none' }"
                    >
                    <button type="submit">add</button>
                </form>
            </div>
            <div class="q-mt-lg">
                <span>File selected :</span>
                <span v-if="selectedFile">{{ selectedFile.name }}</span>
            </div> -->


        <!-- ------------------------------------ akhir bisa (menggunakan cropperjs)-------------------------------------------------- -->

        </div>
    </DashboardLayout>
</template>

<script>
import DashboardLayout from '../layout/DashboardLayout.vue'

import { reactive, ref, watch, onMounted, watchEffect, onUnmounted } from 'vue'
import axios from 'axios'
import router from '@/router' 
import { useQuasar } from 'quasar'
import Cropper from 'cropperjs'


// import { ref, watchEffect, onMounted, onUnmounted, watch, reactive } from 'vue'
// import Cropper from 'cropperjs'
// import axios from 'axios'
// import $ from 'jquery'

export default {
    name: 'TambahPos',

    components: {
        DashboardLayout
    },

    setup(){
        const role = ref()
        const fileGambar = ref('')
        const fileURL = ref('')
        const fileReader = new FileReader()

        fileReader.onload = (event) => {
            fileURL.value = event.target.result
        }

        // progress bar
        const prog = ref()

        const form = reactive({
            judul: '',
            kategori: '',
            konten: '',
            gambar: '',
        })

        const errors = ref([])
        const q = useQuasar()
        const submitting = ref(false)

        // crop
        const imageCrop = ref(null)
        const data_crop = ref()
        const bool = ref(false)
        let cropper = null
        let interval_waktu = null

        //ubah gambar
        const ubahGambar = (e) => {
            if(e.target.files.length === 0){
                fileGambar.value = ''
                fileURL.value = ''
                data_crop.value = ''
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

        const handleImageCropped = () => {
            cropper.getCroppedCanvas({
                width: 256,
                height: 256,
            }).toBlob((blob) => {

                data_crop.value = blob
                bool.value = true

            }, 'image/*')
        }

        onMounted(() => {
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

        const tambahPos = async () => {
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
        
                await axios.post('api/pos', data, {
                    onUploadProgress: e => {
                        if(e.lengthComputable){
                            prog.value = (e.loaded / e.total) * 1
                        }
                    }
                })

                // menghilangkan interval crop
                clearInterval(interval_waktu)
                
                router.replace('/pos')
                submitting.value = false
                q.notify({
                    type: 'positive',
                    message: 'postingan berhasil ditambahkan',
                    position: 'top-right',
                    timeout: 1500
                })
            }catch(e){
                prog.value = 0
                submitting.value = false
                errors.value = e.response.data.errors
            }
        }

        return {
            role,
            qeditor: ref(''),
            form,
            fileGambar,
            fileURL,
            ubahGambar,
            tambahPos,
            errors,
            q,
            submitting,
            // progress bar
            prog,

            // crop
            imageCrop,
            handleImageCropped,
            data_crop,
            bool,
            cropper,
            interval_waktu
        }
    }


// ---------------------------------------------------------- bisa (menggunakan cropperjs) --------------------------------------------------------

    // events: ['imageCropped'],
    // setup(){
        
    //     const imageInput = ref(null)
    //     const selectedFile = ref(null)
    //     const imageSrc = ref(null)
    //     const fileReader = new FileReader()
    //     const img = ref(null)
    //     let cropper = null
    //     const errors = ref([])
    //     const data_crop = ref()
    //     const bool = ref(false)

    //     const form = reactive({
    //         judul: '',
    //         kategori: '',
    //         konten: '',
    //         gambar: '',
    //     })

    //     fileReader.onload = (event) => {
    //         imageSrc.value = event.target.result
    //     }

    //     const fileChanged = (e) => {
    //         const files = e.target.files || e.dataTransfer.files
    //         if(files.length){
    //             selectedFile.value = files[0]
    //         }
    //     }

    //     const handleImageCropped = () => {
    //         cropper.getCroppedCanvas({
    //             width: 256,
    //             height: 256,
    //         }).toBlob((blob) => {

    //             data_crop.value = blob
    //             bool.value = true

    //         }, 'image/*')
    //     }

    //     const tambah = async () => {

    //         try{
    //             const d = new FormData()
                    
    //             d.append('judul', form.judul)
    //             d.append('kategori', form.kategori)
    //             d.append('konten', form.konten)
    //             if(bool.value){
    //                 d.append('gambar', data_crop.value, '123.png')
    //             }else{
    //                 d.append('gambar', selectedFile.value)
    //             }
                
    //             await axios.post('api/pos', d)
    //             console.log('berhasil dengan gambar dan crop')

    //             router.replace('/pos')
                
    //         }catch(e){
    //             console.log('adfdfa')
    //             console.log(e.response.data.errors)
    //         }
            
    //     }

    //     const fileCleared = () => {
    //         selectedFile.value = null
    //     }

    //     watchEffect(() => {
    //         if(selectedFile.value){
    //             fileReader.readAsDataURL(selectedFile.value)
    //         }else{
    //             imageSrc.value = null
    //         }
    //     })

    //     onMounted(() => {
    //         cropper = new Cropper(img.value, {
    //             aspectRatio: 1,
    //             minCropBoxWidth: 100,
    //             minCropBoxHeight: 100,
    //             viewMode: 3,
    //             dragMode: 'move',
    //             background: false,
    //             cropBoxMovable: true,
    //             cropBoxResizable: true,
    //             maxCanvasWidth: 100
    //         })
    //     })

    //     onUnmounted(() => {
    //         cropper.destroy()
    //     })

    //     watch(
    //         imageSrc,
    //         () => {
    //             if(imageSrc.value){
    //                 cropper.replace(imageSrc.value)
    //             }
    //         },
    //         {
    //             flush: 'post'
    //         }
    //     )

    //     return{
    //         imageInput,
    //         selectedFile,
    //         fileChanged,
    //         fileCleared,
    //         imageSrc,
    //         fileReader,
    //         img,
    //         cropper,
    //         handleImageCropped,
    //         tambah,
    //         form,
    //         errors,
    //         data_crop,
    //         bool
    //     }

    // }


// ------------------------------------------------------- akhir bisa (menggunakan cropperjs) -----------------------------------------------------------
}
</script>
