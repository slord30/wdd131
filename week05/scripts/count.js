// let submissions = Number(window.localStorage.getItem("submissions")) || 0; //assign it to 0 if no submissions
// submissions ++; //increment
// window.localStorage.setItem("submissions", submissions);
// document.getElementById(".count").textContent = submissions;

const visitsDisplay = document.querySelector(".count");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
    visitsDisplay.textContent = `This is your first visit. Welcome!`;
}
else {
    visitsDisplay.textContent = numVisits;
}
numVisits++;
localStorage.setItem("numVisits-ls",numVisits);