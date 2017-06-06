

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

	if(nowpos==1)
	if($(".account-face").css("width")=="36px"){
	$(".detail-face").slideToggle ('fast');	
		$(".account-face").animate({
			marginTop:'+=10px',marginLeft:'-=16px',
			height:'+=32px',width:'+=32px'
		},200);
	}

}

function hideface(){ 
	if($(".account-face").css("width")=="68px"){
		$(".detail-face").slideToggle ('fast');
		$(".account-face").animate({
			marginTop:'-=10px',marginLeft:'+=16px',
			height:'-=32px',width:'-=32px'
		},200);	

	}
}



function preLoadImg(url) { 
	var img = new Image(); 
	img.src = url; 
} 
preLoadImg("img/divimg-1.png");
preLoadImg("img/divimg-2.png");
preLoadImg("img/divimg-3.png");
preLoadImg("img/divimg-4.png");
preLoadImg("img/divimg-5.png");
preLoadImg("img/divimg-6.png");
preLoadImg("img/divimg-7.png");

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


$(".find-pic").hover(function(e){  
	$(e.target).children("img.find-pic-pos").attr("src","img/find-pic-2.png");  
	$(e.target).children("img.find-pic-pos").css("margin","2px 0px 0px 0px ");  
},function(e){  
	$(e.target).children("img.find-pic-pos").attr("src","img/find-pic-1.png");
	$(e.target).children("img.find-pic-pos").css("margin","0px 0px 0px 0px ");   

}) ;




$(".menu-title-1").mouseover (function(e){
	$(".list-detail-1").show();
});
$(".menu-title-1").mouseleave  (function(e){
	var posx= $(".menu-title-1").offset().left;
	if(e.pageY<235)$(".list-detail-1").hide();
	if(e.pageX<=posx)$(".list-detail-1").hide();
});
$(".list-detail-1").mouseleave  (function(e){
	var posx= $(".list-detail-1").offset().left;
	var posy= $(".list-detail-1").offset().top;
	if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(".list-detail-1").hide();
});

$(".menu-title-2").mouseover (function(e){
	$(".list-detail-2").show();
});
$(".menu-title-2").mouseleave  (function(e){
	var posx= $(".menu-title-2").offset().left;
	if(e.pageY<235)$(".list-detail-2").hide();
	if(e.pageX<=posx)$(".list-detail-2").hide();
});
$(".list-detail-2").mouseleave  (function(e){
	var posx= $(".list-detail-2").offset().left;
	var posy= $(".list-detail-2").offset().top;
	if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(".list-detail-2").hide();
});

$(".menu-title-3").mouseover (function(e){
	$(".list-detail-3").show();
});
$(".menu-title-3").mouseleave  (function(e){
	var posx= $(".menu-title-3").offset().left;
	if(e.pageY<235)$(".list-detail-3").hide();
	if(e.pageX<=posx)$(".list-detail-3").hide();
});
$(".list-detail-3").mouseleave  (function(e){
	var posx= $(".list-detail-3").offset().left;
	var posy= $(".list-detail-3").offset().top;
	if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(".list-detail-3").hide();
});

$(".menu-title-4").mouseover (function(e){
	$(".list-detail-4").show();
});
$(".menu-title-4").mouseleave  (function(e){
	var posx= $(".menu-title-4").offset().left;
	if(e.pageY<235)$(".list-detail-4").hide();
	if(e.pageX<=posx)$(".list-detail-4").hide();
});
$(".list-detail-4").mouseleave  (function(e){
	var posx= $(".list-detail-4").offset().left;
	var posy= $(".list-detail-4").offset().top;
	if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(".list-detail-4").hide();
});

$(".menu-title-5").mouseover (function(e){
	$(".list-detail-5").show();
});
$(".menu-title-5").mouseleave  (function(e){
	var posx= $(".menu-title-5").offset().left;
	if(e.pageY<235)$(".list-detail-5").hide();
	if(e.pageX<=posx)$(".list-detail-5").hide();
});
$(".list-detail-5").mouseleave  (function(e){
	var posx= $(".list-detail-5").offset().left;
	var posy= $(".list-detail-5").offset().top;
	if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(".list-detail-5").hide();
});

$(".menu-title-6").mouseover (function(e){
	$(".list-detail-6").show();
});
$(".menu-title-6").mouseleave  (function(e){
	var posx= $(".menu-title-6").offset().left;
	if(e.pageY<235)$(".list-detail-6").hide();
	if(e.pageX<=posx)$(".list-detail-6").hide();
});
$(".list-detail-6").mouseleave  (function(e){
	var posx= $(".list-detail-6").offset().left;
	var posy= $(".list-detail-6").offset().top;
	if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(".list-detail-6").hide();
});

