<template>
    <nav-bar>
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
       
    }
})
</script> 


<style scoped>
    
</style>