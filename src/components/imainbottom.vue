<template>
  <div class="imainbottom" >
  <span v-if="this.$store.state.isShow">
 <div class="bastwidth"> 
<el-row  type="flex" justify="center" >
  <el-col><img src="../news.jpg" alt="" class="titleimg"></el-col>
</el-row>
<span v-for="item in news" :key="item.index">
<el-row  type="flex" justify="center" align="middle" >
<el-col :xs="20" :sm="6">
<el-card >
 <img :src="item.img" class="image">
</el-card>
</el-col>
<el-col :xs="20" :sm="15" >
<div class="titleinfo">
<p align="left">{{ item.time }}</p>
<p align="left">{{ item.info }}</p>
<router-link tag="p" to="/onesnew" align="right" class="moretext">more</router-link>
</div>
</el-col>
</el-row>
<el-row>
   <div class="titleline"></div>
</el-row>
</span>
   <el-row  type="flex" justify="center" >
  <el-col :span="10" v-for="item in itopimg" :key="item.index" class="bottomhover">
  <img :src="item.infoimg" class="imainbottomimg " >
    <p>{{ item.info }}</P>
    <div class="buttoninfo1">{{ item.bottoninfo }}</div>
  </el-col>
</el-row>
  <el-row>
  <el-col :span="24" ><div class="imainbottomimg-1">
    <div class="imb-1-info bottomhover">
      <p >一生の美しさと輝き</p>
      <p class="buttoninfo2">詳細はこちらから</p>
      </div>
  </div>
  </el-col>
</el-row>
<el-row>
   <el-col>
  <swiper ref="mySwiper" :options="swiperOptions" style="width: 80%;" >
    <swiper-slide><div class="bottomhover"><img src="../11-1.png" alt="" style="width:100%"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></swiper-slide>
    <swiper-slide><div class="bottomhover"><img src="../11-2.png" alt="" style="width:100%"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></swiper-slide>
    <swiper-slide><div class="bottomhover"><img src="../11-3.png" alt="" style="width:100%"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></swiper-slide>
    <swiper-slide><div class="bottomhover"><img src="../11-4.png" alt="" style="width:100%"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></swiper-slide>
    <swiper-slide><div class="bottomhover"><img src="../11-1.png" alt="" style="width:100%"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></swiper-slide>
    <swiper-slide><div class="bottomhover"><img src="../11-1.png" alt="" style="width:100%"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></swiper-slide>
    <swiper-slide><div class="bottomhover"><img src="../11-1.png" alt="" style="width:100%"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></swiper-slide>
    <swiper-slide><div class="bottomhover"><img src="../11-1.png" alt="" style="width:100%"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
    <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <div class="swiper-button-next"></div>
   </el-col>
</el-row>
<el-row type="flex" justify="center" style="width:80%">
   <el-col ><div class="bottomhover"><img src="../logo-1.jpg" alt="" style="width:98%"  class="imainbottomimg"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></el-col>
   <el-col ><div class="bottomhover"><img src="../logo-2.jpg" alt="" style="width:98%"  class="imainbottomimg"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></el-col>
   <el-col ><div class="bottomhover"><img src="../logo-3.jpg" alt="" style="width:98%"  class="imainbottomimg"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></el-col>
</el-row>
</div>
<el-row type="flex" justify="center" :span="24">
   <el-col> 
     <div class="imainbottomimg-2 bottomhover">
       <div class="imaininfo-3">
     <p>12GFアイクリーム</p>
     <p class="buttoninfo3">詳細はこちらから</p>
     </div>
     </div>
     </el-col>
</el-row>

<el-row type="flex" justify="center" :span="24">
   <el-col> 
     <div class="imainbottoming-out bottomhover">
       <div class="imainbottoming-in">
         <img src="../11-5.png" alt="" class="mainbottoming-inn">
        </div>
       <div class="imaininfo-3">
     <p>12GFアイクリーム</p>
     <p class="buttoninfo3">詳細はこちらから</p>
     </div>
     </div>
     </el-col>
</el-row>
<div class=" bastwidth-color">
<div class="bastwidth">
<el-row type="flex" justify="center" style="width:90%" class="">
   <el-col ><div class="imainbottoming-w bottomhover"><img src="../03.jpg" alt=""   class="imainbottomimg-ww"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></el-col>
   <el-col ><div class="imainbottoming-w bottomhover"><img src="../03.jpg" alt=""   class="imainbottomimg-ww"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></el-col>
   <el-col ><div class="imainbottoming-w bottomhover"><img src="../03.jpg" alt=""   class="imainbottomimg-ww"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></el-col>
