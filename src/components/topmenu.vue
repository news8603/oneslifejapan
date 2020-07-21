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
              <el-dropdown-item>
                <span @click="zh">简体中文</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <span @click="en">ENGLISH</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <span @click="jp">日本語</span>
              </el-dropdown-item>
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
        <el-col :span="24">
          <div class="menuclass" @click="menugo(7)">{{this.$t('menutitlephone.onesapp')}}</div>
        </el-col>
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
      <el-input v-model="input" :placeholder="find" @keyup.enter.native="isJanY"></el-input>
      <!-- 如果不是数字，下方出现提示,用isJan这个变量控制是否显示 -->
      <transition name="redJanT">
        <div class="redJan" v-show="isJan">{{this.$t('hp.isJan')}}</div>
      </transition>

      <div class="buttonfind">
        <!-- 这里是检索的按钮 -->
        <el-button  @click="isJanY()">
         {{this.$t('hp.janbottom')}}
    </el-button>
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
          {{this.janProduct.jan}}
          
            <router-view name="commodityinfo"></router-view>
         
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
          <p style="text-align: left;">{{this.$t('inquiry.mail')}}</p>
          <el-input v-model="form.mail" autocomplete="off"></el-input>
          <p style="text-align: left;">{{this.$t('inquiry.info')}}</p>
          <el-input type="textarea" v-model="form.info" autocomplete="off" :rows="5"></el-input>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">{{this.$t('inquiry.cancel')}}</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">{{this.$t('inquiry.send')}}</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "topmenu",
  data() {
    return {
      janIsShow: false,
      janShow: false,
      i18nchoose: "日本語",
      isJan: false,
      dialogFormVisible: false,
      form: {
        name: "",
        mail: "",
        info: ""
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
        password: ""
      }
    };
  },
  computed: {
    find: function() {
      return this.$t("hp.find");
    },
    //janProduct这个是把所有的产品类别获取到，然后进行筛选，最后返回给janProduct
    janProduct: function() {
      let product = this.$t("commodityinfo");
      let bestProduct = "";
      product.forEach(element => {
        if (element.jan == this.input) {
          bestProduct = element;

          this.janShow = true;
        }
      });
      if (bestProduct == "") {
        bestProduct = "対応する製品はありません";
      }
      return bestProduct;
    }
  },

  methods: {
    zh() {
      (this.i18nchoose = "简体中文"), (this.$i18n.locale = "zh"); //i18n国际化转换
    },
    en() {
      (this.i18nchoose = "ENGLISH"), (this.$i18n.locale = "en"); //i18n国际化转换
    },
    jp() {
      (this.i18nchoose = "日本語"), (this.$i18n.locale = "jp"); //i18n国际化转换
    },
    isJanY() {
      let isJ = /^[0-9]*[1-9][0-9]*$/;
      if (!isJ.test(this.input)) {
        this.isJan = true;
      } else {
        this.isJan = false;
        this.findInput();
      }
    },
    menugo(e) {
      switch (e) {
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
        this.$store.state.findId = "undefined";
        this.janIsShow = false;
      }
    },
    findInput() {
      //按照JAN码输入框中的JAN码寻找
      // 如果JAN码对应上，把值传递给vuex中的findId，用来调取commodityinfo组件中的信息
      this.janIsShow = true;
      this.$store.state.findId = this.input;
      
    },
    cancelInput() {
      this.isJan = !this.isJan;
      this.input = "";
    }
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll, false);
  }
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
    position: fixed;
    padding: 10px;
    z-index: 10010;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    overflow: auto;
    background-color: white;
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
