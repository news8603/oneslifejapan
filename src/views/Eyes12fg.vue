<template>
<!-- 12GF眼霜的内页 -->
  <div class="eyes12gf">
    <div class="eyeimg1 eyeB" :style="eyeimg1">
      <div class="eyeinfo1 eyestitle" :style="eyeimg1">{{this.$t('eyes.eyestitle1')}}</div>
      <div
        class="eyeinfo2"
        v-html="this.$t('eyes.eyesinfo1').replace(/\n/g,'<br\>')"
        :style="eyeimg1"
      ></div>
    </div>
    <div class="eyeimg2 eyeB" :style="eyeimg2"></div>
    <div class="eyeimg3 eyeB eyeP" :style="eyeimg2"></div>
    <div class="eyeimg4 eyeB eyeP" :style="eyeimg2"></div>
    <div
      class="eyeinfo3 eyestitle"
      v-html="this.$t('eyes.eyestitle2').replace(/\n/g,'<br\>')"
      :style="eyeimg2"
    ></div>
    <div
      class="eyeinfo4"
      v-html="this.$t('eyes.eyesinfo2').replace(/\n/g,'<br\>')"
      :style="eyeimg2"
    ></div>
    <div class="eyeimg5 eyeB" :style="eyeimg3">
      <div class="eyestitle1" :style="eyeimg3">{{this.$t('eyes.eyestitle3')}}</div>
      <div
        class="eyeinfo5"
        v-html="this.$t('eyes.eyesinfo3').replace(/\n/g,'<br\>')"
        :style="eyeimg3"
      ></div>
    </div>
    <div class="eyestitle eyestitle2" :style="eyeimg4">{{this.$t('eyes.eyestitle4')}}</div>
    <div class="eyeinfo6" v-html="this.$t('eyes.eyesinfo4').replace(/\n/g,'<br\>')" :style="eyeimg4"></div>
    <div class="eyeimg6 eyeB" :style="eyeimg4"></div>
  </div>
</template>
<script>
import { fromEvent } from "rxjs";
export default {
  name: "eyes12gf",
  data() {
    return {
      eyeimg1: { opacity: 0 },
      eyeimg2: { opacity: 0 },
      eyeimg3: { opacity: 0 },
      eyeimg4: { opacity: 0 }
    };
  },
  mounted() {
    let this$ = this;
    let isPhone = document.body.clientWidth;
    this$.eyeimg1 = { opacity: 1 };
    console.log("屏幕寬度為：", isPhone);
    const scroll$ = fromEvent(document, "scroll");
    scroll$.subscribe(function downD() {
      let whereScoll =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(whereScoll);
      if (isPhone > 500) {
        if (whereScoll > 300 && whereScoll < 500) {
          this$.eyeimg1 = { opacity: 1 };
        } else if (whereScoll > 500 && whereScoll < 1500) {
          this$.eyeimg2 = { opacity: 1 };
        } else if (whereScoll > 1500 && whereScoll < 2600) {
          this$.eyeimg3 = { opacity: 1 };
        }else if (whereScoll>2600){
          this$.eyeimg4 = { opacity: 1 };
        }
      }
    });
  }
};
</script>
<style lang="less" scoped>
.eyeP {
  position: absolute;
}
.eyeB {
  background-size: contain;
  background-repeat: no-repeat;
}
@media screen and (min-width: 500px) {
  .eyestitle {
    font-size: 2rem;
    color: #b38e5e;
  }
  .eyes12gf {
    max-width: 1280px;
    min-width: 1280px;
    height: 4000px;
    font-size: 1rem;
    overflow: hidden;
    position: relative;
    margin: auto;
    .eyeimg1 {
      background-image: url(../eyes1_01.jpg);
      margin: auto;
      width: 900px;
      height: 900px;
      transition: 0.6s;
      .eyeinfo1 {
        text-align: right;
        padding-top: 700px;
        padding-right: 45px;
        transition: all 0.6s ease-out 0.4s;
      }
      .eyeinfo2 {
        padding-top: 35px;
        text-align: left;
        width: 70%;
        transition: all 0.6s ease-out 0.8s;
      }
    }
    .eyeimg2 {
      background-image: url(../eyes2.jpg);
      width: 870px;
      height: 620px;
      margin-top: 50px;
      margin-left: 410px;
      transition: 0.6s;
    }
    .eyeimg3 {
      background-image: url(../12GFeye_0017_1.png);
      width: 550px;
      height: 400px;
      top: 940px;
      transition: all 0.6s ease-out 0.4s;
    }
    .eyeimg4 {
      background-image: url(../12GFeye_0016_1.png);
      width: 500px;
      height: 300px;
      top: 1400px;
      transition: all 0.6s ease-out 0.8s;
    }
    .eyeinfo3 {
      text-align: right;
      padding-right: 80px;
      transition: all 0.6s ease-out 1.2s;
    }
    .eyeinfo4 {
      text-align: left;
      padding-top: 80px;
      width: 50%;
      padding-left: 80px;
      transition: all 0.6s ease-out 1.6s;
    }
    .eyeimg5 {
      background-image: url(../eyes1_05.jpg);
      width: 1200px;
      height: 1200px;
      margin-top: 100px;
      transition: 0.6s;

      .eyestitle1 {
        color: white;
        padding-top: 350px;
        text-align: left;
        padding-left: 50px;
        font-size: 2rem;
        transition: all 0.6s ease-out 0.4s;
      }
      .eyeinfo5 {
        width: 45%;
        text-align: left;
        padding-left: 150px;
        padding-top: 80px;
        line-height: 3rem;
        transition: all 0.6s ease-out 0.8s;
      }
    }
    .eyestitle2 {
      padding-top: 120px;
      transition: 0.6s;
    }
    .eyeinfo6 {
      width: 60%;
      margin: auto;
      padding-top: 50px;
        transition: all 0.6s ease-out 0.4s;

    }
    .eyeimg6 {
      background-image: url(../eyes3.jpg);
      width: 980px;
      height: 400px;
      margin: auto;
      margin-top: 100px;
        transition: all 0.6s ease-out 0.8s;

    }
  }
}

