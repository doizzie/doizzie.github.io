function infocus(sec){
	var sectionid = sec;
	var sec = document.getElementById(sectionid);
	var secss = document.getElementsByClass("sectione");
	for (var i=0; i<=seccs.length; i++){
		if (sec != secss[i]){
			secss[i].classList.add("notfocused");
		}
	}
}