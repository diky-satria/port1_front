<template>
    <!-- sidebar -->
    <q-drawer
        v-model="leftDrawerOpen"
        bordered
        class="sidebar-drawer"
    >
        <q-list class="q-p-md">
        <!-- <q-item-label header>Essential Links</q-item-label> -->
        <q-img class="sidebar-logo" src="./assets/logo2.png">
        </q-img>

        <q-list>
            <q-item clickable v-ripple>
            <q-item-section>
                Beranda
            </q-item-section>
            </q-item>
        </q-list>
        
        <div style="max-width: 350px">
            <q-list>
            <q-expansion-item
                expand-separator
                label="Tentang P2SDM"
                dense-toggle
            >
                <q-list>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Tentang
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Tujuan & Moto
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Struktur Organisasi
                    </q-item-section>
                </q-item>
                </q-list>
            </q-expansion-item>
            </q-list>
        </div>

        <div style="max-width: 350px">
            <q-list>
            <q-expansion-item
                expand-separator
                label="Penelitian & Pengabdian"
                dense-toggle
            >
                <q-list>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Payung Penelitian
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Kegiatan Penelitian
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Program Penelitian
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Publikasi Nasional
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Publikasi Internasional
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Kegiatan Pengabdian
                    </q-item-section>
                </q-item>
                </q-list>
            </q-expansion-item>
            </q-list>
        </div>

        <div style="max-width: 350px">
            <q-list>
            <q-expansion-item
                expand-separator
                label="Bimtek & Pelatihan"
                dense-toggle
            >
                <q-list>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Bimtek Pendamping UMKM
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Bimtek Digital Marketing
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Bimtek Trainer
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Bimtek Learning Outcome
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Bimtek Manajemen Resiko
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Bimtek SPMI
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Pelatihan AMI-PT
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Pelatihan SPMI AMI-PT
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Pelatihan Pekerti & AA
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Pelatihan Audit Non Academic
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Sertifikasi Pendamping Kewirausahaan
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Kampus Desa
                    </q-item-section>
                </q-item>
                </q-list>
            </q-expansion-item>
            </q-list>
        </div>

        <div style="max-width: 350px">
            <q-list>
            <q-expansion-item
                expand-separator
                label="Media Promosi"
                dense-toggle
            >
                <q-list>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Company Profile
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Overview Pelatihan
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Webinar P2SDM
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Agenda
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section class="q-pl-md">
                    Berita
                    </q-item-section>
                </q-item>
                </q-list>
            </q-expansion-item>
            </q-list>
        </div>

        <q-list>
            <q-item clickable v-ripple>
            <q-item-section>
                Gallery
            </q-item-section>
            </q-item>
        </q-list>

        <q-list>
            <q-item clickable v-ripple>
            <q-item-section>
                Kontak Kami
            </q-item-section>
            </q-item>
        </q-list>

        </q-list>
    </q-drawer>
    <!-- akhir sidebar -->
</template>

<script>
export default{
    name: 'Sidebar',
    setup () {
        return {
            leftDrawerOpen: ref(false),
            tab: ref(''),
            slide: ref(1)
        }
    }
}
</script>
