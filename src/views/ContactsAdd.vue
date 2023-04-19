<template>
  <div class="contacts-add" id="contacts-add">
        <van-form @submit="onSubmit">
            <van-field
                    v-model="info.name"
                    name="name"
                    label="姓名"
                    placeholder="请填写接种人真实姓名"
                    :rules="[{ required: true, message: '请填写接种人真实姓名' }]"
            ></van-field>
            <van-field name="gender" label="性别"  :rules="[{ required: true, message: '请选择性别' }]">
                <template #input>
                    <van-radio-group v-model="info.gender" direction="horizontal">
                        <van-radio name="1">男</van-radio>
                        <van-radio name="2">女</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <van-field
                    name="birthday"
                    readonly
                    clickable
                    label="生日"
                    v-model="info.birthday"
                    placeholder="请选择出生日期"
                    @click="showBirthdayPicker = true"
                    :rules="[{ required: true, message: '请选择出生日期' }]"
            ></van-field>
            <van-popup v-model:show="showBirthdayPicker" position="bottom">

                <van-datetime-picker
                        v-model="currentDate"
                        type="date"
                        title="生日"
                        :min-date="minDate"
                        :max-date="maxDate"
                        @confirm="OnBirthdayConfirm"
                        @cancel="showBirthdayPicker = false"

                ></van-datetime-picker>
            </van-popup>
            <van-field
                    v-model="info.mobile"
                    name="mobile"
                    label="联系电话"
                    placeholder="请输入联系电话"
                    :rules="[{ required: true, message: '请填写正确手机号码',pattern:/^1[23456789]\d{9}$/ }]"
            ></van-field>

            <van-field
                    name="relationValue"
                    readonly
                    clickable
                    label="与本人关系"
                    v-model="relationValue"
                    placeholder="请选择与本人关系"
                    @click="showRelationPicker = true"
                    :rules="[{ required: true, message: '请选择与本人关系' }]"

            ></van-field>
            <div style="display:none">
            <van-field name="relation" v-model="info.relation" type="hidden"></van-field>
            </div>
            <van-popup v-model:show="showRelationPicker" position="bottom">

            <van-picker
                    title="选择关系"
                    show-toolbar
                    :defaultIndex="info.relation"
                    :columns="columns"
                    @confirm="onRelationConfirm"
            ></van-picker>

            </van-popup>
            <van-field
                    v-model="fieldValue"
                    is-link
                    readonly
                    label="现居地区"
                    placeholder="选择现居地区"
                    @click="areashow = true"
                    :rules="[{ required: true, message: '选择现居地区' }]"

            ></van-field>
            <van-popup v-model:show="areashow" round position="bottom">
                <van-cascader
                        value="cascaderValue"
                        title="选择现居地区"
                        :options="options"
                        @close="areashow = false"
                        @finish="onFinish"
                ></van-cascader>
            </van-popup>
            <van-tabbar>
                <van-button round size="large" color="#00B386" native-type="submit">保存</van-button>
            </van-tabbar>
        </van-form>
        <van-notice-bar
          wrapable
          :scrollable="false"
          text="请务必填写真实信息，接种时需要核实，若因信息不符导致不能接种，后果自负。"
        />

    </div>
</template>

<script>
import axios from 'axios'
import { Form, Field, CellGroup, RadioGroup, Radio, Popup, DatetimePicker, Picker, Cascader, NoticeBar, Tabbar, Button, Toast } from 'vant'
import 'vant/lib/index.css'

export default {
  name: 'ContactsList',
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Cascader.name]: Cascader,
    [NoticeBar.name]: NoticeBar,
    [Tabbar.name]: Tabbar,
    [DatetimePicker.name]: DatetimePicker,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [CellGroup.name]: CellGroup
  },
  created () {
    this.onLoad()
  },
  methods: {
    onLoad: function () {
      axios.get('api/contacts-add?id=1').then((response) => {
        var data = response.data.data
        this.info = data.info
        this.info.gender = data.info.gender + ''
        this.fieldValue = data.area
        this.options = data.areas
        this.relationValue = this.columns[data.info.relation]
        this.areaValue = [this.info.province + '', this.info.city + '', this.info.county + '']
        this._token = data._token
        console.log(this.relationValue)
      })
    },
    onSubmit (values) {
      values.id = this.info.id
      values.area = this.areaValue
      console.log(values)
      values._token = this._token
      var that = this
      axios.post('api/info-save', values).then((response) => {
        if (response.data.code === 200) {
          Toast.success({
            type: 'success',
            message: '成功',
            duration: 1000,
            onClose () {
              that.$router.go(-1)
            }
          })
        } else {
          Toast.fail('失败')
        }
      })
    },
    OnBirthdayConfirm (values) {
      this.info.birthday = this.dateFormat('YYYY-mm-dd', values)
      this.showBirthdayPicker = false
    },
    onRelationConfirm (values, index) {
      console.log(index)
      this.relation = index
      this.relationValue = values
      this.showRelationPicker = false
    },
    onFinish ({ selectedOptions }) {
      console.log(selectedOptions)
      this.areashow = false
      this.fieldValue = selectedOptions.map((option) => option.text).join('/')
      this.areaValue = selectedOptions.map((option) => option.value)
      console.log(this.cascaderValue)
    },
    dateFormat (fmt, date) {
      let ret
      const opt = {
        'Y+': date.getFullYear().toString(),
        'm+': (date.getMonth() + 1).toString(),
        'd+': date.getDate().toString(),
        'H+': date.getHours().toString(),
        'M+': date.getMinutes().toString(),
        'S+': date.getSeconds().toString()
      }
      for (const k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt)
        if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
        }
      }
      return fmt
    }
  },
  data () {
    return {
      info: [],
      showRelationPicker: false,
      password: '',
      showBirthdayPicker: false,
      minDate: new Date(1922, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(1990, 0, 1),
      columns: ['本人', '丈夫', '妻子', '父母', '子女', '其他'],
      areashow: false,
      fieldValue: '',
      cascaderValue: ['11', '11', '1104'],
      options: [],
      columnValue: 0,
      relationValue: '',
      areaValue: []
    }
  }
}
</script>
<style>
.contacts-add .van-button {
    margin: 0.86rem 4.68rem;
}
.contacts-add .van-tabbar {
    height: auto;
}
</style>
