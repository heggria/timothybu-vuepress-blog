<template>
  <div>
    <ul>
      <li>公招位，单击选择招募前显示tag，双击选中招募tag</li>
      <li>选择招募时间，也可以点击刷新公招按钮，tag依旧会被记录</li>
      <li>显示可以招募的干员</li>
      <li>快速公招和自然公招，自然公招会保留cookie</li>
      <li>选择招募出的干员</li>
      <li>如果词条被划，点击按钮，可以单击被划的词条</li>
      <li>出现该招募时间下的所有干员，选择</li>
      <li>提交按钮</li>
      <li>下方可以显示本id所有的公招记录</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OpenRecruitment",
  data() {
    return {
      data: {
        uid: "",
        place: 1,
        jumpOver: false,
        accelerate: false,
        result: "",
        tag: [
          {
            tid: "",
            select: false,
            crossOut: false,
          },
          {
            tid: "",
            select: false,
            crossOut: false,
          },
          {
            tid: "",
            select: false,
            crossOut: false,
          },
          {
            tid: "",
            select: false,
            crossOut: false,
          },
          {
            tid: "",
            select: false,
            crossOut: false,
          },
        ],
      },
    };
  },
  methods: {},
};
</script>
