<template>
  <div class="chat-wrap">
    <div class="ChatWrap">
      <div class="chat-left">
        <img class="left-img" src="@/assets/doctor-icon/医生2.png">
        <ul class="left-info">
          <li class="info-li" style="color: black">李医生 副主任医师</li>
          <li class="info-li">中国医科大学附属第一医院</li>
          <li class="info-li">心内科</li>
          <li class="info-li">好评率：90%</li>
        </ul>
        <div class="left-major">擅长：冠心病、血脂异常、心绞痛、心肌梗死、心脏神经官能症、糖尿病血管病变、心肌缺血、窦性心动过速、甲状腺功能低、急性焦虑症、老年高血压、心房颤动、早搏、阵发性室上性心动过速、慢性心功能不全、室性早搏、心肌炎、</div>
      </div>
      <div class="chat-right">
<!--        <div class="right-title">李医生</div>-->
<!--        <div class="chat-box"></div>-->
<!--        <div class="send-box"></div>-->
        <chat-box></chat-box>
      </div>
    </div>
  </div>
</template>
<script setup>
import chatBox from './ChatBox.vue'
</script>
<style scoped lang="scss">
.chat-wrap{
  width: 100%;
  display: grid;
  place-items: center;
  .ChatWrap{
    width: 1018px;
    height: 750px;
    display: flex;
    margin-top: 45px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid #cccccc;
    .chat-left,.chat-right{
      cursor: pointer;
      width: 380px;
      height: 100%;
      place-items: center;
      display: grid;
      position: relative;
      .left-img{
        position: absolute;
        width: 130px;
        height: 130px;
        top: 40px;
      }
      .left-info{
        width: 282px;
        height: 200px;
        position: absolute;
        top:200px;
        .info-li{
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 19px;
          color: #999999;
        }
      }
      .left-major{
        width: 330px;
        color: #999999;
        font-size: 17px;
        position: absolute;
        top:450px;
      }
    }
    .chat-right{
      cursor: initial;
      border-left: 1px solid #cccccc;
      height: 100%;
      width: 638px;
    }
  }
}
</style>
