// function handleOrientation(event) {
//     var absolute = event.absolute;
//     var alpha    = event.alpha;
//     var beta     = event.beta;
//     var gamma    = event.gamma;
//   console.log(event)
// alert(`${absolute}, ${alpha}, ${beta}, ${gamma}, ${event}`)
//   }

// if(window.DeviceOrientationEvent){

//     window.addEventListener("orientationchange", (e) => handleOrientation(e), true);

//     console.log('Device orientation is supported!')
//     alert('Device orientation is supported')

    
// } else{
//     console.log('Device orientation not supported')
//     alert('Device orientation not supported')
// }

// window.navigator.vibrate(200)

// const evnt = new DeviceOrientationEvent('build');

// // Listen for the event.
// window.addEventListener('build', function (e) { 
//     console.log("hola")
//     console.log(e.target)
//     console.log(e.alpha)
//     alert(e.alpha)
// }, false);

// // Dispatch the event.
// window.dispatchEvent(evnt);


// let x = document.getElementById("demo");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//     navigator.watchPosition()
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }

// getLocation()

// let id, target, option;

// function success(pos) {
//   var crd = pos.coords;
//   if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
//     console.log('Congratulation, you reach the target');
//     // navigator.geolocation.clearWatch(id);
//   }
//   else {
//   document.getElementById('demo').innerText= `${crd.latitude}, ${crd.longitude}`
//     console.log(crd.latitude, crd.longitude)
//   }
// };

// function error(err) {
//   console.warn('ERROR(' + err.code + '): ' + err.message);
// };

// target = {
//   latitude : 0,
//   longitude: 0,
// }

// options = {
//   enableHighAccuracy: true,
//   maximumAge: 0
// };

// setInterval(() => {
//   navigator.geolocation.watchPosition(success, error, options);
// }, 1000);


// Run after successful transaction
// Let's display the accelerometer data
function onSuccess(acceleration) {
  var accElement = 
    document.getElementById('accelerometerData');
    
  accElement.innerHTML  =  
    'Acceleration X: ' + acceleration.x + '<br />' +
    'Acceleration Y: ' + acceleration.y + '<br />' +
    'Acceleration Z: ' + acceleration.z + '<br />' +
    'Timestamp: '      + acceleration.timestamp;
}