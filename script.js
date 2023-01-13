
/**
 * Santiago Marranti 9/1/2023
 */

let seleccionado;

/**
 * Estas dos constantes almacenan los distintos componentes html
 */
const boton = [document.getElementById('info-general'),
                document.getElementById('formacion'),
                document.getElementById('conocimientos'),
                document.getElementById('experiencia'),
                document.getElementById('referencias')]

const seccion = [document.getElementById('div-general'),
                 document.getElementById('div-formacion'),
                 document.getElementById('div-conocimiento'),
                 document.getElementById('div-experiencia'),
                 document.getElementById('div-referencias')]

const contacto = document.getElementById('contacto');

//esta seleccionado por defecto.
boton[0].style.backgroundColor = 'rgb(217, 217, 217)';
seleccionado = 0;

boton[0].addEventListener('click', function () {
    cambiarSeccion(0);
})

boton[1].addEventListener('click', function () {
    cambiarSeccion(1);
})

boton[2].addEventListener('click', function () {
    cambiarSeccion(2);
})

boton[3].addEventListener('click', function () {
    cambiarSeccion(3);
})

boton[4].addEventListener('click', function () {
    cambiarSeccion(4);
})

function cambiarSeccion(index) {
        //Salimos en caso de ser verdadero
        if(seleccionado == index) return;

        seccion[seleccionado].style.display = "none";
    
        //En la sección de info general no es importante que esto aparezca
        if(index == 0){
            contacto.style.display ='none';
        } else {
            contacto.style.display = 'block';
        }

        boton[index].style.backgroundColor = 'rgb(217, 217, 217)';
    
        boton[seleccionado].style.backgroundColor = 'transparent';
        seleccionado = index;
    
        seccion[seleccionado].style.display = 'block';
}