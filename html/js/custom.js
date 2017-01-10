// nav mobile 
$( document ).ready (function() {
	
	
	// show nav 
	$( '.nav-open' ).click(function() {
		$( '.nav-open' ).show( 300 );
		$( '.nav-inner' ).addClass( 'togglemenu' );
	});
	
	// hide nav
	$( '.nav-close' ).click(function(){
		$( '.nav-inner' ).removeClass( 'togglemenu' );
	});
	
	// searchfield 
	$( '.search-icon' ).click(function(){
		$( '.searchfield-outer' ).slideToggle( 'slow' );
	});
	
	// searchfield mobile view
	$( '.search-icon2' ).click(function(){
		$( '.searchfield-outer' ).slideToggle( 'slow' );
	});
	
	
	// form close on close btn
	$( '.formclose-btn' ).click(function(){
		$( '.searchfield-outer' ).slideToggle( 'fast' );
	});
	
	// menu nd search field
	$( '.search-icon2' ).click(function(){
		$( '.nav-inner' ).removeClass( 'togglemenu' );
	});
	
	$( '.nav-open' ).click(function() {
		$( '.searchfield-outer' ).hide( 'fast' );
	});
	
	
	// advocacygroup page tabs
	$('.blog-tabs ul.blogtabs-list li a').click(function(){
		$('.blog-tabs ul.blogtabs-list li a').removeClass("tabs-active2");
		$(this).addClass("tabs-active2");
	});
	
	
	$('.blog-tabs.nationalpage-tabs ul.blogtabs-list li a').click(function(){
		$('.blog-tabs.nationalpage-tabs ul.blogtabs-list li a').removeClass("tabs-active");
		$(this).addClass("tabs-active");
	});
	
});


// scrolltop positions script
	function ScrollToPos(target,act){
		if(target == "#"){
		   $('html,body').animate({ scrollTop: 0 }, 3000);
		  }else{
		   $('html,body').animate({ scrollTop: $(target).offset().top }, 3000);
		}	
	}
	
// jquery ui calander script
	$( function() {
		$( "#datepicker" ).datepicker();
	} );