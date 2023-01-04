let nav = document.querySelector('.nav')
nav.addEventListener('click', (event) => {
    let overlay = document.querySelector('.overlay')
    console.log({event})
    overlay.classList.toggle('active')
});

nav.addEventListener('click',() => {
    nav.classList.toggle('active')
});