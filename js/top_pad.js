function top_pad_check() {
	const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
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