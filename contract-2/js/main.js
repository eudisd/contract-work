

$(document).ready(function($){
    
    org.running.google_analytics();
    
    $(".radio_1").live('change', function(){
        var radio_1  = $(this).val(),
            select_1 = $(".select option:selected").val();
        
        // Possibly do some checks on radio_1 and select_1
        // before passing it in...
        
        org.running.logic(radio_1, select_1);
    })
    
    
});


