let colorButtonContainerElem = document.querySelector('#color-buttons')

let allButtonsElems = colorButtonContainerElem.querySelectorAll('button')

let root = document.documentElement;

// Bliver nødt til at bruge 'getComputedStyle' fordi ellers vil den lede efter inline style.
allButtonsElems.forEach(element => {
	element.addEventListener('click', (event)=>{
		root.style.setProperty("--chosen-color", getComputedStyle(element).getPropertyValue("background-color"))
		console.log('', event);
	})
});
