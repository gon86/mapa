alert('hola mundo');

//var map = L.map('map');
//var map = L.map('map').setView([51.505, -0.09], 18);


var map = L.map('map').fitWorld();
//var map = L.map('map', { closePopupOnClick: false }).fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/*var marker = L.marker([51.5, -0.09]).addTo(map)
	.bindPopup('A pretty CSS popup.<br> Easily customizable.')
	.openPopup();*/
	
/*var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);*/
	
function onMapClick(e) {
    console.log("Coordenadas: " + e.latlng);
}

map.on('click', onMapClick);

map.locate({setView: true, maxZoom: 18});

function onLocationFound(e){ 
	//alert(`Latitud: ${e.latitude} Longitud: ${e.longitude}`);
	alert('ubicacion encontrada');

	const circle = L.circle([e.latitude, e.longitude], {
		fill: false,
		stroke: false,
		radius: 20,
		className: 'circulo'
	}).addTo(map);
	//.bindPopup('Aquí fué vista la mascota.', { closeOnClick: false })
	//.openPopup();
	
	const tooltip = L.tooltip({ permanent: true, direction: 'top' })
		.setLatLng(e.latlng)
		.setContent('<div style="color: #e06907; font-size: 18px;">Aquí fué vista la mascota.</div>')
		.addTo(map);
}

function onLocationError(e){
	alert(e.message);
}

map.on('locationfound', onLocationFound);

map.on('locationerror', onLocationError);
