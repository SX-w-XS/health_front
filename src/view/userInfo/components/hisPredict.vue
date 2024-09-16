<template>
  <div class="pre-wrap">
    <div v-for="(item) in 8" class="pre-card">
      <p class="pre-time">2024年8月14日  16：08</p>
      <img src="@/assets/Predict/img.png" class="pre-result">
      <p class="pre-time">初步预测您所患病为：</p>
      <p class="pre-time">糖尿病</p>
      <p class="pre-time">查看详情</p>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.pre-wrap{
  width: 100%;
  height: 100%;
  background: #92DBEB;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  .pre-card{
    width: 185px;
    height: 222px;
    border-radius: 5px;
    background: white;
    display: grid;
    place-items: center;
    margin: 20px;
    .pre-time{
      width: 100%;
      height: 24px;
      line-height: 24px;
      text-align: center;
      font-size: 16px;
    }
  }
}
.pre-wrap::-webkit-scrollbar{
  display: none;
}
</style>
