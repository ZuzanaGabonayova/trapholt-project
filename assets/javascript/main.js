const nav = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 60) {
		nav.style.backgroundColor = '#f2f3f7';
	} else {
		nav.style.backgroundColor = 'transparent';
	}
}); 