let currentIndex = 0;
const slides = document.getElementById("carousel");
const totalSlides = slides.children.length;

function updateSlidePosition() {
slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
currentIndex = (currentIndex + 1) % totalSlides;
updateSlidePosition();
}

function prevSlide() {
currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
updateSlidePosition();
}