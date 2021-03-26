<template>
  <div class="staticpart">
    <div class="staticpart__position">
        <div class="iconfont icon-position"></div>
        <div class="staticpart__position__title">北京理工大学国防科技园2号楼10层</div>
        <div class="iconfont icon-bell"></div>
      </div>
      <div class="staticpart__search">
        <i class="iconfont icon-search"></i>
        <div class="staticpart__search__text">
          山姆会员商店优惠商品
        </div>
      </div>
      <div class="staticpart__banner">
        <img class="staticpart__banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
      </div>
      <div class="staticpart__icons">
        <div class="staticpart__icons__item" v-for="(item, index) in allList" :key="index">
          <div class="staticpart__icons__item__img">
            <img :src="item.img" alt="">
          </div>
          <div class="staticpart__icons__item__text">{{item.text}}</div>
        </div>
      </div>
      <div class="staticpart__gap"></div>
  </div>
</template>

<script>
export default {
  name: 'StaticPart',
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

<style lang="scss" scoped>
.staticpart {
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
}
</style>
