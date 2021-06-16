<template>
    <div>
        <nav-bar>
            <back/>
        </nav-bar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import navBar from '~/components/Commen/navBar.vue'
import back from '~/components/Home/backButtom.vue'

export default Vue.extend({
    data(){
        return {
            
        }
    },
    components:{
        navBar,
        back
    },
    methods:{
        
    }
})
</script>

<style scoped>
    
</style>