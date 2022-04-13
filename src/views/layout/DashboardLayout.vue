<template>
    <q-layout view="hHh Lpr lff" container style="height: 100vh"> 
        <q-header elevated class="q-pt-sm q-pb-sm nav2-edited-dashboard">
            <q-toolbar>
                <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
                <!-- <q-btn stretch class="nav2-edited-link float-right q-ml-auto" flat/> -->
                <div v-if="authenticated" class="float-right q-ml-auto q-mr-xs nav-username" flat>{{ user.nama }}</div>
            </q-toolbar>
        </q-header>

        <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="600"
        >
        <q-scroll-area style="height: 100%; border-right: 1px solid #ddd">
            <q-list>
            <q-item to="/" class="text-black background-change" clickable v-ripple>
                <q-item-section>
                Kunjungi Website
                </q-item-section>
            </q-item>

            <q-item v-if="authenticated && user.role === 'super admin'" to="/user" class="text-black background-change" clickable v-ripple>
                <q-item-section>
                User Management
                </q-item-section>
            </q-item>

            <q-item to="/pos" class="text-black background-change" clickable v-ripple>
                <q-item-section>
                Postingan
                </q-item-section>
            </q-item>

            <q-item to="/gallery_admin" class="text-black background-change" clickable v-ripple>
                <q-item-section>
                Gallery
                </q-item-section>
            </q-item>

            <!-- <q-item active clickable v-ripple> -->
            <!-- <div style="max-width: 350px">
                <q-list>
                    <q-expansion-item
                        expand-separator
                        label="Pos"
                        dense-toggle
                        class="menu-list-edited"
                    >
                        <q-list>
                        <q-item to="/pos" class="text-black" clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Semua Pos
                            </q-item-section>
                        </q-item>
                        <q-item to="/tambah_pos" class="text-black" clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Tambah Pos
                            </q-item-section>
                        </q-item>
                        <q-item to="/kategori" class="text-black" clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Kategori
                            </q-item-section>
                        </q-item>
                        </q-list>
                    </q-expansion-item>
                </q-list>
            </div> -->
            <!-- </q-item> -->

            <q-item to="/ubah_password" class="text-black background-change" clickable v-ripple>
                <q-item-section>
                Ubah Password
                </q-item-section>
            </q-item>

            <q-item  @click="logout" clickable v-ripple>
                <q-item-section>
                Logout
                </q-item-section>
            </q-item>
            </q-list>
        </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <q-page>
                <div class="q-ma-md">

                    <slot/>
                
                </div>
                <!-- footer -->
                <div class="footer-dashboard">
                    <div class="kon-mar-ed">
                        <div class="row q-mx-md">
                            <div class="col-sm-5 col-xs-12 img-footer">
                            <q-img src="../../assets/P2SDM-LPPM-edited.png" class="nav1-img"></q-img>
                            </div>
                            <div class="col-sm-2 col-xs-12 text-center">
                            <div class="text-subtitle1 text-bold text-footer txt-foo-resp">
                                <div>Tentang Kebijakan Privasi Panduan Komunitas Kontak Kami</div>
                            </div>
                            </div>
                            <div class="col-sm-5 col-xs-12">
                            <iframe height="100%" width="100%" src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=Kampus%20IPB%20Baranangsiang%20Gedung%20P2SDM%20LPPM%20IPB,%20Jl.%20Raya%20Pajajaran%20No.1,%20RT.02/RW.05,%20Tegallega,%20Kecamatan%20Bogor%20Tengah,%20Kota%20Bogor,%20Jawa%20Barat%2016129+(P2SDM%20LPPM%20IPB)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0"></iframe>
                            </div>
                        </div>
                        <div class="row q-pa-md q-mx-md">
                            <div class="col-sm-6 col-xs-12 text-center">
                            <div class="row justify-center items-center text-subtitle1 text-bold text-footer">
                                Follow us | <i class="fab fa-facebook-square i-edited"><i class="fab fa-twitter i-edited"></i><i class="fab fa-instagram i-edited"></i></i><i class="fab fa-youtube i-edited"></i>
                            </div>
                            </div>
                            <div class="col-sm-6 col-xs-12 text-center">
                            <div class="row justify-center items-center text-subtitle1 text-bold text-footer">
                                Copyright ©2021 All rights reserved | P2SDM IPB
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- akhir footer -->
            </q-page>
        </q-page-container>

        
    </q-layout>
</template>

<script>
import store from '@/store'
import router from '@/router'
import { ref, computed } from 'vue'
export default {
    setup () {

        const authenticated = computed(() => store.getters["auth/authenticated"])
        const user = computed(() => store.getters["auth/user"])

        const logout = async () => {
            await store.dispatch('auth/logout')
            router.replace('/config')
        }

        return {
            drawer: ref(false),
            logout,

            authenticated,
            user
        }

    }
}
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
