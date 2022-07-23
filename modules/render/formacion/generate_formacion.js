import { APP } from "../../../js/env.js";

export const generate_formacion = (json) => {
    const tag_formacion = APP.D.createElement('section');
    let structure = '';
    let contador = 1;
    tag_formacion.setAttribute('id', 'formacion');

    structure = '<div class="descripcion-seccion">'+
                                '<div id="titulo">'+
                                    '<div class="titulo">'+
                                        '<h1>Formación</h1>'+
                                        '<div class="tipo_formacion">'+
                                            '<div class="tipo">'+
                                                '<h1>Académica</h1>'+
                                            '</div>'+
                                            '<div class="tipo">'+
                                                '<h1>Complementaria</h1>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="opciones opciones-formacion">'+
                                        '<div class="opcion opcion-0 active" data-tipo="formacion" data-opcion="0"></div>'+
                                        '<div class="opcion opcion-1" data-tipo="formacion" data-opcion="1"></div>'+
                                    '</div>'+
                                '</div>'+
                                '<div id="descripcion">';
    json.school.forEach(el => {
        structure +=  '<div id="descripcion_'+contador+'" class="contenedor_descripcion">'+
                                        '<p class="p-titulo">Escuela</p>'+
                                        '<p>Instituto Tecnológico de Tláhuac</p>'+
                                        '<p class="p-titulo">Carrera</p>'+
                                        '<p>Ing. en Sistemas Computacionales</p>'+
                                        '<p class="p-titulo">Generación</p>'+
                                        '<p>2017 - 2021</p>'+
                                    '</div>';
        contador++;
    });
    
    structure += '</div></div>';
    tag_formacion.innerHTML = structure;
    return tag_formacion;
}