<template>
<div class="product-details0">
<div class="bijin-1 productP bijin-abs"></div>
<div class="bijin-title bijin-abs bijin-item-1">{{ this.$t("productBijin.bijinTitle1") }}</div>
<div class="bijin-item-info bijin-abs">
    <div v-html="this.$t('productBijin.bijinText1').replace(/\n/g,'<br\>')" ></div>
    <div v-html="this.$t('productBijin.bijinPs').replace(/\n/g,'<br\>')" class="bijin-text-ps"></div>
</div>
    
<div class="bijin-2 productP  bijin-abs"></div>
<div class="bijin-title bijin-abs bijin-item-2">{{ this.$t("productBijin.bijinTitle2") }}</div>
<div class="bijin-abs bijin-item-info-2">
    <div v-html="this.$t('productBijin.bijinText2').replace(/\n/g,'<br\>')"></div>
</div>
<div class="bijin-abs bijin-info">{{ this.$t("productBijin.bijinText2_1") }}</div>
<div class="bijin-abs bijin-info-1">{{ this.$t("productBijin.bijinText2_2") }}</div>
<div class="bijin-abs bijin-title bijin-item-3">{{ this.$t("productBijin.bijinTitle3") }}</div>
<div class="bijin-abs bijin-item-3-info">
    <div v-html="this.$t('productBijin.bijinTitle3_1').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title"></div>
    <div v-html="this.$t('productBijin.bijinText3_1').replace(/\n/g,'<br\>')"></div>
    <p></p>
    <div v-html="this.$t('productBijin.bijinTitle3_2').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title"></div>
    <div v-html="this.$t('productBijin.bijinText3_2').replace(/\n/g,'<br\>')"></div>
    <p></p>
    <div v-html="this.$t('productBijin.bijinTitle3_3').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title"></div>
    <div v-html="this.$t('productBijin.bijinText3_3').replace(/\n/g,'<br\>')"></div>
    <p></p>
    <div v-html="this.$t('productBijin.bijinTitle3_4').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title"></div>
    <div v-html="this.$t('productBijin.bijinText3_4').replace(/\n/g,'<br\>')"></div>
</div>

<div class="bijin-3 productP bijin-abs"></div>
<div class="bijin-abs bijin-title bijin-item-4 ">{{ this.$t("productBijin.bijinTitle4")}}</div>
<div class="bijin-abs bijin-item-4-info">
    <div v-html="this.$t('productBijin.bijinTitle4_1').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title"></div>
    <div v-html="this.$t('productBijin.bijinText4_1').replace(/\n/g,'<br\>')"></div>
    
    <div v-html="this.$t('productBijin.bijinTitle4_2').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title"></div>
    <div v-html="this.$t('productBijin.bijinText4_2').replace(/\n/g,'<br\>')"></div>
    
    <div v-html="this.$t('productBijin.bijinTitle4_3').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title"></div>
    <div v-html="this.$t('productBijin.bijinText4_3').replace(/\n/g,'<br\>')"></div>
    
    <div v-html="this.$t('productBijin.bijinTitle4_4').replace(/\n/g,'<br\>')" class="bijin-item-3-info-title"></div>
    <div v-html="this.$t('productBijin.bijinText4_4').replace(/\n/g,'<br\>')"></div>
</div>


<div class="bijin-4 productP bijin-abs"></div>    

<div class="bijin-5 productP bijin-abs"></div>    

<div class="bijin-6 productP bijin-abs"></div>    

</div>
</template>
<script>
import { fromEvent } from 'rxjs'; 
import { map,startWith,pairwise,partition} from 'rxjs/operators';

export default {
    name:"product-details0",
    data(){
        return {
     
        }
    },
    methods:{

    },

    mounted(){

    },
    created(){
            const [down$, up$] = fromEvent(document, 'scroll').pipe(
            map(() => document.documentElement.scrollTop || document.body.scrollTop),
            startWith(0),
            pairwise(),
            map(([prev, next]) => next - prev),
            partition((val) => val > 0),
        );
down$.subscribe(() => (console.log('滚动向下↓')));
up$.subscribe(() => (console.log('滚动向上↑')));
    },
}
</script>
<style lang="less" scoped>
.product-details0{
    position: relative;
    max-width: 1280px;
    min-width: 1200px;
    width: 100%;
    height: 100vh;
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
}
.bijin-item-1{
    top:150px;
    width: 60%;
        }
.bijin-item-info{
    margin-left:45px;
    width:60%;
    top:250px;

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
}
.bijin-item-2{
   top:750px;
   width: 60%;
   right: -50px;
}
.bijin-item-info-2{
   top:850px;
   width:40%;
 left:560px;
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
}
.bijin-item-3-info{
   top:1520px;
   width:40%;
   left:190px;
}
.bijin-item-3-info-title{
    font-size: 1.1em;
}

.bijin-3{
    width: 100%;
    height:1400px;
    background-image:url(../bijin-3.png);
    z-index: -1;
    top:2080px;
    right:0px;
}
.bijin-item-4{
    top:2200px;
    right:760px
}
.bijin-item-4-info{
    top:2240px;
    right:250px;
    width: 53%;
}

.bijin-4{
    width: 100%;
    height:1400px;
    background-image:url(../bijin-4.png);
    z-index: -1;
    top:3580px;
    right:0px;
}
.bijin-5{
    width: 100%;
    height:1400px;
    background-image:url(../bijin-5.png);
    z-index: -1;
    top:4880px;
    right:0px;
}
.bijin-6{
    width: 950px;
    height:950px;
    background-image:url(../bijin-6.png);
    z-index: -1;
    top:5880px;
    right:0px;
}
</style>