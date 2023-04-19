<template>
  <div class="vaccine-list">
    <van-tabs sticky animated color="#00B386" line-width="1.46rem" v-model:active="active">
        <van-tab v-for="item in types" :key="item" :title="item.type.title" :name="item.type.id">
          <div class="card">
                <div class="card-header">
                    <div>
                        <div class="name">{{item.type.title}} {{item.type.id}}</div>
                        <div class="name1"></div>
                    </div>
                    <div>
                        <van-icon name="manager"></van-icon>
                    </div>
                </div>
                <div class="explain" v-html="item.type.intro"></div>
                <div class="more" @click="onClick(item.type.id)">了解更多
                    <svg t="1644911012406" class="icon" viewBox="0 0 1024 1024" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" p-id="1220" width="1rem" height="1rem">
                        <path d="M512 85.333333C276.48 85.333333 85.333333 276.48 85.333333 512S276.48 938.666667 512 938.666667 938.666667 747.52 938.666667 512 747.52 85.333333 512 85.333333z m170.666667 447.146667l-243.484445 238.933333c-5.688889 5.688889-12.515556 7.964444-20.48 7.964445-6.826667 0-14.791111-2.275556-20.48-7.964445-11.377778-11.377778-11.377778-29.582222 0-39.822222L621.226667 512 399.36 293.546667c-11.377778-11.377778-11.377778-28.444444 0-39.822223s29.582222-11.377778 39.822222 0l243.484445 238.933334c5.688889 5.688889 7.964444 12.515556 7.964444 20.48 0 6.826667-3.413333 13.653333-7.964444 19.342222z"
                              p-id="1221" fill="#999999"></path>
                    </svg>
                </div>
            </div>
            <div class="list">
                <div class="item" v-for="rs in item.vaccines" :key="rs" @click="onClickRouter(rs.id)">
                    <div class="info">
                        <div class="title">{{rs.name}}</div>
                        <div class="title1">{{rs.manufacturer}}</div>
                    </div>
                    <div>
                        <svg t="1644911012406" class="icon" viewBox="0 0 1024 1024" version="1.1"
                              xmlns="http://www.w3.org/2000/svg" p-id="1220" width="1.79rem"
                              height="1.79rem">
                            <path d="M512 85.333333C276.48 85.333333 85.333333 276.48 85.333333 512S276.48 938.666667 512 938.666667 938.666667 747.52 938.666667 512 747.52 85.333333 512 85.333333z m170.666667 447.146667l-243.484445 238.933333c-5.688889 5.688889-12.515556 7.964444-20.48 7.964445-6.826667 0-14.791111-2.275556-20.48-7.964445-11.377778-11.377778-11.377778-29.582222 0-39.822222L621.226667 512 399.36 293.546667c-11.377778-11.377778-11.377778-28.444444 0-39.822223s29.582222-11.377778 39.822222 0l243.484445 238.933334c5.688889 5.688889 7.964444 12.515556 7.964444 20.48 0 6.826667-3.413333 13.653333-7.964444 19.342222z"
                                  p-id="1221" fill="#00B386"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </van-tab>

    </van-tabs>
    <van-popup
            v-model:show="show"
            round
            position="bottom"
            :style="{ height: '70%' }"
            closeable="true"
            safe-area-inset-bottom="true"
            @open="onLoadContent"
    ><div class="content" v-html="content"></div></van-popup>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { Tab, Tabs, Popup } from 'vant'
export default {
  name: 'VaccineList',
  components: {
    [Tab.name]: Tab,
    [Popup.name]: Popup,
    [Tabs.name]: Tabs
  },
  methods: {
    onLoad: function () {
      axios.get('api/vaccine-list').then((response) => {
        this.types = response.data.data.vaccineType
      })
    },
    onClick (id) {
      this.show = true
      this.id = id
    },
    onClickRouter (vid) {
      console.log(this.$route.query.hid)
      if (this.$route.query.hid) {
        this.$router.push({
          name: 'vaccine-view',
          query: {
            vid: vid,
            hid: this.$route.query.hid
          }
        })
      } else {
        this.$router.push({
          name: 'clinic',
          query: {
            vid: vid
          }
        })
      }
    },
    onLoadContent () {
      axios.get('api/vaccine-content?id=' + this.id).then((response) => {
        this.content = response.data.data.content
      })
    }
  },
  data () {
    this.onLoad()
    const vid = parseInt(this.$route.query.vid)
    const hid = parseInt(this.$route.query.hid)

    return {
      active: vid,
      hid: hid,
      content: '',
      types: [],
      show: false,
      id: 0
    }
  }
}
</script>
<style>
.vaccine-list .card{background: #FFFFFF;border-radius: 1rem; margin: 1.14rem;min-height:14.61rem;}
.vaccine-list .card .card-header{color: #FFFFFF;background: #DB7185;border-top-right-radius: 1rem;border-top-left-radius: 1rem;display: flex;justify-content: space-between;align-items:center;padding: 0 1.11rem;height: 4.79rem;}
.vaccine-list .card .card-header .name{font-size: 1.36rem;}
.vaccine-list .card .card-header .name1{text-align:center;eight: 1.29rem;background: #FFFFFF;border-radius: 0.64rem;opacity: 0.6;color: #DB7185;font-size: 0.71rem;}
.vaccine-list .card .explain{min-height:7.71rem;padding: 0.82rem;}
.vaccine-list .card .explain .item{display: flex;align-items: center;padding-top: 1.14rem;padding-left: 0.82rem;color: #333333;font-size: 1.14rem;}
.vaccine-list .list{padding: 1.14rem;}
.vaccine-list .list .item{background: #FFFFFF;border-radius: 1rem; display: flex;justify-content: space-between;align-items:center;padding: 1.11rem; margin-top: 1rem}
.vaccine-list .list .item .title{font-size: 1.36rem;color: #000000;}
.vaccine-list .list .item .title1{font-size: 1rem;color: #999999;padding-top: 0.5rem;}
.vaccine-list .content{padding: 2rem 1rem;}
.more{font-size: 1rem; color: #999999;display: flex;align-items: center;padding: 0.68rem 1.71rem;}

</style>
