<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png" class="ckeck__icon__img" alt="">
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; 128</span>
      </div>
      <div class="check__btn">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart'
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
      right: 19px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
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
