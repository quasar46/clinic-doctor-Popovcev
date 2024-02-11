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