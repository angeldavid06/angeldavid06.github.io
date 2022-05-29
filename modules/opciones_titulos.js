const tipos = [
    [
        ['Académica', 0],
        ['Complementarias', 50]
    ]
];

const num_opcion = (tipo) => {
    if (tipo == 'formacion') {
        return 0;
    }
}

const mover_clase_active = (num_opcion,tipo) => {
    const contenedor = document.getElementsByClassName('opciones-'+tipo);
    const anterior = contenedor[0].getElementsByClassName('active');
    const actual = contenedor[0].getElementsByClassName('opcion-'+num_opcion);
    anterior[0].classList.remove('active');
    actual[0].classList.add('active')
}

export const cambiar_tipo_titulo = (tipo,opcion) => {
    mover_clase_active(opcion,tipo);
    document.getElementsByClassName("tipo_"+tipo)[0].scrollTop = tipos[num_opcion(tipo)][opcion][1];
};

