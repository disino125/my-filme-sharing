<template>
    <div class="box">
        <!-- <transition-group name="swiper" class="flex box"> -->
            <div 
            v-for="(img) in sliderList" 
            :key="img.id"
            @mouseover="stop" 
            @mouseleave="start"
            class="animation"
            ref="sc"> 
                <a>
                    <!-- <img :src="img.url" 
                    class="max-w-2xl"> -->
                    <img :src="img.url" 
                    class="max-w-4xl">
                </a>
            </div>     
        <!-- </transition-group>    -->
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    data(){
        return {
            sliderList:[
                {id:1,url:'/1.jpg'},
                {id:2,url:'/2.jpg'},
                {id:3,url:'/3.jpg'},
                {id:4,url:'/1.jpg'}
            ],
            timer:''
            
        }
    },
    mounted(){
        setTimeout(this.start,1500)
    },
    computed:{
        
    },
    methods:{
        
        stop(){
            let array = this.$refs.sc
            for (let index = 0; index < array.length; index++) {
               array[index].style.animationPlayState = 'paused'
                
            } 
        },
        start(){
            let array = this.$refs.sc
            for (let index = 0; index < array.length; index++) {
               array[index].style.animationPlayState = 'running'
                
            }
            
        },
    }
})


</script>

<style scoped>
   @keyframes move {
       0%,22.2% {
           transform: translateX(0px);    
       }
       33.3% {
           transform: translateX(-896px);
       }
       33.3%,55.5% {
           transform: translateX(-896px);
       }
       66.6% {
           transform: translateX(-1792px);
       }
       66.6%,88.8%{
           transform: translateX(-1792px);
       }
       100% {
           transform: translateX(-2688px);
       }
   }

   .animation {
       animation: move 9s ease infinite normal backwards;
       z-index: -1;
   }
   .box {
       height: 560px;
       width: 894px;
       overflow-x: hidden;
       display: flex; 
   }

   
</style>