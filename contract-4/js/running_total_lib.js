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
    running.select_1     = "",
    running.select_2     = "",
    running.now          = new Date(),
    running.close_date_1,
    running.close_date_2;

    /******************************************************************
    *                       Public Methods                            *
    *******************************************************************/
    
    running.logic = function(select_1, select_2){
        
        running.select_1 = select_1;
        running.select_2 = select_2;
        
        // console.log(running.close_date_1);
        // console.log(running.close_date_2);

        if (running.now < running.close_date_2){
            if (running.select_1 === "Half Marathon Run" || running.select_1 === "Half Marathon Walk") {
                running.amount = 40;
            } else if (running.select_1 === "16Km Run" || running.select_1 === "16Km Walk") {
                running.amount = 25;
            } else if (running.select_1 === "10Km Run" || running.select_1 === "10Km Walk") {
                running.amount = 25;
            } else if (running.select_1 === "5Km Run" || running.select_1 === "5Km Walk") {
                running.amount = 15;
            }
        } else if (running.now < running.close_date_1) {
            if (running.select_1 === "Half Marathon Run" || running.select_1 === "Half Marathon Walk") {
                running.amount = 50;
            } else if (running.select_1 === "16Km Run" || running.select_1 === "16Km Walk") {
                running.amount = 35;
            } else if (running.select_1 === "10Km Run" || running.select_1 === "10Km Walk") {
                running.amount = 35;
            } else if (running.select_1 === "5Km Run" || running.select_1 === "5Km Walk") {
                running.amount = 25;
            }
        } else {
            if (running.select_1 === "Half Marathon Run" || running.select_1 === "Half Marathon Walk") {
                running.amount = 60;
            } else if (running.select_1 === "16Km Run" || running.select_1 === "16Km Walk") {
                running.amount = 45;
            } else if (running.select_1 === "10Km Run" || running.select_1 === "10Km Walk") {
                running.amount = 45;
            } else if (running.select_1 === "5Km Run" || running.select_1 === "5Km Walk") {
                running.amount = 35;
            }
        }
        // console.log("Wtf is the running total?: " + running.amount);
    }
    
    running.update_view = function($, $elem){
        // Update code goes here
        $elem.html(running.amount);
    }
})(org.running, jQuery);