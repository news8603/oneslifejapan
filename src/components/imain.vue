<template>
  <div class="imain">
  <el-row>
  <el-col :span="24">
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel >
      <el-carousel-item v-for="item in imaininfo" :key="item.index">
      <div class="grid-content bg-purple-dark " >
      <div class=imaincss :style="{backgroundImage:'url('+item.infoimg+')'}" >
        <div class="imaininfo">
         <p> {{ item.info }}</p>
         <p> {{ item.info1 }}</p>
         <p class="buttoninfo">{{ item.bottoninfo }}</p>
          </div>
        </div>
      </div>
      </el-carousel-item>
    </el-carousel>
  </div>
 </el-col>
</el-row>
  <el-row>
  <el-col :span="24" >
    <div class="navi">
      <ul>
        <li @click="trya">スキンケア</li>
        <li>健康用品</li>
        <router-link to="/onesnew" tag="li">美容品</router-link>
        <li>店舗検察</li>
        <li  @click="dialogFormVisible = true">問い合わせ</li>
        <li>ABOUT ONE'S LIFE</li>
      </ul>
    </div>
 </el-col>

</el-row>


<el-dialog title="問い合わせ" :visible.sync="dialogFormVisible">
  <el-form :model="form">
  <el-form-item label="名前" :label-width="formLabelWidth">
  <el-input v-model="form.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="メールアドレス" :label-width="formLabelWidth">
  <el-input v-model="form.mail" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="問い合わせ内容" :label-width="formLabelWidth">
  <el-input type="textarea" v-model="form.info" autocomplete="off" :rows="5"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">キャンセル</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">送信るす</el-button>
  </div>
</el-dialog>



<div class="imainset">
<el-row >
  <el-col :span="24">
<!-- <imainbottom></imainbottom> -->
<router-view></router-view>
</el-col>
</el-row>
</div>

</div>

</template>

<script>
// import imainbottom from "./imainbottom";
import axios from "axios"

export default {
  name: 'imain',
  components: { 
    // imainbottom,
  },
   data() {
      return {
        imaininfo:
        [{
          index:1,
          info:"一生の美しさと輝き",
          info1:"を届けします",
          bottoninfo:"詳細はこちらから",
          infoimg:require('../01.jpg'),
        },
        {
          index:2,
          info:"2222",
          info1:"を届けします",
          bottoninfo:"詳細はこちらから",
          infoimg:require('../01.jpg'),
        },
        {
          index:3,
          info:"33333",
          info1:"を届けします",
          bottoninfo:"詳細はこちらから",
        infoimg:require('../01.jpg'),
        },
          {
          index:4,
          info:"4444",
          info1:"を届けします",
          bottoninfo:"詳細はこちらから",
        infoimg:require('../01.jpg'),
        }],
        itopimg:
        [{
          index: 1,
          info:"一生の美しさと輝き",
          bottoninfo:"詳細はこちらから",
          infoimg:require('../1-1.jpg'),
        },
        {
          index: 2,
          info:"一生の美しさと輝き",
          bottoninfo:"詳細はこちらから",
          infoimg:require('../1-2.jpg'),
        }
        ],
        dialogFormVisible: false,
        form: {
          name: '',
          mail:'',
          info:'',
        },
        formLabelWidth: '120px',
      };
    },
    methods:{
          trya:function(){
            axios.get("https://open.duyiedu.com/api/meituan/list/goodsList.json",{
                  params:{
                    appkey:"wlh0604_1588907673004",
                  }
            }).then(res=>{
              console.log(res);
            })
          }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" >
.el-message-box{
  width: 800px !important;
  height: 500px !important;
}

.el-carousel__arrow{
  background-color: red;
}
body{
  font-family: 'Noto Serif SC', serif;
  margin: 0px;
  padding: 0px;
}
  .buttoninfo1{      
    line-height: 25px;
    font-size:1rem;
    color:black;
    height: 25px;
    width: 40%;
    margin: auto;
    border:solid 1px;
    background: rgba(255,255,255,.5);
     }

.imainset{
   .el-row{
  //  max-width: 1270px;
   margin: auto;  
 }
}
   .imain{
      .block{
      // height: 650px;
      .el-carousel__container{
        height: 650px;
            .imaincss{
              height: 680px;
              background-repeat: no-repeat;
              background-size: auto 100%    ;
              background-position: 100%;
              position: relative;
                  .imaininfo{
                    font-size:2rem;
                    line-height: 1;
                    color:#282828;
                    position: fixed;
                    top: 150px;
                    left: 20vw;
                        .buttoninfo{      
                          line-height: 25px;
                          font-size:1rem;
                          color:black;
                          height: 25px;
                          border:solid 1px;
                          background: rgba(255,255,255,.5);
     }
    }
   }
  }
 }
}

   @media  screen and (min-width: 1800px){
   .imain{
      .block{
      // height: 650px;
      .el-carousel__container{
        height: 650px;
            .imaincss{
              height: 680px;
              background-repeat: no-repeat;
              background-size:  100% auto   ;
              background-position: 100%;
              position: relative;
                  .imaininfo{
                    font-size:2rem;
                    line-height: 1;
                    color:#282828;
                    position: fixed;
                    top: 150px;
                    left: 20vw;
                        .buttoninfo{      
                          line-height: 32px;
                          font-size:1rem;
                          color:black;
                          height: 32px;
                          border:solid 1px;
                          background: rgba(255,255,255,.5);
     }
    }
   }
  }
 }
}
   }  
   @media  screen and (max-width: 900px){  
    .imain{
      .block{
          .el-carousel--horizontal
          {
            .el-carousel__indicators
            {
             top:650px;
             }
           }
        .el-carousel__container{
          height: 850px;
          margin-bottom: 0px;
          .imaincss{
            .imaininfo{
              font-size:1.5rem;
              position: fixed;
              top:680px;
               right:0;
                  left:0;
                  margin-left: auto;
                  margin-right: auto;
                  width: 60%;
               .buttoninfo{  
                      padding:0px 40px;     
                   }
               }
           }
       }
     }
  } 
.navi{
display: none;
}
.el-row--flex{
  flex-direction: column;
}
}
.navi{
  font-family: 'Noto Serif SC', serif;
  background-color: #081f2c;
  color: aliceblue;
  font-size: 1rem;
}

.navi ul li{
  padding: 12px 45px;
    color:aliceblue;
  transition-duration: 0.5s;
}
.navi ul li:hover{
  cursor: pointer;
  color:#8fa3af;
  transition-duration: 0.5s;
}

.source{
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
