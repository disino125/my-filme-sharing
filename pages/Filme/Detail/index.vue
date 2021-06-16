<template>
    <div class="">
        <nav-bar></nav-bar>
        <div class="bg-gray-200 h-200 w-350 px-8 py-10 flex items-start">
        <img src="/Totoro.jpg" alt="" class="rounded h-1/2 w-1/3">
        <div class="ml-5">
            <h1 class="text-5xl font-black text-gray-700">Totoro</h1>
            <p class="mt-4 font-mono text-1xl text-blue-500">film_infos</p>
            <div class="bg-gray-500  mt-6  p-3 text-gray-300">
            <h6 class="mt-4 font-semibold text-base">Kurzbeschreibung</h6>
            <div class="text-lg font-serif mt-8 tracking-wide">asdkfas;ldfj;saldfja;sldkfjas;ldkfja;sldkjfa;sdlkfja;sdlkfj</div>
            </div>
            <div class="ausleihen"
            :class="{ausleihen_change_color:isActive}"
            @mouseover="changeColor"
            @mouseleave="returnColor">
                <div >Ausleihen</div>
            </div>
        </div>
        
        </div>
  </div>
</template>

<script>
import Vue from 'vue'
import navBar from '~/components/Home/DetailNavBar.vue'
//import {request} from '~/network/request.js'

export default Vue.extend({
    components:{
        navBar
    },
    data(){
        return {
            id:null,
            film:{},
            isActive:false
        }
    },
    created(){
       
    },
    methods:{
        changeColor(){
            this.isActive = true
        },

        returnColor(){
            this.isActive = false
        }
    }

}) 
    
</script>

<style scoped>

</style>