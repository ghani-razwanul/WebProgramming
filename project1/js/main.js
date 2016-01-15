$(document).ready(function() {
 
  $(".our_team").owlCarousel({
      items:4,
      theme:"team_slider_theme",
      navigation:true,
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  });
    $('.our_work').mixItUp({
        animation:{
            enable:true,
            effects: 'fade rotateY(-100deg)'
        }
    });
    $(".clients").owlCarousel({
      items:5,
      theme:"clients_slider_theme",
  });
     $(".our_service").owlCarousel({
      items:4,
      theme:"service_slider_theme",
      navigation:true,
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
 });
    jQuery('.about_us_area').addClass("hidden_animate").viewportChecker({
	    classToAdd: 'visible_animate animated fadeIn', // Class to add to the elements when they are visible
	    offset: 100    
	   });   
    jQuery('.about_img').addClass("hidden_animate").viewportChecker({
	    classToAdd: 'visible_animate animated bounceInDown', // Class to add to the elements when they are visible
	    offset: 100    
	   }); 
    jQuery('.about_text').addClass("hidden_animate").viewportChecker({
	    classToAdd: 'visible_animate animated bounceInDown', // Class to add to the elements when they are visible
	    offset: 100    
	   });  
    jQuery('.section_title').addClass("hidden_animate").viewportChecker({
	    classToAdd: 'visible_animate animated bounceInDown', // Class to add to the elements when they are visible
	    offset: 100    
	   });
     jQuery('.animate_left').addClass("hidden_animate").viewportChecker({
	    classToAdd: 'visible_animate animated bounceInLeft', // Class to add to the elements when they are visible
	    offset: 100    
	   });  
     jQuery('.animate_right').addClass("hidden_animate").viewportChecker({
	    classToAdd: 'visible_animate animated bounceInRight', // Class to add to the elements when they are visible
	    offset: 100    
	   }); 
     jQuery('.clients').addClass("hidden_animate").viewportChecker({
	    classToAdd: 'visible_animate animated fadeIn', // Class to add to the elements when they are visible
	    offset: 100    
	   }); 
     jQuery('.our_work').addClass("hidden_animate").viewportChecker({
	    classToAdd: 'visible_animate animated fadeIn', // Class to add to the elements when they are visible
	    offset: 100    
	   }); 
}); 

