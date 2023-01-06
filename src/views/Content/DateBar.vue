<template>
  <!--  <el-slider v-model="sliderValue"-->
  <!--             :max="sliderMax"-->
  <!--             :format-tooltip="formatTooltip"-->
  <!--             @input="sliderInput"-->
  <!--  ></el-slider>-->
  <div class="titleBar">
    <div class="titleUtil" v-for="item in state.titles" :key="item">{{ item }}</div>
  </div>
  <div>
    <el-scrollbar class="el-scrollbar">
      <DateRow v-for="(item, index) in state.dateMap" :key="item" :index="index" :dateList="item"></DateRow>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import {reactive, onMounted, ref} from "vue";
import {request} from "../../assets/js/axios.js";
import DateRow from "./DateRow.vue";

const sliderValue = ref(0)
let sliderMax = ref(10)
let dateList = []

const state = reactive({
  titles: [],
  dateMap: {},
  allDateMap: {}
})
const getRequest = () => {
  request("/hongxiao.json").then((res) => {
    state.dateMap = res.data.dateMap
    state.titles = res.data.titles
    // getDateMap()
    // sliderMax.value = dateList.length
    // console.log(dateList.length)
  })
}

// function getDateMap() {
//   let start = "2017-01-01".split("-")
//   let end = "2022-12-31".split("-")
//   let startTime = new Date(start[0], start[1] - 1, start[2]).getTime()
//   let endTime = new Date().getTime()
//   for (let i = startTime; i < endTime;) {
//     let date_format = formatTime(i, "-")
//     dateList.push(date_format)
//     state.allDateMap[date_format] = new Array(state.titles.length - 1)
//     i += 24 * 60 * 60 * 1000
//   }
//   for (let k in state.dateMap) {
//     state.allDateMap[k] = state.dateMap[k]
//   }

//   function formatTime(time, spliter) {
//     let date = new Date(time)
//     let year = String(date.getFullYear())
//     let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
//     let day = (date.getDate()) < 10 ? "0" + (date.getDate()) : (date.getDate())
//     return year + spliter + month + spliter + day
//   }
// }

const init = () => {
  getRequest()

}
onMounted(init)
</script>
<style lang="less">
@import "/src/assets/less/dateBar";
</style>