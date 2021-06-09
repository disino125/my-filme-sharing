<template>
    <div class="m-8 p-1 h-9 w-20 bg-gray-300 text-center rounded-md font-medium" 
    @click="itemClick"
    :class="{active:isActive}"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    components: { },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        }
    },
    props : {
        path: String
    },
    methods : {
       itemClick() {
           //console.log((this as any).path);
           this.$router.replace((this as any).path)
       }
    }
})
</script> 


<style scoped>
    .active {
        color:whitesmoke;
        background-color:darkorange
    }
</style>