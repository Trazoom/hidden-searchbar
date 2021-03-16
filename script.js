const body = document.body;
const opens =  document.getElementById('open');
const closes = document.getElementById('close');
const openClose = document.getElementById('open-close');
const menu = document.getElementById('menu');

opens.addEventListener('click', () => {
    menu.classList.add('active');
    openClose.classList.add('active');
});

closes.addEventListener('click', () => {
    menu.classList.remove('active');
    openClose.classList.remove('active');
});

window.addEventListener('resize', menuHigh);

function menuHigh() {
    const height = window.innerHeight + 100;
    menu.style.height = height + "px";
}
menuHigh();