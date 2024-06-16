document.addEventListener('DOMContentLoaded', () => {
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach((card, index) => {
        card.style.zIndex = index + 1;
    });

    let indexEvent = 1;
    showSlides(indexEvent);

    function decrement(n) {
        showSlides(indexEvent += n);
    }

    function increment(n) {
        showSlides(indexEvent += n);
    }

    function current(n) {
        showSlides(indexEvent = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("event-list");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            indexEvent = 1;
        } else if (n < 1) {
            indexEvent = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[indexEvent - 1].style.display = "flex";  
        dots[indexEvent - 1].className += " active";
    }

    window.decrement = decrement;
    window.increment = increment;
    window.currentSlide = current;
});