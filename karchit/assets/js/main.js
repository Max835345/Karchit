ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: [52.7876521, 88.4792307,361],
        zoom: 17,
    }, {
    }),
    myPlacemark = new ymaps.Placemark([52.7876521, 88.4792307,361],{
        balloonContentHeader: "",
        balloonContentBody: "",
        balloonContentFooter: "",
        hintContent: "Мы тут"
    });
    
myMap.geoObjects.add(myPlacemark);
    
}



let slideIndex = 1;
showSlides(slideIndex);
function nextSlide() {
    showSlides(slideIndex += 1);
}
function previousSlide() {
    showSlides(slideIndex -= 1);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}