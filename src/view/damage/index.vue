<template>
  <div style="width: 100%;background: rgba(220,233,243);">
    <div class="damage-wrap">
      <div style="width: 1000px;height: 70px;border-bottom: 2px solid #ccc;display: flex;">
        <div style="width: 164px;height: 70px;display: flex;align-items: center;margin-left: 400px;justify-content: center">
<!--          <img style="height: 55px" src="../../assets/Icon/危害因素检测.png">-->
          <span style="font-weight: bold;font-size: 24px;height: 40px;line-height: 40px;text-align: center">预测结果</span>
        </div>
<!--        <div style="width: 164px;height: 70px;display: flex;align-items: center;margin-left: 300px">-->
<!--          <el-input-->
<!--              style="width: 240px"-->
<!--              size="large"-->
<!--              placeholder="Please Input"-->
<!--              :suffix-icon="Search"-->
<!--          />-->
<!--        </div>-->
      </div>
      <div class="option-box">
<!--        <div class="option-title">-->
<!--          <div class="option-box2">-->
<!--            <img class="option-img" src="../../assets/Icon/糖尿病.png">-->
<!--            <span class="option-name">糖尿病</span>-->
<!--          </div>-->
<!--          <div class="option-box2">-->
<!--            <img class="option-img" src="../../assets/Icon/糖尿病.png">-->
<!--            <span class="option-name">糖尿病</span>-->
<!--          </div>-->
<!--          <div class="option-box2">-->
<!--            <img class="option-img" src="../../assets/Icon/糖尿病.png">-->
<!--            <span class="option-name">糖尿病</span>-->
<!--          </div>-->
<!--          <div class="option-box2">-->
<!--            <img class="option-img" src="../../assets/Icon/糖尿病.png">-->
<!--            <span class="option-name">糖尿病</span>-->
<!--          </div>-->
<!--        </div>-->
        <div class="damage-content">
          <result/>
        </div>
      </div>
      <div class="damage-complication">
        <damage :data="'危害'"/>
        <damage :data="'并发症'"/>
      </div>
      <div class="tips-box">
        <nav class="tips-title">健康小tips</nav>
        <nav style="height: 30px;display: flex;align-items: center">
          <a class="tips-option">一、概述</a>
          <a class="tips-option">二、症状</a>
          <a class="tips-option">三、预防</a>
          <a class="tips-option">四、治疗和诊断</a>
        </nav>
        <discribe/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Result from './components/predict-result.vue';
import Damage from './components/damage.vue';
import Discribe from './components/discribe.vue';
import {Right, Search} from "@element-plus/icons-vue";
import {ref,reactive} from "vue";
const data = reactive([
  {name:'危害'},
  {name:'并发症状'},
])
</script>

<style scoped lang="scss">
.damage-wrap{
  width: 1000px;
  margin-left: 240px;

  .option-box{
    width: 1000px;
    height: 360px;

    .option-title{
      margin-top: 15px;
      justify-content: space-between;
      display: flex;
      .option-box2{
        display: flex;
        float: left;
        background: white;
        border-radius: 4px;
        .option-img{
          padding: 4px;
          width: 36px;
          height: 32px;
        }
        .option-name{
          width: 84px;
          height: 32px;
          margin-left: 5px;
          font-size: 26px;
          //text-decoration: underline #999999;
        }

      }
    }
    .damage-content{
      width: 1000px;
      height: 300px;
      background: #BAD8FB;
      margin-top: 15px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .damage-complication{
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: space-between;
  }
  .tips-box{
    width: 100%;
    height: 400px;
    margin-top: 20px;
    .tips-title{
      width: 600px;
      height: 40px;
      font-weight: bold;
      font-size: 23px;
      border-bottom: 1.5px solid #949494;
    }
    .tips-option{
      margin-right: 20px;
      font-size: 18px;
      color: #0D6EFD;
      text-decoration: underline;
    }
  }
}
</style>
