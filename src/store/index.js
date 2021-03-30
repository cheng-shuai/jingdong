import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // 第一层是商铺的id
      // shopId: {
      //   // 第二层是商品的id
      //   // 第二层内容是商品内容以及购物数量
      //   productId: {
      //     _id: '1',
      //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/orange.png',
      //     name: '橙子 500g/份',
      //     oldPrice: 22.6,
      //     price: 12.6,
      //     sales: 110,
      //     count: 10
      //   }
      // }
    }
  },
  mutations: {
    addCount (state, playload) {
      const { shopId, productId, productInfo } = playload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = {} }
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += 1
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
      console.log(shopId, productId, productInfo)
    }
  },
  actions: {
  },
  modules: {
  }
})