</el-row>
<el-row type="flex" justify="center" style="width:90%" class="">
   <el-col ><div class="imainbottoming-w bottomhover"><img src="../03.jpg" alt=""   class="imainbottomimg-ww"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></el-col>
   <el-col ><div class="imainbottoming-w bottomhover"><img src="../03.jpg" alt=""   class="imainbottomimg-ww"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></el-col>
   <el-col ><div class="imainbottoming-w bottomhover"><img src="../03.jpg" alt=""   class="imainbottomimg-ww"><p>12GFアイクリーム</p><p class="buttoninfo3">詳細はこちらから</p></div></el-col>
</el-row>
</div>
<el-row :span="24">
<el-col> 
<div class="imainbottoming-app">
  <img src="../11-7.png" alt="" class="imainbottoming-app-img">
  <div class="bastwidth">
  <div class="imainbottoming-app-info bottomhover">
  <p>新しいわたしに出会う鍵。</p>
  <p >アプリ、誕生。</p>
  <p class="buttoninfo3">詳細はこちらから</p>
  </div>
  </div>
</div>
</el-col>
</el-row>
</div>
</span>
<!-- <router-view></router-view> -->
</div>

</template>

<script>
export default {
  name: 'imainbottom',
   data() {
      return {
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
          swiperOptions: {
          slidesPerView : 1,
          pagination: {
          el: '.swiper-pagination',
          },
              // Some Swiper option/callback...
            breakpoints: { 
            320: {  //当屏幕宽度大于等于320
              slidesPerView: 1,
                },
              768: {  //当屏幕宽度大于等于768 
              slidesPerView: 2,
              spaceBetween: 20
            },
            900: {  //当屏幕宽度大于等于768 
              slidesPerView: 3,
              spaceBetween: 20
            },
            1280: {  //当屏幕宽度大于等于1280
              slidesPerView: 4,
              spaceBetween: 20
            }
  }, navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
        },
    news:[
      {
        index:1,
        img:require("../news-img-1.jpg"),
        time:"2020-06-01",
        info:"・お食事について　コロナウイルスの影響により、バイキングでの提供に衛生上の懸念があるため、一時的にバイキングの提供を見合わせていただいております。セットメニューでの対応になります。ご迷惑をおかけします。"
      },
      {
        index:2,
        img:require("../news-img-1.jpg"),
        time:"2020-06-02",
        info:"・お食事について　コロナウイルスの影響により、バイキングでの提供に衛生上の懸念があるため、一時的にバイキングの提供を見合わせていただいております。セットメニューでの対応になります。ご迷惑をおかけします。"
      },
    ]
      };
    },
    methods:{


    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log("imainbottom加载了")
      this.swiper.slideTo(3, 1000, false);

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" >

body{
  margin: 0px;
  padding: 0px;
}
  .image {
    width: 100%;
    display: block;
  }

.bastwidth{
  margin: auto;
  max-width: 1274px;
  min-width:320px;
  .el-card__body{
  padding:5px !important;
}
.el-card{
  border:0px !important;
}
.el-col-6{
  width: 20% !important;
}
.el-col-sm-6{
  width:15% ;
}
}
.titleimg{
  width: 30%;
  max-width: 800px;
  min-width:300px;
}
.titleinfo{
  width: 85%;
  margin: auto;
.moretext{
  color:#c0c4cc;
  transition-duration : 0.3s;
}
.moretext:hover{
  cursor: pointer;
  transition-duration : 0.3s;
  color:black;
}
}
.titleline{
  background: #90939947;
  height: 1px;
  width: 80%;
  margin: auto;
  margin-top:15px;
  margin-bottom:15px;
}
.el-col-10{
  margin-bottom: 15px;
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
.bottomhover
{
          .buttoninfo1,
          .buttoninfo2,
          .buttoninfo3{
              background-color: rgba(255,255,255,0.3);
              border-color: rgba(15, 15, 15, 0.788);
              transition-duration : 0.3s;
              border-color: rgba(32, 32, 32, 0.9);
         }
}
.bottomhover:hover{
  cursor: pointer;
          .buttoninfo1,
          .buttoninfo2,
          .buttoninfo3,
                {
                border: 1px solid #081f2c;
                line-height: 25px;
                height: 25px;
                background-color: #081f2c;
                color:#ffffff;
                opacity: 1;
                transition-duration: 0.3s;
                  }
}

   .buttoninfo2{      
    line-height: 25px;
    font-size:1rem;
    color:black;
    height: 25px;
    
    width: 100%;
    margin: auto;
    border:solid 1px;
    background: rgba(255,255,255,.5);
     }
.buttoninfo3{      
    line-height: 25px;
    font-size:1rem;
    color:black;
    height: 25px;
    width: 70%;
    margin: auto;
    margin-bottom: 10px;
    border:solid 1px;
    background: rgba(255,255,255,.5);
}
.imainbottomimg{
  margin-top: 10px;
  width:97%;
}
.swiper-pagination{
 margin-top: 30px;
 position: relative !important;
}
.imainbottomimg-1{
    width: 82%;
    margin: 15px auto;
    height: 375px;
    background-image: url("../1-3.jpg");
    background-position:100% center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    position: relative;
    .imb-1-info{
          z-index: 2;
          width: 200px;
          position: absolute;
          top:30%;
          left:9%;
    }
}
.imainbottomimg-2{
  background-image: url("../02.jpg");
  background-position: center 45% ;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  width:100%;
  position: relative;
  .imaininfo-3{
    width: 300px;
    right:20%;
    top:200px;
    position: absolute;
}
}
.imainbottoming-out{
.imainbottoming-in{
  margin-top: 8px;
  position: relative;
  background-color: #e9e9e9;
  height: 420px;
  overflow: hidden;
      .mainbottoming-inn{
        position: absolute;
        right:calc(40% - 380px);
        height: 480px;
      }
    }
.imaininfo-3{
  position: absolute;
  left: calc(40% - 200px);
  top:35%;
  .buttoninfo3{
    width: 150%;
  }
 }
}
.bastwidth-color{
  background-color: #f5f5f5;
   .bastwidth
   {
      .imainbottoming-w
      {   
         max-width: 970px;
          background-color: #ffffff;
          width: 90%;
          margin: auto;
          margin-top: 30px;
          padding-bottom: 15px;
            .imainbottomimg-ww
            {
                width: 100%;
             }
          }
       }
       .imainbottoming-app{
         background-image: url(../11-6.png);
         background-repeat: repeat;
         background-size: contain;
         position: relative;
          .imainbottoming-app-img{
            width: 850px;
          }
    .imainbottoming-app-info{
      position: absolute;
      right:calc(50% - 420px);
      width: 400px;
      top:28%;
    }
  }
}

@media  screen and (max-width: 900px){  
.el-col-sm-6{
  width:75% !important;
}
.el-row--flex{
  margin: auto;
  flex-direction: column;
.el-col-10{
  width: 100%;
}
  .imainbottomimg{
  width:95vw;
}
  .buttoninfo1{
    width: 60%;
  }
}
  .imainbottomimg-1{
    height: 300px;
    width:95%;
    background-size: auto 100%;
    background-position: 85%;
  .imb-1-info{
        position: absolute;
        top:320px;
        left:20%;
        width: 60%;
    }
  }
  .swiper-slide{
    margin-top: 75px;
  }
   .bastwidth-color .imainbottoming-app{
    height: 200px;
    background-size: cover;

       .imainbottoming-app-img{
     width:100%;
   }
 .bastwidth{

  .imainbottoming-app-info{
    position: absolute;
    width: 80%;
    right: 0;
    top:65px;
    .buttoninfo3{
      width: 50%;
      float: right;
      margin-right: 10px;
    }
  }
}
  }
.imainbottomimg-2 {
  margin-bottom: 100px;
  background-position: 33% center;
.imaininfo-3{
  margin: auto;
  position: static;
  padding-top: 500px;
}
}
.imainbottoming-out{
  .imainbottoming-in{
      .mainbottoming-inn{
        right: calc(40% - 200px);
  }
  }
.imaininfo-3{
  margin: auto;
  position: static;
  padding-top: 0px;
  .buttoninfo3{
    width: 60%;
  }
}
}
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
.swiper-container{
    --swiper-theme-color:#081f2c;/* 设置Swiper风格 */
    --swiper-navigation-color: yellow;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */
}
  .swiper-button-prev,
  .swiper-container-rtl ,
  .swiper-button-next{
  color:#081f2c !important;
  z-index: 1 !important;
}

</style>
