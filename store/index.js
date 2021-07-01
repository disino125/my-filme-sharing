import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state:{
        cartList:[],
    
    },
    mutations:{
        addCart(state,playload){
           let item = state.cartList.find(product=>{
               return product.id === playload.id
           })

           if(item){
               item.count++
           }else {
               playload.check = false
               state.cartList.push(playload)
           }
        }
    },
    getters:{
        cartLength(state){
            return state.cartList.length
        },
        cartList(state) {
            return state.cartList
        }
    },
    actions:{

    }
})

export default store