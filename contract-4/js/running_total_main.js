

$(document).ready(function($){
    
    org.running.close_date_1 = org.util.get_date($("#close_date_1").val());
    org.running.close_date_2 = org.util.get_date($("#close_date_2").val());
    
    // First, check the default values, and update accordingly
    var select_1 = $(this).find("option:selected").val(),
        select_2 = $("select[name='select1_2']").find("option:selected").val();
    
    org.running.logic(select_1, select_2);
    org.running.update_view($, $("#mytotal"));
    
    // Update if the select drop-down is changed
    $("select[name='select1_1']").live('change', function(){
        var select_1 = $(this).find("option:selected").val(),
            select_2 = $("select[name='select1_2']").find("option:selected").val();
        
        org.running.logic(select_1, select_2);
        org.running.update_view($, $("#mytotal"));
    });
    
    // Update if the radio button is changed
    $("select[name='select1_2']").live('change', function(){
        var select_1 = $("select[name='select1_2']").find("option:selected").val(),
            select_2 = $(this).find("option:selected").val();
        
        org.running.logic(select_1, select_2);
        org.running.update_view($, $("#mytotal"));
    });
    
    var origin_y = parseInt($("#runningtotal").css("top"), 10);

    $(window).bind('scroll', function(){
        var scroll_y = parseInt($(this).scrollTop(), 10);
        var form_y   = parseInt($("#form_info").offset().top);

        var diff = scroll_y - form_y;
        
        if(diff >= 0){
            $("#runningtotal").css("top", diff  + "px");
        }
        
    });
    

});


