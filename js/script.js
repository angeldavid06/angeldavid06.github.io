import { active_menu,aux_body } from "./menu.js";

const d = document;

d.addEventListener('click', (evt) => {
    const elemento = evt.target; 
    if (elemento.dataset.menu) {
        elemento.classList.toggle('active');
        active_menu();
        aux_body();
    }
})