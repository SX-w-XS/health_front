<template>
  <div class="Chat-wrap">
    <div class="Chat-title">李医生</div>
    <div class="chat-content" id="chatBox">
      <div v-for="(item,index) in chatArr" :key="index">
        <div v-if="item.send === 'me' " class="message-send">
          <div class="SendMsg-right">{{item.content}}</div>
          <div class="my-img">
            <img :src="item.img">
          </div>
        </div>
        <div v-if="item.send !== 'me' " class="message-res">
          <div class="other-img">
            <img :src="item.img">
          </div>
          <div class="SendMsg-left">{{item.content}}</div>
        </div>
      </div>
    </div>
    <div class="send-box">
      <div class="send-title">
<!--        <img src="@/assets/chat/发送图片.png" class="send-type">-->
<!--        <img src="@/assets/chat/表情.png" class="send-type">-->
        <PictureOutlined  style="font-size: 30px;margin: 5px 10px 0 10px"/>
        <SmileOutlined @click="inputButton='feeling'" style="font-size: 28px;margin: 5px 10px 0 0"/>
        <span style="margin: 0 0 0 450px;font-size: 14px;color: #999999">{{sendMsg.length}}/244</span>
      </div>
      <div class="send-content">
        <el-input v-if="inputButton === 'word'" @keydown.enter="SendMsg" type="textarea" resize="none" placeholder="请输入内容，按回车发送" :rows="4" v-model="sendMsg" maxlength="244" style="font-size: 13px"></el-input >
        <div v-if="inputButton === 'feeling'" class="emoji-wrapper">
          <div v-for="(item,index) in emojiArr" :key="index" class="emoji-item" @click="sendEmoji(item)">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {nextTick, reactive, ref} from "vue";
import { PictureOutlined,SmileOutlined } from '@ant-design/icons-vue'
import {ElMessage} from "element-plus";
const chatArr = reactive([
  {send:'me',img:'src/assets/doctor-icon/医生2.png',content:'医生您好'},
  {send:'',img:'src/assets/doctor-icon/医生2.png',content:'患者你好'},
  {send:'me',img:'src/assets/doctor-icon/医生2.png',content:'我身体不舒服'},
  {send:'',img:'src/assets/doctor-icon/医生2.png',content:'请详细讲一下您的症状'},
  {send:'me',img:'src/assets/doctor-icon/医生2.png',content:'好的'},
])
const sendMsg = ref('')
const SendMsg = (event) =>{
  event.preventDefault()
  if(sendMsg.value === ''){
    ElMessage.error('不能发送空内容！')
  }else {
    //发送内容非空，但还需做相关判断，例如是否有违禁词
    //判断完成之后需更新数据，向后端发送请求
    //将发送内容置空
    chatArr.push({send:'me',img:'src/assets/doctor-icon/医生2.png',content:sendMsg.value})
    scrollToBottm()
    sendMsg.value=''
  }
}

//发送区域内容默认展示输入框，点击其他按钮发生相应变化
const inputButton = ref('word')
//表情代码列表
const emojiArr = reactive([
  '😀', '🤣', '😂', '😄', '😅', '😆','😇','😉','😊','😍','😏','😐','😓','😔','😖','😘','😜','😤','😨','😱',
  '😳','😴','😷','🙃','🙈','🙉','🙊','🤓','🤗','🤡','🤣','🤪','🤭','🤮','👋', '👍', '👌'
])
//发送表情
const sendEmoji = (item) =>{
  inputButton.value = 'input'
  chatArr.push({send:'me',img:'src/assets/doctor-icon/医生2.png',content:item})
  scrollToBottm()
}

const scrollToBottm = () =>{
  const chatBox = document.getElementById('chatBox')
  nextTick(()=>{
    chatBox.scrollTop = chatBox.scrollHeight
  })
}
//固定滚动条位于最底部
// const scroll = ref(null)
// const scrollPosition =ref(0)
// const handleScroll = () =>{
//   scrollPosition.value = scroll.value.scrollTop;
// }
</script>
<style scoped lang="scss">
.Chat-wrap{
  width: 100%;
  height: 100%;
  background: white;
  .Chat-title{
    width: 100%;
    height: 8%;
    background: #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
  }
  .chat-content{
    width: 100%;
    height: 70%;
    border-bottom: 1px solid #cccccc;
    background: white;
    max-height: 523.7px;
    overflow: auto;
    color: white;
    .message-send,.message-res{
      width: 100%;
      display: flex;
      //min-height: 80px;
      //max-height: 300px;
      .my-img,.other-img{
        width: 80px;
        height: 70px;
      }
    }
    .message-send{
      justify-content: right;
      .my-img{
        margin-top: 10px;
      }
      .SendMsg-right{
        background: #5E8EBB;
        margin:35px 15px 0 0;
        min-height: 30px;
        line-height: 20px;
        max-width: 420px;
        max-height: 192px;
        font-size: 15px;
        padding: 10px;
        border-radius: 4px;
        overflow: hidden;
      }
    }

    .message-res{
      justify-content: left;
      .other-img{
        margin-top: 10px;
        margin-left: 10px;
      }
      .SendMsg-left{
        background: #5E8EBB;
        margin:35px 0 0 5px;
        min-height: 30px;
        line-height: 20px;
        max-width: 420px;
        max-height: 192px;
        font-size: 15px;
        padding: 10px;
        border-radius: 4px;
        overflow: hidden;
      }
    }
  }
  .chat-content::-webkit-scrollbar{
    display: none;
  }
  .send-box{
    width: 100%;
    height: 22%;
    background: white;
    .send-title{
      width: 100%;
      height: 30%;
    }
    .emoji-wrapper{
      width: 100%;
      height: 70%;
      display: flex;
      flex-wrap: wrap;
      padding: 5px 10px 0 10px;
      max-height: 115.5px;
      overflow: scroll;
      .emoji-item{
        font-size: 25px;
        margin: 3px 5px 0 0;
        cursor: pointer;
      }
      .emoji-item:hover{
        background: #cccccc;
      }
    }
    .emoji-wrapper::-webkit-scrollbar{
      display: none;
    }
  }
}
::v-deep .el-input__inner{
  height: 80px;
}

</style>
