<template>
  <!-- 这里是整个页面最上方的玫瑰花导航条 -->
  <div class="topmenu">
    <div :class="{menut:a,menue:e}">
      <el-row>
        <el-col :span="8" class="setleft">
          <i class="el-icon-s-fold source" @click="menutable = true" type="primary"></i>
          <i class="el-icon-search source" @click="bottable = true"></i>
          <!-- <i class="el-icon-user source" @click="table = true"></i> //这一行是调出登录界面的按钮-->
          <!-- <i class="el-icon-shopping-cart-full source"></i> //这一行是购物车按钮-->
        </el-col>
        <el-col :span="8">
          <router-link :to="{name:'home'}" class="menulogo" style="margin:auto" tag="div"></router-link>
        </el-col>
        <el-col :span="8" class="setright">
          <el-dropdown>
            <span class="el-dropdown-link i18n">
              {{ i18nchoose }}
              <i
                class="el-icon-arrow-down el-icon--right"
                style="margin-right: 10px;"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <span @click="zh">
                <el-dropdown-item>简体中文</el-dropdown-item>
              </span>
              <span @click="en">
                <el-dropdown-item>ENGLISH</el-dropdown-item>
              </span>
              <span @click="jp">
                <el-dropdown-item>日本語</el-dropdown-item>
              </span>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>

    <el-drawer direction="ltr" :visible.sync="menutable" :size="setsize()">
      <el-row>
        <el-col :span="24">
          <h1 class="menuclasstitle">{{this.$t('hp.menu')}}</h1>
        </el-col>
        <el-col :span="24">
          <div class="menuclass" @click="menugo(1)">{{this.$t('menutitlephone.skin')}}</div>
        </el-col>
        <el-col :span="24">
          <div class="menuclass" @click="menugo(2)">{{this.$t('menutitlephone.health')}}</div>
        </el-col>
        <el-col :span="24">
          <div class="menuclass" @click="menugo(3)">{{this.$t('menutitlephone.beauty')}}</div>
        </el-col>
        <el-col :span="24">
          <div class="menuclass" @click="menugo(4)">{{this.$t('menutitlephone.about')}}</div>
        </el-col>
        <el-col :span="24">
          <div class="menuclass" @click="menugo(5)">{{this.$t('menutitlephone.search')}}</div>
        </el-col>
        <el-col :span="24">
          <div class="menuclass" @click="menugo(6)">{{this.$t('menutitlephone.inquiry')}}</div>
        </el-col>
        <!-- <el-col :span="24">
          <div class="menuclass" @click="menugo(7)">{{this.$t('menutitlephone.onesapp')}}</div>
        </el-col>-->
      </el-row>
      <div></div>
    </el-drawer>
    <!-- 下方代码段表示登录画面，待增加机能的时候可以直接调用 -->
    <el-drawer :visible.sync="table" direction="rtl" :size="setsize()">
      <p>マイアカウントにログインする</p>
      <div class="line"></div>
      <el-form :model="loginform">
        <p class="logininfo">メールアドレス</p>
        <el-input v-model="loginform.mail" autocomplete="off"></el-input>
        <p class="logininfo">パスワード</p>
        <el-input v-model="loginform.password" autocomplete="off" type="password"></el-input>
        <p>
          <el-checkbox label="この情報を保存する" name="type"></el-checkbox>
        </p>
        <el-button type="primary">ログイン</el-button>
      </el-form>
      <div class="line"></div>
      <p>パスワードを忘れた場合はこちら</p>
      <p>はじめてのお客さま</p>
      <p>マイアカウントを作成する</p>
    </el-drawer>
    <!-- 这里是搜索页面 -->
    <el-drawer :visible.sync="bottable" direction="btt" :size="setsize()">
      <h2>{{this.$t('hp.janbottom')}}</h2>
      <!-- 用jsJanY方法检验输入的是否为纯数字 -->
      <el-input v-model="input" :placeholder="find" @keyup.enter.native="findStart"></el-input>
      <!-- 如果不是数字，下方出现提示,用isJan这个变量控制是否显示 -->
      <transition name="redJanT">
        <div class="redJan" v-show="isJan">{{this.$t('hp.isJan')}}</div>
      </transition>

      <div class="buttonfind">
        <!-- 这里是检索的按钮 -->
        <el-button @click="findStart()">{{this.$t('hp.janbottom')}}</el-button>
      </div>
      <div class="buttonfind">
        <!-- 这里是取消的按钮 -->
        <el-button @click="cancelInput()">{{this.$t('inquiry.cancel')}}</el-button>
      </div>
    </el-drawer>
    <!-- 这里是检索内容的弹出页面 -->
    <transition name="showFind">
      <div class="allJan" v-if="janIsShow" ref="Jan" @click="janClose($event)">
        <div class="janFind">
          <!-- <div>{{this.janProduct}}</div> -->
          <router-view name="searchlist" v-if="showVue"></router-view>
        </div>
      </div>
    </transition>
    <!-- </div> -->
    <!-- 以下为手机端菜单栏调出的問い合わせ页面 -->
    <div class="topform">
      <el-dialog :title="this.$t('inquiry.title')" :visible.sync="dialogFormVisible">
        <el-form :model="form" size="mini">
          <p style="text-align: left;">{{this.$t('inquiry.name')}}</p>
          <el-input v-model="form.name" autocomplete="off"></el-input>
          <!-- ifName控制是否显示提示信息，如果输入内容为空，显示提示信息 -->
          <div v-if="ifName" style="text-align: left;color: red">{{this.$t('hp.nameSend')}}</div>
          <p style="text-align: left;">{{this.$t('inquiry.mail')}}</p>
          <el-input v-model="form.mail" autocomplete="off"></el-input>
          <!-- ifEmail控制是否显示提示信息，如果输入内容为空，显示提示信息 -->
          <div v-if="ifEmail" style="text-align: left;color: red">{{this.$t('hp.emailSend')}}</div>
          <div v-if="ifRightEmail" style="text-align: left;color: red">{{this.$t('hp.emailRight')}}</div>
          <p style="text-align: left;">{{this.$t('inquiry.info')}}</p>
          <el-input type="textarea" v-model="form.info" autocomplete="off" :rows="5"></el-input>
          <!-- ifInfo控制是否显示提示信息，如果输入内容为空，显示提示信息 -->
          <div v-if="ifInfo" style="text-align: left;color: red">{{this.$t('hp.infoSend')}}</div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">{{this.$t('inquiry.cancel')}}</el-button>
          <el-button type="primary" @click="checkUp">{{this.$t('inquiry.send')}}</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "topmenu",
  data() {
    return {
      janIsShow: false, //用janIsShow控制是否显示搜索弹出的页面
      showVue: false, //控制是否显示商品搜索弹出页面内的组件
      i18nchoose: "日本語",
      isJan: false, //如果输入的不是数字，用isJan控制显示出现的错误提示
      ifInfo: false, //用来控制是否显示输入信息不能为空的提示
      ifName: false, //用来控制是否显示输入姓名不能为空的提示
      ifEmail: false, //用来控制是否显示输入邮箱不能为空的提示
      ifRightEmail: false, //用来控制是否显示邮箱格式不合法的提示
      dialogFormVisible: false,
      form: {
        name: "",
        mail: "",
        info: "",
      },
      formLabelWidth: "120px",
      a: true,
      // e:false,
      show: true,
      bottable: false,
      table: false,
      menutable: false,
      input: "", //jan码输入框，双向绑定
      loginform: {
        mail: "",
        password: "",
      },
    };
  },
  computed: {
    find: function () {
      return this.$t("hp.find");
    },


    infoTips: function () {
      //取得发送邮件成功后的提示信息
      return this.$t("hp.infoTips");
    },
    findinfo: function () {
      //findinfo是获取到所有产品数据，以便进行搜索
      return this.$t("commodityinfo");
    },
  },

  methods: {
    findStart() {
      //从搜索框获取到用户填入的内容，并开始搜索
      let bestinfo = [];
      this.findinfo.forEach((element) => {
        if (
          this._.includes(element.infoname.toUpperCase(), this.input.toUpperCase()) ||
          this._.includes(element.typesee.toUpperCase(), this.input.toUpperCase()) ||
          this._.includes(element.brand.toUpperCase(), this.input.toUpperCase()) ||
          this.input === element.jan
        ) {
          bestinfo.push(element.jan);
        }
      });
      this.showVue = true;

      this.janIsShow=true;
      this.$store.state.findId = bestinfo;
      console.log(this.$store.state.findId);
    },
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
    zh() {
      this.$store.state.en = false;
      console.log(this.$store.state.en);

      (this.i18nchoose = "简体中文"), (this.$i18n.locale = "zh"); //i18n国际化转换
    },
    en() {
      this.$store.state.en = true;
      console.log(this.$store.state.en);
      (this.i18nchoose = "ENGLISH"), (this.$i18n.locale = "en"); //i18n国际化转换
    },
    jp() {
      this.$store.state.en = false;
      console.log(this.$store.state.en);

      (this.i18nchoose = "日本語"), (this.$i18n.locale = "jp"); //i18n国际化转换
    },
    isJanY() {
      //判断是否为数字，如果不是数字，则出现提示信息
      let isJ = /^[0-9]*[1-9][0-9]*$/;
      if (!isJ.test(this.input)) {
        this.isJan = true;
      } else {
        this.isJan = false;
        // 如果是数字，则去findInput方法
        this.findInput();
      }
    },
    menugo(w) {
      switch (w) {
        case 1:
          this.$router.push("/skincare");
          this.menutable = false;
          break;
        case 2:
          this.$router.push("/health");
          this.menutable = false;
          break;
        case 3:
          this.$router.push("/beauty");
          this.menutable = false;
          break;
        case 4:
          this.$router.push("/about");
          this.menutable = false;
          break;
        case 5:
          this.$router.push("/find");
          this.menutable = false;
          break;
        case 6:
          this.dialogFormVisible = true;
          this.menutable = false;
          break;
        case 7:
          this.$router.push("/newapp");
          this.menutable = false;
          break;
        default:
      }
    },
    setsize() {
      if (document.body.clientWidth <= 500) {
        return "100%";
      } else {
        return "60%";
      }
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 500) {
        this.a = false;
        this.e = true;
      } else {
        this.a = true;
        this.e = false;
      }
    },
    janClose(e) {
      //判断是否关闭JAN码搜寻结果弹出框
      if (e.target === this.$refs.Jan) {
        // 如果点击的是浮出框外面的区域，让findId恢复为undefind，以免扰乱后来的值传递
        this.$store.state.findId = undefined;
        
        this.janIsShow = false;
      }
    },
    findInput() {
      let isJ = /^[0-9]*[1-9][0-9]*$/;
      // 进到这里表示输入的是纯数字，在这里首先判断，输入的数字是否是有效的jan码
      if (!isJ.test(this.janProduct)) {
        // 用正则判断是否是数字，如果不是数字，表示janProduct中赋上了表示搜索不到的文字信息，则表示不是有效的JAN码
        this.showVue = false; //如果不是有效的JAN码，则用showVue控制是否显示弹出页面内的组件
      }
      // 如果JAN码对应上，把值传递给vuex中的findId，用来调取commodityinfo组件中的信息，同时showVue为真
      this.janIsShow = true;
      this.showVue = true;
      this.$store.state.findId = this.input;
    },
    cancelInput() {
      this.isJan = !this.isJan;
      this.input = "";
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.handleScroll, false);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.showFind-enter-active,
.showFind-leave-active {
  transition: opacity 0.6s;
}
.showFind-enter,
.showFind-leave-to {
  opacity: 0;
}

