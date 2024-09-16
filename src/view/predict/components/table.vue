<!--预测表-->
<template>
  <div class="table-wrap">
    <div class="table-box">
      <div class="icon-title">
        <div style="width: 141px;height: 80px;margin-left: 10px;margin-right: 20px;padding: 5px">
          <img  src="../../../assets/Icon/文件图标.png" style="width: 90%;height: 90%">
        </div>
        <div class="Icon-img" @click="healthData.cur_button='Diabetes'">
          <div class="Img"><img src="../../../assets/Icon/糖尿病.png"></div>
          <div class="Icon-font" :class="{'Icon-back':healthData.cur_button==='Diabetes'}">糖尿病</div>
        </div>
        <div class="Icon-img" @click="healthData.cur_button='fattyLiver'">
          <div class="Img"><img src="../../../assets/Icon/脂肪肝.png"></div>
          <div class="Icon-font" :class="{'Icon-back':healthData.cur_button==='fattyLiver'}">脂肪肝</div>
        </div>
        <div class="Icon-img" @click="healthData.cur_button='Hypertension'">
          <div class="Img"><img src="../../../assets/Icon/高血压.png"></div>
          <div class="Icon-font" :class="{'Icon-back':healthData.cur_button==='Hypertension'}">高血压</div>
        </div>
      </div>
      <div class="table-content" tabindex="1">
        <div v-for="(item,index) in healthData.Diabetes" :key="index">
          <div class="table-option">
            <div class="option-name">{{item.name}}</div>
            <div class="input-box">
              <input class="Input" tabindex="2" :placeholder="item.placeholder" v-model="item.data">
            </div>
          </div>
        </div>
      </div>
      <div class="table-button">
        <button class="bottom-button">取消</button>
        <button class="bottom-button button-submit" @click="goPre()">提交</button>
      </div>
    </div>
<!--    最新消息-->
    <div class="table-tips">
      <div class="tips-title">
        <img style="width: 50px;height: 68px" src="../../../assets/Icon/公告.png"/>
        <span style="font-size:24px;height: 68px;position: relative;top: 4px">最新消息</span>
      </div>
<!--      系统消息-->
      <div class="tips-box">
        <announcement/>
      </div>
<!--      入库数据占比-->
      <div class="data-percentage">
        <pie-img/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Announcement from './announcement.vue'
import PieImg from './pieImg.vue'
import {ref,reactive} from "vue";
import router from "@/router/router.js";
const healthData = reactive({
  Diabetes:[
    {name:'年龄(age)',placeholder:' 请输入您的年龄',data:''},
    {name:'性别(sex)',placeholder:' 请输入您的性别',data:''},
    {name:'身高(height)',placeholder:' 请输入您的身高',data:''},
    {name:'体重(weight)',placeholder:' 请输入您的体重',data:''},
    {name:'BMI',placeholder:' 请输入您的BMI',data:''},
    {name:'血糖(Glucose)',placeholder:' 请输入您的血糖',data:''},
    {name:'血压(BloodPressure)',placeholder:' 请输入您的血压',data:''},
    {name:'胰岛素(Insulin)',placeholder:' 请输入您的胰岛素含量',data:''},
    {name:'糖尿病谱系功能',placeholder:' 请输入您的糖尿病谱系功能',data:''},
    {name:'皮肤厚度(SkinThickness)',placeholder:' 请输入您的皮肤检测厚度',data:''},
  ],
  //当前选择按钮，默认是糖尿病
  cur_button:'Diabetes'
})
function goPre(){
  router.push('/damage')
}
</script>
<style scoped lang="scss">
.table-wrap{
  margin-top: 30px;
  width: 1140px;
  height: 664px;
  //margin: auto;
  display: flex;
  justify-content: space-between;
  font-family: 'stlf';
  .table-box{
    height: 100%;
    width: 736px;
    //border: 2px solid;
    //border-image: linear-gradient(to top, #df89b5 0%, #bfd9fe 100%) 1;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background: white;
    //box-shadow: 2px 4px 8px #cccccc;
    .icon-title{
      width: 100%;
      height: 88px;
      display: flex;
      .Icon-img{
        height: 41px;
        margin-top: 21.5px;
        width: 160px;
        margin-left: 20px;
        display: flex;
        .Img{
          width: 51px;
          height: 100%;
        }
        .Icon-font{
          width: 106px;
          height: 100%;
          border: 2px solid #ccc;
          border-radius: 14px;
          align-items: center;
          justify-content: center;
          display: flex;
        }
        .Icon-back{
          background: #0eb0c9;
          border-color: #0eb0c9;
        }
      }
    }
    .table-content{
      width: 660px;
      height: 483px;
      border: 2px solid #cccccc;
      margin-left: 38px;
      border-radius: 9px;
      background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
      .table-option{
        height: 27px;
        width: 100%;
        margin-top: 18px;
        display: flex;
        .option-name{
          width: 40%;
          height: 100%;
          text-align: right;
          margin-right: 35px;
          color: #646464;
          padding-top: 2px;

        }
        .input-box{
          width: 240px;
          height: 100%;
          .Input{
            width: 100%;
            height: 100%;
            border-radius: 7px;
            border: 1px solid #999;
          }
          .Input:focus{
            outline: 1px solid #0eb0c9;

          }
        }
      }
    }
    .table-content:hover{
      border: 2px solid #0eb0c9;
    }
    .table-button{
      width: 660px;
      margin-left: 34px;
      height: 40px;
      margin-top: 23px;
      display: flex;
      justify-content: right;
      .bottom-button{
        width: 140px;
        height: 100%;
        background: white;
        border: 1px solid #999999;
        border-radius: 5px;
      }
      .button-submit{
        background: #169BD5;
        color: white;
        margin-left: 30px;
        border: 1px solid #169BD5;
      }
    }
  }

  .table-tips{
    background: white;
    height: 100%;
    width: 358px;
    //border: 2px solid #169BD5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    .tips-title{
      width: 340px;
      height: 70px;
      margin-left: 9px;
      border-bottom: 1.5px solid #8080FF;
    }
    .tips-box{
      width: 100%;
      height: 377px;
      border-bottom: 1px solid #169BD5;
    }
    .data-percentage{
      width: 100%;
      height: 188px;
    }
  }
}


</style>
