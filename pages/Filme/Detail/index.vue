<template>
    <div class="box2">
        <nav-bar></nav-bar>
        <div class="bg-gray-200 h-200 w-350 px-8 py-10 flex items-start">
        <img :src="film.img" alt="" class="rounded">
        <div class="ml-5">
            <h1 class="text-5xl font-black text-gray-700">{{film.title}}</h1>
            <p class="mt-4 font-mono text-1xl text-blue-500">{{film.date}}</p>
            <div class="bg-gray-500  mt-6  p-3 text-gray-300">
            <h6 class="mt-4 font-semibold text-base">Kurzbeschreibung</h6>
            <div class="text-lg font-serif mt-8 tracking-wide">{{film.description}}</div>
            </div>
            <div class="ausleihen"
            :class="{ausleihen_change_color:isActive}"
            @mouseover="changeColor"
            @mouseleave="returnColor">
                <div>Ausleihen</div>
            </div>
        </div>
        
        </div>
  </div>
</template>

<script>
import Vue from 'vue'
import navBar from '~/components/Home/DetailNavBar.vue'
//import {request} from '~/network/request.js'
import axios from 'axios'

export default Vue.extend({
    components:{
        navBar
    },
    data(){
        return {
            id:0,
            film:{},
            isActive:false
        }
    },
    created(){
       this.getFilmDetail(this.$route.query.id)
    },
    methods:{
        changeColor(){
            this.isActive = true
        },

        returnColor(){
            this.isActive = false
        },

        async getFilmDetail(id){
            this.id = id
            let {data:res} = await axios.get(`api/filmDetail/${id}`)
            this.film = res.data.filmInfos
        }
    }

}) 
    
</script>

<style scoped>
.box2 {
  height: calc(100% - 150px);
  margin-top: 150px;
  overflow-y: auto;
}
</style>