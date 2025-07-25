function validateOnlyNumbers(nextValue) {
    // Regular expression to match only numbers
    const regex = /^[0-9]+$/;

    // Check if the input matches the regex
    if (!regex.test(nextValue)) {
        event.preventDefault(); //return true; // Input is valid
    } /* else {
        return false; // Input is invalid
    } */
}

function validateOnlyText(nextValue) {
  if (!/^[a-zA-Z\s]*$/.test(nextValue)) {
    event.preventDefault(); 
    }
}
function validateEmail(emailValue) {            
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email   
    if (emailValue != '') {
        if (!emailRegex.test(emailValue)) {
            return false;
            //emailError.className = 'error';
        }else{
          return true;
        }
    }    
}