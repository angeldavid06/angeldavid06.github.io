import { APP } from "../../../js/env.js";

export const generate_skills = (status,json_skills,json_tecnologies) => {
    if (status) {
        const tag_section = APP.D.createElement('section');
        let structure_string = ''

        tag_section.setAttribute('id','habilidades');

        structure_string = skills(json_skills);
        structure_string += tech(json_tecnologies);

        tag_section.innerHTML = structure_string;

        return tag_section;
    } else {
        return false;
    }
}

const skills = (json) => {
    let structure_string = '';

    structure_string = '<div class="descripcion-seccion">'+
                                '<div id="titulo">'+
                                    '<div class="titulo">'+
                                        '<h1>Habilidades Personales</h1>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="descripcion">'+
                                    '<ul>';
    json.map(skill => {
        structure_string += '<li>'+skill+'</li>';
    })
    structure_string +=         '</ul>'+
                                '</div>'+
                            '</div>';

    return structure_string;
}

const tech = (json) => {
    let structure_string = '';

    structure_string = '<div class="descripcion-seccion">'+
                                '<div id="titulo">'+
                                    '<div class="titulo">'+
                                        '<div class="tipo_formacion">';
    structure_string += generate_titles(json);
    structure_string +=                  '</div>'+   
                                    '</div>'+
                                '</div>'+'</div>';

    //                             '<div class="descripcion">'+
    //                                 '<ul>';
    // json.map(skill => {
    //     structure_string += '<li>'+skill+'</li>';
    //     console.log(skill);
    // })
    // structure_string +=         '</ul>'+
    //                             '</div>'+
    //                         '</div>';

    return structure_string;
}

const generate_titles = (tecnologies) => {
    const keys = Object.keys(tecnologies); 
    console.log(keys);
    let structure_string = '';
    let contador = 0;
    
    keys.map(title => {
        if (title == 'school') {
            title = 'Académica'
        } else if (title == 'courses') {
            title = 'Complementaria'
        }
    
        structure_string += '<div class="tipo">'+
                                '<h1>'+title+'</h1>'+
                            '</div>';
    })

    structure_string += '</div></div><div class="opciones opciones-formacion">';

    keys.map(opcion => {
        if (contador == 0) {
            structure_string += '<div class="opcion opcion-0 active" data-tipo="tech" data-opcion="0"></div>';
        } else {
            structure_string += '<div class="opcion opcion-'+contador+'" data-tipo="tech" data-opcion="'+contador+'"></div>';
        }

        contador++;
    })
    
    structure_string += '</div>';

    return structure_string;
}