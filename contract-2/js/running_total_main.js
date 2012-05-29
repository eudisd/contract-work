

$(document).ready(function($){
    
    org.running.close_date_1 = org.util.get_date($("#close_date_1").val());
    org.running.close_date_2 = org.util.get_date($("#close_date_2").val());
    org.running.close_date_3 = org.util.get_date($("#close_date_3").val());
    org.running.close_date_4 = org.util.get_date($("#close_date_4").val());
    
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
    $("input[name='radio_1']").live('change', function(){
        var radio_1  = $(this).val(),
            select_1 = $(".select option:selected").val();
        
        // Possibly do some checks on radio_1 and select_1
        // before passing it in...
        
        org.running.logic(radio_1, select_1);
        org.running.update_view($, $("#mytotal"));
    });
    
    var origin_y = parseInt($("#runningtotal").css("top"), 10);

    $(window).bind('scroll', function(){
        var scroll_y = parseInt($(this).scrollTop(), 10);
        
        $("#runningtotal").css("top", String((origin_y - scroll_y)) + "px");
        if((origin_y - scroll_y) < 0){
            $("#runningtotal").css("top", "0px");
        }
    });
    

});


