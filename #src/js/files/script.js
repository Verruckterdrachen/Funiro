window.onload = function () {
	document.addEventListener("click", documentActions);
	function documentActions(e) {
		const targetElement = e.target;
		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
			}
		}
		if (targetElement.classList.contains('search-form__icon')) {
			document.querySelector('.search-form').classList.toggle('_active');
		} else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
			document.querySelector('.search-form').classList.remove('_active');
		}
		if (targetElement.classList.contains('cart-header__icon') || targetElement.closest('.cart-header__icon')) {
			document.querySelector('.cart-header').classList.toggle('_active');
		} else if (!targetElement.closest('.cart-header') && document.querySelectorAll('.cart-header._active').length > 0) {
			document.querySelector('.cart-header').classList.remove('_active');
		}
	}
	const headerElement = document.querySelector('.header');
	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	};
	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
}