<template>
  <!-- 这个页面写的是每个产品的详细介绍，产品的详细介绍只有这一页，会通过动态路由把所有的内容映射到这一个页面中，索引数值为产品的JAN码-->
  <div class="commodityinfo">
    <!-- 这里遍历i18n的json文件中的commodityinfo数组类，这个数组类中记录着此网站中所有的产品信息，通过jan码调取映射 -->
    <div v-for="(item,index) in commodityinfo" :key="index">
      <div v-if="item.jan===id">
        <div style="margin-top: 50px;margin-left:10%;text-align:left;font-size:1.2em">{{item.type}}</div>
        <el-row class="maxwidth">
          <el-col :xs="24" :sm="24" :md="10">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(img,index) in item.infoimg" :key="index">
                  <img :src="img" alt style="width:100%;height:100%" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </el-col>
          <el-col class="cominfo" :xs="24" :sm="24" :md="12">
            <p class="in-info" style="font-size:2em">{{ item.brand }}</p>
            <p class="in-info">{{item.infoname}}</p>
            <p class="in-info">{{ item.origin }}:{{ item.origininfo }}</p>
            <p class="in-info">{{ item.description }}:{{ item.descriptioninfo }}</p>
            <p class="in-info">JAN:{{ item.jan }}</p>
            <p class="in-info">{{aboutProduct.price}}：{{ item.price}}</p>
          </el-col>
        </el-row>
        <div class="computershow" mode="out-in">
          <el-row class="info">
            <el-row type="flex" justify="space-between" class="maxwidth">
              <el-col :span="5" :sm="20" class="infotitle" :class="{infotitleActive:cssshow}">
                <div @click="isshow(1)">{{ aboutProduct.about }}</div>
              </el-col>
              <el-col :span="5" :sm="20" class="infotitle" :class="{infotitleActive:cssshow1}">
                <div @click="isshow(2)">{{ aboutProduct.instructions }}</div>
              </el-col>
              <el-col :span="5" :sm="20" class="infotitle" :class="{infotitleActive:cssshow2}">
                <div @click="isshow(3)">{{ aboutProduct.ingredient }}</div>
              </el-col>
            </el-row>
            <div class="maxwidth">
              <transition name="infoshow">
                <span v-show="show">
                  <el-col :span="12" :sm="24">
                    <div v-html="item.details.replace(/\n/g,'<br\>')" class="productinfo"></div>
                  </el-col>
                  <el-col :span="12" :sm="24">
                    <div v-html="item.detailsinfo.replace(/\n/g,'<br\>')" class="productinfo"></div>
                  </el-col>
                </span>
              </transition>
              <transition name="infoshow">
                <span v-show="show1">
                  <el-col :span="24">
                    <div>{{ item.instructions }}</div>
                    <div v-html="item.instructionsinfo.replace(/\n/g,'<br\>')" class="productinfo"></div>
                  </el-col>
                  <el-col :span="24">
                    <div>{{ item.instructions1 }}</div>
                    <div v-html="item.instructionsinfo1.replace(/\n/g,'<br\>')" class="productinfo"></div>
                  </el-col>
                </span>
              </transition>
              <transition name="infoshow">
                <span v-show="show2">
                  <el-col :span="24">
                    <div>{{ aboutProduct.ingredient }}</div>
                    <div v-html="item.ingredient.replace(/\n/g,'<br\>')" class="productinfo"></div>
                  </el-col>
                </span>
              </transition>
            </div>
          </el-row>
        </div>

        <!-- 以下为手机端显示画面 -->
        <span class="hidden-md-and-up">
          <div class="back">
            <el-collapse v-model="activeName" accordion class="phoneshow">
              <el-collapse-item :title="aboutProduct.about" name="1">
                <div v-html="item.details.replace(/\n/g,'<br\>')" class="productinfo"></div>
                <p></p>
                <div v-html="item.detailsinfo.replace(/\n/g,'<br\>')" class="productinfo"></div>
              </el-collapse-item>
              <el-collapse-item :title="aboutProduct.instructions" name="2">
                <div>{{ item.instructions }}</div>
                <p></p>
                <div v-html="item.instructionsinfo.replace(/\n/g,'<br\>')" class="productinfo"></div>
                <p></p>
                <div>{{ item.instructions1 }}</div>
                <p></p>
                <div v-html="item.instructionsinfo1.replace(/\n/g,'<br\>')" class="productinfo"></div>
              </el-collapse-item>
              <el-collapse-item :title="aboutProduct.ingredient" name="3">
                <div v-html="item.ingredient.replace(/\n/g,'<br\>')" class="productinfo"></div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </span>
        <!-- 手机端显示画面结束 -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "commodityinfo",
  data() {
    return {
      activeName: "1",
      //id是用来调取此页面所有信息的JAN码，取自params中的ID值
      id: this.$route.params.id,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      show: 1,
      show1: 0,
      show2: 0,
      cssshow: 1,
      cssshow1: 0,
      cssshow2: 0
    };
  },
  computed: {
    findId: function() {
      //findId中的值，取自vuex的findId，是搜索框中填入的JAN码传递过来的
      return this.$store.state.findId;
    }, //取自搜索框中的JAN码

    commodityinfo: function() {
      let info = this.$t("commodityinfo");
      return info;
    },
    aboutProduct: function() {
      let aboutProduct = this.$t("infotitle");
      return aboutProduct;
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  methods: {
    isshow(w) {
      switch (w) {
        case 1:
          this.show = 1;
          this.show1 = 0;
          this.show2 = 0;
          this.cssshow = 1;
          this.cssshow1 = 0;
          this.cssshow2 = 0;
          break;
        case 2:
          this.show = 0;
          this.show1 = 1;
          this.show2 = 0;
          this.cssshow = 0;
          this.cssshow1 = 1;
          this.cssshow2 = 0;
          break;
        case 3:
          this.show = 0;
          this.show1 = 0;
          this.show2 = 1;
          this.cssshow = 0;
          this.cssshow1 = 0;
          this.cssshow2 = 1;
      }
    }
  },
  mounted() {
    //这里为了分别调用，给Id赋上不同的值，以便不同的地方分别调用
    if (this.$store.state.findId == undefined) {
      this.id = this.$route.params.id;
    } else if (this.$store.state.findId != this.id) {
      this.id = this.$store.state.findId;
    } else {
      this.id = this.$route.params.id;
    }
    console.log("Current Swiper instance object", this.mySwiper);
    this.mySwiper.slideTo(1, 1000, false);
  }
};
</script>
<style lang="less">
.maxwidth {
  max-width: 1290px;
  margin: auto;
}
.commodityinfo {
  font-size: 0.9em;
  margin: auto;
  .cominfo {
    margin: auto;
    margin-top: 10px;
    line-height: 3em;
    justify-content: center;
    .in-info {
      border-bottom: 1px solid #f4f4f4;
    }
  }
  .info {
    padding-top: 35px;
    background-color: #f5f5f5;
    padding: 25px;
    text-align: left;
    line-height: 3em;
    // border-top: 1px solid #eaeaea;
    .infotitle {
      text-align: center;
      padding-bottom: 5px;
      margin: 20px;
      border-bottom: 1px solid #eeeded;
      transition-duration: 0.3s;
    }
    .infotitle:hover {
      cursor: pointer;
      border-bottom: 1px solid #959595;
      transition-duration: 0.3s;
    }
    .infotitleActive {
      border-bottom: 1px solid #9f9f9f;
    }
    .productinfo {
      margin: 25px;
    }
  }
  .phoneshow {
    margin: auto;
    width: 95%;
    .el-collapse-item__header {
      margin-left: 20px;
      font-size: 1.1em;
    }
  }
}
.infoshow-enter-active,
.infoshow-leave-active {
  transition: opacity 0.3s ease;
}
.infoshow-enter,
.infoshow-leave-to {
  opacity: 0;
}
@media screen and (max-width: 992px) {
  .commodityinfo {
    .swiper-slide {
      margin-top: 0px;
    }
    .computershow {
      display: none;
    }
    .phoneshow {
      .productinfo {
        margin-left: 45px;
        margin-right: 45px;
        text-align: left;
      }
    }
  }
}
</style>