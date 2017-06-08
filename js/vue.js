var pic234 = new Vue({
	el: '.gamecentry-content-pic234',
	data: {
		items: [
			{message:'命运-冠位指定（Fate/GO）', text : '命运-冠',img_src :"img/game-pic-2.png"},
			{message:'阴阳师',text : '阴阳师',img_src :"img/game-pic-3.png"},
			{message:'崩坏学院3',text : '崩坏3',img_src :"img/game-pic-4.jpg"},
		]
	  }
	})


var game_lis = new Vue({
	el: '.game-list',
	data: {
		game_list: [
			{text : '梦间集',img_src:"img/divimg-1.png"},
			{text : '罗小黑战记',img_src:"img/divimg-2.png"},
			{text : '战争工厂',img_src:"img/divimg-3.png"},
			{text : '一血万杰',img_src:"img/divimg-4.png"},
			{text : '妃十三学院',img_src:"img/divimg-5.png"},
			{text : '魔法禁书目录',img_src:"img/divimg-6.png"},
			{text : '叛逆的百万亚瑟王',img_src:"img/divimg-7.png"},
		]
	  }
	})

var livepic = new Vue({
	el:'.live-list',
	data:{
		live_list: [
			{text : '幕狸Meow',img_src:"img/live-pic-1.jpg"},
			{text : '城市艺术节',img_src:"img/live-pic-2.jpg"},
			{text : '小米公司',img_src:"img/live-pic-3.jpg"},
			{text : '戏子大毒瘤',img_src:"img/live-pic-4.jpg"},
			{text : '卡欧司之眼',img_src:"img/live-pic-5.jpg"},
			{text : '天涯明月刀',img_src:"img/live-pic-6.gif"},
		]		
	}

})
var menu = new Vue({
	el:'.face-menu',
	data:{
		menu_list: [
			{text : '个人中心',img_src:"img/menu-pic (1).png"},
			{text : '投稿管理',img_src:"img/menu-pic (2).png"},
			{text : 'B币钱包',img_src:"img/menu-pic (3).png"},
			{text : '直播中心',img_src:"img/menu-pic (4).png"}
		]		
	}
})

var content_menu = new Vue({
    el: ".content-menu-list",
    data: {
        content_menu_list: {
            1: [
                {title: "MAD.AMV"},
                {title: "MMD.3D"},
                {title: "短书.手书.配音"},
                {title: "综合"}
            ],
            2: [
                {title: "连载动画"},
                {title: "完结动画"},
                {title: "资讯"},
                {title: "官方延伸"},
                {title: "新番时间表"},
                {title: "番剧索引"}
            ],
            3: [
                {title: "国产动画"},
                {title: "国产原创相关"},
                {title: "布袋戏"},
                {title: "资讯"},
                {title: "新番时间表"},
                {title: "国产动画索引"}
       
            ],
            4: [
                {title: "原创音乐"},
                {title: "翻唱"},
                {title: "VOCALOID.UTAU"},
                {title: "演奏"},
                {title: "三次元音乐"},
                {title: "OP/ED/OST"},
                {title: "音乐选集"}
            ],
            5: [
                {title: "宅舞"},
                {title: "三次元舞蹈"},
                {title: "舞蹈教程"}
            ],
            6: [
                {title: "单机游戏"},
                {title: "电子竞技"},
                {title: "手机游戏"},
                {title: "网络游戏"},
                {title: "桌游棋牌"},
                {title: "GMV"},
                {title: "音游"},
                {title: "Mugen"}
            ],
            7: [
                {title: "纪录片"},
                {title: "趣味科普人文"},
                {title: "野生技术协会"},
                {title: "演讲.公开课"},
                {title: "星海"},
                {title: "数码"},
                {title: "机械"}
            ],
            8: [
                {title: "搞笑"},
                {title: "日常"},
                {title: "美食圈"},
                {title: "动物圈"},
                {title: "手工"},
                {title: "绘画"},
                {title: "运动"},
                {title: "其他"}
            ],
            9: [
                {title: "鬼畜调教"},
                {title: "音MAD"},
                {title: "人力VOCALOID"},
                {title: "教程演示"}
            ],
            10: [
                {title: "美妆"},
                {title: "服饰"},
                {title: "健身"},
                {title: "资讯"}
            ],
             11: [
            ],
            12: [
                {title: "综艺"},
                {title: "明星"},
                {title: "Korea相关"}
            ],
            13: [
                {title: "电影"},
                {title: "电视剧"}
            ]
        }
    }
});



var menu = new Vue({
	el:'.content-menu',
	data:{
		content_menu_title: [
			{text : '动画',num:'240',key:'1'},
			{text : '番剧',num:'47',key:'2'},
			{text : '国创',num:'31',key:'3'},
			{text : '音乐',num:'361',key:'4'},
			{text : '舞蹈',num:'61',key:'5'},
			{text : '游戏',num:'999+',key:'6'},
			{text : '科技',num:'195',key:'7'},
			{text : '生活',num:'748',key:'8'},
			{text : '鬼畜',num:'22',key:'9'},
			{text : '时尚',num:'111',key:'10'},
			{text : '广告',num:'19',key:'11'},
			{text : '娱乐',num:'468',key:'12'},
			{text : '影音',num:'424',key:'13'}
		]		
	}
})




