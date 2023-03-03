// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import fetchAll from '/apiCalls';


console.log('This is the JavaScript entry file - your code begins here.');



// function getRandomSomethingId(){
//   return Math.floor(Math.random() * 41);
// };

function show(element) {
element.classList.remove('hidden');
};

function hide(element) {
element.classList.add('hidden');
};