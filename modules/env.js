export const APP = {
    "URL_HOST" : "http://localhost/angeldavid06.github.io/",
    "D" : document,
    "RES" : {}
}

export const fetchAPI = async (url) => {
    await fetch(url)
    .then((res => res.ok ? res.json() : Promise.reject()))
    .then(json => {
        APP.RES = json;
    })
    .catch(err => {
        APP.RES = err;
    })
    .finally(() => {
        console.log('Bien');
    })

    return APP.RES;
}