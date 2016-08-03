var slideshow = document.getElementById("slideshow");
/* Creates directory variable ********************************/
var imageDir = 'img/band/';
/* Creates array for our images ******************************/
var slideImages = [
	imageDir + 'GR_00.jpg',
	imageDir + 'GR_01.jpg',
	imageDir + 'GR_01a.jpg',
	imageDir + 'GR_01b.jpg',
	imageDir + 'GR_01c.jpg',
	imageDir + 'GR_01d.jpg',
	imageDir + 'GR_01e.jpg',
	imageDir + 'GR_01f.jpg',
	imageDir + 'GR_01g.jpg',
	// imageDir + 'GR_02.jpg',
	// imageDir + 'GR_03.jpg',
	// imageDir + 'GR_04.jpg',
	// imageDir + 'GR_05.jpg',
	// imageDir + 'GR_06a.jpg',
	// imageDir + 'GR_07.jpg'
]
/* Keep track of the image number ****************************/
var imageNumber = 0;
/* Keep track of the array length ****************************/
var imageLength = slideImages.length - 1;

/* Create variable for next and prev buttons ***************/
var prev = document.getElementById("prev");
var next = document.getElementById("next");

/**************************
FUNCTIONS
**************************/
/* Change the current slideshow image ****************/
function startImage() {
	photo.src = slideImages[0];
}

function changeImage(x) {
	imageNumber += x;
	if(imageNumber > imageLength) { /* Starts slideshow over */
		imageNumber = 0;
	}
	if(imageNumber < 0) { /* In case user goes back on 1st slide*/
		imageNumber = imageLength;
	}
	
	photo.src = slideImages[imageNumber];
	
	return false;
}
startImage();
prev.onclick=function(){changeImage(-1)};
next.onclick=function(){changeImage(1)};





