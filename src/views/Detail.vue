<template>
	<div class="detail-wrapper" @click="$router.back()">
	  详情{{id}}
    <img :src="item.img" alt="" width="100%">
    <div class="info">
      <div class="name">{{item.name}}</div>
      <div class="dic">{{item.dic}}</div>
      <div class="color">{{item.color}}</div>
      <div class="price">￥{{item.price}}</div>
    </div>
    <div @click.stop="addCart">加入購物車</div>
	</div>

</template>

<script>
export default{
  data(){
    return {
      id: this.$route.params.id,
      item:{}
    }
  },
  methods:{
    addCart(){
      let arr = this.$store.state.cartData;
      let i =  arr.findIndex((item1)=>{
          return item1.pid===this.item.pid
       })
       if(i==-1){
         this.$store.commit('setCartData',this.item)
       }else{
         this.$store.commit('add',i)
       }
    }
  },
  mounted(){
    this.item = this.$store.state.list[this.id]
    console.log(this.item)
  }
}
</script>

<style scoped>
  .detail-wrapper{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:#f2f2f2;
  }

.info{
  text-align: left;
  line-height: 30px;
}
.info .price{
  color:#f00;
}
</style>
