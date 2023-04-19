<template>
  <div class="article-view">
    <div class="title">{{data.title}}</div>
    <div class="info">{{data.info}}</div>
    <div class="content" v-html="data.content"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'ArticleView',
  components: {},
  created () {
    this.onLoad()
  },
  methods: {
    onLoad: function () {
      console.log(this.count)
      axios.get('api/article-view?id=1').then((response) => {
        console.log(response)
        this.data = response.data.data
      })
    }
  },
  data () {
    return {
      data: []
    }
  }
}
</script>
<style>
.article-view{ padding: 16px;}
.article-view .title{font-size: 21px;font-weight: bold;color: #000000;line-height: 30px;}
.article-view .info{border-left: 3px solid #D8D8D8; padding-left:13px;font-size: 14px;font-weight: bold;color: #999999;line-height: 20px; margin-top: 20px;margin-bottom: 30px;}
.article-view .content{font-size: 16px;color: #333333;line-height: 22px;}
</style>
