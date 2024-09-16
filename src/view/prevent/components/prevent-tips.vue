<template>
  <div class="tips-wrap">
    <!-- 慢性病图标和按钮 -->
    <div class="tips-title">
      <div class="title">预防小贴士</div>
      <div class="icon-wrap">
        <div v-for="(item,index) in tipsData.arr" :key="index">
          <div class="icon-box" :class="{'tips-option':index===tipsData.nowIndex}" @click="tipsData.nowIndex=index">
            <img class="tips-icon" :src="item.icon">
            <span class="tips-name">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="tips-content">
      <div v-for="(item,index) in tipsData.nowDate" :key="index">
        <div class="content-wrap">
          <div class="tip-wrap">
            <img class="tips-img" style="height: 50px;margin-left: 6px;margin-top: 6px" :src="item.img">
            <div class="tips-type" style="font-size:24px;font-weight:bold;margin-left:20px;margin-top: 15px">{{ item.name }}</div>
          </div>
          <div class="pre-content">{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {reactive,ref} from "vue";
const tipsData=reactive({
  arr:[
      {name:'糖尿病',icon:'src/assets/Icon/糖尿病2.png',tip:[{img:'src/assets/Icon/饮食.png',name:'饮食',content:'选择低GI食物： 选择低糖指数（GI）的食物，如全谷类（燕麦、全麦面包）、豆类（豆子、鹰嘴豆）和大米（糙米）等，可以帮助稳定血糖水平。\n' +
          '控制简单糖分摄入： 减少高糖食物和饮料的摄入，如糖果、甜点、碳酸饮料等，以防止血糖急剧上升。'},{img:'src/assets/Icon/运动.png',name:'运动',content:'每周至少进行150分钟的中等强度有氧运动，如快走、骑自行车或游泳，此外还应包括每周两次的力量训练来增强肌肉质量，同时减少久坐时间，即使在工作时也要每隔一段时间起来活动一下。'},
          {img:'src/assets/Icon/定期检测.png',name:'定期检测',content:'对于有糖尿病家族史或其他风险因素的人，应定期检查血糖水平、血压和胆固醇，定期进行糖化血红蛋白（HbA1c）测试，以便及早发现并管理潜在的健康问题。'}]},
    {name:'高血压',icon:'src/assets/Icon/高血压2.png',tip:[{img:'src/assets/Icon/饮食.png',name:'饮食',content:'选择低GI食物： 选择低糖指数（GI）的食物，如全谷类（燕麦、全麦面包）、豆类（豆子、鹰嘴豆）和大米（糙米）等，可以帮助稳定血糖水平。\n' +
          '控制简单糖分摄入： 减少高糖食物和饮料的摄入，如糖果、甜点、碳酸饮料等，以防止血糖急剧上升。'},{img:'src/assets/Icon/运动.png',name:'运动',content:'每周至少进行150分钟的中等强度有氧运动，如快走、骑自行车或游泳，此外还应包括每周两次的力量训练来增强肌肉质量，同时减少久坐时间，即使在工作时也要每隔一段时间起来活动一下。'},
          {img:'src/assets/Icon/定期检测.png',name:'定期检测',content:'对于有糖尿病家族史或其他风险因素的人，应定期检查血糖水平、血压和胆固醇，定期进行糖化血红蛋白（HbA1c）测试，以便及早发现并管理潜在的健康问题。'}]},
    {name:'脂肪肝',icon:'src/assets/Icon/脂肪肝2.png',tip:[{img:'src/assets/Icon/饮食.png',name:'饮食',content:'选择低GI食物： 选择低糖指数（GI）的食物，如全谷类（燕麦、全麦面包）、豆类（豆子、鹰嘴豆）和大米（糙米）等，可以帮助稳定血糖水平。\n' +
          '控制简单糖分摄入： 减少高糖食物和饮料的摄入，如糖果、甜点、碳酸饮料等，以防止血糖急剧上升。'},{img:'src/assets/Icon/运动.png',name:'运动',content:'每周至少进行150分钟的中等强度有氧运动，如快走、骑自行车或游泳，此外还应包括每周两次的力量训练来增强肌肉质量，同时减少久坐时间，即使在工作时也要每隔一段时间起来活动一下。'},
          {img:'src/assets/Icon/定期检测.png',name:'定期检测',content:'对于有糖尿病家族史或其他风险因素的人，应定期检查血糖水平、血压和胆固醇，定期进行糖化血红蛋白（HbA1c）测试，以便及早发现并管理潜在的健康问题。'}]},
  ],
  nowDate:[{img:'src/assets/Icon/饮食.png',name:'饮食',content:'选择低GI食物： 选择低糖指数（GI）的食物，如全谷类（燕麦、全麦面包）、豆类（豆子、鹰嘴豆）和大米（糙米）等，可以帮助稳定血糖水平。\n' +
          '控制简单糖分摄入： 减少高糖食物和饮料的摄入，如糖果、甜点、碳酸饮料等，以防止血糖急剧上升。'},{img:'src/assets/Icon/运动.png',name:'运动',content:'每周至少进行150分钟的中等强度有氧运动，如快走、骑自行车或游泳，此外还应包括每周两次的力量训练来增强肌肉质量，同时减少久坐时间，即使在工作时也要每隔一段时间起来活动一下。'},
          {img:'src/assets/Icon/定期检测.png',name:'定期检测',content:'对于有糖尿病家族史或其他风险因素的人，应定期检查血糖水平、血压和胆固醇，定期进行糖化血红蛋白（HbA1c）测试，以便及早发现并管理潜在的健康问题。'}],
  nowIndex:0,
})
</script>
<style scoped lang="scss">
.tips-wrap{
  width: 1366px;
  height: 670px;
  margin: auto;
  font-family: 'stlf';
  .tips-title{
    width: 100%;
    height: 225px;
    align-items: center;
    .title{
      width: 220px;
      height: 45px;
      display: flex;
      justify-content: center;
      margin: 15px auto;
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      color: #806d9e;
    }
    .icon-wrap{
      width: 100%;
      height: 75px;
      //margin-top: -15px;
      //display: flex;
      .icon-box{
        background: white;
        width: 207px;
        height: 70px;
        display: flex;
        float: left;
        border: 2px solid #ccc;
        margin: 0 15px 0 5px;
        border-radius: 15px;
        .tips-icon{
          margin-left: 10px;
          width: 70px;
          height: 65px;
        }
        .tips-name{
          height: 70px;
          display: flex;
          justify-content: center;
          text-align: center;
          align-items: center;
          font-size: 23px;
          padding: 0 10px;
          font-weight: bold
        }
      }
      .tips-option{
        color:#0eb0c9;
        border-color: #0eb0c9;
      }
    }
  }
  .tips-content{
    width: 100%;
    height: 455px;
    margin-top: -65px;
    .content-wrap{
      background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
      width: 370px;
      height: 400px;
      float: left;
      margin-right: 40px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
      border-radius: 6px;
      .tip-wrap{
        width: 100%;
        height: 70px;
        display: flex;
        background: white;
      }
      .pre-content{
        margin-left: 30px;
        width: 290px;
        line-height: 40px;
        font-size: 19px;
      }
    }
  }
}
</style>
