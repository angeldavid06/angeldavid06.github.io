document.addEventListener('scroll', (evt) => {
    const nav = document.getElementsByClassName('nav');
    if (window.scrollY > 10) {
        nav[0].classList.add('bg-aux');
    } else {
        nav[0].classList.remove('bg-aux');
    }
});