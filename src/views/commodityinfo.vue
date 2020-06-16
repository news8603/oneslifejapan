<template>
    <div class="commodityinfo">
        <div 
        v-for="(item,index) in commodityinfo"
        :key="index"
        style="margin-top: 100px">
            <div v-if="item.jan===id">
                <el-row >
                <el-col :span="16"> 
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
                <el-col :span="8">
                    <div class="cominfo">JAN:{{ item.jan }}</div>
                    <div class="cominfo">{{ item.origin }}:{{ item.origininfo }}</div>
                    <div class="cominfo">{{ item.description }}:{{ item.descriptioninfo }}</div>
                </el-col>
                </el-row>
            <el-row>
                <el-col :span="24">
                    <div v-html="item.details.replace(/\n/g,'<br\>')" ></div>
                </el-col>
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
          
        }
    },
    computed:{
        commodityinfo:function(){
            let info= this.$t('commodityinfo');
            return info;
        },
          swiper() {
        return this.$refs.mySwiper.$swiper
      }
    
    },
    methods:{

    },
    mounted(){
         console.log(this.$route.params.id);
         console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)

    }
}
</script>
<style lang="less" scoped>
.commodityinfo{
    .cominfo{
        text-align: left;
        margin-top: 10px;
    }
}
</style>