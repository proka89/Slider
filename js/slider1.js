var imgList;
var imgCurrent = 1;
var imgWidth;
var animate;
var slider;

document.addEventListener('DOMContentLoaded', function(){ init(); });

function init() {
	slider = document.getElementById("slides");
	imgList = slider.children;
	imgNumber = imgList.length;
	imgWidth = imgList[0].children[0].width;
	imgTotalWidth = imgWidth * imgNumber;
	document.getElementById("left").onclick = function() {moveLeft()};
	document.getElementById("right").onclick = function() {moveRight()};
	slider.addEventListener("mouseover", stopAutoSlide, false);
	slider.addEventListener("mouseout", startSlider, false);
	startSlider();
	slider.style.marginLeft = '0px';
}


function startSlider() {
	slider.style.marginLeft = parseInt(slider.style.marginLeft) - imgWidth + 'px';
	imgCurrent++;
	if(imgCurrent > imgNumber) {
		imgCurrent = 1;
		slider.style.marginLeft = '0px';
	}
	animate = setTimeout(startSlider, 5000);
}

function stopAutoSlide(){
	clearTimeout(animate);
}

function moveLeft() {
	slider.style.marginLeft = parseInt(slider.style.marginLeft) - imgWidth + 'px';
	imgCurrent++;
	if(imgCurrent > imgNumber) {
		imgCurrent = 1;
		slider.style.marginLeft = '0px';
	}
}

function moveRight() {
	slider.style.marginLeft = parseInt(slider.style.marginLeft) + imgWidth + 'px';
	imgCurrent--;
	if(imgCurrent < 1) {
		imgCurrent = imgNumber;
		slider.style.marginLeft = -(imgTotalWidth - imgWidth) + 'px';
		
	}
}