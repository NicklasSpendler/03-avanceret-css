let sitesElem = document.querySelector('.sites');

let siteArray = sitesElem.querySelectorAll('.site');

let currentSite = 1;

let navULElem = document.querySelector('.navUL')

let navSlectionsArray = navULElem.querySelectorAll('li')

console.log('', siteArray[currentSite -1]);
console.log('', getComputedStyle(siteArray[currentSite -1]).getPropertyValue("opacity"));
navSlectionsArray.forEach(function(selection, index){
	let link = index + 1
	selection.addEventListener('click',function(arg,index){

		// console.log('', siteArray[currentSite]);
		if(link != currentSite){
			siteArray[currentSite -1].style.opacity = "0"
			checkOpacity(siteArray[currentSite -1])
			currentSite = link;
		}
		
		// updateView();
	})
});

function checkOpacity(site){
	console.log('', site);
	site.addEventListener('transitionend', ()=>{
		if(getComputedStyle(site).getPropertyValue("opacity") == 0){
			updateView();
		}
	})
}

updateView()
function updateView(){
	siteArray.forEach(site => {
		site.style.display = "none";
		site.style.opacity = "0";
		if(site.dataset.siteid == currentSite){
			site.style.display = "block";
			site.style.opacity = "0"
			setTimeout(()=>{
				site.style.opacity = "1"
			}, 1)
		}
	});
}
