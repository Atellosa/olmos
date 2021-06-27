$(document).ready(function(){
    var previousScroll = 0;
    $(window).scroll(function(event){
       var scroll = $(this).scrollTop();
       if (scroll > 100){
  		   $("#barra").css('display', 'none');
  		   $("#barra-sup").css('display', 'none');
       }


       if (scroll == 0){
       	$("#barra").css('display', 'block');
        $("#barra-sup").css('display', 'block');
       }
    });

    $(".btn-agro").on( "click", function() {
      $('#areas').css("display", "none");
      $('#seleccionar').css("display", "none");
      $('#btn-areas').css("display", "block");

      $('#tab-agro').css("display", "flex");
      $('#tab-industrial').css("display", "none");
      $('#tab-terrenos').css("display", "none"); 
      $('#tab-viviendas').css("display", "none"); 
      $('#tab-edificios').css("display", "none"); 
      $('#tab-locales').css("display", "none"); 

      $('.btn-agro').hide();
      $('.btn-industrial').show();
      $('.btn-terrenos').show(); 
      $('.btn-viviendas').show(); 
      $('.btn-edificios').show(); 
      $('.btn-locales').show();  
    });

    $(".btn-industrial").on( "click", function() {
      $('#areas').css("display", "none");
      $('#seleccionar').css("display", "none");
      $('#btn-areas').css("display", "block"); 

      $('#tab-agro').css("display", "none");
      $('#tab-industrial').css("display", "flex");
      $('#tab-terrenos').css("display", "none"); 
      $('#tab-viviendas').css("display", "none"); 
      $('#tab-edificios').css("display", "none"); 
      $('#tab-locales').css("display", "none"); 

      $('.btn-agro').show();
      $('.btn-industrial').hide();
      $('.btn-terrenos').show(); 
      $('.btn-viviendas').show(); 
      $('.btn-edificios').show(); 
      $('.btn-locales').show(); 
    });

    $(".btn-terrenos").on( "click", function() {
      $('#areas').css("display", "none");
      $('#seleccionar').css("display", "none");
      $('#btn-areas').css("display", "block"); 
           
      $('#tab-agro').css("display", "none");
      $('#tab-industrial').css("display", "none");
      $('#tab-terrenos').css("display", "flex"); 
      $('#tab-viviendas').css("display", "none"); 
      $('#tab-edificios').css("display", "none"); 
      $('#tab-locales').css("display", "none"); 

      $('.btn-agro').show();
      $('.btn-industrial').show();
      $('.btn-terrenos').hide(); 
      $('.btn-viviendas').show(); 
      $('.btn-edificios').show(); 
      $('.btn-locales').show(); 
    });

    $(".btn-viviendas").on( "click", function() {
      $('#areas').css("display", "none");
      $('#seleccionar').css("display", "none");
      $('#btn-areas').css("display", "block"); 
           
      $('#tab-agro').css("display", "none");
      $('#tab-industrial').css("display", "none");
      $('#tab-terrenos').css("display", "none"); 
      $('#tab-viviendas').css("display", "flex"); 
      $('#tab-edificios').css("display", "none"); 
      $('#tab-locales').css("display", "none"); 

      $('.btn-agro').show();
      $('.btn-industrial').show();
      $('.btn-terrenos').show(); 
      $('.btn-viviendas').hide(); 
      $('.btn-edificios').show(); 
      $('.btn-locales').show(); 
    });

    $(".btn-edificios").on( "click", function() {
      $('#areas').css("display", "none");
      $('#seleccionar').css("display", "none");
      $('#btn-areas').css("display", "block"); 
           
      $('#tab-agro').css("display", "none");
      $('#tab-industrial').css("display", "none");
      $('#tab-terrenos').css("display", "none"); 
      $('#tab-viviendas').css("display", "none"); 
      $('#tab-edificios').css("display", "flex"); 
      $('#tab-locales').css("display", "none"); 

      $('.btn-agro').show();
      $('.btn-industrial').show();
      $('.btn-terrenos').show(); 
      $('.btn-viviendas').show(); 
      $('.btn-edificios').hide(); 
      $('.btn-locales').show(); 
    });

    $(".btn-locales").on( "click", function() {
      $('#areas').css("display", "none");
      $('#seleccionar').css("display", "none");
      $('#btn-areas').css("display", "block"); 
           
      $('#tab-agro').css("display", "none");
      $('#tab-industrial').css("display", "none");
      $('#tab-terrenos').css("display", "none"); 
      $('#tab-viviendas').css("display", "none"); 
      $('#tab-edificios').css("display", "none"); 
      $('#tab-locales').css("display", "flex"); 

      $('.btn-agro').show();
      $('.btn-industrial').show();
      $('.btn-terrenos').show(); 
      $('.btn-viviendas').show(); 
      $('.btn-edificios').show(); 
      $('.btn-locales').hide(); 
    });

    $(".btn-volver").on( "click", function() {
      $('#areas').css("display", "block");
      $('#seleccionar').css("display", "block");
      $('#btn-areas').css("display", "none");

      $('#tab-agro').css("display", "none");
      $('#tab-industrial').css("display", "none");
      $('#tab-terrenos').css("display", "none"); 
      $('#tab-viviendas').css("display", "none"); 
      $('#tab-edificios').css("display", "none"); 
      $('#tab-locales').css("display", "none"); 

      $('.btn-agro').show();
      $('.btn-industrial').show();
      $('.btn-terrenos').show(); 
      $('.btn-viviendas').show(); 
      $('.btn-edificios').show(); 
      $('.btn-locales').show();  
    });

  });