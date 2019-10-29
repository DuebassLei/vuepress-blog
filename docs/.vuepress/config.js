module.exports = {
    title: 'DuebassLei',
    description: "在不断地学习和实践后所整理记录的个人笔记",
    lastUpdated: '最近更新',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '学习笔记',
                items: [
                    { text: 'Java', link: '/study/java/' },
                    { text: 'SpringBoot', link: '/study/springboot/' },
                    { text: 'SpringCloud', link: '/study/springcloud/' },
                    { text: 'Linux', link: '/study/linux/' },
                    { text: 'Javascript', link: '/study/javascript/' },
                    { text: 'Vue', link: '/study/vue/' },
                    { text: 'Docker', link: '/study/docker/' },
                    { text: 'other', link: '/study/other/' },
                ]
            },
            {text: '收藏工具', link: '/favorite/'},
            {text: '我的博客', items: [
                    { text: 'CSDN', link: 'https://blog.csdn.net/m0_37903882' },
                    { text: '掘金', link: 'https://juejin.im/user/5aa1029c51882555770c0603' },
                    { text: '简书', link: 'https://www.jianshu.com/u/6740c2a5866d' },
                    { text: '个人', link: 'https://www.gaosanshi.top' }
                ] },
        ],
        sidebar: {
            '/study/java/': getJavaSidebar("Java","相关资源"),
            '/study/docker/': getDockerSidebar("Docker","相关资源"),
            '/study/javascript/': getJavascriptSidebar("Javascript","相关资源"),
            '/study/linux/': getLinuxSidebar("Linux"),
        },
        // 假定 GitHub。也可以是一个完整的 GitLab URL。
        repo: 'https://github.com/DuebassLei/vuepress-blog',
        // 自定义项目git remote add origin https://github.com/DuebassLei/vuepress-blog.git仓库链接文字
        // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
        repoLabel: '贡献代码！',
        // 以下为可选的 "Edit this page" 链接选项
        // 如果你的文档和项目位于不同仓库：
        docsRepo: 'https://github.com/DuebassLei/vuepress-blog',
        // 如果你的文档不在仓库的根目录下：
        docsDir: 'docs',
        // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
        docsBranch: 'master',
        // 默认为 false，设置为 true 来启用
        editLinks: true,
        // 自定义编辑链接的文本。默认是 "Edit this page"
        editLinkText: '帮助我们改进页面内容！'
    }
}
function getDockerSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'DockerBasic'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }
    ]
}
function getJavaSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'HashMap'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }
    ]
}
function getJavascriptSidebar (groupA) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'Echarts'
            ]
        }]
}
function getLinuxSidebar (groupA) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                'ubuntu-java-install'
            ]
        }]
}
