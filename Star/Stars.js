function stars(){                               //Funcion para crea estrellas
    let e = document.createElement('div');
    e.setAttribute('class', 'star');
    document.body.appendChild(e);

    // Obtener la altura del encabezado
    let encabezado = document.querySelector('.Encabezado');
    let encabezadoHeight = encabezado.offsetHeight;

    // Ancho de la pantalla
    let screenWidth = window.innerWidth;

    // Posición aleatoria en el ancho de la pantalla
    let xPos = Math.random() * screenWidth;
    e.style.left = xPos + 'px';

    // Posición inicial justo debajo del encabezado
    e.style.top = encabezadoHeight + 'px';

    // Tamaño y duración de las estrellas
    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + size + 'px';
    e.style.animationDuration = 2 + duration + 's';

    //Elimina estrellas pasado los 6 seg
    setTimeout (function(){
        document.body.removeChild(e);
    },6000)
}

//Genera estrellas periodicamente
setInterval (function (){
    stars()
},110)