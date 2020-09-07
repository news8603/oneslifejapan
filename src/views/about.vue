<template>
  <!-- 这个文件写的是about one's life页面的内容 -->
  <div class="about">
    <div class="aboutimg1 aboutB">
      <div class="aboutinfo2 title1" :style="isEnStyle1">{{this.$t('about.abouttitle2')}}</div>
      <div class="aboutinfo1 title" :style="isEnStyle2">{{this.$t('about.abouttitle1')}}</div>
    </div>

    <div class="aboutimg2 aboutB aboutP">
      <div class="yLine aboutB aboutP"></div>
      <div class="yMF aboutB aboutP"></div>
      <div class="aboutinfo5">
        <div
          class="aboutinfo5-in"
          v-html="this.$t('about.aboutinfo2').replace(/\n/g,'<br\>')"
          :style="isEnStyle3"
        ></div>
      </div>
      <div
        class="aboutinfo3"
        v-html="this.$t('about.aboutinfo1').replace(/\n/g,'<br\>')"
        :style="isEnStyle4"
      ></div>
      <div class="aboutinfo4 title" :style="isEnStyle5">{{this.$t('about.abouttitle3')}}</div>
    </div>

    <div class="aboutimg3 aboutB aboutP" id="history"></div>
    <div class="aboutimg4 aboutB aboutP">
      <div class="aboutimg5 aboutB"></div>
    </div>

    <div class="aboutimg6 aboutP">
      <div class="aboutimg6-top" :style="aboutimg1">
        <img src="../about/ABOUT200618_0015_1996April.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title"></div>
      </div>

      <div class="aboutimg6-bottom" :style="aboutimg1">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1.jpg" alt />
        </div>
      </div>

      <div class="aboutimg6-top" :style="aboutimg2">
        <img src="../about/ABOUT200618_0011_2016April.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title title2">{{this.$t('about.abouttitle5')}}</div>
      </div>
      <div class="aboutimg6-bottom" :style="aboutimg2">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1-1.jpg" alt />
        </div>
      </div>

      <div class="aboutimg6-top" :style="aboutimg3">
        <img src="../about/ABOUT200618_0011_2016April.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title title2">{{this.$t('about.abouttitle6')}}</div>
      </div>
      <div class="aboutimg6-bottom" :style="aboutimg3">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1-3.jpg" alt />
        </div>
      </div>

      <div class="aboutimg6-top" :style="aboutimg4">
        <img src="../about/ABOUT200618_0009_2018February.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title title2">{{this.$t('about.abouttitle7')}}</div>
      </div>
      <div class="aboutimg6-bottom" :style="aboutimg4">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1-4.jpg" alt />
        </div>
      </div>

      <div class="aboutimg6-top" :style="aboutimg5">
        <img src="../about/ABOUT200618_0006_2018June.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title title2">{{this.$t('about.abouttitle8')}}</div>
      </div>
      <div class="aboutimg6-bottom" :style="aboutimg5">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1-5.jpg" alt />
        </div>
      </div>

      <div class="aboutimg6-top" :style="aboutimg6">
        <img src="../about/ABOUT200618_0004_2019June.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title title2">{{this.$t('about.abouttitle9')}}</div>
      </div>
      <div class="aboutimg6-bottom" :style="aboutimg6">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1-6.jpg" alt />
        </div>
      </div>

      <div class="aboutimg6-top" :style="aboutimg7">
        <img src="../about/ABOUT200618_0002_2019September.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title title2">{{this.$t('about.abouttitle10')}}</div>
      </div>
      <div class="aboutimg6-bottom" :style="aboutimg7">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1-7.jpg" alt />
        </div>
      </div>
      <div class="aboutimg7 aboutB aboutP"></div>
      <div class="aboutimg8 aboutB aboutP"></div>
      <div class="aboutimg9 aboutB aboutP"></div>
      <div class="aboutimg10 aboutP" id="profile" :style="ifEnPhone">
        <!-- ifEnPhone是一个对象，记录着随语言切换时的居顶距离 -->
        <div class="aboutimg10-info1">
          <div v-html="this.$t('about.aboutinfo4').replace(/\n/g,'<br\>')" :style="isEnStyle6"></div>
          <div v-html="this.$t('about.aboutinfo5').replace(/\n/g,'<br\>')" :style="isEnStyle7"></div>
        </div>
        <div class="aboutimg10-info2" :style="isEnStyle9">{{this.$t('about.abouttitle11')}}</div>
        <div class="aboutimg11-info1">
          <div v-html="this.$t('about.aboutinfo6').replace(/\n/g,'<br\>')" :style="isEnStyle8"></div>
        </div>
      </div>
      <div class="aboutimg12 aboutB aboutP"></div>
      <div class="aboutimg13 aboutB aboutP"></div>
      <div class="aboutimg14 aboutB aboutP" :style="ifEnPhone1">
        <div ></div>
      </div>
      <div class="aboutimg15 aboutB aboutP"></div>
      <div class="aboutimg16 aboutB aboutP" :style="aboutimg8"></div>
      <div class="aboutimg17 aboutB aboutP" :style="aboutimg8"></div>
      <div class="aboutimg18 aboutB aboutP" :style="aboutimg8"></div>
      <div class="aboutimg19 aboutB aboutP">
        <div v-html="this.$t('about.aboutinfo7').replace(/\n/g,'<br\>')"></div>
      </div>
      <div class="aboutimg23 aboutB aboutP" :style="aboutimg9"></div>
      <div class="aboutimg20 aboutP">
        <img src="../about/comm-1-8.jpg" alt />
        <div class="aboutimg20-info" v-html="this.$t('about.aboutinfo8').replace(/\n/g,'<br\>')"></div>
      </div>
      <div class="aboutimg21 aboutB aboutP" id="about"></div>
      <div class="aboutimg22 aboutB aboutP" :style="aboutimg10">
        <div :style="aboutimg10" class="aboutimgend-1">{{this.$t('about.abouttitle12')}}</div>
        <div :style="aboutimg10" class="aboutimgend-1">{{this.$t('about.aboutinfo9')}}</div>
        <div :style="aboutimg10" class="aboutimgend-2">{{this.$t('about.abouttitle13')}}</div>
        <div :style="aboutimg10" class="aboutimgend-2">{{this.$t('about.aboutinfo10')}}</div>
        <div :style="aboutimg10" class="aboutimgend-3">{{this.$t('about.abouttitle14')}}</div>
        <div :style="aboutimg10" class="aboutimgend-3">{{this.$t('about.aboutinfo11')}}</div>
        <div :style="aboutimg10" class="aboutimgend-4">{{this.$t('about.abouttitle15')}}</div>
        <div :style="aboutimg10" class="aboutimgend-4">{{this.$t('about.aboutinfo12')}}</div>
        <div :style="aboutimg10" class="aboutimgend-5">{{this.$t('about.abouttitle16')}}</div>
        <div :style="aboutimg10" class="aboutimgend-5">
          {{this.$t('about.aboutinfo13')}}
          <div class="infoadd">{{this.$t('about.aboutinfoadd1')}}</div>
        </div>
        <div :style="aboutimg10" class="aboutimgend-6">{{this.$t('about.abouttitle17')}}</div>
        <div :style="aboutimg10" class="aboutimgend-6">{{this.$t('about.aboutinfo14')}}</div>
        <div :style="aboutimg10" class="aboutimgend-7">{{this.$t('about.abouttitle18')}}</div>
        <div :style="aboutimg10" class="aboutimgend-7">{{this.$t('about.aboutinfo15')}}</div>
        <div :style="aboutimg10" class="aboutimgend-8">{{this.$t('about.abouttitle19')}}</div>
        <div :style="aboutimg10" class="aboutimgend-8">{{this.$t('about.aboutinfo16')}}</div>
        <div :style="aboutimg10" class="aboutimgend-9">{{this.$t('about.abouttitle20')}}</div>
        <div :style="aboutimg10" class="aboutimgend-9">{{this.$t('about.aboutinfo17')}}</div>
        <div :style="aboutimg10" class="aboutimgend-10">{{this.$t('about.abouttitle21')}}</div>
        <div
          :style="aboutimg10"
          class="aboutimgend-10"
          v-html="this.$t('about.aboutinfo18').replace(/\n/g,'<br\>')"
        ></div>
      </div>
      <div class="aboutimg24 aboutB aboutP" :style="aboutimg10"></div>
    </div>
  </div>
