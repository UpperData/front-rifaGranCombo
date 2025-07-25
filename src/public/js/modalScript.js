// Cargar el contenido de la modal directamente desde el archivo HTML
document.getElementById("modalContainer").innerHTML = `
    <div class="modal face" id="modal"  >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header ">                
                    <h5  class="modal-title">Resumen de compra</h5>
                    <button type="button"  onclick="cerrarModal()" class="close" data-bs-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>                 
                </div>
                <div class="modal-body">
                    <div class="row">
                        <p><strong>Jugadas (</strong><span id="cantidadJugadas"></span><strong>)</strong></p>
                        <div class="list-container detallecompra  d-flex">
                            <div class="list">
                                <ul id="listaCompras"></ul>                            
                                <p><strong>Total:</strong> Bs. <span id="total"></span></p>
                            </div>
                            <div class="description ">
                                <p id="textResume"></p>
                            </div>
                        </div>
                    </div>
                    <div class="pt-5">
                        <h1>¡Gracias por su compra!</h1>
                    </div>                
                </div>
                <div class="modal-footer">
                    <button type="button" onclick="cerrarModal()" class="boton-rojo">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
`;

function mostrarModal(resumeData) {
    console.log(resumeData);
   // let compras = [];
    let price=resumeData.unitPrice;
   /*  resumeData.playList.forEach((item, index) => {
        compras.push({"signo":item.idAdi,"precio":price,"num":item.Num})
    }) */
    
    document.getElementById("cantidadJugadas").textContent = resumeData.playList.length;

    let total = 0;
    let listaHTML = "";
    resumeData.playList.forEach(item => {
        sgn=0;
        switch( item.idAdi) {
            case 1:
                sgn = "Aries";
                break;
            case 2:
                sgn = "Tauro";
                break;
            case 3:
                sgn = "Geminis";
                break;
            case 4:
                sgn = "Cancer";
                break;
            case 5:
                sgn = "Leo";
                break;
            case 6:
                sgn = "Virgo";
                break;	
            case 7:
                sgn = "Libra";
                break;
            case 8:
                sgn = "Escorpio";
                break;
            case 9:
                sgn = "Sagitario";
                break;
            case 10:
                sgn = "Capricornio";
                break;
            case 11:
                sgn = "Acuario";
                break;
            case 12:
                sgn = "Piscis";
                break;	
        }
        total += price;
        listaHTML += `<li>Triple: <strong>${item.Num} </strong> - <strong>${sgn}</strong> Bs.${price}</li>`;
    });

    document.getElementById("listaCompras").innerHTML = listaHTML;
    document.getElementById("total").innerHTML = `<strong> ${total}</strong>`;
    const palabras = `<div class="col-12 col-md-6 agradecimiento">¡Gracias por su Compra!<br>En nombre de Online Bet Systems, que remos agradecerte por confiar en nosotros. Tu apoyo significa mucho y esperamos que disfrutes al máximo tu experiencia.<br>¡Y hay más buenas noticias! con el mismo ticket que adquiriste, ¡puedes ganar hasta 75 oportunidades para llevarte increibles premios! Síguenos en redes sociales @ElGranCombo o visita xxxxxx para descubrir cómo participar y multiplicar tus posibilidades de ganar.
							<br>No olvides revisar tu correo electrónico o tu cuenta para confirmar los detalles de tu compra y las instrucciones para activar tus oportunidades. Si tienes alguna duda, estamos aquí para ayudarte en mmm@mail.com  - 014x xxxxxxxxx.<br> ¡Gracias Nuevamente y mucha suerte!<br>El equipo de El Gran Combo</div>`
    document.getElementById("textResume").innerHTML = palabras;
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
