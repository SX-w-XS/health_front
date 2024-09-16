<template>
  <div class="weihai-wrap">
    <div class="weihai-back">
      <div class="weihai-card">慢性病的危害主要是造成脑、心、肾等重要脏器的损害，易造成伤残，影响劳动能力和生活质量，且医疗费用极其昂贵，增加了社会和家庭的经济负担。</div>
    </div>
    <p class="weihai-title">生活中的慢性病</p>
    <div class="card-wrap">
      <div v-for="(item,index) in cardArr" class="treat-card">
        <img src="https://picsum.photos/293/280?7" class="treat-img">
        <div class="treat-detail">
          <p style="width: 100%;height: 80px;line-height: 80px;text-align: center;font-size: 25px;font-weight: bold">{{item.name}}</p>
          <p>{{item.detail}}</p>
        </div>
      </div>
    </div>
    <p class="weihai-title">危害知多少</p>
    <div class="hurt-wrap">
      <div v-for="(item,index) in hurtArr" class="hurt-box" :class="index===0?'box-color1':index===1?'box-color2':'box-color3'">
        <p class="hurtType">{{item.hurtType}}</p>
        <p class="hurt-content">{{item.hurt1}}</p>
        <p class="hurt-content">{{item.hurt2}}</p>
        <img src="https://picsum.photos/325/201?8" class="hurt-img">
        <a-button shape="circle" size="large" class="bofang-btn">
          <template #icon>
            <YoutubeOutlined style="color: #999999"/>
          </template>
        </a-button>
      </div>
    </div>
    <p class="weihai-title">综合消息</p>
    <div class="info-wrap">
      <div class="info-left">
        <img src="@/assets/back/gonggao.png" style="float: right;height: 60px">
        <ul>
          <li>国家卫健委：我国慢性病防治形势复杂，呈年轻化趋势</li>
          <li>国家卫健委：我国慢性病防治形势复杂，呈年轻化趋势</li>
          <li>国家卫健委：我国慢性病防治形势复杂，呈年轻化趋势</li>
          <li>国家卫健委：我国慢性病防治形势复杂，呈年轻化趋势</li>

        </ul>
      </div>
      <div class="info-right">
        <p class="info-right-p">更多功能</p>
<!--        <img src="@/assets/back/更多功能.png">-->
        <div class="zice-wrap">
          <div class="zice-left">
            <p class="zice-title">健康自测</p>
            <p class="zice-detail">此功能将为您提供一个简单的测试机会，只需要输入关键信息，就可以得到一份初步诊断结果。</p>
          </div>
          <div class="zice-right">
            <img class="zice-img" src="https://picsum.photos/126/115?8">
            <div class="zice-button">点击查看更多</div>
          </div>
        </div>
        <div class="zice-wrap">
          <div class="zice-left">
            <p class="zice-title">医生面对面</p>
            <p class="zice-detail">此功能将为您提供线上联系医生的机会，有任何问题那就点击了解一下吧。</p>
          </div>
          <div class="zice-right">
            <img class="zice-img" src="https://picsum.photos/126/115?8">
            <div class="zice-button">点击查看更多</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {reactive} from "vue";
