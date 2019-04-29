let parallax = document.querySelector('.billede');

window.addEventListener('scroll', ()=>{
	// window.pageYOffset = hvor meget man har scrolled
	var scrolledHeight = window.pageYOffset, limit = parallax.offsetTop	+ parallax.offsetHeight;

	if(scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
		parallax.style.backgroundPositionY=  (scrolledHeight - parallax.offsetTop) /1.5+ "px";
	
	} else {
		parallax.style.backgroundPositionY=  "0";
	}
})