let button = document.querySelector(".validate");
let input = document.querySelector(".input");
let input2 = document.querySelector(".input-2");
let inputDisplay = document.querySelector(".input-display");
let mtn = document.querySelector(".mtn");
let glo = document.querySelector(".glo");
let airtel = document.querySelector(".airtel");
let nineMobile = document.querySelector(".ninemobile");



let mtnPhoneNumber = ['0916','0913', '0906', '0903', '0816', '0814', '0813','0810', '0806', '0803', '0704', '0703', '0702' ];
let preMtn = ['234916', '234913', '234906', '234903', '234816', '234814', '234813', '234810', '234806', '234803', '234704', '234703', '234702' ]
let nineMobilePhoneNumber = ['0908','0909', '0818', '0817','0809'];
let preNine = ['234908', '234909', '234818', '234817', '234809']
let gloPhoneNumber = ['0915','0905', '0815', '0811', '0807', '0805', '0705'];
let preGlo = ['234915', '234905', '234815', '234811', '234807', '234805', '234705']
let airtelPhoneNumber = ['0912', '0907', '0904', '0902', '0901', '0812', '0808', '0802', '0708', '0706', '0701'];
let preAirtel = ['234912', '234907', '234904', '234902', '234901', '234812', '234808', '234802', '234708', '234706', '234701']

let invalidNumbers = ['0819', '0702', '0709', '0707', '0804', ]

button.addEventListener("click", () => {
   startApp()
})






const startApp = () => {
  
  
 let phoneNumber = input.value;
  
    let name = input2.value
    let slicedValue;
 let preSlicedValue;
    if (phoneNumber.length === 11  ) {
      
      // the plus sign is for the conversion of the string into a number
        slicedValue = +input.value.slice(0, 4);
   
    }  else if ( phoneNumber.length === 13) {
      
   // the plus sign is for the conversion of the string into a number
     preSlicedValue = +input.value.slice(0, 6);
     
    } else {
        alert("Provide complete phone number")
    }


    

  // check for glo numbers 
  
    for (let i = 0; i < gloPhoneNumber.length; i++) {
      // the plus sign is for the conversion of the string into a number
        if (slicedValue === +gloPhoneNumber[i]) {
            inputDisplay.textContent = `Hi ${name}, your network provider is glo`;
          glo.style.display = "block"
           airtel.style.display = "none"
           mtn.style.display = "none"
          nineMobile.style.display = "none"
            return;
        }else{
          glo.style.display = "none"
        }
  
    }

  // check for glo numbers with +234 prefix
  
  for (let i = 0; i < preGlo.length; i++) {
    // the plus sign is for the conversion of the string into a number
        if (preSlicedValue === +preGlo[i]) {
            inputDisplay.textContent = `Hi ${name}, your network provider is glo`;
          glo.style.display = "block"
           airtel.style.display = "none"
           mtn.style.display = "none"
          nineMobile.style.display = "none"
            return;
        }else{
          glo.style.display = "none"
        }
    
    }

// check for 9mobile numbers 
  
    for (let i = 0; i < nineMobilePhoneNumber.length; i++) {
      // the plus sign is for the conversion of the string into a number
        if (slicedValue === +nineMobilePhoneNumber[i]) {
            inputDisplay.textContent = `Hi ${name}, your network provider is 9mobile`;
           nineMobile.style.display = "block"
          glo.style.display = "none"
           airtel.style.display = "none"
           mtn.style.display = "none"
            return;
        }else{
          nineMobile.style.display = "none"
        }
    
    }

  // check for 9mobile numbers with +234 prefix
  
  for (let i = 0; i < preNine.length; i++) {

    // the plus sign is for the conversion of the string into a number
        if (preSlicedValue === +preNine[i]) {
           inputDisplay.textContent = `Hi ${name}, your network provider is 9mobile`;
           nineMobile.style.display = "block"
          glo.style.display = "none"
           airtel.style.display = "none"
           mtn.style.display = "none"
            return;
        }else{
          nineMobile.style.display = "none"
        }
  }


  // check for airtel numbers
  
    for (let i = 0; i < airtelPhoneNumber.length; i++) {

      // the plus sign is for the conversion of the string into a number
        if (slicedValue === +airtelPhoneNumber[i]) {
            inputDisplay.textContent = `Hi ${name}, your network provider is airtel`;
           airtel.style.display = "block"
           mtn.style.display = "none"
          nineMobile.style.display = "none"
            glo.style.display = "none"
            return;
        }else{
          airtel.style.display = "none"
        }
    
    }

  // check for airtel numbers with +234 prefix 
  
    for (let i = 0; i < preAirtel.length; i++) {

      // the plus sign is for the conversion of the string into a number
        if (preSlicedValue === +preAirtel[i]) {
           inputDisplay.textContent = `Hi ${name}, your network provider is airtel`;
           airtel.style.display = "block"
           mtn.style.display = "none"
          nineMobile.style.display = "none"
            glo.style.display = "none"
            return;
        }else{
          airtel.style.display = "none"
        }
    
    }

    

// check for mtn numbers

    for (let i = 0; i < mtnPhoneNumber.length; i++) {

      // the plus sign is for the conversion of the string into a number
        if (slicedValue === +mtnPhoneNumber[i]) {
            inputDisplay.textContent = `Hi ${name}, your network provider is MTN`;
           mtn.style.display = "block"
           airtel.style.display = "none"
          
          nineMobile.style.display = "none"
            glo.style.display = "none"
            return;
        }else{
          mtn.style.display = "none"
        }
    
    }

  
// check for mtn numbers with +234 prefix

     for (let i = 0; i < preMtn.length; i++) {

       // the plus sign is for the conversion of the string into a number
        if (preSlicedValue === +preMtn[i]) {
           inputDisplay.textContent = `Hi ${name}, your network provider is MTN`;
           mtn.style.display = "block"
           airtel.style.display = "none"
          
          nineMobile.style.display = "none"
            glo.style.display = "none"
            return;
        }else{
          mtn.style.display = "none"
        }
    
    }

// check for invalid numbers

  for (let i = 0; i < invalidNumbers.length; i++) {

    // the plus sign is for the conversion of the string into a number
        if (slicedValue === +invalidNumbers[i]) {
            inputDisplay.textContent = `Invalid network provider`;
          glo.style.display = "none"
           airtel.style.display = "none"
           mtn.style.display = "none"
          nineMobile.style.display = "none"
           return;
        }
    
    }

   return inputDisplay.textContent = ""
}

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //