<template>
  <div class="clinic">
    <SearchView/>
    <van-dropdown-menu >
        <van-dropdown-item get-container="body" v-model="value1" :options="option1" :lazy-render="false" @change="onChange"></van-dropdown-item>
    </van-dropdown-menu>
    <div class="list ">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
        <div class="item" v-for="item in list" :key="item" @click="onClickRouter(item.id)">
          <div class="img">
            <van-image  :src="item.img">
              <template v-slot:error>加载失败</template>
            </van-image>
          </div>
          <div class="info">
            <div class="title">{{item.name}}</div>
            <div class="address ellipsis1" style="white-space:pre-wrap;">
              <van-icon name="location"/>
              10km | {{item.address}}
            </div>
            <div class="time ellipsis1" style="white-space:pre-wrap">
              <van-icon name="clock"/>
              {{item.open_time}}
            </div>
          </div>
        </div>
    </van-list>
    </div>
    <TabbarView/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import TabbarView from '@/components/TabbarView.vue'
import SearchView from '@/components/SearchView.vue'
import { DropdownMenu, DropdownItem, List, Icon, Image as VanImage, Tag } from 'vant'

export default {
  name: 'ClinicView',
  components: {
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
    [List.name]: List,
    [Icon.name]: Icon,
    [Tag.name]: Tag,
    [VanImage.name]: VanImage,
    TabbarView,
    SearchView
  },
  methods: {
    onLoad: function () {
      console.log(this.count)
      this.finished = false
      this.loading = false
      this.count = 1
      axios.get('api/areac', { page: 1 }).then((response) => {
        var data = response.data.data
        this.option1 = data
      })
      this.getList()
    },
    getList: function () {
      this.getLongitudeLatitude()
      var params = { page: this.count, latitude: this.latitude, longitude: this.longitude, county: 0 }
      if (this.county) {
        params.county = this.county
      }
      axios.get('api/clinic', { params: params }).then((response) => {
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
    onClickRouter (hid) {
      if (this.$route.query.vid) {
        this.$router.push({
          name: 'vaccine-view',
          query: {
            vid: this.$route.query.vid,
            hid: hid
          }
        })
      } else {
        this.$router.push({
          name: 'vaccine-list',
          query: {
            hid: hid
          }
        })
      }
    },
    onChange (e) {
      var that = this
      that.county = e
      this.getList()
    },
    getLongitudeLatitude () {
      var _this = this
      _this.longitude = '116.48103'
      _this.latitude = '39.996794'
    }
  },
  data () {
    const vid = parseInt(this.$route.query.vid)
    return {
      county: 0,
      latitude: '',
      longitude: '',
      vid: vid,
      list: [],
      count: 1,
      state: 1,
      option1: [],
      loading: false,
      value1: '0',
      finished: false
    }
  }
}
</script>
<style>
.clinic .list {padding:1.17rem 0 1.17rem 0 }
.clinic .list .item{border-bottom:0.1rem solid #E4E4E4; display: flex;padding:15px;background: #fff;}
.clinic .list .item:nth-last-child(1){border: none}
.clinic .list .item .img{width:90px;height:90px;margin-right: 1rem;flex-shrink:0;}
.clinic .list .item .info{font-size: 0.93rem;color: #999999;flex-shrink:0;flex: 1;line-height: 25px;}
.clinic .list .item .info .title{font-size: 18px;color: #333;font-weight: 500;}
.clinic .list .item .info .address {overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
.clinic .list .item .info .tag {}
.clinic .van-tag{font-size: 10px;line-height: 14px;padding: 2px 5px;border-radius: 3px;margin-right: 9px;}
.van-tag--success{background: #D8F2EB;color: #00B386;}
.van-tag--primary{background: #DEE8FC;color: #4D8CFF;}
.van-tag--warning{background: #F7E6DB;color: #FF8736;}
.clinic .van-icon{padding-right: 6px;}
.ellipsis1{position: relative;padding-right:3px;overflow:hidden; word-break: break-all;text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;-webkit-line-clamp:1; }
.ellipsis{position: relative;padding-right:3px;overflow:hidden; word-break: break-all;text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;-webkit-line-clamp:2; }
</style>
