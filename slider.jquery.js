$.fn.slider = function(){
	function transition(current,next){
		// alert('current is: ' + current);
		// alert('next is:' + next);
		container.children('div.slide').eq(current).hide().css('left', '100%');
		container.children('div.slide').eq(next).show().animate({left: '0'});
	}
	var container = this;
	this.find('.slide').hide();
	this.find('.slide:nth-of-type(1)').show();
	this.append('<div class="forward arrow"> > </div>');
	this.prepend('<div class="backward arrow"> < </div>');
	this.children('.slide').eq(0).css('left', '0');

	// calculate top margin of arrows for vertical center
	$('.arrow').css('margin-top', this.height()/2-100);

	//process arrow click
	var slide = 0;
	var length = this.children('div.slide').length-1;

	$('.forward').click(function(){
		if(slide >= length){
			transition(slide, 0);
			slide = 0;
		}else{
			transition(slide, slide+1);
			slide += 1;
		}
	});

	$('.backward').click(function(){
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