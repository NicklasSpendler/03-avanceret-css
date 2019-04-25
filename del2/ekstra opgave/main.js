let slider = document.querySelector('.slider')

let root = document.documentElement;

slider.addEventListener('input', ()=>{
	console.log('', slider.value);
	root.style.setProperty("--slider", (slider.value))
})