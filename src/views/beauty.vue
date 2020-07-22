<template>
  <!-- 美容品的产品列表页面 -->
  <div class="beauty">
    <div class="skinbanner">
      <div class="bannerinfo">{{this.$t('hp.beauty')}}</div>
    </div>
    <!-- 打注释的代码段表示可以按类型搜索，但是现在所有产品只有20个，就不搜索了，搜索出来结果贼尴尬，待产品丰富后将此功能追加上 -->
    <!-- <div class="allinfo">
      <div class="selectall">
        <div class="selectinfo">
          <div>ご使用の時間帯</div>
          <div>
            <el-select v-model="valuetime" placeholder="すべて">
              <el-option
                v-for="item in optionstime"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="selectinfo">
          <div>気になるポイント</div>
          <div>
            <el-select v-model="valueinfo" placeholder="すべて">
              <el-option
                v-for="item in optionsinfo"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div> -->
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
  </div>
</template>
<script>
export default {
  name: "beauty",

  data() {
    return {
      optionstime: [
        {
          value: "option1",
          label: "日中"
        },
        {
          value: "option2",
          label: "夜"
        }
      ],
      optionsinfo: [
        {
          value: "option1",
          label: "シワ・小ジワ"
        },
        {
          value: "option2",
          label: "乾燥"
        },
        {
          value: "option3",
          label: "毛穴・ざらつき"
        },
        {
          value: "option4",
          label: "目もと"
        }
      ],
      valuetime: "",
      valueinfo: ""
    };
  },
  computed: {
    careinfo: function() {
      return this.$t("commodityinfo");
    },
    // 因为所有的产品都存在于i18n的commodityinfo数组类中，所以在筛选类型的时候，不符合条件的类型会在页面中空出一个位置，为了防止这种情况，提前将数组类中符合条件的数据push进新数组pageinfo中，再返回给bestinfo
    // 用计算属性定义bestinfo是因为在语言转换时可以实时更新页面数据
    bestinfo: function() {
      let pageinfo = [];
      this.careinfo.forEach(element => {
        if (element.type === "美容製品") {
          pageinfo.push(element);
        }
      });
      return pageinfo;
    }
  },
  methods: {}
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
.beauty {
  .skinbanner {
    margin: 20px 0px;
    background-color: #f7f7f7;
    width: 100%;
    background-image: url(../skincare.jpg);
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
  }
  .allinfo {
    max-width: 1290px;
    margin: auto;
    .selectall {
      display: flex;
      flex-direction: row;
      .selectinfo {
        text-align: left;
        margin: 10px;
      }
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
}
.infogrid:hover {
  cursor: pointer;
}
ul li {
  display: block;
}
@media screen and(max-width: 1220px) {
  .beauty {
    .allinfo-p {
      grid-template-columns: repeat(3, 33.33%);
    }
  }
}

@media screen and(max-width: 900px) {
  .beauty {
    .skinbanner {
      display: none;
    }
    .allinfo {
      .selectall {
        margin-top: 50px;
      }
    }

    .allinfo-p {
      display: inline-grid;
      grid-template-columns: repeat(2, 50%);
    }
  }
}

@media screen and(max-width: 600px) {
  .beauty {
    .allinfo-p {
      grid-template-columns: repeat(1, 100%);
    }
  }
}
</style>