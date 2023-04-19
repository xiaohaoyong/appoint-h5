<template>
      <div class="vaccine-form" id="vaccine-form">
      <VaccineInfo :vaccine="vaccine" :tags="tags" :price="hospitalVaccine.price" :appoint_name='infos.name' :appoint_hospital="hospital.name"/>
      <div class="date">
          <div class="title">
              <svg t="1644981026582" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16506" width="1.46rem" height="1.61rem"><path d="M892.562 351.188v612.14c0 33.508-27.148 60.672-60.648 60.672H68.68C35.172 1024 8.032 996.836 8.032 963.328v-612.14z m0 0" fill="#ECECEE" p-id="16507"></path><path d="M892.562 963.328v-612.14H8.032v402.78c19.608 56.4 45.406 110.696 79.35 156.688 32.922 44.61 85.68 71.25 141.118 71.25h661.156a60.828 60.828 0 0 0 2.906-18.578z m0 0" fill="#DADADC" p-id="16508"></path><path d="M1008.29 854.656c-120.814-185.968-115.728-503.468-115.728-503.468l-442.266-46.734L8.032 351.188s-5.454 340.46 129.086 522.772a113.592 113.592 0 0 0 91.382 46.134h744.61c33.616 0 53.492-37.25 35.18-65.438z m0 0" fill="#ECECEE" p-id="16509"></path><path d="M313.43 512.796l-17.64 10.946c-5.47 3.648-10.946 4.868-15.204 4.868-17.64 0-29.804-18.852-29.804-37.712 0-12.774 5.468-24.938 17.632-32.24L348.71 410c4.868-3.046 10.954-4.258 17.64-4.258 19.462 0 41.97 11.554 41.97 29.804v386.86c0 19.47-23.72 29.204-47.444 29.204-23.72 0-47.446-9.736-47.446-29.204z m0 0M771.72 512.188c0 15.812-9.728 39.54-19.462 57.788L609.92 842.484c-4.868 9.126-13.992 12.774-26.766 12.774-29.804 0-60.22-20.68-60.22-48.054 0-5.478 1.212-10.344 4.26-15.814l149.632-259.132v-42.58h-108.882v40.76c0 16.42-23.11 29.194-48.048 29.194-25.554 0-46.844-12.772-46.844-29.194v-94.29c0-14.594 20.688-29.194 41.368-29.194H730.36c18.25 0 41.36 14.6 41.36 29.194z m0 0" fill="#FF7F5A" p-id="16510"></path><path d="M892.562 351.188V152.086c0-33.5-27.148-60.664-60.648-60.664H68.68C35.172 91.42 8.032 118.586 8.032 152.086v199.1z m0 0" fill="#1FD7C3" p-id="16511"></path><path d="M178.164 234.36c57.922 0 105.04-47.118 105.04-105.04V91.414H73.118V129.32c0 57.922 47.116 105.04 105.046 105.04z m0 0" fill="#00BBC9" p-id="16512"></path><path d="M178.164 0c-29.57 0-53.54 23.968-53.54 53.54v75.78c0 29.562 23.97 53.532 53.54 53.532 29.562 0 53.532-23.97 53.532-53.532V53.54C231.696 23.968 207.726 0 178.164 0z m0 0" fill="#FFE76C" p-id="16513"></path><path d="M722.43 234.36c57.92 0 105.046-47.118 105.046-105.04V91.414H617.382V129.32c0 57.922 47.126 105.04 105.048 105.04z m0 0" fill="#00BBC9" p-id="16514"></path><path d="M722.43 0c29.57 0 53.54 23.968 53.54 53.54v75.78c0 29.562-23.97 53.532-53.54 53.532s-53.54-23.97-53.54-53.532V53.54c0-29.572 23.978-53.54 53.54-53.54z m0 0" fill="#FFE76C" p-id="16515"></path><path d="M286.804 259.14a15.452 15.452 0 0 1-15.452-15.452V214.1a15.452 15.452 0 1 1 30.906 0v29.586a15.448 15.448 0 0 1-15.454 15.452z m0 0M613.78 259.14a15.452 15.452 0 0 1-15.452-15.452V214.1a15.452 15.452 0 1 1 30.906 0v29.586a15.448 15.448 0 0 1-15.452 15.452z m0 0M450.296 274.938c-20.186 0-39.132-8.43-51.984-23.134a15.456 15.456 0 0 1 1.46-21.804 15.456 15.456 0 0 1 21.806 1.46c6.984 7.994 17.454 12.572 28.72 12.572 11.264 0 21.734-4.58 28.718-12.572 5.616-6.42 15.374-7.078 21.804-1.46s7.08 15.376 1.46 21.804c-12.85 14.704-31.796 23.134-51.984 23.134z m0 0" fill="#444F5C" p-id="16516"></path></svg>
              选择预约日期</div>
          <van-calendar
                  v-model:show="calenderShow"
                  color="#00B386"
                  :poppable="poppable"
                  :show-confirm="false"
                  :style="{ height: '23rem' }"
                  :show-title="false"
                  :formatter="formatter"
                  @confirm="onConfirm"
                  :min-date="minDate"
                  :max-date="maxDate"
          ></van-calendar>
          <van-popup v-model:show="showPicker" round position="bottom">
              <van-picker
                      show-toolbar
                      :columns="columns"
                      @cancel="showPicker = false"
                      @confirm="onTime"
              />
          </van-popup>
          <van-field
                  readonly
                  clickable
                  left-icon="clock"
                  label="选择接种时间"
                  v-model="value"
                  placeholder="选择接种时间"
                  @click="showPicker = true"

          ></van-field>
      </div>

        <van-tabbar>
            <van-button round type="primary" size="large" color="#00B386" @click="onSubmit">下一步</van-button>
        </van-tabbar>
    </div>
