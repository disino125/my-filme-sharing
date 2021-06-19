<template>
    <div class="box2">
        <nav-bar :cateName="$route.query.cateName"></nav-bar>
        <tv-list :filmList="tvList"></tv-list>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import navBar from '~/components/Home/KategorieNavBar.vue'
import tvList from '~/components/Home/FilmList.vue'
import axios from 'axios'

export default Vue.extend({
    components:{
        navBar,
        tvList
    },
    data:()=>{
        return {
            tvList:[],
        }
    },
    created(){
        this.getTVs(this.$route.query.cateName)
    },
    methods:{
        async getTVs(cate: any){
            const {data:res} = await axios.get(`api/tvList/${cate}`)
            this.tvList = res.data
            console.log(res.data);
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