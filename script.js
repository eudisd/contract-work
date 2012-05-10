jQuery(document).ready(function($){
    
    var n = 0; // parseInt($("#index").val());
    
    // First, we must fix all the old rows so that they can accept the 
    // validation that is already built in.
    //fix_old_rows($, n);

    if (isNaN(n)){
        alert("The Value of 'index' is not a number! It must be set correctly for it to work! with prepopulated rows!");
        n = 0;
    }
    
    $("#add_btn").on("click", function(){
        append_row($, n);
        n++;
    });
    
    $("#save_btn").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        var res = validate_form($, n);
        if ( res === false ) {
            $("#main_table td input[type='text']").css("border", "2px inset rgb(0, 0, 0)");
            $("#alert").hide();
            $("#main_form").submit();
        } else {
            show_validation_error($, res);
            $("#alert").show();
        }
    });
    
    $(".delete").live('click', function(){
        var n = $(this).attr("name");
        n = Number(n.split("_")[1]);
        
        if ($(this).is(":checked")){
            $("#divnum_0" + n).css("background-color", "red");
        } else {
            $("#divnum_0" + n).css("background-color", "");
        }
        
    });
});

if(typeof(String.prototype.trim) === "undefined") {
    String.prototype.trim = function(){
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

function fix_old_rows($, current_n){
    // Test to see if it's a tbody first
    var c = $("#main_table").children();
    var is_tbody;
    if (c.length > 0){
        is_tbody = (c[0].tagName == "TBODY")? true: false;
    }
    
    if (is_tbody){
        c = c.children();
    } 
    
    // Work with list of tds
    var count = 0;
    for(var i = 0; i < c.length; i++){
        if (c[i].tagName == "TR"){
            if( $(c[i]).attr("class") == "skip") {
                continue;
            } else {
                $(c[i]).attr("name", "trnum_0" + String(count));
                $(c[i]).attr("id", "trnum_0" + String(count));
                $(c[i]).children().last().children().attr("class", "delete");
                $(c[i]).children().last().children().attr("name", "delete_0" + String(count));
                $(c[i]).children().last().children().attr("id", "delete_0" + String(count));
                count++;
            }
        }
    }

}

function validate_form($, current_n) {
    var list_of_errors_divs = [];
    
    for (var i = 0; i < current_n; i++){
        var name_elem      = $("input[name='name_0" + i + "']"),
            wholesale_elem = $("input[name='wholesale_0" + i + "']"),
            retail_elem    = $("input[name='retail_0" + i + "']"),
            stock_elem     = $("input[name='stock_0" + i + "']"),
            delete_elem    = $("input[name='delete_0" + i + "']"),
            reorder_elem   = $("input[name='reorder_0" + i + "']"),
            maxlevel_elem  = $("input[name='maxlevel_0" + i + "']");
            
            if (delete_elem.is(":checked")){
                continue;
            } else {
                if (name_elem.val().trim().length === 0){
                    list_of_errors_divs.push(name_elem.attr("name"));
                } else {
                    name_elem.css("border", "2px inset rgb(0, 0, 0)");
                }
                if (isNaN(parseInt(wholesale_elem.val()))){
                    list_of_errors_divs.push(wholesale_elem.attr("name"));
                } else {
                    wholesale_elem.css("border", "2px inset rgb(0, 0, 0)");
                }
                if (isNaN(parseInt(retail_elem.val()))) {
                    list_of_errors_divs.push(retail_elem.attr("name"));
                } else {
                    retail_elem.css("border", "2px inset rgb(0, 0, 0)");
                }
                if (isNaN(parseInt(stock_elem.val()))){
                    list_of_errors_divs.push(stock_elem.attr("name"));
                } else if (stock_elem.val() < 0){
                    list_of_errors_divs.push(stock_elem.attr("name"));
                } else {
                    stock_elem.css("border", "2px inset rgb(0, 0, 0)");
                }
                
                // New Fields to validate reorder and maxlevel
                
                if(isNaN(parseInt(reorder_elem.val()))){
                    list_of_errors_divs.push(stop_elem.attr("name"));
                } else if (reorder_elem.val() < 0){
                    list_of_errors_divs.push(reorder_elem.attr("name"));
                } else {
                    reorder_elem.css("border", "2px inset rgb(0, 0, 0)");
                }
                
                if(isNaN(parseInt(maxlevel_elem.val()))){
                    list_of_errors_divs.push(maxlevel_elem.attr("name"));
                } else if (maxlevel_elem.val() < 0){
                    list_of_errors_divs.push(maxlevel_elem.attr("name"));
                } else {
                    maxlevel_elem.css("border", "2px inset rgb(0, 0, 0)");
                }
            }
    }
    
    if (list_of_errors_divs.length === 0){
        return false;
    } else {
        return list_of_errors_divs;
    }
    
}

function show_validation_error($, res) {
    for (var i = 0; i < res.length; i++){
        console.log(res);
        $("input[name='" + res[i] + "']").css("border", "1px solid red");
    }
}

function append_row($, num) {
    var i,
        main_div = $("<div class='row' id='divnum_0" + num + "'></div>"),
        id       = $("<input type='hidden' name='id_0" + num + "' value=''>"),
        table    = $("<table id='tablenum_0" + num + "' width='100%'></table>"),
        tr       = [],
        tr0_tds  = [],
        tr1_tds  = [],
        tr2_tds  = [],
        tr3_tds  = [],

        name_elem = $("<input type='text' id='name_0" + num + "' name='name_0" + num + "' value='' size='40'>"),
        wholesale_elem = $("<input type='text' id='wholesale_0" + num + "' name='wholesale_0" + num + "' value='' size='6'>"),
        retail_elem    = $("<input type='text' id='retail_0" + num +"' name='retail_0" + num +"' value='' size='6'>"),
        instock_elem   = $("<input type='checkbox' id='instock_0" + num + "' name='instock_0" + num + "' value='1' checked='checked'>"),
        manage_elem    = $("<input type='checkbox' name='manage_0" + num + "' value='' checked='checked'>"),
        stock_elem     = $("<input type='text' id='stock_0" + num + "' name='stock_0" + num + "' value='' size='6'>"),
        delete_elem    = $("<input class='delete' type='checkbox' id='delete_0" + num + "' name='delete_0" + num + "' value='1'>"),
        reorder_elem   = $("<input type='text' id='reorder_0" + num + "' name='reorder_0" + num + "' value='' size='6'>"),
        stockcode_elem = $("<input type='text' id='stockcode_elem" + num + "' name='stockcode_elem" + num + "' value='' size='20'>"),
        maxlevel_elem  = $("<input type='text' id='maxlevel_0" + num + "' name='maxlevel_0" + num + "' value='' size='6'>"),
        desc_elem      = $("<input type='text' id='description_0" + num + "' name='description_0" + num + "' value='' size='40'>");
        
        // Prepare the tr's first
        tr[0] = $("<tr class='tr0'></tr>");
        tr0_tds[0] = $("<td>Name:</td>");
        tr0_tds[1] = $("<td class='namestyle'></td>").append(name_elem);
        tr0_tds[2] = $("<td>Wholesale:</td>");
        tr0_tds[3] = $("<td></td>").append(wholesale_elem);
        tr0_tds[4] = $("<td>Stock:</td>");
        tr0_tds[5] = $("<td></td>").append(stock_elem);
        
        for (i = 0; i < tr0_tds.length; i++){
            tr[0].append(tr0_tds[i]);
        }
        
        tr[1] = $("<tr class='tr1'></tr>");
        tr1_tds[0] = $("<td>Description:</td>");
        tr1_tds[1] = $("<td class='namestyle'></td>").append(desc_elem);
        tr1_tds[2] = $("<td>Retail:</td>");
        tr1_tds[3] = $("<td></td>").append(retail_elem);
        tr1_tds[4] = $("<td>Reorder alert:</td>");
        tr1_tds[5] = $("<td></td>").append(reorder_elem);
        
        for (i = 0; i < tr1_tds.length; i++){
            tr[1].append(tr1_tds[i]);
        }
        
        tr[2] = $("<tr class='tr2'></tr>");
        tr2_tds[0] = $("<td>Stock Code:</td>");
        tr2_tds[1] = $("<td></td>").append(stockcode_elem);
        tr2_tds[2] = $("<td colspan='2'>&nbsp;</td>");
        tr2_tds[3] = $("<td>Max level:</td>");
        tr2_tds[4] = $("<td></td>").append(maxlevel_elem);
        
        for (i = 0; i < tr2_tds.length; i++){
            tr[2].append(tr2_tds[i]);
        }
        
        tr[3] = $("<tr class='tr3'></tr>");
        tr3_tds[0] = $("<td>Delete Item:</td>");
        tr3_tds[1] = $("<td></td>").append(delete_elem);
        tr3_tds[2] = $("<td>Auto Manage:</td>");
        tr3_tds[3] = $("<td></td>").append(manage_elem);
        tr3_tds[4] = $("<td>In Stock:</td>");
        tr3_tds[5] = $("<td></td>").append(instock_elem);
        
        for (i = 0; i < tr3_tds.length; i++){
            tr[3].append(tr3_tds[i]);
        }
        
        table.append(tr[0])
             .append(tr[1])
             .append(tr[2])
             .append(tr[3]);
             
        main_div.append(id)
                .append(table);
        
        main_div.insertBefore("#last_row");

}