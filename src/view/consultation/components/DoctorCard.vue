<template>
  <div class="card-wrap">
    <img class="doctor-touxiang" src="@/assets/doctor-icon/医生2.png">
    <div class="doctor-info">
      <span>王医生</span>
      <span>副主任医师</span>
    </div>
    <div class="hospital">四川省人民医院</div>
    <div class="major">心内科</div>
    <div class="comment-percent">
      <span>好评率：</span>
      <span>90%</span>
    </div>
    <div class="expert">
      擅长：高血压、冠心病、心衰，心率失常...
    </div>
    <div class="price">咨询￥188</div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.card-wrap{
  width: 247px;
  height: 304px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 0.1px solid #F2F2F2;
  display: grid;
  place-items: center;
  .doctor-touxiang,.doctor-info,.hospital,.major,.comment-percent,.expert,.price{
    line-height: 25px;
    width: 217px;
    text-align: center;
    color: #797979;
    font-size: 14px;
  }
  .doctor-info{
    color: black;
  }
  .doctor-touxiang{
    width: 65px;
    height: 65px;
  }
  .major,.comment-percent{
    font-size: 12px;
  }
  .expert{
    width: 180px;
    text-align: left;
  }
  .price{
    background: #169BD5;
    color: white;
    width: 81px;
    border-radius: 3px;
  }
}
</style>
