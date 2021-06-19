<template>
  <div class="film_card">
    <h1 class="text-white text-5xl font-black">Filmsharing media center</h1>
    <div class="bg-gray-300 h-200 w-350 px-8 py-10 flex items-center mt-8">
      <img :src="film.fotoURL" alt="" class="rounded h-4/5 w-3/5">
      <div class="ml-5">
        <h1 class="text-5xl font-black text-gray-700">{{film.name}}</h1>
        <p class="mt-4 font-mono text-1xl text-blue-500">{{film.Infos}}</p>
        <div class="bg-gray-500  mt-6  p-3 text-gray-300">
          <h6 class="mt-4 font-semibold text-base">Kurzbeschreibung</h6>
          <div class="text-lg font-serif mt-8 tracking-wide">{{film.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {request} from '~/network/request.js'
export default Vue.extend({
  props: {
    movie: Object,
  },
  data(){
    return {
      film:''
    }
  },
  mounted(){
    this.getFilm()
  },
  methods:{
     getFilm(){
        // let {data} = await axios.get('https://api.npoint.io/782b8e4db616969d96a2')
        // this.film = data
        request({
          url:'https://api.npoint.io/782b8e4db616969d96a2'
        },
          (res: { data: string })=>{
          this.film = res.data
        })
    }
  }
})
</script>>


<style lang="">
  
</style>