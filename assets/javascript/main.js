const nav = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 60) {
		//nav.style.color = 'white'
		nav.style.backgroundColor = '#506f65';
		var x = document.getElementsByClassName("nav-item");
		
		for (let i = 0; i < 6; i++) {
			x[i].style.color = '#ffffff';
		}
		

	} else {
		nav.style.backgroundColor = 'transparent';
		var x = document.getElementsByClassName("nav-item");
		
		for (let i = 0; i < 6; i++) {
			x[i].style.color = '#000000';
		}
	}
}); 
if ("nav-item.nav-link.active"){
	document.getElementsByClassName("nav-item.nav-link.active").style.color = "#f79957";
}