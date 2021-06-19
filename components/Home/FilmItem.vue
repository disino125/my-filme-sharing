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
           if(this.$route.path.indexOf('Film') != -1){
               this.$router.push({
                    path:'/Filme/Detail',
                    query:{
                        id: this.filmItem.id
                    }
                })
           } else {
               this.$router.push({
                    path:'/Serien/Detail',
                    query:{
                        id: this.filmItem.id
                    }
                })
           }
           
       }
    }
})
</script> 


<style scoped>

</style>