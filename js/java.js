var slide_wrp 		= ".side-menu-wrapper"; //Menu Wrapper
var open_button 	= ".menu-open"; //Menu Open Button
var close_button 	= ".menu-close"; //Menu Close Button
var overlay 		= ".menu-overlay"; //Overlay
var checkbox        = "#hamburger";

$(slide_wrp).hide().css( {"right": -$(slide_wrp).outerWidth()+'px'}).delay(50).queue(function(){$(slide_wrp).show()}); 

$(open_button).click(function(e){
	e.preventDefault();
	$(slide_wrp).css( {"right": "0px"});
	setTimeout(function(){
		$(slide_wrp).addClass('active');
	},50);
	$(overlay).css({"opacity":"1", "width":"100%"});

	$('#hamburger').prop('checked', true);
	$('#hamburger1').prop('checked', true);
});

$(close_button).click(function(e){
	e.preventDefault();
	$(slide_wrp).css( {"right": -$(slide_wrp).outerWidth()+'px'});
	setTimeout(function(){
		$(slide_wrp).removeClass('active');
	},50);
	$(overlay).css({"opacity":"0", "width":"0"});
	$('#hamburger').prop('checked', false);
	$('#hamburger1').prop('checked', false);

});

$(document).on('click', function(e) {
	if (!e.target.closest(slide_wrp) && $(slide_wrp).hasClass("active")){
		$(slide_wrp).css( {"right": -$(slide_wrp).outerWidth()+'px'}).removeClass('active');
		$(overlay).css({"opacity":"0", "width":"0"});
		
		$('#hamburger').prop('checked', false);
		$('#hamburger1').prop('checked', false);

	}
});