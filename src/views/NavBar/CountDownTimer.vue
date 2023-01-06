<template>
  <div class="countDownTimer" id="">
    <div class="unit">距离{{new Date().getFullYear()+1}}年:</div>
    <div class="countDown_outer">
      <div id="_d" class="time">{{ day }}</div>
      <div class="unit">天</div>
      <div id="_h" class="time">{{ hour }}</div>
      <div class="unit">时</div>
      <div id="_m" class="time">{{ minute }}</div>
      <div class="unit">分</div>
      <div id="_s" class="time">{{ seconds }}</div>
      <div class="unit">秒</div>

      <div id="myProgressBar">
        <div id="myPercent_outer">
          <div id="myPercent">{{ percent }}</div>
        </div>
        <div class="myProgress_outer">
          <div id="myProgress">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "",
  data() {
    return {
      day: "",
      hour: "",
      minute: "",
      seconds: "",
      percent: "",
      start_str: new Date().getFullYear()+"/1/1 00:00:00",
      end_str: new Date().getFullYear()+1+"/1/1 00:00:00",
    };
  },
  mounted() {
    this.countDownTimer();
  },
  methods: {
    countDownTimer() {
      //获取当前时间
      let now = new Date().getTime();
      //获取起始时间
      let start_date = new Date(this.start_str).getTime();
      //获取截止时间
      let end_date = new Date(this.end_str).getTime();
      let pastTime = now - start_date; //过去的时间
      let leftTime = end_date - now; //剩余的时间
      let allTime = end_date - start_date; //一年的时间
      if (leftTime >= 0) {
        this.day = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        this.hour = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        this.minute = Math.floor((leftTime / 1000 / 60) % 60);
        this.seconds = Math.floor((leftTime / 1000) % 60);
      }
      //将0-9的数字前面加上0，例1变为01
      let checkTime = i => {
        return i < 10 ? "0" + i : i;
      };

      this.day = checkTime(this.day);
      this.hour = checkTime(this.hour);
      this.minute = checkTime(this.minute);
      this.seconds = checkTime(this.seconds);

      //将倒计时赋值到进度条中
      let myProgress = document.getElementById("myProgress");
      this.percent =
        Math.floor((pastTime / allTime) * 1000000000) / 10000000 + "%";
      myProgress.style.width = this.percent;
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countDownTimer, 200);
    },
  },
  computed: {},
  components: {},
});
</script>
<style lang="less">
@import "/src/assets/less/countDownTimer.less";
</style>