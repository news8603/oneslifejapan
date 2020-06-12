<template>
    <div class="find">
        <div class="infofind">
            <h1 class="infotitle">店舗検索</h1>
  
<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item 
  v-for="item in i18nshopinfo"
  :title="item.shopname" :name="shopid"
  :key="item.shopid">
    <div class="shopinfo">{{ item.shopinfo }}</div>
    <div class="shopinfo">{{ item.shoptel }}</div>
    <div class="shopinfo">{{ item.shopimg }}</div>
    <div class="shopinfo">{{ item.shopgo }}</div>
   <div>{{ infoimg[item.shopid].inimg }}</div>
    <div class="shopinfo">{{item.shoptime}}</div>
  </el-collapse-item>

</el-collapse>
</div>
    </div>
 
</template>
<script>
export default {
    name:"find",
data(){
    return{
        infoimg:[{
            inimg: require('../01.jpg')
        },
        {
            inimg: require('../02.jpg')
        },
        {
            inimg: require('../03.jpg')
        },
        {
            inimg: require('../1-1.jpg')
        },
        {
            inimg: require('../1-2.jpg')
        },
    ]
    }
},
computed:{
   i18nshopinfo:function(){

  let shopinfo=this.$t('shopinfo');
  console.log(shopinfo);
       return  shopinfo;
   }
}
}
</script>
<style lang="less" >

.find{
    width: 100%;
    background-color: #f5f5f5;
    padding-top: 45px;
    padding-bottom: 45px;
    height: 100%;
  .infofind{
        max-width: 1290px;
        width: 80%;
        margin: auto;
            .infotitle{
                letter-spacing: 15px;
            }
        .el-collapse{
            .el-collapse-item__header{
                padding: 15px;
}
            .shopinfo{
                padding:5px;
                padding-left:35px;
                text-align: left;
                 }
 }
}
}

</style>