// Инициализация карты
const map = L.map('map').setView([55.75079, 37.62714], 13);
        
// Слой карты OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors',
  maxZoom: 19,
}).addTo(map);

// Пользовательская иконка
const customIcon = L.icon({
  iconUrl: 'https://example.com/custom-icon.png', // Замените на свой URL
  iconSize: [32, 32], // Размеры иконки
  iconAnchor: [16, 32], // Точка привязки иконки
});

// Добавление нескольких меток
const locations = [
  { coords: [55.75137, 37.62440], popup: 'Шоурум Автозаводская' },
  { coords: [55.73745, 37.65392], popup: 'Шоурум Москва СИТИ' },
  { coords: [55.73871, 37.58663], popup: 'Шоурум в ТЦ ROOMER' },
];

locations.forEach(location => {
  const marker = L.marker(location.coords).addTo(map);
  marker.bindPopup(location.popup);
});