export const getData = async () => {
    let response = null;

    await fetch('data/data.json')
    .then(res => (res.ok ? res.json() : Promise.reject()))
    .then(json => {
        response = json;
    })
    .catch(err => {
        response = err;
    })
    
    return response;
}