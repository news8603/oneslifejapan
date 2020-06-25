<template>
<div class="product-details0" :style="bjBS">
<div class="bijin-1 productP bijin-abs" :style="bj1imgStart"></div>
<div class="bijin-title bijin-abs bijin-item-1" :style="bj1imgStart1">{{ this.$t("productBijin.bijinTitle1") }}</div>
<div class="bijin-item-info bijin-abs" :style="bj1imgStart2">
    <div v-html="this.$t('productBijin.bijinText1').replace(/\n/g,'<br\>')" ></div>
    <div v-html="this.$t('productBijin.bijinPs').replace(/\n/g,'<br\>')" class="bijin-text-ps"></div>
</div>
    
<div class="bijin-2 productP  bijin-abs" ></div>
<div class="bijin-title bijin-abs bijin-item-2" :style="bj1img1">{{ this.$t("productBijin.bijinTitle2") }}</div>
<div class="bijin-abs bijin-item-info-2" :style="bj1img2">
    <div v-html="this.$t('productBijin.bijinText2').replace(/\n/g,'<br\>')"></div>
</div>
<div class="bijin-abs bijin-info">{{ this.$t("productBijin.bijinText2_1") }}</div>
<div class="bijin-abs bijin-info-1">{{ this.$t("productBijin.bijinText2_2") }}</div>
<div class="bijin-abs bijin-title bijin-item-3" :style="bj1img3">{{ this.$t("productBijin.bijinTitle3") }}</div>
<div class="bijin-abs bijin-item-3-info" :style="bj1img4">
    <div v-html="this.$t('productBijin.bijinTitle3_1').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title"  ></div>
    <div v-html="this.$t('productBijin.bijinText3_1').replace(/\n/g,'<br\>')" ></div>
    <p></p>
    <div v-html="this.$t('productBijin.bijinTitle3_2').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title" ></div>
    <div v-html="this.$t('productBijin.bijinText3_2').replace(/\n/g,'<br\>')" ></div>
    <p></p>
    <div v-html="this.$t('productBijin.bijinTitle3_3').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title" ></div>
    <div v-html="this.$t('productBijin.bijinText3_3').replace(/\n/g,'<br\>')" ></div>
    <p></p>
    <div v-html="this.$t('productBijin.bijinTitle3_4').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title"  ></div>
    <div v-html="this.$t('productBijin.bijinText3_4').replace(/\n/g,'<br\>')"  ></div>
</div>

<div class="bijin-3 productP bijin-abs" :style="bj1img5"></div>
<div class="bijin-abs bijin-title bijin-item-4 " :style="bj1img6">{{ this.$t("productBijin.bijinTitle4")}}</div>
<div class="bijin-abs bijin-item-4-info" :style="bj1img7">
    <div v-html="this.$t('productBijin.bijinTitle4_1').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title bijin-dh-1"  :style="bj1img8"></div>
    <div v-html="this.$t('productBijin.bijinText4_1').replace(/\n/g,'<br\>')"  :style="bj1img8" class="bijin-dh-1"></div>
    
    <div v-html="this.$t('productBijin.bijinTitle4_2').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title bijin-dh-2"  :style="bj1img9"></div>
    <div v-html="this.$t('productBijin.bijinText4_2').replace(/\n/g,'<br\>')"  :style="bj1img9" class="bijin-dh-2"></div>
    
    <div v-html="this.$t('productBijin.bijinTitle4_3').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title bijin-dh-3"   :style="bj1img10"></div>
    <div v-html="this.$t('productBijin.bijinText4_3').replace(/\n/g,'<br\>')"  :style="bj1img10" class="bijin-dh-3"></div>
    
    <div v-html="this.$t('productBijin.bijinTitle4_4').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title bijin-dh-4"  :style="bj1img11"></div>
    <div v-html="this.$t('productBijin.bijinText4_4').replace(/\n/g,'<br\>')"  :style="bj1img11" class="bijin-dh-4"></div>
</div>


