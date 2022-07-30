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
    const contenedor_slider_principal = contenedor.getElementsByClassName('primario-'+slider);
    const activo = elemento_actual(contenedor_slider_principal[0]);
    const cantidad_imgs = cantidad_elementos(contenedor_slider_principal[0]);
    let siguiente = parseInt(activo.dataset.principal) + 1;
    let id = '';

    if (activo.dataset.slide == cantidad_imgs){
        contenedor_slider_principal[0].scrollLeft = 0;
        siguiente -= cantidad_imgs;
    } else {
        contenedor_slider_principal[0].scrollLeft = activo.clientWidth * activo.dataset.slide;
    }
    
    id = activo.getAttribute('id').split('-')[0] + '-' + siguiente;
    activo.classList.remove('active')
    document.getElementById(id).classList.add('active');
}

const slider_secundario = (contenedor,slider) => {
    const contenedor_slider_principal = contenedor.getElementsByClassName('secundario-'+slider);
    const contenedor_imgs = contenedor_slider_principal[0].getElementsByClassName('contenedor-foto')
    const activo = elemento_actual(contenedor_imgs[0]);
    const cantidad_imgs = cantidad_elementos(contenedor_imgs[0]);
    let siguiente = parseInt(activo.dataset.secundario) + 1;
    let id = '';

    if (activo.dataset.slide == cantidad_imgs){
        contenedor_imgs[0].scrollLeft = 0;
        siguiente -= (cantidad_imgs);
    } else {
        contenedor_imgs[0].scrollLeft = activo.clientWidth * activo.dataset.slide;
    }
    
    id = activo.getAttribute('id').split('-')[0] + '-' + siguiente;
    activo.classList.remove('active')
    document.getElementById(id).classList.add('active');
}

export const slider = (id) => {
    const slider_principal = contenedor_slider(id);
    slider_primario(slider_principal,id)
    slider_secundario(slider_principal,id)
}