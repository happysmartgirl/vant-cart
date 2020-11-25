import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import CartIndex from '@/views/CartIndex.vue'
import Cart from '@/views/Cart.vue'
import Detail from '@/views/Detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:CartIndex,
      children:[
        {
          path:'/detail/:id',
          component: Detail
        }
      ]
    },
    {
      path:'/cart',
      component:Cart
    },
    {
     path: '*',
     redirect: '/',
    },

  ]
})
