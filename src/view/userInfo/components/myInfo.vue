<template>
  <div class="MyInfo-wrap">
    <div class="info-type"><PictureOutlined />  头像</div><div class="info-content"><img src="@/assets/Login/touxiang.png"></div>
    <div class="info-type"><UserOutlined />  账户名</div><div class="info-content">徐文杰</div>
    <div class="info-type2"><FundViewOutlined />  ID</div><div class="info-content2">2021081134</div>
    <div class="info-type2"><ContactsOutlined />  年龄</div><div class="info-content2">23</div>
    <div class="info-type2"><UserSwitchOutlined />  性别</div><div class="info-content2">男</div>
    <div class="info-type2"><CompassOutlined />  地区</div><div class="info-content2">四川成都</div>
    <div class="info-type3"><PhoneOutlined />  电话</div><div class="info-content3">1420028158</div>
    <div class="info-type3"><InboxOutlined />  邮箱</div><div class="info-content3">162739625@qq.com</div>
    <div class="change-button button-position">修改</div>
  </div>
</template>
<script setup>
import { PictureOutlined,UserOutlined,FundViewOutlined,ContactsOutlined,UserSwitchOutlined,CompassOutlined,PhoneOutlined,InboxOutlined } from '@ant-design/icons-vue'
</script>
<style scoped lang="scss">
@import "../../../style.css";
.MyInfo-wrap{
  width: 100%;
  height: 100%;
  padding: 10px 15px 0 15px;
  display: flex;
  flex-wrap: wrap;
  font-size: 22px;
  color: #646464;
  .info-type,.info-content{
    width: 160px;
    height: 152px;
    line-height: 152px;
    text-align: center;
    border: 0.1px solid #F2F2F2;
  }
  .info-type{
    background: #F2F2F2;
  }
  .info-content3{
    font-size: 16px;
  }
  .info-type2,.info-content2{
    width: 160px;
    height: 75px;
    line-height: 75px;
    text-align: center;
    border: 0.1px solid #F2F2F2;
  }
  .info-type2{
    background: #F2F2F2;
  }
  .info-type3,.info-content3{
    width: 160px;
    height: 71px;
    line-height: 71px;
    text-align: center;
    border: 0.1px solid #F2F2F2;
    overflow: hidden;
  }
  .info-type3{
    background: #F2F2F2;
  }
  .button-position{
    margin-left: 545px;
  }
}
</style>
