// Counter

function updateCountdown() {
    const endDate = new Date("2024-09-20T12:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = endDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").style.setProperty("--value", days);
    document.getElementById("hours").style.setProperty("--value", hours);
    document.getElementById("minutes").style.setProperty("--value", minutes);
    document.getElementById("seconds").style.setProperty("--value", seconds);

    // If the countdown is over, clear the interval
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").style.setProperty("--value", 0);
        document.getElementById("hours").style.setProperty("--value", 0);
        document.getElementById("minutes").style.setProperty("--value", 0);
        document.getElementById("seconds").style.setProperty("--value", 0);
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize the countdown immediately
updateCountdown();



// Google map

let map;

function initMap() {
    map = new google.maps.Map(
        document.getElementById('map'), {
        center: { lat: 28.7, lng: 77.10 },
        zoom: 8,
        mapTypeId: "terrain"
    }
    );
    const marker = new google.maps.Marker({
        position: { lat: 28.7, lng: 77.10 },
        map: map,
        label: "RGIPT",
        title: "Rajiv Gandhi Institute of Petroleum Technology, Jais, Amethi, Uttar Pradesh, India",
        draggable: false,
        animation: google.maps.Animation.BOUNCE
        // icon : "map.png"
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "<p>Conference Location - 2024</p>"
    });
    infoWindow.open(map, marker);
}

initMap();
