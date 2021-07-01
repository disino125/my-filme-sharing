<template>
    <div class="flex flex-col items-center divide-y divide-gray-400 bg-gray-100 relative">
        <cart-item v-for="(item,index) in getCartList" :key="index" :item="item"></cart-item>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import cartItem from '~/components/Home/cartListItem.vue'
import {mapGetters} from 'vuex'

export default Vue.extend({
    components:{
        cartItem
    },
    computed:{
        ...mapGetters(['cartList']),
        getCartList(){
            return this.cartList
        }

    }
})
</script>

<style scoped>

</style>