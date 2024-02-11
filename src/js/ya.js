var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
	// Создание экземпляра карты и его привязка к контейнеру с
	// заданным id ("map").
	myMap = new ymaps.Map('map', {
		// При инициализации карты обязательно нужно указать
		// её центр и коэффициент масштабирования.
		center: [55.775565, 37.608050],
		zoom: 17,
		controls: [],
	}, {
		searchControlProvider: 'yandex#search'
	}),
		myGeoObject = new ymaps.GeoObject({
			// Описание геометрии.
			geometry: {
				type: "Point",
				coordinates: [55.775565, 37.608050]
			},
		});
	myMap.geoObjects.add(myGeoObject)
}