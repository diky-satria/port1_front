<template>
    <DashboardLayout>
        <div>
            <div class="text-subtitle2 text-bold">
                Semua Gallery
            </div>
            <div class="q-pt-md">
                <q-table
                    title="Semua Gallery"
                    :rows="rows"
                    :columns="columns"
                    row-key="id"
                    :filter="filter"
                    :loading="loading"
                >

                    <template v-slot:top>
                        <!-- router-link -->
                        <q-btn to="gallery_admin_tambah" color="primary float-right btn-edited-col text-white"><i class="fas fa-plus q-mr-sm"></i>Tambah</q-btn>
                        <!-- modal -->
                        <!-- <q-btn @click="modal_tambah" color="primary float-right btn-edited-col text-white"><i class="fas fa-plus q-mr-sm"></i>Tambah</q-btn> -->
                        <q-space />
                        <q-input borderless dense debounce="300" color="primary" v-model="filter">
                        <template v-slot:append>
                            <q-icon name="search" />
                        </template>
                        </q-input>
                    </template>
 
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="judul" :props="props">
                                {{ props.row.judul.substring(0,30)+'...' }}
                            </q-td>
                            <q-td key="kategori" :props="props">
                                {{ props.row.kategori }}
                            </q-td>
                            <q-td key="deskripsi" :props="props">
                                <div v-if="props.row.deskripsi == NULL">
                                    ---
                                </div>
                                <div v-else>
                                    {{ props.row.deskripsi }}
                                </div>
                            </q-td>
                            <q-td key="gambar" :props="props">
                                <img :src="url + props.row.gambar" style="width:100px;height:100px;border-radius:5px;">
                            </q-td>
                            <q-td key="opsi" :props="props">
                                <div class="justify-center q-gutter-x-xs">
                                    <q-btn color="teal"
                                        dense size="sm"
                                        class="q-px-xs"
                                        :to="{ name: 'GalleryAdminEdit', params:{id:props.row.id} }"
                                        ><i class="fas fa-edit q-mx-xs"></i>Edit
                                    </q-btn>
                                    <q-btn
                                        color="red"
                                        dense
                                        size="sm"
                                        @click="hapus_gallery(props.row.id, index)"
                                        class="q-px-xs"
                                        ><i class="fas fa-trash q-mx-xs"></i>Hapus
                                    </q-btn>
                                </div>
                            </q-td>
                        </q-tr>
                    </template>

                </q-table>
            </div>

            <!-- modal -->
            <q-dialog v-model="prompt" persistent transition-show="flip-down" transition-hide="flip-up">
                <q-card style="min-width: 350px">

                    <q-form @submit.prevent="editMode ? edit(formEdit.id) : tambah()" id="form">
                        <q-card-section>
                            <div class="text-h6" v-if="!editMode">Tambah Gallery</div>
                            <div class="text-h6" v-if="editMode">Edit Gallery</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                        
                            <!-- tambah -->
                            <q-input type="text"
                                class="q-mt-md" 
                                outlined 
                                label="Judul"
                                v-model="form.judul"
                                v-if="!editMode"
                            />

                            <!-- edit -->
                            <q-input type="text"
                                class="q-mt-md" 
                                outlined 
                                label="Judul"
                                v-model="formEdit.judul"
                                v-if="editMode"
                            />

                            <div v-if="errors['judul']" style="color:red;">
                                {{ errors['judul'][0] }}
                            </div>

                            <!-- tambah -->
                            <q-select outlined 
                                class="q-mt-md"
                                :options="['Pics One','Pics Two','Pics Three']"
                                label="Kategori"
                                lazy-rules
                                v-model="form.kategori"
                                v-if="!editMode"
                            />

                            <!-- edit -->
                            <q-select outlined 
                                class="q-mt-md"
                                :options="['Pics One','Pics Two','Pics Three']"
                                label="Kategori"
                                lazy-rules
                                v-model="formEdit.kategori"
                                v-if="editMode"
                            />

                            <div v-if="errors['kategori']" style="color:red;">
                                {{ errors['kategori'][0] }}
                            </div>

                            <!-- tambah -->
                            <q-input type="textarea"
                                class="q-mt-md" 
                                outlined 
                                label="Deskripsi"
                                v-model="form.deskripsi"
                                v-if="!editMode"
                            />

                            <!-- edit -->
                            <q-input type="textarea"
                                class="q-mt-md" 
                                outlined 
                                label="Deskripsi"
                                v-model="formEdit.deskripsi"
                                v-if="editMode"
                            />

                            <div v-if="errors['deskripsi']" style="color:red;">
                                {{ errors['deskripsi'][0] }}
                            </div>

                            <!-- tambah -->
                            <div  class="q-mt-md set-img-crop-modal" v-show="fileURL">
                                <img :src="fileURL" id="img-crop" ref="imageCrop" style="width:100%;height:100%;">
                            </div>

                            <div>
                                <q-btn type="submit" @click.prevent="handleImageCropped" v-if="fileURL" class="full-width q-mt-md" color="primary float-right btn-edited-col text-bold" label="Crop"/>
                            </div>

                            <input type="file"
                                class="q-mt-md input-file-edited" 
                                outlined 
                                @change="ubahGambar"
                                v-if="!editMode"
                            />

                            <!-- edit -->
                            <input type="file"
                                class="q-mt-md input-file-edited" 
                                outlined 
                                @change="ubahGambar"
                                v-if="editMode"
                            />

                            <div v-if="errors['gambar']" style="color:red;">
                                {{ errors['gambar'][0] }}
                            </div>

                        </q-card-section>

                        <div class="row q-px-md">
                            <q-linear-progress
                                v-for="size in ['lg']"
                                :key="size"
                                :size="size"
                                :value="prog"
                                color="primary"
                                id="progress-bar"
                            />
                        </div>

                        <q-card-actions align="right" class="text-primary">
                            <q-btn flat label="Kembali" @click="modal_tutup" v-close-popup />
                            <q-btn type="submit" :loading="submitting" flat color="primary float-right btn-edited-col text-white">
                                <div v-if="!editMode">Tambah</div>
                                <div v-if="editMode">Edit</div>
                            </q-btn>
                        </q-card-actions>
                    </q-form>

                </q-card>
            </q-dialog>
            <!-- akhir modal -->


        </div>
    </DashboardLayout>
