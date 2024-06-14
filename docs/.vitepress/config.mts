import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zonky.Blog",
  description: "Zonky的个人博客 -- 黎明之光",
  srcDir: 'src',
  base: '/zonky/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/introduction' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '介绍', link: '/introduction' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zon-blogs/zon-blogs.github.io' }
    ]
  }
})
