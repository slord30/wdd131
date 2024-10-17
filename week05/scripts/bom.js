//declare 3 variables that hold references to input, button, and list elements
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

///////////WEEK 5 PRACTICE///////////////

//2. declare an array named chaptersArray and assign it to the results of a defined function named getChapterList
let chaptersArray = getChapterList() || []; //3. add a compound OR condition to assign it to an empty array in case this is the user's first visit or if the localStorage item is missing

//4. populate the displayed list of chapters. Use a forEach on the chaptersArray to process each entry name "chapter". Use an arrow function within the loop to call a new defined function named displayList and pass it the argument of "chapter". That way eachc entry will be processed, ie appended to the list.
chaptersArray.forEach(chapter => {
    displayList(chapter);
})

//5. change the button click event listener to only do the following tasks:
button.addEventListener('click', () => {
    if (input.value != '') { //make sure the input is not empty
        displayList(input.value); //call the function that outputs the submitted chapter
        chaptersArray.push(input.value); //add the chapter to the array
        setChapterList(); //update the localStorage with the new array
        input.value = ''; //clear the input
        input.focus(); //set the focus back to the input
    }
});

//6. create a displayList defined function that receives one parameter name "item"
//7. put all the code that builds a list item from the previous button click even listener into this new displayList function and use the "item" parameter as the input. A deleteChapter function will need to be called within the delete button click even to remove the chapter from the array and localStorage
function displayList(item) { 
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; //note the use of the displayList parameter "item"
    deletebutton.textContent ='❌';
    deletebutton.classList.add('delete'); //this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); //note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); //set the focus back to the input
    });
    console.log('I like to type code so I can learn it better.f');
}

//8. define the setChapterList funciton to se the localStorage item that you have already named. Use the JSON.stringify() to stringify the array
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

//9. define the getChapterList function to get the localStorage item. No parameter is needed. Since this function returns to an awaiting arry, we will need use JSON.parse on the string
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

//10. define the deleteChapter function with parameter named "chapter" that does 3 things.
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); //reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when we called the deleteChapter function.
    chaptersArray = chaptersArray.filter(item => item !== chapter); //redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed.
    setChapterList(); //call the setChapterList function to update the localStorage item.
}



