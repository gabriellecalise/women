$(document).ready(function() {

  $('.all-secs').css( {'height': (  $(window).height() )  } );
//put a class on all intro panels and add the same line but with that class. DO NOT EVER PuT ALL SECS ON THE INTRO

  // hide all the divs
  $('.all-secs').hide();


  var mtop = $('#mtop');
  var vtop = $('#vtop');
  var rtop = $('#rtop');


  // this function will work for an infinite number of buttons and divs - if the classes and IDs are set up correctly in HTML
  $('.topbut').click(function() {
   // hide any open div
    $('#intro').slideUp();
    // get value of data attribute from the thing that was clicked
    var slide = $(this).data('slide');
    $(slide).slideDown();
  });

  $('.otherbut').click(function() {
   // hide any open div
    $('.all-secs').slideUp();
    // get value of data attribute from the thing that was clicked
    var slide = $(this).data('slide');
    $(slide).slideDown();
  });



//accordion style
// start with all boxes hidden
$('.abusebox').hide();

// make each gray bar open a certain box
$('#physical').on('click', function() {
$('#physicalsigns').slideToggle('fast');
});
$('#emotional').on('click', function() {
$('#emotionalsigns').slideToggle('fast');
});
$('#sexual').on('click', function() {
$('#sexualsigns').slideToggle('fast');
});
$('#financial').on('click', function() {
$('#financialsigns').slideToggle('fast');
});
$('#digital').on('click', function() {
$('#digitalsigns').slideToggle('fast');
});

/*Domestic violence abuse type slidetoggle
   $('#physicalsigns').hide();
   $('#physical').click(function() {
   $('#physicalsigns').slideToggle();
   });

   $('#emotionalsigns').hide();
   $('#emotional').click(function() {
   $('#emotionalsigns').slideToggle();
   });

   $('#sexualsigns').hide();
   $('#sexual').click(function() {
   $('#sexualsigns').slideToggle();
   });

   $('#financialsigns').hide();
   $('#financial').click(function() {
   $('#financialsigns').slideToggle();
   });

   $('#digitalsigns').hide();
   $('#digital').click(function() {
   $('#digitalsigns').slideToggle();
   });
*/




  // the following will HIDE your questions

  /*
  $('.hide').hide();
  $('#trueanswer1').hide();
  $('#falseanswer1').hide();
  $('#question2').hide();
  $('#answer2').hide();
  $('#issuemoney').hide();
  */


  //give each thing you want to hide a class and then hide everything with that class




/* True/False questions

  $('#true1').click(function() {
    $('#trueanswer1').slideToggle();
  });

  $('#false1').click(function() {
    $('#falseanswer1').slideToggle();
  });
*/






/*
  $('.all-secs').css( {'height': (  $(window).height() )  } );
  $('.all-secs').hide();
  $('#sec1').show();

  $('body').on('click', '.all-secs', function() {
      // slide this section out of sight
      $(this).slideToggle();

      // show the next section - unless we are on the last section
      if ( $(this).attr("id") != "sec9" ) {
      	$(this).next().slideToggle();
      } else {
         $('#sec1').slideToggle();
      }
  });

  */












/* this is how I hese will SIMULTANEOUSLY .SLIDEUP() the old question AND .SLIDEDOWN() the new question


    $('.child').click(function(){
      $('#hide1').slideUp();
      $('.child').hide();
    });

    $("#nextQuestionTrue1").click(function(){
      $("#question2").slideDown(function(){
    });
    });

    $("#nextQuestionFalse1").click(function(){
      $("#question2").slideDown(function(){
    });
    });
 */
/*
    $('.all-secs').css( {'height': (  $(window).height() )  } );

    $('.all-secs').hide();

    $('#sec1').show();

    $('body').on('click', '.all-secs', function() {
        // slide this section out of sight
        $(this).slideToggle();

        // show the next section - unless we are on the last section
        if ( $(this).attr("id") != "sec9" ) {
        	$(this).next().slideToggle();
        } else {
            $('#sec1').slideToggle();






/* I THINK THERE IS A PROB WITH USING THE CHILD CLASS - instead of having a clas for launching the question, you might need an ID.
change child class to child1 child2 ID

    //question2
    $('.child').click(function(){
      $('#hide2').slideUp();
      $('.child').hide();
    });

    $("#getsBetter").click(function(){
      $("#answer2").slideDown(function(){
    });
    });

    $("#getsWorse").click(function(){
      $("#answer2").slideDown(function(){
    });
    });
*/

}); //this one closes the whole function, don't delete it!!




//slide toggle the answer to the quiz when you click true or false
//slide up to a new page when you click the next question button


/* THESE SLIDE DOWNS WORK
    $("#nextQuestionTrue1").click(function(){
      $("#question2").slideDown("slow", function(){
    });
  });

  $("#nextQuestionFalse1").click(function(){
    $("#question2").slideDown("slow", function(){
  });
});

*/

//THE SLIDE UP WORKS
/*$(".child").click(function() {
  $(this).parent("div").slideUp();
  });


  $(".child").click(function() {
    $("#set2").slideDown("slow", function(){
    });
  });
//THE SLIDE DOWN DOES NOT WORK, check the sampler JS and practice!!!!*/


/*
i tried to combine them both and it did not work
  $(".child").click(function() {
  $('this').parent("div").slideUp.("set2").slideDown();
*/

/*
This slide up works
    $( "#nextQuestion1" ).click(function() {
      $( "#set1" ).slideUp( "medium", function() {
        // Animation complete.
      });
    });

    $( "#nextQuestionFalse1" ).click(function() {
      $( "#set1" ).slideUp( "medium", function() {
        // Animation complete.
      });
    });
*/



  /*
  $("#nextQuestionTrue1").click(function() {
     $("#question2").toggle() {
       // Animation complete.
     });
   });
*/
