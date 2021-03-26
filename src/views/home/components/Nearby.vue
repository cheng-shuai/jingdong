<template>
  <div class="nearby">
    <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <div class="nearby__item">
          <div class="nearby__item__img">
            <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          </div>
          <div class="nearby__item__content">
            <div class="nearby__item__content__title">沃尔玛</div>
            <div class="nearby__item__content__tag">
              <span>月售1万+</span>
              <span>月售1万+</span>
              <span>月售1万+</span>
            </div>
            <div class="nearby__item__content__hint">
              VIP尊享满89元减4元运费券（每月3张）
            </div>
          </div>
        </div>
        <div class="nearby__item">
          <div class="nearby__item__img">
            <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          </div>
          <div class="nearby__item__content">
            <div class="nearby__item__content__title">沃尔玛</div>
            <div class="nearby__item__content__tag">
              <span>月售1万+</span>
              <span>月售1万+</span>
              <span>月售1万+</span>
            </div>
            <div class="nearby__item__content__hint">
              VIP尊享满89元减4元运费券（每月3张）
            </div>
          </div>
        </div>
        <div class="nearby__item">
          <div class="nearby__item__img">
            <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          </div>
          <div class="nearby__item__content">
            <div class="nearby__item__content__title">沃尔玛</div>
            <div class="nearby__item__content__tag">
              <span>月售1万+</span>
              <span>月售1万+</span>
              <span>月售1万+</span>
            </div>
            <div class="nearby__item__content__hint">
              VIP尊享满89元减4元运费券（每月3张）
            </div>
          </div>
        </div>
        <div class="nearby__item">
          <div class="nearby__item__img">
            <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
          </div>
          <div class="nearby__item__content">
            <div class="nearby__item__content__title">沃尔玛</div>
            <div class="nearby__item__content__tag">
              <span>月售1万+</span>
              <span>月售1万+</span>
              <span>月售1万+</span>
            </div>
            <div class="nearby__item__content__hint">
              VIP尊享满89元减4元运费券（每月3张）
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby'
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
