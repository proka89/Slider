
var imgList;
var imgCurrent = 1;
var slideing;


document.addEventListener('DOMContentLoaded', function(){ init(); });


function init() {
	var slider = document.getElementById("slides");
	imgList = slider.children;
	imgNumber = imgList.length;
	document.getElementById("left").onclick = function() {getCurrentImg(-1)};
	document.getElementById("right").onclick = function() {getCurrentImg(1)};
	slider.addEventListener("mouseover", stopAutoSlide, false);
	slider.addEventListener("mouseout", startAutoSlide, false);
	showImg(1);
	startAutoSlide();
}

function getCurrentImg (x){
	imgCurrent = imgCurrent + x;
	console.log(imgCurrent);
	showImg(imgCurrent);
}


function showImg(n) {
	var i;
	if(n > imgNumber) {
		imgCurrent = 1;
	}
	if (n < 1) {
		imgCurrent = imgNumber;
	}
	for (i=0; i < imgNumber; i++) {
		imgList[i].style.display = "none";
	}
	imgList[imgCurrent - 1].style.display = "block";
}


function startAutoSlide() {
	var i;
	for (i=0; i < imgNumber; i++) {
		imgList[i].style.display = "none";
	}
	if(imgCurrent > imgNumber) {
		imgCurrent = 1;
	}
	imgList[imgCurrent - 1].style.display = "block";
	imgCurrent++;
	slideing = setTimeout(startAutoSlide, 3000);
}


function stopAutoSlide(){
	clearTimeout(slideing);
}