let inputMes = document.getElementById('input-mes');
let btnActualizar = document.getElementById('btn-forzar-act');

let displayMes = document.getElementById('mes');

inputMes.addEventListener('input', function escribirMes() {
    displayMes.innerHTML = inputMes.value;
});

const stringElemScr = ".area-boletin"

function copiarString() {
    navigator.clipboard.writeText(stringElemScr);
    alert('Pega el texto copiado en la extensión "DOM Capture" y da click en "Save as image" 👉');
}

function convertirTexto() {
    var input = document.getElementById('input-lista');
    var lista = document.getElementById('lista');

    // Se limpia la lista antes de añadir nuevos elementos
    lista.innerHTML = '';

    // Obtiene el texto ingresado por el usuario
    var texto = input.value;

    // Divide el texto en líneas
    var lineas = texto.split('\n');

    // Crea un elemento <li> por cada línea y se agrega a la lista
    lineas.forEach(function (linea) {
        if (linea.trim() !== '') {
            var li = document.createElement('li');
            li.textContent = linea;
            lista.appendChild(li);
        }
    });
}
var tamanoFont = 24
lista.style.fontSize = tamanoFont + "pt";
var lineaFont = 40
lista.style.lineHeight = lineaFont + "pt";

function aumentarTamano() {
    tamanoFont++
    lineaFont = lineaFont + 3
    lista.style.fontSize = tamanoFont + "pt";
    lista.style.lineHeight = lineaFont + "pt";

}
function disminuirTamano() {
    tamanoFont--
    lineaFont = lineaFont - 3
    lista.style.fontSize = tamanoFont + "pt";
    lista.style.lineHeight = lineaFont + "pt";
}