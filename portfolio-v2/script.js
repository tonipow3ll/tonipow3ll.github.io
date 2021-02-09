$( document ).ready(function() {

    // SHOW/HIDE PROJECTS
    $("#projects").on('click', function(){
       $('#projectCards').removeClass("is-hidden");
    })
    $("#hideProjects").on('click', function(){
        $('#projectCards').addClass('is-hidden');
    })
    // SHOW LANGUAGES
    // $(".subtitle").on('click', function(){
    //     $(".text").toggleClass("is-hidden")
    // })
    // $(".subtitle").on('click', function(){
    //     $(".text").addClass("is-hidden")
    // })


   // NAVBAR
  // Get all "navbar-burger" elements
  $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

});


// end script
});