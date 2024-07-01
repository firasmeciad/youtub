
//نقل التنيسقات بين مختلف العنواين في القائمة العلوية
$(function(){
	$(".nav_01").click(function(){
		$(".nav_02").removeClass("active");
		$(".nav_03").removeClass("active");
		$(".nav_01").addClass("active");
	});
	$(".nav_02").click(function(){
		$(".nav_01").removeClass("active");
		$(".nav_03").removeClass("active");
		$(".nav_02").addClass("active");
	});
	$(".nav_03").click(function(){
		$(".nav_02").removeClass("active");
		$(".nav_01").removeClass("active");
		$(".nav_03").addClass("active");
	});
	$("#toggler").click(function(){
		$(".side_bar").toggleClass("animate");
		
		var show_layer = $(".side_bar").css("right")
		if(show_layer=='-312px')
		{
		  $(".layer").fadeIn(500);
		}
		else
		{
		  $(".layer").fadeOut(500);
	
		}
	
	  });
	$(".search_icon").click(function(){
	   $(".search_show").slideToggle(1000);
	});
	
	   
		
	
	});
	// $("#toogler").click(function(){
	// 	$(".side_bar").fadeIn();
	// })
