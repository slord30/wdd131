// this code works too
// const now = new Date();
// const year = now.getFullYear();

// document.getElementById('lastModified').textContent = document.lastModified;
// document.getElementById('currentYear').textContent = year;

// code from professor
const d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;