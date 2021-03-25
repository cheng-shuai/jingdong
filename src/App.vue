<template>
  <div id="nav">
    <div class="wrapper">
      <div class="wrapper__position">
        <div class="iconfont icon-position"></div>
        <div class="wrapper__position__title">北京理工大学国防科技园2号楼10层</div>
        <div class="iconfont icon-bell"></div>
      </div>
      <div class="wrapper__search">
        <i class="iconfont icon-search"></i>
        <div class="wrapper__search__text">
          山姆会员商店优惠商品
        </div>
      </div>
      <div class="wrapper__banner">
        <img class="wrapper__banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
      </div>
    </div>
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
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  &__position {
    height: 22px;
    margin: 16px 18px;
    display: flex;
    justify-content: space-between;
    &__title {
      font-size: 16px;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0 8px;
    }
  }
  &__search {
    display: flex;
    align-items: center;
    height: 32px;
    margin: 0 18px 12px 18px;
    background: #F5F5F5;
    border-radius: 16px;
    .iconfont {
      margin-left: 16px;
      color: #B7B7B7;
    }
    &__text {
      margin-left: 12px;
      font-size: 14px;
      color: #B7B7B7;
    }
  }
  &__banner {
    width: 339px;
    height: 86px;
    margin: 0 auto;
    margin-bottom: 16px;
    &__img {
      width: 100%;
    }
  }
}
.docker {
  display: flex;
  position: absolute;
  padding: 0 18px;
  bottom: 0;
  height: 49px;
  width: 100%;
  border: 1px solid #F1F1F1;
  box-shadow: 0 -1px 1px 0 #F1F1F1;
  box-sizing: border-box;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: 20px;
      padding: 7px 0 2px 0;
    }
    &__title {
      font-size: 10px;
    }
  }
  &--active {
    color: #1FA4FC;
  }
}
</style>
