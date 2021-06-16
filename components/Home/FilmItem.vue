<template>
    <div @click="itemClick">
        <img :src="filmItem.url" alt="">
        <span>{{filmItem.title}}</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    components: { },
    props : {
        filmItem:{
            type:Object,
            default(){
                return {}
            }
        },
        
    },
    methods : {
       itemClick(){
           this.$router.push({
               path:'/Filme/Detail',
               query:{
                   id: this.filmItem.id
               }
           })
       }
    }
})
</script> 


<style scoped>

</style>