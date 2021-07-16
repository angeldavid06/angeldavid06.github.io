window.addEventListener('scroll', (evt) => {
    const nav = document.getElementsByClassName('nav');
    const card = document.getElementsByClassName('card');
    const proyect = document.getElementsByClassName('proyect');

    if (window.scrollY > 10) {
        nav[0].classList.add('bg-aux');
    } else {
        nav[0].classList.remove('bg-aux');
    }

    for (let i = 0; i < card.length; i++) {
        if (window.pageYOffset >= (card[i].offsetTop - (window.innerHeight/2))) {
            card[i].classList.add('card-show');
        } else {
            card[i].classList.remove('card-show');
        }
    }
    
    for (let i = 0; i < proyect.length; i++) {
        if (window.pageYOffset >= (proyect[i].offsetTop - (window.innerHeight/2))) {
            proyect[i].classList.add('proyect-show');
        } else {
            proyect[i].classList.remove('proyect-show');
        }
    }

    if (window.innerHeight + window.scrollY >= document.body.clientHeight/2) {
        for (let i = 0; i < card.length; i++) {
            if (window.pageYOffset >= (card[i].offsetTop - (window.innerHeight))) {
                card[i].classList.add('card-show');
            } else {
                card[i].classList.remove('card-show');
            }
        }
        
        for (let i = 0; i < proyect.length; i++) {
            if (window.pageYOffset >= (proyect[i].offsetTop - (window.innerHeight))) {
                proyect[i].classList.add('proyect-show');
            } else {
                proyect[i].classList.remove('proyect-show');
            }
        }
    } 
});

if (document.getElementsByClassName('btn-menu-icon')) {
    const menu_icon = document.getElementsByClassName('btn-menu-icon');
    menu_icon[0].addEventListener('click', () => {
        const nav = document.getElementsByClassName('nav');
        const nav_items = document.getElementsByClassName('nav-items');
        nav_items[0].classList.toggle('nav-items-show');
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
        if (evt.target.dataset.img == 'oferta') {
            render_images(route_images_itt);
        } else if (evt.target.dataset.img == 'vestidos') {
            render_images(route_images_vestidos);
        } else if (evt.target.dataset.img == 'estilos') {
            render_images(route_images_estilos);
        } else if (evt.target.dataset.img == 'citapp') {
            render_images(route_images_citapp);
        } else if (evt.target.dataset.img == 'pixki') {
            render_images(route_images_pixki);
        }
    }
});