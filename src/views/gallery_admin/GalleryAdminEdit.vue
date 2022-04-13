<template>
    <DashboardLayout>
        <div>
            <div class="row text-subtitle2 text-bold">
                Edit Gallery
            </div>
                
            <form @submit.prevent="edit">
                <div class="row q-py-md">
                    <div style="width:100%;">
                        <q-btn type="submit" :loading="submitting" color="primary float-right btn-edited-col text-bold" label="Edit"/>
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
                                class="q-mt-md w-full"
                                :options="['Pics One','Pics Two','Pics Three']"
                                label="Kategori"
                                v-model="form.kategori"
                            />

                            <div v-if="errors['kategori']" style="color:red;">
                                {{ errors['kategori'][0] }}
                            </div>

                            <q-input type="textarea"
                                class="q-mt-md" 
                                outlined 
                                label="Deskripsi"
                                v-model="form.deskripsi"
                            />
                        
                        </div>
                        <div class="col-sm-4 col-xs-12 post-input">
                            <img :src="url +'/'+ tampilGambar" class="q-mt-md" style="width:100%;height:200px;border-radius:5px;">
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

        </div>
    </DashboardLayout>
</template>

<script>
import DashboardLayout from '../layout/DashboardLayout.vue'
import { ref, reactive, watch, onMounted, watchEffect, onUnmounted } from 'vue'
import { useQuasar } from 'quasar'
import axios from 'axios'
import router from '@/router'
import Cropper from 'cropperjs'

import { useRoute } from 'vue-router'

export default {
    name: 'GalleryAdminEdit',

    components: {
        DashboardLayout
    },

    setup(){
        // progress bar
        const prog = ref()

        // error and submitting
        const errors = ref([])
        const submitting = ref(false)

        // form
        const form = reactive({
            judul: '',
            kategori: '',
            deskripsi: '',
            gambar: ''
        })
        const url = ref('')
        const tampilGambar = ref()

        // notifikasi
        const q = useQuasar()

        // crop
        const fileGambar = ref('')
        const fileURL = ref('')
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
            fileURL.value = event.target.result
        }
        const imageCrop = ref(null)
        const data_crop = ref()
        const bool = ref(false)
        let cropper = null
        let interval_waktu = null

        // parameter id
        const par = useRoute()

        /////////////////////////////////////////////////////////////////////

        // detail gallery
        const detailGallery = async () => {
            let response = await axios.get('api/gallery_adm/'+ par.params.id)
            form.judul = response.data.data.judul
            form.kategori = response.data.data.kategori
            form.deskripsi = response.data.data.deskripsi
            tampilGambar.value = response.data.data.gambar

            url.value = response.data.url
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

        // crop function
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

        onMounted(() => {
            detailGallery()
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
        // akhir crop function

        const edit = async () => {
            errors.value = ''
            submitting.value = true
            try{
                const input = new FormData()
                input.append('judul', form.judul)
                input.append('kategori', form.kategori)
                input.append('deskripsi', form.deskripsi)
                if(bool.value == true){
                    input.append('gambar', data_crop.value, '123.png')
                }else{
                    input.append('gambar', fileGambar.value)
                }
    
                await axios.post('api/gallery_adm/'+ par.params.id, input, {
                    onUploadProgress: e => {
                        if(e.lengthComputable){
                            prog.value = (e.loaded / e.total) * 1
                        }
                    }
                })

                // menghilangkan interval crop
                clearInterval(interval_waktu)

                router.replace('/gallery_admin')
                submitting.value = false
                q.notify({
                    type: 'positive',
                    message: 'Gallery berhasil diedit',
                    position: 'top-right',
                    timeout: 1500
                })
            }catch(e){
                prog.value = 0
                errors.value = e.response.data.errors
                submitting.value = false
            }
        }

        return {
            // progress bar
            prog,

            // form
            form,
            detailGallery,
            url,
            tampilGambar,

            // edit
            edit,

            // errors and submiting
            errors,
            submitting,

            // notifikasi
            q,

            // ubah gambar
            ubahGambar,

            // crop
            imageCrop,
            handleImageCropped,
            data_crop,
            bool,
            cropper,
            fileGambar,
            fileURL,
            interval_waktu
        }
    }

}
</script>
