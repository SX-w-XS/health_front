<template>
  <div class="prevent-wrap">
    <div class="title-back">预测结果</div>
<!--    预防小贴士-->
    <div class="prevent-tips">
      <tips/>
    </div>
<!--    详情-->
    <div class="detail">
      <Details/>
    </div>
  </div>
</template>
<script setup>
import tips from "./components/prevent-tips.vue"
import Details from "./components/detail.vue"
</script>
<style scoped lang="scss">
.prevent-wrap{
  width: 100%;
  background: rgba(220,233,243);
  .title-back{
    width: 100%;
    height: 300px;
    //background: url("../../assets/back/predict-result.png");
    background-image: linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    font-family:  "微软雅黑/Microsoft YaHei";
    color: white;
  }
  .prevent-tips{
    width: 100%;
  }
  .detail{
    width: 100%;
    height: 663px;
    justify-content: center;
    display: flex;
  }
}
</style>
