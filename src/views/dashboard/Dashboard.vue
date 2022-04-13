<template>
    <DashboardLayout>
        <div>
            <div class="text-subtitle2 text-bold">
                Dashboard
            </div>
        </div>
    </DashboardLayout>
</template>

<script>
import DashboardLayout from '../layout/DashboardLayout.vue'
import { onMounted } from 'vue'
import axios from 'axios'
export default {
    name: 'Dashboard',

    components: {
        DashboardLayout
    },

    setup(){

        const tampil = async () => {
            await axios.get('api/user')
            // console.log(response.data)
        }

        onMounted(() => {
            tampil()
        })

        return {
            tampil
        }

    }
}
</script>