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
    running.close_date_4,
    running.close_date_5;

    /******************************************************************
    *                       Public Methods                            *
    *******************************************************************/
    
    running.logic = function(radio, select){
        
        running.radio    = radio;
        running.select   = select;
    
        if (running.now < running.close_date_5) {
            if (running.radio === "Individual Men Open" 
                || running.radio === "Individual Women Open"
                || running.radio === "Individual Men Veteran" 
                || running.radio === "Individual Women Veteran") {
                running.amount = 99;
                
            } else if (running.radio === "Relay Team 2 People") {
                running.amount = 120;
                
            } else if r(unning.radio === "Relay Team 3 People") {
                running.amount = 170;
                
            } else if (running.radio === "Relay Team 4 People") {
                running.amount = 199;
                
            } else if (running.radio === "Traverse Team 2 People") {
                running.amount = 198;
                
            } else if running.radio === "Traverse Team 3 People") {
                running.amount = 297;
                
            } else if running.radio === "Traverse Team 4 People") {
                running.amount = 396;
            } 
        } else if (running.now < running.close_date_4) {
            if (running.radio === "Individual Men Open" 
                || running.radio === "Individual Women Open"
                || running.radio === "Individual Men Veteran" 
                || running.radio === "Individual Women Veteran") {
                running.amount = 140;
                
            } else if (running.radio === "Relay Team 2 People") {
                running.amount = 200;
                
            } else if r(unning.radio === "Relay Team 3 People") {
                running.amount = 270;
                
            } else if (running.radio === "Relay Team 4 People") {
                running.amount = 320;
                
            } else if (running.radio === "Traverse Team 2 People") {
                running.amount = 240;
                
            } else if running.radio === "Traverse Team 3 People") {
                running.amount = 360;
                
            } else if running.radio === "Traverse Team 4 People") {
                running.amount = 480;
            }
        } else if (running.now < running.close_date_3) {
            if (running.radio === "Individual Men Open" 
                || running.radio === "Individual Women Open"
                || running.radio === "Individual Men Veteran" 
                || running.radio === "Individual Women Veteran") {
                running.amount = 170;
                
            } else if (running.radio === "Relay Team 2 People") {
                running.amount = 230;
                
            } else if r(unning.radio === "Relay Team 3 People") {
                running.amount = 300;
                
            } else if (running.radio === "Relay Team 4 People") {
                running.amount = 350;
                
            } else if (running.radio === "Traverse Team 2 People") {
                running.amount = 320;
                
            } else if running.radio === "Traverse Team 3 People") {
                running.amount = 480;
                
            } else if running.radio === "Traverse Team 4 People") {
                running.amount = 640;
            }
        } else if (running.now < running.close_date_2) {
            if (running.radio === "Individual Men Open" 
                || running.radio === "Individual Women Open"
                || running.radio === "Individual Men Veteran" 
                || running.radio === "Individual Women Veteran") {
                running.amount = 290;
                
            } else if (running.radio === "Relay Team 2 People") {
                running.amount = 260;
                
            } else if r(unning.radio === "Relay Team 3 People") {
                running.amount = 320;
                
            } else if (running.radio === "Relay Team 4 People") {
                running.amount = 380;
                
            } else if (running.radio === "Traverse Team 2 People") {
                running.amount = 360;
                
            } else if running.radio === "Traverse Team 3 People") {
                running.amount = 540;
                
            } else if running.radio === "Traverse Team 4 People") {
                running.amount = 720;
            }
        } else if (running.now < running.close_date_1) {
            if (running.radio === "Individual Men Open" 
                || running.radio === "Individual Women Open"
                || running.radio === "Individual Men Veteran" 
                || running.radio === "Individual Women Veteran") {
                running.amount = 210;
                
            } else if (running.radio === "Relay Team 2 People") {
                running.amount = 290;
                
            } else if r(unning.radio === "Relay Team 3 People") {
                running.amount = 350;
                
            } else if (running.radio === "Relay Team 4 People") {
                running.amount = 420;
                
            } else if (running.radio === "Traverse Team 2 People") {
                running.amount = 420;
                
            } else if running.radio === "Traverse Team 3 People") {
                running.amount = 630;
                
            } else if running.radio === "Traverse Team 4 People") {
                running.amount = 840;
            }
        } else {
            if (running.radio === "Individual Men Open" 
                || running.radio === "Individual Women Open"
                || running.radio === "Individual Men Veteran" 
                || running.radio === "Individual Women Veteran") {
                running.amount = 250;
                
            } else if (running.radio === "Relay Team 2 People") {
                running.amount = 320;
                
            } else if r(unning.radio === "Relay Team 3 People") {
                running.amount = 380;
                
            } else if (running.radio === "Relay Team 4 People") {
                running.amount = 480;
                
            } else if (running.radio === "Traverse Team 2 People") {
                running.amount = 480;
                
            } else if running.radio === "Traverse Team 3 People") {
                running.amount = 720;
                
            } else if running.radio === "Traverse Team 4 People") {
                running.amount = 960;
            }
        }

    }
    
    running.update_view = function($, $elem){
        // Update code goes here
        $elem.html(running.amount);
    }
})(org.running, jQuery);