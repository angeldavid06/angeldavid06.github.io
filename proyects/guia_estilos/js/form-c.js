(function(){
  var formulario = document.formulario_contact,
      elementos = formulario.elements;

  // Functions
  var enviar = function(e) {
    if(!validarInputs()){
      console.log('Falto validar los Input');
      e.preventDefault();
    } else if(!validarRadios()){
      console.log('Falto validar los Radio');
      e.preventDefault();
    } else if(!validarCheckbox()){
      console.log('Falto validar los Checkbox');
      e.preventDefault();
    } else {
      console.log('Envia correctamente');
      e.preventDefault();
    }
  };

  //FLUR & FOCUS

  var focusInput = function() {
    this.parentElement.children[1].className = "label active";
    this.parentElement.children[0].className = this.parentElement.children[0].className.replace(" error","");
  };

  var blurInput = function(){
    if (this.value <= 0) {
      this.parentElement.children[1].className = "label";
      this.parentElement.children[1].className = this.parentElement.children[1].className + " error";
      this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
    }
  };

  //Events
  formulario.addEventListener("submit", enviar);

  for(var i=0; i < elementos.length; i++) {
    if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password" || elementos[i].type == "textarea" || elementos[i].type == "date" ) {
        elementos[i].addEventListener("focus", focusInput);
        elementos[i].addEventListener("blur", blurInput);
    }
  }

}())
