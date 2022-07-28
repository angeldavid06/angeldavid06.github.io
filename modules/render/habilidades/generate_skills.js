import { APP } from "../../../js/env.js";

export const generate_skills = (status,json) => {
    if (status) {
        const tag_section = APP.D.createElement('section');
        let structure_string = ''

        tag_section.setAttribute('id','habilidades');

        structure_string = skills(json);
        structure_string += tech(json);

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
                                        '<h1>Lenguajes de Desarrollo</h1>'+
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