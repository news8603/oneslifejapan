<template>
<!-- 这个页面写的是主页轮播图和菜单栏下方的页面 -->
  <div class="imainbottom" >
  <span v-if="this.$store.state.isShow">
 <div class="bastwidth"> 
<el-row  type="flex" justify="center" >
  <el-col><img src="../news.jpg" alt="" class="titleimg"></el-col>
</el-row>
<!-- 这里遍历compued中的news，news取自i18n中的json中的news类数组。显示的是新着情报部分的内容 -->
<span v-for="(item,s) in news" :key="s">
<el-row  type="flex" justify="center" align="middle" >
<el-col :xs="20" :sm="6">
<el-card >
 <img :src="newsimg[s].img" class="image">
</el-card>
</el-col>
<el-col :xs="20" :sm="15" >
<div class="titleinfo">
<p align="left">{{ item.data }}</p>
<p align="left">{{ item.info }}</p>
<!-- <router-link tag="p" to="/onesnew" align="right" class="moretext">more</router-link> -->
</div>
</el-col>
</el-row>
<el-row>
   <div class="titleline"></div>
</el-row>
</span>
<!-- 以下遍历的是i18n中的json文件中的itopimg的内容，将itopimg中的中文映射到页面上，图片是从data中的itopimgPage -->
   <el-row  type="flex" justify="center" >
  <el-col :span="10" v-for="(item,s) in itopimg" :key="s" class="bottomhover">
    <!-- goWhere方法用来给动态路由push路径，通过jan码进行动态映射 -->
    <span @click="goWhere(item.jan)">
    <!-- img标签中的图片是data中的itopimgPage的图片内容 -->
  <img :src="itopimgPage[s].infoimg" class="imainbottomimg " >
    <p>{{ item.info }}</P>
    <div class="buttoninfo1">{{ item.bottoninfo }}</div>
    </span>
  </el-col>
</el-row>
  <el-row>
    <!-- 以下内容是主页中的胶原蛋白粉的画面和文字信息，取自i18n的json文件中的hp.collagen -->
  <router-link tag="span" to="/collagen" class="bottomhover">
  <el-col :span="24" >
    <div class="imainbottomimg-1">
    <div class="imb-1-info">
      <p 
      >{{this.$t('hp.collagen')}}</p>
      <p class="buttoninfo2">{{this.$t('hp.bottom')}}</p>
      </div>
  </div>
  </el-col>
  </router-link>
</el-row>
<el-row>
   <el-col>
     <!-- 以下遍历i18n的json文件中的imainbottomRecommend数组类中的内容，把推荐列表的文字信息遍历在页面中 -->
    <div v-swiper:mySwiper="swiperOptions" style="width: 80%;">
    <div class="swiper-wrapper">
      <div class="swiper-slide"  
      v-for="(item,s) in imainbottomRecommend"
      :key="s">
      <span  @click="goWhere(item.jan)">
        <div class="bottomhover">
          <!-- img标签中的图片是data中的imainbottomRecommendImg的图片内容 -->
          <img :src="imainbottomRecommendImg[s].img" alt="" style="width:100%">
          <p>{{item.info}}</p>
          <p class="buttoninfo3">{{item.bottoninfo}}</p>
        </div>
        </span>
      </div>
    </div>
        <div class="swiper-pagination" slot="pagination"></div>

  </div>
<div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <div class="swiper-button-next"></div>
   </el-col>
</el-row>
<el-row type="flex" justify="center" style="width:80%">
  <!-- 通过不同的文件名，通过goWhichBrand方法，push到对应的品牌页面 -->
   <el-col ><div class="bottomhover" @click="goWhichBrand('yuisu')"><img src="../logo-1.jpg" alt="" style="width:98%"  class="imainbottomimg"><p>{{this.$t('companyTitle.yuisu')}}</p><p class="buttoninfo3">{{this.$t('hp.bottom')}}</p></div></el-col>
   <el-col ><div class="bottomhover" @click="goWhichBrand('ones')"><img src="../logo-2.jpg" alt="" style="width:98%"  class="imainbottomimg"><p>{{this.$t('companyTitle.ones')}}</p><p class="buttoninfo3">{{this.$t('hp.bottom')}}</p></div></el-col>
   <el-col ><div class="bottomhover" @click="goWhichBrand('fuji')"><img src="../logo-3.jpg" alt="" style="width:98%"  class="imainbottomimg"><p>{{this.$t('companyTitle.fuji')}}</p><p class="buttoninfo3">{{this.$t('hp.bottom')}}</p></div></el-col>
</el-row>
</div>
<el-row type="flex" justify="center" :span="24">
   <el-col> 
     <router-link tag="div" class="imainbottomimg-2 bottomhover" to="/eyes">
         <img src="../02.jpg" alt="" class="mainbottoming-inn">
       <div class="imaininfo-3">
         <!-- 12GF眼霜的广告词 -->
     <p>{{this.$t('hp.12GF')}}</p>
     <p class="buttoninfo3">{{this.$t('hp.bottom')}}</p>
     </div>
     </router-link>
     </el-col>
</el-row>

<el-row type="flex" justify="center" :span="24">
   <el-col> 
     <router-link to="/gold" tag="div" class="imainbottoming-out bottomhover">
       <div class="imainbottoming-in">
         <img src="../11-5.png" alt="" class="mainbottoming-inn">
        </div>
       <div class="imaininfo-3">
         <!-- 黄金棒的广告词 -->
     <p>{{this.$t('hp.gold')}}</p>
     <p class="buttoninfo3">{{this.$t('hp.bottom')}}</p>
     </div>
     </router-link>
     </el-col>
</el-row>
<div class=" bastwidth-color">
  <!-- 以下部分是进入about one's life的标签跳转 ，图片地址没有写在data中，在HTML部分替换图片就好-->
