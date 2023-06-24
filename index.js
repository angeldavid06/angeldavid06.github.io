import { getData } from "/js/modules/data/api.js";
import { initRender } from "/js/modules/render/render.js";


const init = () => {
    getData().then(data => {
        initRender(data);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    init();
})