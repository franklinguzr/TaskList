(function() {
	var lista = document.getElementById("lista");
	var texto= document.getElementById("texto");
	var boton=document.getElementById("btn");
	var hola= document.getElementById("hola");


	//funcion agregar
	function agregar() {
		if(texto.value!=""){
		var elemento=document.createElement("li");
		var contenido=document.createTextNode(texto.value);
		elemento.appendChild(contenido);
		lista.insertBefore(elemento,null);
	}else{
		alert("ingrese una tarea valida")
	}
	}
	//funcion eliminar (verificar cuadro texto)
	function eliminar() {
	lista.removeChild(this);
	}
	
	function verificar() {
	if(texto.value==""){
		texto.setAttribute("class","error");
		texto.placeholder="Ingresa una tarea valida";
		
	}else{
		texto.className="correcto";
	}
	}
	//evento boton
	boton.addEventListener("click",agregar);

	//evento cuadro texto
	texto.addEventListener("focusout",verificar);
	//evento lista
	
})()