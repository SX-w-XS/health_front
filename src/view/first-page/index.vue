<!--疾病预测页面-->
<template>
  <div class="predict-box">
<!--    标题-->
    <div class="predict-title">
      <div class="title-img">
        <img  class="show-img" src="../../assets/Icon/左标题装饰.png">
      </div>
      <div class="title-font">
        <div style="font-size: 32px;text-align: center;font-weight: bold;margin-top: 15px">健康数据分析</div>
        <div style="font-size: 20px;text-align: center;color: #999999;margin-top: 5px">/分析患病风险/</div>
      </div>
      <div class="title-img">
        <img class="show-img" src="../../assets/Icon/右标题装饰.png">
      </div>
    </div>
<!--    轮播图，疾病统计情况-->
    <div class="disease-carousel">
      <carousel/>
    </div>
    <div class="predict-content">
<!--      需填写的预测表-->
      <div class="predict-table"></div>
<!--      填写时给出的相应提示-->
      <div class="predict-tips"></div>
    </div>
  </div>
</template>

<script setup>
import carousel from '../first-page/components/carousel.vue'
</script>
<style scoped lang="scss">
.predict-box{
  width: 100%;
  //height: 570px;
  .predict-title{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    .title-img{
      //height: 70px;
      .show-img{
        width: 100%;
        height: 100%;
      }
    }
    .title-font{
      align-items: center;
      justify-content: center;
    }
  }
  .disease-carousel{
    width: 80%;
    margin-top: 5px;
    margin-left: 10%;
    height: 641px;
    //background: #cccccc;
  }
}
</style>
