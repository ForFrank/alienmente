export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "网站快速成型工具",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/theme.png",
    "title": "网站快速成型工具",
    "tagline": "一套为开发者、设计师和产品经理准备的基于 Vue 3 的桌面端组件库",
    "heroText": "网站快速成型工具",
    "actions": [
      {
        "text": "快速上手",
        "link": "/install",
        "type": "primary"
      },
      {
        "text": "项目简介",
        "link": "/button",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "简洁至上",
        "details": "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"
      },
      {
        "title": "Vue 驱动",
        "details": "享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。"
      },
      {
        "title": "高性能",
        "details": "VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。"
      }
    ],
    "footer": "powdered by vuepress and me"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
