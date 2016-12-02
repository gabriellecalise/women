$(document).ready(function() {

  // the following will HIDE your questions


  $('.hide').hide();
  $('#trueanswer1').hide();
  $('#falseanswer1').hide();
  $('#question2').hide();
  $('#answer2').hide();
  $('#issuemoney').hide();


  //give each thing you want to hide a class and then hide everything with that class



  $( "#money" ).click(function() {
    $( "#issuemoney" ).show(function() {
    });
  });

    $( "#money" ).click(function() {
      $('#intro').hide(function(){
      });
    });

//TO HIDE A POPUP$('.__').click(function(){
  //});



//True/False questions

  $('#true1').click(function() {
    $('#trueanswer1').slideToggle();
  });

  $('#false1').click(function() {
    $('#falseanswer1').slideToggle();
  });


  $('.all-secs').css( {'height': (  $(window).height() )  } );
  $('.all-secs').hide();
  $('#sec1').show();

  $('body').on('click', '.all-secs', function() {
      // slide this section out of sight
      $(this).slideToggle();

      // show the next section - unless we are on the last section
      if ( $(this).attr("id") != "sec8" ) {
      	$(this).next().slideToggle();
      } else {
         $('#sec1').slideToggle();
      }
  });



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
