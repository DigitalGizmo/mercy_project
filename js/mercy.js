/* JavaScript for timeout to attract loop */

$(document).ready(function(){

	const $photo1 = $('#photo1'),
		$photo2 = $('#photo2');


	// first timeline inside setup() function
	function setup() {
	  // instantiate timeline
	  const tl = new TimelineMax();
	  // set initial
	  tl.set($photo1, {autoAlpha: .1, x:-200})
	  	.set($photo2, {autoAlpha: .1, y:300, x:-900});  

	  // return timeline
	  return tl;
	}

	function movePhoto1() {
		var tl = new TimelineMax(0);
		tl.to($photo1, 2, {autoAlpha:1})
		  //start the positional tween at time of 0
		  .to($photo1, 6, {x: "1000px", ease:Linear.easeNone}, 0)
		  // //begin fade out 1 second before positional tween ends
		  .to($photo1, 2, {autoAlpha:0}, "-=2");

		return tl;

	}

	function movePhoto2() {
		var tl = new TimelineMax({delay:2}, 0);
		
		// tl.to($photo2, 7, {x: "1000px", ease:Linear.easeNone, delay:2} );

		tl.to($photo2, 2, {autoAlpha:1})
		  //start the positional tween at time of 0
		  .to($photo2, 7, {x: "1000px", ease:Linear.easeNone}, 0)
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
