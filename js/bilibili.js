

$(".contianer-before-gamecenter").hover(function(){  
	$(".detail-gamecentry").show();  
},function(){  
	$(".detail-gamecentry").hide();  
}) ;
$(".detail-gamecentry").hover(function(){  
	$(".detail-gamecentry").show();  
},function(){  
	$(".detail-gamecentry").hide(); 
}) ;

ppt.onclick = function function_name(argument) {
	window.open("ppt.html");
}



$(".contianer-before-live").hover(function(){  
	$(".detail-live").show();  
},function(){  
	$(".detail-live").hide();  
}) ;
$(".detail-live").hover(function(){  
	$(".detail-live").show();  
},function(){  
	$(".detail-live").hide();  
}) ;


$(".contianer-before-mobile").hover(function(){  
	$(".detail-mobile").show();  
},function(){  
	$(".detail-mobile").hide();  
}) ;
$(".detail-mobile").hover(function(){  
	$(".detail-mobile").show();  
},function(){  
	$(".detail-mobile").hide();  
}) ;


var nowpos=0;
$(".contianer-after-account").hover(function(){
	nowpos=1;
	setTimeout("showface();",300);
},function(e){ 
	if( e.pageY<42){
		hideface();
		nowpos=0;
	}
}) ;


$(".detail-face").hover(function(){ 
	nowpos=1;
},function(e){ 
	var posx= $(".detail-face").offset().left;
	if(e.pageX<posx+90||e.pageX>posx+165||e.pageY>200)
	{
		hideface();
		nowpos=0;
	}
}) ;

function showface(e){
	if(nowpos==1){
		if($(".account-face").css("width")=="36px"){
			$(".detail-face").slideToggle ('fast');	
			$(".account-face").animate({
				marginTop:'+=10px',marginLeft:'-=16px',
				height:'+=32px',width:'+=32px'
			},200);
		}
	}
};

function hideface(){ 
	if($(".account-face").css("width")=="68px"){
		$(".detail-face").slideToggle ('fast');
		$(".account-face").animate({
			marginTop:'-=10px',marginLeft:'+=16px',
			height:'-=32px',width:'-=32px'
		},200);	

	}
};



function preLoadImg(url) { 
	var img = new Image(); 
	img.src = url; 
} ;


$(".game-list-item").hover(function(e){  
	var data_pic= $(e.target).children().attr("data-src");
	$(e.target).css("background-color", "#e5e9ef");
	$(".divimg").show();
	$(".divimg").attr('src', data_pic);
},function(e){  
	$(e.target).css("background-color", "white");
	$(".divimg").hide();
}) ;




$(".live-face").hover(function(e){  
	$(e.target).parent().children("i.live-animat").show(); 
},function(e){  
	$(e.target).parent().children("i.live-animat").hide(); 
}) ;

$(".live-animat").hover(function(e){  
	$(e.target).show(); 
},function(e){  
	$(e.target).hide(); 
}) ;




$(document).ready(function() {
	for(var index=1;index!=14;index++){
		let key=index.toString();
		let Mtarget=".menu-title-"+key;
		let Ltarget=".list-detail-"+key;
		console.log(".menu-title-"+key);
		$(Mtarget).mouseover (function(e){
			$(Ltarget).show();
		});
		$(Mtarget).mouseleave  (function(e){

			var posx= $(Mtarget).offset().left;
			if(e.pageY<235) $(Ltarget).hide();
			if(e.pageX<=posx) $(Ltarget).hide();
		});
		$(Ltarget).mouseleave  (function(e){
			var posx= $(Ltarget).offset().left;
			var posy= $(Ltarget).offset().top;
			if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(Ltarget).hide();
		});

	}
});


$(".left-message-btn1").click(function(e){
	clearInterval(timer);
	timer = setInterval(function(){
		$(".left-message-btn1").click();
	},3000);
	var len= $(".left-message-text li").length;
	var now;
	for(var index=0;index<len;index++)
	{
		if($(".left-message-text li").eq(index).css("display")=="block")
			now=index;
	}
	$(".left-message-text li").eq((now)%len).css("display","none");	
	$(".left-message-text li").eq((now)%len).css("marginLeft","-400px");
	$(".left-message-text li").eq((now+4)%len).css("marginLeft","-400px");
	$(".left-message-text li").eq((now+4)%len).css("display","block");
	$(".left-message-text li").eq((now+4)%len).animate({
		marginLeft:'+=400px'
	},200);
});
$(".left-message-btn2").click(function(e){
	clearInterval(timer);
	timer = setInterval(function(){
		$(".left-message-btn2").click();
	},3000);
	var len= $(".left-message-text li").length;
	var now;
	for(var index=0;index<len;index++)
	{
		if($(".left-message-text li").eq(index).css("display")=="block")
			now=index;
	}
	$(".left-message-text li").eq((now)%len).css("display","none");	
	$(".left-message-text li").eq((now)%len).css("marginLeft","400px");
	$(".left-message-text li").eq((now+1)%len).css("marginLeft","400px");
	$(".left-message-text li").eq((now+1)%len).css("display","block");
	$(".left-message-text li").eq((now+1)%len).animate({
		marginLeft:'-=400px'
	},200);
});




