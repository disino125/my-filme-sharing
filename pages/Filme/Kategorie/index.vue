<template>
    <div class="box2">
        <nav-bar :cateName="$route.query.cateName"></nav-bar>
        <film-list :filmList="filmList"></film-list>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import navBar from '~/components/Home/KategorieNavBar.vue'
import filmList from '~/components/Home/FilmList.vue'
import axios from 'axios'

export default Vue.extend({
    components:{
        navBar,
        filmList
    },
    data:()=>{
        return {
            filmList:[],
        }
    },
    created(){
        this.getFilms(this.$route.query.cateName)
    },
    methods:{
        async getFilms(cate: any){
            const {data:res} = await axios.get(`api/filmList/${cate}`)
            this.filmList = res.data
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