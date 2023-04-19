<template>
<div class="vaccine-view">
    <div class="attribute">
            <div class="header">
                <div class="name">{{vaccine.name}}</div>
                <div class="tags">
                    <van-tag v-for="rs in vaccine.tags" :key="rs" color="#F7E6DB" text-color="#FF8736" size="medium">{{rs.name}}</van-tag>
                </div>
            </div>
            <van-cell-group >
              <van-cell title="生产厂家" :value="vaccine.manufacturer" />
              <van-cell title="产品规格" :value="vaccine.norms" />
              <van-cell v-if="appoint_name" title="预约人" :value="appoint_name" />
              <van-cell v-if="appoint_hospital" title="接种门诊" :value="appoint_hospital" />
              <van-cell v-if="appoint_date" title="接种时间" :value="appoint_date" />
              <van-cell v-if="price" title="价格" :value="'￥'+price" value-class="red" />
            </van-cell-group>
        </div>
</div>
</template>
<script>
// @ is an alias to /src
import { Cell, CellGroup, Tag } from 'vant'
export default {
  name: 'VaccineInfo',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Tag.name]: Tag
  },
  props: ['vaccine', 'appoint_name', 'appoint_date', 'price', 'appoint_hospital'],
  methods: {},
  data () {}
}
</script>
<style>
.vaccine-view .attribute{background: #FFFFFF;margin-bottom: 2rem}
.vaccine-view .attribute .header{border-bottom:0.04rem solid #E4E4E4;padding-bottom: 0.89rem;padding: 1.14rem 0 1.14rem 1.14rem;}
.vaccine-view .attribute .name{font-size: 1.36rem;color: #333333;}
.vaccine-view .attribute .tags{padding-top: 0.71rem}
.vaccine-view .attribute .content{padding-right: 0.96rem}
.vaccine-view .attribute .content .item{padding:0.96rem 0; display: flex;justify-content: space-between;color: #333333;font-size: 1.14rem;}
.vaccine-view .attribute .content .item div:first-child{color: #999999;}
.red{color: red;}
</style>
