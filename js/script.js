const remove_class = () => {
    const el = [
        "item-sobre",
        "item-formacion",
        "item-experiencia",
        "item-habilidades",
        "item-proyectos"
    ];

    for (let i = 0; i < el.length; i++) {
        const item = document.getElementById(el[i]);
        item.classList.remove('active')
    }
}

const add_class = (el) => {
    const item = document.getElementById('item-'+el);
    item.classList.add('active');
}

document.addEventListener('click', (evt) => {
    if (evt.target.dataset.nav) {
        remove_class();
        add_class(evt.target.dataset.nav);
    }
});

if (document.getElementsByClassName('btn-menu')) {
    const menu_icon = document.getElementsByClassName('btn-menu');
    menu_icon[0].addEventListener('click', () => {
        const nav = document.getElementsByTagName('nav');
        nav[0].classList.toggle('open-menu')
    });
}

if (document.getElementsByClassName('close-modal')) {
    const btn = document.getElementsByClassName('close-modal');
    btn[0].addEventListener('click', () => {
        const modal = document.getElementsByClassName('modal');
        modal[0].classList.remove('modal-show');
        vaciarModal();
    });
}

const route_images_produccion = [
    'proyects/fmtor/login -1.PNG',
    'proyects/fmtor/produccion/Menu Principal.PNG',
    'proyects/fmtor/produccion/fmtor-0.PNG',
    'proyects/fmtor/produccion/fmtor-1.PNG',
    'proyects/fmtor/produccion/fmtor-2.PNG',
    'proyects/fmtor/produccion/fmtor-3.PNG',
    'proyects/fmtor/produccion/fmtor-4.PNG',
];

const route_images_itt = [
    'proyects/oferta_academica.PNG',
    'proyects/oferta_academica_2.PNG',
    'proyects/oferta_academica_3.PNG'
];

const route_images_vestidos = [
    'proyects/vestidos.PNG',
    'proyects/vestidos_2.PNG',
    'proyects/vestidos_3.PNG',
    'proyects/vestidos_4.PNG'
];

const route_images_estilos = [
    'proyects/estilos.PNG',
    'proyects/estilos_2.PNG',
    'proyects/estilos_3.PNG',
    'proyects/estilos_4.PNG',
    'proyects/estilos_5.PNG'
];

const route_images_citapp = [
    'proyects/citapp.PNG',
    'proyects/citapp_2.PNG',
    'proyects/citapp_3.PNG',
    'proyects/citapp_4.PNG'
];

const route_images_pixki = [
    'proyects/pixki.PNG',
    'proyects/pixki_2.PNG',
    'proyects/pixki_3.PNG',
    'proyects/pixki_4.PNG'
];

const route_images_java = [
    'proyects/java_1.PNG',
    'proyects/java_2.PNG',
    'proyects/java_3.PNG',
    'proyects/java_4.PNG',
    'proyects/java_5.PNG',
    'proyects/java_6.PNG'
];

const vaciarModal = () => {
    const container = document.getElementById('container-images');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    auxiliar = 0;
}

document.addEventListener('click', (evt) => {
    if (evt.target.matches('img')) {
        const modal = document.getElementsByClassName('modal');
        modal[0].classList.add('modal-show');
        if (evt.target.dataset.img == "produccion") {
          render_images(route_images_produccion);
        } else if (evt.target.dataset.img == 'oferta') {
            render_images(route_images_itt);
        } else if (evt.target.dataset.img == 'vestidos') {
            render_images(route_images_vestidos);
        } else if (evt.target.dataset.img == 'estilos') {
            render_images(route_images_estilos);
        } else if (evt.target.dataset.img == 'citapp') {
            render_images(route_images_citapp);
        } else if (evt.target.dataset.img == 'pixki') {
            render_images(route_images_pixki);
        } else if (evt.target.dataset.img == 'java') {
            render_images(route_images_java);
        }
    }
});