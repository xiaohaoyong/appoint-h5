<template>
  <div class="my">
        <div class="my-header">
          <div class="header-img">
              <van-image
                      round
                      width="7.14rem"
                      height="7.14rem"
                      src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
          </div>
          <div class="name">汪振</div>
        </div>
        <div class="grid">
            <van-grid square :border="false" :clickable="true" :column-num="3">
                <van-grid-item
                        icon="/img/my_item2.png"
                        text="我的订单" to="/appoint-list"></van-grid-item>
                <van-grid-item
                        icon="/img/my_item3.png"
                        text="我的信息" to="/contacts-list"></van-grid-item>
                <van-grid-item
                        icon="/img/my_item4.png"
                        text="客服" url="https://openai.weixin.qq.com/webapp/vwqwKupCzteyG2ahL7tBKgfAsgWynM?robotName=%E5%84%BF%E5%AE%9D%E5%AE%9D%E5%B0%8F%E5%8A%A9%E6%89%8B"></van-grid-item>
            </van-grid>
        </div>
                        <ArticleView/>

    <TabbarView/>
  </div>
</template>

<script>
// @ is an alias to /src

import TabbarView from '@/components/TabbarView.vue'
import ArticleView from '@/components/ArticleView.vue'

import { Grid, GridItem, Image as VanImage, Search } from 'vant'

export default {
  name: 'MyView',
  components: {
    [GridItem.name]: GridItem,
    [Grid.name]: Grid,
    [VanImage.name]: VanImage,
    [Search.name]: Search,
    ArticleView,
    TabbarView
  }
}
</script>
<style>
.my .my-header{display: flex;flex-direction: column;justify-content: center;align-items: center;margin-top: 1.86rem;}
.my .my-header .name{font-size: 1.29rem;line-height: 1.79rem;}
.my .grid{margin: 1.14rem;background: #FFFFFF;border-radius: 0.71rem;padding: 0.35rem}
</style>
