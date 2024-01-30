let card = document.querySelector(".card")
let cardHeading = document.querySelector(".card-heading")

cardHeading.addEventListener('mouseover', () => {
    card.classList.toggle('card-hover-shadow')
})

cardHeading.addEventListener('mouseout', () => {
    card.classList.toggle('card-hover-shadow')
})