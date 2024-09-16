<!--预测结果组件-->
<template>
  <div class="result-wrap">
    <div class="left-wrap">
      <p style="font-size: 28px;font-weight: bold;font-style: italic;padding-top: 10px">亲爱的XXX：</p>
      <p>针对您对于糖尿病的数据分析，发现您的患病风险为...</p>
      <p>针对您对于糖尿病的数据分析，发现您的患病风险为...</p>
      <p>针对您对于糖尿病的数据分析，发现您的患病风险为...</p>
      <p>针对您对于糖尿病的数据分析，发现您的患病风险为...</p>
      <p style="width: 180px;height: 40px;background: #81D3F8;display: flex;text-align: center;justify-content: center;align-items: center;font-size: 22px;margin-top: 30px;border-radius: 6px;color: #0297D7;text-decoration: underline">查看预测详情</p>
    </div>
    <div class="right-wrap">
      <div class="result-title">初步分析您患xxx病的风险为:</div>
      <div style="width: 160px;height: 160px;margin-left: 112px" id="result-pie"></div>
    </div>
  </div>
</template>
<script setup>
import * as echarts from 'echarts'
import {reactive,ref,onMounted} from "vue";
const pieData=reactive([
  {value:16,name:'糖尿病'},
  {value:41,name:'脂肪肝'},
  {value:29,name:'高血压'},
])
onMounted(() => {
  let chartDom = document.getElementById('result-pie');
  let myChart = echarts.init(chartDom);
  let option;
  option = {
    tooltip: {
      trigger: 'item'
    },
    // legend: {
    //   top: '5%',
    //   left: 'center'
    // },
    series: [
      {
        type: 'pie',
        radius: ['60%', '90%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: pieData
      }
    ]
  };
  option && myChart.setOption(option)
})
</script>
<style scoped lang="scss">
.result-wrap{
  width: 95%;
  height: 90%;
  //background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-wrap{
    width: 525px;
    height: 100%;
  }
  .right-wrap{
    width: 392px;
    height: 262px;
    .result-title{
      width: 100%;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #646464;
    }
  }
}
</style>
