async function getClient(ci){		
    
    await axios.post('https://api.grancombo.com/jugDatos', {
                "Ced":ci
    }).then( function(rsGetClient){         
         currentClient=rsGetClient.data.data.Datos[0];         
        if(rsGetClient.data.data.Datos.length>0){ 
            dataCli=rsGetClient.data.data.Datos[0];  
            idJug=dataCli.idJug;                      
            let phoneOper=dataCli.TelJug.substring(0,4);
            let phoneNum=dataCli.TelJug.substring(4,11);
            let nationality=dataCli.CedRif.substring(0,1);
            let phoneOperPay=dataCli.TelPag.substring(0,4);
            let phoneNumPay=dataCli.TelPag.substring(4,11);
            document.getElementById("documentId").disabled = true;
            document.getElementById("origen").disabled = true;
            document.getElementById("origen").value = nationality;
            document.getElementById("cliFirstName").value=dataCli.RazNom;
            document.getElementById("cliLastName").value=dataCli.ApeJug;
            document.getElementById("cliPhoneOper").value = phoneOper;            
            document.getElementById("cliPhone").value=phoneNum;
            document.getElementById("cliPhoneOperPay").value = phoneOperPay;            
            document.getElementById("cliPhonePay").value=phoneNumPay;
            document.getElementById("cliEmail").value=dataCli.CorJug;
            document.getElementById("banks").value=dataCli.idBan;
            document.getElementById("states").value=dataCli.idEst;           
            document.getElementById("cliFirstName").disabled=true;
            document.getElementById("cliLastName").disabled=true;
            //document.getElementById("cliPhoneOper").disabled=true; 
            document.getElementById("states").disabled=true;
            document.getElementById("cliEmail").focus();
        }else{
            document.getElementById("origen").value = "V";
            document.getElementById("cliFirstName").disabled=false;
            document.getElementById("cliFirstName").value="";
            document.getElementById("cliFirstName").focus();
            document.getElementById("cliLastName").value="";
            document.getElementById("cliPhoneOper").value = "";            
            document.getElementById("cliPhone").value="";
            document.getElementById("cliPhoneOperPay").value = "";            
            document.getElementById("cliPhonePay").value="";
            document.getElementById("cliEmail").value="";
            document.getElementById("banks").value="";
            document.getElementById("states").value="";
            //document.getElementById("phonePay").value="";            
            document.getElementById("cliLastName").disabled=false;
            document.getElementById("cliPhoneOper").disabled=false; 
            document.getElementById("states").disabled=false
        }
    }).catch(function(error){
            document.getElementById("origen").value = "V";
            document.getElementById("cliFirstName").disabled=false;
            document.getElementById("cliFirstName").value="";
            document.getElementById("cliFirstName").focus();
            document.getElementById("cliLastName").value="";
            document.getElementById("cliPhoneOper").value = "";            
            document.getElementById("cliPhone").value="";
            document.getElementById("cliPhoneOperPay").value = "";            
            document.getElementById("cliPhonePay").value="";
            document.getElementById("cliEmail").value="";
            document.getElementById("banks").value="";
            document.getElementById("states").value="";
            //document.getElementById("phonePay").value="";            
            document.getElementById("cliLastName").disabled=false;
            document.getElementById("cliPhoneOper").disabled=false; 
            document.getElementById("states").disabled=false
            console.log(error)
    })
}

function sendPay(){    
    let payData;
    
    if(payTotal>0){ //valida que exista una jugada por pagar
        //valida que datos esten completos
        if(
            document.getElementById("documentId").value.length >=6,
            document.getElementById("origen").value !=0,
            document.getElementById("cliFirstName").value.length>3,
            document.getElementById("cliLastName").value.length>3,
            document.getElementById("cliPhoneOper").value!=0,            
            document.getElementById("cliPhone").value.length>0,
            document.getElementById("cliPhoneOperPay").value!=0,            
            document.getElementById("cliPhonePay").value.length=7,        
            document.getElementById("banks").value!=0,
            document.getElementById("states").value!=0,
            document.getElementById("bankReference").value>6
            
        ){
            //Crea json
            /* if(currentClient){// si existe el cliente
                if(currentClient.length>0){
                    currentClient[0].idPro=+idPro;
                    currentClient[0].RefNum=document.getElementById("bankReference").value;
                    currentClient[0].MonPag=payTotal.toFixed(2);
                    currentClient[0].idAux=reservationId;
                    currentClient[0].DirJug=null;
                    payData=currentClient[0];
                    console.log("registrando")
                }else{ // si es cliente nuevo
                    let phoneCli=`${document.getElementById("cliPhoneOper").value}${document.getElementById("cliPhone").value}`;                     
                    let phonePay=`${document.getElementById("cliPhoneOperPay").value}${document.getElementById("cliPhonePay").value}`;                    
                    payData={
                        "idPro":idPro,
                        "idJug":0,
                        "CedRif":document.getElementById("origen").value +
                                document.getElementById("documentId").value,
                        "RazNom":document.getElementById("cliFirstName").value,
                        "ApeJug":document.getElementById("cliLastName").value,
                        "idEst": +document.getElementById("states").value,
                        "DirJug":null,
                        "TelJug":phoneCli,
                        "TelPag":phonePay,
                        "CorJug":document.getElementById("cliEmail").value,    
                        "idBan": document.getElementById("banks").value,
                        "RefNum":document.getElementById("bankReference").value,
                        "MonPag":payTotal,
                        "idAux": reservationId                
                    }            
                }
            };  */
            let phoneCli=`${document.getElementById("cliPhoneOper").value}${document.getElementById("cliPhone").value}`;                     
            let phonePay=`${document.getElementById("cliPhoneOperPay").value}${document.getElementById("cliPhonePay").value}`;                    
            payData={
                "idPro":idPro,
                "idJug":idJug,
                "CedRif":document.getElementById("origen").value +
                        document.getElementById("documentId").value,
                "RazNom":document.getElementById("cliFirstName").value,
                "ApeJug":document.getElementById("cliLastName").value,
                "idEst": +document.getElementById("states").value,
                "DirJug":null,
                "TelJug":phoneCli,
                "TelPag":phonePay,
                "CorJug":document.getElementById("cliEmail").value,    
                "idBan": document.getElementById("banks").value,
                "RefNum":document.getElementById("bankReference").value,
                "MonPag":payTotal,
                "idAux": reservationId                
            }  
            payClient(payData) // Procesar pago
        }else{
            alert("Verifique sus datos")
        }
    }else{
            alert("Debe agregar jugada")
        }
    
    
}

