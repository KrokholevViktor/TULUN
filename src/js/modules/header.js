function header() {
	// Mobile nav button
	const navBtn = document.querySelector('.header__mobile-nav-btn');
	const menuMobile = document.querySelector('.header__row--menu');
	const menu = document.querySelector('.menu');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		menuMobile.classList.toggle('header__row--mobile');
		menu.classList.toggle('menu--mobile');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
	window.addEventListener('resize', () => {
		if(window.screen.width > 998) {
			menuMobile.classList.remove('header__row--mobile');
			menu.classList.remove('menu--mobile');
			menuIcon.classList.remove('nav-icon--active');
		}
	})


	//Разворачивает сворачивает поле input формы search
	const searchForm = document.querySelector('.header__search-form'),
		  searchInput = document.querySelector('.header__search-input');

	searchForm.onmouseover = function () {
		searchInput.style.cssText = `width: 200px; opacity: 1; padding: 10px 15px; margin-left: 0;`;
	};
	searchInput.addEventListener('blur', ()=>{
		searchInput.style.cssText = `width: 0; opacity: 0; padding: 0; margin-left: -20px;`;
	});
	

	//реализация hover эффекта для мобилок и планшетов в меню
	const menuLinks = document.querySelectorAll('.menu__link');

	function hideSubMenu () {
		menuLinks.forEach((item) => {
			item.parentNode.classList.remove('hover');
		})
	}
	

	menuLinks.forEach((item) => {

		item.addEventListener('touchstart', (e) => { // При таче удаляет класс hover у всех блоков ссылок
			hideSubMenu();
		})

		item.addEventListener('touchend', (e) => { // Добавляет класс hover на блок ссылки если блок имеет подменю и не имеет класс hover
			
			if (item) {
				if (item.parentNode.childNodes.length > 3 && !item.parentNode.classList.contains('hover')) {
					e.preventDefault();
					item.parentNode.classList.add('hover');
				} else if (item.parentNode.childNodes.length > 3) {
					e.preventDefault();
					item.parentNode.classList.remove('hover');
				}
			} 
		});
	});

	document.addEventListener('click', function (e) {
		if (!e.target.classList.contains('menu__sub-menu')) { // Скрыть подменю при клике по документу мимо подменю
			hideSubMenu();
		  }
	  });

	window.addEventListener('orientationchange', () => { // Скрыть подменю при изменении ориентации
		hideSubMenu();
	})


	// функциональность фиксирования шапки при прямом и обратном скролле
	
	const headerMain = document.querySelector('.header');
	let lastScrollTop = 0;


	window.addEventListener('scroll', function() {
		hideSubMenu();
		let currentScrollTop = window.pageXOffset || document.documentElement.scrollTop;

		if (currentScrollTop > lastScrollTop  || currentScrollTop == 0) {
			//прямой скролл
			headerMain.classList.remove('header--fixed');
			document.body.style.marginTop = `0px`;
		} else if (document.documentElement.scrollTop > 400){
			// обратный скролл
			headerMain.classList.add('header--fixed');
			document.body.style.marginTop = `${headerMain.offsetHeight + 40}px`;
		};

		lastScrollTop = currentScrollTop;
	})
}

export default header;