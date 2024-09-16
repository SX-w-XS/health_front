<template>
  <div class="infoWrap">
    <div class="yisheng-wrap">
      <div class="info-title">
        <img class="info-img" src="@/assets/doctor-icon/医生2.png">
        <div class="info-right">
          <nav class="person-info">
            <a class="info-name">李医生</a>
            <a class="info-major">心内科</a>
            <a class="info-status">副主任医师</a>
            <a class="info-confirm">已认证</a>
          </nav>
          <p class="yiyuan-name">中国医科大学附属第一医院</p>
          <div class="other-status">
            <div class="fuwu-span">服务人次 30256</div>
            <div class="fuwu-span">好评率 95%</div>
          </div>
        </div>
        <div @click="beginChat()" class="zixun-btn">点击咨询</div>
      </div>
      <div class="doctor-introduce">
        <div class="doctor-title">
          <div class="title-name">医生介绍</div>
          <div class="title-line"></div>
        </div>
        <p class="doctor-info">
          医学教育背景介绍 : 1998年毕业于华北煤炭医学院（现为华北理工大学），获学士学位。2003年北华大学硕士研究生毕业。2012年考取2级心理咨询师。从事临床工作25，担任急诊科主任8年。擅长急诊急救，心脑血管，消化内分泌等内科疾病。并擅长心身同治。
        </p>
        <p class="doctor-info">
          专业擅长 : 冠心病、血脂异常、心绞痛、心肌梗死、心脏神经官能症、糖尿病血管病变、心肌缺血、窦性心动过速、甲状腺功能低、急性焦虑症、老年高血压、心房颤动、早搏、阵发性室上性心动过速、慢性心功能不全、室性早搏、心肌炎。
        </p>
        <p class="doctor-info">
          个人简介 : 擅长心脑血管、消化内分泌疾病，急诊急救、各种中毒的治疗。本诊所愿为您解决躯体病痛，并为您提供心理支持。
        </p>
        <p class="doctor-info">
          医院地点 : 中国医科大学附属第一医院 沈阳和平区南京街155号【春雨提示：部分医院有多个院区，请先与医生确认好地点后再前往就诊】
        </p>
      </div>
      <div class="doctor-time">
        <div class="doctor-title">
          <div class="title-name">出诊时间</div>
          <div class="title-line"></div>
        </div>
        <div class="time-table">
          <el-table :data="tableData" style="width: 800px">
            <el-table-column prop="date" label="日期" width="100" />
            <el-table-column prop="one" label="星期一" width="100" />
            <el-table-column prop="two" label="星期二" width="100" />
            <el-table-column prop="three" label="星期三" width="100" />
            <el-table-column prop="four" label="星期四" width="100" />
            <el-table-column prop="five" label="星期五" width="100" />
            <el-table-column prop="six" label="星期六" width="100" />
            <el-table-column prop="seven" label="星期天" width="100" />
          </el-table>
        </div>
      </div>
      <div class="patient-comment">
        <div class="doctor-title">
          <div class="title-name">患者评价</div>
          <div class="title-line"></div>
        </div>
        <div class="comment-wrap">
          <div class="patient-info">
            <span class="patient-name">匿名患者</span>
            <span class="patient-name">2024年8月14日</span>
          </div>
          <div class="comment-content">王医生非常专业，对待病人认真负责，治疗效果显著，非常感谢！</div>
          <div class="under-dashed"></div>

          <div class="patient-info">
            <span class="patient-name">匿名患者</span>
            <span class="patient-name">2024年8月14日</span>
          </div>
          <div class="comment-content">王医生非常专业，对待病人认真负责，治疗效果显著，非常感谢！</div>
          <div class="under-dashed"></div>

          <div class="patient-info">
            <span class="patient-name">匿名患者</span>
            <span class="patient-name">2024年8月14日</span>
          </div>
          <div class="comment-content">王医生非常专业，对待病人认真负责，治疗效果显著，非常感谢！</div>
          <div class="under-dashed"></div>

          <div class="patient-info">
            <span class="patient-name">匿名患者</span>
            <span class="patient-name">2024年8月14日</span>
          </div>
          <div class="comment-content">王医生非常专业，对待病人认真负责，治疗效果显著，非常感谢！</div>
          <div class="under-dashed"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {reactive} from "vue";
