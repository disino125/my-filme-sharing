<template>
    <div class="box2">
        <nav-bar></nav-bar>
        <h3>TV Shows</h3>
        <button @click="getTvs" class="bg-gray-700">getTvList</button>
    </div>
</template>

<script>
import Vue from 'vue'
import navBar from '~/components/Home/FilmeNavBar.vue'
import axios from 'axios'

export default Vue.extend({
    components:{
        navBar
    },
    data(){
        return {
            data:Array
        }
    },
    methods:{
        async getTvs(){
            let {data:res} = await axios.get('api/tvList')
            this.data = res.data
            console.log(this.data);
        }
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