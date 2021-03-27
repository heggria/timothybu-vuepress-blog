<template>
  <div>
    <p>现在是：{{ time }}</p>
    <p>距离建站已经过了：{{ hour }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "加载中",
      hour: "加载中",
    };
  },
  mounted() {
    let timer1 = setInterval(() => {
      this.time = new Date().toLocaleString();
    }, 1000);

    let timer2 = setInterval(() => {
      this.hour =
        Math.round(
          (new Date().getTime() - 1616745600000) / 3600000,
          3
        ).toString() + "小时";
    }, 1000);
  },
  methods: {},
};
</script>
