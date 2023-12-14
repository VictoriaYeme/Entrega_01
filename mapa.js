// Datos proporcionados
const data = {
    "Tarapacá": 3434,
    "Atacama": 218137,
    "Coquimbo": 72994218,
    "Valparaíso": 21032596,
    "Metropolitana": 87764852,
    "Lib. Bernardo O’Higgins": 363757625,
    "Maule": 543907293,
    "Ñuble": 13335017,
    "Bío Bío": 206266.0,
    "Araucanía": 10490,
    "Los Lagos": 6669,
    "Aysén": 1147,
    "Total": 1103031478
};

// Coordenadas de las regiones (puedes ajustarlas según sea necesario)
const regionCoordinates = {
    "Tarapacá": [-20.2356, -69.8891],
    "Atacama": [-27.3668, -70.3319],
    "Coquimbo": [-29.959, -71.3389],
    "Valparaíso": [-33.0458, -71.6197],
    "Metropolitana": [-33.4489, -70.6693],
    "Lib. Bernardo O’Higgins": [-34.5765, -71.9626],
    "Maule": [-35.6751, -71.543],
    "Ñuble": [-36.6188, -72.1567],
    "Bío Bío": [-37.4452, -72.1416],
    "Araucanía": [-38.9489, -72.3311],
    "Los Lagos": [-41.9198, -72.1416],
    "Aysén": [-45.9864, -73.7876],
    "Total": [-35.6751, -71.543]  // Utilizamos las coordenadas del centro del país para "Total"
};

// Inicializar el mapa
const map = L.map('map').setView([-35.6751, -71.543], 5);

// Añadir el mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Añadir marcadores para cada región con información
for (const region in data) {
    const marker = L.marker(regionCoordinates[region]).addTo(map);
    marker.bindPopup(`<b>${region}</b><br>Total: ${data[region]}`).openPopup();
}

