var imgList;
var imgCurrent = 0;
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
}


function startSlider() {
	moveLeft();
	animate = setTimeout(startSlider, 2000);
}

function stopAutoSlide(){
	clearTimeout(animate);
}

function moveLeft() {
	imgCurrent++;
	if(imgCurrent >= imgNumber) {
		imgCurrent = 0;
		slider.style.marginLeft = '0px';
		slider.style.webkitTransition = 'none';
	} else {
		slider.style.marginLeft = parseInt(slider.style.marginLeft) - imgWidth + 'px';
		slider.style.webkitTransition = '400ms linear';
	}
}

function moveRight() {
	imgCurrent--;
	if(imgCurrent < 0) {
		imgCurrent = imgNumber - 1;
		slider.style.marginLeft = -(imgTotalWidth - imgWidth) + 'px';
		slider.style.webkitTransition = 'none';
	} else {
		slider.style.marginLeft = parseInt(slider.style.marginLeft) + imgWidth + 'px';
		slider.style.webkitTransition = '400ms linear';
	}
}