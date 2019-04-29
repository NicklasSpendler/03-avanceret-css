let box = document.querySelector('.box')
let boxIsShowing = false;

window.addEventListener('scroll', ()=>{
	if(scrollY > 200 && boxIsShowing == false){
		box.style.display = "block";
		boxIsShowing = true;
		
	}
	if(scrollY < 200 && boxIsShowing == true){
		box.style.display = "none";
		boxIsShowing = false;
		console.log('Shiiiet', );
	}
})