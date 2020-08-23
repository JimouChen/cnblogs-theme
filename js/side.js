<script type="text/javascript">
    window.cnblogsConfig = {
        GhVersions    : 'v1.3.2', // 版本
        blogUser      : "Neaya", // 用户名
        blogAvatar    : "https://pic3.zhimg.com/50/v2-73b8307b2db44c617f4e8515ce67dd39_hd.jpg?source=1940ef5c", // 用户头像
        blogStartDate : "2020-08-22", // 入园时间

		// 标签聚焦 失焦显示字样
        webpageTitleOnblur: 'Hello~~',
        webpageTitleOnblurTimeOut: 500,
        webpageTitleFocus: '(*´∇｀*) Welcome Back！',
        webpageTitleFocusTimeOut: 1000,
        // 设置网站图标图片
        webpageIcon: "https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@master/img/webp/blog_logo.webp",

		// 日/夜间模式自动切换
		switchDayNight: {
        	enable: true,
        	auto: {
        	    enable: true
        	}
    	},

    	// 页面加载loading
    	loading: {
    	     rebound: {
    	         tension: 16,
    	     },
    	     spinner: {
    	         id: 'spinner',
    	         radius: 90,
    	     }
    	},

    	// 是否渲染主页banner动效 以及配置动态效果
    	// ---- 页面动效配置 ----
        homeTopAnimationRendered: true, // true || false ,是否渲染主页头图动效
        homeTopAnimation: { // 主页头图动效设置
            radius: 15,
            density: 0.2,
            color: 'rgba(255,255,255, .2)', // 颜色设置，“random” 为随机颜色
            clearOffset: 0.3
        },

    	// 是否渲染文章页banner动效 以及配置动态效果
    	essayTopAnimationRendered: true, // true || false ,是否渲染随笔页头图动效
        essayTopAnimation: { // 随笔页头图动效设置
            triW : 14,
            triH : 20,
            neighbours : ["side", "top", "bottom"],
            speedTrailAppear : .1,
            speedTrailDisappear : .1,
            speedTriOpen : 1,
            trailMaxLength : 30,
            trailIntervalCreation : 100,
            delayBeforeDisappear : 2,
            colors: [
                '#96EDA6', '#5BC6A9',
                '#38668C', '#374D84',
                '#BED5CB', '#62ADC6',
                '#8EE5DE', '#304E7B'
            ]
        },

    	// 是否渲染页面背景动效 以及配置动态效果
    	bgAnimationRendered: true, // true || false ,是否渲染背景动效
        backgroundAnimation : { // 背景动效设置
            colorSaturation: "60%",
            colorBrightness: "50%",
            colorAlpha: 0.5,
            colorCycleSpeed: 5,
            verticalPosition: "random",
            horizontalSpeed: 200,
            ribbonCount: 3,
            strokeSize: 0,
            parallaxAmount: -0.2,
            animateSections: true
        },

    	// 主页banner图片Url，推荐尺寸>= 1920*1080，支持多张，每次刷新随机设置一张。
    	  homeTopImg: [
            "https://images.cnblogs.com/cnblogs_com/wupeixuan/1186798/o_wallhaven-4ylgl0.jpg",
            "https://images.cnblogs.com/cnblogs_com/wupeixuan/1186798/o_wallhaven-ne7lr8.jpg",
            "https://images.cnblogs.com/cnblogs_com/wupeixuan/1186798/o_wallhaven-xl67ov.jpg",
            "https://images.cnblogs.com/cnblogs_com/wupeixuan/1186798/o_wallhaven-neqwon.jpg",
            "https://images.cnblogs.com/cnblogs_com/wupeixuan/1186798/o_wallhaven-lm2762.jpg",
        ],
        //侧边栏
		menuUserInfoBgImg: 'https://images.cnblogs.com/cnblogs_com/wupeixuan/1186798/o_menu_bg.gif',
    	// 主页banner上的标语
    	homeBannerTextType: "one",

    	// 文章页banner图片Url，推荐尺寸>= 1920*600，支持多张，每次刷新随机设置一张。
    	essayTopImg: [
            "https://images.cnblogs.com/cnblogs_com/wupeixuan/1186798/o_wallhaven-d5yzvg.jpg",
			"https://images.cnblogs.com/cnblogs_com/wupeixuan/1186798/o_wallhaven-4d38m0.jpg",
            "https://images.cnblogs.com/cnblogs_com/wupeixuan/1186798/o_wallhaven-4gj334.jpg",
            "https://images.cnblogs.com/cnblogs_com/wupeixuan/1186798/o_wallhaven-j82g35.jpg",
            "https://images.cnblogs.com/cnblogs_com/wupeixuan/1186798/o_wallhaven-r2yjg1.jpg",
            "https://images.cnblogs.com/cnblogs_com/wupeixuan/1186798/o_wallhaven-wymo2p.jpg",
        ],

    	// 文章页后缀
    	//文章后缀配置
		essaySuffix: {
			codeImgUrl   : 'https://img1.gamedog.cn/2015/08/30/327-150S01356420.jpg', // >= v1.1.5 左侧图片设置，不配置使用 window.cnblogsConfig.blogAvatar
			aboutHtml    : '软工学生，博客便于记录笔记之类', // 关于博主，不配置使用默认
			copyrightHtml: '本文为博主原创文章，转载请注明出处。', // 版权声明，不配置使用默认
			supportHtml  : ''  // 声援博主，不配置使用默认
		},

    	// 限制代码框高度，开启行号
    	codeMaxHeight: true,
    	codeLineNumber: false,

    	// 设置代码框字体样式
    	essayCode: {
        	fontFamily: "'Ubuntu Mono',monospace", // 代码框字体
   			fontSize: "16px" // 代码框字体大小
   		},

		// 设置博客园代码块样式
		essayCodeHighlightingType: "prettify",
        essayCodeHighlighting: "desert",

    	// 页脚样式
		footerStyle: 1,

     // ---- 页脚配置 ----
        bottomBlogroll: [ // 友情链接，[[链接名,链接]....]
             ["谷歌", 'https://www.google.com.hk/webhp?hl=zh-CN&sa=X&ved=0ahUKEwipr6aoqqPoAhUDM94KHaipCYsQPAgH'],
             ["百度", 'https://www.baidu.com'],
             ["Youtube", 'https://www.youtube.com/'],
             ["B站", 'https://www.bilibili.com/'],

         ],

    	// 页脚标语
    	bottomText: {
        	icon: "❤️",   // v1.3.0 已废弃该配置
    		iconFont: {  // v1.3.0 新增配置
        	icon:  "icon-xl", // iconfont 图标名称
        	color: "red",     // 图标颜色
        	fontSize: "16px"  // 图标大小
    	},
    	left : "生而为人",
    	right: "风雨兼程"
    	},

    	// 控制台输出
    	consoleList: [
        	['BNDong CNBlogs', ''],
        	['BNDong GitHub', ''],
        	['BNDong Email', ''],
    	],

    	// 关闭广告
    	advertising: false,
    	// 版本映射
    	//isVersionMapping: true,

	}
</script>
<script src="https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@v1.3.2/src/script/simpleMemory.min.js"></script>