var message = new Vue({
	el:'.left-message-text',
	data:{
		messages: [
			{text : '周刊哔哩哔哩排行榜#362',color:'white',key:'0'},
			{text : '2017年4月新番介绍',color:'#FFFFFF',key:'1'},
			{text : 'UP主可以为自己的原创作品添加水印了',color:'#4A90E2',key:'2'},
			{text : '【bilibili招聘】机器学习/开发/产品/设计/销售/运营',color:'#BD10E0',key:'3'},
			{text : '下载手机客户端(＾o＾)ﾉ',color:'#FFFFFF',key:'4'}
		]		
	}
})

var con1 = new Vue({
	el:'.player-left-co',
	data:{
		cons: [
			{text:'img/con-danmu.png'},
			{text:'img/con-for.png'},
			{text:'img/con-mod.png'},
			{text:'img/con-quan.png'}
		]		
	}
})


var pic = new Vue({
	el: '.player-left-con',
	data: {
		items: [
			{img_src :"img/con-danmu.png"},
			{img_src :"img/con-for.png"},
			{img_src :"img/con-mod.png"},
			{img_src :"img/con-quan.png"}
		]
	  }
	})



var pic = new Vue({
	el: '.menu-detail-video',
	data: {
		videos: [
			{img_src :"img/video-ohter-1.jpg",title:"【火影忍者/佐樱】其实我就想放一下最后那张图",playnum:"12.3万",danmunum:"1023"},
			{img_src :"img/video-ohter-2.jpg",title:"【搬运】火影忍者忍术集合",playnum:"4231",danmunum:"534"},
			{img_src :"img/video-ohter-3.jpg",title:"后♂来",playnum:"5.4万",danmunum:"1230"},
			{img_src :"img/video-ohter-4.jpg",title:"FA♂中福利",playnum:"7923",danmunum:"97"},
			{img_src :"img/video-ohter-5.png",title:"火影手游须佐鼬50抽光头",playnum:"1004",danmunum:"154"},
			{img_src :"img/video-ohter-6.png",title:"2010.2011年 b站上那些收藏量>20000的视频们",playnum:"3517",danmunum:"697"},
			{img_src :"img/video-ohter-7.jpg",title:"【兄贵】Poker ♂ Face",playnum:"8.3万",danmunum:"9463"},
			{img_src :"img/video-ohter-8.jpg",title:"【性♂游记】第二集  哲学家",playnum:"8308",danmunum:"514"},
			{img_src :"img/video-ohter-9.jpg",title:"四驱♂兄弟",playnum:"5.5万",danmunum:"477"},
			{img_src :"img/video-ohter-10.jpg",title:"【哲学♂dark片】Van的复♂仇 （Van罪♂睾手）",playnum:"953",danmunum:"78"},
			{img_src :"img/video-ohter-11.jpg",title:"【兄贵】白金disco",playnum:"4932",danmunum:"388"}
			// {img_src :"img/video-ohter-12.jpg",title:"【火影忍者】手游：战斗是忍者证明自我的一种形式！",playnum:"1.3万",danmunum:"998"}
		]
	  }
	})


var pic = new Vue({
	el: '.menu-detail-setting',
	data: {
		items: [
			{img_src :"img/danmu-style- (6).png",name:'滚动弹幕'},
			{img_src :"img/danmu-style- (5).png",name:'顶端弹幕'},
			{img_src :"img/danmu-style- (4).png",name:'底端弹幕'},
			{img_src :"img/danmu-style- (3).png",name:'普通弹幕'},
			{img_src :"img/danmu-style- (2).png",name:'字体弹幕'},
			{img_src :"img/danmu-style- (1).png",name:'特殊弹幕'},
			{img_src :"img/danmu-style- (7).png",name:'彩色弹幕'}
		]
	  }
	})


var share = new Vue({
	el: '.link-share-left',
	data: {
		items: [
			{title:'视频地址',add:'http://www.bilibili.com/video/av9297989/',copy:'复制'},
			{title:'Flash地址',add:'sd98static.hdslb.com/miniloader.swf?aid=92sd989&page=1',copy:'复制'},
			{title:'Html地址',add:'www.adobe.com/shockwave/download/download.cgi?P1_Pro',copy:'复制'}
		]
	  }
	})

var share = new Vue({
	el: '.forum-left',
	data: {
		labels: [
			{text:'偶像大师灰姑娘'},
			{text:'CGSS'},
			{text:'音MAD'},
			{text:'星辉子'},
			{text:'德国BOY'},
			{text:'BBE MY BABY'}
		]
	  }
	})



