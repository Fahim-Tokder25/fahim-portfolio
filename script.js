console.log("Welcome to my portfolio website!");

const projectCards = document.querySelectorAll(".card");

projectCards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.style.transform = "translateY(-5px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "translateY(0)";
    });
});