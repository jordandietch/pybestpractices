$(function() {

  $('.collapsible-header').click(function(){
  	if($(this).find('h3').hasClass("collapsed")){
   		$(this).find('i').toggleClass("icon-plus");	
   		$(this).find('i').addClass("icon-minus");		
  	} else {
   		$(this).find('i').toggleClass("icon-minus");	
   		$(this).find('i').addClass("icon-plus");	  		
  	}

  });

});