<template>
  <div id="app">
    <el-container>
      <el-header>
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
a {
  color: #2c3e50;
  text-decoration: none;
}
a:link {
  color: #2c3e50;
  text-decoration: none;
}
a:visited {
  color: #2c3e50;
  text-decoration: none;
}
a:hover {
  color: #2c3e50;
  text-decoration: none;
}
a:active {
  color: #2c3e50;
  text-decoration: none;
}
body {
  margin: 10px 0px;
  padding: 0px;
}
#app {
  font-family: "Noto Serif SC", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .el-header {
    padding: 0 15px;
  }
  .el-main {
    padding: 0px;
  }
  .el-footer {
    padding: 0px;
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
</style>
<script>
import topmenu from "./components/topmenu";
import copyright from "./components/copyright";
import imain from "./views/imain";

export default {
  components: {
    imain,
    topmenu,
    copyright
  }
};
</script>