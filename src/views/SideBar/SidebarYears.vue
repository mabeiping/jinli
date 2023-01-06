<template>
  <div class="sidebaryear">
    <div class="sidebar_title">日期</div>
    <el-radio-group v-model="yearRadio">
      <el-radio v-for="item in yearList" :label="item" :key="item" @click="hrefYear(item)" v-text="item"></el-radio>
    </el-radio-group>
  </div>

</template>

<script setup>
import {ref, reactive} from "vue";

const yearList = reactive(["2017", "2018", "2019", "2020", "2021", "2022"])
const yearRadio = ref("0")
const hrefYear = (year) => {
  location.hash = year + "-01-01"

}
</script>
<style lang="less">
@import "/src/assets/less/sidebarYears";
//@import "@/assets/less/SidebarYear.less";

</style>