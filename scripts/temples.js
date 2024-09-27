const now = new Date();
const year = now.getFullYear();

document.getElementById('lastModified').textContent = document.lastModified;
document.getElementById('currentYear').textContent = year;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});