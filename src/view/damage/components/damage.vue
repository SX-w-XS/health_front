<!--危害和并发症组件-->
<template>
  <div class="damage-box">
    <div class="left-text">
      <p class="font-title">{{data}}</p>
      <p class="font-title font">糖尿病是一种慢性代谢性疾病，其主要特征是血糖水平持续升高。这种疾病可能会对心脏、血管、眼睛、肾脏和神经造成损害，是失明、肾衰竭、心脏病发作、中风和下肢截肢的主要原因。糖尿病的两种主要类型是1型和2型。</p>
    </div>
    <div class="right-btn">下一页</div>
  </div>
</template>
<script setup>
import {ref} from "vue";
defineProps({
  data:{}
})
</script>
<style scoped lang="scss">
.damage-box{
  background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
  width: 490px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  .left-text{
    width: 350px;
    height: 100%;
    .font-title{
      display: flex;
      align-items: center;
      font-size: 25px;
      font-weight: bold;
      margin:10px 0 10px 15px;
      color: #016FA0;
    }
    .font{
      font-size: 18px;
      line-height: 25px;
      color: black;
      font-weight: normal;
    }
  }
  .right-btn{
    width: 140px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #C2DCBF;
    font-weight: bold;
    text-decoration: underline;
  }
}
</style>