$(".menu-title-7").mouseover (function(e){
	$(".list-detail-7").show();
});
$(".menu-title-7").mouseleave  (function(e){
	var posx= $(".menu-title-7").offset().left;
	if(e.pageY<235)$(".list-detail-7").hide();
	if(e.pageX<=posx)$(".list-detail-7").hide();
});
$(".list-detail-7").mouseleave  (function(e){
	var posx= $(".list-detail-7").offset().left;
	var posy= $(".list-detail-7").offset().top;
	if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(".list-detail-7").hide();
});

$(".menu-title-8").mouseover (function(e){
	$(".list-detail-8").show();
});
$(".menu-title-8").mouseleave  (function(e){
	var posx= $(".menu-title-8").offset().left;
	if(e.pageY<235)$(".list-detail-8").hide();
	if(e.pageX<=posx)$(".list-detail-8").hide();
});
$(".list-detail-8").mouseleave  (function(e){
	var posx= $(".list-detail-8").offset().left;
	var posy= $(".list-detail-8").offset().top;
	if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(".list-detail-8").hide();
});

$(".menu-title-9").mouseover (function(e){
	$(".list-detail-9").show();
	console.log("ENTER");
});
$(".menu-title-9").mouseleave  (function(e){
	var posx= $(".menu-title-9").offset().left;
	if(e.pageY<235)$(".list-detail-9").hide();
	if(e.pageX<=posx)$(".list-detail-9").hide();
	console.log("LEAVE   "+e.pageX+","+e.pageY);
});	
$(".list-detail-9").mouseleave  (function(e){
	var posx= $(".list-detail-9").offset().left;
	var posy= $(".list-detail-9").offset().top;
	if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(".list-detail-9").hide();
	console.log(posx+",,,,,"+posy);
});

$(".menu-title-10").mouseover (function(e){
	$(".list-detail-10").show();
});
$(".menu-title-10").mouseleave  (function(e){
	var posx= $(".menu-title-10").offset().left;
	if(e.pageY<235)$(".list-detail-10").hide();
	if(e.pageX<=posx)$(".list-detail-10").hide();
});
$(".list-detail-10").mouseleave  (function(e){
	var posx= $(".list-detail-10").offset().left;
	var posy= $(".list-detail-10").offset().top;
	if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(".list-detail-10").hide();
});

$(".menu-title-12").mouseover (function(e){
	$(".list-detail-12").show();
});
$(".menu-title-12").mouseleave  (function(e){
	var posx= $(".menu-title-12").offset().left;
	if(e.pageY<235)$(".list-detail-12").hide();
	if(e.pageX<=posx)$(".list-detail-12").hide();
});
$(".list-detail-12").mouseleave  (function(e){
	var posx= $(".list-detail-12").offset().left;
	var posy= $(".list-detail-12").offset().top;
	if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(".list-detail-12").hide();
});

$(".menu-title-13").mouseover (function(e){
	$(".list-detail-13").show();
});
$(".menu-title-13").mouseleave  (function(e){
	var posx= $(".menu-title-13").offset().left;
	if(e.pageY<235)$(".list-detail-13").hide();
	if(e.pageX<=posx)$(".list-detail-13").hide();
});
$(".list-detail-13").mouseleave  (function(e){
	var posx= $(".list-detail-13").offset().left;
	var posy= $(".list-detail-13").offset().top;
	if(e.pageY>=posy||e.pageX<posx||e.pageX>=posx+48)$(".list-detail-13").hide();
});

var timer = setInterval(function(){
$(".left-message-btn1").click();
},3000);

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
	
	
	
$(".menu-stop-setting").css("border-color","#00a1d6");
$(".menu-stop-setting").css("color","#00a1d6");	
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
		if(x==100){
			play_flag=0;	
			$(".left-con-play img").attr("src","img/con-play.png");  
			$(".left-video-play").show();
		}
		x=x.toString();
		$('.con-pro-totle-before').css("margin-left",x+"%")
		$('.con-pro-now').css("width",x+"%")
		var min= Math.floor(now_time/60);min=min.toString();
		var sec= Math.floor(now_time%60);sec=sec.toString();
		if(min.length==1)min="0"+min;
		if(sec.length==1)sec="0"+sec;
		$(".now-time").text(function(){
   			 return  min+":"+sec+'/' ;
 		});
},10);



$(".left-con-play").click(function(){
	if(play_flag==0){
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
		$(".left-con-play img").attr("src","img/con-play.png");  
		$("video").trigger('pause');
		$(".left-video-play").show();
		play_flag=0;
	}
});

$(".left-video-play").click(function(){
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
});


$("video").click(function(){
	if(play_flag==0){
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
		$(".left-con-play img").attr("src","img/con-play.png");  
		$("video").trigger('pause');
		$(".left-video-play").show();
		play_flag=0;
	}
});



var show_flag=0;
$(".share-content-link").hover(function(){
	if(show_flag==0)$(".content-link-share").slideToggle ('fast');	
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
