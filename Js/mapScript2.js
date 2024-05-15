let map = L.map('Contactmap').setView([51.44615267593093, 5.45756603256811], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [
    [51.44615267593093 - 0.0001, 5.45756603256811 - 0.0001], 
    [51.44615267593093 + 0.0002, 5.45756603256811 + 0.0002]  
];

L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);

let apMarker = L.marker([51.44615267593093, 5.45756603256811],).addTo(map);
apMarker.bindPopup("<b>Bosch security systems</b><br>Torenallee 49, 5617 BA Eindhoven, Nederland").openPopup();