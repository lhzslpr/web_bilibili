

$(".bigpic").click(function(e){
		$(".bigpic").fadeOut();
		console.log(1);
});
$(".smlpic").click(function (e) {
	$(".bigpic").attr("src",e.target.src);
	$(".bigpic").fadeIn();
});








$(".sel").click(function(e){
	 $(".sel").css("background-color", "white");
	 $(e.target).css("background-color", "grey");
	 var IN = $(e.target).index();
	 console.log(IN);
	 $(".text").fadeOut();
	 $(".text").eq(IN-1).fadeIn();
});


$(".text").eq(0).fadeIn();
$(".sel").eq(0).css("background-color", "grey");









var len=1;
$(".item-detele").bind("click", detele);
$(".add").click(function(e){
	if(len<15)
	{
		$(".contianer-2-son").append('<div class = "item"> <div class = "item-num">1</div><div class = "item-text"></div><div class = "item-detele">Delete</div></div>');
		$(".item-detele").bind("click", detele);
		order_change();
	}
	else 
	{
		alert(添加超限);
	}

});

function detele(e){
	$(e.target).parent().remove();
	order_change();
}
function order_change(){
	len=$(".contianer-2-son").children().length;
	for(var index=0;index<len;index++){
		$(".item").eq(index).find(".item-num").text(index+1);
		console.log(len);
	}
}
