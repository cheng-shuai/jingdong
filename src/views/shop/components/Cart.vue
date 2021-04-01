<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png" class="ckeck__icon__img" alt="">
        <div class="check__icon__tag">{{totalCount}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{totalPrice}}</span>
      </div>
      <div class="check__btn">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

// 计算购物车商品的数量和价格
const productCount = () => {
  const route = useRoute()
  const store = useStore()
  const shopId = route.params.id
  const cartList = store.state.cartList
  const totalCount = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })
  const totalPrice = computed(() => {
    const productList = cartList[shopId]
    let price = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        price += product.count * product.price
      }
    }
    return price.toFixed(2)
  })
  return { totalCount, totalPrice }
}

export default {
  name: 'Cart',
  setup () {
    const { totalCount, totalPrice } = productCount()
    return { totalCount, totalPrice }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
}
.check {
  display: flex;
  &__icon {
    position: relative;
    width: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 28px;
      height: 26px;
    }
    &__tag {
      position: absolute;
      top: 7px;
      left: 50px;
      min-width: 15px;
      height: 15px;
      border-radius: 15px;
      background-color: #E93B3B;
      font-size: 10px;
      text-align: center;
      line-height: 15px;
      color: #fff;
    }
  }
  &__info {
    flex: 1;
    font-size: 12px;
    color: #333;
    line-height: 49px;
    &__price {
      font-size: 18px;
      line-height: 49px;
      color: #E93B3B;
    }
  }
  &__btn {
    width: 98px;
    font-size: 14px;
    line-height: 49px;
    color: #FFFFFF;
    text-align: center;
    background-color: #4FB0F9;
  }
}
</style>
