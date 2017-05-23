var botonDriver = document.getElementById("become-driver");
botonDriver.onclick=function(){
	function numero(){
		var numero = document.getElementById("phone").value;
		numero = ""

		if( !(/^\d{9}$/.test(numero)) ) {
 			alert("Ingrese un numero válido");
		}
		
	}
	numero();
}



var botonStart = document.getElementById("start");
botonStart.onclick = function(){
	var canvas = document.getElementById("caja-coordenadas");
	if (canvas.style.display !== 'none') {
	        canvas.style.display = 'none';
	    }
	    else {
	        canvas.style.display = 'block';
	    }
	var div = document.getElementById("header");
	var newDiv = document.createElement("div");

}
/*
function ocultar(){

	
	var x = document.getElementById("x").value;
	var y = document.getElementById("y").value;
	
	function Auto(x,y){
		this.x = x;
		this.y = y;
		

		this.update = function(){
			this.x = this.x + this.xspeed;
			this.y = this.y + this.yspeed;
		}

	}

	this.show = function(){
		fill(255);
		rect(this.x,this.y,10,10);
	}
})
*/
