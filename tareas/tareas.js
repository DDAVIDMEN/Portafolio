var estilo = 0;

function Añadir() {
    /* Validación de que todos los campos del formulario han sido llenados */
    if (document.getElementById("tarea").value == false) {
        alert("Tarea vacía. Debes llenar todos los campos");
    } else {
        var tableBody = document.querySelector('#tareas tbody');

        var nuevaFila = document.createElement('tr');
        nuevaFila.setAttribute('id', estilo);
        if (estilo % 2 == 0) {
            nuevaFila.setAttribute('class', 'renglon2');
        } else {
            nuevaFila.setAttribute('class', 'renglon1');
        }
        /*Estado*/
        var celdaCheckbox = document.createElement('td');
        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `Checkbox${estilo}`);
        checkbox.setAttribute('onchange', `toggleTachado('${estilo}')`);
        celdaCheckbox.appendChild(checkbox);

        /* Nombre */
        var celdaTarea = document.createElement('td');
        celdaTarea.setAttribute('id', estilo);
        var textoTarea = document.createTextNode(document.getElementById("tarea").value);
        celdaTarea.appendChild(textoTarea);

        // Añadir las celdas a la fila
        nuevaFila.appendChild(celdaCheckbox);
        nuevaFila.appendChild(celdaTarea);

        // Añadir la nueva fila al tbody
        tableBody.appendChild(nuevaFila);

        /* Limpiar los campos */
        document.getElementById("tarea").value = "";


        /* Se alterna el estilo de los renglones */
        estilo = estilo + 1;
        
    }
}

function Borrar() {
    document.getElementById("tareas").querySelector('tbody').innerHTML = "";
}

function toggleTachado(id) {
    const tarea = document.getElementById(id);
    const row = document.getElementById(id);
    const tableBody = document.querySelector('#tareas tbody');
    console.log(tableBody);
    tarea.classList.toggle('tachado');
    if (row.querySelector('input[type="checkbox"]').checked) {
        moverAlFinal(row, tableBody);
    } else {
        tableBody.insertBefore(row, tableBody.firstChild); // Mover al principio de la tabla
    }
}

function moverAlFinal(fila, tableBody) {
    // Mover la fila al final sin eliminarla
    tableBody.appendChild(fila);
}

/*
var registro = "<thead><tr><th>Estado</th><th>Tarea</th></tr></thead><tbody>";
var estilo=0;

function Añadir() {
    /* Validación de que todos los campos del formulario han sido llenados 
    if (document.getElementById("tarea").value == false) {
        alert("Tarea vacía. Debes llenar todos los campos");
    }else {
    if (estilo%2 == 0) {
        registro = registro + <tr class="renglon1" id="${estilo}">;
    } else {
        registro = registro + <tr class="renglon2" id="${estilo}">;
    }
    /Estado/
    registro = registro + <td><input type="checkbox" id="Checkbox${estilo}" onchange="toggleTachado('${estilo}')"></td>
    
    /* Nombre 
    x = document.getElementById("tarea").value;
    registro = registro + <td id="${estilo}"> + x + "</td>";

    /* Finalización del renglón de la tabla 
    registro = registro + "</tr></tbody>";
    document.getElementById("tareas").innerHTML = registro;

    /* Limpiar los campos 
    document.getElementById("tarea").value = "";


    /* Se alterna el estilo de los renglones 
    estilo = estilo + 1;
    console.log(estilo);
    }
}

function Borrar(){
    document.getElementById("tareas").innerHTML = "";
    registro =  "<thead><tr><th>Estado</th><th>Tarea</th></tr></thead><tbody>";
}

function toggleTachado(id) {
    const tarea = document.getElementById(id);
    const row = document.getElementById(id);
    const tableBody = document.querySelector('#tareas tbody');
    console.log(tableBody);
    tarea.classList.toggle('tachado');
    if (row.querySelector('input[type="checkbox"]').checked) {
        moverAlFinal(row, tableBody);
    } else {
        tableBody.insertBefore(row, tableBody.firstChild); // Mover al principio de la tabla
    }
}

function moverAlFinal(fila, tableBody) {
    // Solo mover la fila al final sin eliminarla
    tableBody.appendChild(fila);
}*/