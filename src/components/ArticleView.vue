<template>
<div class="ts">
    <div class="lable">接种小贴士</div>
    <router-link  :to="{ path: '/article-view', query: { id: 1}}">
        <div class="item">
            <div class="text">
                <div class="title">接种疫苗带什么证件？</div>
                <div class="title1 van-ellipsis">接种疫苗带什么证件接种疫苗带什么证件接种疫苗带什么证件接种疫苗带什么证件接种疫苗带什么证件？</div>
            </div>
            <div class="img">
                <img src="/img/ts_item1.png">
            </div>
        </div>
    </router-link>
        <router-link  :to="{ path: '/article-view', query: { id: 1}}">

    <div class="item">
        <div class="text">
            <div class="title">接种疫苗带什么证件？</div>
            <div class="title1 van-ellipsis">接种疫苗带什么证件？</div>
        </div>
        <div class="img img1">
            <img src="/img/ts_item2.png">
        </div>
    </div>
    </router-link>
</div>
</template>
<script>
export default {
  name: 'ArticleView'
}
</script>
<style>
.ts .item .text .title{color: #000000;}
</style>
