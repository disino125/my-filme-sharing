<template>
    <div>
        <nav-bar>
            <div class="flex justify-between items-center">
                <div class=""><img @click="goBack" src="/back.png" class="h-18 w-20 mt-7"/></div>
                <div class="text-3xl">{{cateName}}</div>
            </div>   
        </nav-bar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import navBar from '~/components/Commen/navBar.vue'
//import navBarItem from '~/components/Commen/navBarItem.vue'

export default Vue.extend({
    components:{
        navBar
    },
    props:{
        cateName:String
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
})
</script>

<style scoped>
    
</style>