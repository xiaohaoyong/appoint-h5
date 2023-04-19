<template>
  <div class="vaccine-view" id="vaccine-view">
          <van-cell-group>
            <van-cell :title="hospital.name" icon="wap-home">
              <!-- 使用 title 插槽来自定义标题 -->
            </van-cell>

            <van-cell :title="name" icon="manager" is-link @click="showPickerClick">
              <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            </van-cell>
        </van-cell-group>
        <van-action-sheet v-model:show="showPicker" :actions="actions" @select="onSelect" @cancel="onCancel" title="选择接种人"   cancel-text="添加接种人">
        </van-action-sheet>
        <VaccineInfo :vaccine="vaccine" :tags="tags"/>
        <div class="info">
            <div class="title">预约须知</div>
        </div>

        <van-tabbar>
          <van-button round type="primary" size="large" color="#00B386" @click="onClickRouter()" >立即预约</van-button>
        </van-tabbar>
    </div>
</template>
<script>
import VaccineInfo from '@/components/VaccineInfo.vue'
import axios from 'axios'
import { Tab, Tabs, Popup, Cell, CellGroup, Icon, Tag, Button, Tabbar, ActionSheet, Toast } from 'vant'
export default {
  name: 'VaccineView',
  components: {
    [Tab.name]: Tab,
    [Popup.name]: Popup,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Tag.name]: Tag,
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [ActionSheet.name]: ActionSheet,
    VaccineInfo,
    [Tabs.name]: Tabs
  },
  created () {
    this.onLoad()
  },
  methods: {
    onLoad: function () {
      axios.get('api/vaccine-view?vid=' + this.vid + '&hid=' + this.hid).then((response) => {
        var data = response.data.data
        this.hospital = data.hospital
        this.vaccine = data.vaccine
        this.tages = data.tages
        this.actions = data.infos
        console.log(data)
      })
    },
    onClickRouter () {
      console.log(this.infoId)
      if (this.infoId) {
        this.$router.push({
          name: 'vaccine-form',
          query: {
            infoId: this.infoId,
            hid: this.hospital.id,
            vid: this.vaccine.id
          }
        })
      } else {
        Toast('请选择接种人')
      }
    },
    showPickerClick () {
      console.log(this.actions)
      this.showPicker = true
    },
    onSelect (item) {
      this.name = item.name
      this.infoId = item.id
      this.showPicker = false
    },
    onCancel () {
      console.log('er')
    },
    onClick () {
      console.log('cl')
    }
  },
  data () {
    const vid = parseInt(this.$route.query.vid)
    const hid = parseInt(this.$route.query.hid)
    this.onLoad()
    return {
      vid: vid,
      hid: hid,
      hospital: [],
      vaccine: [],
      tages: [],
      show: false,
      showPicker: false,
      infoId: 0,
      actions: [],
      name: '请选择接种人'
    }
  }
}
</script>
<style>
.vaccine-view .info{margin: 1.14rem;border-radius: 1.18rem;background: #ffffff;min-height: 24rem;}
.vaccine-view .info .title{width: 10.82rem;
    min-height: 2.86rem;
    background: linear-gradient(360deg, #00B386 0%, #32CBC7 100%);
    border-radius: 1.54rem;text-align: center;line-height: 2.86rem;color: #ffffff;font-size: 1.36rem;position:relative; top:-1.43rem;margin: 0 auto;}
.vaccine-view .van-button{margin: 0.86rem 4.68rem;}
.vaccine-view .van-tabbar{height: auto;}
</style>
