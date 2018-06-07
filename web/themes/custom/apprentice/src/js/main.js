(function($){

	Drupal.behaviors.myModuleBehavior = {
		attach:function(context, settings){

	
			$(".topics-covered.zebra-odd").addClass("col-md-4 col-md-offset-2");
			$(".topics-covered.zebra-even").addClass("col-md-4 col-md-offset-1");
			

			$(".blog-grid").mouseover(function() {
         $(this).animate({ backgroundColor:'rgb(0,128,0,0.2)'},1000);
    }).mouseout(function() {
        $(this).animate({ backgroundColor:'rgb(0,128,0,0)'},1000);
    });  

		}			

			

	}


})(jQuery);