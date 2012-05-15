// First, call the google analytics.  Does not require 
// A dom ready handler.
org.running.google_analytics();

$(document).ready(function($){
    
    // Check radio_1 change
    $(".radio_1").live('change', function(){
        console.log("CURRENT_VALUE: "  + $(this).val())
        org.running.logic($(this).val());
    })
    
    
});


