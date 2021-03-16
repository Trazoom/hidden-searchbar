const body = document.body;
const opens =  document.getElementById('open');
const closes = document.getElementById('close');
const openClose = document.getElementById('open-close');

opens.addEventListener('click', () => {
    body.classList.add('active');
    openClose.classList.add('active');
});

closes.addEventListener('click', () => {
    body.classList.remove('active');
    openClose.classList.remove('active');
});