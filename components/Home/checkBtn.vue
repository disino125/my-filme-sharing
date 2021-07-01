<template>
    <div class="m-8 h-8 w-8 rounded-full border-gray-600 border-4">
        <img src="/checkmark.png" v-if="check" class="rounded-full">
    </div>
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
    
    props:{
        check:Boolean
    },
    
})
</script>

<style scoped>

</style>