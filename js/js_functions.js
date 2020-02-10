function top_pad_check() {
	const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (vw < 450) {
		const element = document.querySelector('.description');
		const element3 = document.querySelector('.link_row');
		element.style.setProperty('width','100%');
		element.style.setProperty('padding-left','0px');
		element.style.setProperty('padding-right','0px');
		element.style.setProperty('min-width',vw-30+'px');
	}
	if (vw > 450 && vw < 720) {
		const element = document.querySelector('.description');
		element.style.setProperty('width','75%');
		element.style.setProperty('padding-left','10px');
		element.style.setProperty('padding-right','10px');
	}
	if (vw > 720) {
		const element = document.querySelector('.description');
		element.style.setProperty('width','60%');
		element.style.setProperty('padding-left','20px');
		element.style.setProperty('padding-right','20px');
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
			element.style.setProperty('display','inline-block');
			document.title = 'SE> '+ string_with_id.charAt(1).toUpperCase() + string_with_id.substr(2);
		} else {
			const element = document.querySelector(value);
			element.style.setProperty('display','none');
		}
	});
}

function load_project(choice) {
	var sections = [".web_projects",".ml_projects",".cs_projects",".gs_projects",".la_projects",".net_projects"];
	var proj_desc = ["w_proj","m_proj","c_proj","g_proj","l_proj","n_proj"];
	const element = document.querySelector(".project_overview");
	element.style.setProperty("display","none");
	const element2 = document.querySelector(sections[choice]);
	element2.style.setProperty("display","block");
	var project_list = document.getElementsByClassName(proj_desc[choice])
	project_list[0].style.setProperty("display","block");
	for (i=1; i< project_list.length; i++){
		project_list[i].style.setProperty("display","none");
	}
}

function return_to_overview() {
	var sections = [".web_projects",".ml_projects",".cs_projects",".gs_projects",".la_projects",".net_projects"];
	var proj_desc = [".w_proj",".m_proj",".c_proj",".g_proj",".l_proj",".n_proj"];
	const element = document.querySelector(".project_overview");
	element.style.setProperty("display","block");
	sections.forEach( function hide(value){
		const element2 = document.querySelector(value);
		element2.style.setProperty("display","none");
	});
}

function next_project() {
	var sections = ["web_projects","ml_projects","cs_projects","gs_projects","la_projects","net_projects"];
	var proj_desc = ["w_proj","m_proj","c_proj","g_proj","l_proj","n_proj"];

	for (i=0; i< sections.length; i++){
		if (document.getElementsByClassName(sections[i])[0].style.display == "block"){
			var position = i;
			var projects = document.getElementsByClassName(proj_desc[position]);
			for (j=0; j< projects.length; j++){
				if (projects[j].style.display == "block"){
					if (j==projects.length-1){
						projects[j].style.setProperty("display","none");
						projects[0].style.setProperty("display","block");
						break;
					}
					else {
						projects[j].style.setProperty("display","none");
						projects[j+1].style.setProperty("display","block");
						break;
					}
				}
			}
		}
	}
}

function prev_project() {
	var sections = ["web_projects","ml_projects","cs_projects","gs_projects","la_projects","net_projects"];
	var proj_desc = ["w_proj","m_proj","c_proj","g_proj","l_proj","n_proj"];

	for (i=0; i< sections.length; i++){
		if (document.getElementsByClassName(sections[i])[0].style.display == "block"){
			var position = i;
			var projects = document.getElementsByClassName(proj_desc[position]);
			for (j=0; j< projects.length; j++){
				if (projects[j].style.display == "block"){
					if (j==0){
						projects[0].style.setProperty("display","none");
						projects[projects.length-1].style.setProperty("display","block");
						break;
					}
					else {
						projects[j].style.setProperty("display","none");
						projects[j-1].style.setProperty("display","block");
						break;
					}
				}
			}
		}
	}
}