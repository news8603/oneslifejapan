<template>
  <!-- 这个文件，是轮播图部分和菜单栏 -->
  <div class="imain">
    <el-row v-show="this.$store.state.isShow">
      <el-col :span="24">
        <div class="block">
          <span class="demonstration"></span>
          <el-carousel>
            <!-- 以下通过for循环遍历data中imain1和i18n中的对应json文件中的imaininfo，把文字内容和banner的广告图映射到首页的轮播广告中 -->
            <el-carousel-item v-for="(item,s) in imaininfo" :key="s">
              <!-- 通过点击不同的图片，push进路由中不同的路径 -->
              <span @click="towhere(s)" class="bottonhover">
                <div class="grid-content bg-purple-dark">
                  <div class="imaincss">
                    <!-- 这里调用的是data中的imaininfo1中对应的图片信息 -->
                    <img :src="imaininfo1[s].infoimg" alt class="imainimg" />
                    <div class="imaininfo">
                      <!-- 这里的item.info和item.info1，是调用的json文件中的文字信息 -->
                      <div v-html="item.info.replace(/\n/g,'<br\>')" class="infoP"></div>
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
    <el-dialog
      :title="this.$t('inquiry.title')"
      :visible.sync="dialogFormVisible"
      :before-close="handleClose"
    >
      <el-form :model="form">
        <el-form-item :label="this.$t('inquiry.name')" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
          <!-- ifName控制是否显示提示信息，如果输入内容为空，显示提示信息 -->
          <div v-if="ifName" style="text-align: left;color: red">{{this.$t('hp.nameSend')}}</div>
        </el-form-item>
        <el-form-item :label="this.$t('inquiry.mail')" :label-width="formLabelWidth">
          <el-input v-model="form.mail" autocomplete="off"></el-input>
          <!-- ifEmail控制是否显示提示信息，如果输入内容为空，显示提示信息 -->
          <div v-if="ifEmail" style="text-align: left;color: red">{{this.$t('hp.emailSend')}}</div>
          <div v-if="ifRightEmail" style="text-align: left;color: red">{{this.$t('hp.emailRight')}}</div>
        </el-form-item>
        <el-form-item :label="this.$t('inquiry.info')" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.info" autocomplete="off" :rows="5"></el-input>
          <!-- ifInfo控制是否显示提示信息，如果输入内容为空，显示提示信息 -->
          <div v-if="ifInfo" style="text-align: left;color: red">{{this.$t('hp.infoSend')}}</div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{this.$t('inquiry.cancel')}}</el-button>
        <el-button type="primary" @click="checkUp">{{this.$t('inquiry.send')}}</el-button>
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
    imaininfo: function () {
      return this.$t("imaininfo");
    },
    infoTips: function () {
      //取得发送邮件成功后的提示信息
      return this.$t("hp.infoTips");
    },
  },
  data() {
    return {
      towhich: "",
      ifInfo: false, //用来控制是否显示输入信息不能为空的提示
      ifName: false, //用来控制是否显示输入姓名不能为空的提示
      ifEmail: false, //用来控制是否显示输入邮箱不能为空的提示
      ifRightEmail: false, //用来控制是否显示邮箱格式不合法的提示
      imaininfo1: [
        {
          infoimg: require("../Banner1.jpg"),
        },
        {
          infoimg: require("../banner2.jpg"),
        },
        {
          infoimg: require("../Banner200625.jpg"),
        },
        {
          infoimg: require("../Banner200623.jpg"),
        },
      ],

      dialogFormVisible: false,
      form: {
        name: "",
        mail: "",
        info: "",
      },
      formLabelWidth: "120px",
    };
  },

  methods: {
    handleClose(done) {
      //关闭問い合わせ弹出框时触发,把不法输入的提示信息隐藏
      this.ifInfo = false;
      this.ifName = false;
      this.ifEmail = false;
      this.ifRightEmail = false;
      done();
    },
    checkUp: function () {
      //用checkUP方法检查是否有不法输入项
      let checkname = this.form.name.replace(/\s+/g, ""); //去掉姓名输入框中的空格
      let checkmail = this.form.mail.replace(/\s+/g, ""); //去掉邮箱输入框中的空格
      let checkinfo = this.form.info.replace(/\s+/g, ""); //去掉内容框中的空格
      this.ifEmail = false;
      this.ifName = false;
      this.ifInfo = false;
      let checkN = true; //假设姓名框输入内容不为空
      let checkE = true; //假设邮箱输入框不为空
      let checkI = true; //假设内容输入框不为空
      let checkYemail = true; //假设输入的邮箱内容格式是正确的
      let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; //验证邮箱
      if (checkmail == undefined || checkmail == "") {
        checkE = false; //邮箱输入框内容为空则chenkE为假
        this.ifEmail = true; //ifEmail为真，则页面显示“没有输入内容”的提示信息
        this.form.mail = "";
      } else if (!reg.test(this.form.mail)) {
        checkYemail = false; //邮箱格式不对，则checkYemail为假
        this.ifRightEmail = true; //ifRightEmail这个变量为真，显示输入邮箱输入框内容为空的提示信息
      } else {
        this.ifRightEmail = false;
      }
      if (checkname == undefined || checkname == "") {
        checkN = false; //姓名输入框内容为空则chenkN为假
        this.ifName = true; //ifName为真，则页面显示“没有输入内容”的提示信息
        this.form.name = "";
      }
      if (checkinfo == undefined || checkinfo == "") {
        checkI = false; //输入框内容不合法则chenkI为假
        this.ifInfo = true; //ifInfo为真，则页面显示“没有输入内容”的提示信息
        this.form.info = "";
      }
      if (checkI && checkE && checkN && checkYemail) this.formSend(); //符合条件，发送请求
    },
    sendTips: function () {
      //发送成功后，弹出的成功提示
      this.$message({
        message: this.infoTips,
        type: "success",
      });
    },
    formSend: function () {
      axios
        .post("http://192.168.1.6:8887/api/send_emails", {
          name: this.form.name,
          email: this.form.mail,
          text: this.form.info,
        })
        .then((res) => {
          console.log(res);
          this.form.name = "";
          this.form.mail = "";
          this.form.info = "";
          this.ifEmail = false;
          this.ifName = false;
          this.ifInfo = false;
          this.sendTips(); //弹出发送成功提示框
          this.dialogFormVisible = false; //关闭問い合わせ内容提示框
        });
    },
    towhere: function (t) {
      this.$router.push("/product-details" + t);
    },
  },
  mounted() {

    console.log("main加载了");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" >
.el-message-box {
  width: 800px !important;
  height: 500px !important;
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
    .bottonhover:hover {
      cursor: pointer;
    }
    .el-carousel__container {
      height: 680px;
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
          .infoP {
            width: 100%;
            text-align: left;
            line-height: 2rem;
          }
          .buttoninfo {
            line-height: 25px;
            padding-right: 5px;
            width: 200px;
            padding-left: 5px;
            font-size: 1rem;
            color: black;
            height: 25px;
            border: solid 1px;
            background: rgba(255, 255, 255, 0.5);
            transition-duration: 0.3s;
          }
          .buttoninfo:hover {
            cursor: pointer;
            border: 1px solid #081f2c;
            background-color: #081f2c;
            color: #ffffff;
            opacity: 1;
            transition-duration: 0.3s;
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
              width: 200px;
              color: black;
              height: 32px;
              border: solid 1px;
              background: rgba(255, 255, 255, 0.5);
            }
            .buttoninfo:hover {
              cursor: pointer;
              border: 1px solid #081f2c;
              background-color: #081f2c;
              color: #ffffff;
              opacity: 1;
              transition-duration: 0.3s;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .imain {
    .block {
      .el-carousel--horizontal {
        .el-carousel__indicators {
          top: 410px;
          height: 30px;
        }
      }
      .el-carousel__container {
        height: 750px;
        margin-bottom: 0px;
        .imaincss {
          .imainimg {
            position: absolute;
            left: -135%;
            width: 1200px;
            top: -40px;
          }
          .imaininfo {
            font-size: 1rem;
            position: fixed;
            top: 440px;
            right: 0;
            left: 0;
            margin-left: auto;
            margin-right: auto;
            width: 85%;
            .infoP {
              text-align: center;
              line-height: 1.4rem;
            }
            .buttoninfo {
              width: 90%;
              transition-duration: 0.3s;
            }
            .buttoninfo:hover {
              cursor: pointer;
              border: 1px solid #081f2c;
              background-color: #081f2c;
              color: #ffffff;
              opacity: 1;
              transition-duration: 0.3s;
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