<div class="bastwidth">
<el-row type="flex" justify="center" style="width:90%" class="">
   <el-col ><router-link tag="div" to="/about#history" class="imainbottoming-w bottomhover"><img src="../03.jpg" alt=""   class="imainbottomimg-ww"><p>{{this.$t('companyInfoTitle.info1')}}</p><p class="buttoninfo3">{{this.$t('hp.bottom')}}</p></router-link></el-col>
   <el-col ><router-link tag="div" to="/about#profile" class="imainbottoming-w bottomhover"><img src="../03-1.jpg" alt=""   class="imainbottomimg-ww"><p>{{this.$t('companyInfoTitle.info2')}}</p><p class="buttoninfo3">{{this.$t('hp.bottom')}}</p></router-link></el-col>
   <el-col ><router-link tag="div" to="/about#about" class="imainbottoming-w bottomhover"><img src="../03-2.jpg" alt=""   class="imainbottomimg-ww"><p>{{this.$t('companyInfoTitle.info3')}}</p><p class="buttoninfo3">{{this.$t('hp.bottom')}}</p></router-link></el-col>
</el-row>
<!-- <el-row type="flex" justify="center" style="width:90%" class="">
   <el-col ><div class="imainbottoming-w bottomhover"><img src="../03.jpg" alt=""   class="imainbottomimg-ww"><p>{{this.$t('companyInfoTitle.info4')}}</p><p class="buttoninfo3">{{this.$t('hp.bottom')}}</p></div></el-col>
   <el-col ><div class="imainbottoming-w bottomhover"><img src="../03.jpg" alt=""   class="imainbottomimg-ww"><p>{{this.$t('companyInfoTitle.info5')}}</p><p class="buttoninfo3">{{this.$t('hp.bottom')}}</p></div></el-col>
   <el-col ><div class="imainbottoming-w bottomhover"><img src="../03.jpg" alt=""   class="imainbottomimg-ww"><p>{{this.$t('companyInfoTitle.info6')}}</p><p class="buttoninfo3">{{this.$t('hp.bottom')}}</p></div></el-col>
</el-row> -->
</div>
<el-row :span="24">
<el-col> 
<div class="imainbottoming-app">
  <img src="../11-7.png" alt="" class="imainbottoming-app-img">
  <div class="bastwidth">
  <div class="imainbottoming-app-info">
    <!-- 以下是APP的画面内容部分 -->
  <div v-html="this.$t('app.info').replace(/\n/g,'<br\>')"></div>
  <!-- app做好后，把按钮释放，做APP的内页 -->
  <!-- <p class="buttoninfo3">{{this.$t('hp.bottom')}}</p> -->
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
        itopimgPage:
        [{
          infoimg:require('../1-1.jpg'),
        },
        {
          infoimg:require('../1-2.jpg'),
        }
        ],
        imainbottomRecommendImg:[{
          img:require('../11-1.png')
        },{
          img:require('../11-2.png')
        },{
          img:require('../11-8.png')
        },{
          img:require('../11-4.png')
        },{
          img:require('../11-9.png')
        }],
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
    newsimg:[
      {
        img:require("../news-img-1.jpg"),
      },
      {
        img:require("../news-img-1.jpg"),
      },
    ]
      };
    },
    methods:{
      goWhere:function(jan){
          this.$router.push({name:'commodityinfo',params:{id:jan}});
      },
      goWhichBrand:function(brand){
        this.$router.push({name:'brandproduct',params:{id:brand}});
      }
    },
    computed: {
      news:function(){
        return this.$t('news');
      },
      swiper() {
return this.$refs.mySwiper.$swiper
      },
      itopimg:function(){
        return this.$t('itopimg');
      },
      imainbottomRecommend:function(){
        return this.$t('imainbottomRecommend');
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.mySwiper)
      this.mySwiper.slideTo(3, 1000, false)
    },
}
</script>

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
          .buttoninfo3
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
  .swiper-slide{
    margin-bottom: 30px;
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
  // background-image: url("../02.jpg");
  // background-position: center 45% ;
  // background-size: cover;
  // background-repeat: no-repeat;
  height: 500px;
  width:100%;
  position: relative;
      .mainbottoming-inn{
        position: absolute;
        right:calc(40% - 290px);
        height: 480px;
      }
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
  background-color: #f0f0f0;
  height: 420px;
  overflow: hidden;
      .mainbottoming-inn{
        position: absolute;
        right:calc(40% - 220px);
        height: 480px;
      }
    }
.imaininfo-3{
  position: absolute;
  left: calc(40% - 200px);
  top:35%;
  .buttoninfo3{
    width: 70%;
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
      font-size: 1.2rem;
        text-align: right;
      position: absolute;
      right:calc(50% - 420px);
      width: 400px;
      top:55%;
    }
  }
}

@media  screen and (max-width: 900px){  
  .imainbottom{
    height: 6150px;
    overflow: hidden;
  }
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
    margin-top: 115px;
    margin-bottom: 30px;
  }
   .bastwidth-color .imainbottoming-app{
    height: 220px;
    background-size: cover;

       .imainbottoming-app-img{
     width:100%;
   }
 .bastwidth{
  .imainbottoming-app-info{
    position: absolute;
    text-align: right;
    width: 60%;
    font-size: 1rem;
    right: 20px;
    top: 65px;
    .buttoninfo3{
      width: 50%;
      float: right;
      margin-right: 10px;
    }
  }
}
  }
.imainbottomimg-2 {
width: 100%;
    background-position: 33% center;
    overflow: hidden;
    height: 590px;
    padding-bottom: 20px;
       .mainbottoming-inn{
         right: calc(40% - 600px);
      }
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
