module.exports = {
  title: "Entrich的小站",
  description: "Entrich的小站",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
    [
      [
        "link",
        {
          rel: "stylesheet",
          href: `https://fonts.cat.net/css?family=Roboto:100,300,400,500,700,900|Material+Icons`,
        },
      ],
      [
        "link",
        {
          rel: "stylesheet",
          href: `https://use.fontawesome.com/releases/v5.1.0/css/all.css`,
        },
      ],
    ],
    /*[
      "link",
      {
        rel: "stylesheet",
        href: `https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css`,
      },
    ],

    ["script", { src: `https://cdn.jsdelivr.net/npm/vue/dist/vue.js` }],
    ["script", { src: `https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js` }],
    */
  ],
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },

  plugins: ["meting", "autobar"],
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
