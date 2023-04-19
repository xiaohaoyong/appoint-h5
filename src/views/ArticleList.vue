<template>
  <div>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleListCom :list="list"/>
    </van-list>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { List } from 'vant'
import ArticleListCom from '@/components/ArticleListCom.vue'

export default {
  name: 'ArticleList',
  components: {
    [List.name]: List,
    ArticleListCom
  },
  methods: {
    onLoad: function () {
      console.log(this.count)
      axios.get('api/article-list?type=' + this.type + '&page=' + this.count).then((response) => {
        var data = response.data.data
        if (this.count > 1) {
          this.list = this.list.concat(data.data)
        } else {
          this.list = data.data
        }
        console.log(this.list)
        console.log(data.last_page)
        if (this.count >= data.last_page) {
          this.finished = true
        } else {
          this.loading = false
          this.count++
        }
      })
    }
  },
  data () {
    return {
      list: [],
      count: 1,
      type: 1,
      loading: false,
      finished: false
    }
  }
}
</script>
