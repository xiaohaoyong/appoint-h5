<template>
  <div>
    <van-tabs v-model:active="active" :before-change="OnChange">
      <van-tab title="进行中"></van-tab>
      <van-tab title="未支付"></van-tab>
      <van-tab title="已完成"></van-tab>
      <van-tab title="已过期"></van-tab>
      <van-tab title="已取消"></van-tab>
    </van-tabs>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <AppointListCom :list="list"/>
    </van-list>
  </div>
</template>

<script>
import axios from 'axios'
import AppointListCom from '@/components/AppointListCom.vue'
import { Tab, Tabs, PullRefresh, List } from 'vant'

export default {
  name: 'AppointList',
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    AppointListCom
  },
  methods: {
    onLoad: function () {
      console.log(this.count)
      axios.get('api/order-list?state=' + this.state + '&page=' + this.count).then((response) => {
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
    },
    OnChange: function (e) {
      this.state = (e + 1)
      this.finished = false
      this.loading = false
      this.count = 1
      axios.get('api/order-list?state=' + this.state).then((response) => {
        var data = response.data.data
        this.list = data.data
      })
      return true
    }
  },
  data () {
    return {
      list: [],
      count: 1,
      state: 1,
      loading: false,
      finished: false
    }
  }
}
</script>
