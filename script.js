$(document).ready(function (){
    $("#portfolio-button").click(function (){
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1500);
    });
});
  $(document).ready(function (){
      $("#about-button").click(function (){
          $('html, body').animate({
              scrollTop: $("#about").offset().top
          }, 1500);
      });
  });
    $(document).ready(function (){
        $("#contact-button").click(function (){
            $('html, body').animate({
                scrollTop: $("#contact").offset().top
            }, 1500);
        });
    });
