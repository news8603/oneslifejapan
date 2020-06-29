<template>
    <div class="product-details2">
        <div class="gf12img1 gfP" :style="gfimg1"></div>
        <div class="gf12  gfP" :style="gfimg1">12GF</div>
        <div class="gf12img2 gfP" :style="gfimg1"></div>
        <div class="gf12img3 gfP" :style="gfimg1"></div>
        <div class="gf12img4 gfP" :style="gfimg1"></div>
        <div class="gf12img5 gfP" :style="gfimg1"></div>
        <div class="gf12img6 gfP" :style="gfimg1"></div>
        <div class="gf12img7 gfP" :style="gfimg1"></div>
        <div class="gf12img8 gfP" :style="gfimg1"></div>
        <div class="gf12info1 gfP" :style="gfimg2">
            <div class="gf12infotitle ">{{this.$t("product12GF.gf12title1")}}</div>
            <br><br>
            <div v-html="this.$t('product12GF.gf12info1').replace(/\n/g,'<br\>')"></div>
        </div>
        <div class="gf12img9 gfP" :style="gfimg3"></div>
        <div class="gf12img10 gfP" :style="gfimg3"></div>
        <div class="gf12info2 gfP" :style="gfimg3">
            <span class="gf12infotitle">{{this.$t('product12GF.gf12title2')}}</span>
            <span class="gf12infotitle1">{{this.$t('product12GF.gf12title3')}}</span>
            <br><br>
            <div v-html="this.$t('product12GF.gf12info2').replace(/\n/g,'<br\>')"></div>
        </div>
        <div class="gf12img11 gfP" :style="gfimg4"></div>
        <div class="gf12info3 gfP" :style="gfimg4">
           <span class="gf12infotitle">{{this.$t('product12GF.gf12title4')}}</span>
            <span class="gf12infotitle1">{{this.$t('product12GF.gf12title5')}}</span>
            <br><br>
            <div v-html="this.$t('product12GF.gf12info3').replace(/\n/g,'<br\>')"></div>
        </div>
        <div class="gf12img12 gfP" :style="gfimg5"></div>
        <div class="gf12img13 gfP" :style="gfimg5"></div>
        <div class="gf12info4 gfP" :style="gfimg5">
            <span class="gf12infotitle">{{this.$t('product12GF.gf12title6')}}</span>
            <span class="gf12infotitle1">{{this.$t('product12GF.gf12title7')}}</span>
            <br><br>
            <div v-html="this.$t('product12GF.gf12info4').replace(/\n/g,'<br\>')"></div>
        </div>
        <div class="gf12img14 gfP"  :style="gfimg6"></div>
        <div class="gf12info5 gfP"  :style="gfimg6">
            <span class="gf12infotitle">{{this.$t('product12GF.gf12title8')}}</span>
            <br><br>
            <div v-html="this.$t('product12GF.gf12info5').replace(/\n/g,'<br\>')"></div>
        </div>
        <div class="gf12info6 gfP" :style="gfimg7">{{ this.$t('product12GF.gf12title9') }}</div>
        <div class="gf12img15 gfP" :style="gfimg7"></div>
        <div class="gf12info7 gfP" :style="gfimg7">
            <div class="gf12infotitle2">
            <div class="gf12info7-img" ></div>
            <div class="gf12finfo7-img-info">{{ this.$t('product12GF.gf12title10') }}</div>
        </div>
        <div class="gf12infotitle2">
            <div class="gf12info7-img"></div>
            <div class="gf12finfo7-img-info">{{ this.$t('product12GF.gf12title11') }}</div>
        </div>
                <div class="gf12infotitle2">
            <div class="gf12info7-img"></div>
            <div class="gf12finfo7-img-info">{{ this.$t('product12GF.gf12title12') }}</div>
        </div>
                <div class="gf12infotitle2">
            <div class="gf12info7-img"></div>
            <div class="gf12finfo7-img-info">{{ this.$t('product12GF.gf12title13') }}</div>
        </div>
                <div class="gf12infotitle2">
            <div class="gf12info7-img"></div>
            <div class="gf12finfo7-img-info">{{ this.$t('product12GF.gf12title14') }}</div>
        </div>
    </div>
        <div class="gf12img16 gfP" :style="gfimg8"></div>
        <div class="gf12info8 gfP" :style="gfimg8">
            <sapn class="gf12infotitle">{{ this.$t('product12GF.tsgfinfotitle14') }}</sapn>
            <br><br>
            <div v-html="this.$t('product12GF.gf12info6').replace(/\n/g,'<br\>')" class="gf12info8-1"></div>
        </div>
        <div class="gf12img17 gfP" :style="gfimg8"></div>

    </div>
