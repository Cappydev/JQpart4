$(document).ready(function(){
  // Quand je click je selection l'id(toSend)
   $('#toSend').click(function(){
     // Je stock dans une variable l'id et je récupère grâce au .val(la valeur)
     var userLastName = $('#lastName').val();
     var userFirstName = $('#firstName').val();
     var userMailBox = $('#mailBox').val();
     var userPhoneNumber = $('#phoneNumber').val();
     var regexName = /^([A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+)([- ]{1}[A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+){0,1}$/;
     var regexPhoneNumber = /^0[1-9]([-. ]?[0-9]{2}){4}$/;
     var regexMailBox = /^[-+.\w]{1,64}@[-.\w]{1,64}\.[-.\w]{2,6}$/i;
     // Si ma variable match avec ma variable regex et ....
     if (userLastName.match(regexName) && userFirstName.match(regexName) && userPhoneNumber.match(regexPhoneNumber) && userMailBox.match(regexMailBox)){
       alert('Bravo tu as reussi');
     }else {
       alert('Pense à te relire j\'attends un nom et prénom corrects, une adresse email valide et un numéro de téléphone à 10 chiffres');
     }
   });
});
