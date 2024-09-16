<template>
  <div>
<!--    整体-重点产品转化-->
    <div class="products-transform-wrap">
      <!--        装饰点-->
      <div class="decorative-point">
        <div class="point"></div>
        <div class="point"></div>
      </div>
      <div class="title">
        <div class="title-box">
          <span class="title-font" data-text="整体-重点产品转化"></span>
        </div>
      </div>
      <!--基础产品和新增产品-->
      <div class="products-kind-box">
        <div class="line"></div>
        <div class="base-products">
          <span class="base-products-name" data-text="基础产品"></span>
        </div>
        <div class="line line-two"></div>
        <div class="line line-three"></div>
        <div class="new-addition">
          <div class="new-box"><span class="word" data-text="新增"></span></div>
          <div class="button-left">
            <div class="back-img"></div>
          </div>
          <div class="button-right">
            <div class="right-img"></div>
          </div>
        </div>
        <div class="line line-two line-three"></div>
      </div>
      <div class="content">
        <!--左侧饼图和条状数据-->
        <div class="pie-box">
<!--          饼图区域-->
          <div class="pie-img">
            <div class="pie">
              <div id="myCharts" style="width: 211px;height: 211px;border-radius: 50%;"></div>
            </div>
          </div>
<!--          条形数据-->
          <div class="data-box">
            <div v-for="(item,index) in productData.arr" :key="index">
              <div v-if="index % 2 ===0" class="data" :style="{'--backgroundColor':item.backgroundColor,'--pointColor':item.borderColor}" @click="productData.index=index;firstData=item" tabindex="1">
                <div class="data-point"></div>
                <div class="data-name"><span>{{item.name}}</span></div>
                <div class="data-number"><span>{{item.number}}</span></div>
              </div>
              <div v-if="index % 2 ===1" class="data data-right" :style="{'--backgroundColor':item.backgroundColor,'--pointColor':item.borderColor}" @click="productData.index=index;firstData=item" tabindex="1">
                <div class="data-point"></div>
                <div class="data-name"><span>{{item.name}}</span></div>
                <div class="data-number"><span>{{item.number}}</span></div>
              </div>
            </div>
          </div>
        </div>
<!--        销量和销售占比-->
        <div class="sales-box">
          <div class="sales-volume">
            <div class="volume-title">
              <span class="title-content">销量</span>
            </div>
            <div class="volume">
              <span class="sales-number" :data-text="firstData.number"></span>
            </div>
            <div class="circle-ratio">
              <div class="ratio-name">环比</div>
              <div class="ratio-number">{{firstData.number}}</div>
              <div class="icon-img"></div>
            </div>
            <div class="circle-ratio">
              <div class="ratio-name">同比</div>
              <div class="ratio-number">{{firstData.number}}</div>
              <div class="down"></div>
            </div>
          </div>
          <div class="sales-volume sales-percentage">
            <div class="volume-title">
              <span class="title-content">销量占比</span>
            </div>
            <div class="volume">
              <span class="sales-number" :data-text="firstData.number"></span>
            </div>
            <div class="circle-ratio">
              <div class="ratio-name">环比</div>
              <div class="ratio-number">{{firstData.number}}</div>
              <div class="icon-img"></div>
            </div>
            <div class="circle-ratio">
              <div class="ratio-name">同比</div>
              <div class="ratio-number">{{firstData.number}}</div>
              <div class="down"></div>
            </div>
          </div>
        </div>
<!--        柱状图-->
        <div class="histogram-box">
          <div class="sales-title">
            <div style="height: 20px;width: 20px;margin-left: 804px;background: linear-gradient( 180deg, #66FEEF 0%, #098BBD 100%);"></div>
            <div style="height: 30px;width: 40px;margin-left: 5px;color: #B2C9EE;line-height: 30px;text-align: center;text-transform: none;display: flex;font-size: 19px">销量</div>
          </div>
          <div id="myCharts2" class="sales-img"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, reactive, getCurrentInstance,onMounted,watch,onBeforeMount,shallowRef} from "vue";
