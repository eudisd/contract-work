// First, call the google analytics.  Does not require 
// A dom ready handler.
org.running.google_analytics();

$(document).ready(function($){
    
    // Check radio_1 change
    $(".radio_1").live('change', function(){
        org.running.logic();
    })
    
    
});


