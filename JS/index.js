// removes some bootstrap classes for smaller device viewing
$(document).ready(function() {
    if ($(window).width() < 768) {
        $('.col-sm-5').removeClass('col-sm-5'); 
    }
});