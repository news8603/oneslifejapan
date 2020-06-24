<template>
  <div id="app">
<el-container  >
  <el-header > 
    <topmenu></topmenu>
</el-header>
  <el-main>
   <imain></imain>
</el-main>
  <el-footer style="background:#0n81f2c">
    <copyright></copyright>
</el-footer>
</el-container>
  <el-backtop background-color: #f2f5f6;></el-backtop>
 </div>
</template>

<style lang="less">
// html { font-size: 62.5%; }
body{
  margin: 10px 0px;
  padding: 0px;

  // font-size: 14px;

}
//   @media screen and (max-device-width: 480px){
//   body{
//     -webkit-text-size-adjust: 100%;
//   }
// }

// @media screen and(max-width: 1280px){
//   body{
//   margin: 10px 0px;
//   padding: 0px;
//   font-size: 1em;
// }

// }
// @media screen and(max-width: 900px){
//     body{
//   margin: 10px 0px;
//   padding: 0px;
//   font-size: 0.8em;
// }
// }
// @media screen and(max-width: 300px){
//      body{
//   margin: 10px 0px;
//   padding: 0px;
//      font-size: 1.2vmin;
// }
// }

#app {
     font-family: 'Noto Serif SC', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
      // -webkit-font-size-adjust:none;

  .el-header{
    padding:0 15px;

  }
  .el-main{
    padding: 0px;
  }
  .el-footer{
    padding:0px;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// /* 手机的字体大小 */
// @media screen and (max-width: 768px) {
//   #app {
//     font-size: 1rem;
//   }
// }
// /* 笔记本电脑的字体大小 */
// @media screen and (min-width: 768px) and (max-width: 1024px) {
//   #app {
//     font-size: 0.08rem;
//   }
// }
// /* 台式电脑显示器屏幕字体大小 */
// @media screen and (min-width: 1024px) {
//   #app {
//     font-size: 0.08rem;
//   }
// }

</style>
<script>
import topmenu from './components/topmenu'
import copyright from './components/copyright'
import imain from './views/imain'

export default {
components: {
      imain,
      topmenu,
      copyright,

  },
  //   mounted: function() {
  //   // 页面开始加载时修改font-size
  //   var html = document.getElementsByTagName("html")[0];
  //   var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  //   // 这里的750是指设计图的大小,自己根据实际情况改变
  //   html.style.fontSize = oWidth / 1280 * 10 + "px";
  //   console.log('rem:', html.style.fontSize);
  // }
}
</script>