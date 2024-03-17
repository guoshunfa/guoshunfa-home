import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import * as path from "path";

export default hopeTheme({
    // 当前网站部署到的域名。
    hostname: "https://www.guoshunfa.com",
    // 作者相关信息
    author: {
        name: "郭顺发",
        url: "https://www.guoshunfa.com",
        email: "13301203454@guoshunfa.com"
    },
    // 站点的默认协议
    // license: "",
    // 站点图标
    favicon: "/logo.jpg",
    // 导航栏配置
    navbar,
    // 侧边栏配置
    sidebar,
    // 博客选项
    blog: {
        // 博主姓名。
        name: "郭顺发",
        // 博主头像。
        avatar: "/logo.jpg",
        // 口号、座右铭或介绍语。
        description: "Java开发工程师一枚",
        // 博主的个人介绍地址。
        intro: "/about.md",
        // 博主的媒体链接配置。
        medias: {
            // GitHub 已经内置了图标
            GitHub: "https://github.com/guoshunfa",
            // Wechat: "guoshunfa_"
        },
        // 如果你希望头像被剪裁成圆形
        roundAvatar: true,
        /**
         * 是否在侧边栏展示博主信息。
         *
         * "mobile": 在移动视图中显示在侧边栏中
         * "always": 总是展示在侧边栏中
         * "none": 永远不在侧边栏展示
         */
        sidebarDisplay: "mobile",
        // 时间轴的顶部文字。
        timeline: "时间线",
        // 每页的文章数量。
        articlePerPage: 8,
        /**
         * 文章列表中展示的文章信息
         *
         * ArticleInfo 的可选值如下:
         *
         * "Author"
         * "Category"
         * "Date"
         * "Original"
         * "Tag"
         * "ReadingTime"
         * "Word"
         */
        articleInfo: ["Author", "Original", "Date", "PageView", "Category", "Tag", "ReadingTime"]
    },
    // 加密配置
    encrypt: {
        // 是否全局加密。
        // global: false,
        // 最高权限密码，可以以数组的形式设置多个。
        // admin: [],
        // 加密配置，为一个对象，键名为匹配的路径，键值为对应的密码，接受字符串或字符串数组。
        // config: {}
    },
    //是否在导航栏显示图标。
    navbarIcon: true,
    // 自定义导航栏布局
    navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Language", "Repo", "Outlook", "Search"],
    },
    // 导航栏图标，应为基于 .vuepress/public 文件夹的绝对路径。
    logo: "/logo.jpg",
    // 夜间模式下导航栏图标，应为基于 .vuepress/public 文件夹的绝对路径。
    logoDark: "/logo.jpg",
    // 默仓库配置，用于在导航栏中显示仓库链接。
    repo: "https://github.com/guoshunfa/guoshunfa-blog",
    // 是否在导航栏显示仓库链接。
    repoDisplay: true,
    /**
     * 用于导航栏仓库按钮的无障碍标签。
     * 主题可以正确识别 GitHub, Gitlab, Gitee, Bitbucket 的链接。
     */
    repoLabel: "GitHub",
    // 是否在向下滚动时自动隐藏导航栏。可选值："always" | "mobile" | "none"
    navbarAutoHide: "mobile",
    // 是否在移动视图下隐藏站点名称。
    hideSiteNameOnMobile: true,
    // 是否在侧边栏显示图标。
    sidebarIcon: true,
    // 结构侧边栏排序器。
    // https://theme-hope.vuejs.press/zh/config/theme/layout.html#sidebarsorter
    sidebarSorter: ["readme", "order", "title", "filename"],
    // 侧边栏嵌套的标题深度。
    headerDepth: 2,
    // 是否全局启用路径导航。
    breadcrumb: true,
    // 是否在路径导航显示图标。
    breadcrumbIcon: true,
    // 是否在页面底部显示上一篇链接。
    prevLink: true,
    // 是否在页面底部显示下一篇链接。
    nextLink: true,
    // 是否在页面标题旁显示图标。
    titleIcon: true,
    /**
     * 文章信息，可以填入数组，数组的顺序是各条目显示的顺序。填入 false 使其被禁用。
     *
     * 可以填入的条目如下:
     *
     * "Author": 作者
     * "Date": 写作日期
     * "Original": 是否原创
     * "Category": 分类
     * "Tag": 标签
     * "ReadingTime": 预计阅读时间
     * "Word": 字数
     * "PageView": 页面浏览量
     */
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
    // 是否显示页面最后更新时间
    lastUpdated: true,
    // 是否显示页面贡献者
    contributors: true,
    // 是否展示编辑此页链接
    editLink: true,
    // 编辑链接的匹配。其中 :repo :branch :path 会被自动替换为 docsRepo docsBranch 和 docsDir + filePath。
    // editLinkPattern: "",
    // 文档仓库
    docsRepo: "https://github.com/guoshunfa/guoshunfa-blog.git",
    // 文档所在分支
    docsBranch: "master",
    // 文档在仓库中的目录
    docsDir: "src",
    // 页脚的默认内容，可输入 HTMLString。
    footer: "我是页脚",
    // 默认的版权信息，设置为 false 来默认禁用它。
    copyright: "Copyright © <作者>",
    // 是否默认显示页脚
    displayFooter: false,
    // 当前语言的主页路径，用于导航栏图标和返回主页按钮的链接。
    // home: ,
    // 是否使用 RTL 布局
    rtl: false,
    // 是否显示标题列表
    toc: true,
    // 字体图标资源链接，支持 'iconfont' 和 'fontawesome' 关键字。
    iconAssets: "fontawesome-with-brands",
    /**
     * 深色模式支持选项:
     *
     * "switch": 在深色模式，浅色模式和自动之间切换
     * "toggle": 在深色模式和浅色模式之间切换
     * "auto": 自动根据用户设备主题或当前时间决定是否应用深色模式
     * "enable": 强制深色模式
     * "disable": 禁用深色模式
     */
    darkmode: "toggle",
    // 是否显示全屏按钮。
    fullscreen: true,
    // 纯净模式
    pure: true,
    // 是否在桌面模式下显示打印按钮。
    print: true,
    // 通常情况下，它可以识别 iconAssets 并自动设置，如果识别失败，你可以手动设置图标的 FontClass 前缀。
    // iconPrefix: "",
    // 插件
    plugins: {
        // 博客配置
        blog: {
            // 是否生成摘要。
            excerpt: true,
            // 摘要分隔符。
            excerptSeparator: "<!-- more -->",
            // 自动生成的摘要的长度。
            excerptLength: 200,
            /**
             * 页面过滤器，此函数用于鉴别页面是否作为文章。
             *
             * 默认情况下，所有从 Markdown 源文件中生成的非主页页面，会被作为文章。
             */
            filter:(page) => Boolean(page.filePathRelative) && !page.frontmatter.home,
            // 页面过滤器，此函数用于鉴别插件是否需要生成摘要。
            // excerptFilter: ,
            // Slugify 函数，用于转换 key 在路由中注册的形式。
            // slugify: (name) => name.replace(/ _/g, '-').replace(/[:?*|\\/<>]/g, "").toLowerCase(),
            // 额外的文章类型。
            type: [],
            // 文章列表路由路径。
            article: "/article/",
            // 分类地图路由路径。
            category: "/category/",
            // 分类列表路由路径。:name 会被自动替换为分类名称。
            categoryItem: "/category/:name/",
            // 标签地图路由路径。
            tag: "/tag/",
            // 标签列表路由路径。:name 会被自动替换为标签名称。
            tagItem: "/tag/:name/",
            // 星标文章列表路由路径。
            star: "/star/",
            // 时间线列表路由路径。
            timeline: "/timeline/",
            // 是否需要在开发服务器启用热更新。
            hotReload: true,
        },
        // 搜索插件配置
        // https://theme-hope.vuejs.press/zh/config/plugins/search.html
        search: true,
        // 评论插件配置
        comment: {
            provider: "Giscus",
            repo: "guoshunfa/guoshunfa-comment",
            repoId: "R_kgDOIfh6Dw",
            category: "Announcements",
            categoryId: "DIC_kwDOIfh6D84CSulu",
        },
        // 版权信息插件配置
        copyright: {
            // 触发附加版权的最小字数
            triggerLength: 1,
            // 是否全局启用
            global: true,
            // 禁用复制
            disableCopy: false,
            // 禁用选择
            disableSelection: false,
            // 首选域名与部署目录
            // 当你在多个站点部署内容时很有用。
            canonical: "www.guoshunfa.com"
        },
        // Feed 插件配置
        feed: {
            atom: false,
            json: false,
            rss: true,
            // 一个大的图片，用作 feed 展示。
            // images: "",
            // 一个小的图标，显示在订阅列表中。
            // icon: "",
            // 设置 feed 的最大项目数量。在所有页面排序好后，插件会截取前 count 个项目。
            // 如果你的站点文章很多，你应该考虑设置这个选项以减少 feed 文件大小。
            count: 200,
            // 自定义的过滤函数，用于过滤哪些项目在 feed 中显示。
            // filter:
            // Feed 项目的排序器。
            // 默认的排序行为是通过 Git 的文件添加日期 (需要 @vuepress/plugin-git)。
            // sort :
        },

        components: {
            components: [
                "ArtPlayer",
                "Badge",
                "BiliBili",
                "CodePen",
                "PDF",
                "Replit",
                "Share",
                "SiteInfo",
                "StackBlitz",
                "VPBanner",
                "VPCard",
                "VidStack",
                "XiGua",
            ]
        },

        // 所有功能都是为演示而启用的，只保留您需要的功能
        // mdEnhance: {
        //     align: true,
        //     attrs: true,
        //     codetabs: true,
        //     component: true,
        //     demo: true,
        //     figure: true,
        //     imgLazyload: true,
        //     imgSize: true,
        //     include: true,
        //     mark: true,
        //     stylize: [
        //         {
        //             matcher: "Recommended",
        //             replacer: ({tag}) => {
        //                 if (tag === "em")
        //                     return {
        //                         tag: "Badge",
        //                         attrs: {type: "tip"},
        //                         content: "Recommended",
        //                     };
        //             },
        //         },
        //     ],
        //     sub: true,
        //     sup: true,
        //     tabs: true,
        //     vPre: true,
        //
        //     // install chart.js before enabling it
        //     // chart: true,
        //
        //     // insert component easily
        //
        //     // install echarts before enabling it
        //     // echarts: true,
        //
        //     // install flowchart.ts before enabling it
        //     // flowchart: true,
        //
        //     // gfm requires mathjax-full to provide tex support
        //     // gfm: true,
        //
        //     // install katex before enabling it
        //     // katex: true,
        //
        //     // install mathjax-full before enabling it
        //     // mathjax: true,
        //
        //     // install mermaid before enabling it
        //     // mermaid: true,
        //
        //     // playground: {
        //     //   presets: ["ts", "vue"],
        //     // },
        //
        //     // install reveal.js before enabling it
        //     // revealJs: {
        //     //     plugins: ["highlight", "math", "search", "notes", "zoom"],
        //     // },
        //
        //     // install @vue/repl before enabling it
        //     // vuePlayground: true,
        //
        //     // install sandpack-vue3 before enabling it
        //     // sandpack: true,
        // },

    },
});
