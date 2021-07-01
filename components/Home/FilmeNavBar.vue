<template>
    <nav-bar>
        <img v-if="showBack()" @click="goBack" src="/back.png" class="h-12 w-12 mt-7"/>
        <nav-bar-item path="/Filme">
          <div>Filme</div>
        </nav-bar-item>
        <nav-bar-item path="/Serien">
          <div>Serien</div>
        </nav-bar-item>
        <nav-bar-item path="/Kasse">
          <div>{{setKasse}}</div>
        </nav-bar-item>
        <nav-bar-item path="/Konto">
          <div>Konto</div>
        </nav-bar-item>
      </nav-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import navBar from '~/components/Commen/navBar.vue'
import navBarItem from '~/components/Commen/navBarItem.vue'
import {mapGetters} from 'vuex'

export default Vue.extend({
  data(){
    return {
      
    }
  },
    components: {
         navBar,
         navBarItem
         },
    props : {
        
    },
    methods : {
       showBack(){
        return this.$route.path.indexOf('/Detail') !== -1
        
       },
       goBack(){
         this.$router.go(-1)
       },
      
    },
   
    computed:{
        ...mapGetters(['cartLength']),
        
         setKasse(){
          return (this.cartLength>0?`Kasse(${this.cartLength})`:'Kasse')
        }
    },
    
})
</script> 


<style scoped>
    
</style>