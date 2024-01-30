var map = L.map('map').setView([-34.547303588817826, -55.50233092972566], 9);

L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=th1B7ltIffQzw1VZAQcG', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);
var iep = L.marker([-34.803316034114594, -55.9058164171355],).addTo(map).bindPopup("IEP <br><a href='https://maps.app.goo.gl/QeQyr5ZtV1Vo8Uur6'>Ver en maps</a>");
var salesiano = L.marker([-34.81710765801653, -55.927056771888694],).addTo(map).bindPopup("Colegio salesiano de la Costa <br><a href='https://maps.app.goo.gl/5ZcvFimLwqMnVKRn9'>Ver en maps</a>");
var medanos = L.marker([-34.80614959522127, -55.92787216341784],).addTo(map).bindPopup("Liceo médanos <br><a href='https://maps.app.goo.gl/orBPoJyh689StxLU8'>Ver en maps</a>");
var itHue = L.marker([-34.817978440284804, -55.9550270873078],).addTo(map).bindPopup("Liceo It-Hué <br><a href='https://maps.app.goo.gl/3rswfwfDr7MDvNpW9'>Ver en maps</a>");
var areteia = L.marker([-34.8254473308886, -55.955713732817294],).addTo(map).bindPopup("Areteia <br><a href='https://maps.app.goo.gl/wFjAii57ZsE3U2uh7'>Ver en maps</a>");
var alternativo = L.marker([-34.82613814578286, -55.966760828555216],).addTo(map).bindPopup("AlterNativo <br><a href='https://maps.app.goo.gl/ZzgSsy1wmezmLVMZ6'>Ver en maps</a>");
var aleph = L.marker([-34.833416171217706, -55.9815901954562],).addTo(map).bindPopup("Aleph <br><a href='https://maps.app.goo.gl/rNvocf3EbxrcghEG8'>Ver en maps</a>");
var varela = L.marker([-34.8507816100646, -55.99088201486951],).addTo(map).bindPopup("Colegio José Pedro Varela <br><a href='https://maps.app.goo.gl/qYVoLYbBJomGxQmt6'>Ver en maps</a>");
var aleman = L.marker([-34.86910818613538, -56.02875348713959],).addTo(map).bindPopup("Colegio Alemán <br><a href='https://maps.app.goo.gl/J8xcz4BBDcqquFCE7'>Ver en maps</a>");
var urugua = L.marker([-34.811298111411446, -55.91472836138528],).addTo(map).bindPopup("Uruguá <br><a href='https://maps.app.goo.gl/u22oF6eS3RW4s8S7A'>Ver en maps</a>");
var siglo = L.marker([-34.80459862198959, -55.90802845302906],).addTo(map).bindPopup("Colegio Siglo XXI <br>(éste no se si es liceo)<br><a href='https://maps.app.goo.gl/KuGT4geBbjG5VgKU9'>Ver en maps</a>");



//var  = L.marker([],).addTo(map).bindPopup(" <br><a href=''>Ver en maps</a>");
