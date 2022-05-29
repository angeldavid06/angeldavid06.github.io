const rectangulo_1 = document.getElementById("rectangulo-1");
const rectangulo_2 = document.getElementById("rectangulo-2");
let ocaciones = true;

export const mover_rectangulos = (y) => {
    if (y > 250 && ocaciones) {
        rectangulo_1.style.width = '10%';
        rectangulo_2.style.width = '5%';
        rectangulo_2.style.right = '0px';
        ocaciones = false;
    } else if (y < 250 && !ocaciones) {
        rectangulo_1.style.width = '70%';
        rectangulo_2.style.width = '10%';
        rectangulo_2.style.right = '-10%';
        ocaciones = true;
    }
}