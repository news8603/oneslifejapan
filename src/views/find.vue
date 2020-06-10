<template>
    <div class="find">
        <div class="infofind">
            <h1 class="infotitle">店舗検索</h1>
  
<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item 
  v-for="item in shopinfo"
  :title="item.shopname" :name="shopid"
  :key="item.shopid">
    <div class="shopinfo">{{ item.shopinfo }}</div>
    <div class="shopinfo">{{ item.shoptel }}</div>
    <div class="shopinfo">{{ item.shopimg }}</div>
    <div class="shopinfo">{{ item.shopgo }}</div>
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
shopinfo:[
    {
        shopid:"1",
        shopname:'株式会社ワンズライフジャパン',
        shopinfo:'東京中央区銀座１−２７−１２キャビネットビル５階,〒104-0061',
        shopimg:'',
        shopgo:'',
        shoptime:'',
        shoptel:"03-6264-4400/03-6264-4452"
    },
    {
        shopid:"2",
        shopname:"ワンズドラッグ浅草",
        shopinfo:"東京都台東区西浅草2-1-12 豚八ビル 別館1F,〒104-0061",
        shopimg:"",
        shopgo:"",
        shoptime:"",
        shoptel:"03-5811-1612/03-5811-1611"

    },
        {
        shopid:"3",
        shopname:"ワンズドラッグ大阪りんくう店",
        shopinfo:"大阪府泉南郡田尻町りんくうポート北５番６号 ",
        shopimg:"",
        shoptime:"",
        shoptel:"072-479-4400",
        shopgo:""
    },
            {
        shopid:"4",
        shopname:"大阪中央ドラッグ",
        shopinfo:"大阪府大阪市中央区南船場３ー６ー５芦池ビル２Ｆ２０号,〒06-4704-8068",
        shopimg:"",
        shoptime:"",
        shoptel:"06-4704-8068",
        shopgo:""
    },
        {
        shopid:"5",
        shopname:"御前崎グランドホテル",
        shopinfo:"静岡県御前崎市御前崎１４１２−１,〒437-1621 ",
        shopimg:"",
        shoptime:"",
        shoptel:"0548-63-3333",
        shopgo:""
    },
]
    }
},
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
            .shopinfo{
                padding:10px;
                padding-left:35px;
                text-align: left;
                 }
}
 }
}
}

</style>