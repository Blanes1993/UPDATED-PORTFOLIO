// Open the Modal
function openModalMobile() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModalMobile() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlidesMobile(slideIndex);

// Next/previous controls
function plusSlidesMobile(n) {
    showSlidesMobile(slideIndex += n);
}

// Thumbnail image controls
function currentSlideMobile(n) {
    showSlidesMobile(slideIndex = n);
}

function showSlidesMobile(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesMobile");
    var dots = document.getElementsByClassName("demoMobile");
    var captionText = document.getElementById("captionMobile");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}