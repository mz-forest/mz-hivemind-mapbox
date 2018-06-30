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

// Add basic layer map with polygons for forests
L
    .geoJSON(baseVectorLayer)
    .addTo(forestMap)
    .bindPopup((event)=>{

        return `BFS: ${event.feature.properties.bfs}, ObjectID: ${event.feature.properties.objectid}`;
    });


const sensors = [{
        'name': 'S1',
        'coords': [47.35186394171723, 8.504612532311072]
    },
    {
        'name': 'S2',
        'deviceID': '',
        coords: [47.364261564891635, 8.494116261942045]
    },
    {
        'name': 'S3',
        coords: [47.3552468562847, 8.499280300778073]
    }
];

forestMap.on('click', function(event) {
    console.log(event.latlng);
})

sensors.map((sensor) => {
    L
    .marker(sensor.coords)
    .bindPopup(
        (event) => {

            return `<div>Sensor <b>${sensor.name}</b></div><div>DeviceID ${sensor.deviceID}</div>`
        }
    )
    .addTo(forestMap);
})