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
	
}

export default header;