<div class="bijin-4 productP bijin-abs"  :style="bj1img12"></div> 
<div class="bijin-abs bijin-title bijin-item-5"  :style="bj1img13">{{ this.$t("productBijin.bijinTitle5")}}</div>
<div class="bijin-abs bijin-item-5-info" v-html="this.$t('productBijin.bijinText5').replace(/\n/g,'<br\>')" :style="bj1img14"></div>
<div class="bijin-abs bijin-title bijin-item-6 "  :style="bj1img16">{{ this.$t("productBijin.bijinTitle6")}}</div>
<div class="bijin-abs bijin-item-6-info" v-html="this.$t('productBijin.bijinText6_1').replace(/\n/g,'<br\>')"  :style="bj1img15"></div>
<div class="bijin-abs bijin-title bijin-item-7 ">{{ this.$t("productBijin.bijinTitle7")}}</div>
<div class="bijin-abs bijin-item-7-info" v-html="this.$t('productBijin.bijinText7_1').replace(/\n/g,'<br\>')"  :style="bj1img15"></div>

<div class="bijin-5 productP bijin-abs" ></div>    
<div class="bijin-abs bijin-title bijin-item-8 ">{{ this.$t("productBijin.bijinTitle8")}}</div>
<div class="bijin-abs bijin-item-8-info" v-html="this.$t('productBijin.bijinText8_1').replace(/\n/g,'<br\>')" :style="bj1img15"></div>

<div class="bijin-6 productP bijin-abs" ></div>    
<div class="bijin-abs bijin-title bijin-item-9" :style="bj1img17">{{ this.$t("productBijin.bijinTitle9")}}</div>
<div class="bijin-abs bijin-item-9-info" :style="bj1img18" >
<div  v-html="this.$t('productBijin.bijinText9').replace(/\n/g,'<br\>')" ></div>
<p></p>
<div class="bijin-item-3-info-title" >{{ this.$t('productBijin.bijinTitle9_1') }}</div>
<div  v-html="this.$t('productBijin.bijinText9_1').replace(/\n/g,'<br\>')" class="bijin-dh-1"></div>
<p></p>
<div class="bijin-item-3-info-title ">{{ this.$t('productBijin.bijinTitle9_2') }}</div>
<div  v-html="this.$t('productBijin.bijinText9_2').replace(/\n/g,'<br\>')" class="bijin-dh-3"></div>


</div>

