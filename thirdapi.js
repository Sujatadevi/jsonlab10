
// lab 8 api
    let shop;
let infoTask;
let mapSpot = document.getElementById("shop");
let place = {
  lat: -79.7106519,
  lng: 44.4133884,
};
// call back function 
function initMap() {
    shop = new google.maps.Map(mapSpot, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 6
    });
    infoTask = new google.maps.InfoTask;

 
// using if else  statement  to get geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPlace(
      function (place) {
        let pl = {
          lat: place.coords.latitude,
          lng: place.coords.longitude,
        };
        infoTask.setPlace(pl);
        infoTask.setContent("Location found.");
        infoTask.open(shop);
        shop.setCenter(pl);
      },
      function() {
        handleLocationError(true, infoTask, shop.getCenter());
      });
  } else {
    alert("Error Occured")
  }
}


    