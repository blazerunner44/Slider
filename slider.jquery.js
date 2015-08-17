$.fn.slider = function(){
	function transition(current,next){
		// alert('current is: ' + current);
		// alert('next is:' + next);
		container.children('div.slide').eq(current).hide().css('left', '100%');
		container.children('div.slide').eq(next).show().animate({left: '0'});
	}
	//Define container
	var container = this;
	//Set min height
	container.css('min-height', '300px');
	container.find('.slide').hide();
	container.find('.slide:nth-of-type(1)').show();
	container.append('<div class="forward arrow"> > </div>');
	container.prepend('<div class="backward arrow"> < </div>');
	container.children('.slide').eq(0).css('left', '0');


	// calculate top margin of arrows for vertical center
	$('.arrow').css('margin-top', container.height()/2-100);

	//process arrow click
	var slide = 0;
	var length = container.children('div.slide').length-1;

	$('.forward').click(function(){
		//If only one slide, dont transition
		if(length == 0){
			return;
		}
		if(slide >= length){
			transition(slide, 0);
			slide = 0;
		}else{
			transition(slide, slide+1);
			slide += 1;
		}
	});

	$('.backward').click(function(){
		//If only one slide, don't transition
		if(length == 0){
			return;
		}
		if(slide <= 0){
			transition(slide, length);
			slide = length;
		}else{
			transition(slide, slide-1);
			slide -= 1;
		}
	});

	//Bind left and right keys
	$(document).keydown(function(e) {
	    switch(e.which) {
	        case 37: // left
	        	$('.backward').trigger('click');
	        break;

	        case 39: // right
	        	$('.forward').trigger('click');
	        break;

	        default: return; // exit this handler for other keys
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});
}