</template>
<script>
import { fromEvent, interval } from "rxjs";
import { map } from "rxjs/operators";
export default {
  name: "about",
  data() {
    return {
      ifEnPhone: { top: "" },
      ifEnPhone1: { top: "" },
      aboutimg1: { opacity: 0 },
      aboutimg2: { opacity: 0 },
      aboutimg3: { opacity: 0 },
      aboutimg4: { opacity: 0 },
      aboutimg5: { opacity: 0 },
      aboutimg6: { opacity: 0 },
      aboutimg7: { opacity: 0 },
      aboutimg8: { opacity: 0 },
      aboutimg9: { opacity: 0 },
      aboutimg10: { opacity: 0 },
      isEnStyle1: { writingMode: "vertical-rl" },
      isEnStyle2: { writingMode: "vertical-rl" },
      isEnStyle3: { writingMode: "vertical-rl" },
      isEnStyle4: { writingMode: "vertical-rl" },
      isEnStyle5: { writingMode: "vertical-rl" },
      isEnStyle6: { writingMode: "vertical-rl" },
      isEnStyle7: { writingMode: "vertical-rl" },
      isEnStyle8: { writingMode: "vertical-rl" },
      isEnStyle9: { writingMode: "vertical-rl" },
    };
  },
  computed: {
    ifEn: function () {
      return this.$store.state.en;
    },
    sWidth: function () {
      //sWidth记录着屏幕状态
      let s = false;
      if (document.body.clientWidth > 500) {
        s = false;
      } else {
        s = true;
      }
      return s;
    },
  },
  watch: {
    ifEn: function () {
      this.changeStyle();
      if (this.$store.state.en && this.sWidth) {
        //如果选择了英语语言,且处于手机端，则改变居顶为止
        this.ifEnPhone.top = 1950 + "px";
        this.ifEnPhone1.top = 2720 + "px";
      } else {
        this.ifEnPhone.top = "";
        this.ifEnPhone1.top = "";
      }
    },
  },
  subscriptions() {
    this.scroll$ = fromEvent(document, "scroll").pipe(
      map(() => document.documentElement.scrollTop || document.body.scrollTop)
    );
  },
  mounted() {
    let this$ = this;
    let isPhone = document.body.clientWidth;

    this$.changeStyle();
    this.scroll$.subscribe(function downD(x) {
      console.log(x);
      if (isPhone > 500) {
        this.sWidth = false;
        if (x > 1800 && x < 2400) {
          this$.aboutimg1 = { opacity: 1 };
        } else if (x > 2400 && x < 3100) {
          this$.aboutimg2 = { opacity: 1 };
        } else if (x > 3100 && x < 3800) {
          this$.aboutimg3 = { opacity: 1 };
        } else if (x > 3800 && x < 4400) {
          this$.aboutimg4 = { opacity: 1 };
        } else if (x > 4400 && x < 5000) {
          this$.aboutimg5 = { opacity: 1 };
        } else if (x > 5000 && x < 5600) {
          this$.aboutimg6 = { opacity: 1 };
        } else if (x > 5600 && x < 7500) {
          this$.aboutimg7 = { opacity: 1 };
        } else if (x > 7500 && x < 9200) {
          this$.aboutimg8 = { opacity: 1 };
        } else if (x > 9200 && x < 9400) {
          this$.aboutimg9 = { opacity: 1 };
        } else if (x > 9400) {
          this$.aboutimg10 = { opacity: 1 };
        }
      } else {
        this.sWidth = true;
        this$.aboutimg1 = { opacity: 1 };
        this$.aboutimg2 = { opacity: 1 };
        this$.aboutimg3 = { opacity: 1 };
        this$.aboutimg4 = { opacity: 1 };
        this$.aboutimg5 = { opacity: 1 };
        this$.aboutimg6 = { opacity: 1 };
        this$.aboutimg7 = { opacity: 1 };
        this$.aboutimg8 = { opacity: 1 };
        this$.aboutimg9 = { opacity: 1 };
        this$.aboutimg10 = { opacity: 1 };
      }
    });
  },
  methods: {
    changeStyle() {
      if (this.$store.state.en && document.body.clientWidth < 500) {
        console.log("选择了En");
        this.isEnStyle1 = { writingMode: "rl", marginTop: "100px" };
        this.isEnStyle2 = {
          writingMode: "rl",
          marginTop: "-600px",
          display: "block",
        };
        this.isEnStyle3 = {
          writingMode: "rl",
          marginTop: "100px",
          width: "60%",

          display: "block",
        };
        this.isEnStyle4 = {
          writingMode: "rl",
          marginTop: "-370px",
          display: "block",
          width: "80%",
          marginLeft: "30px",
        };
        this.isEnStyle5 = {
          writingMode: "rl",
          marginTop: "-360px",
          display: "block",
        };
        this.isEnStyle6 = {
          writingMode: "rl",
          marginTop: "320px",
          display: "block",
        };
        this.isEnStyle7 = {
          writingMode: "rl",
          marginTop: "-370px",
          display: "block",
        };
        this.isEnStyle8 = {
          writingMode: "rl",
          width: "95%",
          marginRight: "15px",
          marginTop: "30px",
          display: "block",
        };
        this.isEnStyle9 = {
          writingMode: "rl",
          marginTop: "100px",
        };
      } else if (this.$store.state.en) {
        console.log("选择了手机端的En");
        this.isEnStyle1 = { writingMode: "rl" };
        this.isEnStyle2 = {
          writingMode: "rl",
          marginTop: "-600px",
          display: "block",
        };
        this.isEnStyle3 = {
          writingMode: "rl",
          marginTop: "-470px",
          display: "block",
        };
        this.isEnStyle4 = {
          writingMode: "rl",
          marginTop: "-470px",
          display: "block",
          width: "80%",
          marginLeft: "120px",
        };
        this.isEnStyle5 = {
          writingMode: "rl",
          marginTop: "-500px",
          display: "block",
        };
        this.isEnStyle6 = {
          writingMode: "rl",
          marginTop: "20px",
          display: "block",
        };
        this.isEnStyle7 = {
          writingMode: "rl",
          // marginTop: "-500px",
          display: "block",
        };
        this.isEnStyle8 = {
          writingMode: "rl",
          width: "30%",
          marginTop: "-600px",
          display: "block",
        };
        this.isEnStyle9 = {
          writingMode: "rl",
        };
      } else {
        this.isEnStyle1 = { writingMode: "vertical-rl" };
        this.isEnStyle2 = { writingMode: "vertical-rl" };
        this.isEnStyle3 = { writingMode: "vertical-rl" };
        this.isEnStyle4 = { writingMode: "vertical-rl" };
        this.isEnStyle5 = { writingMode: "vertical-rl" };
        this.isEnStyle6 = { writingMode: "vertical-rl" };
        this.isEnStyle7 = { writingMode: "vertical-rl" };
        this.isEnStyle8 = { writingMode: "vertical-rl" };
        this.isEnStyle9 = { writingMode: "vertical-rl" };
        if(!this.$store.state.en){
        this.isEnStyle8 = {};
        this.isEnStyle9 = {};
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
.aboutB {
  background-repeat: no-repeat;
  background-size: contain;
}
.aboutP {
  position: absolute;
}
@media screen and(min-width: 500px) {
  .title {
    font-size: 3.5rem;
  }
  .title1 {
    font-size: 8.5rem;
  }
  .title2 {
    font-size: 2rem;
    padding-right: 230px;
    padding-top: 30px;
    float: right;
  }
  .about {
    max-width: 1280px;
    min-width: 1280px;
    height: 11300px;
    margin: auto;
    font-size: 1.2rem;
    overflow: hidden;
    color: #615a5a;
    position: relative;
    .aboutimg1 {
      width: 100%;
      height: 1430px;
      background-image: url(../about/about-1.jpg);

      .aboutinfo1 {
        display: inline-block;
        margin: auto;
        writing-mode: vertical-rl;
        margin-bottom: 400px;
        padding-left: 20px;
        height: 580px;
      }
      .aboutinfo2 {
        display: inline-block;
        margin: auto;
        writing-mode: vertical-rl;
        margin-top: 550px;
        height: 800px;
      }
    }

    .aboutimg2 {
      top: 1140px;
      width: 1280px;
      right: 0px;
      height: 920px;
      background-position-x: right;
      background-image: url(../about/ABOUT200618_0019_bg.png);
      text-align: right;
      // letter-spacing: 0.5rem;
      line-height: 3.5rem;
      .yLine {
        top: 220px;
        background-image: url(../about/ABOUT200618_0001_line.png);
        width: 440px;
        height: 5px;
      }
      .yMF {
        top: 560px;
        background-image: url(../about/message.png);
        width: 350px;
        right: 255px;
        height: 55px;
      }
      .aboutinfo3 {
        display: inline-block;
        height: 350px;
        margin-top: 100px;
        vertical-align: top;
        padding-right: 40px;
        text-align: start;
        writing-mode: vertical-rl;
      }
      .aboutinfo4 {
        display: inline-block;
        padding-bottom: 160px;
        height: 300px;
        padding-right: 140px;
        vertical-align: top;
        writing-mode: vertical-rl;
      }
      .aboutinfo5 {
        display: inline-block;
        height: 800px;
        text-align: start;
        padding-right: 340px;
        writing-mode: vertical-rl;
        vertical-align: top;
        .aboutinfo5-in {
          padding-top: 300px;
        }
      }
    }
    .aboutimg3 {
      top: 1800px;
      width: 800px;
      height: 800px;
      background-image: url(../about/ABOUT200618_0021_bg.png);
    }
    .aboutimg4 {
      top: 1800px;
      right: 0px;
      width: 800px;
      height: 1200px;
      background-image: url(../about/ABOUT200618_0029_bg.png);
      .aboutimg5 {
        margin-top: 310px;
        width: 520px;
        height: 160px;
        background-image: url(../about/history.png);
      }
    }
    .aboutimg6 {
      top: 2250px;
      width: 1280px;
      height: 600px;
      .aboutimg6-top {
        text-align: left;
        padding-left: 100px;
        transition: 0.6s;

        .aboutimg-inimg {
          width: 240px;
          display: inline-block;
        }
        .aboutimg6-title {
          display: inline-block;
        }
      }
      .aboutimg6-bottom {
        transition: all 0.6s ease-out 0.4s;

        .aboutYline {
          display: inline-block;
          background-image: url(../about/ABOUT200618_0007_line.png);
          height: 500px;
          width: 5px;
        }
        .aboutI {
          display: inline-block;
          img {
            border-radius: 15px;
            margin: 60px;
            width: 800px;
            height: 400px;
          }
        }
      }
      .aboutimg7 {
        background-image: url(../about/ABOUT200618_0030_bg.png);
        width: 800px;
        height: 800px;
        top: 1000px;
        z-index: -1;
      }
      .aboutimg8 {
        background-image: url(../about/ABOUT200618_0019_bg.png);
        width: 300px;
        height: 720px;
        top: 1500px;
        z-index: -1;
        right: 0;
      }
      .aboutimg9 {
        background-image: url(../about/ABOUT200618_0027_bg.png);
        width: 1200px;
        height: 1200px;
        top: 2500px;
        z-index: -1;
      }
      .aboutimg10 {
        width: 1200px;
        height: 1000px;
        top: 4400px;
        margin: auto;
        vertical-align: baseline;
        .aboutimg10-info1 {
          display: inline-block;
          width: 400px;
          div {
            writing-mode: vertical-rl;
            height: 400px;
            text-align: start;
            float: right;
            line-height: 2.5rem;
            // letter-spacing: 0.5rem;
            margin-top: 30px;
            margin-right: 50px;
          }
        }
        .aboutimg10-info2 {
          display: inline-block;
          font-size: 5.5rem;
          writing-mode: vertical-rl;
          vertical-align: top;
          margin-top: 80px;
        }
        .aboutimg11-info1 {
          display: inline-block;
          div {
            writing-mode: vertical-rl;
            // height: 600px;
            text-align: start;
            float: right;
            line-height: 2.5rem;
            // letter-spacing: 0.5rem;
            margin: auto;
            margin-top: 30px;
            margin-bottom: 120px;
            margin-left: 50px;
          }
        }
      }
      .aboutimg12 {
        background-image: url(../about/ABOUT200618_0026_bg.png);
        top: 4000px;
        width: 400px;
        height: 600px;
        right: 0;
        z-index: -1;
      }
      .aboutimg13 {
        background-image: url(../about/ABOUT200618_0018_bg.png);
        top: 4500px;
        width: 900px;
        height: 900px;
        right: 100px;
        z-index: -1;
      }
      .aboutimg14 {
        top: 5350px;
        width: 450px;
        padding-left: 250px;
        text-align: left;
        line-height: 3rem;
      }
      .aboutimg15 {
        top: 5100px;
        width: 950px;
        right: 0;
        height: 1130px;
        background-image: url(../about/ABOUT200618_0034_map.png);
        z-index: -1;
      }
      .aboutimg16 {
        background-image: url(../about/ABOUT200618_0031_osaka.png);
        top: 5860px;
        width: 150px;
        height: 150px;
        right: 260px;
        transition: 0.6s;
      }
      .aboutimg18 {
        background-image: url(/img/ABOUT200618_0031_osaka.b24301a2.png);
        top: 5910px;
        width: 100px;
        height: 100px;
        right: 420px;
        transition: all 0.6s ease-out 0.8s;
      }
      .aboutimg17 {
        background-image: url(../about/ABOUT200618_0031_osaka.png);
        top: 5910px;
        width: 150px;
        height: 150px;
        right: 550px;
        transition: all 0.6s ease-out 0.4s;
      }
      .aboutimg19 {
        top: 6090px;
        right: 50px;
        width: 500px;
        text-align: right;
        line-height: 3rem;
        // letter-spacing: 0.5rem;
      }
      .aboutimg23 {
        background-image: url(../about/ABOUT200618_0025_bg.png);
        top: 7000px;
        right: 0px;
        width: 500px;
        height: 500px;
        transition: 0.6s;
      }
      .aboutimg20 {
        top: 6380px;
        width: 1280px;
        img {
          margin: auto;
          width: 90%;
        }
        .aboutimg20-info {
          margin: auto;
          margin-top: 35px;
          width: 90%;
          line-height: 2.5rem;
          // letter-spacing: 0.5rem;
          text-align: left;
        }
      }
      .aboutimg21 {
        background-image: url(../about/company.png);
        height: 600px;
        left: 100px;
        width: 300px;
        top: 7400px;
        z-index: -1;
      }
      .aboutimg22 {
        display: grid;
        top: 7600px;
        width: 850px;
        right: 0px;
        grid-template-columns: 250px 600px;
        .aboutimgend-1 {
          transition: all 0.6s ease-out 0.4s;
        }
        .aboutimgend-2 {
          transition: all 0.6s ease-out 0.8s;
        }
        .aboutimgend-3 {
          transition: all 0.6s ease-out 1.2s;
        }
        .aboutimgend-4 {
          transition: all 0.6s ease-out 1.6s;
        }
        .aboutimgend-5 {
          transition: all 0.6s ease-out 2s;
          .infoadd {
            padding-left: 25px;
            display: inline;
          }
        }
        .aboutimgend-6 {
          transition: all 0.6s ease-out 2.4s;
        }
        .aboutimgend-7 {
          transition: all 0.6s ease-out 2.8s;
        }
        .aboutimgend-8 {
          transition: all 0.6s ease-out 3.2s;
        }
        .aboutimgend-9 {
          transition: all 0.6s ease-out 3.6s;
        }
        .aboutimgend-10 {
          transition: all 0.6s ease-out 4s;
        }
        div {
          padding-top: 35px;
          text-align: left;
          padding-bottom: 15px;
          border-bottom: 2px solid #dcdcdc;
        }
      }
      .aboutimg24 {
        background-image: url(../about/ABOUT200618_0024_bg.png);
        top: 7800px;
        left: 0px;
        width: 700px;
        height: 700px;
        transition: 0.6s;
      }
    }
  }
}
@media screen and(max-width: 500px) {
  .title {
    font-size: 2rem;
  }
  .title1 {
    font-size: 4rem;
  }
  .title2 {
    padding-left: 15px;
    font-size: 1.2rem;
  }
  .about {
    max-width: 420px;
    width: 420px;
    height: 6150px;
    overflow: hidden;
    margin: auto;
    font-size: 0.8rem;
    color: #615a5a;
    position: relative;
    .aboutimg1 {
      width: 100%;
      height: 600px;
      background-image: url(../about/about-1.jpg);
      .aboutinfo1 {
        display: inline-block;
        margin: auto;
        writing-mode: vertical-rl;
        margin-bottom: 350px;
        padding-left: 20px;
        height: 250px;
      }
      .aboutinfo2 {
        display: inline-block;
        margin: auto;
        writing-mode: vertical-rl;
        height: 750px;
      }
    }

    .aboutimg2 {
      top: 500px;
      width: 100%;
      right: 0px;
      height: 1020px;
      background-position-x: right;
      background-image: url(../about/ABOUT200618_0019_bg.png);
      text-align: right;
      // letter-spacing: 0.5rem;
      line-height: 1rem;
      .yLine {
        top: 80px;
        background-image: url(../about/ABOUT200618_0001_line.png);
        width: 150px;
        height: 5px;
      }
      .yMF {
        top: 350px;
        background-image: url(../about/message.png);
        width: 140px;
        right: 65px;
        height: 25px;
      }
      .aboutinfo3 {
        display: inline-block;
        height: 280px;
        vertical-align: top;
        padding-right: 40px;
        text-align: start;
        line-height: 1.2rem;

        writing-mode: vertical-rl;
      }
      .aboutinfo4 {
        display: inline-block;
        padding-bottom: 20px;
        height: 180px;
        padding-right: 40px;
        vertical-align: top;
        writing-mode: vertical-rl;
      }
      .aboutinfo5 {
        display: inline-block;
        height: 400px;
        text-align: start;
        line-height: 1.2rem;
        padding-right: 90px;
        writing-mode: vertical-rl;
        vertical-align: top;
        .aboutinfo5-in {
          padding-top: 100px;
        }
      }
    }
    .aboutimg3 {
      top: 500px;
      width: 400px;
      height: 400px;
      background-image: url(../about/ABOUT200618_0021_bg.png);
    }
    .aboutimg4 {
      top: 780px;
      right: -20px;
      width: 420px;
      height: 500px;
      background-image: url(../about/ABOUT200618_0029_bg.png);
      .aboutimg5 {
        margin-top: 150px;
        width: 320px;
        height: 100px;
        background-image: url(../about/history.png);
      }
    }
    .aboutimg6 {
      top: 1050px;
      width: 420px;
      height: 600px;
      .aboutimg6-top {
        text-align: left;
        padding-left: 10px;
        transition: 0.6s;

        .aboutimg-inimg {
          width: 90px;
          display: inline-block;
        }
        .aboutimg6-title {
          display: inline-block;
        }
      }
      .aboutimg6-bottom {
        transition: all 0.6s ease-out 0.4s;
        .aboutYline {
          display: inline-block;
          background-image: url(../about/ABOUT200618_0007_line.png);
          height: 200px;
          width: 5px;
        }
        .aboutI {
          display: inline-block;
          img {
            border-radius: 12px;
            margin: 8px;
            width: 300px;
            height: 200px;
          }
        }
      }
      .aboutimg7 {
        background-image: url(../about/ABOUT200618_0030_bg.png);
        width: 400px;
        height: 400px;
        top: 600px;
        z-index: -1;
      }
      .aboutimg8 {
        background-image: url(../about/ABOUT200618_0019_bg.png);
        width: 200px;
        height: 600px;
        top: 1800px;
        z-index: -1;
        right: 0;
      }
      .aboutimg9 {
        background-image: url(../about/ABOUT200618_0027_bg.png);
        width: 400px;
        height: 400px;
        top: 1400px;
        z-index: -1;
      }
      .aboutimg10 {
        width: 420px;
        top: 1870px;
        margin: auto;
        vertical-align: baseline;
        .aboutimg10-info1 {
          display: inline-block;
          width: 400px;

          div {
            writing-mode: vertical-rl;
            display: inline-block;
            height: 200px;
            text-align: start;
            // float: right;
            // line-height: 2rem;
            // letter-spacing: 0.5rem;
            margin-top: 30px;
            margin-right: 30px;
          }
        }
        .aboutimg10-info2 {
          // display: inline-block;

          font-size: 3rem;
          // writing-mode: vertical-rl;
          vertical-align: top;
          margin-top: 10px;
          margin-right: 15px;
        }
        .aboutimg11-info1 {
          // display: inline-block;
          // margin-left: 50px;
          margin: auto;
          width: 380px;
          div {
            // writing-mode: vertical-rl;
            // height: 260px;
            text-align: start;
            float: right;
            // line-height: 1.5rem;
            // letter-spacing: 0.5rem;
            margin-top: 30px;
            margin-bottom: 50px;
          }
        }
      }
      .aboutimg12 {
        background-image: url(../about/ABOUT200618_0026_bg.png);
        top: 2000px;
        width: 400px;
        height: 600px;
        right: 0;
        z-index: -1;
      }
      .aboutimg13 {
        background-image: url(../about/ABOUT200618_0018_bg.png);
        top: 2200px;
        width: 600px;
        height: 600px;
        right: 10px;
        z-index: -1;
      }
      .aboutimg14 {
        top: 2350px;
        width: 380px;
        padding-left: 20px;
        text-align: left;
        // line-height: 2rem;
      }
      .aboutimg15 {
        top: 2450px;
        width: 400px;
        right: 0;
        height: 600px;
        background-image: url(../about/ABOUT200618_0034_map.png);
        z-index: -1;
      }
      .aboutimg16 {
        background-image: url(../about/ABOUT200618_0031_osaka.png);
        top: 2820px;
        width: 70px;
        height: 70px;
        right: 220px;
        transition: 0.6s;
      }
      .aboutimg18 {
        background-image: url(/img/ABOUT200618_0031_osaka.b24301a2.png);
        top: 2780px;
        width: 50px;
        height: 50px;
        right: 160px;
        transition: all 0.6s ease-out 0.8s;
      }
      .aboutimg17 {
        background-image: url(../about/ABOUT200618_0031_osaka.png);
        top: 2720px;
        width: 80px;
        height: 80px;
        right: 80px;
        transition: all 0.6s ease-out 0.4s;
      }
      .aboutimg19 {
        top: 2950px;
        left: 20px;
        width: 360px;
        text-align: left;
        // line-height: 1.2rem;
        // letter-spacing: 0.3rem;
      }
      .aboutimg23 {
        background-image: url(../about/ABOUT200618_0025_bg.png);
        top: 3290px;
        right: 0px;
        width: 310px;
        height: 310px;
        transition: 0.6s;
      }
      .aboutimg20 {
        top: 3050px;
        width: 420px;
        img {
          margin: auto;
          width: 90%;
        }
        .aboutimg20-info {
          margin: auto;
          margin-top: 35px;
          width: 90%;
          // line-height: 1.2rem;
          // letter-spacing: 0.3rem;
          text-align: left;
        }
      }
      .aboutimg21 {
        background-image: url(../about/company.png);
        height: 250px;
        width: 120px;
        left: 10px;
        top: 3540px;
        z-index: -1;
      }
      .aboutimg22 {
        display: grid;
        top: 3600px;
        width: 300px;
        right: 0px;
        grid-template-columns: 120px 150px;
        .infoadd {
          padding-left: 10px;
          display: inline;
        }
        div {
          padding-top: 15px;
          text-align: left;
          padding-bottom: 8px;
          border-bottom: 1px solid #dcdcdc;
        }
      }
      .aboutimg24 {
        background-image: url(../about/ABOUT200618_0024_bg.png);
        top: 3700px;
        left: 0px;
        width: 300px;
        height: 300px;
        transition: 0.6s;
      }
    }
  }
}
</style>