@media screen and (max-width: 500px) {
  .eyestitle {
    font-size: 1.2rem;
    color: #b38e5e;
  }
  .eyes12gf {
    max-width: 420px;
    font-size: 0.8rem;
    padding-top: 30px;
    width: 420px;
    height: 2000px;
    overflow: hidden;
    position: relative;
    margin: auto;
    .eyeimg1 {
      background-image: url(../eyes1_01.jpg);
      margin: auto;
      width: 400px;
      height: 400px;
      .eyeinfo1 {
        text-align: right;
        padding-top: 320px;
        padding-right: 45px;
      }
      .eyeinfo2 {
        padding-top: 35px;
        text-align: left;
        padding-left: 15px;
        width: 85%;
      }
    }
    .eyeimg2 {
      background-image: url(../eyes2.jpg);
      width: 320px;
      height: 280px;
      margin-top: 140px;
      margin-left: 100px;
    }
    .eyeimg3 {
      background-image: url(../12GFeye_0017_1.png);
      width: 90px;
      height: 90px;
      top: 600px;
    }
    .eyeimg4 {
      background-image: url(../12GFeye_0016_1.png);
      width: 60px;
      height: 60px;
      top: 720px;
    }
    .eyeinfo3 {
      text-align: right;
      padding-right: 80px;
    }
    .eyeinfo4 {
      text-align: left;
      padding-top: 30px;
      width: 80%;
      padding-left: 20px;
    }
    .eyeimg5 {
      background-image: url(../eyes1_05.jpg);
      width: 420px;
      height: 420px;
      margin-top: 30px;
      .eyestitle1 {
        color: white;
        padding-top: 90px;
        text-align: left;
        padding-left: 10px;
        font-size: 1.2rem;
      }
      .eyeinfo5 {
        width: 65%;
        text-align: left;
        padding-left: 10px;
        padding-top: 20px;
      }
    }
    .eyestitle2 {
      padding-top: 30px;
    }
    .eyeinfo6 {
      width: 80%;
      margin: auto;
      padding-top: 30px;
    }
    .eyeimg6 {
      background-image: url(../eyes3.jpg);
      width: 420px;
      height: 200px;
      margin: auto;
      margin-top: 60px;
    }
  }
}
</style>