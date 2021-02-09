$( document ).ready(function() {

    $("#projects").on('click', function(){
       $('#projectCards').removeClass("is-hidden");
    })
    $("#hideProjects").on('click', function(){
        $('#projectCards').addClass('is-hidden');
    })

   //nav bar
  // Get all "navbar-burger" elements
  $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

});


// end script
});