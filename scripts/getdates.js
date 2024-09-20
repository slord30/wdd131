// const year = document.querySelector("#currentyear");
// const lastModified = document.querySelector("#lastModified");

// // get the current year for footer
// const date = new Date();
// year.innerHTML = today.GetFullYear();

// //get the last modification date of the home page
// let lastMod = document.lastModified;
// $lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

const now = new Date();
const year = now.getFullYear();

document.getElementById('lastModified').textContent = document.lastModified;
document.getElementById('currentYear').textContent = year;
