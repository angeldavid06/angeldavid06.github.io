import { APP } from "./env.js";

export const fetchAPI = async (url) => {
    generate_loader()
    await fetch(url)
    .then((res => res.ok ? res.json() : Promise.reject()))
    .then(json => {
        APP.RESPONSE = json;
    })
    .catch(err => {
        APP.RESPONSE = err;
    })
    .finally(() => {
        if (APP.D.getElementById('content-loader')) {
            const loader = APP.D.getElementById('content-loader')
            APP.D.body.removeChild(loader)
        }
    })

    return APP.RESPONSE;
}

const generate_loader = () => {
    APP.D.innerHTML = '<div id="content-loader">'+
                            '<div id="loader"></div>'+
                        '</div>';
}