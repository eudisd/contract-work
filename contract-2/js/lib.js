/* Copyright Fraser Mills (c) 2012 */

// First, define a global namespace, so as to not clobber 
// possibly already defined references.  If org exist, 
// then we leave it alone.

if (!org) {
    var org = {};
}

// Define a namespace for this specific contract.  Calling
// it "running" for now.

if (!org.running){
    org.running = {};
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

(function(running, $){
    
    /**
    * Some exception handling here, just incase we call this namespace without
    * jquery.
    **/
    
    try {
        var jq_version = $().jquery;
    } catch (e) {
        // jQuery not defined!
        return "Namespace: running could not use jquery";
    }
    
    /* Private variables go here */
    
    running.amount       = 0.0,
    running.radio        = "",
    running.select       = "",
    running.now          = new Date(),
    running.close_date_1,
    running.close_date_2,
    running.close_date_3,
    running.close_date_4;

    /******************************************************************
    *                       Public Methods                            *
    *******************************************************************/
    
    /**
    *  Wrapper function for the google analytics stuff
    **/
    running.google_analytics = function(){
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-15028919-8']);
        _gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
    }
    
    running.logic = function(radio, select){
        
        running.radio    = radio;
        running.select   = select;
        
        // console.log(running.close_date_1);
        // console.log(running.close_date_2);
        // console.log(running.close_date_3);
        // console.log(running.close_date_4);
        
        if(running.now < running.close_date_4) {
            if (running.radio === "Short Course") {
                if (   running.select === "Relay Men" 
                    || running.select === "Relay Women" 
                    || running.select === "Relay Mixed"){
                    running.amount = 99;
                } else { 
                    running.amount = 70;
                }
            } else {
                if (   running.select === "Relay Men" 
                    || running.select === "Relay Women" 
                    || running.select === "Relay Mixed"){
                    running.amount = 99;
                } else {
                    running.amount = 99;
                }
            }
        } else if (running.now < running.close_date_3) {
            if (radio === "Short Course") {
                if (   running.select === "Relay Men" 
                    || running.select === "Relay Women" 
                    || running.select === "Relay Mixed"){
                    running.amount = 110;
                } else { 
                    running.amount = 70;
                }
            } else {
                if (   running.select === "Relay Men" 
                    || running.select === "Relay Women" 
                    || running.select === "Relay Mixed"){
                    running.amount = 130;
                } else {
                    running.amount = 130;
                }
            }
        } else if (running.now < running.close_date_2) {
            if (running.radio === "Short Course") {
                if (   running.select === "Relay Men" 
                    || running.select === "Relay Women" 
                    || running.select === "Relay Mixed"){
                    running.amount = 120;
                } else { 
                    running.amount = 80;
                }
            } else {
                if (   running.select === "Relay Men" 
                    || running.select === "Relay Women" 
                    || running.select === "Relay Mixed"){
                    running.amount = 150;
                } else {
                    running.amount = 150;
                }
            }
        } else if (running.now < running.close_date_1) {
            if (running.radio === "Short Course") {
                if (   running.select === "Relay Men" 
                    || running.select === "Relay Women" 
                    || running.select === "Relay Mixed"){
                    running.amount = 130;
                } else { 
                    running.amount = 90;
                }
            } else {
                if (   running.select === "Relay Men" 
                    || running.select === "Relay Women" 
                    || running.select === "Relay Mixed"){
                    running.amount = 180;
                } else {
                    running.amount = 180;
                }
            }
        } else {
            if (running.radio === "Short Course") {
                if (   running.select === "Relay Men" 
                    || running.select === "Relay Women" 
                    || running.select === "Relay Mixed"){
                    running.amount = 140;
                } else { 
                    running.amount = 100;
                }
            } else {
                if (   running.select === "Relay Men" 
                    || running.select === "Relay Women" 
                    || running.select === "Relay Mixed"){
                    running.amount = 210;
                } else {
                    running.amount = 210;
                }
            }
        }
        

    }
    
    running.update_view = function($, $elem){
        // Update code goes here
        $elem.html(running.amount);
    }
})(org.running, jQuery);