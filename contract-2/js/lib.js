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
    
    var amount = 0.0,
        close_date_1 = Date(),
        close_date_2 = Date(),
        close_date_3 = Date(),
        close_date_4 = Date();

    
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
    
    running.logic = function(){
        
        amount = 1.0;
        console.log("Amount: " + amount);
        console.log("Closedate1" + close_date_1);
        console.log("Closedate2" + close_date_2);
        console.log("Closedate3" + close_date_3);
        console.log("Closedate4" + close_date_4);
    }
})(org.running, jQuery);