<template>
      <div class="vaccine-view vaccine-done my" id="vaccine-done">
        <div class="my-header">
            <div class="header-img">
                <van-icon name="checked" size="5.79rem" color="#00B386"></van-icon>
            </div>
            <div class="name">预约成功</div>
        </div>
        <VaccineInfo :vaccine="vaccine" :tags="tags" :price="order.price" :appoint_name='infos.name' :appoint_hospital="hospital.name" :appoint_date="appoint_date"/>
        <div class="attribute" style="margin-top:0;margin-bottom: 0;">
            <div class="header">
                <div class="name">预约凭证</div>
            </div>
            <div class="content">
                <canvas id="qrccode-canvas"></canvas >
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import VaccineInfo from '@/components/VaccineInfo.vue'
import { Icon } from 'vant'
var QRCode = require('qrcode')

export default {
  name: 'VaccineDone',
  components: {
    [Icon.name]: Icon,
    VaccineInfo
  },
  created () {
    this.onLoad()
  },
  methods: {
    onLoad: function () {
      axios.get('api/vaccine-done', { params: { order_id: this.$route.query.orderid } }).then((response) => {
        var data = response.data.data
        this.hospital = data.hospital
        this.vaccine = data.vaccine
        this.infos = data.infos
        this.tages = data.tages
        this.hospitalVaccine = data.hospitalVaccine
        this.order = data.order
        this.appoint = data.appoint
        this.qrcode = data.qrcode
        this.appoint_date = data.appoint.appoint_date + ' ' + data.interval.start + '-' + data.interval.end
        var canvas = document.getElementById('qrccode-canvas')
        console.log(data.appoint.id)
        QRCode.toCanvas(canvas, 'appoint-id:' + data.appoint.id, (error) => {
          if (error) {
            console.log(error)
          } else {
            console.log('success')
          }
        })
      })
    }
  },
  data () {
    return {
      appoint_date: [],
      hospital: [],
      vaccine: [],
      infos: [],
      tages: [],
      hospitalVaccine: [],
      order: [],
      qrcode: [],
      appoint: []
    }
  }
}
</script>
<style>
.vaccine-done .attribute .content {display: flex;justify-content: center;align-items: center;}
.vaccine-done .my-header{display: flex;flex-direction: column;justify-content: center;align-items: center;margin-top: 1.86rem;}
.vaccine-done .my-header .name{font-size: 1.29rem;line-height: 1.79rem;font-weight: 800; padding-bottom: 32px;}
</style>
