<template>
    <div class="rounded-full absolute left-8 bottom-0 h-12 w-12 bg-gray-100 overflow-hidden"
    @mouseover="bgShine"
    @mouseleave="bgDark"
    @click="goBack">
    <img src="/back.png"
    :class="{back_bgc:isActive}"
    /></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data(){
        return {
            isActive:false
        }
    },
    
    methods:{
        bgShine(){
            this.isActive = true
        },
        bgDark(){
            this.isActive = false
        },
        goBack(){
            this.$router.go(-1)
        }
    }
})
</script>

<style scoped>
    
</style>