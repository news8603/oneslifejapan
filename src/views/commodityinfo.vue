<template>
    <div class="commodityinfo">
<div></div>
        <div 
        v-for="(item,index) in commodityinfo"
        :key="index"
        style="margin-top: 100px">
            <div v-if="item.jan===id">
            <el-row >
                <el-col :span="9"> 
                <div v-swiper :mySwiper="swiperOption">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(img,index) in item.infoimg" :key="index">
                        <img :src="img" alt="" >
                    </div>
                 </div>
                    <div class="swiper-pagination" slot="pagination"></div>
                </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </el-col>
                <el-col :span="12">
                    <div class="cominfo">{{item.infoname}}</div>
                    <div class="cominfo">{{ item.origin }}:{{ item.origininfo }}</div>
                    <div class="cominfo">{{ item.description }}:{{ item.descriptioninfo }}</div>
                    <div class="cominfo">JAN:{{ item.jan }}</div>
                </el-col>
            </el-row>
            <el-row class="info">
               <el-row type="flex" justify="space-between">
                   <el-col :span="5"  class="infotitle" :class="{infotitleActive:cssshow}"><div @click="isshow(1)">{{ aboutProduct.about }}</div></el-col>
                   <el-col :span="5"  class="infotitle" :class="{infotitleActive:cssshow1}"> <div @click="isshow(2)">{{ aboutProduct.instructions }}</div></el-col>
                   <el-col :span="5"  class="infotitle" :class="{infotitleActive:cssshow2}"> <div @click="isshow(3)">{{ aboutProduct.ingredient }}</div></el-col>
              </el-row>
              <span v-if="show">
                <el-col :span="12" >
                    <div v-html="item.details.replace(/\n/g,'<br\>')" class="productinfo"></div>
                </el-col>
                <el-col :span="12" >
                    <div v-html="item.detailsinfo.replace(/\n/g,'<br\>')" class="productinfo"></div>
                </el-col>
              </span>
              <span v-if="show1">
                  <el-col :span="24" >
                      <div>{{ item.instructions }}</div>
                      <div v-html="item.instructionsinfo.replace(/\n/g,'<br\>')" class="productinfo"></div>
                  </el-col>
                  <el-col :span="24" >
                      <div>{{ item.instructions1 }}</div>
                      <div v-html="item.instructionsinfo1.replace(/\n/g,'<br\>')" class="productinfo"></div>
                  </el-col>
              </span>
              <span v-if="show2">
                   <el-col :span="24" >
                      <div>{{ aboutProduct.ingredient }}</div>
                      <div v-html="item.ingredient.replace(/\n/g,'<br\>')" class="productinfo"></div>
                  </el-col>
              </span>
            </el-row>
            </div>
        </div>
</div>
</template>
<script>
export default {
    name: "commodityinfo",
    data(){
        return{
            imgtry:"../../static/shop-1.jpg",
             id:this.$route.params.id,
             swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                    
                },
          // Some Swiper option/callback...
                navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                            },
                     },
          show:1,
          show1:0,
          show2:0,
          cssshow:1,
          cssshow1:0,
          cssshow2:0,
        }
    },
    computed:{
        commodityinfo:function(){
            let info= this.$t('commodityinfo');
            return info;
        },
        aboutProduct:function(){
            let aboutProduct= this.$t("infotitle");
            return aboutProduct;
        },
          swiper() {
        return this.$refs.mySwiper.$swiper
      }
    
    },
    methods:{
        isshow(w){
            switch(w){
                case 1:
                    this.show=1;
                    this.show1=0;
                    this.show2=0;
                    this.cssshow=1;
                    this.cssshow1=0;
                    this.cssshow2=0;
                    break;
                case 2:
                    this.show=0;
                    this.show1=1;
                    this.show2=0;
                    this.cssshow=0;
                    this.cssshow1=1;
                    this.cssshow2=0;
                    break;
                case 3:
                    this.show=0;
                    this.show1=0;
                    this.show2=1;
                    this.cssshow=0;
                    this.cssshow1=0;
                    this.cssshow2=1;
            }
        }
    },
    mounted(){
      this.swiper.slideTo(1, 1000, false)
    }
}
</script>
<style lang="less" scoped>
.commodityinfo{
  font-size: 0.9em;
    .cominfo{
       
        margin-left: 20px;
        text-align: left;
        margin-top: 10px;
         line-height: 3em;
    }
    .info{
        padding-top:35px;
        background-color: #f5f5f5;
        padding: 25px;
        text-align: left;
        line-height: 3em;
        border-top: 1px solid #eaeaea;
        .infotitle{
            text-align: center;
            padding-bottom:5px;
            margin: 20px;
            border-bottom: 1px solid #eeeded;
            transition-duration: 0.3s;
        }
        .infotitle:hover{
            cursor: pointer;
            border-bottom: 1px solid #959595;
           transition-duration: 0.3s;
        }
        .infotitleActive{
            border-bottom: 1px solid #9f9f9f;
        }
        .productinfo{
            margin: 25px;
        }

    }
}
</style>