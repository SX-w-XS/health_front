<!--预测表右侧系统消息-->
<template>
  <div v-for="(item,index) in news.arr" :key="index">
    <div class="announce-wrap">
      <div class="news-box">
        <div class="point"></div>
        <div class="news">{{item.title}}</div>
      </div>
      <div class="news-bottom">
        <span>系统消息</span>
        <span>{{item.date}}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import {reactive} from "vue";

const news=reactive({
  arr:[
    {title:'IDF 《全国糖尿病地图（第10版）》 完整版正式发布',date:'2021-10-07'},
    {title:'JAMA最新：中国糖尿病及糖尿病前期发病率已过50%',date:'2022-01-04'},
    {title:'"脂肪肝"上升为中国第一大肝病，125个特效药在加速研发',date:'2024-05-04'},
  ]
})
</script>
<style scoped lang="scss">
.announce-wrap{
  width: 94%;
  margin-left: 3%;
  height: 110px;
  margin-top: 15px;
  .news-box{
    width: 100%;
    height: 90px;
    display: flex;
    .point{
      width: 20px;
      height: 20px;
      margin-top: 25px;
      background: #C280FF;
      border-radius: 10px;
    }
    .news{
      height: 70px;
      width: 290px;
      margin-left: 5px;
      align-items: center;
      justify-content: center;
      display: flex;
      line-height: 27px;
      font-size: 22px;
    }
    .news:hover{
      text-decoration: underline;
    }
  }
  .news-bottom{
    width: 100%;
    height: 30px;
    margin-top: -10px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
