<template>
    <div>
        <!-- navbar2 -->
        <q-header elevated class="nav2-edited-dashboard q-pt-sm q-pb-sm">
            <div class="container-lg">
            <q-toolbar>
                <q-btn
                flat
                dense
                round
                @click="leftDrawerOpen = !leftDrawerOpen"
                aria-label="Menu"
                icon="menu"
                />

                <q-btn @click="logout" stretch class="nav2-edited-link gt-sm float-right q-ml-auto" flat label="Logout" />

            </q-toolbar>
            </div>
        </q-header>
        <!-- akhir navbar2 -->

        <!-- sidebar -->
        <q-drawer
            v-model="leftDrawerOpen"
            bordered
            class="sidebar-drawer"
        >
            <q-list class="q-p-md">
            <!-- <q-item-label header>Essential Links</q-item-label> -->
            <q-img class="sidebar-logo" src="../assets/P2SDM-LPPM-edited.png">
            </q-img>

            <q-list>
                <q-item clickable v-ripple>
                <q-item-section>
                    Dashboard
                </q-item-section>
                </q-item>
            </q-list>

            
            
            <div style="max-width: 350px">
                <q-list>
                <q-expansion-item
                    expand-separator
                    label="Pos"
                    dense-toggle
                >
                    <q-list>
                    <q-item clickable v-ripple>
                        <q-item-section class="q-pl-md">
                        Semua Pos
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                        <q-item-section class="q-pl-md">
                        Tambah Pos
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                        <q-item-section class="q-pl-md">
                        Kategori
                        </q-item-section>
                    </q-item>
                    </q-list>
                </q-expansion-item>
                </q-list>
            </div>

            <q-list>
                <q-item @click="logout" clickable v-ripple>
                <q-item-section>
                    Logout
                </q-item-section>
                </q-item>
            </q-list>

            </q-list>
        </q-drawer>
        <!-- akhir sidebar -->
    </div>
</template>

<script>
// import store from '@/store'
// import axios from 'axios'
import router from '@/router'
import { ref } from 'vue'
export default{
    name: 'NavbarSidebarDashboard',

    setup () {

        const logout = async () => {
            // await store.dispatch('auth/logout')
            localStorage.removeItem('token')
            await axios.post('api/logout')
            router.replace('/config')
        }

        return {
            leftDrawerOpen: ref(true),
            logout
        }
    }
}
</script>