async function payClient(payData) {     
    clearInterval(intervalTime); //detiene contador
    //Obtiene información reservasión                        
    const rsReservation = await axios.post('https://api.grancombo.com/venAuxTime', {
                        "idAux":reservationId,     
                        "idPro":payData.idPro
                    }); 
    await axios.post('https://api.grancombo.com/venPro', payData)
    .then( function(rsPay){ 
        if(rsPay){            
            if(rsPay.data.result=="Error"){ // No pudo procesar pago
                alert("No se pudo procesar el pago, intente nuevamente");                
            }else{
                
                clearInterval(intervalTime); //detiene contador                
                intervalTime=0;
                payTotal=0; // reinicia total
                document.getElementById("payTotal").innerHTML="Bs 00";
                timeValue=document.querySelectorAll("#timer"); // reinicia tiempo
                
                timeValue.forEach(timer=>{
                    timer.textContent= "00:00"                    
                })											
                reservationId="0";
                document.getElementById("documentId").disabled=false;
                document.getElementById("origen").disabled=false; 
                document.getElementById("documentId").value="";
                document.getElementById("playList").innerHTML = "";
                document.getElementById("origen").value = "V" ;
                document.getElementById("cliFirstName").value="";
                document.getElementById("cliLastName").value="";
                document.getElementById("cliPhoneOper").value = "";            
                document.getElementById("cliPhone").value="";
                document.getElementById("cliPhoneOperPay").value = "";            
                document.getElementById("cliPhonePay").value="";
                document.getElementById("cliEmail").value="";
                document.getElementById("banks").value="";
                document.getElementById("states").value=""; 
                document.getElementById("bankReference").value="";          
                document.getElementById("cliFirstName").disabled=true;
                document.getElementById("cliLastName").disabled=true;                
                document.getElementById("states").disabled=true;
                document.getElementById("timer").innerHTML = "00:00";
                document.getElementById("payTotal").innerHTML="Bs 00";
                document.getElementById("playTitle").textContent =  `Jugada ( max. ${maxPlay}) `;
                document.getElementById("exampleCheck1").checked=false;
                document.getElementById("exampleCheck1").classList.remove('boton-rojo')
                document.getElementById("exampleCheck1").classList.remove('boton-disabled')
                    
                
                console.log(rsReservation);
                //Crea json resumen
                resumeData={
                    "unitPrice":priceTicket,
                    "totalPay":payData.MonPag,
                    "playList":rsReservation.data.data.numeros,
                }
                mostrarModal(resumeData)
                //openModal(resumeData);
                
            }
            
        }
    }).catch(function(error){
        console.log(error)
    }) 
}
function enviarEmail(payload) {			
    console.log("Enviando email con payload:", payload);
    axios.post("https://api.grancombo.com/conAdd", payload)
    .then((respuesta) => {
        document.getElementById("sucessEmail").textContent = "Tu mesnaje se envio con exito 🎉";        
    })
    .catch((error) => {
        document.getElementById("sucessEmail").textContent = "Error al enviar 😢, intenta nuevamente";
        console.error("Error al consumir API:", error);
    }); }
function mostrarModal(resumeData) {
    console.log(resumeData.playList.length);
    const modalContent = document.getElementById("modalContent");
    const closeModal = document.getElementById("closeModal");
    document.getElementById("cantidadJugadas").textContent = `${resumeData.playList.length} Ticket(s)`; ;
    document.getElementById("total").textContent = `Bs ${resumeData.totalPay.toFixed(2)}`;
    document.getElementById("listaCompras").innerHTML = resumeData.playList.map(play => `<li>${play}</li>`).join("");
    document.getElementById("precio").textContent = `Precio Unitario Bs ${resumeData.unitPrice.toFixed(2)}`;        
    const modal = new bootstrap.Modal(document.getElementById("ventaModal"));
    modal.show();
    // Actualiza el contenido del modal con los datos del resumen
    /* modalContent.innerHTML = `
        <h2>Resumen de la Jugada</h2>
        <p><strong>Total a Pagar:</strong> Bs ${resumeData.totalPay.toFixed(2)}</p>
        <p><strong>Lista de Jugadas:</strong> ${resumeData.playList.join(", ")}</p>
        <button id="sendEmailBtn">Enviar Resumen por Email</button>
    `; */

    // Muestra el modal
   /// modal.style.display = "block";

    // Evento para cerrar el modal
    closeModal.onclick = function() {
        modal.hide();
    };

}