</template>
<script>
import VaccineInfo from '@/components/VaccineInfo.vue'
import axios from 'axios'
import { toRaw } from 'vue'
import { Tab, Tabs, Popup, Cell, CellGroup, Icon, Tag, Button, Tabbar, ActionSheet, Calendar, Field, Picker, Toast } from 'vant'
export default {
  name: 'VaccineForm',
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
    [Calendar.name]: Calendar,
    [Field.name]: Field,
    [Picker.name]: Picker,
    VaccineInfo,
    [Tabs.name]: Tabs
  },
  created () {
    this.onLoad()
  },
  methods: {
    onLoad: function () {
      axios.get('api/vaccine-form').then((response) => {
        var data = response.data.data
        this.hospital = data.hospital
        this.vaccine = data.vaccine
        this.tages = data.tages
        this.infos = data.infos
        this.hospitalVaccine = data.hospitalVaccine
        this.hospitalAppoint = data.hospitalAppoint
        this.hospital = data.hospital
        this.fulls = data.fulls
        this.minDate = new Date(data.minDate)
        this.maxDate = new Date(data.maxDate)
        this.poppable = false
        this.calenderShow = true
        this.columns = data.appoint_time
        console.log(data)
      })
    },
    formatter (day) {
      const month = (day.date.getMonth() + 1) < 10 ? '0' + (day.date.getMonth() + 1) : day.date.getMonth() + 1
      const date = day.date.getDate() < 10 ? '0' + day.date.getDate() : day.date.getDate()
      const week = day.date.getDay()
      const year = day.date.getFullYear()
      const d = year + '-' + month + '-' + date
      const weeks = this.hospitalAppoint.weeks
      const sureDate = this.hospitalAppoint.sure_date
      const nonDate = this.hospitalAppoint.non_date
      const full = this.fulls

      if (weeks.indexOf(week) === -1 && sureDate.indexOf(d) === -1) {
        day.type = 'disabled'
      }
      if (nonDate.indexOf(d) !== -1) {
        day.type = 'disabled'
      }
      if (full.indexOf(d) !== -1) {
        day.type = 'disabled'
        day.text = '满'
        day.className = 'full'
      }
      return day
    },
    formatDate (day) {
      const month = (day.getMonth() + 1) < 10 ? '0' + (day.getMonth() + 1) : day.getMonth() + 1
      const date = day.getDate() < 10 ? '0' + day.getDate() : day.getDate()
      const year = day.getFullYear()
      return `${year}-${month}-${date}`
    },
    onConfirm (date) {
      this.showPicker = true
      console.log(this.formatDate(date))
      this.value = this.formatDate(date)
      this.formdata.appoint_date = this.formatDate(date)
    },
    onTime (value, index) {
      this.value = this.value + ' ' + value.text
      this.interval_id = value.id
      this.formdata.interval_id = value.id
      console.log(this.value)
      this.showPicker = false
    },
    onSubmit () {
      var that = this
      that.formdata.vaccine_id = this.$route.query.vid
      that.formdata.hospital_id = this.$route.query.hid
      that.formdata.member_info_id = this.$route.query.infoId
      console.log(that.formdata)
      if (!that.formdata.interval_id) {
        Toast.fail('请选择接种时间段')
      } else {
        axios.get('api/token').then(res => {
          that.formdata._token = res.data
        })
        var obj = Object.assign({}, toRaw(that.formdata))
        axios.post('api/vaccine-add', obj).then((response) => {
          if (response.data.code === 200) {
            Toast.success('成功')
            that.$router.push({
              name: 'vaccine-order',
              query: {
                orderid: response.data.data
              }
            })
          } else {
            Toast.fail(response.data.msg)
          }
        })
      }
    }
  },
  data () {
    return {
      value: '',
      columns: [],
      formdata: [],
      calenderShow: false,
      poppable: true,
      fulls: [],
      hospitalAppoint: [],
      hospital: [],
      vaccine: [],
      tages: [],
      show: false,
      showPicker: false,
      infos: [],
      hospitalVaccine: [],
      minDate: new Date('2022/01/01'),
      maxDate: new Date('2022/02/01'),
      name: '请选择接种人'
    }
  }
}
</script>
<style>
.vaccine-form{margin-bottom: 6rem;}
.vaccine-form .date .title{font-size: 1.14rem;display: flex;align-items: center;color: #333333;padding: 0.96rem 0 0 1.36rem;background: #ffffff;}
.vaccine-form .van-button{margin: 0.86rem 4.68rem;}
.vaccine-form .van-tabbar{height: auto;}
</style>
