<template>
<!-- 这个是店铺检索的页面 -->
    <div class="find">
        <div class="infofind">
            <h1 class="infotitle">店舗検索</h1>
  
<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item 
  v-for="(item,s) in i18nshopinfo"
  :title="item.shopname" :name="shopid"
  :key="item.shopid">
    <div class="shopinfo">{{ item.shopinfo }}</div>
    <div class="shopinfo">{{ item.shoptel }}</div>
    <div class="shopinfo">{{ item.shopimg }}</div>
    <div class="shopinfo">{{ item.shopgo }}</div>
       <el-card shadow="hover" class="shopimg">
        <img :src="infoimg[s].inimg" alt="" class="shopimg-info">
    </el-card>
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
            inimg: require('../shop-1.jpg')
        },
        {
            inimg: require('../shop-2.jpg')
        },
        {
            inimg: require('../shop-3.jpg')
        },
        {
            inimg: require('../shop-4.jpg')
        },
        {
            inimg: require('../shop-5.jpg')
        },
    ]
    }
},
computed:{
   i18nshopinfo:function(){

  let shopinfo=this.$t('shopinfo');
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
            .shopimg{
                margin-left: 50px;
                width: 250px;
                height: 250px;
                .el-card__body{
                    padding: 5px;
                .shopimg-info{
                width: 240px;
                height: 240px;
                }
            }
            }
 }
}
}
@media screen and (max-width: 900px){
    .find{
        .infofind{
         .el-collapse{
                .shopimg{
                margin: auto;
                width: 210px;
                height: 210px;
                 .el-card__body {
                 .shopimg-info{
                width: 200px;
                height: 200px;
                }
}
}
            }
            }
    }
}
</style>