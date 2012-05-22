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