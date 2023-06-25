import { UI } from "../ui.js";

export const initPersonal = (data) => {
    const attributes = [
        ['class', 'title main-title'],
        ['id', 'name'],
        ['data-name', 'true'],
    ];

    const container = UI.nElement('header');
    const h1_name = UI.nElement('h1', attributes, data.name);
    const h1_lastname = UI.nElement('h1', attributes, data.lastname);
    const header = UI.join(container, [h1_name, h1_lastname]);

    UI.print(header);
}