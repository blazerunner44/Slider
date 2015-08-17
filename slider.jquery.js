$.fn.slider = function(){
	function transition(current,next){
		// alert('current is: ' + current);
		// alert('next is:' + next);
		container.children('div.slide').eq(current).hide();
		container.children('div.slide').eq(next).slideDown();
	}
	var container = this;
	this.find('.slide').hide();
	this.find('.slide:nth-of-type(1)').show();
	this.append('<div class="forward arrow"> > </div>');
	this.prepend('<div class="backward arrow"> < </div>');

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
	})
}