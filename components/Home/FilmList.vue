<template>
    <div class="grid justify-items-start">
        <p class="text-2xl ml-2" @click="moreItems(cateName)" v-if="isCate">{{cateName}} > mehr </p>
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
       moreItems(name:string){
           if(this.$route.path.indexOf('Film')!= -1){
               this.$router.push({
            path:'Filme/Kategorie/',
            query:{
                cateName:name
                }
            })
           }else {
               this.$router.push({
                path:'Serien/Kategorie/',
                query:{
                    cateName:name
                    }
                })
           }
           

            
       }
    },
    computed:{
        isCate(){
           return this.$route.path.indexOf('Kategorie') == -1
        }
    }
})
</script> 


<style scoped>

</style>