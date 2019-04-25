/* JavaScript for timeout to attract loop */

$(document).ready(function(){

	const $photo1 = $('#photo1'),
		$photo2 = $('#photo2');

	var screenWidth = $(window).width();

	// first timeline inside setup() function
	function setup() {
	  // instantiate timeline
	  const tl = new TimelineMax();
	  // set initial

	  tl.set($photo1, {autoAlpha: .1, xPercent: -100})
	  	// .set($photo2, {autoAlpha: .1, y:300, xPercent: -100});  
	  	// .set($photo2, {autoAlpha: .1, y:300, x:0 - $photo2.width()});  
	  	.set($photo2, {autoAlpha: .1, 
	  		y:300, 
	  		// transform:translateX(- $photo2.width())
	  		// -webkit-transform:translateX(-$photo2.width())
	  		// -webkit-transform:translateX("100px")
	  		x:0 - $photo2.width() - $photo1.width()
	  	});  
	  // tl.set($photo1, {autoAlpha: .1, x:-200})
	  // 	.set($photo2, {autoAlpha: .1, y:300, x:-900});  

	  // return timeline
	  return tl;
	}

	/*  could also use a single TweenMax tween with 
	repeat:1, yoyo:true, repeatDelay:1 OR a 
	TweenLite using a SlowMo ease with yoyoMode:true.

	xPercent: -100

	*/
	function movePhoto1() {
		var tl = new TimelineMax(0);
		tl.to($photo1, 2, {autoAlpha:1})
		  // start the positional tween at time of 0
		  // x is left edge of photo
		  .to($photo1, 10, {x:screenWidth + $photo1.width(), ease:Linear.easeNone}, 0)
		  // begin fade out 1 second before positional tween ends
		  .to($photo1, 2, {autoAlpha:.2}, "-=2");
		return tl;
	}

	function movePhoto2() {
		var tl = new TimelineMax({delay:2}, 0);
		
		// tl.to($photo2, 7, {x: "1000px", ease:Linear.easeNone, delay:2} );

		tl.to($photo2, 2, {autoAlpha:1})
		  //start the positional tween at time of 0
		  .to($photo2, 9, {x:screenWidth + $photo2.width(), ease:Linear.easeNone}, 0)
		  // //begin fade out 1 second before positional tween ends
		  .to($photo2, 3, {autoAlpha:0}, "-=3");

		return tl;
	}


	// instantiate master timeline
	var master = new TimelineMax({repeat:2} );
	// nest and call functions with timelines
	// add labels for better master timeline control

	master.add(setup())
		.add(movePhoto1(), 0)
		.add(movePhoto2(), 0);

}); // end doc ready
