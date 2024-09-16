<template>
  <div class="treat-title">
    <div v-for="(item,index) in treatType.arr" :key="index" class="title-wrap" :class="item.number === treatType.nowSelect.number?'active-title':''" @click="treatType.nowSelect=item">
      <h1 class="p-number">{{item.number}}</h1>
      <h1 class="p-word">{{item.word}}</h1>
    </div>
  </div>
  <div class="treat-content">
    <div class="treat-left">
      <p class="left-title"></p>
      <p class="left-content"></p>
    </div>
    <div class="treat-right">
      <img src="https://picsum.photos/850/700?6" class="treat-img">
    </div>
  </div>
</template>
<script setup>
import {ref,reactive} from "vue";
const treatType = reactive({
  arr:[
    {number:'01',word:'慢性病危害'},
    {number:'02',word:'智能预测'},
    {number:'03',word:'医生面对面'}
  ],
  nowSelect:{number:'01',word:'慢性病危害'}
})
</script>
<style scoped lang="scss">
.treat-title{
  width: 900px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  .title-wrap{
    height: 100%;
    width: 240px;
    .p-number,.p-word{
      width: 100%;
      height: 70px;
      line-height: 70px;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 0;
      color: #cccccc;
    }
    .p-word{
      font-size: 25px;
      height: 50px;
      line-height: 50px;
      color: black;
    }
  }
  .active-title{
    background: #5E8EBB;
  }
}

.treat-content{
  width: 1200px;
  height: 766px;
  position: relative;
  display: flex;
  .treat-left{
    position: absolute;
    width: 400px;
    height: 300px;
    box-shadow: 3px 2px 3px 3px rgba(0,0,0,0.2);
    top: 100px;
    left: 50px;
    z-index: 2;
    background: white;
    border-radius: 5px;
  }
  .treat-right{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    overflow: hidden;
    .treat-img{
      width: 850px;
      height: 700px;
    }
    .treat-img:hover{
      transition: transform 3s;
      transform: scale(1.4);
    }
  }
}
</style>
