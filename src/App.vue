<template>
  <div id="app" style="display: none">
    <div
      class="swiper-slide-video"
      :style="videoEnd"
      id="appVideo"
      style="display: block"
      @click="videwDown"
    >
      <video id="player" src="./down.mp4" autoplay muted playsinline poster="./indextp.jpg"></video>
    </div>

    <el-container style="opacity: 0" id="appback">
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
    <el-backtop></el-backtop>
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

  .swiper-slide-video {
    position: fixed;
    background: black;
    z-index: 100;
    transition: 1s;
    #player {
      height: -webkit-fill-available;
      width: 100vw;
      margin: auto;
    }
  }
  #appback {
    transition: 1s;
  }
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
import { timer } from "rxjs";

export default {
  components: {
    imain,
    topmenu,
    copyright,
  },
  data() {
    return {
      loading: true,
      videoEnd: { opacity: 1 },
    };
  },
  methods: {
    videwDown: function () {
      document.getElementById("appVideo").style.display = "none";
      document.getElementById("app").style.display = "block";
      document.getElementById("appback").style.opacity = "1";
    },
  },
  mounted() {
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf("micromessenger") != -1;
    if (isWeixin) {
      document.getElementById("appVideo").style.display = "none";
      document.getElementById("app").style.display = "block";
      document.getElementById("appback").style.opacity = "1";
    } else {
      let this$ = this;
      if (this.$store.state.isFirst) {
        document
          .getElementById("player")
          .addEventListener("canplaythrough", function () {
            setTimeout(() => {
              this$.videoEnd = { opacity: 0 };
              setTimeout(() => {
                document.getElementById("appback").style.opacity = "1";
                document.getElementById("appVideo").style.display = "none";
              }, 1000);
            }, 12000);
          });
        document.getElementById("app").style.display = "block";
      } else {
        document.getElementById("appVideo").style.display = "none";
        document.getElementById("app").style.display = "block";
        document.getElementById("appback").style.opacity = "1";
      }
    }
  },
};
</script>