<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back" @click="handBackClick">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="search__content">
        <div class="search__content__icon">
          <i class="iconfont icon-search"></i>
        </div>
        <div class="search__content__input">
          <input type="text" placeholder="请输入商品名称搜索" />
        </div>
      </div>
    </div>
    <shop-info :item="data.item" :hideBorder="true" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '@/utils/request'
import ShopInfo from '../../components/ShopInfo.vue'

// 获取商铺的信息
const getShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({
    item: {}
  })
  const getItemData = async () => {
    const result = await get(`api/shop/${route.params.id}`)
    data.item = result.data.data
  }
  return { getItemData, data }
}

// 返回按钮
const backClickEffect = () => {
  const router = useRouter()
  const handBackClick = () => {
    router.back()
  }
  return { handBackClick }
}
export default {
  components: { ShopInfo },
  name: 'Shop',
  setup () {
    const { getItemData, data } = getShopInfoEffect()
    const { handBackClick } = backClickEffect()
    getItemData()
    return { data, handBackClick }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 18px;
}
.search {
  display: flex;
  margin: 16px 0;
  &__back {
    height: 32px;
    line-height: 32px;
    margin-right: 16px;
    .iconfont {
      font-size: 22px;
      color: #B6B6B6;
    }
  }
  &__content {
    display: flex;
    width: 310px;
    background-color: #F5F5F5;
    border-radius: 16px;
    &__icon {
      margin-left: 16px;
      line-height: 32px;
      .iconfont {
        font-size: 18px;
        color: #B7B7B7;
      }
    }
    &__input {
      flex: 1;
      margin-right: 14px;
      input {
        width: 100%;
        background: none;
        outline: none;
        border: none;
        font-size: 14px;
        text-indent: 14px;
        height: 32px;
      }
    }
  }
}
</style>
