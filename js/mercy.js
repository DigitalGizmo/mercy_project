/* JavaScript for timeout to attract loop */

$(document).ready(function(){

	// touch anywhere to begin
	$("body").on("click touchstart", function(event){ 
		window.location.href='menu.html';
	});

	// Timeout to attract

	/* --- Attract loop animation --- */
	const photos = [$('#photo1'), $('#photo2'), $('#photo3'), 
		$('#photo4'), $('#photo5'), $('#photo6')];
	var screenWidth = $(window).width();
	const speedFactor = 3;

	// first timeline inside setup() function
	function setup() {
	  // instantiate timeline
	  const tl = new TimelineMax();
	  // set initial
	  tl.set(photos[0], {autoAlpha: 0, y:20, xPercent: -100})
	  	.set(photos[1], {autoAlpha: 0, y:320, xPercent: -100})
	  	.set(photos[2], {autoAlpha: 0, y:110, xPercent: -100})
	  	.set(photos[3], {autoAlpha: 0, y:240, xPercent: -100})
	  	.set(photos[4], {autoAlpha: 0, y:10, xPercent: -100})
	  	.set(photos[5], {autoAlpha: 0, y:200, xPercent: -100})
	  	// .set(photo3, {autoAlpha: .1, y:100, x:screenWidth + photo3.width()}) 
	  	;  
	  // return timeline
	  return tl;
	}

	function movePhoto(photoIndex, delaySecs, durationSecs, forward) {
		var tl = new TimelineMax({delay:delaySecs}, 0);
		// start the positional tween at time of 0
		// x is left edge of photo
		if (forward) {
			tl.to(photos[photoIndex], (durationSecs/2), {autoAlpha:1, repeat:1, yoyo:true})
			  .to(photos[photoIndex], durationSecs, {x:screenWidth, ease:Linear.easeNone}, 0);
		} else {
			tl.to(photos[photoIndex], (durationSecs/2), {autoAlpha:1, repeat:1, yoyo:true})
			  .from(photos[photoIndex], durationSecs, {x:screenWidth, ease:Linear.easeNone}, 0);
		}
		return tl;
	}

	// instantiate master timeline
	var master = new TimelineMax({repeat:-1} );
	// nest and call functions with timelines
	// add labels for better master timeline control

	master.add(setup())
		// photoIndex, delaySecs, durationSecs, forward
		.add(movePhoto(0, (0 * speedFactor), (4 * speedFactor), true), 0)
		.add(movePhoto(1, (2 * speedFactor), (3 * speedFactor), true), 0)
		.add(movePhoto(2, (4 * speedFactor), (4 * speedFactor), false), 0)
		.add(movePhoto(3, (5 * speedFactor), (4 * speedFactor), true), 0)
		.add(movePhoto(4, (7 * speedFactor), (4.5 * speedFactor), false), 0)
		.add(movePhoto(5, (8 * speedFactor), (4 * speedFactor), true), 0)
		;

}); // end doc ready
