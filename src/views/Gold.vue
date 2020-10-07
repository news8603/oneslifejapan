<template>
  <!-- 黄金棒的内页 -->
  <div class="gold">
    <div class="goldimg1 goldP" :style="goldimg1"></div>
    <div class="goldimg2 goldP" :style="goldimg1"></div>
    <div class="goldimg3 goldP" :style="goldimg1"></div>
    <div class="goldimg4 goldP" :style="goldimg1"></div>
    <div class="goldtext goldP" :style="goldimg1">
      <div
        class="goldI"
        v-html="this.$t('gold.goldinfo1').replace(/\n/g, '<br\>')"
      ></div>
      <div
        class="goldT"
        v-html="this.$t('gold.goldtitle1').replace(/\n/g, '<br\>')"
      ></div>
    </div>
    <div class="goldimg5 goldP"></div>
    <div
      class="goldT goldP"
      v-html="this.$t('gold.goldtitle2').replace(/\n/g, '<br\>')"
      :style="goldimg2"
    ></div>
    <div class="goldinfo2 goldP" :style="goldimg3">
      <div v-html="this.$t('gold.goldinfo2').replace(/\n/g, '<br\>')"></div>
    </div>
    <div class="goldimg6 goldP"></div>
    <div
      class="goldinfo3 goldP goldT"
      v-html="this.$t('gold.goldtitle3').replace(/\n/g, '<br\>')"
      :style="goldimg4"
    ></div>
    <div class="goldimg7 goldP" :style="goldimg4"></div>
    <div
      class="goldinfo4 goldP"
      v-html="this.$t('gold.goldinfo3').replace(/\n/g, '<br\>')"
      :style="goldimg4"
    ></div>
    <div class="goldimg8 goldP" :style="goldimg6"></div>
    <div class="goldimg9 goldP" :style="goldimg6"></div>
    <div class="goldimg10 goldP" :style="goldimg6"></div>
    <div class="goldinfo5 goldP" :style="goldimg5">
      <div class="goldT">{{ this.$t("gold.goldtitle4") }}</div>
      <div v-html="this.$t('gold.goldinfo4').replace(/\n/g, '<br\>')"></div>
    </div>
    <a
      href="https://store.shopping.yahoo.co.jp/oneslifejapan/olj0020.html"
      target="_blank"
    >
      <div class="netbuy goldP" :style="goldimg5" v-if="$store.state.jp">
        {{ this.$t("hp.netbuy") }}
      </div>
    </a>
    <div class="urlImageCss goldP" :style="goldimg5" v-if="$store.state.zh">
      <div class="urlImage">
        <img src="../../public/static/url/24Kruyi.png" alt="" />
        <div>
          <p>请用微信扫描小程序码购买产品</p>
          <p>（微信环境下可直接长按扫码）</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fromEvent } from "rxjs";
