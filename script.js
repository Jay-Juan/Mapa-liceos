var map = L.map('map').setView([-34.82627750739202, -55.95605149572041], 11);

L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=th1B7ltIffQzw1VZAQcG', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);



function getData() {
    const response = fetch('./liceos.json')
        .then(response => response.json())
        .then(data => createMarker(data))
}


function createMarker(data) {
    data["liceos"].forEach(object => {
        L.marker([object.latitud, object.longitud],).addTo(map).bindPopup(object.nombre + "<br><a href='"+ object.link + "'>Ver en maps</a>");
    });

}



document.addEventListener("DOMContentLoaded", () => {
    getData()

})
