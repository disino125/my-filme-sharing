<template>
    <nav-bar>
        <img v-if="showBack()" @click="goBack" src="/back.png" class="h-12 w-12 mt-7"/>
        <nav-bar-item path="/Filme">
          <div>Filme</div>
        </nav-bar-item>
        <nav-bar-item path="/Serien">
          <div>
            <div>Serien</div>
          </div>
        </nav-bar-item>
        <nav-bar-item path="/Kasse">
          <div>
            <div>Kasse</div>
          </div>
        </nav-bar-item>
        <nav-bar-item path="/Konto">
          <div>
            <div>Konto</div>
          </div>
        </nav-bar-item>
      </nav-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import navBar from '~/components/Commen/navBar.vue'
import navBarItem from '~/components/Commen/navBarItem.vue'

export default Vue.extend({
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
       }
    }
})
</script> 


<style scoped>
    
</style>