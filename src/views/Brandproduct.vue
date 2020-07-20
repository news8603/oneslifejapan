<template>
  <!-- 这一页对应的是不同品牌(YUISU\ONESLIFE\FUJI)对应的产品列表页面 -->
  <div class="brandproduct">
    <div class="skinbanner" :style="{'backgroundImage':'url('+brandBlack+')'}">
      <div class="bannerinfo">{{brand}}</div>
      <div class="brandinfo" v-html="brandinfo.replace(/\n/g,'<br\>')"></div>
    </div>
    <div class="allinfo-p">
      <!-- 以下遍历i18n中的json文件中commodityinfo的内容，把产品列表遍历到页面中 -->
      <div class="infogrid" v-for="item in bestinfo" :key="item.jan">
        <router-link :to="{name:'commodityinfo',params:{id:item.jan}}" tag="div" class="button">
          <img :src="item.listimg" class="image" />
          <div style="padding: 14px;">
            <p>{{ item.infoname }}</p>
            <div class="infoline"></div>
            <p style="text-align: left;">JAN CODE:{{ item.jan }}</p>
            <p style="text-align: right;">{{ item.price }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="empty" v-if="pageinfo.length==0">{{this.$t('hp.empty')}}</div>
  </div>
</template>
<script>
export default {
  name: "brandproduct",
  data() {
    return {
      brand: "",
      ifEmpty: false, //ifEmptyz这个变量记录列表中的内容是否为空，如果为空，ifEmpty为false
      pageinfo: [],
      brandBlack: ""
    };
  },
  computed: {
    brandinfo: function() {
      let whichBrand = "";
      if (this.$route.params.id === "yuisu") {
        whichBrand = this.$t("hp.yuisu");
      } else if (this.$route.params.id === "ones") {
        whichBrand = this.$t("hp.ones");
      } else if (this.$route.params.id === "fuji") {
        whichBrand = this.$t("hp.fuji");
      }
      return whichBrand;
    },
    careinfo: function() {
      return this.$t("commodityinfo");
    },
    // 因为所有的产品都存在于i18n的commodityinfo类数组中，所以在筛选类型的时候，不符合条件的类型会在页面中空出一个位置，为了防止这种情况，提前将数组类中符合条件的数据push进新数组pageinfo中，再返回给bestinfo
    // 用计算属性定义bestinfo是因为在语言转换时可以实时更新页面数据
    bestinfo: function() {
      this.careinfo.forEach(element => {
        if (element.brand === this.brand) {
          this.pageinfo.push(element);
        }
      });

      return this.pageinfo;
    }
  },
  mounted() {
    let this$ = this;
    if (this.$route.params.id === "yuisu") {
      this$.brandBlack = require("../yuisu.png");
      this$.brand = "YUISU";
    } else if (this.$route.params.id === "ones") {
      this$.brandBlack = require("../oneslife.png");
      this$.brand = `One's Life Beauty`;
    } else if (this.$route.params.id === "fuji") {
      this$.brandBlack = require("../fuji.png");
      this$.brand = "FUJI";
    }
  }
};
</script>
<style lang="less" scoped>
.image {
  background-color: #f8f8f8;
  width: 100%;
  display: block;
}
.button {
  padding: 15px;
  transition-duration: 0.3s;
  border: 1px solid rgba(255, 255, 255, 0);
}
.button:hover {
  border: 1px solid #e0e0e0;
  transition-duration: 0.3s;
}
.infoline {
  margin-top: 10px;
  background-color: #eeeeee;
  height: 1px;
  width: 100%;
}

.price {
  display: inline-block;
  line-height: 30px;
}

.brandproduct {
  .skinbanner {
    margin: 20px 0px;
    background-color: #f7f7f7;
    width: 100%;
    // background-image: url(../yuisu.png);
    height: 300px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: calc(100vw - 50%);
    position: relative;
    .bannerinfo {
      position: absolute;
      top: 30%;
      left: 20%;
      font-size: 3em;
    }
    .brandinfo {
      position: absolute;
      top: 60%;
      left: 20%;
      font-size: 1.2em;
      text-align: left;
    }
  }

  .allinfo-p {
    display: inline-grid;
    max-width: 1290px;
    grid-template-columns: repeat(4, 25%);
    .infogrid {
      margin: 15px;
      padding: 15px;
    }
  }
  .empty {
    font-size: 1.5rem;
    margin-top: 5px;
    margin-bottom: 25px;
  }
}
.infogrid:hover {
  cursor: pointer;
}
ul li {
  display: block;
}
@media screen and(max-width: 1220px) {
  .brandproduct {
    .allinfo-p {
      grid-template-columns: repeat(3, 33.33%);
    }
    .empty {
      font-size: 1.5rem;
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }
}

@media screen and(max-width: 900px) {
  .brandproduct {
    .skinbanner {
      display: none;
    }
    .allinfo-p {
      display: inline-grid;
      grid-template-columns: repeat(2, 50%);
    }
    .empty {
      font-size: 1.5rem;
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }
}

@media screen and(max-width: 600px) {
  .brandproduct {
    .allinfo-p {
      grid-template-columns: repeat(1, 100%);
    }
    .empty {
      font-size: 1rem;
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }
}
</style>