var map = L.map('mapid').setView([10.9751726, -74-8307983], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([10.974957, -74.829961]).addTo(map)
    .bindPopup('El barrio donde vivo')
    .openPopup();