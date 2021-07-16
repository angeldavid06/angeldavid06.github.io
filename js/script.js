window.addEventListener('scroll', (evt) => {
    const nav = document.getElementsByClassName('nav');
    const card = document.getElementsByClassName('card');
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

    if (window.innerHeight + window.scrollY === document.body.clientHeight) {
        card[card.length-1].classList.add('card-show');
    } else {
        card[card.length-1].classList.remove('card-show');
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