var botonDriver = document.getElementById("become-driver");
botonDriver.onclick=function(){
	function numero(){
		var numero = document.getElementById("phone").value;
		numero = ""

		if( !(/^\d{9}$/.test(numero)) ) { //Validación para ingresar 9 numeros
 			alert("Ingrese un numero válido");
		}
		
	}
	numero();
}





var botonStart = document.getElementById("start");
botonStart.onclick = function(){ //al hacer click se ejecutan todas estas funciones



	function ocultarDiv(){
		var caja = document.getElementById("caja-coordenadas");
		if (caja.style.display !== 'none') {
		        caja.style.display = 'none';
	    }
	    else {
	        caja.style.display = 'block';
	    }
//oculta la caja donde se ingresan las coordenadas
	
	
	}
	ocultarDiv();

	function mostrarDiv(){
	var cajaplay = document.getElementById("play");
	var canvas = document.createElement("div");	
   	canvas.setAttribute("id", "canvas");

   	cajaplay.appendChild(canvas);
//muestra el div canvas al ocultarse el div de las coordenadas 
		
	}
	mostrarDiv();

	function validate(){
			var x = document.getElementById("x").value;
		var y = document.getElementById("y").value;
		x = "";
		y = "";

		if ((x > 10 || x < 0 )&& (y > 6 || y < 0 )){
			alert("Debe ingresar un numero entre 0 - 10 y 0 - 6");
		}
	//validación que te pide ingresar coordenadas 	
	}

	validate();

	function moverAuto(){


		var x = document.getElementById("x").value;
		var y = document.getElementById("y").value;

		
		var tablero = [
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0]
		];

		//tablero[x][y] = "A";
		
		var canvas = document.getElementById("canvas");




		function Auto(x,y){
			this.x = x;
			this.y = y;
			this.avanzarizq = x+1;
			this.retrocederizq = x-1;
			this.avanzararriba = y+1;
			this.avanzarabajo = y-1;
			

			this.moverautito = function(){
				this.x = this.x + this.xspeed;
				this.y = this.y + this.yspeed;
			}

		}

		//var autito = New Auto(x,y);



	}

	moverAuto();


};

	

