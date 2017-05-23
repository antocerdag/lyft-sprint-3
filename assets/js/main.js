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

	function ocultarDiv(){
		var caja = document.getElementById("caja-coordenadas");
		if (caja.style.display !== 'none') {
		        caja.style.display = 'none';
	    }
	    else {
	        caja.style.display = 'block';
	    }

	
	
	}
	ocultarDiv();

	function mostrarDiv(){

		var canvas = document.getElementById("canvas");
		
	}
	mostrarDiv();

};

	
	var x = document.getElementById("x").value;
	var y = document.getElementById("y").value;

	if (x > 10){
		alert("Debe ingresar un numero entre 1 y 10");
	}
	if (y > 6){
		alert("Debe ingresar un numero entre 1 y 6");
	}
	var tablero = [
	  [0,0,0,0,0,0,0,0,0,0],
	  [0,0,0,0,0,0,0,0,0,0],
	  [0,0,0,0,0,0,0,0,0,0],
	  [0,0,0,0,0,0,0,0,0,0],
	  [0,0,0,0,0,0,0,0,0,0],
	  [0,0,0,0,0,0,0,0,0,0]
	];

	tablero[x][y] = "A";
	
	var canvas = document.getElementById("canvas");


/*

	function Auto(x,y){
		this.x = x;
		this.y = y;
		

		this.update = function(){
			this.x = this.x + this.xspeed;
			this.y = this.y + this.yspeed;
		}

	}

*/
