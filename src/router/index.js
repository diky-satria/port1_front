import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../views/beranda/Beranda.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: Beranda
  },
  {
    path: '/config',
    name: 'Login',
    component: () => import('../views/authentication/Login.vue'),
    meta: {guest: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
    meta: {auth: true }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user/User.vue'),
    meta: {auth: true },
    beforeEnter: () => {
      if(store.getters['auth/user'].role !== 'super admin'){
        router.replace('/pos')
      }
    }
  },
  {
    path: '/ubah_password',
    name: 'UbahPassword',
    component: () => import('../views/ubah_password/UbahPassword.vue'),
    meta: {auth: true }
  },
  {
    path: '/pos',
    name: 'Pos',
    component: () => import('../views/pos/Pos.vue'),
    meta: {auth: true }
  },
  {
    path: '/tambah_pos',
    name: 'TamahPos',
    component: () => import('../views/pos/TambahPos.vue'),
    meta: {auth: true }
  },
  {
    path: '/edit_pos/:id',
    name: 'EditPos',
    component: () => import('../views/pos/EditPos.vue'),
    meta: {auth: true }
  },
  {
    path: '/riwayat_pos/:id',
    name: 'RiwayatPos',
    component: () => import('../views/pos/RiwayatPos.vue'),
    meta: {auth: true }
  },
  {
    path: '/gallery_admin',
    name: 'GalleryAdmin',
    component: () => import('../views/gallery_admin/GalleryAdmin.vue'),
    meta: {auth: true }
  },
  {
    path: '/gallery_admin_tambah',
    name: 'GalleryAdminTambah',
    component: () => import('../views/gallery_admin/GalleryAdminTambah.vue'),
    meta: {auth: true }
  },
  {
    path: '/gallery_admin_edit/:id',
    name: 'GalleryAdminEdit',
    component: () => import('../views/gallery_admin/GalleryAdminEdit.vue'),
    meta: {auth: true }
  },
  {
    path: '/kategori',
    name: 'Kategori',
    component: () => import('../views/kategori/Kategori.vue'),
    meta: {auth: true }
  },
  {
    path: '/tentang',
    name: 'Tentang',
    // route level code-splitting
    // this generates a separate chunk (Tentang.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Tentang" */ '../views/tentang/Tentang.vue')
  },
  {
    path: '/tujuan_moto',
    name: 'TujuanDanMoto',
    component: () => import('../views/tentang/TujuanDanMoto.vue')
  },
  {
    path: '/struktur_organisasi',
    name: 'StrukturOrganisasi',
    component: () => import('../views/tentang/StrukturOrganisasi.vue')
  },
  {
    path: '/payung_penelitian',
    name: 'PayungPenelitian',
    component: () => import('../views/penelitian/PayungPenelitian.vue')
  },
  {
    path: '/kegiatan_penelitian',
    name: 'KegiatanPenelitian',
    component: () => import('../views/penelitian/KegiatanPenelitian.vue')
  },
  {
    path: '/program_penelitian',
    name: 'ProgramPenelitian',
    component: () => import('../views/penelitian/ProgramPenelitian.vue')
  },
  {
    path: '/publikasi_nasional',
    name: 'PublikasiNasional',
    component: () => import('../views/penelitian/PublikasiNasional.vue')
  },
  {
    path: '/publikasi_internasional',
    name: 'PublikasiInternasional',
    component: () => import('../views/penelitian/PublikasiInternasional.vue')
  },
  {
    path: '/kegiatan_pengabdian',
    name: 'KegiatanPengabdian',
    component: () => import('../views/penelitian/KegiatanPengabdian.vue')
  },
  {
    path: '/bimtek_pendamping_umkm',
    name: 'BimtekPendampingUmkm',
    component: () => import('../views/bimtek/BimtekPendampingUmkm.vue')
  },
  {
    path: '/bimtek_digital_marketing',
    name: 'BimtekDigitalMarketing',
    component: () => import('../views/bimtek/BimtekDigitalMarketing.vue')
  },
  {
    path: '/bimtek_trainer',
    name: 'BimtekTrainer',
    component: () => import('../views/bimtek/BimtekTrainer.vue')
  },
  {
    path: '/bimtek_learning_outcome',
    name: 'BimtekLearningOutcome',
    component: () => import('../views/bimtek/BimtekLearningOutcome.vue')
  },
  {
    path: '/bimtek_manajemen_risiko',
    name: 'BimtekManagementRisiko',
    component: () => import('../views/bimtek/BimtekManagementRisiko.vue')
  },
  {
    path: '/bimtek_spmi',
    name: 'BimtekSpmi',
    component: () => import('../views/bimtek/BimtekSpmi.vue')
  },
  {
    path: '/pelatihan_ami_pt',
    name: 'PelatihanAmiPt',
    component: () => import('../views/bimtek/PelatihanAmiPt.vue')
  },
  {
    path: '/pelatihan_spmi_ami_pt',
    name: 'PelatihanSpmiAmiPt',
    component: () => import('../views/bimtek/PelatihanSpmiAmiPt.vue')
  },
  {
    path: '/pelatihan_pekerti_aa',
    name: 'PelatihanPekertiAa',
    component: () => import('../views/bimtek/PelatihanPekertiAa.vue')
  },
  {
    path: '/pelatihan_audit_non_akademik',
    name: 'PelatihanAuditNonAkademik',
    component: () => import('../views/bimtek/PelatihanAuditNonAkademik.vue')
  },
  {
    path: '/sertifikasi_pendamping_kewirausahaan',
    name: 'SertifikasiPendampingKewirausahaan',
    component: () => import('../views/bimtek/SertifikasiPendampingKewirausahaan.vue')
  },
  {
    path: '/kampus_desa',
    name: 'KampusDesa',
    component: () => import('../views/bimtek/KampusDesa.vue')
  },
  {
    path: '/company_profile',
    name: 'CompanyProfile',
    component: () => import('../views/media_promosi/CompanyProfile.vue')
  },
  {
    path: '/overview_pelatihan',
    name: 'OverviewPelatihan',
    component: () => import('../views/media_promosi/OverviewPelatihan.vue')
  },
  {
    path: '/webinar_p2sdm',
    name: 'WebinarP2sdm',
    component: () => import('../views/media_promosi/WebinarP2sdm.vue')
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: () => import('../views/media_promosi/Agenda.vue')
  },
  {
    path: '/berita',
    name: 'Berita',
    component: () => import('../views/media_promosi/Berita.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/gallery/Gallery.vue')
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: () => import('../views/kontak/Kontak.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'act'
})

router.beforeEach((to, from, next) => {
  if(to.meta.auth && !store.getters['auth/authenticated']){
    router.replace('/config')
  }
  if(to.meta.guest && store.getters['auth/authenticated']){
    router.replace('/pos')
  }
  next()
})

export default router
