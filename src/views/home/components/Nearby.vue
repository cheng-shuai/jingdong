<template>
  <div class="nearby">
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <router-link :to="`/shop/${item._id}`" v-for="item in nearbyList" :key="item._id">
        <shop-info :item="item" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { get } from '@/utils/request'
import { ref } from 'vue'
import ShopInfo from '../../../components/ShopInfo.vue'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    nearbyList.value = result.data.data
  }
  return { getNearbyList, nearbyList }
}
export default {
  components: { ShopInfo },
  name: 'Nearby',
  setup () {
    const { getNearbyList, nearbyList } = useNearbyListEffect()
    getNearbyList()
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
  a {
    text-decoration: none;
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
