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
        (title == 'school' ? title = 'Académica' : title = 'Cursos'); 
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
    let slide = 1;
    let clase = '';
    const urls = get_url_image(json.school);

    structure_string += '<div id="slider-1" class="contenedor active">';
    structure_string += '<div class="primario">';

    json.school.forEach(inf => {
        (contador == 1 ? clase = 'active' : clase = '')
        structure_string += '<img id="actual-'+contador+'" data-principal="'+contador+'" data-slide="'+slide+'" class="'+clase+'" src="'+inf.image+'" alt="" srcset="">';
        contador++;
        slide++;
    });
    slide = 1;
    contador = 1;
    structure_string += '</div>';
    structure_string += '<div class="secundario">';
    structure_string += '<div class="contenedor-foto">';
    
    urls.map(el => {
        (contador == 1 ? clase = 'active' : clase = '')
        structure_string += '<img id="prev-'+(contador)+'" data-secundario="'+(contador)+'" data-slide="'+slide+'" class="'+clase+'" src="'+el+'" alt="" srcset="">';
        contador++;
        slide++;
    });

    structure_string += '</div>'+
                        '<div class="opciones-slider">'+
                            '<button class="material-symbols-rounded" data-slider="1" data-siguiente="true">arrow_forward_ios</button>'+
                        '</div>'+
                        '</div>'+
                        '</div>'+
                        '</div>';

    return structure_string;
}

const get_url_image = (json) => {
    const arr_url = [];
    let contador = 1;

    json.forEach(el => {
        if (contador > 1) {
            arr_url.push(el.image);
        }
        contador++;
    })

    json.forEach(el => {
        if (contador > 1) {
            arr_url.push(el.image);
        }
        contador = 1;
    })

    return arr_url;
}