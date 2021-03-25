<template>
  <div id="nav">
    <div class="docker">
      <div class="docker__item docker--active">
        <div class="iconfont icon-Home"></div>
        <div class="docker__item__title">首页</div>
      </div>
      <div class="docker__item">
        <div class="iconfont icon-cart"></div>
        <div class="docker__item__title">购物车</div>
      </div>
      <div class="docker__item">
        <div class="iconfont icon-order"></div>
        <div class="docker__item__title">订单</div>
      </div>
      <div class="docker__item">
        <div class="iconfont icon-my"></div>
        <div class="docker__item__title">我的</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.docker {
  display: flex;
  position: absolute;
  padding: 0 .18rem;
  bottom: 0;
  height: .49rem;
  width: 100%;
  border: 1px solid #F1F1F1;
  box-shadow: 0 -1px 1px 0 #F1F1F1;
  box-sizing: border-box;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: 0.2rem;
      padding: .07rem 0 .02rem 0;
    }
    &__title {
      font-size: 20px;
      transform: scale(.5, .5);
      transform-origin: center top;
    }
  }
  &--active {
    color: #1FA4FC;
  }
}
</style>
