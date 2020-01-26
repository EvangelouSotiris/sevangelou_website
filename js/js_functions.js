function top_pad_check() {
	const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (vw < 350) {
		const element = document.querySelector('.description');
		const element2 = document.querySelector('.center_container');
		const style = getComputedStyle(element);
		const style2 = getComputedStyle(element2);
		element.style.setProperty('min-width',vw);
		element2.style2.setProperty('min-width',vw);
	}
	if (vw < 940) {
		const element = document.querySelector('.center_container');
		const style = getComputedStyle(element);
		element.style.setProperty('padding-top','5px');
	}
	else {
		const element = document.querySelector('.center_container');
		const style = getComputedStyle(element);
		element.style.setProperty('padding-top','10vh');
	}
}

function colorscheme_change(choice) {
	const element = document.querySelector('body');
	const style = getComputedStyle(element);
	if (choice == 1) {
		element.style.setProperty('--pagebackground', '#020300');
		element.style.setProperty('--containerbackground', '#051622');
		element.style.setProperty('--highlight', '#1ba098');
		element.style.setProperty('--textcolor', '#deb992');
		element.style.setProperty('--socialcolor', '#deb992');
	}
	else if (choice == 2) {
		element.style.setProperty('--pagebackground', '#faf0dc');
		element.style.setProperty('--containerbackground', '#0b4141');
		element.style.setProperty('--highlight', '#ff6864');
		element.style.setProperty('--textcolor', '#ffffff');
		element.style.setProperty('--socialcolor', '#0b4141');
	}
	else if (choice == 3) {
		element.style.setProperty('--pagebackground', '#ffffff');
		element.style.setProperty('--containerbackground', '#9630d8');
		element.style.setProperty('--highlight', '#6effc4');
		element.style.setProperty('--textcolor', '#deb992');
		element.style.setProperty('--socialcolor', '#9630d8');
	}
	else if (choice == 4) {
		element.style.setProperty('--pagebackground', '#22223a');
		element.style.setProperty('--containerbackground', '#d56c2c');
		element.style.setProperty('--highlight', '#ff6864');
		element.style.setProperty('--textcolor', '#ffffff');
		element.style.setProperty('--socialcolor', '#deb992');
	}
	else if (choice == 5) {
		element.style.setProperty('--pagebackground', '#22223a');
		element.style.setProperty('--containerbackground', '#d56c2c');
		element.style.setProperty('--highlight', '#ff6864');
		element.style.setProperty('--textcolor', '#ffffff');
		element.style.setProperty('--socialcolor', '#deb992');
	}
}