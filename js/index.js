import { APP } from "./env.js";
import { execRequest } from "./json_request.js";
import { render_app } from "./render.js";
import { active_menu } from "../modules/menu.js";
import { mover_rectangulos } from "../modules/scroll.js";
import { cambiar_tipo_titulo } from "../modules/opciones_titulos.js";
import { slider } from "../modules/slider.js";

APP.D.addEventListener('DOMContentLoaded', () => {
    const res = execRequest(APP.URL_HOST + 'json/personal.json')
    res.then(json => {
        render_app(json);
    })
})

APP.D.addEventListener('click', (evt) => {
    const elemento = evt.target; 
    if (elemento.dataset.menu) {
        elemento.classList.toggle('active');
        active_menu();
    } else if (elemento.dataset.tipo == 'formacion') {
        cambiar_tipo_titulo(
          elemento.dataset.tipo,
          elemento.dataset.opcion
        );
    } else if (elemento.dataset.slider) {
        slider(elemento.dataset.slider);
    }
})

APP.D.addEventListener('scroll', (evt) => {
    mover_rectangulos(window.pageYOffset);
})