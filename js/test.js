//test

// if you resize the Result pane, RUN again

// make each section fill window vertically (height)
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


/*
var rama = $('#rama');
var sita = $('#sita');

// hide all the divs
$('.all-secs').hide();

// this function will work for an infinite number of buttons and divs - if the classes and IDs are set up correctly in HTML
$('.name').click(function() {
	// hide any open div
  $('.all-secs').hide();
  // get value of data attribute from the thing that was clicked
  var person = $(this).data('person');
  $(person).slideDown();
});

//i changed character to all-secs, everything else must be changed


*/
