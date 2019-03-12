//author MENGTONG LI

var mymap = L.map('map', {
    center: [45, -98],
    zoom: 5,
    minZoom: 3,
    maxZoom: 14,
    zoomControl: false
});

var classic = L.tileLayer('https://api.mapbox.com/styles/v1/alinaalina/cjdf3zrd89h672spkz10c2j7b/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxpbmFhbGluYSIsImEiOiJjamRmM3c4M20wM2Q1MndvMHR5d3B3Z3JuIn0.gLm14to9IRdaLHdodrmdhg', {
    minZoom: 3,
    maxZoom: 14
}).addTo(mymap);

var place = L.marker([45, -97]).addTo(mymap);

var area = L.circle([44,-94], {
    color: 'blue',
    fillcolor:'blue',
    opacity:.75,
    radius: 100000
}).addTo(mymap);

var zone = L.polygon([[44, -90], [43, -89], [41, -90]], {
    color: 'red',
    fillcolor: 'red',
    opacity: 1
}).addTo(mymap);


place.bindPopup("<h1>Hello! I'm a place!</h1>");

area.bindPopup("<em>Hi there! I'm an area!</em>");

zone.bindPopup("<p>I am a polygon!!</p>");