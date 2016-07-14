var bandImage = document.getElementById('bandPhoto');
var imageDir = 'img/band/';
var imageArray = [
	imageDir + 'GR_00.jpg',
	imageDir + 'GR_01.jpg',
	imageDir + 'GR_01a.jpg',
	imageDir + 'GR_01b.jpg',
	imageDir + 'GR_01c.jpg',
	imageDir + 'GR_01d.jpg',
	imageDir + 'GR_01e.jpg',
	imageDir + 'GR_01f.jpg',
	imageDir + 'GR_01g.jpg',
	imageDir + 'GR_02.jpg',
	imageDir + 'GR_03.jpg',
	imageDir + 'GR_04.jpg',
	imageDir + 'GR_05.jpg',
	imageDir + 'GR_06a.jpg',
	imageDir + 'GR_07.jpg'
]
var totalImages = imageArray.length;
var imageIndex = 0;
var intervalHandle = setInterval(changeImage, 2000);

function changeImage() {
	bandPhoto.setAttribute('src', imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex >= totalImages){
		imageIndex = 0;
	}
}

bandImage.onclick = function() {
	clearInterval(intervalHandle);
}