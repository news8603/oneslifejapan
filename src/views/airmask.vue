<template>
  <!-- 这个页面写的是空气口罩的产品内页 -->
  <div class="airmask">
    <div class="airmaskbackR airP"></div>
    <div class="airmaskimg1 airP" :style="airmask1">
      <div class="airmaskimg2" :style="airmask1"></div>
    </div>
    <div class="airmaskback">
      <div class="airtext" :style="airmask2">
        <div class="airtitle">{{this.$t('airmask.airmasktitle1')}}</div>
        <div class="airinfo" v-html="this.$t('airmask.airmaskinfo1').replace(/\n/g,'<br\>')"></div>
      </div>
      <div class="airmaskimg2 airP" :style="airmask3"></div>
      <div class="airmaskimg3 airP" :style="airmask3"></div>
      <div class="airmaskimg4 airP" :style="airmask3"></div>
    </div>
    <div class="airtext1 airP" :style="airmask3">
      <div class="airtitle">{{this.$t('airmask.airmasktitle2')}}</div>
      <div class="airinfo" v-html="this.$t('airmask.airmaskinfo2').replace(/\n/g,'<br\>')"></div>
    </div>
    <div class="airmaskimg5 airP" :style="airmask4"></div>
    <div class="airtext airP" :style="airmask5">
      <div class="airtitle">{{this.$t('airmask.airmasktitle3')}}</div>
      <div class="airinfo" v-html="this.$t('airmask.airmaskinfo3').replace(/\n/g,'<br\>')"></div>
    </div>
    <div class="airmaskimg6 airP"></div>
    <div class="airmaskimg7 airP"></div>
    <div class="airmaskbackR1 airP"></div>
    <div class="airmaskimg8 airP"></div>
    <div class="airmaskimg9 airP" :style="airmask6"></div>
    <div class="airtext2 airP" :style="airmask6">
      <div class="airtitle">{{this.$t('airmask.airmasktitle4')}}</div>
      <div class="airinfo" v-html="this.$t('airmask.airmaskinfo4').replace(/\n/g,'<br\>')"></div>
    </div>
    <div class="airmaskimg10 airP"></div>
    <div class="airmaskbackR3 airP"></div>
    <div class="airtext3 airP" :style="airmask7">
      <div class="airtitle">{{this.$t('airmask.airmasktitle5')}}</div>
      <div class="airinfo" v-html="this.$t('airmask.airmaskinfo5').replace(/\n/g,'<br\>')"></div>
    </div>
  </div>
</template>
<script>
import { fromEvent } from "rxjs";

