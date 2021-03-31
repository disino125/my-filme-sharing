<template>
<div class="wrapper flex flex-col flex-1">
  <div class="flex flex-col" ref="movieRow overflow-auto">
      <film-card v-for="movie in movies" :key="movie.id" :movie="movie"></film-card>
  </div>
  <span v-on:click="scrollWrapper" >next</span>
</div>
</template>

<script lang="ts">
import filmCard from './filmCard.vue'
import Vue from 'vue'

export default Vue.extend({
    components: { filmCard },
    props : {
        movies : Array
    },
    methods : {
        scrollWrapper : function(){
        }
    }
})
</script> >


<style>

</style>