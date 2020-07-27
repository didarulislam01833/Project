

	
		/** JQuery Start  */


$(document).ready(function(){
	
	/**== Menubar Start == */
	$('#mobile-icon').click(function(){
		$('#main-menu ul').sliderToggle(1000);
		
	});	
	$('window').resize(function(){
		if($(window).width()>576){
			$('#main-menu ul').show();
		}
	});			
	/** Upper Button Scroll Start */
$(window).scroll(function(){
	var x = $(window).scrollTop();
	
		if(x>1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
		
		});
	$('#upper').click(function(){
		$('html').animate({scrollTop:0},2000); 
		
		
	});
	
});