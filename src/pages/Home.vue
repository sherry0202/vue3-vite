<template>
  <div class="home">
    <a-layout>
      <a-layout-header><Header/></a-layout-header>
      <a-layout-content><router-view></router-view></a-layout-content>
      <a-layout-footer><Footer/></a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style lang="less" scoped>
.ant-layout-header{
  background: #fff;
  height: 70px!important;
  width: 100%;
  position: fixed;
  top:0;
  left: 0;
}
.ant-layout-content{
  min-height: calc(100vh - 248px);
  padding-top: 70px;
}
.ant-layout-footer{
  height: 248px!important;
  background: #161e27;
}
</style>