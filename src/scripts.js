import fetchAll from './apiCalls';
import Customer from './classes/Customer';
import Booking from './classes/Bookings';
import Room from './classes/Rooms';

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
const searchButton = document.getElementById('dateSubmit')
const calendar = document.getElementById('calendar')



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

searchButton.addEventListener('click', searchRoomsByDate)

function viewCustomerGreeting(){
  console.log("customer!!!!!",customer)
  customer.checkBookings(bookings)
  const totalCost = customer.calculateCost(rooms)
  greetingContainer.innerHTML = ` <h3>Hello ${customer.name}! You have bookings and they cost ${totalCost}</h3>`
  customer.customerBookings.forEach(booking => {
    greetingContainer.innerHTML +=  `<div class="displayed-bookings">
    <p>${booking.date}<p>
    <p>${booking.roomNumber}<p>
     </div>`
  })
  
  
}


function searchRoomsByDate(){
  event.preventDefault()
  // console.log(calendar.value)
  const selectedDate = calendar.value.replaceAll('-','/')
  console.log(selectedDate)
  if(bookings.booking)
  // 2022/04/22
  
  // 2023-03-23
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