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


var carousels = bulmaCarousel.attach('.carousel', options);

// Loop on each carousel initialized
for(var i = 0; i < carousels.length; i++) {
	// Add listener to  event
	carousels[i].on('before:show', state => {
		console.log(state);
	});
}

// Access to bulmaCarousel instance of an element
var element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
	element.bulmaCarousel.on('before-show', function(state) {
		console.log(state);
	});
}


// end script
});