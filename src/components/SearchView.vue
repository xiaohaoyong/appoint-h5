<template>
  <div>
    <van-row type="flex">
      <van-col span="5">
          <div class="location">
              <div class="region van-search" @click="onClick">
                  <div class="van-ellipsis">{{fieldValue}}</div>
                  <van-icon name="arrow-down" color="#00CEB7" size="10" />
              </div>
              <van-popup v-model:show="headershow" round position="bottom">
                  <van-cascader
                          v-model="cascaderValue"
                          title="请选择所在地区"
                          :options="options"
                          @close="headershow = false"
                          @finish="onFinish"
                  ></van-cascader>
              </van-popup>
          </div>
      </van-col>
      <van-col span="19">
          <van-search
                  shape="round"
                  v-model="value"
                  placeholder="请输入搜索关键词"
                  input-align="center"
                  @search="onSearch"
                  @cancel="onCancel"
          ></van-search>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import axios from 'axios'
import { Search, Col, CellGroup, Row, Icon, Cascader, Toast, Popup } from 'vant'
import 'vant/lib/index.css'
export default {
  name: 'SearchView',
  components: {
    [Search.name]: Search,
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon,
    [Cascader.name]: Cascader,
    [Popup.name]: Popup,
    [Toast.name]: Toast,
    [CellGroup.name]: CellGroup
  },
  methods: {
    onLoad: function () {
      console.log(123)
      axios.get('api/index-area').then((response) => {
        var data = response.data.data
        this.options = data.options
        this.fieldValue = data.fieldValue
        this.cascaderValue = data.cascaderValue
        console.log(data)
      })
    },
    onFinish ({ selectedOptions }) {
      this.headershow = false
      this.fieldValue = selectedOptions[1].text
      axios.get('api/set-area?area=' + selectedOptions[1].value).then((response) => {
        window.location.reload()
      })
    },
    onClick () {
      console.log(this.headershow)
      this.headershow = true
    },
    onChange () {
    },
    onSearch (val) {
    },
    onCancel () {
      Toast('取消')
    }
  },
  data () {
    this.onLoad()
    return {
      fieldValue: '定位中',
      headershow: false,
      options: [],
      cascaderValue: '',
      show: false
    }
  }
}
</script>
<style>
.location{padding: 10px 5px;background: #fff;}
.van-ellipsis{color: #00CEB7;font-size: 15px;font-weight: bold;}
.region{font-size: 12px; box-sizing: border-box;border-radius: 1.14rem; height: 34px; display: flex;justify-content: space-between;align-items:center;padding: 0 0.89rem;color: #333333;}
.region img{width: 1.07rem}
.van-search__content--round{border-radius: 2px solid #00CEB7;}
</style>
