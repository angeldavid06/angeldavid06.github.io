import { APP } from "../../../js/env.js";

export const generate_formacion = (status,json) => {
    if (status) {
        const tag_formacion = APP.D.createElement('section');
        let structure = '';

        tag_formacion.setAttribute('id', 'formacion');
    
        structure = '<div class="descripcion-seccion">'+
                                    '<div id="titulo">'+
                                        '<div class="titulo">'+
                                            '<h1>Formación</h1>'+
                                            '<div class="tipo_formacion">';
        structure += generate_titles(json);

        structure += '</div><div class="descripcion">';

        structure += generate_school(json.school);

        structure += '</div></div>';

        structure += generate_slider(json);

        
        tag_formacion.innerHTML = structure;
        return tag_formacion;
    } else {
        return false;
    }
}

const generate_titles = (education) => {
    const keys = Object.keys(education); 
    let structure_string = '';
    let contador = 0;
    
    keys.map(title => {
        (title == 'school' ? title = 'Academica' : title = 'Cursos'); 
        structure_string += '<div class="tipo">'+
                                '<h1>'+title+'</h1>'+
                            '</div>';
    })

    structure_string += '</div></div><div class="opciones opciones-formacion">';

    keys.map(opcion => {
        if (contador == 0) {
            structure_string += '<div class="opcion opcion-0 active" data-tipo="formacion" data-opcion="0"></div>';
        } else {
            structure_string += '<div class="opcion opcion-'+contador+'" data-tipo="formacion" data-opcion="'+contador+'"></div>';
        }

        contador++;
    })
    
    structure_string += '</div>';

    return structure_string;
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

const generate_slider = (json) => {
    let structure_string = '<div class="slider">';
    let contador = 1;

    structure_string += '<div id="slider-1" class="contenedor active">'+
                            '<div class="primario">'+
                                '<img id="actual-1" data-principal="1" class="active" src="https://cdn.pixabay.com/photo/2022/03/30/14/55/holiday-home-7101309_960_720.jpg" alt="" srcset="">'+
                                '<img id="actual-2" data-principal="2" src="https://cdn.pixabay.com/photo/2022/05/30/14/24/stairs-7231312_960_720.jpg" alt="" srcset="">'+
                                '<img id="actual-3" data-principal="3" src="https://cdn.pixabay.com/photo/2021/07/11/12/02/lavender-6403599_960_720.jpg" alt="" srcset="">'+
                            '</div>'+
                            '<div class="secundario">'+
                                '<div class="contenedor-foto">'+
                                    '<img id="prev-1" data-secundario="1" class="active" src="https://cdn.pixabay.com/photo/2022/05/30/14/24/stairs-7231312_960_720.jpg" alt="" srcset="">'+
                                    '<img id="prev-2" data-secundario="2" src="https://cdn.pixabay.com/photo/2021/07/11/12/02/lavender-6403599_960_720.jpg" alt="" srcset="">'+
                                    '<img id="prev-3" data-secundario="3" src="https://cdn.pixabay.com/photo/2022/03/30/14/55/holiday-home-7101309_960_720.jpg" alt="" srcset="">'+
                                '</div>'+
                                '<div class="opciones-slider">'+
                                    '<button class="material-symbols-rounded" data-slider="1" data-siguiente="true">arrow_forward_ios</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>';

    structure_string += '</div>';

    return structure_string;
}