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
      <div class="wrapper__icons">
        <div class="wrapper__icons__item" v-for="(item, index) in allList" :key="index">
          <div class="wrapper__icons__item__img">
            <img :src="item.img" alt="">
          </div>
          <div class="wrapper__icons__item__text">{{item.text}}</div>
        </div>
      </div>
      <div class="wrapper__gap"></div>
      <div class="wrapper__nearby">
        <h3 class="wrapper__nearby__title">附近店铺</h3>
        <div class="wrapper__nearby__item">
          <div class="wrapper__nearby__item__img">
            <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          </div>
          <div class="wrapper__nearby__item__content">
            <div class="wrapper__nearby__item__content__title">沃尔玛</div>
            <div class="wrapper__nearby__item__content__tag">
              <span>月售1万+</span>
              <span>月售1万+</span>
              <span>月售1万+</span>
            </div>
            <div class="wrapper__nearby__item__content__hint">
              VIP尊享满89元减4元运费券（每月3张）
            </div>
          </div>
        </div>
        <div class="wrapper__nearby__item">
          <div class="wrapper__nearby__item__img">
            <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          </div>
          <div class="wrapper__nearby__item__content">
            <div class="wrapper__nearby__item__content__title">沃尔玛</div>
            <div class="wrapper__nearby__item__content__tag">
              <span>月售1万+</span>
              <span>月售1万+</span>
              <span>月售1万+</span>
            </div>
            <div class="wrapper__nearby__item__content__hint">
              VIP尊享满89元减4元运费券（每月3张）
            </div>
          </div>
        </div>
        <div class="wrapper__nearby__item">
          <div class="wrapper__nearby__item__img">
            <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          </div>
          <div class="wrapper__nearby__item__content">
            <div class="wrapper__nearby__item__content__title">沃尔玛</div>
            <div class="wrapper__nearby__item__content__tag">
              <span>月售1万+</span>
              <span>月售1万+</span>
              <span>月售1万+</span>
            </div>
            <div class="wrapper__nearby__item__content__hint">
              VIP尊享满89元减4元运费券（每月3张）
            </div>
          </div>
        </div>
        <div class="wrapper__nearby__item">
          <div class="wrapper__nearby__item__img">
            <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          </div>
          <div class="wrapper__nearby__item__content">
            <div class="wrapper__nearby__item__content__title">沃尔玛</div>
            <div class="wrapper__nearby__item__content__tag">
              <span>月售1万+</span>
              <span>月售1万+</span>
              <span>月售1万+</span>
            </div>
            <div class="wrapper__nearby__item__content__hint">
              VIP尊享满89元减4元运费券（每月3张）
            </div>
          </div>
        </div>
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

<script>
export default {
  name: 'App',
  setup () {
    const allList = [
      { img: 'http://www.dell-lee.com/imgs/vue3/超市.png', text: '超市' },
      { img: 'http://www.dell-lee.com/imgs/vue3/菜市场.png', text: '菜市场' },
      { img: 'http://www.dell-lee.com/imgs/vue3/水果店.png', text: '水果店' },
      { img: 'http://www.dell-lee.com/imgs/vue3/鲜花.png', text: '鲜花绿植' },
      { img: 'http://www.dell-lee.com/imgs/vue3/医药健康.png', text: '医药健康' },
      { img: 'http://www.dell-lee.com/imgs/vue3/家居.png', text: '家居时尚' },
      { img: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png', text: '烘培蛋糕' },
      { img: 'http://www.dell-lee.com/imgs/vue3/签到.png', text: '签到' },
      { img: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png', text: '大牌免运' },
      { img: 'http://www.dell-lee.com/imgs/vue3/红包.png', text: '红包套餐' }
    ]
    return { allList }
  }
}
</script>

<style lang="scss">
.wrapper {
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  margin: 0 18px;
  &__position {
    height: 22px;
    margin: 16px 0;
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
    margin-bottom: 12px;
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
    &__img {
      width: 100%;
    }
  }
  &__icons {
    display: flex;
    flex-wrap: wrap;
    &__item {
      margin: 0 9px;
      width: 48px;
      text-align: center;
      &__img {
        margin-top: 16px;
        img {
          width: 40px;
          height: 40px;
        }
      }
      &__text {
        font-size: 10px;
        color: #333;
      }
    }
  }
  &__gap {
    margin-top: 16px;
    margin: 16px -18px 0 -18px;
    height: 10px;
    background: #F1F1F1;
  }
  &__nearby {
    &__title {
      margin: 16px 0 2px 0;
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #333;
    }
    &__item {
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
