<template>
  <div>
    <SearchView/>
    <div id="index" class="index list">
      <div class="banner">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in banners" :key="index">
            <van-image :src="image.cover" fit="content" />
          </van-swipe-item>
        </van-swipe>
    </div>
        <van-grid :border="false" :column-num="4">
            <van-grid-item v-for="item in types" :key="item" :title="item" :to="{ path: '/vaccine-list', query: { vid: item.id}}">
                <van-image :src="item.icon" width="60" height="60" />
                <div class="title">{{item.title}}</div>
                <div class="title2">{{item.tag}}</div>
            </van-grid-item>
        </van-grid>
        <div class="nav">
          <van-image :src="childNav" width="163" height="58" />
          <van-image :src="adultNav" width="163" height="58" />
        </div>
    </div>
    <div class="wiki">
        <div class="header">
          <span style="font-weight:bold;font-size: 20px;margin-left: 20px">健康百科</span>
          <span style="margin-left: auto;margin-right: 30px;color:#999999;font-size: 16px">进入&gt;</span>
        </div>
        <div style="display: flex;justify-content: space-between">
          <van-image :src="articleImg" width="30%"  height="90" />
          <van-image :src="videoImg"  width="30%" height="90" />
          <van-image :src="wikiImg" width="30%" height="90" />
        </div>
    </div>

    <div class="wiki" style="height: auto">
      <div class="header">
          <van-image :src="bottomArticleImg" height="20.5" style="margin-left: 20px"/>
      </div>
      <div class="article-list"  v-for="item in tips" :key="item" >
      <router-link  :to="{ path: '/article-view', query: { id: item.id}}">
        <div class="item" >
          <div class="text">
            <div class="title">{{item.title}}</div>
            <div class="sub-title van-ellipsis"></div>
          </div>
          <div class="img">
            <van-image :src="item.cover" width="92" height="78"/>
          </div>
        </div>
      </router-link>
      </div>
    </div>
    <TabbarView/>

  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import TabbarView from '@/components/TabbarView.vue'
import SearchView from '@/components/SearchView.vue'
import { Grid, GridItem, Image as VanImage, Swipe, SwipeItem } from 'vant'
import { indexData } from '@/utils/api'
import childNav from '@/assets/img/index_child.png'
import adultNav from '@/assets/img/index_adult.png'
import articleImg from '@/assets/img/index_article.png'
import videoImg from '@/assets/img/index_video.png'
import wikiImg from '@/assets/img/index_wiki.png'
import bottomArticleImg from '@/assets/img/index_bottom_article.png'

export default {
  name: 'HomeView',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [VanImage.name]: VanImage,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    TabbarView,
    SearchView
  },
  setup () {
    const types = ref([])
    const banners = ref([])
    const tips = ref([])
    indexData().then(data => {
      types.value = data.types
      banners.value = data.top
      tips.value = data.bottom
    })
    return {
      types,
      banners,
      tips,
      childNav,
      adultNav,
      articleImg,
      videoImg,
      wikiImg,
      bottomArticleImg
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
.nav{display: flex;justify-content: space-between;padding: 16px 16px 16px 16px}

.wiki{
  margin-top: 16px;
  height: 146px;
  background: #fff;
  border-radius: 14px;
  padding-bottom: 20px;
}
.wiki .header{
  height: 60px;
  display: flex;
  align-items: center;

}
.wiki .header span{
  display: inline-flex;
}
.article-list .item{
  height: 100px;
  display: flex;
  justify-content: space-between
}
.article-list .item .title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 9px;
}
.article-list .item .sub-title {
  color: #767D7B;
  font-size: 14px;
}
</style>
