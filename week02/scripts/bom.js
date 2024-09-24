//declare 3 variables that hold references to input, button, and list elements
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

//create a li element that will hold each entries chapter title and an associated delete button
const li = document.createElement('li');

//create a delet button
const deleteBtn = document.createElement('button');

//populate the li element variable's textContent or innerHTML with the input value
li.textContent = input.value;

//populate the button textContent with a ❌
deleteBtn.textContent = '❌';

//append the li element variable with the delete button
li.append(deleteBtn);

//append the li element variable to the unordered list in your HTML
li.appendChild(li);

