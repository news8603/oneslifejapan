<template>
    <div class="collagen">
        <div class="collagentinfo1 bgP" :style="collshow1">
            <span class="collagenttitle">{{ this.$t('productCollagen.collagentitle1') }}</span>
            <span class="collagenttitle1">{{ this.$t('productCollagen.collagentitle2') }}</span>
            <span class="collagenttitle">{{ this.$t('productCollagen.collagentitle3') }}</span> 
            <div v-html="this.$t('productCollagen.collagentinfo1').replace(/\n/g,'<br/>')"></div>     
        </div>
        <div class="collagentimg1 bgP" :style="collshow1"></div>
        <div class="collagentimg2 bgP" :style="collshow1"></div>
        <div class="collagentimg3 bgP" :style="collshow2"></div>
        <div class="collagentimg4 bgP" :style="collshow2"></div>
        <div class="collagentimg5 bgP" :style="collshow2"></div>
        <div class="collagentinfo2 bgP" :style="collshow3">
            <span class="collagenttitle">{{ this.$t('productCollagen.collagentitle4') }}</span>
            <span class="collagenttitle1">{{ this.$t('productCollagen.collagentitle5') }}</span>
            <span class="collagenttitle">{{ this.$t('productCollagen.collagentitle6') }}</span> 
            <div v-html="this.$t('productCollagen.collagentinfo2').replace(/\n/g,'<br/>')"></div>     
        </div>
        <div class="collagentimg6 bgP">
            <img src="../000_01.jpg" alt="">
            <img src="../000_02.jpg" alt="">
            <img src="../000_03.jpg" alt="">
            <img src="../000_04.jpg" alt="">
            <img src="../000_05.jpg" alt="">
            <img src="../000_06.jpg" alt="">
            <img src="../000_07.jpg" alt="">
        </div>
        <div class="collagentinfo3 bgP" :style="collshow4">
            <span class="collagenttitle">{{ this.$t('productCollagen.collagentitle7') }}</span>
            <span class="collagenttitle1">{{ this.$t('productCollagen.collagentitle8') }}</span>
            <span class="collagenttitle">{{ this.$t('productCollagen.collagentitle9') }}</span> 
            <div v-html="this.$t('productCollagen.collagentinfo3').replace(/\n/g,'<br/>')"></div>     
        </div>
        <div class="collagentimg7 bgP" :style="collshow4"></div>
        <div class="collagentimg8 bgP" :style="collshow4"></div>
        <div class="back bgP" ></div>
        <div class="collagentinfo4 bgP" :style="collshow4">
            <span class="collagenttitle">{{ this.$t('productCollagen.collagentitle10') }}</span>
            <span class="collagenttitle1">{{ this.$t('productCollagen.collagentitle11') }}</span>
            <span class="collagenttitle">{{ this.$t('productCollagen.collagentitle12') }}</span> 
            <div v-html="this.$t('productCollagen.collagentinfo4').replace(/\n/g,'<br/>')"></div>     
        </div>
    </div>
</template>

<script>
import { fromEvent} from 'rxjs'
export default {
    name:"collagen",
    data(){
        return{
            collshow1:{opacity: 0},
            collshow2:{opacity: 0},
            collshow3:{opacity: 0},
            collshow4:{opacity: 0},
            collshow5:{opacity: 0},
            collshow6:{opacity: 0},
        }
    },
    mounted(){
    const this$=this;
    const isPhone=document.body.clientWidth;
       if(isPhone>500){
                this$.collshow1={ opacity: 1 };
         }else{
              this$.gfimg1={ opacity: 1 };
                this$.gfimg2={ opacity: 1 };
                this$.gfimg3={ opacity: 1 };
                this$.gfimg4={ opacity: 1 };
                this$.gfimg5={ opacity: 1 };
                this$.gfimg6={ opacity: 1 };
                this$.gfimg7={ opacity: 1 };
                this$.gfimg8={ opacity: 1 };
         }
     const scoll$=fromEvent(document,'scroll');
     let scrollH=document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollH<500 ){
        this$.collshow1={opacity:1}
    }
     scoll$.subscribe(function(){
     let scrollH=document.documentElement.scrollTop || document.body.scrollTop;
     console.log(scrollH);
         if(scrollH<500 ){
        this$.collshow1={opacity:1}
    }else if(scrollH>300 && scrollH<1000){
            this$.collshow2={opacity:1}
        }else if (scrollH>1000 && scrollH<5900){
            this$.collshow3={opacity:1}
        }else if (scrollH>5900){
            this$.collshow4={opacity:1}
        }

     })
    }
}
</script>

