document.addEventListener("DOMContentLoaded", function() {
  //calling on the id payment-form
  //having the submission to be ran once after user submits
  document
    .getElementById("payment-form")
    .addEventListener("submit", function() {

            //calling on the variables and defining them
      var firstName = document.getElementById("firstname").value;

            //entering validation for first name  field
        if (firstName === " " || firstName === null) {
          alert("Please enter your first name.")
          }
          //calling on the variables and defining them
      var lastName = document.getElementById("lastname").value;
          //entering validation for last name field
        if (lastName === " " || lastName === null) {
          alert("Please enter your last name.")
              return;
          }
            //calling on the cc variable and defining it
      var cc = document.getElementById("credit-card").value;
            //entering validation for the cc
        if (cc === " ") {
          alert("Please enter your 16 digit credit card number.")
              return;
          }
            //entering int validation for cc
        if (thisField.getAttribute("id") === "credit-card") {
          var cc = /^[0-9]{16}$/;
          if (cc.test(thisField.value)) {
            continue;
          } else {
             alert("Please enter a valid credit card number");
             return;
            }
            //calling on the CVC variable and defining it
       var cvc = document.getElementById("cvc").value;
             if (cvc === " " || cvc === null) {
          alert("Please enter your 3 digit code.")
          }
            //entering validation for CVC
        if (thisField.getAttribute("id") === "cvc") {
          var cvc = /^[0-9]{3}$/;
          if (cvc.test(thisField.value)) {
            continue;
          } else {
             alert("Please enter your valid cvc");
             return;
            }






    )};

)};