</div>
</template>
<script  >
import { fromEvent } from 'rxjs'; 
export default {
    name:"product-details0",
    data(){
        return {
            bj1imgStart:{opacity:0,top:"280px"},
            bj1imgStart1:{opacity:0,top:"250px"},
            bj1imgStart2:{opacity:0,top:"350px"},
            bj1img:{opacity:0,top:"800px"},
            bj1img1:{opacity:0,top:"850px"},
            bj1img2:{opacity:0,top:"950px"},
            bj1img3:{opacity:0,top:"1560px"},
            bj1img4:{opacity:0,top:"1620px"},
            bj1img5:{opacity:0,top:"2180px"},
            bj1img6:{opacity:0,top:"2300px"},
            bj1img7:{opacity:0,top:"2340px"},
            bj1img8:{opacity:0},
            bj1img9:{opacity:0},
            bj1img10:{opacity:0},
            bj1img11:{opacity:0},
            bj1img12:{opacity:0,top:"3680px"},
            bj1img13:{opacity:0,top:"3320px"},
            bj1img14:{opacity:0},
            bj1img15:{opacity:0},
            bj1img16:{opacity:0,top:"3530px"},
            bj1img17:{opacity:0,top:"5460px"},
            bj1img18:{opacity:0},
            bjBs:{},
        }
    },
    methods:{

    },
    created(){
        let that$=this;
        let isPhone=document.body.clientWidth;
if(isPhone<500){
          that$.bj1imgStart={opacity:0,top:"100px"};
            that$.bj1imgStart1={opacity:0,top:"60px"};
            that$.bj1imgStart2={opacity:0,top:"120px"}
            that$.bj1img={opacity:0,top:"890px"};
            that$.bj1img1={opacity:0,top:"310px"};
            that$.bj1img2={opacity:0,top:"340px"};
            that$.bj1img3={opacity:0,top:"610px"};
            that$.bj1img4={opacity:0,top:"650px"};
            that$.bj1img5={opacity:0,top:"950px"};
            that$.bj1img6={opacity:0,top:"1010px"};
            that$.bj1img7={opacity:0,top:"1040px"};
            that$.bj1img8={opacity:0};
            that$.bj1img9={opacity:0};
            that$.bj1img10={opacity:0};
            that$.bj1img11={opacity:0};
            that$.bj1img12={opacity:0,top:"1620px"};
            that$.bj1img13={opacity:0,top:"1390px"};
            that$.bj1img14={opacity:0};
            that$.bj1img15={opacity:0};
            that$.bj1img16={opacity:0,top:"1430px"};
            that$.bj1img17={opacity:0,top:"1980px"};
            that$.bj1img18={opacity:0};
            that$.bjBS={"min-width":"420px"}
            }

    },
    mounted(){
        let this$=this;
        let isPhone=document.body.clientWidth;
       console.log("屏幕宽度为",isPhone)
        if(document.documentElement.scrollTop || document.body.scrollTop<100){
        this$.bj1imgStart={opacity:1,top:"100px"};
        this$.bj1imgStart1={opacity:1,top:"60px"};
        this$.bj1imgStart2={opacity:1,top:"180px"}
        }
        if(isPhone<500){//这里开始进行手机端的动画配置
            this$.bj1imgStart={opacity:1,top:"100px"};
            this$.bj1imgStart1={opacity:1,top:"60px"};
            this$.bj1imgStart2={opacity:1,top:"120px"}
            this$.bj1img={opacity:1,top:"890px"};
            this$.bj1img1={opacity:1,top:"310px"};
            this$.bj1img2={opacity:1,top:"340px"};
            this$.bj1img3={opacity:1,top:"610px"};
            this$.bj1img4={opacity:1,top:"650px"};
            this$.bj1img5={opacity:1,top:"950px"};
            this$.bj1img6={opacity:1,top:"1010px"};
            this$.bj1img7={opacity:1,top:"1040px"};
            this$.bj1img8={opacity:1};
            this$.bj1img9={opacity:1};
            this$.bj1img10={opacity:1};
            this$.bj1img11={opacity:1};
            this$.bj1img12={opacity:1,top:"1620px"};
            this$.bj1img13={opacity:1,top:"1390px"};
            this$.bj1img14={opacity:1};
            this$.bj1img15={opacity:1};
            this$.bj1img16={opacity:1,top:"1430px"};
            this$.bj1img17={opacity:1,top:"1980px"};
            this$.bj1img18={opacity:1};
            this$.bjBS={"min-width":"420px"}
        }
        const scroll$= fromEvent(document, 'scroll').pipe(
        );
        scroll$.subscribe(function downD(){
        let whereScoll=document.documentElement.scrollTop || document.body.scrollTop;
        console.log(whereScoll);
  if (isPhone>500){
        if( whereScoll > 100  && whereScoll < 300){
            this$.bj1img={opacity:1,top:"700px"}
        }else if( whereScoll >300 && whereScoll < 700)
        {
            this$.bj1img1={opacity:1,top:"850px"};
            this$.bj1img2={opacity:1,top:"920px"} 
        }else if( whereScoll >900 && whereScoll < 1700)
        {
            this$.bj1img3={opacity:1,top:"1460px"};
            this$.bj1img4={opacity:1,top:"1520px"};
        }else if( whereScoll >1700 && whereScoll < 2500)
        {
            this$.bj1img5={opacity:1,top:"2080px"};
            this$.bj1img6={opacity:1,top:"2200px"};
            this$.bj1img7={opacity:1,top:"2240px"};
            this$.bj1img8={opacity:1};
            this$.bj1img9={opacity:1};
            this$.bj1img10={opacity:1};
            this$.bj1img11={opacity:1};
        }else if( whereScoll >2500 && whereScoll < 2900)
        {
            this$.bj1img12={opacity:1,top:"3580px"};
            this$.bj1img13={opacity:1,top:"3220px"};
            this$.bj1img14={opacity:1};
            
        }else if( whereScoll >2900 && whereScoll < 4500)
        {
            this$.bj1img16={opacity:1,top:"3430px"};
            this$.bj1img15={opacity:1};
        }else if( whereScoll >4500)
        {
            this$.bj1img17={opacity:1,top:"5360px"};
            this$.bj1img18={opacity:1};

        }
    }
    });
    }
}
</script>
<style lang="less" scoped>
@media screen and(min-width: 1280px){
.product-details0{
    .bijin-title{
    font-size: 1.5rem;
    color: #d5a74f;
    }
}
}
@media screen and(max-width:500px){
.product-details0{
    width: 420px ;
    max-height: 2550px;
    overflow: hidden;
    // line-height:0.5em;
    font-size: 0.4rem;
    .bijin-title{
    font-size: 0.6rem;
    color: #d5a74f;
}
.bijin-item-1{
    top:120px;
    left:15px;
    width: 90%;
    font-size: 1rem;
     transition:all 0.6s ease-out 0.2s;
        }
.bijin-item-info{
    line-height: 1.6em;
    margin-left:20px;
    width: 55%;

}
.bijin-2{
    width: 100%;
    height:1450px;
    background-image:url(../bijin-2.png);
    z-index: -1;
    top:360px;
    // opacity: 0;
    transition: 0.6s;
}
.bijin-item-2{
    width:100%;
    left:25px;
}
.bijin-item-info-2{
font-size: 0.6rem;
    width: 40%;
    left:50%;

}
.bijin-info{
   top:580px;
   width:40%;
   left:47%;

}
.bijin-info-1{
   top:580px;
   width:40%;
   left:72%;

//    font-size: 1.2rem;
}
.bijin-item-3{
    width: 100%;
    left:10%;
}
.bijin-item-3-info{
    width: 50%;
    // font-size: 0.8em;
    line-height: 1.6em;
    left:19%;
}

.bijin-3{
    width: 600px;
    height:1500px;
    background-image:url(../bijin-3.png);
    z-index: -1;
    // top:2080px;
    left:-108px;
       transition: 0.6s;
}
.bijin-item-4{
    // top:2200px;
    width: 100%;
    left:35px;
    transition: all 0.6s ease-out 0.2s;
}
.bijin-item-4-info{
    width: 75%;
    left:35px;
    // font-size: 0.75em;
    line-height: 0.8rem;
}
.bijin-4{
    width: 100%;
    height:1400px;
    background-image:url(../bijin-4.png);
    z-index: -1;
    top:1500px;
    right:0px;
    transition: 0.6s;
}
.bijin-item-5-info{
    top:1420px;
    left:18px;
    width: 44%;
    transition: all 0.6s ease-out 0.6s;
     line-height: 1rem;

}
.bijin-item-5{
    left:15px;
    transition:0.6s;
    font-size: 1rem;
}
.bijin-item-6{
    left:230px;
    transition: 0.6s;
    font-size: 1rem;

}
.bijin-item-6-info{
    top:1480px;
    left:240px;
    width: 40%;
    line-height:1rem;
    transition: all 0.6s ease-out 0.8s;

}
.bijin-item-9{
    left:15px;
    transition: 0.6s;
    font-size: 1rem;

}
.bijin-item-9-info{
    top:2030px;
    left:15px;
    width: 85%;
    line-height: 1rem;
    transition: all 0.6s ease-out 0.8s;
}
.bijin-item-7{
    top:1740px;
    left:250px;
    font-size: 1rem;

}
.bijin-item-7-info{
  top:1770px;
    left:260px;
      width: 32%;
      font-size: 0.6rem;
    line-height: 1rem;
      transition: all 0.6s ease-out 0.2s;
}
.bijin-6{
    width: 75%;
    height:950px;
    background-image:url(../bijin-6.png);
    z-index: -1;
    top:2280px;
    right:0px;
    transition:0.6s;
}
}
}
.product-details0{
    position: relative;
    max-width: 1280px;
    min-width: 1280px;
    height: 6830px;
    margin: auto;
    clear: both;
    text-align: left;
    line-height: 2em;
}
.bijin-1{
        width:45%;
        height:30%;
        top:180px;
        right:0px;
        background-image:url(../bijin-1.png);
        transition:0.6s;
}
.bijin-item-1{
    top:150px;
    width: 60%;
     transition:all 0.6s ease-out 0.2s;
        }
