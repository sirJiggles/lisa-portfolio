
// Nice and simples Gallery JS

$(window).ready(function(){


	$('.gallery').flexslider({
        animation:"slide",
        controlNav:false,
        directionNav:true,
        animationSpeed: 400,
        pauseOnHover:false,
        useCSS:true,
        minItems:(!appVars.mobile) ? 2 : 1,
        maxItems:(!appVars.mobile) ? 2 : 1,
        itemWidth:(!appVars.mobile) ? 396 : 198,
        itemMargin:3
	});

});
