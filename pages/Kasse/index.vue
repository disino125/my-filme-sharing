<template>
    <div class="box2">
        <nav-bar></nav-bar>
        <cart-list></cart-list>
        <div class="border-4 rounded-md h-6 w-22 absolute right-10 mt-8 font-medium">bestätigen</div>
    </div>
</template>

<script>
import Vue from 'vue'
import navBar from '~/components/Home/FilmeNavBar.vue'
import cartList from '~/components/Home/cartList.vue'

export default Vue.extend({
    components:{
        navBar,
        cartList
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