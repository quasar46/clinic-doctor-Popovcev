'use strict'


// function switchlang() {
// 	var langSelect = document.querySelectorAll(".language");
// 	langSelect.forEach(select => {
// 		var lang = select.options[select.selectedIndex].value;
// 		var pageURL = window.location.href;
// 		var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
// 		var langUrl = "/case38" + lang + lastURLSegment;
// 		window.location.href = langUrl;
// 	})
// }

function switchlang1() {
	const langSelect = document.querySelector(".language1");
	const lang = langSelect.options[langSelect.selectedIndex].value;
	console.log(lang);
	const pageURL = window.location.href;
	const lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
	const langUrl = "/case38" + lang + lastURLSegment;
	window.location.href = langUrl;
}

function switchlang2() {
	const langSelect = document.querySelector(".language2");
	const lang = langSelect.options[langSelect.selectedIndex].value;
	console.log(lang);
	const pageURL = window.location.href;
	const lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
	const langUrl = "/case38" + lang + lastURLSegment;
	window.location.href = langUrl;
}


const isMobile = window.innerWidth < 1161;
const menuMobile = document.querySelector('.menu__list')

if (isMobile) {
	menuMobile.querySelectorAll('.menu__item').forEach(item => {
		item.addEventListener('click', function () {
			this.classList.toggle('active')
		})
	})
}

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
burger.addEventListener('click', function () {
	this.classList.toggle('active')
	menu.classList.toggle('active')
	body.classList.toggle('hidden')
})

function openMenuFooter() {
	const btns = document.querySelectorAll('.footer__title')
	btns.forEach(btn => {
		btn.addEventListener('click', function () {
			this.nextElementSibling.classList.toggle('active')
			this.querySelector('svg').classList.toggle('rotate')
		})
	})
}
openMenuFooter()

const swiper = new Swiper('#slider-result-1', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	navigation: {
		nextEl: '#slider-result-1 .swiper-button-next',
		prevEl: '#slider-result-1 .swiper-button-prev',
	},
	pagination: {
		el: "#slider-result-1 .swiper-pagination",
		type: "fraction",
	},
})

const swiper2 = new Swiper('#slider-result-2', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	navigation: {
		nextEl: '#slider-result-2 .swiper-button-next',
		prevEl: '#slider-result-2 .swiper-button-prev',
	},
	pagination: {
		el: "#slider-result-2 .swiper-pagination",
		type: "fraction",
	},
})

const swiper3 = new Swiper('#slider-result-3', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	navigation: {
		nextEl: '#slider-result-3 .swiper-button-next',
		prevEl: '#slider-result-3 .swiper-button-prev',
	},
	pagination: {
		el: "#slider-result-3 .swiper-pagination",
		type: "fraction",
	},

})



const swiper4 = new Swiper('.slider-sertificat', {
	slidesPerView: 'auto',
	spaceBetween: 40,
	navigation: {
		nextEl: '.slider-sertificat .swiper-button-next',
		prevEl: '.slider-sertificat .swiper-button-prev',
	},
	scrollbar: {
		el: ".slider-sertificat .swiper-scrollbar",
		hide: false,
	},
	breakpoints: {
		768: {
			spaceBetween: 40,
		},
		0: {
			spaceBetween: 20,
		}
	}
})

const swiper5 = new Swiper('.slider-resume', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	navigation: {
		nextEl: '.slider-resume .swiper-button-next',
		prevEl: '.slider-resume .swiper-button-prev',
	},
	scrollbar: {
		el: ".slider-resume .swiper-scrollbar",
		hide: false,
	},
})

const swiper6 = new Swiper('.slider-companies', {
	enabled: true,
	slidesPerView: 'auto',
	spaceBetween: 20,
	navigation: {
		nextEl: '.slider-companies .swiper-button-next',
		prevEl: '.slider-companies .swiper-button-prev',
	},
	scrollbar: {
		el: ".slider-companies .swiper-scrollbar",
		hide: false,
	},
	breakpoints: {
		767: {
			enabled: false
		}
	}
})

