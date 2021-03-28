<template>
  <div class="shop">
    <div class="shop__img">
      <img :src="item.imgUrl" alt="">
    </div>
    <div class="shop__content">
      <div class="shop__content__title">{{item.name}}</div>
      <div class="shop__content__tag">
        <span>月售:{{item.sales}}</span>
        <span>起送:{{item.expressLimit}}</span>
        <span>基础运费:{{item.expressPrice}}</span>
      </div>
      <div class="shop__content__hint">
        {{item.slogan}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  name: 'ShopInfo'
}
</script>

<style lang="scss" scoped>
.shop {
  margin-top: 14px;
  display: flex;
  &__img {
    width: 56px;
    height: 56px;
    margin-right: 16px;
    img {
      height: 56px;
    }
  }
  &__content {
    padding-bottom: 12px;
    border-bottom: 1px solid #F1F1F1;
    &__title {
      font-size: 16px;
      font-weight: 600;
      color: #333333;
    }
    &__tag {
      margin-top: 8px;
      font-size: 13px;
      color: #333;
      span {
        margin-right: 16px;
      }
    }
    &__hint {
      margin-top: 8px;
      font-size: 13px;
      color: #E93B3B;
    }
  }
}
</style>
