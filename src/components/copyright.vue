<template>
  <!-- 整个页面写的是copyright的内容 -->
  <div class="copyright">
    <div class="info">
      <div class="map">
        <img src="../map.jpg" alt />
      </div>
      <div class="address">
        <div class="addresstext">{{ this.$t("shopinfo[0].shopname") }}</div>
        <p></p>
        <div class="addresstext">{{ this.$t("shopinfo[0].shopinfo") }}</div>
        <div
          class="addresstext"
          v-html="this.$t('shopinfo[0].shoptel').replace(/\n/g, '<br\>')"
        >
          
        </div>
      </div>
      <div class="address">
        <div class="addresstext">
          <router-link tag="a" to="/otc" class="fontLink">{{
            this.$t("hp.otctitle")
          }}</router-link>
        </div>
            <div class="addresstext">
          <router-link tag="a" to="/law" class="fontLink">{{
            this.$t("hp.otctitle1")
          }}</router-link>
        </div>
            <div class="addresstext">
          <router-link tag="a" to="/precautions" class="fontLink">{{
            this.$t("hp.otctitle2")
          }}</router-link>
        </div>
 
      </div>
    </div>
    <div class="bottomcopyright">
      <div>株式会社ワンズライフジャパン 東京都公安委員会 第301061904356号</div>
      <div>Copyright © ONE'S LIFE JAPAN All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "copyright",
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped >
a:link {
  color: white;
}
a:visited {
  color: white;
}
.copyright {
  background-color: #081f2c;
  color: #ffffff;
  font-size: 12px;
  .info {
    max-width: 1200px;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 15px;
    display: flex;
    margin: auto;
    flex-direction: row;
    flex-wrap: wrap;
    .map {
      margin: auto;
      padding: 5px;
      img {
        width: 300px;
        height: 200px;
      }
    }
    .address {
      margin-right: auto;

      display: inline-block;
      padding: 15px;
      text-align: left;
      // align-self: center;
      align-items: flex-start;
      .addresstext {
        margin-top: 10px;
      }
    }
  }
  .bottomcopyright {
    margin: auto;
    width: 90%;
    border-top: 1px solid #4b4b4b;
    padding-top: 15px;
    div {
      padding-bottom: 10px;
    }
  }
}
.source {
  /* font-size: 1.5rem; */
  margin: 0 1.5em;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
