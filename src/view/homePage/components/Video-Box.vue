<template>
  <div class="video-box">
    <p class="fengmian-title">How much do you know about chronic diseases？</p>
    <div class="bofang-box">
      <img src="@/assets/video/bofang.png" class="play-button" @click="playVideo()">
      <p class="bofang-word">播放视频</p>
    </div>

    <div class="video" v-if="videoSwitch">
      <el-icon :size="40" class="close-button" @click="closeVideo()"><Close /></el-icon>
      <video class="player" controls autoplay id="video">
        <source src="@/assets/video/ziroom_breath.mp4">
      </video>
    </div>

  </div>
</template>

<script setup>
import {Close} from "@element-plus/icons-vue";
import {ref} from "vue";
const videoSwitch = ref(false)
const player = document.getElementById('video')
const playVideo = () =>{
  videoSwitch.value = !videoSwitch.value
  // player.load()
  // player.addEventListener('canplaythrough',function (){
  //   player.play()
  // })
}
const closeVideo = () =>{
  videoSwitch.value = !videoSwitch.value
  player.pause()
}
</script>
<style scoped lang="scss">
.video-box{
  position: relative;
  width: 1068px;
  height: 630px;
  display: grid;
  place-items: center;
  background: url("https://picsum.photos/1068/630?3");
  padding: 0;
  .fengmian-title{
    width: 982px;
    line-height: 136px;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
  .bofang-box{
    width: 160px;
    height: 150px;
    margin-top: -200px;
    display: grid;
    place-items: center;
    .bofang-word{
      margin-top: 10px;
      color: white;
      font-size: 19px;
    }
  }

  .video{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    .player{
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    .close-button{
      float: right;
      z-index: 3;
    }
  }

}

</style>
