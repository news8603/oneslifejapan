<template>
<!-- 这个文件，是轮播图部分和菜单栏 -->
  <div class="imain">
    <el-row v-show="this.$store.state.isShow">
      <el-col :span="24">
        <div class="block">
          <span class="demonstration"></span>
          <el-carousel>
            <!-- 以下通过for循环遍历data中imain1和i18n中的对应json文件，把文字内容和banner的广告图映射到首页的轮播广告中 -->
            <el-carousel-item v-for="(item,s) in imaininfo" :key="s">
              <!-- 通过点击不同的图片，push进路由中不同的路径 -->
              <span @click="towhere(s)">
                <div class="grid-content bg-purple-dark">
                  <div class="imaincss">
                    <!-- 这里调用的是data中的imaininfo1中对应的图片信息 -->
                    <img :src="imaininfo1[s].infoimg" alt class="imainimg" />
                    <div class="imaininfo">
                      <!-- 这里的item.info和item.info1，是调用的json文件中的文字信息 -->
                      <p>{{ item.info }}</p>
                      <p>{{ item.info1 }}</p>
                      <p class="buttoninfo" @click="towhere(s)">{{ item.bottoninfo }}</p>
                    </div>
                  </div>
                </div>
              </span>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
    <el-row v-show="this.$store.state.isShow">
      <el-col :span="24">
        <div class="navi">
          <ul>
            <!-- 以下为电脑端菜单栏标题 -->
            <router-link to="/skincare" tag="li">{{this.$t('menutitle.skin')}}</router-link>
            <router-link to="/health" tag="li">{{this.$t('menutitle.health')}}</router-link>
            <router-link to="/beauty" tag="li">{{this.$t('menutitle.beauty')}}</router-link>
            <router-link to="/find" tag="li">{{this.$t('menutitle.search')}}</router-link>
            <li @click="dialogFormVisible = true">{{this.$t('menutitle.inquiry')}}</li>
            <router-link to="/about" tag="li">{{this.$t('menutitle.about')}}</router-link>
          </ul>
        </div>
      </el-col>
    </el-row>

    <!-- 以下为电脑端問い合わせ弹出框内容 -->
    <el-dialog :title="this.$t('inquiry.title')" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item :label="this.$t('inquiry.name')" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="this.$t('inquiry.mail')" :label-width="formLabelWidth">
          <el-input v-model="form.mail" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="this.$t('inquiry.info')" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.info" autocomplete="off" :rows="5"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{this.$t('inquiry.cancel')}}</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">{{this.$t('inquiry.send')}}</el-button>
      </div>
    </el-dialog>
    <div class="imainset">
      <el-row>
        <el-col :span="24">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "imain",
  computed: {
    imaininfo: function() {
      return this.$t("imaininfo");
    }
  },
  data() {
    return {
      towhich: "",
      imaininfo1: [
        {
          infoimg: require("../Banner1.jpg")
        },
        {
          infoimg: require("../banner2.jpg")
        },
        {
          infoimg: require("../Banner200625.jpg")
        },
        {
          infoimg: require("../Banner200623.jpg")
        }
      ],

      dialogFormVisible: false,
      form: {
        name: "",
        mail: "",
        info: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    trya: function() {
      axios
        .get("https://open.duyiedu.com/api/meituan/list/goodsList.json", {
          params: {
            appkey: "wlh0604_1588907673004"
          }
        })
        .then(res => {
          console.log(res);
        });
    },
    towhere: function(t) {
      this.$router.push("/product-details" + t);
    }
  },
  mounted() {
    console.log("main加载了");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" >
.el-message-box {
  width: 800px !important;
  height: 500px !important;
}

.el-carousel__arrow {
  background-color: red;
}
body {
  font-family: "Noto Serif SC", serif;
  margin: 0px;
  padding: 0px;
}
.buttoninfo1 {
  line-height: 25px;
  font-size: 1rem;
  color: black;
  height: 25px;
  width: 40%;
  margin: auto;
  border: solid 1px;
  background: rgba(255, 255, 255, 0.5);
}

.imainset {
  .el-row {
    //  max-width: 1270px;
    margin: auto;
  }
}
.imain {
  .block {
    // height: 650px;
    .el-carousel__container {
      height: 650px;
      .imaincss {
        height: 680px;
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: 100%;
        position: relative;
        overflow: hidden;
        .imainimg {
          position: absolute;
          right: calc(50% - 950px);
          width: 2000px;
          top: -100px;
        }
        .imaininfo {
          font-size: 1.2rem;
          line-height: 1;
          color: #282828;
          position: fixed;
          top: 180px;
          left: 20vw;
          .buttoninfo {
            line-height: 25px;
            font-size: 1rem;
            color: black;
            height: 25px;
            border: solid 1px;
            background: rgba(255, 255, 255, 0.5);
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1800px) {
  .imain {
    .block {
      // height: 650px;
      .el-carousel__container {
        height: 650px;
        .imaincss {
          height: 680px;
          background-repeat: no-repeat;
          background-size: 100% auto;
          background-position: 100%;
          position: relative;
          .imaininfo {
            font-size: 1.2rem;
            line-height: 1;
            color: #282828;
            position: fixed;
            top: 180px;
            left: 20vw;
            .buttoninfo {
              line-height: 32px;
              font-size: 1rem;
              color: black;
              height: 32px;
              border: solid 1px;
              background: rgba(255, 255, 255, 0.5);
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .imain {
    .block {
      .el-carousel--horizontal {
        .el-carousel__indicators {
          top: 650px;
        }
      }
      .el-carousel__container {
        height: 850px;
        margin-bottom: 0px;
        .imaincss {
          .imaininfo {
            font-size: 1.2rem;
            position: fixed;
            top: 680px;
            right: 0;
            left: 0;
            margin-left: auto;
            margin-right: auto;
            width: 60%;
            .buttoninfo {
              padding: 0px 40px;
            }
          }
        }
      }
    }
  }
  .navi {
    display: none;
  }
  .el-row--flex {
    flex-direction: column;
  }
}
.navi {
  font-family: "Noto Serif SC", serif;
  background-color: #081f2c;
  color: aliceblue;
  font-size: 1rem;
}

.navi ul li {
  padding: 12px 45px;
  color: aliceblue;
  transition-duration: 0.5s;
}
.navi ul li:hover {
  cursor: pointer;
  color: #8fa3af;
  transition-duration: 0.5s;
}

.source {
  font-size: 1.5em;
  margin: 0 1.5em;
}
h3 {
  margin: 40px 0 0;
}
ul {
  margin-block-start: 0px;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 px;
}
a {
  color: #42b983;
}
</style>
