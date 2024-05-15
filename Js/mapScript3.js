let map = L.map('Contactmap').setView([35.22431620782952, -80.85140352436305], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [
    [35.22431620782952 - 0.0001, -80.85140352436305 - 0.0001], 
    [35.22431620782952 + 0.0002, -80.85140352436305 + 0.0002]  
];

L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);

let apMarker = L.marker([35.22431620782952, -80.85140352436305],).addTo(map);
apMarker.bindPopup("<b>Hoofdkwartier Honeywell</b><br>855 S Mint St, Charlotte, NC 28202, Verenigde Staten").openPopup();