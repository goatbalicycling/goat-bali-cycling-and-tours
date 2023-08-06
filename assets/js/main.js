



    function sendWhatsapp() {
        let biketour = document.getElementById("bike-tour").value;
        let adults = document.getElementById("adults").value;
        let children = document.getElementById("children").value;
        let infant = document.getElementById("infant").value;
        let nama = document.getElementById("name").value;
        let hotel = document.getElementById("hotel").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        let cash = document.getElementById("cash").value;
        let request = document.getElementById("request").value;

        if (validateForm()) {
          let message = " I would like to make reservation for" +  "%0A" + biketour +  "%0AName: " + nama +
            "%0AAdults: " + adults + "%0AChildren: " + children + "%0AInfant: " + infant +
            "%0AHotel: " + hotel + "%0ADate: " + date + "%0ATime: " + time+ "%0ASpecial Request: " + request;
      
          if (cash !== null) {
            message += "%0APayment: " + cash;
          }
      
          let url = "https://wa.me/6285737412380?text=" + message;
          window.open(url);
        }
      };
       
  function validateForm() {
    let biketour = document.getElementById("bike-tour").value;
    let adults = document.getElementById("adults").value;
    let children = document.getElementById("children").value;
    let infant = document.getElementById("infant").value;
    let nama = document.getElementById("name").value;
    let hotel = document.getElementById("hotel").value;
    let date = document.getElementById("date").value;
  
    if (biketour === "" || adults === "" || children === "" || infant === "" || 
      nama === "" || hotel === "" || date === "") {
      alert("Please complete all forms before ordering.");
      return false;
    }
    return true;
  };
  

  (function ($) {

    "use strict";
  
  
  
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();
  


  
    
  
  
  })(jQuery);