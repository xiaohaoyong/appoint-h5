<template>
<div>

  <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{background: #F2F2F2;}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.ts{margin: 0 1.14rem 5rem 1.14rem;}
.ts .lable{font-size: 1.5rem}
.ts .item{padding:0.5rem 1.17rem;background: #FFFFFF;border-radius: 0.71rem;margin: 1.14rem 0;display: flex;justify-content: space-between;align-items: center;}
.ts .item  img{width: 6.6rem}
.ts .item .img1{
    height: 5.61rem;
    display: flex;align-items: center;
}
.ts .item .img1 img{
    width: 8.57rem
}
.ts .item .text{width: 13rem}
.ts .item .text .title{font-size: 16px;padding-bottom: 0.71rem;}
.ts .item .text .title1{font-size:13px;color: #767D7B;}

</style>
