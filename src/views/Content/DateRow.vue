<template>
  <div class="dateUtil">
    <div class="dateStr date1" :id="index" v-text="index">
    </div>
<!--    加入if判断，可以大大减少加载速度-->
    <div class="date1" v-for="item in dateList" :key="item">
      <DateUtilContnet v-if="item" :content="item"></DateUtilContnet>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from "vue";
import DateUtilContnet from "./DateRowUnit.vue";

const props = defineProps({index: String, dateList: Array});

</script>
<style lang="less">
@import "/src/assets/less/dateRow.less";
</style>