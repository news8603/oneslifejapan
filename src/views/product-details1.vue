<template>
  <div class="product-details1">
    <div class="tsgfimg1 bgP bgimg" :style="tsgfdh1"></div>
    <div class="tsgfimg2 bgP bgimg" :style="tsgfdh1"></div>
    <div class="tsgfinfo1 bgP" :style="tsgfdh1">
      <div v-html="this.$t('product6GF.tsgfinfotitle1').replace(/\n/g,'<br\>')"></div>
      <p></p>
      <div v-html="this.$t('product6GF.tsgfinfotitle2').replace(/\n/g,'<br\>')" class="iiifont"></div>
    </div>
    <div class="tsgfimg3 bgP bgimg" :style="tsgfdh1"></div>
    <div class="tsgfimg4 bgP bgimg" :style="tsgfdh1"></div>
    <div class="gf6gai bgP">
      <div class="gf6gai-in">
        <span class="gf6gai-innertext bgP">{{this.$t('product6GF.tsgfinfoadd1') }}</span>
        <div class="gf6show bgP bgimg"></div>
      </div>
      <div class="gf6show-1 bgP bgimg"></div>
      <div class="gf6gai-in-1 bgP">
        <span class="gf6gai-innertext-1 bgP">{{this.$t('product6GF.tsgfinfoadd2') }}</span>
      </div>
      <div class="tsgfimg4-1 bgP bgimg" :style="tsgfdh1"></div>

      <div class="tsgfinfo2 bgP" :style="tsgfdh2">
        <span class="tsgftitle-1">{{this.$t('product6GF.tsgfinfotitle3') }}</span>
        <span class="tsgftitle-2">{{this.$t('product6GF.tsgfinfotitle4') }}</span>
        <br />
        <br />
        <div v-html="this.$t('product6GF.tsgfinfo1').replace(/\n/g,'<br\>')" class="ininfo"></div>
      </div>
      <div class="tsgfimg5 bgP bgimg" :style="tsgfdh3"></div>
      <div class="tsgfimg6 bgP bgimg" :style="tsgfdh3"></div>
      <div class="tsgfimg7 bgP bgimg" :style="tsgfdh3"></div>
      <div class="tsgfinfo3 bgP" :style="tsgfdh3">
        <span class="tsgftitle-1">{{this.$t('product6GF.tsgfinfotitle5') }}</span>
        <span class="tsgftitle-2">{{this.$t('product6GF.tsgfinfotitle6') }}</span>
        <span class="tsgftitle-1">{{this.$t('product6GF.tsgfinfotitle7') }}</span>
        <br />
        <br />
        <div v-html="this.$t('product6GF.tsgfinfo2').replace(/\n/g,'<br\>')" class="ininfo"></div>
      </div>
      <div class="tsgfimg8 bgP bgimg" :style="tsgfdh4"></div>
      <div class="tsgfinfo4 bgP" :style="tsgfdh4">
        <span class="tsgftitle-1">{{this.$t('product6GF.tsgfinfotitle8') }}</span>
        <span class="tsgftitle-2">{{this.$t('product6GF.tsgfinfotitle9') }}</span>
        <span class="tsgftitle-1">{{this.$t('product6GF.tsgfinfotitle10') }}</span>
        <br />
        <br />
        <div v-html="this.$t('product6GF.tsgfinfo3').replace(/\n/g,'<br\>')" class="ininfo"></div>
      </div>
      <div class="tsgfimg9 bgP bgimg" :style="tsgfdh5"></div>
      <div class="tsgfimg10 bgP bgimg" :style="tsgfdh5"></div>
      <div class="tsgfinfo5 bgP" :style="tsgfdh5">
        <span class="tsgftitle-1">{{this.$t('product6GF.tsgfinfotitle11') }}</span>
        <span class="tsgftitle-2">{{this.$t('product6GF.tsgfinfotitle12') }}</span>
        <span class="tsgftitle-1">{{this.$t('product6GF.tsgfinfotitle13') }}</span>
        <br />
        <br />
        <div v-html="this.$t('product6GF.tsgfinfo4').replace(/\n/g,'<br\>')" class="ininfo"></div>
      </div>
      <div class="tsgfimg11 bgP bgimg" :style="tsgfdh6"></div>
      <div class="tsgfimg12 bgP bgimg" :style="tsgfdh6"></div>
      <div class="tsgfinfo6 bgP" :style="tsgfdh6">
        <div class="tsgftitle-3">{{this.$t('product6GF.tsgfinfotitle14') }}</div>
        <br />
        <div class="tsgftitle-4">{{this.$t('product6GF.tsgfinfotitle15') }}</div>
      </div>
      <div class="tsgfimg13 bgP bgimg"></div>
    </div>
  </div>
