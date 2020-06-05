<template>
  <div class="inews">
    <!-- <topmenu /> -->
<div v-for="item in news.data" :key="item.id">
  <el-row  type="flex" justify="center" align="middle">
  <el-col :span="4" :xs="18" >
    <el-card :body-style="{ padding: '3px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
    </el-card>
  </el-col>
  <el-col :span="12" :xs="20">
    <div class="grid-content bg-purple-light">
    <div class="inewsinfo">{{ item.name }}</div>
    <div class="inewsinfo">{{ item.pinyin }}</div>
    </div>
  </el-col>
</el-row>
  <el-divider ></el-divider>
</div>
</div>
</template>

<script>
import axios from "axios";
// import topmenu from "../components/topmenu";
export default {
  name:"inews",
  components:{
    // topmenu,
  },
  data(){
    return{
      news:{
        abc:"aaa",
      }
    }
  },
  mounted: function(){
 axios.get("https://open.duyiedu.com/api/meituan/city/recents.json",{
   params:{
      appkey:"wlh0604_1588907673004"
   }
 }).then(res=>{
   console.log(res.data);
   this.news=res.data
   console.log(this.news)
 })
  }
  
}
</script>
<style lang="less" scoped>
.inews{


  .inewsinfo{
    display:block;
    padding: 15px;
    text-align: left;
    
  }


}
</style>