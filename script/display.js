$(window).load(function(){
$("area").click(function(event){
	event.preventDefault();
	$(".current").removeClass("current");
	var $current = $(this).attr("href");
	$($current).addClass("current");
	var offset = $($current).offset();
	var scrollto = offset.top - 285;
	$('body').animate({scrollTop:scrollto}, 0);
});
});