let slideContainerElem = document.querySelector('.slides');
let slidesArray = slideContainerElem.querySelectorAll('.slide');

let slideIndex  = 0;
let slideTimoutTimer = 1000

let isScrolling = false;
console.log('', slidesArray);
console.log('', slidesArray[0]);


function show(){
	slidesArray[slideIndex].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

window.addEventListener('wheel', (event)=>{
	// console.log('', event.deltaY);
	if(event.deltaY > 0 && slideIndex < slidesArray.length - 1 && isScrolling == false){
		console.log('scrolling down', );
		slideIndex++;
		isScrolling = true;
		resetTimeout()
		show();
	}else if(event.deltaY < 0 && slideIndex != 0 && isScrolling == false){
		console.log('scrolling up', );
		slideIndex--;
		isScrolling = true;
		resetTimeout()
		show();
	}
	console.log('', slideIndex);

})

function resetTimeout(){
	let scrolling = setTimeout(()=>{
		console.log('is Scrolling', );
		isScrolling = false;
	}, slideTimoutTimer)
}