.allJan {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10000;
  .janFind {
    margin: auto;
    max-width: 1220px;
    border: 8px solid white;
    border-radius: 4px;
    box-shadow: 0px 0px 15px 3px #2c3e5040;
    position: fixed;
    padding: 10px;
    z-index: 10010;
    top: 15%;
    left: 15%;
    right: 15%;
    bottom: 15%;
    overflow: auto;
    background-color: white;
  }
  .janFind::-webkit-scrollbar {
    width: 3px;
  }
  .janFind::-webkit-scrollbar-track {
    background-color: rgba(#2c3e50, 0.1);
  }
  .janFind::-webkit-scrollbar-thumb {
    background-color: #2c3e50;
  }
}

.redJanT-enter-active,
.redJanT-leave-active {
  transition: opacity 0.1s;
}
.redJanT-enter,
.redJanT-leave-to {
  opacity: 0;
}
.redJan {
  padding-left: 15%;
  color: red;
  transition: 0.6s;
  text-align: left;
}
.i18n:hover {
  cursor: pointer;
}
.topform {
  .el-dialog {
    width: 95%;
  }
}
.menuclasstitle {
  padding-bottom: 50px;
  text-align: left;
  width: 85%;
  margin: auto;
  color: #5d5d5d;
}

.menuclass {
  text-align: left;
  width: 85%;
  margin: auto;
  padding: 25px;
  color: #5d5d5d;
  transition-duration: 0.5s;
  border-bottom: 1px solid #eeeeee;
}
.menuclass:hover {
  cursor: pointer;
  color: #505050;
  background-color: #eeeeee;
  transition-duration: 0.5s;
}
.topmenu {
  .logininfo {
    text-align: left;
    margin-left: 10%;
  }
  .line {
    height: 1px;
    background-color: #e0e0e0;
    width: 80%;
    margin: auto;
    margin-top: 35px;
    margin-bottom: 35px;
  }
  .el-button {
    width: auto !important;
  }
  .source {
    font-size: 1.5em;
    margin: 0 0.2em;
  }
  .source:hover {
    cursor: pointer;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .el-drawer {
    overflow: auto;
    .el-icon-close:before {
      color: #a4a4a5cf;
    }
  }
  .el-input__inner {
    width: 80%;
    margin-bottom: 15px;
  }
  .el-button {
    width: 200px;
  }
  .buttonfind {
    display: inline-block;
    margin: auto;
    padding: 20px;
  }
}

.menut {
  background-color: #ffffff;
  box-shadow: -1px -5px 12px 0px #dcdcdcc7;
  position: fixed;
  top: 0px;
  z-index: 3;
  width: 100%;
  left: 0px;
  height: 90px;
  transition-property: height;
  transition-duration: 0.3s;
  .setleft {
    top: 30px;
    position: relative;
    text-align: left;
    transition-property: top;
    transition-duration: 0.3s;
  }
  .menulogo {
    width: 85px;
    background-image: url(../logo.png);
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    transition-property: height;
    transition-duration: 0.3s;
  }
  .menulogo:hover {
    cursor: pointer;
  }
  .setright {
    top: 30px;
    position: relative;
    text-align: right;
    transition-property: top;
    transition-duration: 0.3s;
  }
}
.menue :extend(.menut) {
  .setleft {
    top: 10px;
    position: relative;
    text-align: left;
    transition-property: top;
    transition-duration: 0.3s;
  }
  .menulogo {
    background-image: url(../logo.png);
    height: 45px;
    background-repeat: no-repeat;
    background-position-x: center;
    transition-property: height;
    transition-duration: 0.3s;
  }
  .menulogo:hover {
    cursor: pointer;
  }
  .setright {
    top: 10px;
    position: relative;
    text-align: right;
    transition-property: top;
    transition-duration: 0.3s;
  }
  height: 50px;
  transition-property: height;
  transition-duration: 0.3s;
}
.el-popup-parent--hidden {
  .v-modal {
    z-index: 2 !important;
  }
}
</style>
