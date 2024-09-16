<template>
  <div class="show-box">
    <div class="header">
      <Header/>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '../src/components/common-parts/Header.vue'
import Footer from '@/components/common-parts/Footer.vue'
</script>

<style scoped lang="scss">
.show-box{
  width: 100%;
  height: 100%;
  //font-family: stlf;
  .header{
    width: 100%;
    height: 70px;
  }
}

</style>
