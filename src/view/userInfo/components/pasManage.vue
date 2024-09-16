<template>
  <div class="pass-container">
    <div class="pass-wrap">
      <div class="pass-row">
        <div class="pass-liable">当前密码：</div><input class="pass-input">
      </div>
      <div class="pass-row">
        <div class="pass-liable">新的密码：</div><input class="pass-input">
      </div>
      <div class="pass-row">
        <div class="pass-liable">确认密码：</div><input class="pass-input">
      </div>
      <div class="change-button button-position">修改</div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
@import "../../../style.css";
.pass-container{
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  //background: #0eb0c9;
  .pass-wrap{
    width: 549px;
    height: 362px;
    background: white;
    box-shadow: 0 3px 12px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    .pass-row{
      width: 480px;
      height: 51px;
      margin-top: 35px;
      display: flex;
      margin-left: 35px;
      .pass-liable{
        width: 140px;
        height: 41px;
        line-height: 41px;
        font-size: 22px;
      }
      .pass-input{
        width: 340px;
        height: 41px;
        outline: none;
        border-radius: 4px;

      }
    }
    .button-position{
      margin-top: 40px;
      margin-left: 220px;
    }
  }
}
</style>
