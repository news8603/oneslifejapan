<template>
  <div class="topmenu" >

  <div :class="{menut:a,menue:e}">
<el-row>

  <el-col :span="8" class="setleft" >
    <i class="el-icon-s-fold source " @click="menutable = true" type="primary" ></i>
       <i class="el-icon-search source" @click="bottable = true"></i>
       <i class="el-icon-user source" @click="table = true"></i>
        <!-- <i class="el-icon-shopping-cart-full source"></i> -->
  </el-col>
  <el-col :span="8"><router-link :to="{name:'home'}"  class="menulogo" style="margin:auto" tag="div"></router-link></el-col>
  <el-col :span="8" class="setright">

   
    <el-dropdown>
      <span class="el-dropdown-link i18n">
      {{ i18nchoose }}<i class="el-icon-arrow-down el-icon--right" style="margin-right: 10px;"></i>
     </span>
        <el-dropdown-menu slot="dropdown">
          
        <el-dropdown-item ><span @click="zh">简体中文</span></el-dropdown-item>
        <el-dropdown-item><span @click="en">ENGLISH</span></el-dropdown-item>
        <el-dropdown-item><span @click="jp">日本語</span></el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    </el-col>

</el-row>
</div>

<el-drawer
   direction="ltr"
  :visible.sync="menutable"
  :size="setsize()">
  <el-row>
  <el-col :span="24"><h1 class="menuclasstitle">メニュー</h1></el-col>
  <el-col :span="24"><div  class="menuclass" @click="menugo(1)">スキンケア</div></el-col>
  <el-col :span="24"><div class="menuclass"  @click="menugo(2)">健康用品</div></el-col>
  <el-col :span="24"><div class="menuclass"  @click="menugo(3)">美容品</div></el-col>
  <el-col :span="24"><div class="menuclass"  @click="menugo(4)">ワンズライフジャパンのストーリー</div></el-col>
  <el-col :span="24"><div class="menuclass"  @click="menugo(5)">店舗検索</div></el-col>
  <el-col :span="24"><div class="menuclass"  @click="menugo(6)">お問い合わせ</div></el-col>
  <el-col :span="24"><div class="menuclass"  @click="menugo(7)">iOS版公式アプリ</div></el-col>
</el-row>
  <div>
  </div>
</el-drawer>

<el-drawer
  :visible.sync="table"
  direction="rtl"
  :size="setsize()"
  >
  <p>マイアカウントにログインする</p>
      <div class="line"></div>
    <el-form :model="loginform">
      <p class="logininfo" >メールアドレス</p>
      <el-input v-model="loginform.mail" autocomplete="off"></el-input>
      <p class="logininfo"  >パスワード</p> 
      <el-input v-model="loginform.password" autocomplete="off" type="password"></el-input>
     <p><el-checkbox label="この情報を保存する" name="type"></el-checkbox></p> 
      <el-button type="primary">ログイン</el-button>
      </el-form>
      <div class="line"></div>
        <p >パスワードを忘れた場合はこちら</p>
        <p >はじめてのお客さま</p>
        <p >マイアカウントを作成する</p>
</el-drawer>
<el-drawer
  :visible.sync="bottable"
  direction="btt"
  :size="setsize()">
  <h2>検 索</h2>
 <el-input 
 v-model="input" 
 placeholder="ここで入力してください"
 >
 </el-input>
  <div class="buttonfind" ><el-button>検 索</el-button></div>
  <div class="buttonfind" ><el-button @click="findinput()">キャンセル</el-button></div>
</el-drawer>
<!-- <router-view></router-view> -->

<!-- </div> -->
<div class="topform">
<el-dialog title="問い合わせ" :visible.sync="dialogFormVisible">
  <el-form :model="form"  size="mini" >
  <p style="text-align: left;">名前</p>
  <el-input v-model="form.name" autocomplete="off" ></el-input>
  <p style="text-align: left;">メールアドレス</p>
  <el-input v-model="form.mail" autocomplete="off"></el-input>
  <p style="text-align: left;">問い合わせ内容</p>  
  <el-input type="textarea" v-model="form.info" autocomplete="off" :rows="5"></el-input>

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">キャンセル</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">送信する</el-button>
  </div>
</el-dialog>
</div>


  </div>
</template>

