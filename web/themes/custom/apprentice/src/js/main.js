(function($){

	Drupal.behaviors.apprentice = {
		attach:function(context, settings){





		//	$(".topics-covered.zebra-odd").addClass("col-md-4");
		//	$(".topics-covered.zebra-even").addClass("col-md-4");
			$("#block-apprentice-main-menu").addClass("navbar");
			$('.view-topics-covered .view-content>div').addClass('topic');
			$('.view-topics-covered .view-content>div:first-child').addClass('first-topic');

				if($('.layout-sidebar').find('.view-content')){
					$('.layout-sidebar').addClass('checking');
				}

	











} //end of drupal jquery



	}


})(jQuery);