const productData=reactive({
  arr:[{name:'新增',number:'26%',borderColor:'#FE4343',backgroundColor:'linear-gradient( 90deg, rgba(249,55,55,0.2) 50%, rgba(152,40,40,0.2) 100%)'},
    {name:'升档',number:'26%',borderColor:'#FE4343',backgroundColor:'linear-gradient( 90deg, rgba(249,55,55,0.2) 50%, rgba(152,40,40,0.2) 100%)'},
    {name:'宽带',number:'41%',borderColor:'#00C24E',backgroundColor:'linear-gradient( 90deg, rgba(67,254,142,0.3) 0%, rgba(0,194,78,0.1) 100%)'},
    {name:'套外CN',number:'41%',borderColor:'#00C24E',backgroundColor:'linear-gradient( 90deg, rgba(67,254,142,0.3) 0%, rgba(0,194,78,0.1) 100%)'},
    {name:'终端',number:'26%',borderColor:'#40ECFF',backgroundColor:'linear-gradient( 90deg, rgba(7,131,222,0.3) 0%, rgba(4,71,120,0.1) 100%)'},
    {name:'套外H',number:'26%',borderColor:'#40ECFF',backgroundColor:'linear-gradient( 90deg, rgba(7,131,222,0.3) 0%, rgba(4,71,120,0.1) 100%)'},],
  index:0,
  color:'red',
})
const firstData=ref(productData.arr[2])

import * as echarts from 'echarts'

const pieData=reactive([
  {value:26,name:'新增'},
  {value:41,name:'宽带'},
  {value:26,name:'总量'},
])
let sum=ref(93)

const poleData=reactive([
  10,20,30,40,50,60,71,80,90,100,110,120
])
onMounted(() => {
  var chartDom = document.getElementById('myCharts');
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    title:{
      text:'总数',
      subtext:sum.value,
      left:'center',
      top:'40%',
      itemGap:2,
      textStyle:{
        fontSize:20,
        color:'#fff'
      },
      subtextStyle:{
        fontSize: 20,
        color: 'linear-gradient(90deg, #40ECFF 0%, #40ECFF 100%)'
      }
    },
    tooltip:{
      show:true,
      transitionDuration:0,
    },
    // legend: {
    //   top: 'center',
    //   left: 'center'
    // },

    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['75%', '94%'],
        avoidLabelOverlap: true,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 30,

          }
        },
        labelLine: {
          show: false
        },
        data: pieData
      }
    ]
  };
  option && myChart.setOption(option);
  myChart.on('mouseover',{componentType:'series',seriesType:'pie'},()=>{
    myChart.setOption({
      title:{
        show:false
      }
    })
  });
  myChart.on('mouseout',{componentType:'series',seriesType:'pie'},()=>{
    myChart.setOption({
      title:{
        show:true
      }
    })
  });


  //柱状图
  var chartDom2 = document.getElementById('myCharts2');
  var myCharts2 = echarts.init(chartDom2);
  var option2;
  option2 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // type: 'shadow'
      },
      className:'tooltip-box'
    },
    grid: {
      top: '3%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: {
      axisTick: {  //控制刻度线显示
        show: false
      },
      axisLabel: {  //控制文字显示
        show: false,
      },
      splitNumber:3
    },
    series: [
      {
        name: '销量:',
        type: 'bar',
        barWidth: '60%',
        data: poleData
      }
    ]
  };
  option2&&myCharts2.setOption(option2)
});

</script>

