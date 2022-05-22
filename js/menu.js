const menu_nav = document.getElementById('menu')

export const active_menu = () => {
    menu_nav.classList.toggle('mostrar')
}

export const aux_body = () => {
    let estilos = window.getComputedStyle(
      document.querySelector("body", "::before")
    );
    
    console.log(estilos);
}