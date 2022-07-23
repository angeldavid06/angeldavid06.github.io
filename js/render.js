import { APP } from "./env.js";
import { generate_menu } from "../modules/render/menu/generate_menu.js";
import { generate_main } from "../modules/render/main/generate_main.js";
import { generate_formacion } from "../modules/render/formacion/generate_formacion.js";

export const render_app = (json) => {
    const fragment_app = APP.D.createDocumentFragment();
    const fragment_elements = auxiliar_elements();
    const fragment_menu = generate_menu();
    const fragment_main = generate_main(json.personal);
    const fragment_formacion = generate_formacion(json.personal.education);

    fragment_app.appendChild(fragment_menu);
    fragment_app.appendChild(fragment_main);
    fragment_app.appendChild(fragment_formacion);

    APP.D.body.appendChild(fragment_elements);
    APP.D.body.appendChild(fragment_app);
    return true;
}

const auxiliar_elements = () => {
    const fragment_elements = APP.D.createDocumentFragment();
    const rectangulo_1 = APP.D.createElement('div');
    const rectangulo_2 = APP.D.createElement('div');

    rectangulo_1.setAttribute('id', 'rectangulo-1');
    rectangulo_2.setAttribute('id', 'rectangulo-2');

    fragment_elements.appendChild(rectangulo_1);
    fragment_elements.appendChild(rectangulo_2);

    return fragment_elements;
} 