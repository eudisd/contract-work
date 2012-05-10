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
            $("#trnum_0" + n).css("background-color", "red");
        } else {
            $("#trnum_0" + n).css("background-color", "");
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
            delete_elem    = $("input[name='delete_0" + i + "']");
            
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
     // <input type="hidden" name="id_00" value="234">
     //         <table width="100%">
     //    <tr>
     //     <td>Name:</td>
     //        <td style="padding-right:10px;"><input type="text" name="name_00" value="Tshirt Small" size="40"></td>
     //     <td>Wholesale:</td>
     //        <td><input type="text" name="wholesale_00" value="5.00" size="6"></td>
     //     <td>Stock:</td>
     //        <td><input type="text" name="stock_00" value="6" size="6"></td>
     //    </tr>
     //    <tr>
     //     <td>Description:</td>
     //     <td style="padding-right:10px;"><input type="text" name="description_00" value="CC SHIRT SMALL" size="40"></td>
     //     <td>Retail:</td>
     //        <td><input type="text" name="retail_00" value="10.00" size="6"></td>
     //     <td>Reorder alert:</td>
     //     <td><input type="text" name="reorder_00" value="3" size="6"></td>
     //    </tr>
     //    <tr>
     //     <td>Stock Code:</td>
     //     <td><input type="text" name="stockcode_00" value="BM10-PO-SB-01-K" size="20"></td>
     //     <td colspan="2">&nbsp;</td>
     //     <td>Max level:</td>
     //     <td><input type="text" name="maxlevel_00" value="6" size="6"></td>
     //    </tr>
     //    <tr>
     //     <td>Delete Item:</td>
     //     <td><input type="checkbox" name="delete_00" value="1"></td>
     //     <td>Auto Manage:</td>
     //     <td><input type="checkbox" name="manage_00" value="1" checked="checked"></td>
     //     <td>In Stock:</td>
     //     <td><input type="checkbox" name="instock_00" value="1" checked="checked"></td>
     //    </tr>
    var main_div = $("<div id='divnum_0" + num + "'></div>"),
        id       = $("<input type='hidden' name='id_0" + num + "' value=''>"),
        table    = $("<table id='tablenum_0" + num + "'></table>"),
        tr       = [],
        tr0_tds  = [],
        tr1_tds  = [],
        tr2_tds  = [],
        tr3_tds  = [];
        
        //         name_elem = $("<td><input type='text' id='name_0" + num + "' name='name_0" + num + "' value='' size='40'></td>"),
        //         wholesale_elem = $("<td><input type='text' id='wholesale_0" + num + "' name='wholesale_0" + num + "' value='' size='6'></td>"),
        //         retail_elem    = $("<td><input type='text' id='retail_0" + num +"' name='retail_0" + num +"' value='' size='6'></td>"),
        //         instock_elem   = $("<td align='center'><input type='checkbox' id='instock_0" + num + "' name='instock_0" + num + "' value='1' checked='checked'></td>"),
        //         manage_elem    = $("<td align='center'><input type='checkbox' name='manage_0" + num + "' value='' checked='checked'></td>"),
        //         stock_elem     = $("<td align='center'><input type='text' id='stock_0" + num + "' name='stock_0" + num + "' value='' size='6'></td>"),
        //         delete_elem    = $("<td align='center'><input class='delete' type='checkbox' id='delete_0" + num + "' name='delete_0" + num + "' value='1'></td>"),
               
        //         tr             = $("<tr id='trnum_0" + num + "'></tr>");

        // Prepare the tr's first
        tr[0] = $("<tr class='tr0'></tr>");
        tr0_tds[0] = $("<td></td>");
        tr0_tds[1] = $("<td></td>");
        tr0_tds[2] = $("<td></td>");
        tr0_tds[3] = $("<td></td>");
        tr0_tds[4] = $("<td></td>");
        tr0_tds[5] = $("<td></td>");
        
        tr[1] = $("<tr class='tr1'></tr>");
        tr1_tds[0] = $("<td></td>");
        tr1_tds[1] = $("<td></td>");
        tr1_tds[2] = $("<td></td>");
        tr1_tds[3] = $("<td></td>");
        tr1_tds[4] = $("<td></td>");
        tr1_tds[5] = $("<td></td>");
        
        tr[2] = $("<tr class='tr2'></tr>");
        tr2_tds[0] = $("<td></td>");
        tr2_tds[1] = $("<td></td>");
        tr2_tds[2] = $("<td></td>");
        tr2_tds[3] = $("<td></td>");
        tr2_tds[4] = $("<td></td>");
        
        tr[3] = $("<tr class='tr3'></tr>");
        tr3_tds[0] = $("<td></td>");
        tr3_tds[1] = $("<td></td>");
        tr3_tds[2] = $("<td></td>");
        tr3_tds[3] = $("<td></td>");
        tr3_tds[4] = $("<td></td>");
        tr3_tds[5] = $("<td></td>");
        
        // tr.append(name_elem);
        // tr.append(wholesale_elem);
        // tr.append(retail_elem);
        // tr.append(instock_elem);
        // tr.append(manage_elem);
        // tr.append(stock_elem);
        // tr.append(delete_elem);
        
        // Add the elements to the DOM
        // id.insertBefore("#buttons");
        // tr.insertBefore("#buttons");
}