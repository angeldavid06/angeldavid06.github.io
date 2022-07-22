export const APP = {
    "URL_HOST" : "http://localhost/angeldavid06.github.io/",
    "D" : document,
    "RESPONSE" : {}
}

export const fetchAPI = async (url) => {
    await fetch(url)
    .then((res => res.ok ? res.json() : Promise.reject()))
    .then(json => {
        APP.RESPONSE = json;
    })
    .catch(err => {
        APP.RESPONSE = err;
    })
    .finally(() => {
        console.log('Bien');
    })

    return APP.RESPONSE;
}