let slider = document.querySelector('.slider')
let slider__position = document.querySelector('.slider__position')

let root = document.documentElement;

slider.addEventListener('input', ()=>{
	console.log('', slider.value);
	root.style.setProperty("--slider", (slider.value))
})

slider__position.addEventListener('input', ()=>{
	root.style.setProperty("--maxMovement", slider__position.value + "px")
})