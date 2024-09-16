<template>
  <div class="zixun-wrap">
    <div class="tuijian-wrap">
      <img class="doctor-icon" src="@/assets/doctor-icon/医生.png">
      <p class="doctor-title">名医推荐</p>
    </div>
    <div class="doctor-wrap">
      <Card v-for="(item) in 6" @click="checkDoctor()"></Card>
    </div>
    <div class="fenye-wrap">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>
<script setup>
import Card from './components/DoctorCard.vue'
import router from "@/router/router.js";
const checkDoctor = () =>{
  router.push('/doctor')
}
</script>
<style scoped lang="scss">
.zixun-wrap{
  width: 100%;
  display: grid;
  place-items: center;
  .tuijian-wrap{
    width: 863px;
    height: 47px;
    border-radius: 5px;
    box-shadow: 4px 4px 3px 1px rgba(0,0,0,0.2);
    border: 0.1px solid #F2F2F2;
    padding-left: 10px;
    display: flex;
    margin-top: 30px;
    .doctor-icon{
      width: 49px;
      height: 45px;
    }
    .doctor-title{
      line-height: 47px;
      text-align: center;
      color: black;
      font-size: 19px;
      margin-left: 15px;
    }
  }
  .doctor-wrap{
    width: 863px;
    height: 640px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
  }
  .fenye-wrap{
    margin-top: 30px;
  }
}
</style>
