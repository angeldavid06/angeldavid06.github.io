import { APP } from "../../../js/env.js";
import { generate_slider } from "../slider/generate_slider.js";

export const generate_experiencia = (status,json) => {
    if (status) {
        const tag_formacion = APP.D.createElement('section');
        let structure = '';

        tag_formacion.setAttribute('id', 'experiencia');
    
        structure = '<div class="descripcion-seccion">'+
                                    '<div id="titulo">'+
                                        '<div class="titulo">'+
                                            '<h1>Experiencia Laboral</h1>';
                                            // '<div class="tipo_formacion">';
        // structure += generate_titles(json);

        structure += '</div><div id="descripcion-'+APP.SLIDER.images+'" data-info="'+APP.SLIDER.images+'" class="descripcion">';

        structure += generate_school(json.school);

        structure += '</div></div></div>';

        structure += generate_slider(json);
        
        tag_formacion.innerHTML = structure;
        return tag_formacion;
    } else {
        return false;
    }
}

const generate_school = (schools) => {
    let structure_string = '';
    let contador = 1;

    schools.forEach(el => {
        structure_string +=  '<div id="descripcion_'+contador+'" class="contenedor_descripcion">'+
                                        '<p class="p-titulo">Escuela</p>'+
                                        '<p>'+el.school+'</p>'+
                                        '<p class="p-titulo">Carrera</p>'+
                                        '<p>'+el.career+'</p>'+
                                        '<p class="p-titulo">Generación</p>'+
                                        '<p>'+el.period+'</p>'+
                                    '</div>';
        contador++;
    });

    return structure_string;
}

const generate_courses = (courses) => {
    console.log(Object.keys(courses).length);
}