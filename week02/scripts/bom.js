//declare 3 variables that hold references to input, button, and list elements
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

//create a function that will run in response to the button being clicked
button.addEventListener('click', () => {
    //store what the user inputs in a variable
    const myChapter = input.value;
    //empty the input field by setting its value to an empty string ""
    input.value = "";

    //create 3 elements - list, span (text), and button (delete button) and store them in variables
    const listItem = document.createElement('li'); //list created once user starts inputing chapters
    const listText = document.createElement('span'); //bom chapters the user inputs
    const deleteBtn = document.createElement('button'); //button appearing next to chapters to be able to delete them

    //append the span(the input from the user) and button as children of the list item (list being created from user's input)
    listItem.appendChild(listText); //append span to list item
    listText.textContent = myChapter; //set the text content of th span to the input element value saved earlier (myChapter)
    listItem.appendChild(deleteBtn); //append button to the list item
    deleteBtn.textContent = '❌'; //set the text content of the button to a red x
    list.appendChild(listItem); //append the list item as chilf of the list

    //attach an event handler to the delete button so when clicked it will delete the bom chapter
    deleteBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    //use focus method to focus the input element ready for enter the next favorite chapter 
    input.focus();
});
