<template>
  <el-container>
    <el-header>
      <Navbar></Navbar>
    </el-header>
    <el-container>
      <el-aside>
        <Sidebar></Sidebar>
      </el-aside>
      <el-container>
        <el-main>
          <Content></Content>
        </el-main>
        <!-- <el-footer>
          <Footer></Footer>
        </el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>
<script setup>
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";
</script>
<style lang="less">
</style>

