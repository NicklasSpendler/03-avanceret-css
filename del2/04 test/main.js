colorInfo = {
	hue: {
		sliderHueElem: document.querySelector('.sliderHue'),
		sliderHueValue: 100
	},
	saturation: {
		sliderHueElem: document.querySelector('.sliderSaturation'),
		sliderSaturationValue: 100
	},
	lightness: {
		sliderHueElem: document.querySelector('.sliderLightness'),
		sliderLightnessValue: 50
	},
}

let slidersElem = document.querySelector('.sliders')

let root = document.documentElement;

let updatingColor

let allSlidersElems = slidersElem.querySelectorAll('.slider')

allSlidersElems.forEach(slider => {
	slider.addEventListener('input', (event) => {
			if (event.target.classList.contains("sliderHue")) {
				console.log('Hue: ', event.target.value);
				colorInfo.hue.sliderHueValue = event.target.value;
			}
			if (event.target.classList.contains("sliderSaturation")) {
				console.log('Saturation: ', event.target.value);
				colorInfo.saturation.sliderSaturationValue = event.target.value;
			}
			if (event.target.classList.contains("sliderLightness")) {
				console.log('Lightness: ', event.target.value);
				colorInfo.lightness.sliderLightnessValue = event.target.value;
			}
			updateColor();
	})


});


updateColor()
function updateColor() {
	root.style.setProperty("--bgColor", `hsl(${colorInfo.hue.sliderHueValue}, ${colorInfo.saturation.sliderSaturationValue}%, ${colorInfo.lightness.sliderLightnessValue}%)`)
}