<style scoped lang="scss">
.products-transform-wrap{
  width: 2865px;
  height: 498px;
  background: rgba(5,43,90,0.1);
  box-shadow: inset 0 0 24px 0 rgba(36,135,235,0.3);
  border-radius: 2px 2px 2px 2px;
  border: 1px solid rgba(87,177,255,0.3);
  background: url("../assets/images/bj.png");
  .decorative-point{
    width: 2860px;
    height: 3px;
    display: flex;
    justify-content: space-between;
    .point{
      width: 18px;
      height: 3px;
      background: #06EBFC;
      box-shadow: 0 0 4px 0 rgba(6,235,252,0.9);
      border-radius: 0;
    }
  }
  .title{
    width: 495px;
    height: 69px;
    margin-top: 11px;
    border-radius: 0;
    background: url("../assets/images/businessSalesVolumeImg/marketing_title.png");
    .title-box{
      width: 440px;
      height: 60px;
      margin: 0 58px 9px 76px;
      .title-font{
        width: 430px;
        height: 62px;
        font-family: YouSheBiaoTiHei, YouSheBiaoTiHei;
        font-weight: 800;
        font-size: 48px;
        line-height: 56px;
        text-align: left;
        font-style: oblique;
        transform: skewX(83.37240496259273deg);
        text-transform: none;

      }
      .title-font::before{
        content: attr(data-text);
        background: linear-gradient(83.37240496259273deg, #FFFFFF 0%, #8AE1FF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .products-kind-box{
    height: 47px;
    margin-top: 3px;
    margin-left: 30px;
    border-radius: 0;
    display: flex;
    align-items: center;
    .line{
      width: 441px;
      height: 1px;
      background: linear-gradient( 270deg, #5E8EBB 0%, rgba(94,142,187,0) 100%);
    }
    .line-two{
      background: linear-gradient( 90deg, #5E8EBB 0%, rgba(94,142,187,0) 100%);
    }
    .line-three{
      width: 781px;
    }

    .new-addition{
      width: 193px;
      height: 47px;
      display: flex;
      .new-box{
        width: 74px;
        height: 38px;
        margin-top: -5px;
        .word{
          line-height: 38px;
          font-family: Source Han Sans CN, Source Han Sans CN;
          font-weight: bold;
          font-size: 32px;
          text-align: left;
          font-style: oblique;
          transform: skewX(275.53041552833736deg);
          text-transform: none;
        }
        .word::before{
          content: attr(data-text);
          background: linear-gradient(275.53041552833736deg, #FFFFFF 0%, #8AE1FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .button-left{
        margin-left: 5px;
        width: 60px;
        height: 42px;
        background: rgba(8,35,91,0.2);
        box-shadow: inset 0 0 10px 0 rgba(0,83,255,0.5);
        border: 1px solid;
        border-radius: 4px 0px 0px 4px;
        border-image: linear-gradient(171deg, rgba(31, 137, 244, 1), rgba(21, 96, 179, 1), rgba(1, 136, 253, 1)) 1 1;
        //clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        align-items: center;
        display: flex;
        justify-content: center;
        .back-img{
          width: 23px;
          height: 23px;
          background: url("../assets/images/strongfd-board/detailIcon.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
      .button-right{
        width: 60px;
        height: 42px;
        background: rgba(8,35,91,0.2);
        box-shadow: inset 0px 0px 10px 0px rgba(0,83,255,0.5);
        border-radius: 0px 4px 4px 0px;
        border: 1px solid;
        border-image: linear-gradient(171deg, rgba(31, 137, 244, 1), rgba(21, 96, 179, 1), rgba(1, 136, 253, 1)) 1 1;
        align-items: center;
        display: flex;
        justify-content: center;
        .right-img{
          width: 23px;
          height: 23px;
          background: url("../assets/images/strongfd-board/rankingIcon.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .base-products{
      width: 135px;
      height: 47px;
      .base-products-name{
        width: 128px;
        height: 48px;
        font-family: Source Han Sans CN, Source Han Sans CN;
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;
        text-align: left;
        font-style: oblique;
        transform: skewX(275.53041552833736deg);
        text-transform: none;
      }
      .base-products-name::before{
        content: attr(data-text);
        background: linear-gradient(275.53041552833736deg, #FFFFFF 0%, #8AE1FF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .content{
    position: relative;
    height: 255px;
    width: 2627px;
    margin-top: 47px;
    margin-left: 88px;
    display: flex;
    align-items: center;
    .pie-box{
      width: 901px;
      height: 255px;
      display: flex;
      .pie-img{
        width: 255px;
        height: 255px;
        border-radius: 50%;  /* 修改为 50% 实现圆形 */
        //border: 2px solid;
        padding: 2px;
        background: linear-gradient(180deg, rgba(5, 66, 104, 1), rgba(5, 66, 104, 0));
        //border-image: linear-gradient(180deg, rgba(5, 66, 104, 1), rgba(5, 66, 104, 0)) 1;
        background-origin: border-box;
      }
      .pie{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: linear-gradient( 180deg, #063156 0%, rgba(6,49,86,0) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .data-box{
        width: 586px;
        height: 178px;
        margin: 39px 0 38px 60px;
        .data{
          width: 267px;
          height: 46px;
          //background: linear-gradient( 90deg, rgba(249,55,55,0.2) 50%, rgba(152,40,40,0.2) 100%);
          background: var(--backgroundColor);
          border-radius: 1000px 1000px 1000px 1000px;
          //border: 1px solid #FE4343;

          border: 1px solid;
          //border-color: var(--borderColor);
          float: left;
          display: flex;
          margin-bottom: 20px;
          align-items: center;
          .data-point{
            width: 16px;
            height: 16px;
            margin-left: 20px;
            border-radius: 8px;
            background: var(--pointColor);
          }
          .data-name{
            width: 142px;
            height: 30px;
            margin-left: 10px;
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 400;
            font-size: 20px;
            color: #B2C9EE;
            line-height: 23px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            display: flex;
            align-items: center;
          }
          .data-number{
            width: 60px;
            height: 26px;
            margin-left: 9px;
            font-family: DINfunProPlain, DINfunProPlain;
            font-weight: normal;
            font-size: 24px;
            color: #FFFFFF;
            line-height: 28px;
            text-align: right;
            font-style: normal;
            text-transform: none;

          }
        }
        .data:focus{
          border-color: v-bind('productData.arr[productData.index].borderColor');
        }
        //.data:active{
        //  border-color: var(--borderColor);
        //}
        .data-right{
          margin-left: 26px;
        }
      }
    }
    .sales-box{
      width: 430px;
      height: 197px;
      margin-left: 229px;
      justify-content: space-between;
      display: flex;
      .sales-volume{
        width: 180px;
        height: 197px;
        .volume-title{
          width: 180px;
          height: 40px;
          background: linear-gradient( 90deg, rgba(11,40,97,1) 0%, rgba(11,40,97,0) 100%);
          border-radius: 2px 0px 0px 2px;
          //display: flex;
          //align-items: center;
          .title-content{
            width: 108px;
            height: 36px;
            margin-top: 2px;
            margin-left: 20px;
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 400;
            font-size: 24px;
            color: #B2C9EE;
            line-height: 28px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            align-items: center;
            display: flex;
          }
        }
        .volume{
          margin-top: 10px;
          margin-left: 20px;
          width: 156px;
          height: 77px;
          background: url("../assets/images/sales-monitor/修饰条.png") no-repeat;
          background-position-x: 20px;
          background-position-y: 70px;
          .sales-number{
            font-family: DINfunProPlain, DINfunProPlain;
            font-weight: normal;
            font-size: 60px;
            line-height: 70px;
            text-align: left;
            font-style: normal;
            text-transform: none;

          }
          .sales-number::before{
            content: attr(data-text);
            background: linear-gradient(90deg, #FFFFFF 0%, #84DCFF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0px 0px 10px rgba(20,188,255,0.3);
          }
        }
        .circle-ratio{
          margin-top: 10px;
          margin-left: 20px;
          width: 180px;
          height: 30px;
          display: flex;
          .ratio-name{
            width: 50px;
            height: 30px;
            font-family: Source Han Sans CN, Source Han Sans CN;
            font-weight: 400;
            font-size: 24px;
            color: #B2C9EE;
            line-height: 23px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            display: flex;
            align-items: center;
          }
          .ratio-number{
            margin-left: 6px;
            width: 64px;
            height: 26px;
            font-family: DINfunProPlain, DINfunProPlain;
            font-weight: normal;
            font-size: 24px;
            color: #FFFFFF;
            line-height: 28px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          .icon-img{
            width: 24px;
            height: 24px;
            margin-left: 26px;
            background-position-x: 0px;
            background-position-y: 0px;
            background: url("../assets/images/strongfd-board/upArrow.png") no-repeat;
            background-size: 100% 100%;
          }
          .down{
            width: 24px;
            height: 24px;
            margin-left: 26px;
            background-position-x: 0px;
            background-position-y: 0px;
            background: url("../assets/images/strongfd-board/downArrow.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        .sample-ratio{
          margin-top: 0;
        }
      }
      .sales-percentage{
        width: 197px;
      }
    }
    .histogram-box{
      width: 874px;
      height: 224px;
      margin-left: 176px;
      margin-top: 10px;
      .sales-title{
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
      }
      .sales-img{
        width: 100%;
        height: 184px;
        margin-top: 10px;
      }
    }
  }
}
//:deep .tooltip-box{
//    width: 158px;
//    height: 100px;
//    background: rgba(0,25,56,0.8);
//    box-shadow: inset 0px 0px 24px 0px rgba(36,135,235,0.3), 0px 0px 20px 0px rgba(0,0,0,0.5);
//    border-radius: 4px 4px 4px 4px;
//    border: 1px solid rgba(87,177,255,0.3);
//}
</style>

