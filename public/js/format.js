//Formatea numero de telefono
function formatearTelefono(event) {			
    let valor = event.target.value;       	
    //valor = valor.replace(/\D/g, ""); // Eliminar caracteres no numéricos			
    //valor = valor.replace(/^0+/, ""); // Evitar que empiece con cero
    // Aplicar el formato (XXX-XXX-XXXX)
    //if (valor.length > 3) valor = valor.slice(0, 3) + "-" + valor.slice(3);
    if (valor.length > 7) valor = valor.slice(0, 7) + "-" + valor.slice(7, 11);
    event.target.value = valor;			
}



function clearCliente(){
    currentClient=""
    document.getElementById("documentId").disabled = false;
    document.getElementById("origen").disabled = false;
    document.getElementById("origen").value="V";
    document.getElementById("documentId").value="";
    document.getElementById("cliPhoneOper").value="0";
    document.getElementById("cliPhone").value="";
    document.getElementById("cliFirstName").value="";
    document.getElementById("cliLastName").value="";
    document.getElementById("states").value="0";
    document.getElementById("cliEmail").value="";
    document.getElementById("banks").value="0";
    document.getElementById("bankReference").value="";
    document.getElementById("cliPhoneOperPay").value="0";
    document.getElementById("cliPhonePay").value="";
    document.getElementById("exampleCheck1").checked=false;
    document.getElementById("play").classList.remove('boton-rojo')
    document.getElementById("play").classList.add('boton-disabled')
}

function validaEmail(emailValue) {         
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email
    const emailError=document.getElementById("emailError");
    if (emailValue != '') {
        if (!emailRegex.test(emailValue)) {
            emailError.textContent = 'Por favor, ingresa un correo válido.';
            emailError.className = 'error';
        }else{
            emailError.textContent = '';
            emailError.className = '';
        }
    }      
}
