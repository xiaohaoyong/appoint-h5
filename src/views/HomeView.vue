<template>
  <div>
    <SearchView/>
    <div id="index" class="index list">
      <div class="banner">
      <van-image src="/img/banner.png"/>
    </div>
        <van-grid :border="false" :column-num="4">
            <van-grid-item v-for="item in icons" :key="item" :title="item" :to="{ path: '/vaccine-list', query: { vid: item.id}}">
                <van-image :src="item.icon" width="50" height="50" />
                <div class="title">{{item.name}}</div>
                <div class="title2">{{item.name1}}</div>
            </van-grid-item>
        </van-grid>
        <div class="nav">
          <van-image src="/img/nav1.png"/>
          <van-image src="/img/nav2.png"/>

        </div>
    </div>

    <ArticleView/>

    <TabbarView/>

  </div>
</template>

<script>
// @ is an alias to /src
import TabbarView from '@/components/TabbarView.vue'
import SearchView from '@/components/SearchView.vue'
import ArticleView from '@/components/ArticleView.vue'
import { Grid, GridItem, Image as VanImage } from 'vant'

export default {
  name: 'HomeView',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [VanImage.name]: VanImage,
    TabbarView,
    SearchView,
    ArticleView
  },
  setup () {
    return {
      icons: [
        {
          id: 1,
          icon: '/img/index_item1.png',
          name: 'HPV疫苗',
          name1: '预防宫颈癌'
        },
        {
          id: 2,
          icon: '/img/index_item2.png',
          name: '流感疫苗',
          name1: '秋冬保护全家'
        },
        {
          id: 3,
          icon: '/img/index_item3.png',
          name: '新冠肺炎疫苗',
          name1: '全民接种'
        },
        {
          id: 4,
          icon: '/img/index_item4.png',
          name: '肺炎疫苗',
          name1: '儿童老人必打'
        },
        {
          id: 5,
          icon: '/img/index_item5.png',
          name: '带状疱疹疫苗',
          name1: '1/3发病率'
        },
        {
          id: 6,
          icon: '/img/index_item6.png',
          name: '乙肝疫苗',
          name1: '预防肝癌全家'
        },
        {
          id: 7,
          icon: '/img/index_item7.png',
          name: '狂犬疫苗',
          name1: '养宠物接种'
        },
        {
          id: 8,
          icon: '/img/index_item8.png',
          name: '更多疫苗',
          name1: '查看更多'
        }
      ]
    }
  }
}
</script>
<style>
.index{background: #fff; border-radius: 0px 0px 23px 23px;}
.index .title{font-size: 12px}
.index .title2{font-size: 10px;color: #999999;}
.banner{padding: 1.14rem;box-sizing: border-box;width: 100vw;}
.banner img{box-sizing: border-box;}
.nav{display: flex;justify-content: space-between;padding: 16px 16px 50px 16px}
</style>
