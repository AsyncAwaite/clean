const burger = document.querySelector('.burger');

burger.addEventListener('click', (e) => {
    e.target.classList.toggle('burger-opened')
});