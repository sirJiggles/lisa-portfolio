// Define the appvars used in various functions etc first
var appVars = {
    tablet: $(window).width() <= 850 ? true : false,
    mobile: $(window).width() <= 600 ? true : false,
    desktop: $(window).width() >= 960 ? true : false,
    largeScreen: $(window).width() >= 1530 ? true : false,
    resizeTimer: null,
    imagesSwapped: false
}

/*
 * Main javascript file
 * 
 * require any libraries using juicer
 * 
 * @depends vendor/jquery-1.10.2.min.js
 * @depends vendor/jquery.flexslider-min.js
 * @depends app-functions.js
 * @depends ../modules/gallery/js/script.js
 */


$(window).ready(function () {
    
     // Generic resize function
    $(window).resize(function(){
        clearTimeout(appVars.resizeTimer);
        appVars.resizeTimer = setTimeout(resizeWindowCallback, 500);
    });
    
});

$(window).load(function(){
    // External link class JS
    //externalLinks();

    resizeWindowCallback();
   
});