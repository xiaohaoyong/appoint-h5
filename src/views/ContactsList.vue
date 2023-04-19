<template>
      <div class="contacts-list" id="contacts-list">
        <router-link v-for="rs in list" :key="rs"  :to="{ path: '/contacts-add', query: { id: rs.id}}">
            <div class="item">
                <div class="info">
                    <div class="name">{{rs.name}}</div>
                    <div class="other">
                        性别：{{rs.gender}}，年龄：{{rs.birthday}}
                    </div>
                </div>
                <div>
                    <svg t="1644911012406" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1220" width="1.79rem" height="1.79rem">
                        <path d="M512 85.333333C276.48 85.333333 85.333333 276.48 85.333333 512S276.48 938.666667 512 938.666667 938.666667 747.52 938.666667 512 747.52 85.333333 512 85.333333z m170.666667 447.146667l-243.484445 238.933333c-5.688889 5.688889-12.515556 7.964444-20.48 7.964445-6.826667 0-14.791111-2.275556-20.48-7.964445-11.377778-11.377778-11.377778-29.582222 0-39.822222L621.226667 512 399.36 293.546667c-11.377778-11.377778-11.377778-28.444444 0-39.822223s29.582222-11.377778 39.822222 0l243.484445 238.933334c5.688889 5.688889 7.964444 12.515556 7.964444 20.48 0 6.826667-3.413333 13.653333-7.964444 19.342222z"
                              p-id="1221" fill="#00B386"></path>
                    </svg>
                </div>
            </div>
        </router-link>

        <van-tabbar>
            <van-button round size="large" color="#00B386" url="/contacts-add">添加新预约联系人</van-button>
        </van-tabbar>
    </div>
</template>

<script>
import axios from 'axios'
import { Tab, Tabs, Popup, Cell, CellGroup, Icon, Tag, Button, Tabbar, ActionSheet } from 'vant'
export default {
  name: 'ContactsList',
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
    [Tabs.name]: Tabs
  },
  created () {
    this.onLoad()
  },
  methods: {
    onLoad: function () {
      axios.get('api/contacts-list').then((response) => {
        var data = response.data.data
        this.list = data.list
        console.log(this.list)
      })
    }
  },
  data () {
    return {
      list: []
    }
  }
}
</script>
<style>
.contacts-list{padding-bottom: 70px;}
.contacts-list a{color:black;}
.contacts-list .item{margin:1rem;height: 6rem;background: #FFFFFF;border-radius: 1rem;display: flex;justify-content: space-between;align-items: center;padding:0 1.89rem 0 1.11rem}
.contacts-list .item .name{font-size: 19px; line-height: 30px;}
.contacts-list .item .other{font-size: 1rem;color: #999999;}
.contacts-list .van-cell{background: none;}
.contacts-list .van-button {
    margin: 0.86rem 4.68rem;
}
.contacts-list .van-tabbar {
    height: auto;
}
</style>
