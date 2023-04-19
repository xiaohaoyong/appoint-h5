<template>
    <div class="article-list">
        <div class="list">
            <router-link  v-for="item in list" :key="item"  :to="{ path: '/article-view', query: { id: item.id}}">
                <div class="item">
                    <van-image
                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                    />
                    <div class="title">
                        <div>{{item.title}}</div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import { Image as VanImage } from 'vant'

// @ is an alias to /src
export default {
  name: 'ArticleListCom',
  components: {
    VanImage
  },
  props: ['list'],
  methods: {},
  data () {}
}
</script>
<style>
.article-list{padding: 16px;}
.article-list .list .item{padding: 16px; background-color: #fff;border-radius: 14px; margin-bottom: 16px;}
.article-list .list .title{font-size: 13px;font-weight: bold;color: #000000;padding-top: 15px;}
</style>