export default {
  name: "airmask",
  data() {
    return {
      airmask1: { opacity: 0 },
      airmask2: { opacity: 0 },
      airmask3: { opacity: 0 },
      airmask4: { opacity: 0 },
      airmask5: { opacity: 0 },
      airmask6: { opacity: 0 },
      airmask7: { opacity: 0 }
    };
  },
  mounted() {
    let this$ = this;
    let isPhone = document.body.clientWidth;
    this$.airmask1 = { opacity: 1 };

    console.log("屏幕寬度為：", isPhone);
    const scroll$ = fromEvent(document, "scroll");
    scroll$.subscribe(function downD() {
      let whereScoll =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(whereScoll);
      if (isPhone > 500) {
        if (whereScoll > 300 && whereScoll < 500) {
          this$.airmask2 = { opacity: 1 };
        } else if (whereScoll > 500 && whereScoll < 1000) {
          this$.airmask3 = { opacity: 1 };
        } else if (whereScoll > 1000 && whereScoll < 1500) {
          this$.airmask4 = { opacity: 1 };
        } else if (whereScoll > 1500 && whereScoll < 3600) {
          this$.airmask5 = { opacity: 1 };
        } else if (whereScoll > 3600 && whereScoll < 4000) {
          this$.airmask6 = { opacity: 1 };
        } else {
          this$.airmask7 = { opacity: 1 };
        }
      } else {
        this$.airmask2 = { opacity: 1 };
        this$.airmask3 = { opacity: 1 };
        this$.airmask4 = { opacity: 1 };
        this$.airmask5 = { opacity: 1 };
        this$.airmask6 = { opacity: 1 };
        this$.airmask7 = { opacity: 1 };
      }
    });
  }
};
</script>
<style lang="less" scoped>
.airP {
  background-repeat: no-repeat;
  position: absolute;
  background-size: contain;
}
@media screen and(min-width: 500px) {
  .airtitle {
    font-size: 2rem;
    width: 1280px;
    color: white;
    margin-bottom: 35px;
  }
  .airmask {
    position: relative;
    max-width: 1280px;
    min-width: 1280px;
    height: 5000px;
    margin: auto;
    clear: both;
    text-align: left;
    overflow: hidden;
    line-height: 2em;
    margin: auto;
    font-size: 1rem;
    color: #0b0b0b;
    .airmaskbackR {
      background-color: white;
      width: 2000px;
      height: 2000px;
      border-radius: 2000px;
      top: -1150px;
      z-index: 0;
      left: -340px;
      box-shadow: 0 0 12px 1px #00000040;
      transition: 0.6s;
    }
    .airmaskimg1 {
      background-image: url(../200624_0011-1.png);
      top: -450px;
      width: 1280px;
      height: 1050px;
      transition: all 0.6s ease-out 0.4s;
      .airmaskimg2 {
        background-image: url(../200624_0010.png);
        margin: auto;
        width: 450px;
        height: 800px;
        background-size: contain;
        margin-top: 450px;
        transition: all 0.6s ease-out 0.8s;
      }
    }
    .airmaskback {
      background-color: #42c7fc;
      width: 1440px;
      height: 3200px;
      transition: 0.6s;
      .airtext {
        padding-top: 900px;
        text-align: center;
        transition: 0.6s;
        transition: 0.6s;

        .airinfo {
          color: white;
          width: 80%;
          margin-left: 60px;
        }
      }
      .airmaskimg2 {
        background-image: url(../200624_0004.png);
        width: 100px;
        height: 100px;
        top: 1280px;
        left: 140px;
        transition: all 0.6s ease-out 0.4s;
      }
      .airmaskimg3 {
        background-image: url(../200624_0004.png);
        width: 60px;
        height: 60px;
        top: 1280px;
        right: 140px;
        transition: 0.6s;
      }
      .airmaskimg4 {
        background-image: url(../200624_0004.png);
        width: 40px;
        height: 40px;
        top: 1230px;
        left: 240px;
        opacity: 0.6;
        transition: all 0.6s ease-out 1s;
      }
    }
    .airtext1 {
      top: 1250px;
      text-align: center;
      transition: 0.6s;
      .airinfo {
        margin-top: 35px;
        color: white;
      }
    }
    .airmaskimg5 {
      background-image: url(../200624_0008.png);
      top: 1500px;
      left: 180px;
      width: 950px;
      height: 950px;
      transition: all 0.6s ease-out 0.4s;
    }
    .airtext {
      text-align: center;
      top: 2300px;
      transition: 0.6s;

      .airinfo {
        width: 75%;
        margin: auto;
        color: white;
      }
    }
    .airmaskimg6 {
      background-image: url(../200624_0006.png);
      width: 1280px;
      height: 1680px;
      top: 2000px;
    }
    .airmaskimg7 {
      background-image: url(../200624.png);
      width: 1000px;
      height: 900px;
      top: 2500px;
    }
    .airmaskbackR1 {
      top: 1310px;
      background-color: #42c7fc;
      width: 2500px;
      height: 2500px;
      border-radius: 2500px;
      right: -770px;
      z-index: -1;
    }
    .airmaskimg8 {
      top: 3800px;
      background-image: url(../200624_0009.png);
      width: 400px;
      height: 900px;
      left: 30px;
      z-index: -2;
    }
    .airmaskimg9 {
      top: 4135px;
      background-image: url(../200624_0001-4.png);
      width: 300px;
      height: 300px;
      left: 360px;
      transition: all 0.6s ease-out 0.4s;
    }
    .airtext2 {
      right: 60px;
      top: 3900px;
      text-align: right;
      transition: 0.6s;
      .airtitle {
        color: #42c7fc;
      }
    }
    .airmaskimg10 {
      background-image: url(../200624_0000-2.png);
      top: 4050px;
      right: 130px;
      width: 340px;
      height: 900px;
    }
    .airmaskbackR3 {
      width: 1600px;
      left: -290px;
      height: 1600px;
      top: 4420px;
      border-radius: 1600px;
      background-color: #42c7fc;
      z-index: -1;
    }
    .airtext3 {
      top: 4600px;
      left: 80px;
      transition: 0.6s;
      .airinfo {
        color: white;
        width: 500px;
      }
    }
  }
}

