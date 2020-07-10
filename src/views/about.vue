<template>
  <div class="about">
    <div class="aboutimg1 aboutB">
      <div class="aboutinfo2 title1">{{this.$t('about.abouttitle2')}}</div>
      <div class="aboutinfo1 title">{{this.$t('about.abouttitle1')}}</div>
    </div>
    <div class="aboutimg2 aboutB aboutP">
      <div class="yLine aboutB aboutP"></div>
      <div class="yMF aboutB aboutP"></div>

      <div class="aboutinfo5">
        <div class="aboutinfo5-in" v-html="this.$t('about.aboutinfo2').replace(/\n/g,'<br\>')"></div>
      </div>
      <div class="aboutinfo3" v-html="this.$t('about.aboutinfo1').replace(/\n/g,'<br\>')"></div>
      <div class="aboutinfo4 title">{{this.$t('about.abouttitle3')}}</div>
    </div>
    <div class="aboutimg3 aboutB aboutP"></div>
    <div class="aboutimg4 aboutB aboutP">
      <div class="aboutimg5 aboutB"></div>
    </div>
    <div class="aboutimg6 aboutP">
      <div class="aboutimg6-top">
        <img src="../about/ABOUT200618_0015_1996April.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title"></div>
      </div>
      <div class="aboutimg6-bottom">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1.jpg" alt />
        </div>
      </div>

      <div class="aboutimg6-top">
        <img src="../about/ABOUT200618_0011_2016April.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title title2">{{this.$t('about.abouttitle5')}}</div>
      </div>
      <div class="aboutimg6-bottom">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1.jpg" alt />
        </div>
      </div>

      <div class="aboutimg6-top">
        <img src="../about/ABOUT200618_0011_2016April.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title title2">{{this.$t('about.abouttitle6')}}</div>
      </div>
      <div class="aboutimg6-bottom">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1.jpg" alt />
        </div>
      </div>

      <div class="aboutimg6-top">
        <img src="../about/ABOUT200618_0009_2018February.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title title2">{{this.$t('about.abouttitle7')}}</div>
      </div>
      <div class="aboutimg6-bottom">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1.jpg" alt />
        </div>
      </div>

      <div class="aboutimg6-top">
        <img src="../about/ABOUT200618_0006_2018June.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title title2">{{this.$t('about.abouttitle8')}}</div>
      </div>
      <div class="aboutimg6-bottom">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1.jpg" alt />
        </div>
      </div>

      <div class="aboutimg6-top">
        <img src="../about/ABOUT200618_0004_2019June.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title title2">{{this.$t('about.abouttitle9')}}</div>
      </div>
      <div class="aboutimg6-bottom">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1.jpg" alt />
        </div>
      </div>

      <div class="aboutimg6-top">
        <img src="../about/ABOUT200618_0002_2019September.png" alt class="aboutimg-inimg" />
        <div class="aboutimg6-title title2">{{this.$t('about.abouttitle10')}}</div>
      </div>
      <div class="aboutimg6-bottom">
        <div class="aboutYline aboutB"></div>
        <div class="aboutI">
          <img src="../about/comm-1.jpg" alt />
        </div>
      </div>
      <div class="aboutimg7 aboutB aboutP"></div>
      <div class="aboutimg8 aboutB aboutP"></div>
      <div class="aboutimg9 aboutB aboutP"></div>
      <div class="aboutimg10 aboutP">
        <div class="aboutimg10-info1">
          <div v-html="this.$t('about.aboutinfo4').replace(/\n/g,'<br\>')"></div>
          <div v-html="this.$t('about.aboutinfo5').replace(/\n/g,'<br\>')"></div>
        </div>
        <div class="aboutimg10-info2">{{this.$t('about.abouttitle11')}}</div>
        <div class="aboutimg11-info1">
          <div v-html="this.$t('about.aboutinfo6').replace(/\n/g,'<br\>')"></div>
        </div>
      </div>
      <div class="aboutimg12 aboutB aboutP"></div>
      <div class="aboutimg13 aboutB aboutP"></div>
      <div class="aboutimg14 aboutB aboutP">
        <div v-html="this.$t('about.aboutinfo6').replace(/\n/g,'<br\>')"></div>
      </div>
      <div class="aboutimg15 aboutB aboutP"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about"
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
    height: 20000px;
    margin: auto;
    font-size: 1.2rem;
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
      letter-spacing: 0.5rem;
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
        padding-right: 140px;
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
        margin-top: 260px;
        width: 360px;
        height: 110px;
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
        .aboutimg-inimg {
          width: 240px;
          display: inline-block;
        }
        .aboutimg6-title {
          display: inline-block;
        }
      }
      .aboutimg6-bottom {
        .aboutYline {
          display: inline-block;
          background-image: url(../about/ABOUT200618_0007_line.png);
          height: 500px;
          width: 5px;
        }
        .aboutI {
          display: inline-block;
          img {
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
        width: 1280px;
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
            letter-spacing: 0.5rem;
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
            height: 600px;
            text-align: start;
            float: right;
            line-height: 2.5rem;
            letter-spacing: 0.5rem;
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
        top: 5300px;
        width: 450px;
        padding-left: 250px;
        text-align: left;
        line-height: 3rem;
      }
      .aboutimg15 {
        top: 5100px;
        width: 750px;
        right: 0;
        height: 900px;
        background-image: url(../about/ABOUT200618_0034_map.png);

        z-index: -1;
      }
    }
  }
}
</style>