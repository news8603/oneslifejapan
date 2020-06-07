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
  title="菜单栏!"
  :visible.sync="menutable"
  direction="ltr"
  :size="setsize()">
   <el-table :data="gridData">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
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
  title="登录页面另外一个!"
  :visible.sync="bottable"
  direction="btt"
  :size="setsize()">
   <el-table :data="gridData">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
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
        // direction: 'ltr',
         gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      };
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
}
    },
     mounted: function () {
      window.addEventListener('scroll', this.handleScroll, false); 
      },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
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
          transition-property: height;
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
  transition-property: height;
  transition-duration: 0.3s;
 }
.el-popup-parent--hidden{
.v-modal{
  z-index: 2 !important;
}
}
</style>
