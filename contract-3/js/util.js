if (!org) {
    var org = {};
}

// This is for general helpers
if (!org.util){
    org.util = {};
}

(function(util, $){
    try {
        var jq_version = $().jquery;
    } catch (e){
        // jQuery not defined!
        return "Namespace: util could not use jquery";
    }
    
    util.get_date = function(date_string){
        //"yyyy-MM-dd-HH-mm-ss"
        // Valid date formats are: 
        
        // a) M/D/YYYY format
        // b) M-D-YYYY format
        // c) M.D.YYYY format
        // d) M_D_YYYY format
        
        if (date_string === "" || date_string === undefined){
            return false;
        }
        
        var split  = date_string.split("-"),
            year   = split[0],
            month  = split[1],
            day    = split[2],
            hour   = split[3],
            minute = split[4],
            second = split[5],
            
            date   = new Date(month + "/" + day + "/" + year);
            
            date.setHours(hour);
            date.setMinutes(minute);
            date.setSeconds(second);
            
        return date;
    }
    
})(org.util, jQuery);