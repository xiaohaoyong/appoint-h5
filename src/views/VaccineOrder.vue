<template>
      <div class="vaccine-order" id="vaccine-order">
      <VaccineInfo :vaccine="vaccine" :tags="tags" :price="order.price" :appoint_name='infos.name' :appoint_hospital="hospital.name" :appoint_date="appoint_date"/>
        <van-notice-bar
          wrapable
          :scrollable="false"
          text="下单后7天内可免费取消，退款请联系客服，点击确认即表示已阅读并同意"
        />

        <van-submit-bar :price="order.price*100" text-align="left" button-text="确认" button-color="#00B386"   @submit="onSubmit" :disabled="disabled">
            <template #tip>
                预约号将为您保留半小时，过时将自动取消  <van-count-down ref="countDown" :time="time" format=" mm 分 ss 秒" @finish="onFinish"></van-count-down>
            </template>
        </van-submit-bar>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import VaccineInfo from '@/components/VaccineInfo.vue'
import { NoticeBar, SubmitBar, CountDown } from 'vant'

export default {
  name: 'VaccineOrder',
  components: {
    [NoticeBar.name]: NoticeBar,
    [SubmitBar.name]: SubmitBar,
    [CountDown.name]: CountDown,
    VaccineInfo
  },
  created () {
    this.onLoad()
  },
  methods: {
    onLoad: function () {
      axios.get('api/vaccine-order', { params: { order_id: this.$route.query.orderid } }).then((response) => {
        var data = response.data.data
        this.hospital = data.hospital
        this.vaccine = data.vaccine
        this.tages = data.tages
        this.infos = data.infos
        this.hospitalVaccine = data.hospitalVaccine
        this.appoint = data.appoint
        this.interval = data.interval
        this.order = data.order
        this.appoint_date = data.appoint.appoint_date + ' ' + data.interval.start + '-' + data.interval.end
        this.reset()
      })
    },
    onFinish (e) {
      console.log(123)
      this.disabled = false
    },
    onSubmit () {
      if (this.order.price === 0) {
        this.$router.push({
          name: 'vaccine-done',
          query: {
            orderid: this.order.order_id
          }
        })
      }
    },
    reset () {
      var newData = Date.parse(new Date())
      var payTimeEnd = new Date(this.order.created_at).getTime()
      this.time = (30 * 60 * 1000 - (newData - payTimeEnd))
      if (this.time > 0) {
        this.disabled = false
      }
      console.log((newData - payTimeEnd))
      console.log(this.time)
      this.$refs.countDown.reset()
      this.$refs.countDown.start()
    }
  },
  data () {
    return {
      countDown: null,
      disabled: false,
      appoint_date: '',
      time: 0,
      order: [],
      appoint: [],
      hospital: [],
      vaccine: [],
      tages: [],
      infos: [],
      hospitalVaccine: []
    }
  }
}
</script>
<style>

.vaccine-order .van-submit-bar__tip{display: flex; align-items: center;}

</style>
