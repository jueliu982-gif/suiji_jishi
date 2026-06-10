<script setup lang="ts">
  import DataList from '@/components/DataList.vue'
  import Gacha from '@/components/Gacha.vue'
  import test from '@/components/test.vue'



</script>

<template>
  <div class="home-btn-box">
    <DataList />
    <Gacha />
    <test />
    <!-- <div class="container">
      <div>
      </div>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.home-btn-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
$color: red;
.el {
  background: #ccc;
}
@mixin border($c) {
  border: 5px solid $c;
}
.container {
  div {
    @extend .el;
    width: 100px;
    height: 100px;
    // border: 1px solid $color;
    @include border($color)
   
  }
}
</style>
