<template>
  <div class="topmenu" >

  <div :class="{menut:a,menue:e}">
<el-row>
  <el-col :span="8" class="setleft" >
    <i class="el-icon-s-fold source " @click="menutable = true" type="primary" ></i>
  </el-col>
  <el-col :span="8"><router-link :to="{name:'home'}"  class="menulogo" style="margin:auto" tag="div"></router-link></el-col>
  <el-col :span="8" class="setright">
    <i class="el-icon-search source" @click="bottable = true"></i>
    <i class="el-icon-user source" @click="table = true"></i>
    <i class="el-icon-shopping-cart-full source"></i>
    </el-col>
</el-row>
</div>

<el-drawer
   direction="ltr"
  :visible.sync="menutable"
  :size="setsize()">
  <el-row>
  <el-col :span="24"><h1 class="menuclasstitle">メニュー</h1></el-col>
  <el-col :span="24"><div class="menuclass" @click="innerDrawer = true">スキンケア</div></el-col>
  <el-col :span="24"><div class="menuclass" >健康用品</div></el-col>
  <el-col :span="24"><div class="menuclass" >美容品</div></el-col>

  <el-col :span="24"><div class="menuclass">ワンズライフジャパンのストーリー</div></el-col>
  <el-col :span="24"><div class="menuclass">店舗検索</div></el-col>
  <el-col :span="24"><div class="menuclass">お問い合わせ</div></el-col>
  <el-col :span="24"><div class="menuclass">iOS版公式アプリ</div></el-col>

</el-row>
  <div>
  </div>
</el-drawer>


<el-drawer
  title="登录页面!"
  :visible.sync="table"
  direction="rtl"
  :size="setsize()"
  >
   <el-table :data="gridData">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
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
  <div class="buttonfind buttonfindr" ><el-button>検 索</el-button></div>
  <div class="buttonfind buttonfindl"><el-button @click="findinput()">キャンセル</el-button></div>
</el-drawer>
<!-- <router-view></router-view> -->

<!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'topmenu',
   data() {
      return {
        a:true,
        // e:false,
        show:true,
        bottable:false,
        table: false,
        menutable: false,
        input:"",
        gridData:[{

        }],
        }
      },

    methods:{
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(() => {
            done();
          })
          .catch(() => {});
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
  padding: 35px;
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
          // background-color:#fafafa;
          overflow: auto;
            .el-icon-close:before
            {
              color:#a4a4a5cf;
            }
       }
       .el-input__inner{
        width: 70%;
          }
          .el-button{
            width: 50%;
          }
.buttonfind{
  display: inline-block;
  margin: auto;
  width: 50% ;
  padding: 35px;
}
.buttonfindr{
  text-align: right;
}
.buttonfindl{
  text-align: left;
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