function menu_detaul_hide(){
	$(".menu-detail-danmu").hide();
	$(".menu-detail-setting").hide();		
	$(".menu-detail-video").hide();
	$(".menu-other-video").css("border-color","white");	
	$(".menu-stop-setting").css("border-color","white");	
	$(".menu-danmu-list").css("border-color","white");	
	$(".menu-other-video").css("color","black");	
	$(".menu-stop-setting").css("color","black");	
	$(".menu-danmu-list").css("color","black");	
}







$(".menu-danmu-list").click(function(e){
	menu_detaul_hide();
	$(".menu-detail-danmu").show();	
	$(".menu-danmu-list").css("border-color","#00a1d6");	
	$(".menu-danmu-list").css("color","#00a1d6");

});
$(".menu-stop-setting").click(function(e){
	menu_detaul_hide();
	$(".menu-detail-setting").show();
	$(".menu-stop-setting").css("border-color","#00a1d6");
	$(".menu-stop-setting").css("color","#00a1d6");
});
$(".menu-other-video").click(function(e){
	menu_detaul_hide();
	$(".menu-detail-video").show();	
	$(".menu-other-video").css("border-color","#00a1d6");
	$(".menu-other-video").css("color","#00a1d6");
});


$(".third-1").hover(function(e){  
	$(e.target).attr("src","img/weibo1.png");  
},function(e){  
	$(e.target).attr("src","img/weibo.png");  
}) ;
$(".third-2").hover(function(e){  
	$(e.target).attr("src","img/qq1.png");  
},function(e){  
	$(e.target).attr("src","img/qq.png");  
}) ;
$(".third-3").hover(function(e){  
	$(e.target).attr("src","img/kongjian1.png");  
},function(e){  
	$(e.target).attr("src","img/kongjian.png");  
}) ;


var play_flag=0;
var timer1 = setInterval(function(){
	var now_time=$("video")[0].currentTime;
	var totle_time=$("video")[0].duration;
	var x= now_time/totle_time*100;
	if(100==x){
		play_stop();
		var len=$(".detail-danmu-content").children().length;
		for(var index=0;index!=len;index++){
			$(".detail-danmu-content").children().eq(index).attr("data-flag","0");
		}
	}
	x=x.toString();
	$('.con-pro-totle-before').css("margin-left",x+"%")
	$('.con-pro-now').css("width",x+"%")
	var min= Math.floor(now_time/60);min=min.toString();
	var sec= Math.floor(now_time%60);sec=sec.toString();
	if(1==min.length)min="0"+min;
	if(1==sec.length)sec="0"+sec;

	var len=$(".detail-danmu-content").children().length;
	if(1==play_flag){
		for(var index=0;index!=len;index++){
			var danmu_sec=$(".detail-danmu-content").children().eq(index).attr("data-sec");
			var danmu_min=$(".detail-danmu-content").children().eq(index).attr("data-min");
			var danmu_flag=$(".detail-danmu-content").children().eq(index).attr("data-flag");
			var danmu_text=$(".detail-danmu-content").children().eq(index).attr("data-text");
			if(min==danmu_min && sec==danmu_sec && 0==danmu_flag){
				console.log(danmu_text);
				$(".detail-danmu-content").children().eq(index).attr("data-flag","1");

				var top=Math.random()*400;
				$(".player-left-video").append('<div class = "danmu-anim" style="top:'+top+'px;">'+danmu_text+'</div>');
				var now_index = $(".player-left-video").children().length/2;
				danmu_animate(now_index);			
			}
		}
	}
	$(".now-time").text(function(){
		return  min+":"+sec+'/' ;
	});
},50);



function danmu_animate(index){
	var time=5000+Math.random()*5000; 	
	$(".player-left-video").children().eq(index).animate({left:'-1000px'},time,'linear');	
	console.log("index="+index);
}


