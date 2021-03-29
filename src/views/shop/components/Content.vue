<template>
  <div class="content">
    <div class="category">
      <div
        class="category__item"
        :class="{'category__item--active': activeTab == item.tab}"
        v-for="(item, index) in categoryList"
        :key="index"
        @click="onChangeCategory(item.tab)"
      >{{item.name}}</div>
    </div>
    <div class="product">
      <div class="product__item" v-for="(item, index) in productList" :key="index">
        <div class="product__item__img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="product__item__content">
          <div class="product__item__content__name">{{item.name}}</div>
          <div class="product__item__content__sale">月售{{item.sales}}件</div>
          <div class="product__item__content__price">
            <span class="product__item__content__yen">&yen;{{item.price}}</span>
            <span class="product__item__content__origin">&yen;{{item.oldPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '@/utils/request'

// 获取商品列表
const useGetProductItem = () => {
  const route = useRoute()
  const data = reactive({
    productList: {}
  })
  const getProductItem = async (tab) => {
    const result = await get(`api/shop/${route.params.id}/products`, { tab })
    data.productList = result.data.data
    console.log(tab)
  }
  const { productList } = toRefs(data)
  return { getProductItem, productList }
}

// 更换商品分类
const useOnChangeCategory = () => {
  const { getProductItem } = useGetProductItem()
  const data = reactive({
    activeTab: 'all'
  })
  const onChangeCategory = (tab) => {
    data.activeTab = tab
    getProductItem(tab)
  }
  const { activeTab } = toRefs(data)
  return { activeTab, onChangeCategory }
}

export default {
  name: 'Content',
  setup () {
    const categoryList = [
      {
        name: '全部商品',
        tab: 'all'
      }, {
        name: '秒杀',
        tab: 'seckill'
      }, {
        name: '新鲜水果',
        tab: 'fruit'
      }
    ]
    const { onChangeCategory, activeTab } = useOnChangeCategory()
    const { getProductItem, productList } = useGetProductItem()
    getProductItem(activeTab)
    return { categoryList, activeTab, onChangeCategory, productList }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  top: 142px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.category {
  overflow-y: auto;
  width: 76px;
  background-color: #F5F5F5;
  &__item {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
    text-align: center;
    &--active {
      background-color: #fff;
    }
  }
}
.product {
  flex: 1;
  margin-top: 8px;
  overflow-y: auto;
  &__item {
    margin: 8px 16px 8px 16px;
    display: flex;
    height: 68px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f1f1f1;
    &__img {
      width: 68px;
      height: 68px;
      margin-right: 16px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__content {
      &__name {
        height: 20px;
        font-weight: 700;
        font-size: 14px;
        color: #333;
      }
      &__sale {
        height: 16px;
        margin: 6px 0;
        font-size: 12px;
        color: #333;
      }
      &__price {
        height: 20px;
        display: flex;
        align-items: center;
      }
      &__yen {
        font-size: 14px;
        color: #E93B3B;
      }
      &__origin {
        margin-left: 6px;
        font-size: 10px;
        color: #999;
        text-decoration-line: line-through;
      }
    }
  }
}
</style>
