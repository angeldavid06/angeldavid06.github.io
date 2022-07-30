import { APP } from "./env.js";
import { generate_menu } from "../modules/render/menu/generate_menu.js";
import { generate_main } from "../modules/render/main/generate_main.js";
import { generate_formacion } from "../modules/render/formacion/generate_formacion.js";
import { generate_skills } from "../modules/render/habilidades/generate_skills.js";

export const render_app = (json) => {
    const fragment_app = APP.D.createDocumentFragment();
    const fragment_components = [
        auxiliar_elements(),
        generate_menu(APP.COMPONENTS.menu),
        generate_main(APP.COMPONENTS.main,json.personal),
        generate_formacion(APP.COMPONENTS.formacion,json.personal.education),
        generate_skills(APP.COMPONENTS.skills,json.skills)
    ];

    fragment_components.map(component => {
        if (component != false) {
            fragment_app.appendChild(component);
        }
    })

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