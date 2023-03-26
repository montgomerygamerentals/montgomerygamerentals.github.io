// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

function showModal(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

document.querySelectorAll('.myImg').forEach((img) => {
    img.addEventListener('click', (e) => showModal(e.target));
});



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// removes some bootstrap classes for smaller device viewing
$(document).ready(function() {
  if ($(window).width() < 768) {
    $('.col-4').removeClass('col-4');
    $('.col-8').removeClass('col-8');
    $('.p-2').removeClass('p-2');
    $('.mb-3').removeClass('mb-3');

  }
});

// add bootstrap class for images
$(document).ready(function() {
  $('img.jsResize').addClass('mb-3');
});


// resizes the carousel
$(window).on('resize', function () {
  $('#carouselExampleIndicators').height($('#carouselExampleIndicators .carousel-item:first img').height());
}).trigger('resize');

