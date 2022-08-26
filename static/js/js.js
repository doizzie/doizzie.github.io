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

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('loadedContent').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('loadingPage').style.visibility="hidden";
         document.getElementById('loadedContent').style.visibility="visible";
      },1000);
  }
}