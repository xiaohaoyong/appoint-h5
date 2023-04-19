<template>
        <van-tabbar v-model="active" route>
        <van-tabbar-item to="/">
            <span>首页</span>
            <template #icon="props">
                <img :src="props.active ? icon.index.active : icon.index.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/clinic">
            <span>附近门诊</span>
            <template #icon="props">
                <img :src="props.active ? icon.area.active : icon.area.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/helper">
            <span>选苗助手</span>
            <template #icon="props">
                <img :src="props.active ? icon.helper.active : icon.helper.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/my">
            <span>我的</span>
            <template #icon="props">
                <img :src="props.active ? icon.my.active : icon.my.inactive" />
            </template>
        </van-tabbar-item>
    </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'

import 'vant/lib/index.css'
export default {
  name: 'TabbarView',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup () {
    const icon = {
      index: {
        active: '/img/footer1_on.png',
        inactive: '/img/footer1.png'
      },
      area: {
        active: '/img/footer2_on.png',
        inactive: '/img/footer2.png'
      },
      helper: {
        active: '/img/footer3_on.png',
        inactive: '/img/footer3.png'
      },
      my: {
        active: '/img/footer4_on.png',
        inactive: '/img/footer4.png'
      }
    }
    return {
      icon: icon
    }
  }
}
</script>
