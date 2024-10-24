function Calcular() {
    valor = document.getElementById("numero").value;
    var x = parseFloat(valor);
    var salida;
    if (x >= 0 && x < 6) {
        salida = "NA";
    } else if (x >= 6 && x < 7.5) {
        salida = "S";
    } else if (x >= 7.5 && x < 9) {
        salida = "B";
    } else if (x >= 9 && x < 10) {
        salida = "MB";
    } else if (x == 10) {
        salida = "LAP";
    } else {
        salida = "No válida";
    }
    document.getElementById("resultado1").innerHTML = "Su calificación es " + salida;
}

function borrar1() {
    document.getElementById("resultado1").innerHTML = "";
    document.getElementById("numero").value = "";
}
function borrar2() {
    document.getElementById("resultado2").innerHTML = "";
    document.getElementById("numero2").value = "";
}
function borrar3() {
    document.getElementById("resultado3").innerHTML = "";
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("hombre").checked = false;
    document.getElementById("mujer").checked = false;
    document.getElementById("otro").checked = false;
    document.getElementById("fecha").value = "";
    document.getElementById("color").value = "";
}
function Leer() {
    valor = document.getElementById("numero2").value;
    var n = parseInt(valor);
    var resul;
    if (n >= 0) {
        resul = n + "! = " + Factorial(n);
    } else {
        resul = "El factorial de " + n + " no está definido"
    }
    document.getElementById("resultado2").innerHTML = resul;
}
function Factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    else
        return n * Factorial(n - 1);
}
function registro(){
    x ="Nombre: "+ document.getElementById("nombre").value;
    x = x + ". Correo: " + document.getElementById("correo").value;
    x = x + ". Edad: " + document.getElementById("edad").value;
    x = x + ". Género:";
    if(document.getElementById("hombre").checked){
        x = x + " Hombre";
    }else if (document.getElementById("mujer").checked){
        x = x + " Mujer";
    }else if (document.getElementById("otro").checked){
        x = x + " No binario";
    }
    x += ". Nació en el " + document.getElementById("fecha").value;
    x += ". Y su color favorito es el   " /*+ document.getElementById("color").value*/;
    var color = document.getElementById("color").value
    x += `<div style="background-color:${color}; width:20px; height:20px; border:1px solid #000; display:inline-block;"></div>`;
    document.getElementById("resultado3").innerHTML = x;
}