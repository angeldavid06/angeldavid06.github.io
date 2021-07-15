document.addEventListener('scroll', (evt) => {
    const nav = document.getElementsByClassName('nav');
    if (window.scrollY > 10) {
        nav[0].classList.add('bg-aux');
    } else {
        nav[0].classList.remove('bg-aux');
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