$(".left-con-play").click(function(){
	if(0==play_flag){
		$(".left-con-play img").attr("src","img/con-stop.png");  
		$("video")[0].play();
		var totle_time=$("video")[0].duration;totle_time=Math.floor(totle_time);
		var min= Math.floor(totle_time/60);min=min.toString();
		var sec= Math.floor(totle_time%60);sec=sec.toString();
		if(min.length==1)min="0"+min;
		if(sec.length==1)sec="0"+sec;
		$(".totle-time").text(function(){
			return  min+":"+sec ;
		});
		$(".left-video-play").hide();
		play_flag=1;
	}
	else {
		play_stop();
	}
});

$(".left-video-play").click(function(){
	$(".left-con-play img").attr("src","img/con-stop.png");  
	$("video")[0].play();
	var totle_time=$("video")[0].duration;totle_time=Math.floor(totle_time);
	var min= Math.floor(totle_time/60);min=min.toString();
	var sec= Math.floor(totle_time%60);sec=sec.toString();
	if(1==min.length)min="0"+min;
	if(1==sec.length)sec="0"+sec;
	$(".totle-time").text(function(){
		return  min+":"+sec ;
	});
	$(".left-video-play").hide();	
	play_flag=1;
});


$("video").click(function(){
	if(0==play_flag){
		$(".left-con-play img").attr("src","img/con-stop.png");  
		$("video")[0].play();
		var totle_time=$("video")[0].duration;totle_time=Math.floor(totle_time);
		var min= Math.floor(totle_time/60);min=min.toString();
		var sec= Math.floor(totle_time%60);sec=sec.toString();
		if(1==min.length)min="0"+min;
		if(1==sec.length)sec="0"+sec;
		$(".totle-time").text(function(){
			return  min+":"+sec ;
		});
		$(".left-video-play").hide();
		play_flag=1;
	}
	else {
		play_stop();
	}
});


function play_stop(){
	$(".player-left-video").children().remove(".danmu-anim");
	$(".left-con-play img").attr("src","img/con-play.png");  
	$("video").trigger('pause');
	$(".left-video-play").show();
	play_flag=0;	
}

var show_flag=0;
$(".share-content-link").hover(function(){
	if(0==show_flag)$(".content-link-share").slideToggle ('fast');	
	show_flag=1;
},function(e){ 
	var posy = $(".content-link-share").offset().top;
	if( e.pageY<posy){
		$(".content-link-share").slideToggle ('fast');
		show_flag=0;console.log(1);
	}
}) ;


$(".content-link-share").hover(function(){ 
	pos_flag = 1;
},function(e){ 
	var posx = $(".content-link-share").offset().left;
	var posy = $(".content-link-share").offset().top;
	if(e.pageX<posx||e.pageX>posx+355||e.pageY>posy)
	{
		$(".content-link-share").slideToggle ('fast');
		show_flag=0;console.log(2);
	}
}) ;



$(".forum-live-pic").hover(function(){ 
	$(".live-animat-big").show();
},function(e){ 
	$(".live-animat-big").hide();
}) ;





$(".video-recommend-list").hover(function(){ 
	$(".recommend-btn").show();
},function(e){ 
	$(".recommend-btn").hide();
}) ;
$(".recommend-btn").hover(function(){ 
	$(".recommend-btn").show();
},function(e){ 
	$(".recommend-btn").hide();
}) ;



$(".recommend-right").click(function(){
	var len= $(".recommend-list-content").length;
	console.log(len);
	var now;
	for( var index=0;index!=len;index++){
		if($(".recommend-list-content").eq(index).css("display")=="block")
			now=index;
	}
	$(".recommend-list-content").eq(now).hide();now=now+1;now=now%len;
	$(".recommend-list-content").eq(now).show();
});
$(".recommend-left").click(function(){
	var len= $(".recommend-list-content").length;
	console.log(len);
	var now;
	for( var index=0;index!=len;index++){
		if($(".recommend-list-content").eq(index).css("display")=="block")
			now=index;
	}
	$(".recommend-list-content").eq(now).hide();now=now+len-1;now=now%len;
	$(".recommend-list-content").eq(now).show();
});



$(".menu-stop-setting").css("border-color","#00a1d6");
$(".menu-stop-setting").css("color","#00a1d6");	
var timer = setInterval(function(){
	$(".left-message-btn1").click();
},3000);
preLoadImg("img/game_list/divimg-1.png");
preLoadImg("img/game_list/divimg-2.png");
preLoadImg("img/game_list/divimg-3.png");
preLoadImg("img/game_list/divimg-4.png");
preLoadImg("img/game_list/divimg-5.png");
preLoadImg("img/game_list/divimg-6.png");
preLoadImg("img/game_list/divimg-7.png");


