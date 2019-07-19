/**
 * 
 */

//var doraemon1;
//
//doraemon1 = document.getElementById("doraemon1");
//
//doraemon1.onclick = function (e){
//	alert("hola");
//	doraemon1.style.left="400px";
//	doraemon1.style["left"]="250px";
//	doraemon1["style"]["left"]="250px";
//};

var doraemons, i;

doraemons = document.querySelectorAll("#fons>div");

console.log(doraemons);

//for(i=0 ; i<doraemons.length ; i++){
//	doraemons[i].onclick = function (e){
////		alert("hola");
////		console.log(doraemons);
////		console.log(i);
////		console.log(doraemons[i]);
////		doraemons[i].style.left = "300px";
//		var myNode = e.currentTarget;
//		console.log(myNode);
//		myNode.style.left = "300px";
//	};
//	
//}


for(i=0 ; i<doraemons.length ; i++){
//  doraemons[i].onclick = moverDoraemon;
	doraemons[i].addEventListener("click", moverDoraemon, false);
//	doraemons[i].addEventListener("click", 
//	function (e){
//		var myNode = e.currentTarget;
//		console.log(myNode);
//		myNode.style.left = "300px";
//	}, false);
}

console.log(doraemons[1]);
doraemons[1].click();
//doraemons[1].dispatchEvent(new Event("click"));


function moverDoraemon(e){
//	alert("hola");
//	console.log(doraemons);
//	console.log(i);
//	console.log(doraemons[i]);
//	doraemons[i].style.left = "300px";
	var myNode = e.currentTarget;
	myNode.style.left = "300px";
	console.log(e.screenY);
	console.log(e.clientY);
	console.log(e.offsetY);
	
};

