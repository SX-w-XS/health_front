<!--饼图组件-->
<template>
  <div class="pie-wrap">
    <div class="pie-tag">入库数据占比</div>
    <div class="pie-box">
      <div id="myCharts" class="pie-img"></div>
      <div class="data-box">
        <div class="pie-data" v-for="(item,index) in pieData">
          <span>{{item.name}}</span>
          <span>{{item.value}}</span>
        </div>
      </div>
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
  let chartDom = document.getElementById('myCharts');
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
.pie-wrap{
  width: 100%;
  height: 100%;
  .pie-tag{
    width: 140px;
    height: 44px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #5E8EBB;
    border-top: none;
    border-radius: 0 0 3px 3px;
    font-weight: bold;
    font-size: 20px;
  }
  .pie-box{
    display: flex;
    width: 100%;
    .pie-img{
      width: 185px;
      height: 144px;
      margin-left: 50px;
    }
    .data-box{
      width: 111px;
      height: 75px;
      .pie-data{
        display: flex;
        justify-content: space-between;
        margin-right: 15px;
        margin-top: 5px;
      }
    }
  }
}
</style>
