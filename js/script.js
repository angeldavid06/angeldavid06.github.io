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