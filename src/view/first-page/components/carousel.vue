<!--轮播图组件-->
<template>
  <div class="carousel-box">
    <div class="carousel-options">
      <div v-for="(item,index) in carouselData.arr" :key="index">
        <div class="carousel-number" @click="carouselData.index=item">
          <div class="font-design">
            <div style="font-size: 50px;font-weight: bold;color: #cccccc">{{item.number}}</div>
            <div class="carousel-title" :class="{'carousel-title-font':index===carouselData.index}">{{item.title}}</div>
            <div v-show="item===carouselData.index" style="margin-top: -13px;"><img style="width: 90px;opacity: 0.7;z-index: 1" src="../../../assets/Icon/底部文字修饰条.png"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-content">
<!--      左部卡片，用于介绍轮播图内容-->
      <div class="left-card">
        <el-card style="width: 380px;margin-top: 80px;margin-left: 40px">
<!--          <template #header>-->
<!--            <div class="card-header">-->
<!--              <span>Card name</span>-->
<!--            </div>-->
<!--          </template>-->
<!--          <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>-->
<!--          <template #footer>Footer content</template>-->
          <div style="width: 100%;height: 55px;font-weight: bold;font-size: 35px">{{carouselData.index.title}}</div>
          <div style="width: 100%;height: 55px;color: #ccc">{{carouselData.index.subtitle}}</div>
          <div style="width: 100%;height: 150px;"></div>
        </el-card>
      </div>
<!--      轮播图图片-->
      <div class="right-img">
<!--        <img style="box-shadow: 10px 10px 10px 10px rgb(128,128,128)" :src="carouselData.arr[0].img">-->
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,reactive} from "vue";
const carouselData=ref({
  arr:[
    {number:'01',title:'健康评估',subtitle:'全面了解您的健康状态',description:'',img:'src/assets/Carousel/轮播图1.png'},
    {number:'02',title:'风险预测',subtitle:'前瞻性识别潜在健康风险',description:'',img:'src/assets/Carousel/轮播图2.png'},
    {number:'03',title:'健康指导',subtitle:'个性化方案助您迈向健康生活',description:'',img:'src/assets/Carousel/轮播图3.png'},
  ],
  index:{number:'01',title:'健康评估',subtitle:'全面了解您的健康状态',description:'',img:'src/assets/Carousel/轮播图1.png'},
})
</script>
<style scoped lang="scss">
.carousel-box{
  width: 100%;
  height: 100%;
  .carousel-options{
    width: 100%;
    height: 100px;
    .carousel-number{
      width: 33%;
      height: 80px;
      display: flex;
      float: left;
      justify-content: center;
      align-items: center;
      text-align: center;
      .font-design{
        .carousel-title{
          margin-top: -16px;
          font-size: 22px;
        }
        .carousel-title-font{
          font-weight: bold;
        }
      }
    }
  }
  .left-card{
    width: 25%;
    height: 100%;

  }
}
</style>
