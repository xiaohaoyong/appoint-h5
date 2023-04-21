<template>
  <div class="page flex-col">
    <div class="box_5 flex-col">
      <div class="block_8 flex-row" v-for="(item, index) in wikiList" v-bind:key="index">
        <div class="image-text_4 flex-row justify-between">
          <div class="group_3 flex-col"></div>
          <span class="text-group_1">{{item.age}}</span>
        </div>
        <div class="block_1 flex-col"></div>
        <div class="list_5 flex-col">
          <div
            class="block_3 flex-col"
            v-for="(item, index) in item.list"
            :key="index"
          >
            <div class="section_8 flex-row justify-between">
              <span class="text_10" v-html="item.lanhutext0"></span>
              <div class="text-wrapper_3">
                <span class="text_12" v-html="item.lanhutext1"></span>
                <span class="text_13" v-html="item.lanhutext2"></span>
                <span class="text_14" v-html="item.lanhutext3"></span>
              </div>
            </div>
            <div class="section_9 flex-row justify-between">
              <div
                class="tag_1 flex-col"
                :style="{ background: item.lanhuBg4 }"
              >
                <span
                  class="text_21"
                  :style="{ color: item.lanhufontColor4 }"
                  v-html="item.lanhutext4"
                ></span>
              </div>
              <span class="text_11 van-ellipsis" v-html="item.lanhutext5"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getUrlParam } from '@/utils/http'
import { wikiTopicListData } from '@/utils/api'
const wikiList = ref([])
export default {
  name: 'WikHome',
  setup () {
    const wikiType = getUrlParam(location.href, 't')
    wikiTopicListData(wikiType).then(data => {
      const result = []
      const wikis = data
      console.log(wikis)
      for (const x in wikis) {
        const tmp = wikis[x]
        for (let i = 0; i < tmp.length; i++) {
          tmp[i].lanhutext0 = tmp[i].name
          tmp[i].lanhutext1 = '第'
          tmp[i].lanhutext2 = tmp[i].injection
          tmp[i].lanhutext3 = '针'
          if (tmp[i].free === 1) {
            tmp[i].lanhuBg4 = 'rgba(247,230,219,1.000000)'
            tmp[i].lanhutext4 = '自费'
            tmp[i].lanhufontColor4 = 'rgba(255,135,54,1)'
          } else {
            tmp[i].lanhuBg4 = 'rgba(216,242,235,1.000000)'
            tmp[i].lanhutext4 = '免费'
            tmp[i].lanhufontColor4 = 'rgba(0,194,134,1)'
          }
          tmp[i].lanhutext5 = tmp[i].prevent_disease
        }
        result.push({ age: x, list: tmp })
      }
      wikiList.value = result
      console.log(result)
    })
    return {
      wikiList
    }
  }
}
</script>

<style lang='less' scoped>
@import '../assets/styles/common/common.less';
@import '../assets/styles/wiki-home/index.response.less';
</style>