</template>
<script>
import { fromEvent } from "rxjs";
export default {
  name: "product-details1",
  data() {
    return {
      tsgfdh1: { opacity: 0 },
      tsgfdh2: { opacity: 0 },
      tsgfdh3: { opacity: 0 },
      tsgfdh4: { opacity: 0 },
      tsgfdh5: { opacity: 0 },
      tsgfdh6: { opacity: 0 },
    };
  },
  mounted() {
    let this$ = this;
    let isPhone = document.body.clientWidth;

    if (document.documentElement.scrollTop || document.body.scrollTop < 100) {
      this$.tsgfdh1 = { opacity: 1 };
    }
    if (isPhone < 500) {
      this$.tsgfdh2 = { opacity: 1 };
      this$.tsgfdh3 = { opacity: 1 };
      this$.tsgfdh4 = { opacity: 1 };
      this$.tsgfdh5 = { opacity: 1 };
      this$.tsgfdh6 = { opacity: 1 };
    }
    const mouseS$ = fromEvent(document, "scroll");
    mouseS$.subscribe(function () {
      let scrollH =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollH);
      if (isPhone > 500) {
        if (scrollH > 400 && scrollH < 1500) {
          this$.tsgfdh2 = { opacity: 1 };
        } else if (scrollH > 1500 && scrollH < 2000) {
          this$.tsgfdh3 = { opacity: 1 };
        } else if (scrollH > 2000 && scrollH < 2300) {
          this$.tsgfdh4 = { opacity: 1 };
        } else if (scrollH > 2300 && scrollH < 3980) {
          this$.tsgfdh5 = { opacity: 1 };
        } else if (scrollH > 3980) {
          this$.tsgfdh6 = { opacity: 1 };
        }
      }
    });
  },
  created() {},
};
</script>
<style lang="less" scoped>
.bgP {
  position: absolute;
}
.bgimg {
  background-repeat: no-repeat;
  background-size: contain;
}
@media screen and(max-width: 500px) {
  .iiifont {
    font-size: 1.5rem;
  }
  .tsgftitle-1 {
    color: #7ec1d0;
    font-size: 1rem;
  }
  .tsgftitle-2 {
    color: #7ec1d0;
    font-size: 1.5rem;
  }
  .tsgftitle-3 {
    font-size: 1.5rem;
  }
  .tsgftitle-4 {
    font-size: 1rem;
  }
  .ininfo {
    margin-inline-start: 20px;
  }
  .product-details1 {
    position: relative;
    width: 420px;
    height: 1990px;
    margin: auto;
    clear: both;
    text-align: left;
    overflow: hidden;
    line-height: 2em;
    margin: auto;
    .tsgfimg1 {
      background-image: url(../6G0004.png);
      top: 80px;
      width: 230px;
      height: 230px;
      transition: 0.6s;
    }
    .tsgfimg2 {
      background-image: url(../6G0006.png);
      top: 130px;
      width: 200px;
      height: 200px;
      left: 40px;
      z-index: -1;
      transition: all 0.6s ease-out 0.5s;
    }
    .tsgfinfo1 {
      color: #7ec1d0;
      top: 140px;
      left: 205px;
      line-height: 1rem;
      text-align: center;
      transition: all 0.6s ease-out 0.7s;
    }
    .tsgfimg3 {
      background-image: url(../6G0010.png);
      top: 100px;
      width: 30px;
      height: 30px;
      left: 340px;
      z-index: -1;
      transition: all 0.6s ease-out 1s;
    }
    .tsgfimg4 {
      background-image: url(../6G0006.png);
      top: 300px;
      width: 300px;
      height: 300px;
      left: 180px;
      z-index: -1;
      transition: all 0.6s ease-out 1.2s;
    }
    .gf6gai {
      width: 100%;
      top: 400px;
      .gf6gai-in {
        width: 50%;
        margin-left: 10px;
        .gf6gai-innertext {
          width: 60%;
          top: -80px;
          line-height: 1rem;
          font-size: 0.6rem;
          z-index: 2;
        }
        .gf6show {
          background-image: url(../6GFadd-2.png);
          top: -10px;
          width: 100%;
          left: 0px;
          height: 135px;
        }
      }
      .gf6gai-in-1 {
        top: 350px;
        width: 90%;
        margin-left: 15px;
        .gf6gai-innertext-1 {
          width: 100%;
          top: -200px;
          line-height: 1rem;
          font-size: 0.6rem;
        }
      }
      .gf6show-1 {
        background-image: url(../6GFadd-1.png);
        left: 160px;
        top: -180px;
        width: 100%;
        height: 320px;
      }
      .tsgfimg4-1 {
        background-image: url(../6G0006.png);
        top: 690px;
        width: 800px;
        height: 800px;
        left: 790px;
        z-index: -1;
        transition: all 0.6s ease-out 1.2s;
      }
      .tsgfinfo2 {
        top: 300px;
        left: 40px;
        width: 75%;
        transition: 0.6s;
        font-size: 0.5rem;
        line-height: 1rem;
      }
      .tsgfimg5 {
        background-image: url(../6G0010.png);
        top: 325px;
        width: 40px;
        height: 40px;
        left: 20px;
        z-index: -1;
        transition: 0.6s;
      }
      .tsgfimg6 {
        background-image: url(../6G0006.png);
        top: 455px;
        width: 200px;
        height: 200px;
        left: -30px;
        z-index: -1;
        transition: all 0.6s ease-out 0.5s;
      }
      .tsgfimg7 {
        background-image: url(../6G0003.png);
        top: 455px;
        width: 150px;
        height: 150px;
        left: 10px;
        z-index: -1;
        transition: all 0.6s ease-out 1s;
      }
      .tsgfinfo3 {
        top: 475px;
        width: 55%;
        height: 300px;
        left: 160px;
        z-index: -1;
        font-size: 0.6rem;
        line-height: 1rem;
        transition: all 0.6s ease-out 0.4s;
      }
      .tsgfimg8 {
        background-image: url(../6G0009.png);
        top: 625px;
        width: 220px;
        height: 220px;
        right: -65px;
        z-index: -1;
        transition: 0.6s;
      }
      .tsgfinfo4 {
        top: 665px;
        width: 60%;
        height: 300px;
        left: 10px;
        z-index: -1;
        line-height: 1rem;
        font-size: 0.6rem;
        transition: all 0.6s ease-out 0.4s;
      }
      .tsgfimg9 {
        background-image: url(../6G0002.png);
        top: 885px;
        width: 300px;
        height: 300px;
        left: 0px;
        z-index: -1;
        transition: 0.6s;
      }
      .tsgfimg10 {
        background-image: url(../6G0001.png);
        top: 1050px;
        width: 280px;
        height: 280px;
        left: 20px;
        z-index: -1;
        transition: all 0.6s ease-out 0.4s;
      }
      .tsgfinfo5 {
        top: 880px;
        width: 52%;
        height: 300px;
        left: 190px;
        font-size: 0.6rem;
        line-height: 1.2rem;
        z-index: -1;
        transition: all 0.6s ease-out 0.8s;
      }
      .tsgfimg11 {
        background-image: url(../6G0006.png);
        top: 1280px;
        width: 450px;
        height: 450px;
        right: -100px;
        z-index: -1;
        transition: 0.6s;
      }
      .tsgfimg12 {
        background-image: url(../6G0000.png);
        top: 1300px;
        width: 400px;
        height: 400px;
        left: 0px;
        z-index: -1;
        transition: all 0.6s ease-out 0.4s;
      }
      .tsgfinfo6 {
        top: 1400px;
        width: 40%;
        height: 300px;
        left: 230px;
        z-index: -1;
        transition: all 0.6s ease-out 0.8s;
      }
      .tsgfimg13 {
        background-image: url(../6G0011.png);
        top: 1350px;
        width: 35px;
        height: 35px;
        left: 230px;
        z-index: -1;
        transition: all 0.6s ease-out 0.4s;
      }
    }
  }
}
@media screen and(min-width: 500px) {
  .iiifont {
    font-size: 4rem;
  }
  .tsgftitle-1 {
    color: #7ec1d0;
    font-size: 1.5rem;
  }
  .tsgftitle-2 {
    color: #7ec1d0;
    font-size: 2.5rem;
  }
  .tsgftitle-3 {
    font-size: 2rem;
  }
  .tsgftitle-4 {
    font-size: 3rem;
  }
  .ininfo {
    margin-inline-start: 20px;
  }
  .product-details1 {
    position: relative;
    max-width: 1280px;
    min-width: 1280px;
    height: 5050px;
    margin: auto;
    clear: both;
    text-align: left;
    overflow: hidden;
    line-height: 2em;
    margin: auto;
    .tsgfimg1 {
      background-image: url(../6G0004.png);
      top: 100px;
      width: 700px;
      height: 700px;
      transition: 0.6s;
    }
    .tsgfimg2 {
      background-image: url(../6G0006.png);
      top: 300px;
      width: 500px;
      height: 500px;
      left: 280px;
      z-index: -1;
      transition: all 0.6s ease-out 0.5s;
    }
    .tsgfinfo1 {
      color: #7ec1d0;
      top: 200px;
      left: 850px;
      line-height: 4rem;
      text-align: center;
      font-size: 2rem;
      transition: all 0.6s ease-out 0.7s;
    }
    .tsgfimg3 {
      background-image: url(../6G0010.png);
      top: 373px;
      width: 60px;
      height: 60px;
      left: 1190px;
      z-index: -1;
      transition: all 0.6s ease-out 1s;
    }
    .tsgfimg4 {
      background-image: url(../6G0006.png);
      top: 490px;
      width: 800px;
      height: 800px;
      left: 790px;
      z-index: -1;
      transition: all 0.6s ease-out 1.2s;
    }
    .gf6gai {
      width: 100%;
      top: 900px;
      .gf6gai-in {
        width: 40%;
        margin-left: 20px;
        .gf6gai-innertext {
width: 50%;
    top: -40px;
          z-index: 2;
        }
        .gf6show {
          background-image: url(../6GFadd-2.png);
          top: 120px;
          width: 100%;
          left: 0px;
          height: 400px;
        }
      }
      .gf6gai-in-1 {
        top: 550px;
        width: 90%;
        margin-left: 50px;
      }
      .gf6show-1 {
        background-image: url(../6GFadd-1.png);
        left: 470px;
        top: -440px;
        width: 100%;
        height: 970px;
      }
      .tsgfimg4-1 {
        background-image: url(../6G0006.png);
        top: 690px;
        width: 800px;
        height: 800px;
        left: 790px;
        z-index: -1;
        transition: all 0.6s ease-out 1.2s;
      }
      .tsgfinfo2 {
        top: 770px;
        left: 80px;
        width: 50%;
        transition: 0.6s;
      }
      .tsgfimg5 {
        background-image: url(../6G0010.png);
        top: 805px;
        width: 80px;
        height: 80px;
        left: 20px;
        z-index: -1;
        transition: 0.6s;
      }
      .tsgfimg6 {
        background-image: url(../6G0006.png);
        top: 1075px;
        width: 450px;
        height: 450px;
        left: -50px;
        z-index: -1;
        transition: all 0.6s ease-out 0.5s;
      }
      .tsgfimg7 {
        background-image: url(../6G0003.png);
        top: 1075px;
        width: 300px;
        height: 300px;
        left: 50px;
        z-index: -1;
        transition: all 0.6s ease-out 1s;
      }
      .tsgfinfo3 {
        top: 1165px;
        width: 60%;
        height: 300px;
        left: 390px;
        z-index: -1;
        transition: all 0.6s ease-out 0.4s;
      }
      .tsgfimg8 {
        background-image: url(../6G0009.png);
        top: 1375px;
        width: 650px;
        height: 650px;
        right: -186px;
        z-index: -1;
        transition: 0.6s;
      }
      .tsgfinfo4 {
        top: 1665px;
        width: 55%;
        height: 300px;
        left: 30px;
        z-index: -1;
        transition: all 0.6s ease-out 0.4s;
      }
      .tsgfimg9 {
        background-image: url(../6G0002.png);
        top: 2175px;
        width: 900px;
        height: 900px;
        left: 0px;
        z-index: -1;
        transition: 0.6s;
      }
      .tsgfimg10 {
        background-image: url(../6G0001.png);
        top: 2475px;
        width: 850px;
        height: 850px;
        left: 280px;
        z-index: -1;
        transition: all 0.6s ease-out 0.4s;
      }
      .tsgfinfo5 {
        top: 2165px;
        width: 55%;
        height: 300px;
        left: 530px;
        z-index: -1;
        transition: all 0.6s ease-out 0.8s;
      }
      .tsgfimg11 {
        background-image: url(../6G0006.png);
        top: 3125px;
        width: 950px;
        height: 950px;
        right: -190px;
        z-index: -1;
        transition: 0.6s;
      }
      .tsgfimg12 {
        background-image: url(../6G0000.png);
        top: 3225px;
        width: 1050px;
        height: 1050px;
        left: 30px;
        z-index: -1;
        transition: all 0.6s ease-out 0.4s;
      }
      .tsgfinfo6 {
        top: 3630px;
        width: 55%;
        height: 300px;
        left: 660px;
        z-index: -1;
        transition: all 0.6s ease-out 0.8s;
      }
      .tsgfimg13 {
        background-image: url(../6G0011.png);
        top: 3525px;
        width: 80px;
        height: 80px;
        left: 630px;
        z-index: -1;
        transition: all 0.6s ease-out 0.4s;
      }
    }
  }
}
</style>