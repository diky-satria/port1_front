<template>
      <q-layout view="lHh Lpr lFf">

        <Navbar1/>
        
        <Navbar2Sidebar/>

        <slot />

        <Footer/>

      </q-layout>
</template>

<script>
import Navbar1 from '@/components/Navbar1.vue'
import Navbar2Sidebar from '@/components/Navbar2Sidebar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'LayoutFrontEnd',

  components: {
    Navbar1,
    Navbar2Sidebar,
    Footer
  },

  setup () {
    return {

    }
  }
}
</script>
