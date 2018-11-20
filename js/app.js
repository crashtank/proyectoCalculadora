/*Asignacion de variables */
	/*----------------------------------------------------------------*/		
	
	const  display =  document.getElementById('display');
	var a,b,opera;


/*----------------------------------------------------------------*/
/* Espacio para las funciones que inician la calculadora*/

	calc();
	

/*----------------------------------------------------------------*/

/*Assignacion de valor numerico y signo a las imagenes*/	
	/*----------------------------------------------------------------*/
function calc (){
		

	document.getElementById('7').onclick = function () {
		var valor = 7;
		valorDigito(valor);
		Show(display.innerHTML);		
	}

	document.getElementById('8').onclick = function () {
		var valor = 8;
		valorDigito(valor);
		Show(display.innerHTML);
	}

	document.getElementById('9').onclick = function () {
		var valor = 9;
		valorDigito(valor);
		Show(display.innerHTML);
	}

	document.getElementById('4').onclick = function () {
		var valor = 4;
		valorDigito(valor);
		Show(display.innerHTML);
	}

	document.getElementById('5').onclick = function () {
		var valor = 5;
		valorDigito(valor);
		Show(display.innerHTML);
	}

	document.getElementById('6').onclick = function () {
		var valor = 6;
		valorDigito(valor);
		Show(display.innerHTML);
	}

	document.getElementById('1').onclick = function () {
		var valor = 1;
		valorDigito(valor);
		Show(display.innerHTML);
	}

	document.getElementById('2').onclick = function () {
		var valor = 2;
		valorDigito(valor);
		Show(display.innerHTML);
	}

	document.getElementById('3').onclick = function () {
		var valor = 3;
		valorDigito(valor);
		Show(display.innerHTML);
	}

	document.getElementById('0').onclick = function () {
		var valor = 0;
		valorDigito(valor);
		Show(display.innerHTML);
	}

	document.getElementById('punto').onclick = function(){
			
			var punto=display.innerHTML.includes(".");
			if(!punto){
				punto=true;
				display.innerHTML+=".";
		}		
		Show(display.innerHTML);
	}

/*Teclas de operaciones*/
/*----------------------------------------------------------------*/   

		document.getElementById('sign').onclick = function(){
			var AsigNegativo=display.innerHTML.includes("-");
			var inicioCero = (display.innerHTML=="0");
			if(inicioCero){
				return;
			}
			if(!AsigNegativo){
				display.innerHTML="-"+display.innerHTML;
				
			}else{
				display.innerHTML=display.innerHTML.slice(1);
				
			}
		}
    document.getElementById('on').onclick = function () {
		restablecer();
		display.textContent = 0;
	}
    	
    	document.getElementById('mas').onclick = function(){
			a = display.textContent;
			opera = "+";
			limpiar();
		}
		document.getElementById('menos').onclick = function(){
			a = display.textContent;
			opera = "-";
			limpiar();
		}
		document.getElementById('por').onclick = function(){
			a = display.textContent;
			opera = "*";
			limpiar();
		}
		document.getElementById('dividido').onclick = function(){
			a = display.textContent;
			opera = "/";
			limpiar();
		}
		document.getElementById('igual').onclick = function(){
			b = display.textContent;
			operaciones();
		}	

			
}

/*Assignacion de funciones de operaciones y botones */
	/*----------------------------------------------------------------*/

			function limpiar(){
				display.textContent = "";
			}
	
			function restablecer() {
				display.textContent = "";
				a=0;
				b=0;
				opera="";
			}

			function operaciones(){
				var o = 0;
				switch(opera){
					case "+":
					res = parseFloat(a) + parseFloat(b);	
					break;
					case "-":
					res = parseFloat(a) - parseFloat(b);
						break;
					case "*":
					res = parseFloat(a) * parseFloat(b);
						break;
					case "/":
					res = parseFloat(a) / parseFloat(b);						
						break;
				}
				restablecer();
				display.textContent = res.toString().substr(0, 8);

			}

		function tocarTecla(){
			pulsada = this;
       		this.style.borderWidth = this != 'mas' ? '3px' : '6px 3px 4px 0';
		}

		function soltarTecla() {
        	pulsada.style.borderWidth = '0';
    	}

    	function efectoTecla(){
    		var pulsacion = document.querySelectorAll( '.tecla' );
        	for ( var i = 0; i < pulsacion.length; i++ ) {
            pulsacion[i].style.width = "78px";
            pulsacion[i].style.border = '0 solid #999';
            pulsacion[i].onmousedown = tocarTecla;
            pulsacion[i].onmouseup = soltarTecla;
        	}
    	 }
    
    	function Show(msg){
			var text= msg.slice(0,8);
			display.innerHTML = text;
		}
		
		function valorDigito(valor){
			if(display.innerHTML=="0"){
				display.innerHTML=valor;
			}else{
				display.innerHTML+=valor;
			}
		}
		efectoTecla();