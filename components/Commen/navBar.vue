<template>
    <div class="mt-0 bg-gray-200 fix">
        <div class="flex justify-center  mb-0">
            <slot></slot>
        </div>
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    components: { },
    props : {
        
    },
    methods : {
       
    }
})
</script> 


<style scoped>
    .fix {
        position: fixed;
        top: 0;
        left:0;
        width: 100%;
        height: 150px;
    }
</style>