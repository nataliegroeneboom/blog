(function($){

	Drupal.behaviors.apprentice = {
		attach:function(context, settings){





		//	$(".topics-covered.zebra-odd").addClass("col-md-4");
		//	$(".topics-covered.zebra-even").addClass("col-md-4");
			$("#block-apprentice-main-menu").addClass("navbar");
			$('.view-topics-covered .view-content>div').addClass('topic');
			$('.view-topics-covered .view-content>div:first-child').addClass('first-topic');
			$('.collapse').collapse();

				if($('.layout-sidebar').find('.view-content')){
					$('.layout-sidebar').addClass('checking');
				}



function navBar(){
	var collapse = document.getElementById("block-apprentice-main-menu");

	 if(collapse.className === "navbar"){
		 	collapse.className += " responsive";
	 }else{
		 collapse.className === "navbar";
	 }

}


	$(".navbar > .main-menu").once().append('<li class="icon"><a href="javascript:void(0);" ><i class="fa fa-bars"></i></a></li>');



$('.icon').once().click(function(){
	$('.main-menu').toggleClass('responsive');
	$('.layout-container').toggleClass('responsive');

})









} //end of drupal jquery



	}


})(jQuery);
