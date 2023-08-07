const emailEl =document.getElementById("email");
const cardEl = document.getElementById("card");
const emailErrorMsgEl = document.getElementById("emailErrorMsg");
const cardErrorMsgEl=document.getElementById("cardErrorMsg");

const modalBtn1 = document.getElementById("modalBtn1");
const modalBtn2 = document.getElementById("modalBtn2");
const modalBtn3 = document.getElementById("modalBtn3");

const modaldata1El = document.getElementById("modaldata1");
const modaldata2El = document.getElementById("modaldata2");
const modaldata3El = document.getElementById("modaldata3")




emailEl.addEventListener("blur",function(event){
    if(event.target.value===""){
        emailErrorMsgEl.innerHTML="*Email is required";
    }else{
        emailErrorMsgEl.innerHTML="";
    }
})

cardEl.addEventListener("blure", function(event){
    if(event.target.value===""){
        cardErrorMsgEl.innerHTML="Card number is required";
    }else{
        cardErrorMsgEl.innerHTML="";
    }
})



function onSubmitFunction(){
    event.preventDefault();
    
    const email = emailEl.value.trim(); 
    const card = cardEl.value.trim();

    const alphabeticRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const cardRegex = /^(?:3[47][0-9]{13})$/;

    if(email ===""){
        emailErrorMsgEl.innerHTML="*Email address must not be empty";
    } else if(!(emailRegex.test(email))){
        emailErrorMsgEl.innerHTML="*Email address is not valid";
    } 
 
    if(card===""){
        cardErrorMsgEl.innerHTML="*Card number must not be empty"
    } else if(!(cardRegex.test(card))){
        cardErrorMsgEl.innerHTML="*Not a valid Card Number";
    }


}



$("#modalBtn1").click(function(){
    
    const myModal = new bootstrap.Modal('#modalBtn1', {
        
    })
    myModal.hide();

   $(".left-container").remove();
   $(".left-container-outerbox").append(modaldata1El);
})




$("#modalBtn2").click(function(){
    
    const myModal = new bootstrap.Modal('#modalBtn2', {
        
      })
      myModal.hide();

  
   $(".left-container-outerbox").remove();
   $(".left-container").append(modaldata2El);
})




$("#modalBtn3").click(function(){
    
    const myModal = new bootstrap.Modal('#modalBtn3', {
        
      })
      myModal.hide();

   $(".left-container").remove();
   $(".left-container-outerbox").append(modaldata3El);
})


   



    