<template>
  <div class="nearby">
    <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <div class="nearby__item" v-for="(item, index) in nearbyList" :key="index">
          <div class="nearby__item__img">
            <img :src="item.img" alt="">
          </div>
          <div class="nearby__item__content">
            <div class="nearby__item__content__title">{{item.title}}</div>
            <div class="nearby__item__content__tag">
              <span v-for="(tag, index) in item.tags" :key="index">{{tag}}</span>
            </div>
            <div class="nearby__item__content__hint">
              {{item.hint}}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [
      {
        img: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        hint: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        hint: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        hint: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        hint: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        hint: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
.nearby {
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
</style>
