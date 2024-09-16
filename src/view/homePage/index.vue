<template>
  <div class="homePage-wrap">
<!--    顶部图片和功能简介-->
    <div class="title-bg">基于多模态健康数据的个性化慢性病风险预测系统</div>
    <div class="feature-wrap">
      <div v-for="(item,index) in feature" :key="index">
        <div class="feature">
          <img src="https://picsum.photos/1536/430?2" class="feature-img">
          <div class="feature-detail">
            <h1 style="width: 100%;height: 40px;line-height: 40px;text-align: center;font-size: 30px">{{item.title}}</h1>
            <h3 style="width: 100%;height: 25px;line-height: 25px;text-align: center;font-size: 18px">{{item.subtitle}}</h3>
          </div>
        </div>
      </div>
    </div>

<!--    慢性病科普视频-->
    <div class="video-wrap">
      <p class="video-title">&nbsp;&nbsp;慢性病知多少？</p>
      <p class="video-subtitle">一分钟了解慢性病</p>
      <Video></Video>
    </div>

<!--    医疗新技术-->
    <div class="technowledge-wrap">
      <p class="video-title">医疗新技术</p>
      <p class="video-subtitle">慢性病防治的前沿技术</p>
      <Technowledge/>
    </div>
<!--    健康治疗-->
    <div class="treat-wrap">
      <p class="video-title">健康治疗</p>
      <p class="video-subtitle">从智能检测到医生面对面</p>
      <treat/>
    </div>
  </div>
</template>
<script setup>
import Video from './components/Video-Box.vue'
import Technowledge from './components/technowledge.vue'
import Treat from './components/TreatWrap.vue'
import {ref,reactive} from "vue";
const feature = reactive([{title:'疾病检测',subtitle:'高血压/糖尿病'},{title:'危害科普',subtitle:'预防/推荐食谱'},{title:'医生咨询',subtitle:'问答/预约'}])
</script>
<style scoped lang="scss">
.homePage-wrap{
  width: 100%;
  //background: rgba(220,233,243);
  //.title-bg,.feature-wrap,.video-wrap,.technowledge-wrap,.treat-wrap{
  //  background: white;
  //}
  .title-bg,.feature-wrap{
    width: 100%;
    height: 430px;
    display: flex;
    justify-content: space-around;
    //margin-bottom: 55px;
  }
  .title-bg{
    justify-content: initial;
    padding: 40px;
    background: url("https://picsum.photos/1536/430?1");
    //line-height: 430px;
    //text-align: center;
    //justify-content: center;
    font-weight: bolder;
    font-size: 35px;
  }
  .feature-wrap{
    margin-top: 80px;
  }
  .feature{
    position: relative;
    .feature-img{
      width: 414px;
      height: 298px;
      z-index: 1;
      position: relative;
      border-radius: 5px;
      //overflow: hidden;
    }
    //.feature-img:hover{
    //  transition:transform 2s;
    //  transform: scale(1.4);
    //}
    .feature-detail{
      position: relative;
      width: 238px;
      height: 149px;
      background: rgba(220,233,243);
      margin-left: 88px;
      margin-top: -60px;
      z-index: 2;
      padding-top: 30px;
      border-radius: 6px;
    }
  }

  .video-wrap,.technowledge-wrap,.treat-wrap{
    margin-top: 80px;
    width: 100%;
    display: grid;
    place-items: center;

    .video-title{
      width: 284px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 28px;
      font-weight: bolder;
      margin: 0;
    }
    //.video-title::after{
    //  content: '健康治疗';
    //  position: absolute;
    //  left: 0;
    //  color: #000;
    //  transform: translate(-40px,22px) scaleY(0.5) skew(50deg);
    //  z-index: -1;
    //  filter: blur(5px);
    //  mask: linear-gradient(#ccc,#000);
    //}
    .video-subtitle{
      width: 244px;
      height: 41px;
      line-height: 41px;
      text-align: center;
      font-size: 18px;
      color: #999999;
    }
  }
}
</style>
