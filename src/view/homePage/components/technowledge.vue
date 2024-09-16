<template>
  <div class="tech-wrap">
    <div class="tech-left">
      <ul>
        <li style="height: 65px;font-size: 28px;line-height: 65px;font-weight: bolder">Featured medical technology</li>
        <li style="height: 55px;font-size: 20px;line-height: 55px">特色医疗技术</li>
        <li class="tech-link"><el-icon><WarningFilled /></el-icon>大数据时代下慢性病防控新模式的研究进展</li>
        <li class="tech-time">2021/1/3</li>
        <li class="tech-link"><el-icon><WarningFilled /></el-icon>2023年慢性病防控领域发展态势</li>
        <li class="tech-time">2021/1/3</li>
        <li class="tech-link"><el-icon><WarningFilled /></el-icon>从CCM到PCMH：探索慢病管理的国际趋势与实践</li>
        <li class="tech-time">2021/1/3</li>

      </ul>
    </div>
    <div class="tech-right"></div>
  </div>
</template>

<script setup>

import {WarningFilled} from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.tech-wrap{
  //padding: 20px;
  margin-top: 20px;
  display: flex;
  //border: 2px solid;
  //border-image: linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%) 1;
  .tech-right,.tech-left{
    padding:0 40px 0 40px;
    width: 609px;
    height: 550px;
    background-image: linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%);
  }
  .tech-right{
    padding: 0;
    background: url("https://picsum.photos/609/550?5");
  }
}
ul{
  list-style-type: none;
}
li{
  width: 490px;
  height: 53px;
  line-height: 53px;
  text-align: left;
  font-size: 18px;
  cursor: pointer;
}
.tech-link:hover,.tech-time:hover{
  text-decoration: underline;

}
//.tech-link{
//  cursor: pointer;
//}
.tech-time{
  height: 35px;
  line-height: 35px;
  text-align: right;
}
</style>
