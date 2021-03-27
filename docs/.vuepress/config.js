module.exports = {
  title: "Entrich的小站",
  description: "Entrich的小站",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  plugins: ["autobar"],
  themeConfig: {
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    logo: "favicon.ico",
    sidebarDepth: 2, // e'b将同时提取markdown中h2标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    nav: [
      // 下拉列表
      {
        text: "GitHub",
        link: "https://github.com/timothybu",
      },
    ] /*
    sidebar: {
      "/blog/frontend/": utils.genSidebar(
        "frontend",
        fileHelper.getFileName(rootPath + "/blog/frontend/"),
        false
      ),
      "/blog/vue/": utils.genSidebar(
        "vue",
        fileHelper.getFileName(rootPath + "/blog/vue/"),
        false
      ),
    },*/,
  },
};