<style lang="less" scoped>
.bgP{
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
}
@media screen and(max-width: 500px){
.collagenttitle{
    font-size: 0.8rem;
    color: #bb9847;
}
.collagenttitle1{
    color: #bb9847;
    font-size:1.2rem;
}
.product-details3{
    position: relative;
    width: 420px;
    height: 3600px;
    margin: auto;
    clear: both;
    text-align: left;
    overflow: hidden;
    line-height: 2em;
    margin: auto;
    font-size: 0.6rem;
    color: #0b0b0b;
    .collagentinfo1{
        left: 20px;
        width: 55%;
        top:50px;
        transition: all 0.6s ease-out 0.4s;
    }
    .collagentimg1{
        top:10px;
        width: 120px;
        height: 370px;
        background-image: url("../200624_0009_5.png");
        right:40px;
        transition: 0.6s;
    }
    .collagentimg2{
        top:450px;
        left: 50px;
        width: 280px;
        height: 100px;
        background-image: url("../200624_0000_4.png");
        transition: all 0.6s ease-out 0.6s;
    }
    .collagentimg3{
        top:570px;
        left:0px;
        width: 400px;
        height: 400px;
        background-image: url("../200624_0012_-11.png");
        transition: 0.6s;
    }
        .collagentimg4{
        top:640px;
        left:70px;
        width: 260px;
        height:190px;
        background-image: url("../200624_0011_1.png");
        transition: all 0.6s ease-out 0.6s;
    }
        .collagentimg5{
        top:350px;
        left:15px;
        width:380px;
        height:500px;
        background-image: url("../200624_0010_1.png");
        transition: all 0.6s ease-out 0.4s;
    }
    .collagentinfo2{
        left:38px;
        width: 80%;
        top:980px;
        transition: all 0.6s ease-out 0.4s;
    }
     .collagentimg6{
        top:1200px;
        font-size: 0;
        transition: 0.6s;
        img{
            width: 100%;
             vertical-align: top;
        }
     }
     .collagentinfo3{
        left:30px;
        width: 80%;
        top:2650px;
        transition: all 0.6s ease-out 0.8s;
     }
     .collagentimg7{
        top:2850px;
        width: 280px;
        height: 150px;
        transition: 0.6s;
        background-image: url("../200624_0002_pngsucai_2169761_0dfb58.png");
     }
    .collagentimg8{
        top:2900px;
        width: 350px;
        height: 350px;
        transition: all 0.6s ease-out 0.4s;
        right: 0px;
        background-image: url("../200624_0001-10.png");
     }
     .back{
         background-color: #eeeeee;
         width: 1280px;
         height: 1200px;
         top:3000px;
         z-index: -2;
     }
     .collagentinfo4{
        left:35px;
        width: 80%;
        top:3280px;
        transition: all 0.6s ease-out 0.8s;
     }
}
}

@media screen and(min-width: 500px){
.collagenttitle{
    font-size: 1.2rem;
    color: #bb9847;
}
.collagenttitle1{
    color: #bb9847;
    font-size: 2rem;
}
.product-details3{
    position: relative;
    max-width: 1280px;
    min-width: 1280px;
    height: 8150px;
    margin: auto;
    clear: both;
    text-align: left;
    overflow: hidden;
    line-height: 2em;
    margin: auto;
    font-size: 1rem;
    color: #0b0b0b;
    .collagentinfo1{
        left: 35px;
        width: 60%;
        top:150px;
        transition: all 0.6s ease-out 0.4s;
    }
    .collagentimg1{
        top:10px;
        width: 250px;
        height: 780px;
        background-image: url("../200624_0009_5.png");
        right:70px;
        transition: 0.6s;
    }
    .collagentimg2{
        top:580px;
        left: 50px;
        width: 625px;
        height: 220px;
        background-image: url("../200624_0000_4.png");
        transition: all 0.6s ease-out 0.6s;
    }
    .collagentimg3{
        top:950px;
        left:150px;
        width: 900px;
        height: 880px;
        background-image: url("../200624_0012_-11.png");
        transition: 0.6s;
    }
        .collagentimg4{
        top:1120px;
        left:360px;
        width: 455px;
        height:330px;
        background-image: url("../200624_0011_1.png");
        transition: all 0.6s ease-out 0.6s;
    }
        .collagentimg5{
        top:720px;
        left:405px;
        width: 600px;
        height:500px;
        background-image: url("../200624_0010_1.png");
        transition: all 0.6s ease-out 0.4s;
    }
    .collagentinfo2{
        left:55px;
        width: 80%;
        top:1900px;
        transition: all 0.6s ease-out 0.4s;
    }
     .collagentimg6{
        top:2180px;
        font-size: 0;
        transition: 0.6s;
        img{
             vertical-align: top;
        }
     }
     .collagentinfo3{
        left:55px;
        width: 80%;
        top:6700px;
        transition: all 0.6s ease-out 0.8s;
     }
     .collagentimg7{
        top:6990px;
        width: 620px;
        height: 340px;
        transition: 0.6s;
        background-image: url("../200624_0002_pngsucai_2169761_0dfb58.png");
     }
    .collagentimg8{
        top:6890px;
        width: 890px;
        height: 900px;
        transition: all 0.6s ease-out 0.4s;
        right: 0px;
        background-image: url("../200624_0001-10.png");
     }
     .back{
         background-color: #eeeeee;
         width: 1280px;
         height: 1200px;
         top:7350px;
         z-index: -2;
     }
     .collagentinfo4{
        left:55px;
        width: 80%;
        top:7720px;
        transition: all 0.6s ease-out 0.8s;
     }
}
}

</style>