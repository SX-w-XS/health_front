<template>
  <div class="msg-wrap">
    <div class="msg-left">
      <div class="msg-title">近期消息</div>
      <div class="msg-box">
        <div class="msg-container">
          <img src="@/assets/doctor-icon/医生2.png" class="msg-img">
          <div class="msg-content">
            <div class="sender-name">李医生</div>
            <div class="send-content">你好，根据你的描述...</div>
          </div>
        </div>
      </div>
    </div>
    <div class="msg-right">
      <chat-box></chat-box>
    </div>
  </div>
</template>
<script setup>
import chatBox from '@/view/consultation/components/ChatBox.vue'
</script>
<style scoped lang="scss">
.msg-wrap{
  width: 100%;
  height: 100%;
  display: flex;
  .msg-left,.msg-right{
    width: 272px;
    height: 100%;
  }
  .msg-right{
    width: 456px;
    border-left: 1px solid #cccccc;
    ::v-deep .chat-content{
      height: 360px;
      max-height: 360px;
    }
    ::v-deep .send-content{
      margin-top: 4px;
    }
    ::v-deep .emoji-wrapper{
      max-height: 90px;
    }
  }
  .msg-left{
    .msg-title{
      width: 100%;
      height: 46px;
      line-height: 46px;
      text-align: center;
    }
    .msg-box{
      border-top: 1px solid #cccccc;
      width: 100%;
      height: 472px;
      .msg-container{
        width: 100%;
        height: 75px;
        padding: 10px;
        display: flex;
        cursor: pointer;
        .msg-img{
          height: 55px;
          width: 60px;
        }
        .msg-content{
          width: 180px;
          height: 55px;
          margin: 5px 0 0 10px;
          .sender-name,.send-content{
            width: 100%;
            height: 25px;
            line-height: 25px;
            font-size: 16px;
          }
          .send-content{
            color: #646464;
            font-size: 14px;
            overflow: hidden;
          }
        }
      }
      .msg-container:hover{
        font-weight: bold;
        border-top: 1px solid #cccccc;
        border-bottom: 1px solid #cccccc;
      }
    }
  }
}

</style>
