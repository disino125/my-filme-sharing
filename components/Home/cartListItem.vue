<template>
    <div class="flex w-3/4 relative p-4 items-center">
        <check-btn @click.native="isCheck" :check="item.check"></check-btn>
        <img :src="item.img" class="h-50 w-40 rounded-sm">
        <div class="ml-5">
            <div class="text-2xl text-gray-700 absolute top-3">{{item.title}}</div>
            <div class="mt-3 text-gray-600 absolute top-10">{{item.date}}</div>
            <div class="absolute bottom-0 right-0 h-16 w-16">Anzahl:{{item.count}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import checkBtn from '~/components/Home/checkBtn.vue'

export default Vue.extend({
    props:{
        item:{
            type:Object,
            default:{}
        }
    },
    components:{
        checkBtn
    },
   methods:{
       isCheck(){
           this.item.check = !this.item.check
       }
   }
})
</script>

<style scoped>

</style>