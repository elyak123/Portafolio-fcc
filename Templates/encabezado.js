function encabezado (){
	$.get('http://elyak123.github.io/Portafolio-fcc/Templates/encabezado.html', function (data){
		$('body').prepend(data);
	});
	$(document).on('click', '.boton-movil', function(){
		if ($("li").hasClass("menu-listitem")) {
			$(".menu-listitem").slideDown("slow").addClass("menu-listMovil").removeClass("menu-listitem");	
		} else{
			$(".menu-listMovil").slideUp("slow").addClass("menu-listitem");
			//$(".menu-listitem").removeClass("menu-listMovil");
		};
		$(window).on("resize", function () {
			if ($(window).width() > 500) {
	    		$("li").css('display','').removeClass("menu-listMovil");
			}
		}).resize();
	});	
}
function footer(){
	$.get('http://elyak123.github.io/Portafolio-fcc/Templates/footer.html', function(data){
		$('body')append(data);
	});
}