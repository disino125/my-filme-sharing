<template>
    <div class="flex flex-wrap justify-center">
        <film-item v-for="item,index in filmList" :key="index" :filmItem="item" class="m-1"></film-item>
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
        }
    },
    methods : {
       
    }
})
</script> 


<style scoped>

</style>