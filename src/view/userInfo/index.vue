<template>
  <div class="info-wrapper">
    <div class="user-wrap">
      <div class="user-title">
        <img src="@/assets/Login/touxiang.png" class="user-img">
        <div class="title-right">
          <div class="title-info">
            <div class="user-name">徐文杰</div>
            <div class="user-id">ID：2021081134</div>
          </div>
          <div class="out-login">退出登录</div>
        </div>
      </div>
      <div class="user-center">
        <div class="left-menu" @click.stop="">
          <div class="link-title">个人中心</div>
          <div class="user-link" @click="nowSelect = 'myInfo'" :class="nowSelect === 'myInfo'?'default-link':''"><UserOutlined />  个人简介</div>
          <div class="user-link" @click="nowSelect = 'baseInfo'" :class="nowSelect === 'baseInfo'?'default-link':''"><ReadOutlined />  健康数据</div>
          <div class="user-link" @click="nowSelect = 'myMsg'" :class="nowSelect === 'myMsg'?'default-link':''"><CommentOutlined />  我的消息</div>
          <div class="user-link" @click="nowSelect = 'hisPredict'" :class="nowSelect === 'hisPredict'?'default-link':''"><FieldTimeOutlined />  历史预测</div>
          <div class="user-link" @click="nowSelect = 'pasManage'" :class="nowSelect === 'pasManage'?'default-link':''"><UnlockOutlined />  密码管理</div>
        </div>
        <div class="right-content">
          <div v-if="nowSelect === 'myInfo'" class="content-title"><UserOutlined />  个人简介</div>
          <div v-if="nowSelect === 'baseInfo'" class="content-title"><ReadOutlined />  基本资料</div>
          <div v-if="nowSelect === 'myMsg'" class="content-title"><CommentOutlined />  我的消息</div>
          <div v-if="nowSelect === 'hisPredict'" class="content-title"><FieldTimeOutlined />  历史预测</div>
          <div v-if="nowSelect === 'pasManage'" class="content-title"><UnlockOutlined />  密码管理</div>
          <div class="user-content">
            <base-info v-if="nowSelect === 'baseInfo'"></base-info>
            <his-predict v-if="nowSelect === 'hisPredict'"></his-predict>
            <my-info v-if="nowSelect === 'myInfo'"></my-info>
            <my-msg v-if="nowSelect === 'myMsg'"></my-msg>
            <pas-manage v-if="nowSelect === 'pasManage'"></pas-manage>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { UserOutlined,ReadOutlined,CommentOutlined,UnlockOutlined,FieldTimeOutlined } from '@ant-design/icons-vue'
import BaseInfo from './components/baseInfo.vue'
import HisPredict from './components/hisPredict.vue'
import MyInfo from './components/myInfo.vue'
import MyMsg from './components/myMsg.vue'
import PasManage from './components/pasManage.vue'
import {ref} from "vue";
const nowSelect = ref('myInfo')
</script>
<style scoped lang="scss">
.info-wrapper{
  width: 100%;
  display: grid;
  place-items: center;
  .user-wrap{
    margin-top: 20px;
    width: 1069px;
    background: #F2F2F2;
    .user-title{
      background: white;
      box-shadow: 3px 2px rgba(0,0,0,0.2);
      border-radius: 5px;
      border: 0.1px solid #F2F2F2;
    }
    .user-title{
      width: 100%;
      height: 155px;
      display: flex;
      .user-img{
        width: 102px;
        height: 102px;
        margin: 25px;
      }
      .title-right{
        width: 831px;
        height: 90px;
        border-bottom: 1px solid #0eb0c9;
        margin: 30px 0 0 10px;
        display: flex;
        justify-content: space-between;
        .title-info,.out-login{
          width: 150px;
          height: 60px;
          margin-top: 20px;
          .user-name,.user-id{
            line-height: 30px;
            text-align: left;
            font-size: 18px;
          }
          .user-id{
            color: #999999;
            font-size: 17px;
          }
        }
        .out-login{
          height: 37px;
          width: 80px;
          line-height: 37px;
          text-align: center;
          font-size: 15px;
          color: #0eb0c9;
          border: 1px solid #0eb0c9;
          border-radius: 5px;
          box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
          cursor: pointer;
        }
      }
    }
    .user-center{
      width: 100%;
      height: 609px;
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      .left-menu,.right-content{
        background: white;
        box-shadow: 3px 3px 2px rgba(0,0,0,0.2);
        height: 609px;
        border-radius: 5px;
        border: 0.3px solid #F2F2F2;
      }
      .left-menu{
        width: 306px;
        .link-title{
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          margin-bottom: 20px;
          border-bottom: 1px solid #42AAC4;
          color: #42AAC4;
          font-weight: bold;
        }
        .user-link{
          width: 100%;
          height: 70px;
          line-height: 70px;
          text-align: center;
          cursor: pointer;
          color: #797979;
        }
        .user-link:hover{
          border:1px solid #cccccc;
        }
        //.user-link:focus{
        //  background: #42AAC4;
        //  color: white;
        //}
        .default-link{
          background: #42AAC4;
          color: white;
        }
      }
      .right-content{
        width: 728px;
        background: #F2F2F2;
        .content-title{
          width: 100%;
          height: 59px;
          line-height: 59px;
          text-align: left;
          color: #6FC3D7;
          background: white;
          border-radius: 5px;
          padding-left: 10px;
          font-size: 20px;
          box-shadow: 3px 3px 2px rgba(0,0,0,0.2);
        }
        .user-content{
          width: 100%;
          height: 532px;
          background: white;
          margin-top: 20px;
          box-shadow: 3px 3px 2px rgba(0,0,0,0.2);
          border-radius: 5px;

        }
      }
    }
  }
}
</style>
