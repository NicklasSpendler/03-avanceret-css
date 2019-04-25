let root = document.documentElement;
let body = document.querySelector('body')
let changeDivBackgroundButtonElem = document.querySelector('.changeCssVar')
let changeFontSizeLargeElem = document.querySelector('.changeFontSizeLarge')
let changeFontSizeSmallElem = document.querySelector('.changeFontSizeSmall')

changeDivBackgroundButtonElem.addEventListener('click', ()=>{
	root.style.setProperty('--main-bg-color', 'green')
})

changeFontSizeLargeElem.addEventListener('click', ()=>{
	root.style.setProperty('--chosen-font-size', 'var(--font-size-large)')
})

changeFontSizeSmallElem.addEventListener('click', ()=>{
	root.style.setProperty('--chosen-font-size', 'var(--font-size-normal)')
})


console.log('', getComputedStyle(root).getPropertyValue("--main-bg-color"));