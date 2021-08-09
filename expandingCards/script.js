// get all 'card' classes
const cards = document.querySelectorAll(".card");

// loop over them, add an event listener,
// onclick, remove all other, and add active class
cards.forEach((card) => {
        card.addEventListener("click", () => {
        removeActiveClass();
        card.classList.add("active");
    });
});

// define removeActiveClass
function removeActiveClass() {
        cards.forEach((card) => {
        card.classList.remove("active");
    });
}