</template>
<script>
import { fromEvent} from 'rxjs'; 

export default {
    name:"product-details2",
    data(){
        return{
            gfimg1:{opacity: 0},
            gfimg2:{opacity: 0},
            gfimg3:{opacity: 0},
            gfimg4:{opacity: 0},
            gfimg5:{opacity: 0},
            gfimg6:{opacity: 0},
            gfimg7:{opacity: 0},
            gfimg8:{opacity: 0},
        }
    },
    mounted(){
        let isPhone=document.body.clientWidth;
        let this$=this;
        if(isPhone>500){
                this$.gfimg1={ opacity: 1 };

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
        scoll$.subscribe(function(){
            let scrollH=document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollH);
            if( scrollH>1800 && scrollH<2100){
                this$.gfimg2={ opacity: 1 }
            }else if ( scrollH>2100 && scrollH<3000){
                this$.gfimg3={ opacity: 1 }
            }else if ( scrollH>3000 && scrollH<3300){
                this$.gfimg4={ opacity: 1 }
            }else if ( scrollH>3300 && scrollH<4200){
                this$.gfimg5={ opacity: 1 }
            }else if ( scrollH>4200 && scrollH<5100){
                this$.gfimg6={ opacity: 1 }
            }else if ( scrollH>5100 && scrollH<5900){
                this$.gfimg7={ opacity: 1 }
            }else if ( scrollH>5900){
                this$.gfimg8={ opacity: 1 }
            }
        })
    }
}
</script>
<style lang="less" scoped >
.gfP{
    position: absolute;
    background-repeat: no-repeat;
    background-size:contain;
}
@media screen and (max-width: 500px){
    .gf12info7-img{
        display: inline-block;
        background-size: contain;
        width: 40px;
        height: 40px;
        background-image: url(../12GF200624_0004.png);
    }
    .gf12finfo7-img-info{
         display: inline-block;
    }
     .gf12infotitle{
     font-size: 1.2rem;
     color:#b38e5e;
                }
    .gf12infotitle1{
     font-size: 1.4rem;
     color:#b38e5e;
    }
    .gf12infotitle2{
        text-align: center;
    font-size: 1rem;
    height: 60px;
     color:#919191;
    }
    .product-details2{
        font-size: 0.6rem;
        position: relative;
        width:420px;
        height: 3270px;
        margin: auto;
        clear: both;
        text-align: left;
        overflow: hidden;
        line-height: 2em;
        margin: auto;
        .gf12{
            top:80px;
            font-size: 5rem;
            left:105px;
            color: #737373;
           transition: all 0.6s ease-out 0.3s;


        }
        .gf12img1{
            width: 500px;
            height: 400px;
            background-image: url(../12GF200624_0020.png);
            z-index: -1;
            transition: 0.6s;
        }
        .gf12img2{
            top:160px;
            width: 70px;
            height: 70px;
            left:180px;
            background-image: url(../12GF0000.png);
               z-index: -1;
               transition: all 0.6s ease-out 0.2s;
        }
        .gf12img3{
            top:280px;
            width: 1110px;
            height:860px;
            background-image: url(../12GF200624_0023.png);
               z-index: -1;
               transition: all 0.6s ease-out 0.6s;

        }
         .gf12img7{
            top:210px;
            right:-120px;
            width: 300px;
            height:300px;
            background-image: url(../12GF200624_0012.png);
            transition: all 0.6s ease-out 0.6s;
            z-index: -1;
        }
         .gf12img4{
            top:300px;
            left:50px;
            width: 350px;
            height:500px;
            background-image: url(../12GF200624_0003.png);
            transition: all 0.6s ease-out 0.4s;
            
        }
          .gf12img5{
            top:650px;
            left:60px;
            width: 280px;
            height:230px;
            background-image: url(../12GF200624_0002.png);
            transition: all 0.6s ease-out 0.6s;

        }
           .gf12img6{
            top:300px;
            right:-50px;
            width: 200px;
            height:600px;
            background-image: url(../12GF200624_0001.png);
            transition: all 0.6s ease-out 1s;

        }
           .gf12img8{
            top:350px;
            width: 300px;
            height:550px;
            background-image: url(../12GF200624_0011.png);
            z-index: -1;
            transition: all 0.6s ease-out 1.2s;

        }
            .gf12info1{
                text-align: center;
                width: 70%;
                top:900px;
                left:60px;
            transition:0.6s;

            }
            .gf12img9{
            top:1150px;
            width: 350px;
            height:900px;
            background-image: url(../12GF200624_0018.png);
            z-index: -1;
            left:20px;
                     transition: all 0.6s ease-out 1.2s;


            }
            .gf12img10{
            top:1150px;
            width: 230px;
            height:1200px;
            background-image: url(../12GF200624_0022.png);
            z-index: -1;
            right:0px;
            transition: all 0.6s ease-out 0.6s;

            }
            .gf12info2{
                text-align: left;
                width: 50%;
                top:1200px;
                left:160px;
            transition: all 0.6s ease-out 1s;

            }
          .gf12img11{
            top:1470px;
            width: 190px;
            height:1600px;
            background-image: url(../12GF200624_0017.png);
            z-index: -1;
            left: 250px;
            transition: 0.6s;


            }
           .gf12info3{
                text-align: left;
                width: 50%;
                top:1520px;
                left:30px;
            transition: all 0.6s ease-out 0.4s;


            }
           .gf12img12{
            top:1800px;
            width: 650px;
            height:600px;
            background-image: url(../12GF200624_0019.png);
            z-index: -2;
            left:0px;
            transition: 0.6s;

            }
           .gf12img13{
            top:1750px;
            width: 600px;
            height:290px;
            background-image: url(../12GF200624_0016.png);
            z-index: -2;
            left:40px;
            transition: all 0.6s ease-out 0.4s;

            }
           .gf12info4{
                text-align: left;
                width: 50%;
                top:1940px;
                left:30px;
            transition: all 0.6s ease-out 0.8s;

            }
           .gf12img14{
            top:2150px;
            width: 400px;
            height:260px;
            background-image: url(../12GF200624_0009.png);
            z-index: -2;
            left:0px;
            transition: 0.6s;

            }
            .gf12info5{
                text-align: center;
                width: 65%;
                top:2190px;
                left:60px;
                transition: all 0.6s ease-out 0.4s;
            }
            .gf12info6{
                top:2400px;
                right: 40px;
                height: 680px;
                width: 15px;
                line-height: 2.2rem;
                color: #b38e5e;
                font-size: 2rem;
            transition: all 0.6s ease-out 0.6s;

            }
           .gf12img15{
            top:2480px;
            width: 550px;
            height:400px;
            background-image: url(../12GF200624_0012.png);
            z-index: -2;
            right: -400px;
            transition: all 0.6s ease-out 0.4s;

            }
            .gf12info7{
            top:2440px;
            height:1200px;
            z-index: -2;
            left: 30px;
            transition: all 0.6s ease-out 0.8s;

            }
            .gf12img16{
            top:2800px;
            width: 600px;
            height:600px;
            background-image: url(../12GF200624_0019.png);
            z-index: -2;
            right: px;
            transition: 0.6s;

            }
            .gf12info8{
            top:2850px;
            width: 55%;
            z-index: -2;
            left: 20px;
            .gf12info8-1{
                    width: 60%;
                }
            transition: all 0.6s ease-out 0.6s;
            
            }
           .gf12img17{
            top:2900px;
            width: 350px;
            height:350px;
            background-image: url(../12GF200624_0025.png);
            z-index: -2;
            right: 0px;
            transition: all 0.6s ease-out 0.4s;

            }
    }
}
@media screen and (min-width: 500px){
    .gf12info7-img{
        display: inline-block;
        background-size: contain;
        width: 80px;
        height: 80px;
        background-image: url(../12GF200624_0004.png);
    }
    .gf12finfo7-img-info{
         display: inline-block;
    }
     .gf12infotitle{
     font-size: 2rem;
     color:#b38e5e;
                }
    .gf12infotitle1{
     font-size: 2.6rem;
     color:#b38e5e;
    }
    .gf12infotitle2{
        text-align: center;
    font-size: 2rem;
    height: 140px;
     color:#919191;
    }
    .product-details2{
        font-size: 1.2rem;
        position: relative;
        max-width: 1280px;
        min-width: 1280px;
        height: 7300px;
        margin: auto;
        clear: both;
        text-align: left;
        overflow: hidden;
        line-height: 2em;
        margin: auto;
        .gf12{
            top:120px;
            font-size: 16rem;
            left:375px;
            color: #737373;
           transition: all 0.6s ease-out 0.3s;


        }
        .gf12img1{
            width: 1280px;
            height: 830px;
            background-image: url(../12GF200624_0020.png);
            z-index: -1;
            transition: 0.6s;
        }
        .gf12img2{
            top:290px;
            width: 220px;
            height: 220px;
            left:570px;
            background-image: url(../12GF0000.png);
               z-index: -1;
               transition: all 0.6s ease-out 0.2s;
        }
        .gf12img3{
            top:290px;
            width: 1110px;
            height:2560px;
            background-image: url(../12GF200624_0023.png);
               z-index: -1;
               transition: all 0.6s ease-out 0.6s;

        }
         .gf12img7{
            top:410px;
            right:-270px;
            width: 890px;
            height:1000px;
            background-image: url(../12GF200624_0012.png);
            transition: all 0.6s ease-out 0.6s;
            z-index: -1;
        }
         .gf12img4{
            top:620px;
            left:210px;
            width: 1060px;
            height:1460px;
            background-image: url(../12GF200624_0003.png);
            transition: all 0.6s ease-out 0.4s;
            
        }
          .gf12img5{
            top:1600px;
            left:230px;
            width: 830px;
            height:729px;
            background-image: url(../12GF200624_0002.png);
            transition: all 0.6s ease-out 0.6s;

        }
           .gf12img6{
            top:620px;
            left:840px;
            width: 590px;
            height:1710px;
            background-image: url(../12GF200624_0001.png);
            transition: all 0.6s ease-out 1s;

        }
           .gf12img8{
            top:1140px;
            width: 590px;
            height:1210px;
            background-image: url(../12GF200624_0011.png);
            z-index: -1;
            transition: all 0.6s ease-out 1.2s;

        }
            .gf12info1{
                text-align: center;
                width: 60%;
                top:2400px;
                left:290px;
            transition:0.6s;

            }
            .gf12img9{
            top:2850px;
            width: 650px;
            height:900px;
            background-image: url(../12GF200624_0018.png);
            z-index: -1;
            left:200px;
                     transition: all 0.6s ease-out 1.2s;


            }
            .gf12img10{
            top:2550px;
            width: 650px;
            height:1200px;
            background-image: url(../12GF200624_0022.png);
            z-index: -1;
            right:-190px;
            transition: all 0.6s ease-out 0.6s;

            }
            .gf12info2{
                text-align: left;
                width: 50%;
                top:3000px;
                left:500px;
            transition: all 0.6s ease-out 1s;

            }
          .gf12img11{
            top:3370px;
            width: 650px;
            height:1640px;
            background-image: url(../12GF200624_0017.png);
            z-index: -1;
            right:-213px;
            transition: 0.6s;


            }
           .gf12info3{
                text-align: left;
                width: 50%;
                top:3580px;
                left:90px;
            transition: all 0.6s ease-out 0.4s;


            }
           .gf12img12{
            top:3200px;
            width: 650px;
            height:1390px;
            background-image: url(../12GF200624_0019.png);
            z-index: -2;
            left:0px;
            transition: 0.6s;

            }
           .gf12img13{
            top:3970px;
            width: 750px;
            height:1390px;
            background-image: url(../12GF200624_0016.png);
            z-index: -2;
            left:80px;
            transition: all 0.6s ease-out 0.4s;

            }
           .gf12info4{
                text-align: left;
                width: 50%;
                top:4450px;
                left:90px;
            transition: all 0.6s ease-out 0.8s;

            }
           .gf12img14{
            top:4900px;
            width: 600px;
            height:600px;
            background-image: url(../12GF200624_0009.png);
            z-index: -2;
            left:80px;
            transition: 0.6s;

            }
            .gf12info5{
                text-align: center;
                width: 65%;
                top:5000px;
                left:280px;
                transition: all 0.6s ease-out 0.4s;
            }
            .gf12info6{
                top:5350px;
                right: 190px;
                height: 680px;
                width: 15px;
                line-height: 3.5rem;
                color: #b38e5e;
                font-size: 2.5rem;
            transition: all 0.6s ease-out 0.6s;

            }
           .gf12img15{
            top:5440px;
            width: 1000px;
            height:1000px;
            background-image: url(../12GF200624_0012.png);
            z-index: -2;
            right: -450px;
            transition: all 0.6s ease-out 0.4s;

            }
            .gf12info7{
            top:5600px;
            height:1200px;
            z-index: -2;
            left: 250px;
            transition: all 0.6s ease-out 0.8s;

            }
            .gf12img16{
            top:6220px;
            width: 1200px;
            height:1300px;
            background-image: url(../12GF200624_0019.png);
            z-index: -2;
            right: 80px;
            transition: 0.6s;

            }
            .gf12info8{
            top:6600px;
            width: 60%;
            z-index: -2;
            left: 150px;
            .gf12info8-1{
                    width: 60%;
                }
            transition: all 0.6s ease-out 0.6s;
            
            }
           .gf12img17{
            top:6520px;
            width: 750px;
            height:750px;
            background-image: url(../12GF200624_0025.png);
            z-index: -2;
            right: 0px;
            transition: all 0.6s ease-out 0.4s;

            }
    }
}
</style>