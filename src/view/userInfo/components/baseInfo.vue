<template>
  <div class="BaseInfo-wrap">
    <div class="info-type">年龄</div><div class="info-content">40</div>
    <div class="info-type">性别</div><div class="info-content">男</div>
    <div class="info-type">身高</div><div class="info-content">174</div>
    <div class="info-type">体重</div><div class="info-content">60</div>
    <div class="info-type">BMI</div><div class="info-content">23</div>
    <div class="info-type">血糖</div><div class="info-content">180</div>
    <div class="info-type">血压</div><div class="info-content">131</div>
    <div class="info-type">胰岛素</div><div class="info-content">1241</div>
    <div class="change-button button-position">修改</div>
  </div>
</template>
<script setup>
import { PictureOutlined,UserOutlined,FundViewOutlined,ContactsOutlined,UserSwitchOutlined,CompassOutlined,PhoneOutlined,InboxOutlined } from '@ant-design/icons-vue'
</script>
<style scoped lang="scss">
@import "../../../style.css";
.BaseInfo-wrap{
  width: 100%;
  height: 100%;
  padding: 10px 15px 0 15px;
  display: flex;
  flex-wrap: wrap;
  font-size: 22px;
  color: #646464;
  .info-type,.info-content{
    width: 170px;
    height: 83px;
    line-height: 83px;
    text-align: center;
    border: 0.1px solid #F2F2F2;
  }
  .info-type{
    background: #F2F2F2;
  }
  .button-position{
    margin-left: 580px;
  }
}
</style>
