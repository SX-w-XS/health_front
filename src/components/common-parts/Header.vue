<template>
  <div class="container">
    <div class="content">
<!--      左侧存放logo等-->
      <div class="left"></div>
<!--      右侧存放菜单选项-->
      <div class="right">
        <router-link class="linka" to="/">首页</router-link>
        <router-link class="linka" to="/predict">健康预测</router-link>
        <router-link class="linka" to="/weihai">慢性病危害</router-link>
        <router-link class="linka" to="/consultation">医生咨询</router-link>
        <router-link class="linka" to="/">电子病历</router-link>
        <router-link class="linka" to="/userInfo">个人信息</router-link>

        <div class="loginBox">
          <div @click="login()">登录 |&nbsp;</div>
          <div @click="chongzhi()"> 注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import router from "../../router/router.js";
let city=ref('北京')
function sel(command){
  city.value=command
}

// //打开登录注册页面
function login(){
  // router.push('/login')

}
function chongzhi(){
  // router.push('/login')
}
// const emit=defineEmits(['beginLogin'])
// const beginLogin=()=>{
//   emit('beginLogin','1')
//   router.push('/login')
// }
</script>
<style lang="scss" scoped>
.container::before{
  content: "";
  position: absolute;
  width: 120%;
  height: 60%;
  background: rgb(255,255,255);
  background: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);
  animation: rotate 10s infinite linear;
}
.container::after{
  content: "";
  position: absolute;
  inset: 2px;
  background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
}
@keyframes rotate {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
.container {
  //position: relative;
  //z-index: 20;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ccc;
  position: fixed;
  padding: 10px;
  z-index: 100;
  //background-image: linear-gradient(-225deg, #DEF3F8 0%, #87A7D9 50%, #7085B6 100%);
  //box-shadow: 0 4px 8px rgba(143, 178, 201, 0.5);
  background-color: rgb(11 98 245 / 41%);
  overflow: hidden;
  .content {
    width: 80%;
    height: 50px;
    margin: auto; //居中
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      .logo {
        width: 150px;
        height: 30px;
        margin-right: 15px;
      }
    }
    .right {
      z-index: 101;
      display: flex;
      height: 50px;
      .linka{
        line-height: 50px;
        text-align: center;
        color: #ffffff;
        margin-right: 15px;
        text-decoration: none;
        display: block;
      }
      .router-link-active{
        color: #8fb2c9;
      }
      .linkb{
        border: 1px solid #646464;
      }
      .loginBox{
        display: flex;
        align-items: center;
        margin-left: 20px;
        color: #ffffff;
      }
    }
  }
}
</style>
