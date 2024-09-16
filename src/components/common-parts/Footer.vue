<template>
  <div class="footer-wrap">
    <div class="footer-left">
      <ul class="left-wrap">
        <li>基于多模态健康数据的个性化慢性病风险预测系统</li>
        <li>Personalized chronic disease risk prediction system based on multimodal health data</li>
        <li>联系我们   邮编：xxxxxxxxxxx  ||  地址：XXXX   ||    工作邮箱：xxxxxx</li>
        <li>更多资讯   关于我们   ||   新闻资讯   ||   服务协议   ||  解决方案</li>
        <li>版权所有     2024-202x  基于多模态健康数据的个性化慢性病风险预测系统</li>
      </ul>
    </div>
    <div class="footer-right">
      <h1 style="margin-top: 15px;font-size: 26px">产品服务</h1>
      <div class="product-wrap">
        <div v-for="(item,index) in product" class="product">
          <img :src="item.img" class="product-img">
          <div class="product-name">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {reactive} from "vue";
const product = reactive([
  {name:'疾病预测',img:'src/assets/footer/客流预测.png'},
  {name:'疾病防治',img:'src/assets/footer/cp-心理.png'},
  {name:'疾病危害',img:'src/assets/footer/危害因素.png'},
  {name:'医生面对面',img:'src/assets/footer/医生&医生介绍.png'},
])
</script>
<style scoped>
.footer-wrap{
  width: 100%;
  height: 180px;
  margin-top: 50px;
  background: #81D3F8;
  display: flex;
  .footer-left{
    width: 800px;
    height: 180px;
    padding-left: 30px;
    padding-top: 15px;
    .left-wrap{
      li{
        margin-top: 10px;
      }
    }
  }
  .footer-right{
    height: 180px;
    margin-left: 40px;
    .product-wrap{
      display: flex;
      height: 100px;
      .product{
        width: 100px;
        height: 100%;
        margin-right: 30px;
        display: grid;
        place-items: center;
        .product-img{
          width: 60px;
          height: 60px;
        }
        .product-name{
          width: 100px;
          height: 30px;
          margin-top: 10px;
          line-height: 30px;
          text-align: center;
        }
      }
    }
  }
}
</style>