var content_menu = new Vue({
    el: ".forum-content-left",
    data: {
        content_menu_list: {
            1: [
                {img_src :"img/video-ohter-1.jpg",title:"【火影忍者/佐樱】其实我就想放一下最后那张图"},
                {img_src :"img/video-ohter-2.jpg",title:"【搬运】火影忍者忍术集合"},
                {img_src :"img/video-ohter-3.jpg",title:"后♂来"},
				{img_src :"img/video-ohter-4.jpg",title:"FA♂中福利"}
            ],        
            2: [
				{img_src :"img/video-ohter-5.png",title:"火影手游须佐鼬50抽光头"},
				{img_src :"img/video-ohter-6.png",title:"2010.2011年 b站上那些收藏量>20000的视频们"},
				{img_src :"img/video-ohter-7.jpg",title:"【兄贵】Poker ♂ Face"},
				{img_src :"img/video-ohter-8.jpg",title:"【性♂游记】第二集  哲学家"}
            ],
            3: [
			{img_src :"img/video-ohter-9.jpg",title:"四驱♂兄弟"},
			{img_src :"img/video-ohter-10.jpg",title:"【哲学♂dark片】Van的复♂仇 （Van罪♂睾手）"},
			{img_src :"img/video-ohter-11.jpg",title:"【兄贵】白金disco"}
            ]
        }
    }
});

var danmu = new Vue({
	el: '.detail-danmu-content',
	data: {
		danmus: [
			{min:'00',sec:'01',text:'编弹幕好难啊',sendtime:'03-11 10:55'},
			{min:'00',sec:'02',text:'想不出弹幕写什么好',sendtime:'03-11 10:55'},
			{min:'00',sec:'03',text:'人生啊，真是寂寞如雪',sendtime:'03-11 10:55'},
			{min:'00',sec:'04',text:'弹幕一',sendtime:'03-11 10:55'},
			{min:'00',sec:'05',text:'弹幕二',sendtime:'03-11 10:55'},
			{min:'00',sec:'06',text:'弹幕三',sendtime:'03-11 10:55'},
			{min:'00',sec:'04',text:'不知道吹一波老师会不会给高分',sendtime:'03-11 10:55'},
			{min:'00',sec:'07',text:'空降成功',sendtime:'03-11 10:55'},
			{min:'00',sec:'11',text:'人生啊，真是寂寞如雪',sendtime:'03-11 10:55'},
			{min:'00',sec:'08',text:'第一',sendtime:'03-11 10:55'},
			{min:'00',sec:'01',text:'第一',sendtime:'03-11 10:55'},
			{min:'00',sec:'05',text:'说好的0弹幕呐？这些都是什么',sendtime:'03-11 10:55'},
			{min:'00',sec:'06',text:'为什么没声音',sendtime:'03-11 10:55'},
			{min:'00',sec:'07',text:'因为视频没声音呗',sendtime:'03-11 10:55'},
			{min:'00',sec:'04',text:'弹幕一',sendtime:'03-11 10:55'},
			{min:'00',sec:'09',text:'弹幕二',sendtime:'03-11 10:55'},
			{min:'00',sec:'04',text:'弹幕三',sendtime:'03-11 10:55'},
			{min:'00',sec:'11',text:'视频的弹幕由我来组成',sendtime:'03-11 10:55'},
			{min:'00',sec:'08',text:'第一',sendtime:'03-11 10:55'},
			{min:'00',sec:'01',text:'第一',sendtime:'03-11 10:55'},
			{min:'00',sec:'05',text:'视频的弹幕由我来组成',sendtime:'03-11 10:55'},
			{min:'00',sec:'06',text:'视频的弹幕由我来组成',sendtime:'03-11 10:55'},
			{min:'00',sec:'07',text:'视频的弹幕由我来组成',sendtime:'03-11 10:55'},
			{min:'00',sec:'04',text:'视频的弹幕由我来组成',sendtime:'03-11 10:55'},
			{min:'00',sec:'09',text:'视频的弹幕由我来组成',sendtime:'03-11 10:55'},
			{min:'00',sec:'04',text:'视频的弹幕由我来组成',sendtime:'03-11 10:55'},
			{min:'00',sec:'04',text:'视频的弹幕由我来组成',sendtime:'03-11 10:55'},
			{min:'00',sec:'09',text:'弹幕二',sendtime:'03-11 10:55'},
			{min:'00',sec:'04',text:'弹幕三',sendtime:'03-11 10:55'},
			{min:'00',sec:'08',text:'编弹幕真心累',sendtime:'03-11 10:55'},
			{min:'00',sec:'08',text:'我觉得吧',sendtime:'03-11 10:55'},
			{min:'00',sec:'08',text:'读什么书',sendtime:'03-11 10:55'},
			{min:'00',sec:'01',text:'女装大佬前来报到',sendtime:'03-11 10:55'},
			{min:'00',sec:'00',text:'续一秒',sendtime:'03-11 10:55'},
			{min:'00',sec:'01',text:'6666666',sendtime:'03-11 10:55'},
			{min:'00',sec:'04',text:'23333333',sendtime:'03-11 10:55'},
			{min:'00',sec:'01',text:'滑稽.jpg',sendtime:'03-11 10:55'}
		]
	  }
	})