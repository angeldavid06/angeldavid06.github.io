$(document).ready(function () {
    $('.cerrar-menu').click(function() {
        $('.menu').removeClass('abrir');
    });

    $('.abrir-menu').click(function() {
        $('.menu').addClass('abrir');
    });
});