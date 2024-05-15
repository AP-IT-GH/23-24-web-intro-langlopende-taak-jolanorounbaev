let map = L.map('Contactmap').setView([36.28110881986686, -116.89040294551351], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [
    [36.28110881986686 - 0.0001, -116.89040294551351 - 0.0001], 
    [36.28110881986686 + 0.0001, -116.89040294551351 + 0.0001]  
];

L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);

let apMarker = L.marker([36.28110881986686, -116.89040294551351]).addTo(map);
apMarker.bindPopup("<b>Iot-drivenrobots</b><br>Deathvalley US California").openPopup();
