<template>
  <!-- 这一页对应的是搜索框的搜索结果 -->
  <div class="searchlist">
    <div class="allinfo-p">
      <!-- 以下遍历i18n中的json文件中commodityinfo的内容，把产品列表遍历到页面中 -->
      <div class="infogrid" v-for="item in pageinfo" :key="item.jan">
        <span @click="isClick(item.jan)">
          <div class="button">
            <img :src="item.listimg" class="image" />
            <div style="padding: 14px;">
              <p>{{ item.infoname }}</p>
              <div class="infoline"></div>
              <p style="text-align: left;">JAN CODE:{{ item.jan }}</p>
              <p style="text-align: right;">{{ item.price }}</p>
            </div>
          </div>
        </span>
      </div>
    </div>
    <div class="empty" v-if="pageinfo.length==0">{{this.$t('hp.findresult')}}</div>
  </div>
</template>
<script>
export default {
  name: "searchlist",
  data() {
    return {
      findSearch: "",
      brand: "",
      ifEmpty: false, //ifEmptyz这个变量记录列表中的内容是否为空，如果为空，ifEmpty为false
      pageinfo: [],
      brandBlack: "",
      searchNumber: this.$store.state.findId.length,
    };
  },
  mounted() {
         for (let s = 0; s <= this.$store.state.findId.length; s++) {
        this.careinfo.forEach((element) => {
          if (element.jan === this.$store.state.findId[s]) {
            this.pageinfo.push(element);
          }
        });
      }
  },
  computed: {
    brandinfo: function () {
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
    careinfo: function () {
      return this.$t("commodityinfo");
    },
    // 因为所有的产品都存在于i18n的commodityinfo类数组中，所以在筛选类型的时候，不符合条件的类型会在页面中空出一个位置，为了防止这种情况，提前将数组类中符合条件的数据push进新数组pageinfo中，再返回给bestinfo
    // 用计算属性定义bestinfo是因为在语言转换时可以实时更新页面数据

  },
  watch: {
    bestinfo() {
      console.log("看看什么情况", this.pageinfo);
    },
  },
  methods: {
    isClick(jan) {
      this.$store.state.isClick = false;
      this.$store.state.findId = jan;
      this.$router.push({ name: "commodityinfo", params: { id: jan } });

      console.log(this.$store.state.isClick, "和JAN是:", jan);
    },
  },
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

.searchlist {
  .allinfo-p {
    width: 95%;
    display: inline-grid;
    max-width: 1220px;
    grid-template-columns: repeat(3, 33.3%);
    // .infogrid {
    //   margin: 15px;
    //   padding: 15px;
    // }
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
@media screen and(max-width: 1250px) {
  .searchlist {
    .allinfo-p {
      grid-template-columns: repeat(2, 50%);
    }
    .empty {
      font-size: 1.5rem;
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }
}

@media screen and(max-width: 900px) {
  .searchlist {
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