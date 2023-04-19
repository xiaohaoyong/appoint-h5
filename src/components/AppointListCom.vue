<template>
    <div class="appoint-list">
        <div class="list">
            <router-link  v-for="item in list" :key="item"  :to="{ path: '/vaccine-done', query: { orderid: item.orderid}}">
                <div class="item">
                    <div class="title">
                        <div>{{item.vaccine_title}}</div>
                        <div class="plice" v-if="item.price">¥{{item.price}}</div>
                    </div>
                    <div class='info'>
                        <div>接种人：{{item.member_info}}</div>
                        <div>预约时间：{{item.appoint_date}}</div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'AppointListCom',
  components: {},
  props: ['list'],
  methods: {},
  data () {}
}
</script>
<style>
.appoint-list{padding: 16px;}
.appoint-list .list .item{padding: 16px; background-color: #fff;border-radius: 14px; margin-bottom: 16px;}
.appoint-list .list .title{display: flex;justify-content: space-between;font-size: 19px;font-weight: bold;color: #000000;}
.appoint-list .list .plice{color: #00B386;}
.appoint-list .list .info{color: #999999;font-size: 14px;display: flex;padding-top: 7px;justify-content: space-between;}
.appoint-list .appoint-title{padding-left: 19px;font-weight: bold;font-size: 18px;margin-top: 47px; margin-bottom: 14px;color: #000000;  }
</style>
