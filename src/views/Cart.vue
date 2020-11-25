<template>
  <div class="cart">
      <ul class="list">
      	<li v-for="item,index in $store.state.cartData" :key="index" class="item">
          <img :src="item.img" alt="">
          <div class="info">
            <div class="color">{{item.color}}</div>
            <div class="price">￥{{item.price}}</div>
            <div class="num">
              <button @click="minusNum(index)">-</button>
              {{item.num}}
              <button @click="addNum(index)">+</button>
            </div>
          </div>
          <span @click="remove(index)">X</span>
        </li>
      </ul>
      <div class="totalPrice">总价格为{{$store.getters.totalPrice}}</div>
      <div class="totalNum">总数量为{{$store.getters.totalNum}}</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        data(){

        }
      }
    },
    created(){
      // console.log(this.$store.getters.totalPrice)
    },
    methods:{
      minusNum(index){
        this.$store.commit('minus',index)
      },
      addNum(index){
        this.$store.commit('add',index)
      },
      remove(index){
        this.$store.commit('remove',index)
      }
    }

  }
</script>

<style scoped>
.list .item{
  width:100%;
  display: flex;
  align-items:center;
  border-bottom: 1px solid #ccc;
}
.list .item img{
  width: 150px;
  height:150px;
}
.list .item .info{
  flex: 1;
  display:flex;
  justify-content: space-around;
}
</style>
