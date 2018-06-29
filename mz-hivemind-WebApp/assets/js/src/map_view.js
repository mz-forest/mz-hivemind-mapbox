const MAPBOX_TOKEN = 'sk.eyJ1IjoiY2hpYmktdG90b3JvIiwiYSI6ImNqaXcyYWhpbjE3bTUza3Ftb2dxYTlqOW0ifQ.HsYPZoByMkjAXHr4So8RRw';
const CENTER = [47.349524, 8.492088];


const forestMap = L
    .map('mapid')
    .setView(CENTER, 14);

L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${MAPBOX_TOKEN}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.outdoors',
    accessToken: MAPBOX_TOKEN
}).addTo(forestMap);

L.geoJSON(baseVectorLayer).addTo(forestMap);