import router from "@/router/router.js";

const tableData = reactive([
  {date:'早上',one:'',two:'',three:'',four:'',five:'',six:'',seven:''},
  {date:'中午',one:'',two:'',three:'',four:'',five:'',six:'',seven:''},
  {date:'晚上',one:'',two:'',three:'',four:'',five:'',six:'',seven:''},
])

const beginChat = () =>{
  router.push('/chat')
}
</script>
<style scoped lang="scss">
.infoWrap{
  width: 100%;
  display: grid;
  place-items: center;
  .yisheng-wrap{
    width: 941px;
    height: 1465px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    margin-top: 50px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.2);
    .info-title{
      width: 941px;
      height: 165px;
      display: flex;
      .info-img{
        width: 128px;
        height: 128px;
        margin: 10px 0 0 10px;
      }
      .info-right{
        width: 460px;
        height: 170px;
        margin: 25px 0 0 35px;
        .person-info{
          width: 460px;
          height: 47px;
          .info-name,.info-major,.info-status,.info-confirm{
            width: 90px;
            line-height: 47px;
            text-align: center;

            font-size: 20px;
            padding: 0 10px 0 10px;
          }
          .info-major,.info-status{
            font-size: 16px;
          }
          .info-confirm{
            width: 73px;
            height: 17px;
            font-size: 13px;
            background: #FFA800;
            color: white;
            border-radius: 4px;
          }
        }
        .yiyuan-name{
          width: 230px;
          line-height: 25px;
          text-align: center;
          font-size: 17px;
          color: #999999;
        }
        .other-status{
          width: 757px;
          height: 55px;
          border-top: 1px solid #42AAC4;
          margin-top: 25px;
          display: flex;
          .fuwu-span{
            width: 130px;
            height: 55px;
            line-height: 55px;
            text-align: center;
            border-right: 1px solid #42AAC4;
            box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1);
            margin-right: 7px;
            color: #999999;
          }
        }
      }
      .zixun-btn{
        width: 150px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #169BD5;
        color: white;
        cursor: pointer;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    .doctor-introduce{
      //height: 400px;
      width: 100%;
      margin-top: 60px;
      .doctor-info{
        width: 100%;
        margin-bottom: 10px;
        padding: 10px;
        color: #646464;
        font-size: 17px;
      }
    }
    .doctor-title{
      width: 100%;
      height: 45px;
      display: flex;
      align-items: center;
      .title-name{
        width: 130px;
        height: 45px;
        line-height: 45px;
        font-size: 20px;
        text-align: center;
        border-left: 10px solid #82D1E2;
      }
      .title-line{
        width: 700px;
        height: 1px;
        background: #42AAC4;
      }
    }
    .doctor-time{
      width: 100%;
      height: 270px;
      margin-top: 30px;
      .time-table{
        width: 100%;
        height: 220px;
        padding: 20px;
        align-items: center;
        display: flex;
        justify-content: center;
      }
    }
    .patient-comment{
      width: 100%;
      height: 500px;
      margin-top: 30px;
      .comment-wrap{
        margin-top: 10px;
        width: 100%;
        //height: 110px;
        .patient-info{
          width: 100%;
          height: 55px;
          .patient-name{
            line-height: 55px;
            text-align: center;
            color: #646464;
            padding: 0 30px 0 10px;
          }
        }
        .comment-content{
          width: 100%;
          padding: 10px;
          color: #999999;
        }
        .under-dashed{
          //padding: 0 5px 0 5px;
          width: 100%;
          height: 1px;
          background-image: linear-gradient(to right,#42AAC4 0%,#42AAC4 50%,transparent 75%);
          background-size: 20px 10px;
          background-repeat: repeat-x;
        }
      }
    }
  }
}
</style>
