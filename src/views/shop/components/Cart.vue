<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png" class="ckeck__icon__img" alt="">
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">
        总计：<span class="ckeck__info__price">&yen; 128</span>
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
  height: 49px;
  background-color: #666;
}
.check {
  display: flex;
  &__icon {
    position: relative;
    text-align: center;
    line-height: 49px;
    width: 84px;
    img {
      width: 28px;
      height: 26px;
    }
    &__tag {
      position: absolute;
      right: 20px;
      top: 3px;
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
}
</style>