export default {
  name: "gold",
  data() {
    return {
      goldimg1: { opacity: 0 },
      goldimg2: { opacity: 0 },
      goldimg3: { opacity: 0 },
      goldimg4: { opacity: 0 },
      goldimg5: { opacity: 0 },
      goldimg6: { opacity: 0 },
    };
  },
  mounted() {
    let this$ = this;
    let isPhone = document.body.clientWidth;
    this$.goldimg1 = { opacity: 1 };
    const scroll$ = fromEvent(document, "scroll");
    scroll$.subscribe(function downD() {
      let whereScoll =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(whereScoll);
      if (isPhone > 500) {
        if (whereScoll > 800 && whereScoll < 1500) {
          this$.goldimg2 = { opacity: 1 };
        } else if (whereScoll > 1500 && whereScoll < 2300) {
          this$.goldimg3 = { opacity: 1 };
        } else if (whereScoll > 2300 && whereScoll < 2700) {
          this$.goldimg4 = { opacity: 1 };
        } else if (whereScoll > 2700 && whereScoll < 3100) {
          this$.goldimg5 = { opacity: 1 };
        } else if (whereScoll > 3100) {
          this$.goldimg6 = { opacity: 1 };
        }
      } else {
        this$.goldimg2 = { opacity: 1 };
        this$.goldimg3 = { opacity: 1 };
        this$.goldimg4 = { opacity: 1 };
        this$.goldimg5 = { opacity: 1 };
        this$.goldimg6 = { opacity: 1 };
      }
    });
  },
};
</script>
<style lang="less" scoped>
.goldP {
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
}
@media screen and(min-width: 500px) {
  .goldT {
    font-size: 1.8rem;
    color: #b38e5e;
  }
  .gold {
    max-width: 1280px;
    min-width: 1280px;
    background-color: #f6f6f6;
    height: 4400px;
    margin: auto;
    overflow: hidden;
    position: relative;
    font-size: 1rem;
    line-height: 2rem;
    .goldimg1 {
      top: 80px;
      width: 400px;
      height: 400px;
      background-image: url(../24K_0001_ball.png);
      transition: 0.6s;
    }
    .goldimg2 {
      top: 20px;
      width: 500px;
      height: 500px;
      background-image: url(../24K_0004_ball.png);
      transition: all 0.6s ease-out 0.4s;
      right: 0px;
    }
    .goldimg3 {
      top: 600px;
      right: -90px;
      width: 280px;
      height: 280px;
      transition: all 0.6s ease-out 0.8s;
      background-image: url(../24K_0005_ball.png);
    }
    .goldimg4 {
      top: 210px;
      left: 120px;
      width: 350px;
      height: 800px;
      transition: all 0.6s ease-out 1.2s;
      background-image: url(../24K_0008_24k.png);
    }
    .goldtext {
      top: 410px;
      left: 450px;
      width: 55%;
      transition: all 0.6s ease-out 1.6s;

      .goldT {
        margin-top: 35px;
        text-align: left;
      }
    }
    .goldimg5 {
      top: 830px;
      left: 130px;
      width: 1050px;
      height: 1050px;
      background-image: url(../24K_0006_ripple.png);
    }
    .goldT {
      top: 1250px;
      left: 400px;
      font-size: 2.5rem;
      line-height: 4.5rem;
      transition: 0.6s;
    }
    .goldinfo2 {
      top: 1900px;
      left: 150px;
      width: 75%;
      transition: 0.6s;
    }
    .goldimg6 {
      top: 2100px;
      left: 220px;
      width: 950px;
      height: 600px;
      background-image: url(../24K_0000s_0000s_0000_03.png);
    }
    .goldinfo3 {
      top: 2750px;
      width: 80%;
      left: 150px;
    }
    .goldimg7 {
      top: 2900px;
      left: 100px;
      width: 950px;
      height: 200px;
      background-image: url(../24K_0007_24k.png);
      transition: all 0.6s ease-out 0.4s;
    }
    .goldinfo4 {
      top: 3120px;
      width: 70%;
      left: 210px;
      transition: all 0.6s ease-out 0.8s;
    }
    .goldimg8 {
      top: 3300px;
      width: 620px;
      height: 620px;
      background-image: url(../24K_0003_ball.png);
      transition: 0.6s;
    }
    .goldimg9 {
      top: 3350px;
      width: 1050px;
      height: 1050px;
      background-image: url(../24K_0002_mist.png);
      transition: all 0.6s ease-out 0.4s;
    }
    .goldimg10 {
      top: 3800px;
      left: 50px;
      width: 680px;
      height: 680px;
      background-image: url(../24K_0000_24k.png);
      transition: all 0.6s ease-out 0.8s;
    }
    .goldinfo5 {
      top: 3500px;
      right: 80px;
      width: 75%;
      text-align: right;
      transition: 0.6s;
      .goldT {
        margin-bottom: 120px;
      }
    }
    .netbuy {
      width: 35%;
      left: 56%;
      text-align: center;
      padding: 5px;
      color: white;
      top: 4000px;
      background-color: #945901;
      border-radius: 5px;
      transition: all 0.6s ease-out 0.4s;
    }
    .netbuy:hover {
      transition: 0.3s;
      background-color: #945901cc;
    }
    .urlImageCss {
      top: 3850px;
      right: 0px;
      .urlImage {
        display: inline-block;
        text-align: center;
        margin-top: 15px;
        img {
          width: 60%;
          height: 60%;
        }
        p {
          text-align: center;
        }
      }
    }
  }
}
@media screen and(max-width: 500px) {
  .goldT {
    font-size: 1.2rem;
    color: #b38e5e;
  }
  .gold {
    width: 420px;
    min-width: 420px;
    background-color: #f6f6f6;
    height: 2300px;
    margin: auto;
    overflow: hidden;
    position: relative;
    font-size: 1rem;
    line-height: 1.2rem;
    .goldimg1 {
      top: 80px;
      width: 150px;
      height: 150px;
      background-image: url(../24K_0001_ball.png);
      transition: 0.6s;
    }
    .goldimg2 {
      top: 20px;
      width: 200px;
      height: 200px;
      background-image: url(../24K_0004_ball.png);
      transition: all 0.6s ease-out 0.4s;
      right: 0px;
    }
    .goldimg3 {
      top: 200px;
      right: -35px;
      width: 120px;
      height: 120px;
      transition: all 0.6s ease-out 0.8s;
      background-image: url(../24K_0005_ball.png);
    }
    .goldimg4 {
      top: 160px;
      left: -30px;
      width: 150px;
      height: 350px;
      transition: all 0.6s ease-out 1.2s;
      background-image: url(../24K_0008_24k.png);
    }
    .goldtext {
      top: 140px;
      right: 90px;
      width: 53%;
      text-align: left;

      transition: all 0.6s ease-out 1.6s;
      .goldT {
        width: 120%;
        margin-top: 25px;
      }
    }
    .goldimg5 {
      top: 480px;
      left: 30px;
      width: 350px;
      height: 350px;
      background-image: url(../24K_0006_ripple.png);
    }
    .goldT {
      top: 590px;
      left: 60px;
      font-size: 1.5rem;
      line-height: 2rem;
      transition: 0.6s;
    }
    .goldinfo2 {
      top: 850px;
      left: 30px;
      width: 85%;
      transition: 0.6s;
    }
    .goldimg6 {
      top: 1030px;
      left: 50px;
      width: 420px;
      height: 220px;
      background-image: url(../24K_0000s_0000s_0000_03.png);
    }
    .goldinfo3 {
      top: 1300px;
      width: 90%;
      left: 20px;
    }
    .goldimg7 {
      top: 1400px;
      left: -25px;
      width: 420px;
      height: 200px;
      background-image: url(../24K_0007_24k.png);
      transition: all 0.6s ease-out 0.4s;
    }
    .goldinfo4 {
      top: 1500px;
      width: 80%;
      left: 40px;
      transition: all 0.6s ease-out 0.8s;
    }
    .goldimg8 {
      top: 1700px;
      width: 260px;
      height: 260px;
      background-image: url(../24K_0003_ball.png);
      transition: 0.6s;
    }
    .goldimg9 {
      top: 1750px;
      width: 450px;
      height: 450px;
      background-image: url(../24K_0002_mist.png);
      transition: all 0.6s ease-out 0.4s;
    }
    .goldimg10 {
      top: 1980px;
      left: 20px;
      width: 300px;
      height: 300px;
      background-image: url(../24K_0000_24k.png);
      transition: all 0.6s ease-out 0.8s;
    }
    .goldinfo5 {
      top: 1700px;
      right: 20px;
      width: 65%;
      text-align: right;
      transition: 0.6s;
      .goldT {
        margin-bottom: 50px;
      }
    }
    .netbuy {
      width: 35%;
      left: 56%;
      text-align: center;
      padding: 5px;
      color: white;
      top: 2050px;
      background-color: #945901;
      border-radius: 5px;
      transition: all 0.6s ease-out 0.4s;
    }
    .netbuy:hover {
      transition: 0.3s;
      background-color: #945901cc;
    }
    .urlImageCss {
      top: 1890px;
      right: 0px;
      width: 60%;
      .urlImage {
        display: inline-block;
        text-align: center;
        margin-top: 15px;
        img {
          width: 60%;
          height: 60%;
        }
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>