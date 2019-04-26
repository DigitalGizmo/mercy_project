/* JavaScript for timeout to attract loop */

$(document).ready(function(){

	const photo1 = $('#photo1'),
		photo2 = $('#photo2'),
		photo3 = $('#photo3')
		;

	var screenWidth = $(window).width();

	// first timeline inside setup() function
	function setup() {
	  // instantiate timeline
	  const tl = new TimelineMax();
	  // set initial
	  tl.set(photo1, {autoAlpha: .1, xPercent: -100})
	  	.set(photo2, {autoAlpha: .1, y:300, xPercent: -100})
	  	.set(photo3, {autoAlpha: .1, y:100, xPercent: -100}) // , xPercent: -100
	  	// .set(photo3, {autoAlpha: .1, y:100, x:screenWidth + photo3.width()}) // , xPercent: -100
	  	;  
	  // return timeline
	  return tl;
	}


	function movePhoto1() {
		var tl = new TimelineMax(0);
		tl.to(photo1, 5, {autoAlpha:1, repeat:1, yoyo:true})
		  // to(photo1, 2, {autoAlpha:1})
		  // start the positional tween at time of 0
		  // x is left edge of photo
		  .to(photo1, 10, {x:screenWidth + photo1.width(), ease:Linear.easeNone}, 0)
		  // begin fade out 1 second before positional tween ends
		  // .to(photo1, 2, {autoAlpha:.2}, "-=2")
		  ;
		return tl;
	}

	function movePhoto2() {
		var tl = new TimelineMax({delay:2}, 0);
		
		// console.log(" -- screenWidth: " + screenWidth);
		// console.log(" -- photo2 width: " + photo2.width());

		tl.to(photo2, 4.5, {autoAlpha:1, repeat:1, yoyo:true})
		  .to(photo2, 9, {x:screenWidth + photo2.width(), ease:Linear.easeNone}, 0);

		return tl;
	}

	function movePhoto3() {
		var tl = new TimelineMax({delay:4}, 0);
		console.log(" -- screenWidth: " + screenWidth);
		console.log(" -- photo2 width: " + photo2.width());
		tl.to(photo3, 4.5, {autoAlpha:1, repeat:1, yoyo:true})
		  .from(photo3, 9, {x:screenWidth + photo3.width(), ease:Linear.easeNone}, 0);
		  // .to(photo3, 9, {xPercent: -100, ease:Linear.easeNone}, 0);
		  // .from(photo3, 9, {x:screenWidth, ease:Linear.easeNone}, 0);

		return tl;
	}


	// instantiate master timeline
	var master = new TimelineMax({repeat:2} );
	// nest and call functions with timelines
	// add labels for better master timeline control

	master.add(setup())
		.add(movePhoto1(), 0)
		.add(movePhoto2(), 0)
		.add(movePhoto3(), 0);

}); // end doc ready
