<template>
    <div class="box2">
        <nav-bar></nav-bar>
        <h3>cart</h3>
    </div>
</template>

<script>
import Vue from 'vue'
import navBar from '~/components/Home/FilmeNavBar.vue'

export default Vue.extend({
    components:{
        navBar
    }
}) 
    
</script>

<style scoped>
.box2 {
  height: calc(100% - 150px);
  margin-top: 150px;
  overflow-y: auto;
}
</style>