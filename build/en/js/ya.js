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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ5YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbXlNYXA7XG5cbi8vINCU0L7QttC00ZHQvNGB0Y8g0LfQsNCz0YDRg9C30LrQuCBBUEkg0Lgg0LPQvtGC0L7QstC90L7RgdGC0LggRE9NLlxueW1hcHMucmVhZHkoaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdC8vINCh0L7Qt9C00LDQvdC40LUg0Y3QutC30LXQvNC/0LvRj9GA0LAg0LrQsNGA0YLRiyDQuCDQtdCz0L4g0L/RgNC40LLRj9C30LrQsCDQuiDQutC+0L3RgtC10LnQvdC10YDRgyDRgVxuXHQvLyDQt9Cw0LTQsNC90L3Ri9C8IGlkIChcIm1hcFwiKS5cblx0bXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XG5cdFx0Ly8g0J/RgNC4INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC60LDRgNGC0Ysg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQvdGD0LbQvdC+INGD0LrQsNC30LDRgtGMXG5cdFx0Ly8g0LXRkSDRhtC10L3RgtGAINC4INC60L7RjdGE0YTQuNGG0LjQtdC90YIg0LzQsNGB0YjRgtCw0LHQuNGA0L7QstCw0L3QuNGPLlxuXHRcdGNlbnRlcjogWzU1Ljc3NTU2NSwgMzcuNjA4MDUwXSxcblx0XHR6b29tOiAxNyxcblx0XHRjb250cm9sczogW10sXG5cdH0sIHtcblx0XHRzZWFyY2hDb250cm9sUHJvdmlkZXI6ICd5YW5kZXgjc2VhcmNoJ1xuXHR9KSxcblx0XHRteUdlb09iamVjdCA9IG5ldyB5bWFwcy5HZW9PYmplY3Qoe1xuXHRcdFx0Ly8g0J7Qv9C40YHQsNC90LjQtSDQs9C10L7QvNC10YLRgNC40LguXG5cdFx0XHRnZW9tZXRyeToge1xuXHRcdFx0XHR0eXBlOiBcIlBvaW50XCIsXG5cdFx0XHRcdGNvb3JkaW5hdGVzOiBbNTUuNzc1NTY1LCAzNy42MDgwNTBdXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRteU1hcC5nZW9PYmplY3RzLmFkZChteUdlb09iamVjdClcbn0iXSwiZmlsZSI6InlhLmpzIn0=
