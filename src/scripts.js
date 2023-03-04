import fetchAll from './apiCalls';
import Customer from './classes/Customer';
import Booking from './classes/Booking';
import Room from './classes/Room';

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import fetchAll from '/apiCalls';


console.log('This is the JavaScript entry file - your code begins here.');


let customer;
// let customerData;
let bookingsData;
let bookings;
let rooms;
let roomsData;
let greeting

const greetingContainer = document.querySelector('.greeting-container')

window.addEventListener('load', () => {
  fetchAll(38)
  .then(data => {
  customer = new Customer(data[0])
  roomsData =  data[1].rooms
  rooms = new Room(roomsData)
  bookingsData =  data[2].bookings
  bookings =  new Booking(bookingsData)
  console.log(bookings.getBookingByCustomerId(customer.id))
  viewCustomerGreeting()

  })
})

function viewCustomerGreeting(){
  console.log("customer!!!!!",customer)
greetingContainer.innerHTML = ` <h3>Hello ${customer.name}! You have ${customer.customerBookings}</h3>`

}

// // function getRandomSomethingId(){
// //   return Math.floor(Math.random() * 41);
// // };

// function show(element) {
// element.classList.remove('hidden');
// };

// function hide(element) {
// element.classList.add('hidden');
// };