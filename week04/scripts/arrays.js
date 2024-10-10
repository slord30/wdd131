//  arrays.js

//////ACTIVITY 1 - MAP////////
//map is great when we need to change each item in an array somehow. It returns a new array and does NOT modify the original array.

const steps = ["one", "two", "three"];
//1. The listTemplate function should take a step and return the HTML to turn that step (a string) into a list item (HTML). For example: "one" will get converted to "<li>one</li>" Template literal strings are great for this.
const listTemplate(step) {
  return `<li>${step}</li>`;   //the html string made from step  
}

//2. Use your template function and the map method to convert the whole list to HTML. Store the result in a variable.
const stepsHtml = steps.map(listTemplate);

// set the innerHTML
//3.Set our list of HTML strings into the myList list. (Hint...checkout the .join() method.)
document.querySelector("#myList").innerHTML = stepsHtml.join();


////////ACTIVTY 2 - MAP//////////
//1.Declare an array with letter grades in it: ['A', 'B', 'A']
const grades = ['A', 'B', 'A'];

//2.Write a function that will take one letter grade, and return the appropriate gpa points for that grade. IE if we send in 'A' it should return 4.
const convertGradeToPoints(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4; 
    }
    
    else if (grade === 'B') {
        points = 3;
    }
    return points;   
}

//3.Use map and our conversion function to convert the array in step 1 to gpa points.
const gpaPoints = grades.map(convertGradeToPoints);


//////////ACTIVITY 3 - REDUCE/////////
//reduce is useful when we need to compress an array into a single value. It is most often used when the array has at least one value that can be mathematically flattened

//1.Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
//2.Using reduce calculate the GPA from the array of gpaPoints.
const pointsTotal = gpaPoints.reduce(function(total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

//example 2
//this is the same thing as above, but with an arrow function
const pointsTotal2 = gpaPoints.reduce((total, item) => total + item);
const gpa2 = pointsTotal2 / gpaPoints.length;

//this could be further simplified as
const gpa3 = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


///////////ACTIVITY 4 - FILTER///////////
//filter is similar to map in that it returns a new array of elements. The elements in the calling array will be included in the new array if they pass a test that you include in the callback you pass in.

//1.Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

//2.Using filter keep only the fruits that are longer than 6 characters.
const fruits6 = fruits.filter((fruit) => fruit.length < 6);

//another way to do this
const fruitsSixLetters = fruits.filter(function (fruit) {
    return fruit.length < 6;
});


//////////ACTIVITY 5 - indexOf////////////
//indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present.

//1.Declare an array with the following value: [12, 34, 21, 54]
const numbers = [12, 34, 21, 54]

//2.Declare a luckyNumber variable with the value 21;
const luckyNumber = 21;

//3.Use indexOf to see if the luckyNumber is in the Array.
let luckyIndex = numbers.indexOf(luckyNumber);

