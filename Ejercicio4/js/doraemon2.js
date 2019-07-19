/**
 * 
 */

var modul = (function(){
	var doraemons;
	doraemons = document.querySelectorAll("#fons>div");
	
	function privateInitModule (){
		var i;
		for(i=0 ; i<doraemons.length ; i++){
			doraemons[i].addEventListener("click", moverDoraemon, false);
		}
	}
	
	function moverDoraemon(e){
		var myNode = e.currentTarget;
		myNode.style.left = "300px";
	};
	
	return {
		initModule: privateInitModule
	};
})();

window.addEventListener("load",modul.initModule,false);