import {YoutubeOutlined} from "@ant-design/icons-vue";
const cardArr = reactive([
  {name:'脂肪肝',detail:'脂肪肝（fatty liver）是一种肝细胞脂肪过度贮积和脂肪变性为特征的疾病。嗜酒、肥胖等众多因素可导致该病的发生。',img:''},
  {name:'糖尿病',detail:'糖尿病是由遗传和环境因素相互作用而引起的常见病，临床以高血糖为主要标志，常见症状有多饮、多尿、多食以及消瘦等。',img:''},
  {name:'脂肪肝',detail:'由于脂质代谢不正常，血液中的脂质沉着在原本光滑的动脉内膜上，在动脉内膜一些类似粥样的脂类物质堆积而成白色斑块，称为动脉粥样硬化病变。\n' +
        '折叠',img:''},
  {name:'高血压',detail:'高血压是指血液在血管中流动时对血管壁造成的压力值高于正常值，其是最常见的心血管疾病之一，也是导致脑卒中、冠心病、心力衰竭等疾病的重要危险因素。',img:''},
])
const hurtArr = reactive([
  {hurtType:'身体伤害',hurt1:'慢性肾病可能会导致患者出现水肿、蛋白尿、血尿等症状，还有可能会导致贫血。',hurt2:'慢性肺病可能会导致患者出现咳嗽、咳痰、胸闷气短等症状，还有可能会导致咯血，甚至会引发呼吸衰竭。',img:''},
  {hurtType:'心理伤害',hurt1:'慢性肾病可能会导致患者出现水肿、蛋白尿、血尿等症状，还有可能会导致贫血。',hurt2:'慢性肺病可能会导致患者出现咳嗽、咳痰、胸闷气短等症状，还有可能会导致咯血，甚至会引发呼吸衰竭。',img:''},
  {hurtType:'增加经济负担',hurt1:'慢性肾病可能会导致患者出现水肿、蛋白尿、血尿等症状，还有可能会导致贫血。',hurt2:'慢性肺病可能会导致患者出现咳嗽、咳痰、胸闷气短等症状，还有可能会导致咯血，甚至会引发呼吸衰竭。',img:''},
])
</script>
<style scoped lang="scss">
@keyframes juhe {
  from{
    align-content: center;
    justify-content: center;
  }
  to{
    align-content: space-between;
    justify-content: space-between;
  }
}
.weihai-wrap{
  width: 100%;
  display: grid;
  place-items: center;
  .weihai-back{
    width: 1241px;
    height: 531px;
    background: url("https://picsum.photos/1241/531?9");
    .weihai-card{
      width: 400px;
      height: 170px;
      box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
      border-radius: 5px;
      background: white;
      margin: 280px 500px 40px 30px;
      padding: 30px;
      font-size: 22px;
    }
  }
  .weihai-title{
    width: 310px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-top: 80px;
    margin-bottom: 40px;
    text-shadow: 3px 3px rgba(0,0,0,0.2);
  }
  .card-wrap{
    width: 1200px;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    //animation: juhe 5s infinite linear;
    .treat-card{
      width: 570px;
      height: 280px;
      display: flex;
      //margin-right: 30px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      color: #cccccc;
      .treat-img{
        width: 293px;
        height: 280px;
        opacity: 0.8;
      }
      .treat-detail{
        width: 260px;
        height: 280px;
        margin-left: 7px;
        font-size: 20px;
        //padding-top: 120px;
      }
    }
    .treat-card:hover{
      cursor: pointer;
      color: black;
      .treat-img{
        opacity: 1;
      }
    }
  }
  .card-wrap:hover{

  }
  .hurt-wrap{
    width: 1130px;
    height: 778px;
    display: flex;
    justify-content: space-between;
    position: relative;
    .hurt-box{
      width: 365px;
      height: 778px;
      display: grid;
      place-items: center;
      border-radius: 5px;
      box-shadow: 3px 3px 2px rgba(0,0,0,0.1);
      .hurtType{
        width: 310px;
        height: 37px;
        line-height: 37px;
        text-align: center;
        font-size: 23px;
        font-weight: bold;
      }
      .hurt-content{
        width: 325px;
        height: 171px;
        line-height: 35px;
        margin-top: 20px;
        padding: 0 35px 0 35px;
        background: rgba(255,255,255,0.4);
        border-radius: 4px;
        font-size: 19px;
        display: flex;
        align-items: center;
        justify-content: center;

      }
      .hurt-img{
        height: 201px;
        width: 325px;
      }
      .bofang-btn{
        position: absolute;
        top:650px;
        opacity: 0.7;
      }
    }
    .box-color1{
      background-image: linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%);;
    }
    .box-color2{
      background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
    }
    .box-color3{
      background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);
    }
  }

  .info-wrap{
    width: 1000px;
    height: 448px;
    display: flex;
    //border: 2px solid #cccccc;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    .info-left,.info-right{
      width: 600px;
      height: 448px;
      ul{
        margin-top: 100px;
        margin-left: 60px;
        li{
          margin-bottom: 70px;
          font-size: 20px;
        }
      }
    }
    .info-right{
      width: 400px;
      border-left: 1px solid #cccccc;
      .info-right-p{
        width: 400px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 22px;
        border-bottom: 1px solid #cccccc;
      }
      .zice-wrap{
        width: 400px;
        height: 200px;
        display: flex;
        padding: 20px 10px 0 10px;
        border-top: 1px solid #cccccc;
        justify-content: space-between;
        .zice-left,.zice-right{
          width: 240px;
          height: 234px;
          text-align: center;
          .zice-title{
            width: 220px;
            line-height: 38px;
            font-size: 20px;
          }
          .zice-detail{
            height: 170px;
            width: 220px;
            font-size: 17px;
            margin-top: 10px;
          }
        }
        .zice-right{
          width: 180px;
          .zice-img{
            width: 126px;
            height: 115px;
          }
          .zice-button{
            width: 120px;
            height: 35px;
            background: #169BD5;
            color: white;
            line-height: 35px;
            margin: 7px 0 0 18px;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>
