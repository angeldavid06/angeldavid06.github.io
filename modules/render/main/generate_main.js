import { APP } from "../../../js/env.js";

export const generate_main = (status,json) => {
    if (status) {
        const tag_section = APP.D.createElement('section');
    
        tag_section.setAttribute('id','main')
        tag_section.innerHTML = '<div id="descripcion-cv">'+
                                    '<h3>Hola mi nombre es <code>'+json.name+'</code></h3>'+
                                    '<br>'+
                                    '<br>'+
                                    '<p>'+json.about_me+'</p>'+
                                '</div>'+
                                '<div id="contenedor-fotografia">'+
                                    '<div id="fotografia">'+
                                        '<a id="btn_descargar_cv" href="" title="Descargar CV">'+
                                            '<i class="material-symbols-rounded">file_download</i>'+
                                            'Descargar CV'+
                                        '</a>'+
                                    '</div>'+
                                '</div>';
        
        return tag_section;
    } else {
        return false;
    }
}