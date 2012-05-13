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

(function(running, $){
    
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
})(org.running, jQuery);