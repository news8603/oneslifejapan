<template>
<div class="product-details0">
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
            bj1img18:{opacity:0}
        }
    },
    methods:{

    },
    mounted(){
        let this$=this;
        if(document.documentElement.scrollTop || document.body.scrollTop<100){
        this$.bj1imgStart={opacity:1,top:"180px"};
        this$.bj1imgStart1={opacity:1,top:"150px"};
        this$.bj1imgStart2={opacity:1,top:"250px"}
        }
        const scroll$= fromEvent(document, 'scroll').pipe(
        );
        scroll$.subscribe(function downD(){
        let whereScoll=document.documentElement.scrollTop || document.body.scrollTop;
        console.log(whereScoll);
        if( whereScoll > 100  && whereScoll < 300){
            this$.bj1img={opacity:1,top:"700px"}
        }else if( whereScoll >300 && whereScoll < 700)
        {
            this$.bj1img1={opacity:1,top:"750px"};
            this$.bj1img2={opacity:1,top:"850px"} 
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
    });
    }
}
</script>
<style lang="less" scoped>
.product-details0{
    position: relative;
    max-width: 1280px;
    min-width: 1280px;
    width: 100%;
    height: 6830px;
    margin: auto;
    clear: both;
    text-align: left;
    line-height: 2em;
}
.bijin-1{
        width: 500px;
        height: 550px;
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
    width:60%;
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
    font-size: 0.5em;
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
   right: -50px;
//    opacity: 0;
   transition: 0.6s;
}
.bijin-item-info-2{
     animation-delay:2s;
   top:850px;
   width:40%;
   left:560px;
//    opacity: 0;
   transition:all 0.6s ease-out 0.2s;
}
.bijin-info{
   top:1350px;
   width:40%;
   left:610px;
   font-size: 1.2em;
}
.bijin-info-1{
   top:1350px;
   width:40%;
   left:920px;
   font-size: 1.2em;
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
    width: 950px;
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
    width: 80%;
    transition: all 0.6s ease-out 0.8s;
}

</style>