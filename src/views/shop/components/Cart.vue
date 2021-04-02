<template>
  <div class="cart">
    <div class="product">
      <template
        v-for="(item, index) in productList"
        :key="index"
      >
        <div
          class="product__item"
          v-if="item.count > 0"
        >
          <div class="product__item__img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="product__item__content">
            <div class="product__item__content__name">{{item.name}}</div>
            <div class="product__item__content__price">
              <span class="product__item__content__yen">&yen;{{item.price}}</span>
              <span class="product__item__content__origin">&yen;{{item.oldPrice}}</span>
              <div class="product__item__content__mins" @click="changeCartInfo(shopId, item._id, item, -1)">-</div>
              <div class="product__item__content__num">{{item.count || 0}}</div>
              <div class="product__item__content__plus" @click="changeCartInfo(shopId, item._id, item, 1)">+</div>
            </div>
          </div>
        </div>
      </template>
    </div>
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
  const productList = computed(() => {
    const productList = cartList[shopId]
    return productList
  })
  const changeCartInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartInfo', { shopId, productId, productInfo, num })
  }
  return { totalCount, totalPrice, shopId, productList, changeCartInfo }
}

export default {
  name: 'Cart',
  setup () {
    const { totalCount, totalPrice, productList, shopId, changeCartInfo } = productCount()
    return { totalCount, totalPrice, productList, shopId, changeCartInfo }
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
.product {
  background-color: #fff;
  flex: 1;
  margin-top: 8px;
  overflow-y: auto;
  &__item {
    margin: 8px 16px 8px 16px;
    display: flex;
    height: 62px;
    border-bottom: 1px solid #f1f1f1;
    &__img {
      width: 46px;
      height: 46px;
      margin-right: 16px;
      img {
        width: 46px;
        height: 46px;
      }
    }
    &__content {
      font-size: 14px;
      color: #666;
      &__name {
        height: 20px;
        font-weight: 700;
        font-size: 14px;
        color: #333;
      }
      &__sale {
        height: 16px;
        margin: 6px 0;
        font-size: 12px;
        color: #333;
      }
      &__price {
        height: 20px;
        display: flex;
        align-items: center;
      }
      &__yen {
        font-size: 14px;
        color: #E93B3B;
      }
      &__origin {
        margin-left: 6px;
        font-size: 10px;
        color: #999;
        text-decoration-line: line-through;
      }
      &__mins,
      &__plus{
        border-radius: 50%;
        font-size: 20px;
        text-align: center;
        line-height: 20px;
        position: absolute;
      }
      &__mins {
        right: 65px;
        width: 19px;
        height: 19px;border: 1px solid #666;
      }
      &__plus {
        right: 18px;
        width: 20px;
        height: 20px;
        color: #fff;
        background-color: #0091FF;
      }
      &__num {
        position: absolute;
        right: 48px;
      }
    }
  }
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
