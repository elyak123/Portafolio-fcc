$(document).ready(function(){
	console.log("document ready");
	$(".boton-movil").click(function(){
		if ($("li").hasClass("menu-listitem")) {
			console.log("true");
			$(".menu-listitem").slideDown("slow").addClass("menu-listMovil").removeClass("menu-listitem");	
		} else{
			console.log("false");
			$(".menu-listMovil").slideUp("slow").addClass("menu-listitem");
			//$(".menu-listitem").removeClass("menu-listMovil");
		};
		
		console.log("click");
		$(window).on("resize", function () {
    		if ($(window).width() > 500) {
        		$("li").css('display','').removeClass("menu-listMovil");
    		}
		}).resize();
	});

});