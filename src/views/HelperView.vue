<template>
  <div class="helper">
            <div class="header">
            <div class="search">
                <van-search
                        shape="round"
                        background="linear-gradient(112deg, #00B386 0%, #32CBC7 100%)"
                        placeholder="请输入搜索关键词"
                        input-align="center"

                />

            </div>
            <div class="content">
                <div class="text">
                    <div class="text1">儿宝宝约苗</div>
                    <div class="text2">安全有效的疫苗是预防疾病最有力的武器</div>
                </div>
                <div class="img">
                    <van-image
                            width="6rem"
                            height="6.36rem"
                            src="/img/san.png"
                    />
                </div>
            </div>
            <div class="grid">
                <van-grid square :border="false" :clickable="true"  :column-num="3">
                    <van-grid-item
                            icon="/img/yuedu.png"
                            text="文章" to="/article-list"></van-grid-item>
                    <van-grid-item
                            icon="/img/shipin.png"
                            text="视频" to="/article-list"></van-grid-item>
                    <van-grid-item
                            icon="/img/kecheng.png"
                            text="课程" to="/article-list"></van-grid-item>
                </van-grid>
            </div>
        </div>
                <ArticleView/>

    <TabbarView/>
  </div>
</template>

<script>
// @ is an alias to /src

import TabbarView from '@/components/TabbarView.vue'
import ArticleView from '@/components/ArticleView.vue'

import { Grid, GridItem, Image as VanImage } from 'vant'

export default {
  name: 'HelperView',
  components: {
    TabbarView,
    ArticleView,
    [GridItem.name]: GridItem,
    [Grid.name]: Grid,
    [VanImage.name]: VanImage
  }
}
</script>
<style>
.helper .header{background: linear-gradient(112deg, #00B386 0%, #32CBC7 100%);}
.helper .header .content{display: flex;justify-content:space-between;padding: 1.21rem 1.21rem 1.46rem 1.68rem;font-size: 0.71rem;color: #ffffff;}
.helper .header .content .text1{font-size: 1.71rem;margin-top: 1.11rem}
.helper .header .content .text2{font-size: 0.86rem;line-height: 1.18rem;}
.helper .header .content .text3{font-size: 0.71rem; margin-top: 0.57rem}
.helper .header .content .text3 span {font-size: 2.86rem;}
.grid{margin: 1.14rem;background: #FFFFFF;border-radius: 0.71rem;padding: 0.35rem}

</style>
