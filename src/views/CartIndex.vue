<template>
  <div class="index-wrapper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/img/111.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
         <img src="../assets/img/222.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
         <img src="../assets/img/333.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
         <img src="../assets/img/111.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
    <ul class="list">
    	<li v-for="item,index in $store.state.list" :key="index" class="item" @click="toDetail(index)">
        <img :src="item.img" alt="">
        <div class="info">
          <div class="name">{{item.name}}</div>
          <div class="price">{{item.price}}</div>
          <div class="color">{{item.color}}</div>
          <button @click.stop="buy(index,item)">加入购物车</button>
        </div>
      </li>
    </ul>
	<transition name="slide">
	  <router-view></router-view>
	</transition>

  </div>
</template>

<script>
  import axios from 'axios'
export default{
  data(){
    return{
      show:false
    }
  },

  created(){
    axios.get('/static/data/allGoods.json').then((data)=>{
      this.$store.commit('setList',data.data.list)
    })
  },
  methods:{
    buy(index,item){
      this.$dialog.alert({
        message: '成功加入购物车',
      }).then(() => {
        let arr = this.$store.state.cartData;
        let i =  arr.findIndex((item1)=>{
            return item1.pid===item.pid
         })
         if(i==-1){
           this.$store.commit('setCartData',item)
         }else{
           this.$store.commit('add',i)
         }
      });
      


    },
    toDetail(id){
      // console.log(id)
      this.$router.push('/detail/'+id)
    }
  }
}
</script>

<style scoped>
  .list{
    padding:0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
  }
  .list .item{
    width: 49%;
    height:auto;
  }
  .list .item img{
    width: 100%;
    height: auto;
  }

.list .item .info{
  line-height: 30px;
}
.van-swipe img{
  width: 100%;
  height: 150px;
}
.slide-enter{
    transform: translateX(100%);
  }
.slide-enter-active,.slide-leave-active{
  transition: .2s;
}
.slide-leave-to{
  transform: translateX(100%);
}
</style>
