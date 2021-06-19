<template>
  <div class="box2">
    <nav-bar></nav-bar>
    <div class="flex justify-center "><swiper></swiper></div>
    <div class="container"> 
      <div v-for="cate,index in categories"
      :cateName="cate"
      :key="index" class="grid justify-items-center">
        <tv-list :filmList="tvItemList" :cateName="cate" class="p-8"/>
      
      </div>
      
    </div>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'
import navBar from '~/components/Home/FilmeNavBar.vue'
import filmRow from '~/components/filmRow.vue'
import swiper from '~/components/Commen/swiper.vue'
import tvList from '~/components/Home/FilmList.vue'
import axios from 'axios'


export default Vue.extend({
  components: 
  { navBar,
    filmRow,
    swiper,
    tvList
   },
  data: () => {
    return {
      movies: [
        {
          id: 0,
          title: 'bla',
          description: 'blub',
        },
        {
          id: 1,
          title: 'bla1',
          description: 'blub1',
        },
      ],
      tvItemList:[],
      categories:['Neue TVs','Action','Comedy','History','Sport']
    }
  },
  created(){
    this.getTvList()
  },
  methods:{
    async getTvList(){
        // request({
        //   url:'https://api.npoint.io/6854f40b630b30e24ccb'
        // },
        //   (res: { data: Object })=>{
        //   this.filmItemList = res.data.filmList
        // })
        let {data:res} = await axios.get('api/filmList')
        for(let i = 0;i<8;i++){
          this.tvItemList.push(res.data[i])
        }
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 10px;
}

.box2 {
  height: calc(100% - 150px);
  margin-top: 150px;
  overflow-y: auto;
}


</style>
