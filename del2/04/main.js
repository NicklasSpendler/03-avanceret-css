let sliderHueElem = document.querySelector('.sliderHue')
let sliderSaturationElem = document.querySelector('.sliderSaturation')
let sliderLightnessElem = document.querySelector('.sliderLightness')

let slidersElem = document.querySelector('.sliders')

let root = document.documentElement;

let allSlidersElems = slidersElem.querySelectorAll('.slider')
//
let sliderHueValue = 100;
let sliderSaturationValue = 100;
let sliderLightnessValue = 50;

let hueValueElem = document.querySelector('.hueValue')
let saturationValueElem = document.querySelector('.saturationValue')
let lightnessValueElem = document.querySelector('.lightnessValue')

allSlidersElems.forEach(slider => {
	slider.addEventListener('input', (event)=>{
		if(event.target.classList.contains("sliderHue")){
			console.log('Hue: ', event.target.value);
			sliderHueValue = event.target.value;
		}
		if(event.target.classList.contains("sliderSaturation")){
			console.log('Saturation: ', event.target.value);
			sliderSaturationValue = event.target.value;
		}
		if(event.target.classList.contains("sliderLightness")){
			console.log('Lightness: ', event.target.value);
			sliderLightnessValue = event.target.value;
		}
		updateColor()
	})
});

updateColor()
function updateColor(){
	root.style.setProperty("--bgColor", `hsl(${sliderHueValue}, ${sliderSaturationValue}%, ${sliderLightnessValue}%)`)
	hueValueElem.textContent = sliderHueValue
	saturationValueElem.textContent = sliderSaturationValue + "%"
	lightnessValueElem.textContent = sliderLightnessValue + "%"

}