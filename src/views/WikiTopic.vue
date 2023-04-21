<template>
  <div class="page flex-col">
    <div class="group_2 flex-col">
      <router-link to="/wiki-home?t=child">
        <div class="group_3 flex-row">
          <div class="image-text_29 flex-row justify-between">
            <div class="text-group_18 flex-col justify-between">
              <div class="text_3">查看接种程序</div>
              <div class="text_4" v-html="subTitle"></div>
            </div>
            <img
              class="icon_2"
              referrerpolicy="no-referrer"
              src="@/assets/img/lanhu_ertongzhuanqu/SketchPngd181320950cec3469f51dc84e361d4635dbaa148fe003215a81d00dcd29b92df.png"
             alt=""/>
          </div>
        </div>
      </router-link>
      <div class="box_13 flex-row">
        <div class="image-text_30 flex-col justify-between" style="margin-right: 20px" v-for="(item,index) in wikiList" :key="index">
          <img
            class="icon_3"
            referrerpolicy="no-referrer"
            :src="item.icon"
           alt=""/>
          <div class="text-group_2 van-ellipsis">{{item.name}}</div>
        </div>
      </div>
      <div class="image-wrapper_1 flex-col">
        <img
          class="label_4"
          referrerpolicy="no-referrer"
          src="@/assets/img/lanhu_ertongzhuanqu/SketchPng54bf44611c105e05dca057bfda96435d8d24897efe91b9ab0ac226c25ea64307.png"
        />
      </div>
    </div>

    <div class="group_14 flex-col">
      <div class="list_8 flex-col">
        <div
          class="list-items_1 flex-row"
          v-for="(item, index) in typeList"
          :key="index"
        >
          <div class="text-group_19 flex-col justify-between">
            <div class="text_6" v-html="item.title"></div>
            <div class="text_7" v-html="item.tag"></div>
          </div>
          <img
            class="icon_6"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng785d452f925c39ed7d8f76373c40a4402ab5b189563d4803f7d80c5d549ed6c1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getUrlParam } from '@/utils/http'
import { wikiTopicData } from '@/utils/api'
const subTitle = ref('')
const wikiList = ref([])
const typeList = ref([])
const wikiType = ref('')
export default {
  name: 'WikiTopic',
  setup () {
    wikiType.value = getUrlParam(location.href, 't')
    if (wikiType.value === 'child') {
      subTitle.value = '0-6岁接种计划'
    } else if (wikiType.value === 'adult') {
      subTitle.value = '成人疫苗接口计划'
    }
    wikiTopicData(wikiType.value).then(data => {
      console.log(data)
      wikiList.value = data.wikiList
      typeList.value = data.typeList
    })
    return {
      wikiList,
      typeList,
      wikiType,
      constants: {},
      subTitle
    }
  }
}
</script>

<style lang="less" scoped>
div::-webkit-scrollbar { width: 0 !important; display: none }
@import '../assets/styles/common/common.less';
@import '../assets/styles/wiki-topic/index.response.less';
</style>
