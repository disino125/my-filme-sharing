<template>
    <div class="bg-gray-300 w-full h-full">
        <back class="absolute left-3 top-20"/>
        <div class="h-3/4 w-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-1/2 mt-10">
                
                    
                <div class="text-center text-2xl font-bold">Password vergessen</div>
                
                
                <div class="p-5 w-full mt-5">
                    <label class="text-lg text-gray-900">Email</label> 
                    <input type="text" class="h-12 w-full mt-3 p-3"/>
                </div>

                <div class="w-full mt-3 h-14">
                    <button class="h-12 w-5/6 text-white bg-blue-500 absolute left-1/2 transform -translate-x-1/2 rounded-sm font-medium text-2xl text-center leading-relaxed">submit</button>
                </div>
            </div>
            
        </div>      
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import back from '~/components/Home/backButtom.vue'
export default Vue.extend({
    components:{
        back
    }
})
</script>

<style scoped>

</style>