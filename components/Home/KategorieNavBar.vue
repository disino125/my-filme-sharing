<template>
    <div>
        <nav-bar>
            <div class="flex items-center mt-8">
                <button class="w-14 h-14"><img @click="goBack" src="/back.png" class=""/></button>
                <div class="text-3xl h-11 ">{{cateName}}</div>
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
        },
        
    }
})
</script>

<style scoped>
   
</style>