@media screen and(max-width: 500px) {
  .airtitle {
    font-size: 1.5rem;
    width: 300px;
    color: white;
    margin: auto;
    margin-bottom: 35px;
  }
  .airmask {
    position: relative;
    width: 420px;
    min-width: 420px;
    height: 3450px;
    margin: auto;
    clear: both;
    text-align: left;
    overflow: hidden;
    line-height: 2em;
    margin: auto;
    font-size: 1rem;
    color: #0b0b0b;
    .airmaskbackR {
      background-color: white;
      width: 900px;
      height: 900px;
      border-radius: 600px;
      top: -200px;
      z-index: 0;
      left: -240px;
      box-shadow: 0 0 12px 1px #00000040;
      transition: 0.6s;
    }
    .airmaskimg1 {
      background-image: url(../200624_0011-1.png);
      top: -50px;
      left: -100px;
      width: 650px;
      height: 650px;
      transition: all 0.6s ease-out 0.4s;
      .airmaskimg2 {
        background-image: url(../200624_0010.png);
        margin: auto;
        width: 400px;
        height: 650px;
        background-size: contain;
        margin-top: 80px;
        transition: all 0.6s ease-out 0.8s;
      }
    }
    .airmaskback {
      background-color: #42c7fc;
      width: 420px;
      height: 2000px;
      transition: 0.6s;
      .airtext {
        padding-top: 740px;
        text-align: center;
        transition: 0.6s;
        .airinfo {
          color: white;
          width: 85%;
          margin: auto;
        }
      }
      .airmaskimg2 {
        background-image: url(../200624_0004.png);
        width: 50px;
        height: 50px;
        top: 1280px;
        left: 20px;
        transition: all 0.6s ease-out 0.4s;
      }
      .airmaskimg3 {
        background-image: url(../200624_0004.png);
        width: 30px;
        height: 30px;
        top: 1280px;
        right: 10px;
        transition: 0.6s;
      }
      .airmaskimg4 {
        background-image: url(../200624_0004.png);
        width: 20px;
        height: 20px;
        top: 1230px;
        left: 30px;
        opacity: 0.6;
        transition: all 0.6s ease-out 1s;
      }
    }
    .airtext1 {
      top: 1250px;
      text-align: center;
      transition: 0.6s;
      .airinfo {
        margin-top: 35px;
        color: white;
      }
    }
    .airmaskimg5 {
      background-image: url(../200624_0008.png);
      top: 1500px;
      left: 30px;
      width: 350px;
      height: 350px;
      transition: all 0.6s ease-out 0.4s;
    }
    .airtext {
      text-align: center;
      top: 1800px;
      transition: 0.6s;

      .airinfo {
        width: 80%;
        margin: auto;
        color: white;
      }
    }
    .airmaskimg6 {
      background-image: url(../200624_0006.png);
      width: 700px;
      height: 700px;
      top: 1800px;
    }
    .airmaskimg7 {
      background-image: url(../200624.png);
      width: 500px;
      height: 400px;
      top: 2000px;
    }
    .airmaskbackR1 {
      top: 1750px;
      background-color: #42c7fc;
      width: 800px;
      height: 800px;
      border-radius: 2500px;
      right: -250px;
      z-index: -1;
    }
    .airmaskimg8 {
      top: 2550px;
      background-image: url(../200624_0009.png);
      width: 230px;
      height: 800px;
      left: 5px;
      z-index: -2;
    }
    .airmaskimg9 {
      top: 2850px;
      background-image: url(../200624_0001-4.png);
      width: 150px;
      height: 150px;
      left: 220px;
      transition: all 0.6s ease-out 0.4s;
    }
    .airtext2 {
      right: 10px;
      line-height: 1.5rem;
      top: 2600px;
      width: 45%;
      text-align: right;
      .airtitle {
        text-align: left;
        color: #42c7fc;
      }
    }
    .airmaskimg10 {
      background-image: url(../200624_0000-2.png);
      top: 2950px;
      right: -150px;
      width: 300px;
      height: 400px;
    }
    .airmaskbackR3 {
      width: 800px;
      left: -160px;
      height: 800px;
      top: 3050px;
      border-radius: 800px;
      background-color: #42c7fc;
      z-index: -1;
    }
    .airtext3 {
      top: 3130px;
      left: 10px;
      transition: 0.6s;
      .airinfo {
        line-height: 1.2rem;
        color: white;
        width: 250px;
      }
    }
  }
}
</style>