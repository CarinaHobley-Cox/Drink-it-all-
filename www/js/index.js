
var destinationType; //used sets what should be returned (image date OR file path to image for example)

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
	destinationType=navigator.camera.DestinationType;
}

function capturePhoto() {
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
	destinationType: destinationType.FILE_URI });
}
	
function onPhotoDataSuccess(imagefilelocation) {
	var image = document.getElementById('image');
	image.style.display = 'block';
	image.src =  imagefilelocation;
}

function onFail(message) {
      alert('Failed because: ' + message);
}