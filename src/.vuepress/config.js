module.exports = {
  // 基础配置
  base: '/web-java/', // 部署站点的基础路径
  description: 'java相关知识点',
  locales: {
    // 默认标题
    '/': {
      title: 'Java笔记',
      description: ''
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  port: 3009,
  dest: 'web-java', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa

  // 主题配置
  themeConfig: {
    repo: 'https://github.com/zhoubichuan/web-java', // 源码地址
    repoLabel: '查看源码', // (查看源码的)组件名称
    docsBranch: 'master', // git 源仓库 仓库分支
    editLinks: true, // 编辑链接
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    editLinkText: '在github上编辑此页',
    sidebarDepth: 2,
    lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
    nav: [
      {
        text: '基础知识',
        items: [
          {
            text: '1.JavaSE',
            link: '/base/javase/1.index'
          },
          {
            text: '2.JavaWeb',
            link: '/base/javaweb/1.index',
          }
        ]
      },
      {
        text: '高级知识',
        items: [
          {
            text: '1.SSM',
            link: '/senior/ssm/1.index'
          },
          {
            text: '2.Spring Boot',
            link: '/senior/springboot/1.index'
          },
        ]
      }
    ],
    sidebar: {
      '/base/javase/': [
        '1.index',
        '2.webpack',
        '3.file',
        '4.single',
        '5.page',
        '7.module',
        '8.project',
        '9.utils',
        '10.ui',
        '11.data',
        '12.skill',
        '13.com',
        '14.data',
        '15.api'
      ],
      '/base/javaweb/': [
        '1.index',
        '2.tomcat',
        '3.jsp',
        'vscode',
        'test',
        'prem',
        'i18n'
      ],
      '/senior/ssm/': [
        '1.index',
        '2.spring',
        '3.springmvc',
        '4.mybatis',
        '5.api',
        '6.form',
        '7.checkBox',
        '8.active',
        '9.alert',
        '10.table',
        '11.tree'
      ],
      '/senior/springboot/': [
        '1.index',
      ],
    },
    searchMaxSuggestoins: 10
  }
}