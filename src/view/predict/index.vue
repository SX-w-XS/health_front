<template>
  <div class="predict-wrap">
    <Table/>
  </div>
</template>

<script setup>
import Table from '../predict/components/table.vue'
</script>
<style scoped lang="scss">
.predict-wrap{
  width: 100%;
  height: 730px;
  justify-content: center;
  display: flex;
  background: rgba(220,233,243);
}
</style>