</template>

<script>
import DashboardLayout from '../layout/DashboardLayout.vue'
import { ref, reactive, watch, onMounted } from 'vue'
import axios from 'axios'
import { useQuasar } from 'quasar'
// import Cropper from 'cropperjs'
export default {
    name: 'GalleryAdmin',

    components: {
        DashboardLayout
    },

    setup(){

        // data di table
        const columns = [
                    {
                        name: 'judul',
                        required: true,
                        label: 'Judul',
                        align: 'left',
                        field: row => row.judul,
                        format: val => `${val}`,
                        sortable: true,
                        class:'text-bold'
                    },
                    { name: 'kategori', align: 'left', label: 'Kategori', field: 'kategori', sortable: true },
                    { name: 'deskripsi', align: 'left', label: 'Deskripsi', field: 'deskripsi', sortable: true },
                    { name: 'gambar', align: 'left', label: 'Gambar', field: 'gambar', sortable: true },
                    { name: 'opsi', align: 'right', label: 'Opsi', field: 'opsi', sortable: true }
                ]
        const rows = ref([])
        const url = ref()
        const loading = ref(false)
        const filter = ref('')

        // progress bar
        const prog = ref()

        // tambah
        const form = reactive({
            judul: '',
            kategori: '',
            deskripsi: '',
            gambar: ''
        })
        const fileGambar = ref('')
        // const fileURL = ref('')
        const errors = ref([])

        // edit
        const formEdit = ref([])

        // hapus
        const q = useQuasar()

        // modal
        const prompt = ref(false)
        const submitting = ref(false)
        const editMode = ref(false)

        // crop
        const fileURL = ref('')
        // const fileReader = new FileReader()
        // fileReader.onload = (event) => {
        //     fileURL.value = event.target.result
        // }
        // const imageCrop = ref(null)
        // const data_crop = ref()
        // const bool = ref(false)
        // let cropper = null

        const modal_tambah = () => {
            editMode.value = false
            prompt.value = true
        } 

        const modal_tutup = () => {
            prompt.value = false
            errors.value = []
            form.judul = ''
            form.kategori = ''
            form.deskripsi = ''
            form.gambar = ''
        }

        //ubah gambar
        const ubahGambar = (e) => {
            if(e.target.files.length === 0){
                fileGambar.value = ''
                fileURL.value = ''
                return
            }
            fileGambar.value = e.target.files[0]
        }

        // crop
        // watchEffect(() => {
        //     if(fileGambar.value){
        //         fileReader.readAsDataURL(fileGambar.value)
        //     }else{
        //         fileURL.value = null
        //     }
        // })

        // const handleImageCropped = () => {
        //     cropper.getCroppedCanvas({
        //         width: 256,
        //         height: 256,
        //     }).toBlob((blob) => {

        //         data_crop.value = blob
        //         bool.value = true

        //     }, 'image/*')
        // }

        watch(fileGambar, (fileGambar) => {
            if(!(fileGambar instanceof File)){
                return
            }
            const fileReader = new FileReader()

            fileReader.readAsDataURL(fileGambar)

            fileReader.addEventListener("load", () => {
                fileURL.value = fileReader.result
            })
        })

        onMounted(() => {
            ambilGallery()
        //     cropper = new Cropper(imageCrop.value, {
        //         // aspectRatio: 16/9,
        //         minCropBoxWidth: 100,
        //         minCropBoxHeight: 100,
        //         viewMode: 2,
        //         dragMode: 'move',
        //         background: true,
        //         cropBoxMovable: true,
        //         cropBoxResizable: true,
        //         // maxCanvasWidth: 100,
        //         movable: true,
        //         scalable: true,
        //         zoomable: true,
        //         zoomOnTouch: true,
        //         zoomOnWheel: true
        //     })
        })

        // onUnmounted(() => {
        //     cropper.destroy()
        // })

        // watch(
        //     fileURL,
        //     () => {
        //         if(fileURL.value){
        //             cropper.replace(fileURL.value)
        //         }
        //     },
        //     {
        //         flush: 'post'
        //     }
        // )
        // akhir crop

        const ambilGallery = async () => {
            let response = await axios.get('api/gallery_adm')
            rows.value = response.data.data
            url.value = response.data.url
        }

        const tambah = async () => {
            errors.value = ''
            submitting.value = true
            try{
                const input = new FormData()
                input.append('judul', form.judul)
                input.append('kategori', form.kategori)
                input.append('deskripsi', form.deskripsi)
                input.append('gambar', fileGambar.value)
    
                await axios.post('api/gallery_adm', input, {
                    onUploadProgress: e => {
                        if(e.lengthComputable){
                            prog.value = (e.loaded / e.total) * 1
                        }
                    }
                })

                fileGambar.value = ''

                ambilGallery()
    
                prompt.value = false
                submitting.value = false
                prog.value = 0
                modal_tutup()
            }catch(e){
                prog.value = 0
                errors.value = e.response.data.errors
                submitting.value = false
            }
        }

        const modal_edit = async (id) => {
            editMode.value = true
            prompt.value = true

            let response = await axios.get('api/gallery_adm/'+id)

            formEdit.value = response.data.data
        }

        const edit = async (id) => {
            errors.value = []
            submitting.value = true
            try{
                const input = new FormData() 

                input.append('judul', formEdit.value.judul)
                input.append('kategori', formEdit.value.kategori)
                input.append('deskripsi', formEdit.value.deskripsi)
                input.append('gambar', fileGambar.value)

                await axios.post('api/gallery_adm/'+ id, input, {
                    onUploadProgress: e => {
                        if(e.lengthComputable){
                            prog.value = (e.loaded / e.total) * 1
                        }
                    }
                })

                fileGambar.value = ''
                
                ambilGallery()

                prompt.value = false
                submitting.value = false
                prog.value = 0
            }catch(e){
                prog.value = 0
                submitting.value = false
                errors.value = e.response.data.errors
            } 
        }

        const hapus_gallery = (id, index) => {
            q.dialog({
                title: 'Apa kamu yakin ?',
                message: 'ingin menghapus gallery ini',
                cancel: true,
                persistent: true
            }).onOk(() => {
                axios.delete('api/gallery_adm/'+id)
                rows.value.splice(index, 1)
                q.notify({
                    type: 'positive',
                    message: 'Gallery berhasil di hapus',
                    position: 'top-right',
                    timeout: 1500
                })  
            }).onCancel(() => {
                
            })
        }
        
        return {
            // table
            columns,
            rows,
            loading,
            url,
            filter,
            ambilGallery,

            // modal
            prompt,
            modal_tambah,
            modal_tutup,
            editMode,

            // ubah gambar
            ubahGambar,
            fileGambar,

            // modal tambah
            form,
            tambah,
            errors,
            submitting,

            // edit
            modal_edit,
            formEdit,
            edit,

            // hapus
            hapus_gallery,
            q,

            // progress bar
            prog,

            // crop
            fileURL,
            // imageCrop,
            // handleImageCropped,
            // data_crop,
            // bool,
            // cropper
        }

    }
}
</script>