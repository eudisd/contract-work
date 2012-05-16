

$(document).ready(function($){
    
    org.running.google_analytics();
    
    // Update if the select drop-down is changed
    $(".select").live('change', function(){
        var select_1 = $(this).find("option:selected").val(),
            radio_1  = $("input[name='radio_1']:checked").val();
        
        // Possibly do some checks on radio_1 and select_1
        // before passing it in...
        
        org.running.logic(radio_1, select_1);
        org.running.update_view($, $("#mytotal"));
    });
    
    // Update if the radio button is changed
    $(".radio_1").live('change', function(){
        var radio_1  = $(this).val(),
            select_1 = $(".select option:selected").val();
        
        // Possibly do some checks on radio_1 and select_1
        // before passing it in...
        
        org.running.logic(radio_1, select_1);
        org.running.update_view($, $("#mytotal"));
    });
    

});


