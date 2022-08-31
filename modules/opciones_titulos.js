const num_opcion = (tipo) => {
    if (tipo == 'formacion') {
        return 0;
    } else if (tipo == 'tech') {
        return 1;
    }
}

const change_slider = (num_opcion) => {
    num_opcion = parseInt(num_opcion);
    const slider = document.getElementsByClassName('slider');
    const slider_anterior = slider[0].getElementsByClassName('active-slide');
    const slider_actual = document.getElementById('slider-'+(num_opcion+1));
    const altura_slider = slider[0].clientHeight;
    
    slider[0].scrollTop = altura_slider * num_opcion;
    slider_anterior[0].classList.remove('active-slide');
    slider_actual.classList.add('active-slide');
}

const mover_clase_active = (num_opcion,tipo) => {
    const contenedor = document.getElementsByClassName('opciones-'+tipo);
    const contenedor_descripcion = document.getElementById('descripciones-'+tipo);
    const descripcion_anterior = contenedor_descripcion.getElementsByClassName('active');
    const descripcion_actual = contenedor_descripcion.getElementsByClassName('descripcion-'+(parseInt(num_opcion)+1));
    const anterior = contenedor[0].getElementsByClassName('active');
    const actual = contenedor[0].getElementsByClassName('opcion-'+num_opcion);

    descripcion_anterior[0].classList.remove('active');
    descripcion_actual[0].classList.add('active');
    anterior[0].classList.remove('active');
    actual[0].classList.add('active');
}

export const cambiar_tipo_titulo = (tipo,opcion) => {
    mover_clase_active(opcion,tipo);
    change_slider(opcion);
    const h_titulos = document.getElementsByClassName("tipo_"+tipo)[0].clientHeight;
    const h_descripciones = document.getElementById('descripciones-'+tipo).clientHeight;
    
    document.getElementsByClassName("tipo_"+tipo)[0].scrollTop = (h_titulos * opcion);
    document.getElementById('descripciones-'+tipo).scrollTop = (h_descripciones * opcion);
};