.bijin-item-info{
    margin-left:45px;
    width:55%;
    top:250px;
     transition:all 0.6s ease-out 0.4s;

}
.bijin-abs{
  position: absolute;
}
.bijin-title{
    font-size: 1.5em;
    color: #d5a74f;
}
.bijin-text{
    font-size: 1em;
    color:#333333;
}
.bijin-text-ps{
    font-size: 0.4rem;
    left:15px;
    color:#6f6f6f;
}
.productP{
        background-size: contain;
        background-repeat: no-repeat;
}
.bijin-2{
    width: 100%;
    height:1450px;
    background-image:url(../bijin-2.png);
    z-index: -1;
    top:700px;
    // opacity: 0;
    transition: 0.6s;
}
.bijin-item-2{
   
//    top:750px;
   width: 60%;
   left:35%;
//    opacity: 0;
   transition: 0.6s;
}
.bijin-item-info-2{
     animation-delay:2s;
   top:850px;
   width:40%;
   left:38%;
//    opacity: 0;
   transition:all 0.6s ease-out 0.2s;
}
.bijin-info{
   top:1360px;
   width:40%;
   left:600px;
//    font-size: 1.2rem;
}
.bijin-info-1{
   top:1360px;
   width:40%;
   left:930px;
//    font-size: 1.2rem;
}
.bijin-item-3{
   top:1460px;
   width:40%;
   left:160px;
      transition: 0.6s;
}
.bijin-item-3-info{
   top:1520px;
   width:40%;
   left:190px;
     transition:all 0.6s ease-out 0.2s;
}
.bijin-item-3-info-title{
    font-size: 1.1em;
    transition:all 0.6s ease-out 0.4s;
}

