(function($){

	Drupal.behaviors.myModuleBehavior = {
		attach:function(context, settings){


			$(".topics-covered.zebra-odd").addClass("col-md-4");
			$(".topics-covered.zebra-even").addClass("col-md-4");
			$("#block-apprentice-main-menu").addClass("navbar");




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
