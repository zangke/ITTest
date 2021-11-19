module.exports = {
  title: '高中信息技术',
  description: '高中信息技术复习',
  themeConfig: {
    nav: [
      {
        text: '基础',
        link: '/basic/',
      },
      {
        text: 'VB',
        link: '/vb/',
      },
    ],
    sidebar: {
      '/basic/': [
        {
          text: '基础',
          children: [
            { text: '信息基础概念', link: '/basic/IT' },
            { text: '字处理与表处理', link: '/basic/word' },
            { text: '人工智能与Access数据库', link: '/basic/AI' },
            { text: '多媒体概念与编码', link: '/basic/multi_media' },
            { text: 'Photoshop图片素材处理', link: '/basic/photoshop' },
            { text: 'Flash动画制作', link: '/basic/flash' },
          ],
        },
      ],
      '/': [
        {
          text: 'VB',
          children: [
            { text: '程序设计基础', link: '/vb/programming' },
            { text: '枚举', link: '/vb/enumerate' },
            { text: '迭代', link: '/vb/iterate' },
            { text: '字符串', link: '/vb/string' },
            { text: '数组', link: '/vb/array' },
            { text: '函数与过程', link: '/vb/function' },
            { text: '进制', link: '/vb/bit' },
            { text: '排序', link: '/vb/sort' },
            { text: '查找', link: '/vb/find' },
            { text: '数据库', link: '/vb/database' },
            { text: '其他', link: '/vb/other' },
          ],
        },
      ],
    },
    lastUpdated: false,
    repo: 'https://github.com/zangke/ITTest.git',
    docsBranch: 'dev',
    editLinks: false,
  },
};
