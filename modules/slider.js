let contenedor_slider_principal;
let activo;
let cantidad_imgs;
let siguiente;

const contenedor_slider = (id) => {
    const slider_principal = document.getElementById('slider-'+id);
    return slider_principal;
}

const cantidad_elementos = (contenedor) => {
    const cantidad_imgs = contenedor.getElementsByTagName('img');
    return cantidad_imgs.length;
}

const elemento_actual = (contenedor) => {
    const activo = contenedor.getElementsByClassName('active');
    return activo[0];
}

const slider_primario = (contenedor,slider) => {
    contenedor_slider_principal = contenedor.getElementsByClassName('primario-'+slider);
    const contenedor_slider_info = document.getElementById('descripcion-'+slider);
    activo = elemento_actual(contenedor_slider_principal[0]);
    cantidad_imgs = cantidad_elementos(contenedor_slider_principal[0]);
    
    siguiente = parseInt(activo.dataset.principal) + 1;
    let id = '';

    if (activo.dataset.slide == cantidad_imgs){
        contenedor_slider_principal[0].scrollLeft = 0;
        contenedor_slider_info.scrollLeft = 0;
        siguiente -= cantidad_imgs;
    } else {
        contenedor_slider_principal[0].scrollLeft = contenedor_slider_principal[0].clientWidth * activo.dataset.slide;
        contenedor_slider_info.scrollLeft = contenedor_slider_info.clientWidth * activo.dataset.slide;
    }
    
    id = activo.getAttribute('id').split('-')[0] + '-' + siguiente;
    activo.classList.remove('active')
    document.getElementById(id).classList.add('active');
}

const slider_secundario = (contenedor,slider) => {
    contenedor_slider_principal = contenedor.getElementsByClassName('secundario-'+slider);
    const contenedor_imgs = contenedor_slider_principal[0].getElementsByClassName('contenedor-foto')
    activo = elemento_actual(contenedor_imgs[0]);
    cantidad_imgs = cantidad_elementos(contenedor_imgs[0]);
    siguiente = parseInt(activo.dataset.secundario) + 1;
    let id = '';

    if (activo.dataset.slide == cantidad_imgs){
        contenedor_imgs[0].scrollLeft = 0;
        siguiente -= (cantidad_imgs);
    } else {
        contenedor_imgs[0].scrollLeft = contenedor_slider_principal[0].clientWidth * activo.dataset.slide;
    }
    
    id = activo.getAttribute('id').split('-')[0] + '-' + siguiente;
    activo.classList.remove('active')
    document.getElementById(id).classList.add('active');
}

export const slider = (id) => {
    const slider_principal = contenedor_slider(id);
    slider_primario(slider_principal,id);
    slider_secundario(slider_principal,id);
}