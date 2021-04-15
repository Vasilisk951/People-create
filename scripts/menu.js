const hamBtn = document.querySelector('.header-hamburger');
const hamMenu = document.querySelector('.ham');

hamBtn.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    setTimeout(() => {
        hamMenu.classList.toggle('opacity')
    }, 0)
})