<template>
    <div class="grid justify-items-start">
        <p class="text-2xl ml-2" @click="moreMovies(cateName)">{{cateName}} > mehr </p>
        <div class="flex flex-wrap justify-center">
            <film-item v-for="item,index in filmList" :key="index" :filmItem="item" class="m-1"></film-item>
        </div>      
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import filmItem from './FilmItem.vue'

export default Vue.extend({
    components: {filmItem },
    props : {
        filmList:{
            type:Array,
            default(){
                return []
            }
        },
        cateName:String
    },
    data(){
        return {
            
        }
    },
    methods : {
       moreMovies(name:string){
            this.$router.push({
            path:'Filme/Kategorie/',
            query:{
                cateName:name
                }
            })
       }
    }
})
</script> 


<style scoped>

</style>