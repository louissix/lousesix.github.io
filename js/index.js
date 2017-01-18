$(document).ready(function() {

	//设置购物车按钮的hover效果
	$("#head_car").hover(function() {
		$(this).css("background", "#FFFFFF");
		$(".head_car_text").css("color", "#ff6700");
		$("#car_content").css({
			"height": "100px",
			"border-width": " 0 1px 1px 1px"
		});
		setTimeout(function() {
			$(".car_text").html("购物车中还没有商品，赶紧选购吧！")
		}, 300);
	}, function() {
		$("#car_content").css("height", "0px");
		$(".car_text").html("");
		setTimeout(function() {
			$("#head_car").css("background", "#424242");
			$(".head_car_text").css("color", "#b0b0b0");
			$("#car_content").css("border-width", "0");
		}, 300);
	})

	//打开【地区选择】模块
	$("#Select_Region_but").on("click", function(e) {
		$("#body_mask").show();
		$("#region_box").animate({
			top: "100px",
			opacity: "1"
		}, 100, "linear");
		e.stopPropagation();
	});

	//设置【关闭地区选择】模块效果
	function close_region() {
		$("#body_mask").hide();
		$("#region_box").animate({
			top: "-480px",
			opacity: "0"
		}, 100, "linear");
	}
	$("#close_region_but").on("click", function() {
		close_region();
	})

	//点击非自己即关闭
	$(document).on("click", function(e) {
		if($(e.target).closest("#region_box").length == 0) {
			close_region();
			$("#body_mask").hide();
		}
	})

	//搜索框下拉列表
	$("#find_input").focus(function() { //鼠标移入
		$("#find_wrap ,#find_but").css("border-color", "#FF6700");
		$("#find_hot").fadeToggle();
		$("#find_bar_word").hide();
	})
	$("#find_input").blur(function() { //鼠标移除
		$("#find_wrap ,#find_but").css("border-color", "#F0F0F0");
		$("#find_hot").fadeToggle();
		$("#find_bar_word").show();
	})

	//导航栏li移入移出效果
	$(".menu_li").hover(function() {
		var menu_li_index = $(this).index();
		$("#menu_content_bg").css("height", "230px");
		$("#menu_content_wrap ul").css("top", "-" + menu_li_index * 230 + "px");
	}, function() {
		$("#menu_content_bg").css("height", "0px");
	})
	$("#menu_content_bg").hover(function() {
		$("#menu_content_bg").css("height", "230px");
	}, function() {
		$("#menu_content_bg").css("height", "0px");
	})
	
//////////////////////////////////大轮播图////////////////////////////////////////////////////////////	

	var i = 0
	var big_banner_pic = $("#big_banner_pic");//就是ul
	var big_banner_pic_change_self_time = "";
	var all_big_banner_pic = $("#big_banner_pic li").length; //获取轮播图的数量
	$("#big_banner_pic").css("width", all_big_banner_pic * 1226 + "px"); //设置轮播图容器宽度
	
	//定义轮播切换效果(封装函数)
	function big_banner_pic_change() { 
		var changeLeft = i * -1226 + "px";
		$("#big_banner_pic").animate({
			opacity: "0.2"
		}, 200, function() { //移动图片
			$("#big_banner_pic").css("left", changeLeft);
			$("#big_banner_pic").animate({
				opacity: "1"
			}, 200);
		})
		//更改小圆点样式
		$("#big_banner_change_wrap ul li").eq(i).css("background", "#FFFFFF").siblings().css("background", "#9D9D9D"); 
	}
	
	//定时器函数
	function big_banner_pic_change_self() { 
		i += 1;
		if(i >= all_big_banner_pic) {
			i = 0;
		}
		big_banner_pic_change();
	}
	//定时器
	big_banner_pic_change_self_time = setInterval(big_banner_pic_change_self, 3000); 
	
	//鼠标进入轮播区时，自动轮播暂停
	$("#big_banner_change_wrap").hover(function() { 
		clearInterval(big_banner_pic_change_self_time);
		$("#big_banner_change_next ,#big_banner_change_prev").css("opacity", "1"); //按钮显示
	}, function() {
		big_banner_pic_change_self_time = setInterval(big_banner_pic_change_self, 3000);
		$("#big_banner_change_next ,#big_banner_change_prev").css("opacity", "0"); //按钮隐藏
	})
	
	//下一张
	$("#big_banner_change_next").on("click", function() { 
		i += 1;
		if(i >= all_big_banner_pic) {
			i = 0;
		}
		big_banner_pic_change();
	})
	
	//上一张
	$("#big_banner_change_prev").on("click", function() { 
		i -= 1;
		if(i <= 0) {
			i = all_big_banner_pic - 1;
		}
		big_banner_pic_change();
	})
//////////////////////////////////侧边栏////////////////////////////////////////////////////////////	
	
//调整隐藏框的位置
$('#banner_menu_wrap>li').each(function(){//用与没有事件调用的情况下，给类数组的对象元素加函数的时候用each遍历，相当于for循环
	
	var i=$(this).index();//设置索引
	
	$(this).find('div').css('top',-(i*42+20)+'px')
	
})


//////////////////////////////////整行轮播（小单品）////////////////////////////////////////////////////////////	

//点击向右按钮
$('#head_hot_goods_next').on('click',function(){
	$('#head_hot_goods_content ul').css('left','-1226px');
	$(this).css({
		'color':'#e0e0e0',
		'cursor':'default'
	});
	$('#head_hot_goods_prave').css({
		'color':'#bebebe',
		'cursor':'pointer'
	})
})
























	var floor_con = new Array(
//		智能硬件
		new Array(
			new Array("", "", "", ""),
			new Array("http://i3.mifile.cn/a4/T1odEjB5bT1RXrhCrK.jpg", "小米智能家庭套装", "3分钟快速安装，30多种智能玩法", "199元"),
			new Array("http://i3.mifile.cn/a4/T1JKxvBXhv1RXrhCrK.jpg", "小米随身WIFI 8GB U盘版", "随身上网神器，内置8GB U盘", "49.9元"),
			new Array("http://i3.mifile.cn/a4/T18yZQBCET1RXrhCrK.jpg", "小蚁智能摄像机", "能看能听能说，手机远程观看", "149元"),
			new Array("http://i3.mifile.cn/a4/T1YoZQByYT1RXrhCrK.jpg", "小米体重称", "高精度压力传感器 ｜ 手机管理全家健康", "99元"),
			new Array("http://i3.mifile.cn/a4/T16nVjBCKT1RXrhCrK.jpg", "小蚁运动机", "边玩边录边拍，手机随时分享", "399元"),
			new Array("http://i3.mifile.cn/a4/T18zWQB4WT1RXrhCrK.jpg", "小米路由器 mini", "主流双频AC智能路由器，性价比之王", "129元"),
			new Array("http://i3.mifile.cn/a4/T1oixjB5bT1RXrhCrK.jpg", "小米智能插座", "手机远程遥控开关，带USB接口", "59元"),
			new Array("http://i3.mifile.cn/a4/T1KzbQBvbT1RXrhCrK.jpg", "小米水质TDS检测笔", "准确检测家中水质纯度", "39元")
		),
		
		
//		搭配
		new Array(/*热门*/
			new Array("", "", "", ""),
			new Array("http://i1.mifile.cn/a1/T1omEQB4dT1RXrhCrK!220x220.jpg", "小米随身风扇", "19.9元", "3万人评价"),
			new Array("http://i1.mifile.cn/a1/T1kiLgBQAT1RXrhCrK!220x220.jpg", "安全家居套装", "209元", "227.9元"),
			new Array("http://i1.mifile.cn/a1/T1WTEvBmKT1RXrhCrK!220x220.jpg", "小米蓝牙手柄", "99元", "8780人评价"),
			new Array("http://i1.mifile.cn/a1/T1pZbvBTET1RXrhCrK!220x220.jpg", "小米移动电源5000mAh", "49元", "5.5万人评价"),
			new Array("", "", "", ""),
			new Array("http://i1.mifile.cn/a1/T1vsDvBXhv1RXrhCrK!220x220.jpg", "小米活塞耳机青春版", "49元", "3.5元人评价"),
			new Array("http://i1.mifile.cn/a1/T1gCJgB_dT1RXrhCrK!220x220.jpg", "小钢炮蓝牙音箱", "129元", "7万人评价"),
			new Array("http://i1.mifile.cn/a1/T18hYgB4DT1RXrhCrK!220x220.jpg", "小米自拍杆", "49元", "2.4万人评价"),
			new Array("http://i1.mifile.cn/a1/T1ipAvB_ZT1RXrhCrK!220x220.jpg", "原装快充套装", "59元", ""),
			new Array("", "", "", "热门")
		),
		new Array(/*耳机音箱*/
			new Array("", "", "", ""),
			new Array("http://i1.mifile.cn/a1/T1GQATBQbT1RXrhCrK!220x220.jpg", "小米头戴式耳机", "499元", "2801人评价"),
			new Array("http://i1.mifile.cn/a1/T1o0h_B5VT1RXrhCrK!220x220.jpg", "小米活塞耳机标准版", "99元", "5.4万人评价"),
			new Array("http://i1.mifile.cn/a1/T1kQC_BKWT1RXrhCrK!220x220.jpg", "小米蓝牙耳机", "79元", "8746人评价"),
			new Array("http://i1.mifile.cn/a1/T1vsDvBXhv1RXrhCrK!220x220.jpg", "小米活塞耳机青春版", "49元", "3.5元人评价"),
			new Array("", "", "", ""),
			new Array("http://i1.mifile.cn/a1/T1jEdgBTDT1RXrhCrK!220x220.jpg", "1MORE金澈耳机", "99元", "3237人评价"),
			new Array("http://i1.mifile.cn/a1/T1A.A_BKYT1RXrhCrK!220x220.jpg", "小米方盒子蓝牙音箱", "99元", "6843人评价"),
			new Array("http://i1.mifile.cn/a1/T1gCJgB_dT1RXrhCrK!220x220.jpg", "小钢炮蓝牙音箱", "129元", "7万人评价"),
			new Array("http://i1.mifile.cn/a1/T15RxTBbWT1RXrhCrK!220x220.jpg", "铁三角耳机", "118元", ""),
			new Array("", "", "", "耳机音箱")
		),
		new Array(/*电源*/
			new Array("", "", "", ""),
			new Array("http://i1.mifile.cn/a1/T1ggWQBybT1RXrhCrK!220x220.jpg", "小米移动电源1WmAh", "69元", "4.8万人评价"),
			new Array("http://i1.mifile.cn/a1/T1pOWvBKET1RXrhCrK!220x220.jpg", "小米移动电源1.6WmAh", "129元", "7.4万人评价"),
			new Array("http://i1.mifile.cn/a1/T1pZbvBTET1RXrhCrK!220x220.jpg", "小米移动电源5000mAh", "49元", "5.5万人评价"),
			new Array("http://i1.mifile.cn/a1/T1v7__BCCT1RXrhCrK!220x220.jpg", "ZMI移动电源1WmAh", "99元", "1379人评价"),
			new Array("", "", "", ""),
			new Array("http://i1.mifile.cn/a1/T1fVYvBbxT1RXrhCrK!220x220.jpg", "ZMI随身路由器", "229元", "234人评价"),
			new Array("http://i1.mifile.cn/a1/T1jcEgB4AT1RXrhCrK!220x220.jpg", "小米插线板", "49元", "8万人评价"),
			new Array("http://i1.mifile.cn/a1/T1PxJvBCAT1RXrhCrK!220x220.jpg", "小米智能插座", "59元", "2.4万人评价"),
			new Array("http://i1.mifile.cn/a1/T1ipAvB_ZT1RXrhCrK!220x220.jpg", "原装快充套装", "59元", ""),
			new Array("", "", "", "电源")
		),
		new Array(/*存储卡*/
			new Array("", "", "", ""),
			new Array("http://i1.mifile.cn/a1/T1GQATBQbT1RXrhCrK!220x220.jpg", "小米头戴式耳机", "499元", "2801人评价"),
			new Array("http://i1.mifile.cn/a1/T1o0h_B5VT1RXrhCrK!220x220.jpg", "小米活塞耳机标准版", "99元", "5.4万人评价"),
			new Array("http://i1.mifile.cn/a1/T1kQC_BKWT1RXrhCrK!220x220.jpg", "小米蓝牙耳机", "79元", "8746人评价"),
			new Array("http://i1.mifile.cn/a1/T1vsDvBXhv1RXrhCrK!220x220.jpg", "小米活塞耳机青春版", "49元", "3.5元人评价"),
			new Array("", "", "", ""),
			new Array("http://i1.mifile.cn/a1/T1jEdgBTDT1RXrhCrK!220x220.jpg", "1MORE金澈耳机", "99元", "3237人评价"),
			new Array("http://i1.mifile.cn/a1/T1A.A_BKYT1RXrhCrK!220x220.jpg", "小米方盒子蓝牙音箱", "99元", "6843人评价"),
			new Array("http://i1.mifile.cn/a1/T1gCJgB_dT1RXrhCrK!220x220.jpg", "小钢炮蓝牙音箱", "129元", "7万人评价"),
			new Array("http://i1.mifile.cn/a1/T15RxTBbWT1RXrhCrK!220x220.jpg", "铁三角耳机", "118元", ""),
			new Array("", "", "", "存储卡")
		)
	)
//	智能硬件数据加载
	function add_floor1_goods() {
		var floor_1 = $("#floor_1 .floor_goods_wrap_li");//所有的1楼li
		floor_1.each(function(i) {
			$(this).find(".floor_goods_img img").attr("src", floor_con[0][i][0]);
					/*图片路径为大数组floor_con下，
					的第[0]一个元素，第一个元素里面的第i个li,li下面的[0]个元素*/
			$(this).find(".floor_goods_tit").html(floor_con[0][i][1]);
			$(this).find(".floor_goods_txt").html(floor_con[0][i][2]);
			$(this).find(".floor_goods_price").html(floor_con[0][i][3]);
		})
	}
	add_floor1_goods();

	
//	搭配数据加载
	var floor_array = "1"//下标为1的数组数据
	function change_floor_goods() { //通过调取不同的数组数据，改变内容，得到常规的TAB页效果
		var floor_2 = $("#floor_2 .floor_goods_wrap_li");
		floor_2.each(function(i) {
			$(this).find(".floor_goods_img img").attr("src", floor_con[floor_array][i][0]);
			$(this).find(".floor_goods_tit").html(floor_con[floor_array][i][1]);
			$(this).find(".floor_goods_price").html(floor_con[floor_array][i][2]);
			$(this).find(".floor_goods_txt").html(floor_con[floor_array][i][3]);
		})
	}
	change_floor_goods();
	
//	选项卡移入事件
	$("#floor_1_list ul li").on("mouseover", function() {
		floor_array = $(this).index() + 1;
		change_floor_goods();//调用数据加载函数
	})
	
	
//	视频链接数据
	var vido_con = new Array(
		new Array("红米Note 2 青春首选", "http://player.youku.com/player.php/sid/XMTMwODUxNzAwMA==/v.swf"),
		new Array("MIUI7 性能极速体验", "http://player.youku.com/player.php/sid/XMTMwODQ0NTY5Ng==/v.swf"),
		new Array("60秒看懂小米Note有多酷", "http://player.youku.com/player.php/sid/XODcyMjA1MTQw/v.swf"),
		new Array("安卓机皇 小米Note顶配版", "http://player.youku.com/player.php/sid/XMTI1NTI5NzM4MA==/v.swf")
	);


//	视频
var vido_w = $("#vido_div").width();//视频层的宽
var window_w = $(window).width();//可视区域的宽
var vido_left = (window_w / 2) - (vido_w / 2);//视频层的left数值
$("#vido_div").css("left", vido_left); //设置视频层的初始水平位置


function vido_div_position() { //设置视频层显示时相对窗口正中
	var vido_w = $("#vido_div").width();
	var vido_h = $("#vido_div").height();
	var window_w = $(window).width();
	var window_h = $(window).height();
	var vido_left = (window_w / 2) - (vido_w / 2);
	var vido_top = (window_h / 2) - (vido_h / 2);
	$("#vido_div").animate({
		left: vido_left,
		top: vido_top
	}, 500);
}

$(window).resize(function() { //窗口大小变化时，视频层位置
	vido_div_position();
});
	
$(".vido_wrap").on("click", function(e) { //打开视频
	var i = $(this).index();//设置自定义变量
//	embed既可以当做视频标签也可以当做音频标签,里面src里面放什么资源就返回什么效果
	var vido_src = "<embed src='" + vido_con[i][1] + "'allowFullScreen='true' quality='high' width='907' height='550' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>";
	$("#vido_src").html(vido_src);//vido_src 是弹窗中放视频的div
	$("#body_mask").show();//遮罩层
	$("#vido_div").css("opacity", "1");//视频弹窗
	vido_div_position();//调用位置函数
	e.stopPropagation();//阻止浏览器默认事件
});
	

$("#close_vido_div").on("click", function() { //关闭视频
	$("#body_mask").hide();//遮罩层
	$("#vido_div").animate({
		"opacity": "0",
		"top": "-100%"
	}, 500, function() {
		$("#vido_src").html("");
	});
});
})