<script>
export default {
  name: 'topmenu',
   data() {
      return {
        i18nchoose:"日本語",
         dialogFormVisible: false,
         form: {
          name: '',
          mail:'',
          info:'',
        },
        formLabelWidth: '120px',
        a:true,
        // e:false,
        show:true,
        bottable:false,
        table: false,
        menutable: false,
        input:"",
        gridData:[{

        }],
        loginform:{
          mail:"",
          password:"",
        }
        }
      },

    methods:{
      zh(){
        this.i18nchoose="简体中文",
      this.$i18n.locale="zh"//i18n国际化转换
       },
      en(){
        this.i18nchoose="ENGLISH",

      this.$i18n.locale="en"//i18n国际化转换
      },
      jp(){
        this.i18nchoose="日本語",

      this.$i18n.locale="jp"//i18n国际化转换
      },
    menugo(e){
     switch(e){
       case 1:
         this.$router.push("/skincare");
         this.menutable=false;
          break;
       case 2:
         this.$router.push("/health");
         this.menutable=false;
          break;
       case 3:
         this.$router.push("/beauty");
         this.menutable=false;
          break;
       case 4:
         this.$router.push("/about");
         this.menutable=false;
          break;
       case 5:
         this.$router.push("/find");
         this.menutable=false;
        break;
      case 6:
         this.dialogFormVisible = true;
         this.menutable=false;
         break;
        case 7:
          this.$router.push("/newapp")
          this.menutable=false;
        break;
       default:
       
     }
    },
    setsize(){
      if(document.body.clientWidth<=500)
      {
        return "100%"
      }
      else
      {
        return "60%"
      }
    },
      handleScroll(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop ;
        if(scrollTop>500){
          this.a=false;
          this.e=true;
        }else {
          this.a=true;
          this.e=false;
        }
      },
      findinput(){
        this.input="";
      }
    },
     mounted: function () {
      window.addEventListener('scroll', this.handleScroll, false); 
      },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">

.i18n:hover{
  cursor: pointer;
}
.topform{
.el-dialog{
  width: 95%;
}
}
.menuclasstitle{
  padding-bottom: 50px;
  text-align: left;
  width: 85%;
  margin: auto;
  color: #5d5d5d;

}

.menuclass{
  text-align: left;
  width: 85%;
  margin: auto;
  padding: 25px;
  color: #5d5d5d;
   transition-duration: 0.5s;
   border-bottom: 1px solid #eeeeee;
}
.menuclass:hover{
  cursor: pointer;
  color:#505050;
  background-color: #eeeeee;
   transition-duration: 0.5s;
}
.topmenu{
  .logininfo{
    text-align: left;
    margin-left: 10%;
  }
  .line{
    height: 1px;
    background-color: #e0e0e0;
    width: 80%;
    margin: auto;
    margin-top: 35px;
    margin-bottom: 35px;
  }
  .el-button{
    width: auto !important;
  }
      .source{
        font-size: 1.5em;
        margin: 0 0.2em;
      }
      .source:hover{
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
      .el-drawer{
          overflow: auto;
            .el-icon-close:before
            {
              color:#a4a4a5cf;
            }
       }
       .el-input__inner{
         width: 80%;
        margin-bottom: 15px;
          }
          .el-button{
            width: 200px;
          }
.buttonfind{
  display: inline-block;
  margin: auto;
  padding:20px;
}

}


.menut{
            background-color:#ffffff;
            box-shadow:-1px -5px 12px 0px #081f2c7d;
            position: fixed;
            top:0px;
            z-index: 3;
            width: 100%;
            left:0px;
            height: 90px;
            transition-property: height;
            transition-duration: 0.3s;
    .setleft{
          top:30px;
          position: relative;
          text-align: left;
          transition-property: top;
          transition-duration: 0.3s;
          }
      .menulogo{
          width: 85px;
          background-image: url(../logo.png);
          width: 100px;
          height: 100px;
          background-repeat: no-repeat;
          transition-property: height ;
          transition-duration: 0.3s;
        }
        .menulogo:hover{
          cursor: pointer;
        }
      .setright{
          top:30px;
          position: relative;
          text-align:right;
          transition-property: top;
          transition-duration: 0.3s;
          }
}
 .menue :extend(.menut) {
      .setleft {
        top:10px;
        position: relative;
          text-align: left;
          transition-property: top;
          transition-duration: 0.3s;
    }
      .menulogo{
            background-image: url(../logo.png);
            height: 45px;
            background-repeat: no-repeat;
            background-position-x: center;
            transition-property: height;
            transition-duration: 0.3s;
        }
        .menulogo:hover{
          cursor: pointer;
        }
      .setright{
        top:10px;
        position: relative;
        text-align:right;
        transition-property: top;
        transition-duration: 0.3s;
          }
  height: 50px;
  transition-property: height ;
  transition-duration: 0.3s;
 }
.el-popup-parent--hidden{
.v-modal{
  z-index: 2 !important;
}
}
</style>
