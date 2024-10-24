var registro = "<tr><th>Nombre</th><th>Correo</th><th>Áreas de Interés</th><th>Género</th><th>Fecha y Hora</th><th>Color Favorito</th><th>Disponibilidad</th></tr>";
var estilo=0;

function Registro() {
    /* Validación de que todos los campos del formulario han sido llenados */
    if (document.getElementById("nombre").value == false) {
        alert("Nombre vacío. Debes llenar todos los campos");
    } else if (document.getElementById("correo").value == false) {
        alert("Correo vacío. Debes llenar todos los campos");
    } else if(document.querySelectorAll('input[name=area]:checked').length==0){
        alert("No seleccionó ninguna área");
    }else if(document.querySelector('input[name=genero]:checked')==null){
        alert("No seleccionó el género.");
    }else if(document.getElementById("tiempo").value==""){
        alert("No seleccionó fecha y hora");
    }else {
    if (estilo%2 == 0) {
        registro = registro + "<tr class=\"renglon2\">";
    } else {
        registro = registro + "<tr class=\"renglon1\">";
    }
    /* Nombre */
    x = document.getElementById("nombre").value;
    registro = registro + "<td>" + x + "</td>";

    /* Correo*/
    x = document.getElementById("correo").value;
    registro = registro + "<td>" + x + "</td>";

    //Areas
    registro = registro + "<td>"
    z = document.querySelectorAll('input[type=checkbox]:checked');
    for(var v of z) {
      consola = v.value;
      registro = registro + consola + "<br>";
    }
    registro = registro + "</td>"

    //Género
    radio = document.querySelector('input[name=genero]:checked');
    registro = registro + "<td>" + radio.value + "</td>";

    //Fecha
    x = document.getElementById("tiempo").value;
    registro = registro + "<td>" + x + "</td>";

    //Color
    color = document.getElementById("color").value
    registro = registro + "<td>" +`<div style="background-color:${color}; width:20px; height:20px; border:1px solid #000; display:inline-block;"></div>` + "</td>";

    //Disponibilidad
    x = document.getElementById("rango").value;
    registro = registro + "<td>" + x + "</td>";

    /* Finalización del renglón de la tabla */
    registro = registro + "</tr>";
    document.getElementById("candidatos").innerHTML = registro;

    /* Limpiar los campos */
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("soft").checked = false;
    document.getElementById("ciber").checked = false;
    document.getElementById("inte").checked = false;
    document.getElementById("masculino").checked = false;
    document.getElementById("femenino").checked = false;
    document.getElementById("otro").checked = false;
    document.getElementById("tiempo").value = "";
    document.getElementById("color").value = "#000000";
    document.getElementById("rango").value = "0";

    /* Se alterna el estilo de los renglones */
    estilo = estilo + 1;
    }
}