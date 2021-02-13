$(document).ready(function () {

    // light mode
    document.onkeypress = function (e) {
        e = e || window.event;
        if (e.keycode === 13) {
            document.documentElement.classList.toggle('dark-mode')

            document.querySelectorAll('.invert').forEach((result) => {
                result.classList.toggle('invert')
            })
        }
    }

    // SHOW/HIDE PROJECTS
    $("#projects").on('click', function () {
        $('#projectCards').removeClass("is-hidden");
    })
    $("#hideProjects").on('click', function () {
        $('#projectCards').addClass('is-hidden');
    })

    // NAVBAR
    // Get all "navbar-burger" elements
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    // JS FOR CAROUSEL

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