import { active_menu } from "/modules/menu.js";
import { mover_rectangulos } from "/modules/scroll.js";
import { cambiar_tipo_titulo } from "/modules/opciones_titulos.js";

const d = document;

d.addEventListener('click', (evt) => {
    const elemento = evt.target; 
    if (elemento.dataset.menu) {
        elemento.classList.toggle('active');
        active_menu();
    } else if (elemento.dataset.tipo == 'formacion') {
        cambiar_tipo_titulo(
          elemento.dataset.tipo,
          elemento.dataset.opcion
        );
    }
})

d.addEventListener('scroll', (evt) => {
    mover_rectangulos(window.pageYOffset);
})