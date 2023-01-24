//Comentario 1 línea
/*Comentario largo*/

/*document.getElementById("demo").innerHTML = 3 + 2;

document.getElementById('textorojo').style.color ='red';*/


function colorear() {

    document.getElementById('textorojo').style.color = 'red';
}


function mostrarmas() {

    document.getElementById('ocultable').style.display = 'block';
    document.getElementById('vermas').style.display = 'none';
}

function mostrarmenos() {
    document.getElementById('ocultable').style.display = 'none';
    document.getElementById('vermas').style.display = 'block';
}
