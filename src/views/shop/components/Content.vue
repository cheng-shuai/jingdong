<template>
  <div class="content">
    <div class="category">
      <div class="category__item category__item--active">全部商品</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product__item">
        <div class="product__item__img">
          <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
        </div>
        <div class="product__item__content">
          <div class="product__item__content__name">番茄250g/份</div>
          <div class="product__item__content__sale">月售10件</div>
          <div class="product__item__content__price">
            <span class="product__item__content__yen">&yen;33.6</span>
            <span class="product__item__content__origin">&yen;34.6</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  top: 142px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.category {
  overflow-y: auto;
  width: 76px;
  background-color: #F5F5F5;
  &__item {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
    text-align: center;
    &--active {
      background-color: #fff;
    }
  }
}
.product {
  flex: 1;
  margin-top: 8px;
  overflow-y: auto;
  &__item {
    margin: 8px 16px 8px 16px;
    display: flex;
    height: 68px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f1f1f1;
    &__img {
      width: 68px;
      height: 68px;
      margin-right: 16px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__content {
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
    }
  }
}
</style>