const swiper7 = new Swiper('.slider-pic', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.slider-pic .swiper-button-next',
		prevEl: '.slider-pic .swiper-button-prev',
	},
	pagination: {
		el: ".slider-pic .swiper-pagination",
		type: "fraction",
	},
})

const swiper8 = new Swiper('#slider-steps', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	navigation: {
		nextEl: '#slider-steps .swiper-button-next',
		prevEl: '#slider-steps .swiper-button-prev',
	},
	pagination: {
		el: "#slider-steps .swiper-pagination",
		type: "fraction",
	},
})

const swiper9 = new Swiper('#slider-signs', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	navigation: {
		nextEl: '#slider-signs .swiper-button-next',
		prevEl: '#slider-signs .swiper-button-prev',
	},
	pagination: {
		el: "#slider-signs .swiper-pagination",
		type: "fraction",
	},
})

const swiper10 = new Swiper('#slider-result-4', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	navigation: {
		nextEl: '#slider-result-4 .swiper-button-next',
		prevEl: '#slider-result-4 .swiper-button-prev',
	},
	pagination: {
		el: "#slider-result-4 .swiper-pagination",
		type: "fraction",
	},
})

const swiper11 = new Swiper('#slider-video', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	// loop: true,
	navigation: {
		nextEl: '#slider-video .swiper-button-next',
		prevEl: '#slider-video .swiper-button-prev',
	},
	pagination: {
		el: "#slider-video .swiper-pagination",
		type: "fraction",
	},
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5cbi8vIGZ1bmN0aW9uIHN3aXRjaGxhbmcoKSB7XG4vLyBcdHZhciBsYW5nU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5ndWFnZVwiKTtcbi8vIFx0bGFuZ1NlbGVjdC5mb3JFYWNoKHNlbGVjdCA9PiB7XG4vLyBcdFx0dmFyIGxhbmcgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4vLyBcdFx0dmFyIHBhZ2VVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbi8vIFx0XHR2YXIgbGFzdFVSTFNlZ21lbnQgPSBwYWdlVVJMLnN1YnN0cihwYWdlVVJMLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcbi8vIFx0XHR2YXIgbGFuZ1VybCA9IFwiL2Nhc2UzOFwiICsgbGFuZyArIGxhc3RVUkxTZWdtZW50O1xuLy8gXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGFuZ1VybDtcbi8vIFx0fSlcbi8vIH1cblxuZnVuY3Rpb24gc3dpdGNobGFuZzEoKSB7XG5cdGNvbnN0IGxhbmdTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmd1YWdlMVwiKTtcblx0Y29uc3QgbGFuZyA9IGxhbmdTZWxlY3Qub3B0aW9uc1tsYW5nU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXHRjb25zb2xlLmxvZyhsYW5nKTtcblx0Y29uc3QgcGFnZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHRjb25zdCBsYXN0VVJMU2VnbWVudCA9IHBhZ2VVUkwuc3Vic3RyKHBhZ2VVUkwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuXHRjb25zdCBsYW5nVXJsID0gXCIvY2FzZTM4XCIgKyBsYW5nICsgbGFzdFVSTFNlZ21lbnQ7XG5cdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGFuZ1VybDtcbn1cblxuZnVuY3Rpb24gc3dpdGNobGFuZzIoKSB7XG5cdGNvbnN0IGxhbmdTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmd1YWdlMlwiKTtcblx0Y29uc3QgbGFuZyA9IGxhbmdTZWxlY3Qub3B0aW9uc1tsYW5nU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXHRjb25zb2xlLmxvZyhsYW5nKTtcblx0Y29uc3QgcGFnZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHRjb25zdCBsYXN0VVJMU2VnbWVudCA9IHBhZ2VVUkwuc3Vic3RyKHBhZ2VVUkwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuXHRjb25zdCBsYW5nVXJsID0gXCIvY2FzZTM4XCIgKyBsYW5nICsgbGFzdFVSTFNlZ21lbnQ7XG5cdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGFuZ1VybDtcbn1cblxuXG5jb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgMTE2MTtcbmNvbnN0IG1lbnVNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGlzdCcpXG5cbmlmIChpc01vYmlsZSkge1xuXHRtZW51TW9iaWxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJykuZm9yRWFjaChpdGVtID0+IHtcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXHRcdH0pXG5cdH0pXG59XG5cbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKVxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXHRtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG5cdGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbn0pXG5cbmZ1bmN0aW9uIG9wZW5NZW51Rm9vdGVyKCkge1xuXHRjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb3Rlcl9fdGl0bGUnKVxuXHRidG5zLmZvckVhY2goYnRuID0+IHtcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXHRcdFx0dGhpcy5xdWVyeVNlbGVjdG9yKCdzdmcnKS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKVxuXHRcdH0pXG5cdH0pXG59XG5vcGVuTWVudUZvb3RlcigpXG5cbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJyNzbGlkZXItcmVzdWx0LTEnLCB7XG5cdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcblx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0b2JzZXJ2ZXI6IHRydWUsXG5cdG5hdmlnYXRpb246IHtcblx0XHRuZXh0RWw6ICcjc2xpZGVyLXJlc3VsdC0xIC5zd2lwZXItYnV0dG9uLW5leHQnLFxuXHRcdHByZXZFbDogJyNzbGlkZXItcmVzdWx0LTEgLnN3aXBlci1idXR0b24tcHJldicsXG5cdH0sXG5cdHBhZ2luYXRpb246IHtcblx0XHRlbDogXCIjc2xpZGVyLXJlc3VsdC0xIC5zd2lwZXItcGFnaW5hdGlvblwiLFxuXHRcdHR5cGU6IFwiZnJhY3Rpb25cIixcblx0fSxcbn0pXG5cbmNvbnN0IHN3aXBlcjIgPSBuZXcgU3dpcGVyKCcjc2xpZGVyLXJlc3VsdC0yJywge1xuXHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG5cdHNwYWNlQmV0d2VlbjogMjAsXG5cdG9ic2VydmVyOiB0cnVlLFxuXHRuYXZpZ2F0aW9uOiB7XG5cdFx0bmV4dEVsOiAnI3NsaWRlci1yZXN1bHQtMiAuc3dpcGVyLWJ1dHRvbi1uZXh0Jyxcblx0XHRwcmV2RWw6ICcjc2xpZGVyLXJlc3VsdC0yIC5zd2lwZXItYnV0dG9uLXByZXYnLFxuXHR9LFxuXHRwYWdpbmF0aW9uOiB7XG5cdFx0ZWw6IFwiI3NsaWRlci1yZXN1bHQtMiAuc3dpcGVyLXBhZ2luYXRpb25cIixcblx0XHR0eXBlOiBcImZyYWN0aW9uXCIsXG5cdH0sXG59KVxuXG5jb25zdCBzd2lwZXIzID0gbmV3IFN3aXBlcignI3NsaWRlci1yZXN1bHQtMycsIHtcblx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuXHRzcGFjZUJldHdlZW46IDIwLFxuXHRvYnNlcnZlcjogdHJ1ZSxcblx0bmF2aWdhdGlvbjoge1xuXHRcdG5leHRFbDogJyNzbGlkZXItcmVzdWx0LTMgLnN3aXBlci1idXR0b24tbmV4dCcsXG5cdFx0cHJldkVsOiAnI3NsaWRlci1yZXN1bHQtMyAuc3dpcGVyLWJ1dHRvbi1wcmV2Jyxcblx0fSxcblx0cGFnaW5hdGlvbjoge1xuXHRcdGVsOiBcIiNzbGlkZXItcmVzdWx0LTMgLnN3aXBlci1wYWdpbmF0aW9uXCIsXG5cdFx0dHlwZTogXCJmcmFjdGlvblwiLFxuXHR9LFxuXG59KVxuXG5cblxuY29uc3Qgc3dpcGVyNCA9IG5ldyBTd2lwZXIoJy5zbGlkZXItc2VydGlmaWNhdCcsIHtcblx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuXHRzcGFjZUJldHdlZW46IDQwLFxuXHRuYXZpZ2F0aW9uOiB7XG5cdFx0bmV4dEVsOiAnLnNsaWRlci1zZXJ0aWZpY2F0IC5zd2lwZXItYnV0dG9uLW5leHQnLFxuXHRcdHByZXZFbDogJy5zbGlkZXItc2VydGlmaWNhdCAuc3dpcGVyLWJ1dHRvbi1wcmV2Jyxcblx0fSxcblx0c2Nyb2xsYmFyOiB7XG5cdFx0ZWw6IFwiLnNsaWRlci1zZXJ0aWZpY2F0IC5zd2lwZXItc2Nyb2xsYmFyXCIsXG5cdFx0aGlkZTogZmFsc2UsXG5cdH0sXG5cdGJyZWFrcG9pbnRzOiB7XG5cdFx0NzY4OiB7XG5cdFx0XHRzcGFjZUJldHdlZW46IDQwLFxuXHRcdH0sXG5cdFx0MDoge1xuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0XHR9XG5cdH1cbn0pXG5cbmNvbnN0IHN3aXBlcjUgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLXJlc3VtZScsIHtcblx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuXHRzcGFjZUJldHdlZW46IDIwLFxuXHRuYXZpZ2F0aW9uOiB7XG5cdFx0bmV4dEVsOiAnLnNsaWRlci1yZXN1bWUgLnN3aXBlci1idXR0b24tbmV4dCcsXG5cdFx0cHJldkVsOiAnLnNsaWRlci1yZXN1bWUgLnN3aXBlci1idXR0b24tcHJldicsXG5cdH0sXG5cdHNjcm9sbGJhcjoge1xuXHRcdGVsOiBcIi5zbGlkZXItcmVzdW1lIC5zd2lwZXItc2Nyb2xsYmFyXCIsXG5cdFx0aGlkZTogZmFsc2UsXG5cdH0sXG59KVxuXG5jb25zdCBzd2lwZXI2ID0gbmV3IFN3aXBlcignLnNsaWRlci1jb21wYW5pZXMnLCB7XG5cdGVuYWJsZWQ6IHRydWUsXG5cdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcblx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0bmF2aWdhdGlvbjoge1xuXHRcdG5leHRFbDogJy5zbGlkZXItY29tcGFuaWVzIC5zd2lwZXItYnV0dG9uLW5leHQnLFxuXHRcdHByZXZFbDogJy5zbGlkZXItY29tcGFuaWVzIC5zd2lwZXItYnV0dG9uLXByZXYnLFxuXHR9LFxuXHRzY3JvbGxiYXI6IHtcblx0XHRlbDogXCIuc2xpZGVyLWNvbXBhbmllcyAuc3dpcGVyLXNjcm9sbGJhclwiLFxuXHRcdGhpZGU6IGZhbHNlLFxuXHR9LFxuXHRicmVha3BvaW50czoge1xuXHRcdDc2Nzoge1xuXHRcdFx0ZW5hYmxlZDogZmFsc2Vcblx0XHR9XG5cdH1cbn0pXG5cbmNvbnN0IHN3aXBlcjcgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLXBpYycsIHtcblx0c2xpZGVzUGVyVmlldzogMSxcblx0bmF2aWdhdGlvbjoge1xuXHRcdG5leHRFbDogJy5zbGlkZXItcGljIC5zd2lwZXItYnV0dG9uLW5leHQnLFxuXHRcdHByZXZFbDogJy5zbGlkZXItcGljIC5zd2lwZXItYnV0dG9uLXByZXYnLFxuXHR9LFxuXHRwYWdpbmF0aW9uOiB7XG5cdFx0ZWw6IFwiLnNsaWRlci1waWMgLnN3aXBlci1wYWdpbmF0aW9uXCIsXG5cdFx0dHlwZTogXCJmcmFjdGlvblwiLFxuXHR9LFxufSlcblxuY29uc3Qgc3dpcGVyOCA9IG5ldyBTd2lwZXIoJyNzbGlkZXItc3RlcHMnLCB7XG5cdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcblx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0b2JzZXJ2ZXI6IHRydWUsXG5cdG5hdmlnYXRpb246IHtcblx0XHRuZXh0RWw6ICcjc2xpZGVyLXN0ZXBzIC5zd2lwZXItYnV0dG9uLW5leHQnLFxuXHRcdHByZXZFbDogJyNzbGlkZXItc3RlcHMgLnN3aXBlci1idXR0b24tcHJldicsXG5cdH0sXG5cdHBhZ2luYXRpb246IHtcblx0XHRlbDogXCIjc2xpZGVyLXN0ZXBzIC5zd2lwZXItcGFnaW5hdGlvblwiLFxuXHRcdHR5cGU6IFwiZnJhY3Rpb25cIixcblx0fSxcbn0pXG5cbmNvbnN0IHN3aXBlcjkgPSBuZXcgU3dpcGVyKCcjc2xpZGVyLXNpZ25zJywge1xuXHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG5cdHNwYWNlQmV0d2VlbjogMjAsXG5cdG9ic2VydmVyOiB0cnVlLFxuXHRuYXZpZ2F0aW9uOiB7XG5cdFx0bmV4dEVsOiAnI3NsaWRlci1zaWducyAuc3dpcGVyLWJ1dHRvbi1uZXh0Jyxcblx0XHRwcmV2RWw6ICcjc2xpZGVyLXNpZ25zIC5zd2lwZXItYnV0dG9uLXByZXYnLFxuXHR9LFxuXHRwYWdpbmF0aW9uOiB7XG5cdFx0ZWw6IFwiI3NsaWRlci1zaWducyAuc3dpcGVyLXBhZ2luYXRpb25cIixcblx0XHR0eXBlOiBcImZyYWN0aW9uXCIsXG5cdH0sXG59KVxuXG5jb25zdCBzd2lwZXIxMCA9IG5ldyBTd2lwZXIoJyNzbGlkZXItcmVzdWx0LTQnLCB7XG5cdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcblx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0b2JzZXJ2ZXI6IHRydWUsXG5cdG5hdmlnYXRpb246IHtcblx0XHRuZXh0RWw6ICcjc2xpZGVyLXJlc3VsdC00IC5zd2lwZXItYnV0dG9uLW5leHQnLFxuXHRcdHByZXZFbDogJyNzbGlkZXItcmVzdWx0LTQgLnN3aXBlci1idXR0b24tcHJldicsXG5cdH0sXG5cdHBhZ2luYXRpb246IHtcblx0XHRlbDogXCIjc2xpZGVyLXJlc3VsdC00IC5zd2lwZXItcGFnaW5hdGlvblwiLFxuXHRcdHR5cGU6IFwiZnJhY3Rpb25cIixcblx0fSxcbn0pXG5cbmNvbnN0IHN3aXBlcjExID0gbmV3IFN3aXBlcignI3NsaWRlci12aWRlbycsIHtcblx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuXHRzcGFjZUJldHdlZW46IDIwLFxuXHRvYnNlcnZlcjogdHJ1ZSxcblx0Ly8gbG9vcDogdHJ1ZSxcblx0bmF2aWdhdGlvbjoge1xuXHRcdG5leHRFbDogJyNzbGlkZXItdmlkZW8gLnN3aXBlci1idXR0b24tbmV4dCcsXG5cdFx0cHJldkVsOiAnI3NsaWRlci12aWRlbyAuc3dpcGVyLWJ1dHRvbi1wcmV2Jyxcblx0fSxcblx0cGFnaW5hdGlvbjoge1xuXHRcdGVsOiBcIiNzbGlkZXItdmlkZW8gLnN3aXBlci1wYWdpbmF0aW9uXCIsXG5cdFx0dHlwZTogXCJmcmFjdGlvblwiLFxuXHR9LFxufSkiXSwiZmlsZSI6Im1haW4uanMifQ==
