import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import createPersistedState from "vuex-persistedstate"
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    count: 0,
    list:[],
    item:{},
    cartData:[]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setItem(state,index){
      state.item = this.list[index]
    },
    setList(state,data){
      state.list = data
    },
    setCartData(state,item){
      state.cartData.push(item)

    },
    add(state,index){
       state.cartData[index].num++

    },
    minus(state,index){
       if(state.cartData[index].num<=1){
         state.cartData[index].num = 1
       }else{
         state.cartData[index].num--
       }

    },
    remove(state,index){
      state.cartData.splice(index,1)

    }
  },
  getters:{
   totalPrice:(state)=>{
   let price = 0
   state.cartData.forEach((item,index)=>{
     price+=item.num*item.price
   })
   return price
   },
   // totalNum:(state)=>{
   //    return state.cartData.reduce((count,item)=>count+=item.num,0);

   // }
   totalNum:(state)=>{
     // let total = 0
     return state.cartData.reduce((total,item)=>{
       // console.log(item,total)
         return total+=item.num
     },0)


   }
  },

})
export default store;
