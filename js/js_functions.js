function top_pad_check() {
	const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (vw < 400) {
		const element = document.querySelector('.description');
		const element2 = document.querySelector('.center_container');
		const element3 = document.querySelector('.link_row');
		element.style.setProperty('width','100%');
		element2.style.setProperty('width','100%');
		element.style.setProperty('padding-left','0px');
		element.style.setProperty('padding-right','0px');
		element2.style.setProperty('padding-top','0px');
		element.style.setProperty('min-width',vw-20+'px');
		element2.style.setProperty('min-width',vw-20+'px');
	}
	if (vw > 400 && vw < 720) {
		const element = document.querySelector('.description');
		const element2 = document.querySelector('.center_container');
		element.style.setProperty('width','75%');
		element.style.setProperty('padding-left','20px');
		element.style.setProperty('padding-right','20px');
	}
	if (vw > 720) {
		const element = document.querySelector('.description');
		const element2 = document.querySelector('.center_container');
		element.style.setProperty('width','60%');
		element.style.setProperty('padding-left','20px');
		element.style.setProperty('padding-right','20px');
		element2.style.setProperty('padding-top','5%');
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
		element.style.setProperty('--pagebackground', '#8db48e');
		element.style.setProperty('--containerbackground', '#f5f5f5');
		element.style.setProperty('--highlight', '#4d724d');
		element.style.setProperty('--textcolor', '#383232');
		element.style.setProperty('--socialcolor', '#383232');
	}
	else if (choice == 4) {
		element.style.setProperty('--pagebackground', '#0d0835');
		element.style.setProperty('--containerbackground', '#0f0c24');
		element.style.setProperty('--highlight', '#c1436d');
		element.style.setProperty('--textcolor', '#ffffff');
		element.style.setProperty('--socialcolor', '#ffffff');
	}
}

function view_section(string_with_id) {
	var sections = ["#home","#projects","#skills","#references","#resume"];
	sections.forEach( function func(value) {
		if (value == string_with_id) {
			const element = document.querySelector(string_with_id);
			console.log(getComputedStyle(element)["display"]);
			element.style.setProperty('display','inline-block');
			console.log(getComputedStyle(element)["display"]);
			document.title = 'SE> '+ string_with_id.charAt(1).toUpperCase() + string_with_id.substr(2);
		} else {
			const element = document.querySelector(value);
			element.style.setProperty('display','none');
		}
	}); 
}