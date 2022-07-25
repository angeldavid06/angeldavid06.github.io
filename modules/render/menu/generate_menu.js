import { APP } from "../../../js/env.js";

export const generate_menu = (status) => {
    if (status) {
        const tag_menu = APP.D.createElement('menu');
    
        tag_menu.innerHTML = '<i class="material-symbols-rounded btn" data-menu="true">menu</i>'+
                            '<nav id="menu">'+
                                '<li><a href="#main">Inicio</a></li>'+
                                '<li><a href="#formacion">Formación</a></li>'+
                                '<li><a href="#habilidades">Habilidades</a></li>'+
                                '<li><a href="#experiencia">Experiencia</a></li>'+
                                '<li><a href="#">Contacto</a></li>'+
                            '</nav>';
    
        return tag_menu;
    } else {
        return false;
    }
}