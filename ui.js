function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Error, not supported on this browswer");
    }
}

function showPosition(position) {
    console.log(position.coords.latitude, position.coords.longitude);
}