.bijin-3{
    width: 100%;
    height:1400px;
    background-image:url(../bijin-3.png);
    z-index: -1;
    // top:2080px;
    right:0px;
       transition: 0.6s;
}
.bijin-item-4{
    // top:2200px;
    right:760px;
    transition: all 0.6s ease-out 0.2s;
}
.bijin-item-4-info{
    // top:2240px;
    right:250px;
    width: 53%;
     transition: all 0.6s ease-out 0.6s;
}
.bijin-dh-1{
    transition: all 0.6s ease-out 1s;
}
.bijin-dh-2{
    transition: all 0.6s ease-out 1.4s;
}
.bijin-dh-3{
    transition: all 0.6s ease-out 1.8s;
}
.bijin-dh-4{
    transition: all 0.6s ease-out 2.2s;
}

.bijin-4{
    width: 100%;
    height:1400px;
    background-image:url(../bijin-4.png);
    z-index: -1;
    top:3580px;
    right:0px;
    transition: 0.6s;
}
.bijin-item-5{
    top:3220px;
    left:210px;
      transition:0.6s;
}
.bijin-item-5-info{
    top:3280px;
    left:250px;
    width: 30%;
    transition: all 0.6s ease-out 0.6s;
}
.bijin-item-6{
     top:3430px;
    left:780px;
     transition: 0.6s;
}
.bijin-item-6-info{
    top:3500px;
    left:830px;
    width: 30%;
    transition: all 0.6s ease-out 0.8s;
}
.bijin-item-7{
    top:4210px;
    left:780px;
}
.bijin-item-7-info{
  top:4310px;
    left:830px;
      width: 30%;
      transition: all 0.6s ease-out 0.2s;
}
.bijin-5{
    width: 100%;
    height:1400px;
    background-image:url(../bijin-5.png);
    z-index: -1;
    top:4880px;
    right:0px;
     transition:0.6s;
}
.bijin-item-8{
    top:4630px;
    left:210px;
}
.bijin-item-8-info{
    top:4720px;
    left:260px;
    width: 25%;
}
.bijin-6{
    width: 75%;
    height:950px;
    background-image:url(../bijin-6.png);
    z-index: -1;
    top:5880px;
    right:0px;
    transition:0.6s;
}
.bijin-item-9{
    top:5360px;
    left:210px;
    transition: 0.6s;
}
.bijin-item-9-info{
    top:5420px;
    left:240px;
    width: 70%;
    transition: all 0.6s ease-out 0.8s;
}

</style>