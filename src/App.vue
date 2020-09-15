<template>
  <div id="app" style="display: none">
    <div
      class="swiper-slide-video"
      :style="videoEnd"
      id="appVideo"
      style="display: block"
      @click="videwDown"
    >
      <div class="skip">Click To Skip Animation</div>
      <video id="player" src="./down.mp4" autoplay muted playsinline poster="./indextp.jpg"></video>
    </div>

    <el-container id="appback">
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
    // -webkit-mask: url(try.png) no-repeat;
    .skip {
      font-size: 1rem;
      position: fixed;
      color:#ffc107;
      right: 10%;
      left: 10%;
      bottom: 10%;
      letter-spacing: 0.3rem;
    }

    #player {
      height: -webkit-fill-available;
      width: 100vw;
    }
  }
  .swiper-slide-video:hover {
    cursor: pointer;
  }
  #appVideo {
    transition: 2s 0.1s;
    opacity: 1;
    -webkit-mask: -webkit-gradient(
      radial,
      50% 50%,
      0,
      50% 50%,
      0,
      from(#fffffd),
      color-stop(0.5, rgba(255, 166, 0, 0)),
      to(#000103)
    );
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
import { interval, timer } from "rxjs";

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
      let i = 0;
      if (this.$store.state.isFirst) {
        this.$store.state.isFirst = false; //点击一回开场动画后isFirst为假，避免重复播放消除动画
        var abs = setInterval(() => {
          i = i + 15;

          document.getElementById("appVideo").style.WebkitMask = //遮罩的圆心扩大的效果
            "-webkit-gradient(radial,50% 50%," +
            i +
            ",50% 50%,0,from(#fffffd),color-stop(0.5, rgba(255, 166, 0, 0)),to(#000103))";
          document.getElementById("appVideo").style.opacity = "0"; //动画全部消失

          if (i > 2000) {
            document.getElementById("appVideo").style.display = "none";
            clearInterval(abs);
          }
        }, 10);
        document.getElementById("app").style.display = "block";
      }
    },
  },
  mounted() {
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf("micromessenger") != -1;
    if (isWeixin) {
      document.getElementById("appVideo").style.display = "none";
      document.getElementById("app").style.display = "block";
    } else {
      let this$ = this;
      if (this.$store.state.isFirst) {
        document
          .getElementById("player")
          .addEventListener("canplaythrough", function () {
            // setTimeout(() => {
            //   this$.videoEnd = { opacity: 0 };
            //   setTimeout(() => {
            //
            //     document.getElementById("appVideo").style.display = "none";
            //   }, 1000);
            // }, 12000);

            setTimeout(() => {
              this$.videwDown(); //widewDown函数是开场动画的消失效果
            }, 10000);
          });
        document.getElementById("app").style.display = "block";
      } else {
        document.getElementById("appVideo").style.display = "none";
        document.getElementById("app").style.display = "block";
      }
    }
  },
};
</script>