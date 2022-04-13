<template>
    <div>
        <!-- navbar2 -->
        <q-header elevated class="nav2-edited q-pt-sm q-pb-sm">
            <div class="container-lg">
            <q-toolbar>
                <q-btn
                flat
                dense
                round
                @click="leftDrawerOpen = !leftDrawerOpen"
                aria-label="Menu"
                icon="menu"
                class="lt-sm-edited"
                />

                <q-btn to="/" stretch class="nav2-edited-link gt-sm-edited" flat label="Beranda" />

                <q-btn-dropdown stretch class="nav2-edited-link gt-sm-edited" flat label="Tentang P2SDM">
                <q-list>   
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/tentang" class="text-center router-link-edited">Tentang</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/tujuan_moto" class="text-center router-link-edited">Tujuan & Moto</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/struktur_organisasi" class="text-center router-link-edited">Struktur Organisasi</router-link>
                    </q-item-section>
                    </q-item>
                </q-list>
                </q-btn-dropdown>

                <q-btn-dropdown stretch class="nav2-edited-link gt-sm-edited" flat label="Penelitian & Pengabdian">
                <q-list>   
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/payung_penelitian" class="text-center router-link-edited">Payung Penelitian</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/kegiatan_penelitian" class="text-center router-link-edited">Kegiatan Penelitian</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/program_penelitian" class="text-center router-link-edited">Program Penelitian</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/publikasi_nasional" class="text-center router-link-edited">Publikasi Nasional</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/publikasi_internasional" class="text-center router-link-edited">Publikasi Internasional</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/kegiatan_pengabdian" class="text-center router-link-edited">Kegiatan Pengabdian</router-link>
                    </q-item-section>
                    </q-item>
                </q-list>
                </q-btn-dropdown>

                <q-btn-dropdown stretch class="nav2-edited-link gt-sm-edited" flat label="Bimtek & Pelatihan">
                <q-list>   
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/bimtek_pendamping_umkm" class="text-center router-link-edited">Bimtek Pendamping UMKM</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/bimtek_digital_marketing" class="text-center router-link-edited">Bimtek Digital Marketing</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/bimtek_trainer" class="text-center router-link-edited">Bimtek Trainer</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/bimtek_learning_outcome" class="text-center router-link-edited">Bimtek Learning Outcome</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/bimtek_manajemen_risiko" class="text-center router-link-edited">Bimtek Manajemen Risiko</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/bimtek_spmi" class="text-center router-link-edited">Bimtek SPMI</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/pelatihan_ami_pt" class="text-center router-link-edited">Pelatihan AMI-PT</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/pelatihan_spmi_ami_pt" class="text-center router-link-edited">Pelatihan SPMI AMI-PT</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/pelatihan_pekerti_aa" class="text-center router-link-edited">Pelatihan Pekerti & AA</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/pelatihan_audit_non_akademik" class="text-center router-link-edited">Pelatihan Audit Non Academic</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/sertifikasi_pendamping_kewirausahaan" class="text-center router-link-edited">Sertifikasi Pendamping Kewirausahaan</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/kampus_desa" class="text-center router-link-edited">Kampus Desa</router-link>
                    </q-item-section>
                    </q-item>
                </q-list>
                </q-btn-dropdown>

                <q-btn-dropdown stretch class="nav2-edited-link gt-sm-edited" flat label="Media Promosi">
                <q-list>   
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/company_profile" class="text-center router-link-edited">Company Profile</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/overview_pelatihan" class="text-center router-link-edited">Overview Pelatihan</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/webinar_p2sdm" class="text-center router-link-edited">Webinar P2SDM</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/agenda" class="text-center router-link-edited">Agenda</router-link>
                    </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup tabindex="0">
                    <q-item-section>
                        <router-link to="/berita" class="text-center router-link-edited">Berita</router-link>
                    </q-item-section>
                    </q-item>
                </q-list>
                </q-btn-dropdown>

                <q-btn to="/gallery" stretch class="nav2-edited-link gt-sm-edited" flat label="Gallery" />
                <q-btn to="/kontak" stretch class="nav2-edited-link gt-sm-edited" flat label="Kontak Kami" />
                <q-btn v-if="authenticated" to="/pos" stretch class="nav2-edited-link gt-sm-edited" flat label="Goto Dashboard" />

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

            <router-link to="/" style="text-decoration:none;color:black;">
                <q-item clickable v-ripple>
                <q-item-section>
                    Beranda
                </q-item-section>
                </q-item>
            </router-link>
            
            <div style="max-width: 350px">
                <q-list>
                <q-expansion-item
                    expand-separator
                    label="Tentang P2SDM"
                    dense-toggle
                >
                    <router-link to="tentang" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Tentang
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="tujuan_moto" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Tujuan & Moto
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="struktur_organisasi" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Struktur Organisasi
                            </q-item-section>
                        </q-item>
                    </router-link>
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
                    <router-link to="payung_penelitian" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Payung Penelitian
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="kegiatan_penelitian" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Kegiatan Penelitian
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="program_penelitian" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Program Penelitian
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="publikasi_nasional" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Publikasi Nasional
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="publikasi_internasional" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Publikasi Internasional
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="kegiatan_pengabdian" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Kegiatan Pengabdian
                            </q-item-section>
                        </q-item>
                    </router-link>
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
                    <router-link to="bimtek_pendamping_umkm" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Bimtek Pendamping UMKM
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="bimtek_digital_marketing" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Bimtek Digital Marketing
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="bimtek_trainer" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Bimtek Trainer
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="bimtek_learning_outcome" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Bimtek Learning Outcome
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="bimtek_manajemen_risiko" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Bimtek Manajemen Resiko
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="bimtek_spmi" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Bimtek SPMI
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="pelatihan_ami_pt" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Pelatihan AMI-PT
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="pelatihan_spmi_ami_pt" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Pelatihan SPMI AMI-PT
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="pelatihan_pekerti_aa" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Pelatihan Pekerti & AA
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="pelatihan_audit_non_akademik" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Pelatihan Audit Non Academic
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="sertifikasi_pendamping_kewirausahaan" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Sertifikasi Pendamping Kewirausahaan
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="kampus_desa" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Kampus Desa
                            </q-item-section>
                        </q-item>
                    </router-link>
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
                    <router-link to="company_profile" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Company Profile
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="overview_pelatihan" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Overview Pelatihan
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="webinar_p2sdm" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Webinar P2SDM
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="agenda" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Agenda
                            </q-item-section>
                        </q-item>
                    </router-link>
                    <router-link to="berita" style="text-decoration:none;color:black;">
                        <q-item clickable v-ripple>
                            <q-item-section class="q-pl-md">
                            Berita
                            </q-item-section>
                        </q-item>
                    </router-link>
                </q-expansion-item>
                </q-list>
            </div>

            <router-link to="gallery" style="text-decoration:none;color:black;">
                <q-item clickable v-ripple>
                <q-item-section>
                    Gallery
                </q-item-section>
                </q-item>
            </router-link>

            <router-link to="kontak" style="text-decoration:none;color:black;">
                <q-item clickable v-ripple>
                <q-item-section>
                    Kontak Kami
                </q-item-section>
                </q-item>
            </router-link>

            <router-link v-if="authenticated" to="/pos" style="text-decoration:none;color:black;">
                <q-item clickable v-ripple>
                <q-item-section>
                    Goto Dashboard
                </q-item-section>
                </q-item>
            </router-link>

            </q-list>
        </q-drawer>
        <!-- akhir sidebar -->
    </div>
</template>

<script>
import store from '@/store'
import { ref, computed } from 'vue'
export default{
    name: 'Navbar2Sidebar',

    setup () {

        const authenticated = computed(() => store.getters["auth/authenticated"])

        return {
            leftDrawerOpen: ref(false),

            authenticated
        }
    }
}
</script>
