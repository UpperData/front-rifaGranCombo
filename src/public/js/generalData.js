/* async function generalValues(){	    
    const generalData =await axios.post('/buscarTodo', {
                "idPro":idPro
            });	
            //console.log(generalData.data[0]);
    rsBank=generalData.data[0].Bancos;
    rsStates=generalData.data[0].Estados;
    
    //maxPlay=generalData.data[0].MaxTic;
    //maxTime=generalData.data[0].TimeRes;
    //priceTicket=generalData.data[0].MonVen;
    
    /// Llena select con los bancos
        const selectBank = document.getElementById("banks");
    rsBank.forEach(banco => {
            let opcion = document.createElement("option");
            opcion.value = banco.idBan; // Usa el ID del banco o el nombre según tu API
            opcion.textContent = banco.DesBan;
            selectBank.appendChild(opcion);
        }); 
    const selectStates = document.getElementById("states");
    rsStates.forEach(states => {
            let opcion = document.createElement("option");
            opcion.value = states.idEst; // Usa el ID del banco o el nombre según tu API
            opcion.textContent = states.NomEst;
            selectStates.appendChild(opcion);
        });
} */
// Inicia contador de tiempo
function startTimer(auxTimeLeft,interval) { 

    //if(interval!=1){    
        const timeValue=document.getElementById("timer");
        const timeValueAll=document.querySelectorAll('#timer');	
        let timerInterval = setInterval(() => {
            if (auxTimeLeft > 0 ) {
                auxTimeLeft--;                 
                //updateTimerDisplay(auxTimeLeft);
                let minutes = Math.floor(auxTimeLeft / 60);
                let seconds = auxTimeLeft % 60;			
                
                timeValueAll.forEach(timer=>{
                    timer.textContent=""
                    timer.textContent = 
                        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                })
                /* timeValue.textContent=""
                timeValue.textContent = 
                        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                 */
                if(minutes==0 && seconds==0){
                    reservationId="0";
                } 
            }else{
                location.reload(true);
                alert("Finalizó en tiempo para jugada, intente nuevamente")
                auxTimeLeft=0;
                //document.getElementById("timer").textContent = "00:00";
                /* timeValueAll.forEach(timer=>{
                    timer.textContent= "00:00"                    
                }) */
            }
        }, interval);
        return timerInterval;
    
}
// Actualiza contador de tiempo
async function updateTimerDisplay(timeLeft) {			
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;			
    const timeValue=document.getElementById("timer");
     timeValue.innerHTML=""
     timeValue.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if(minutes==0 && seconds==0){
        reservationId="0";
    } 
    /* const elementos = document.querySelectorAll('#timer');

         elementos.forEach(elemento => {       
            console.log(minutes+" : "+seconds)     
            elemento.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    } 
    );	 */					
}

function openModal(resumeData){
   /*  let price=resumeData.unitPrice; //obtiene precio unitario
     //imprimer cantidad de jugadas
    document.getElementById("cantidadJugadas").textContent =`Jugadas(${resumeData.playList.length})`;
      
    let total = 0; //setea variables totalventa
    let listaHTML = ""; //setea variables lista html
    resumeData.playList.forEach(item => {
        total += price; // incrementa venta
        listaHTML += `<li>Triple:${item.Num} Signo: ${item.idAdi} - Bs.${price}</li>`;
    });
    // imprime lista
    document.getElementById("listaCompras").innerHTML = listaHTML; */
    alert("Mostrar modal")
    console.log(document.getElementById("ventaModal") );
    //document.getElementById("ventaModal").style.display = "block";
}