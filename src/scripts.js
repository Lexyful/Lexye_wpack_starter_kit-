import fetchAll from './apiCalls';
import Customer from './classes/Customer';
import Booking from './classes/Booking';
import Room from './classes/Rooms';

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import BookingRepository from './classes/BookingRepository';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import fetchAll from '/apiCalls';


console.log('This is the JavaScript entry file - your code begins here.');


let customer;
// let customerData;
let bookingsData;
let bookings;
let bookingRepository
let rooms;
let roomsData;
let greeting


const bookingContainer = document.querySelector('.greeting-container')
const searchButton = document.getElementById('dateSubmit')
const calendar = document.getElementById('calendar')
const dropdown = document.querySelector('.dropdown-container')




window.addEventListener('load', () => {
  fetchAll(38)
  .then(data => {
  customer = new Customer(data[0])
  roomsData =  data[1].rooms
  rooms = new Room(roomsData)
  bookingsData =  data[2].bookings //DO NOT USE THIS ANYMORE
  bookings = bookingsData.map(bookingData => {
// console.log('bookingData',bookingData)
   return new Booking(bookingData)
  })
  bookingRepository = new BookingRepository(bookings)

  // console.log(bookingsRepository.getBookingByCustomerId(customer.id))
  viewCustomerGreeting()

  })
})

dropdown.addEventListener('change', searchRoomsByType)
searchButton.addEventListener('click', searchRoomsByDate)

function viewCustomerGreeting(){
  // console.log("customer!!!!!", bookingRepository)
  // console.log(rooms)
  customer.checkBookings(bookingRepository)
  // console.log("customer booked", customer.customerBookings)
  const totalCost = customer.calculateCost(rooms)
  bookingContainer.innerHTML = ` <h3>Hello ${customer.name}! You have bookings and they cost ${totalCost}</h3>`
  customer.customerBookings.forEach(booking => {
    bookingContainer.innerHTML +=  `<div class="displayed-bookings">
    <p>${booking.date}<p>
    <p>${booking.roomNumber}<p>
     </div>`

  })
  
  
}

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};


function searchRoomsByDate(){
  event.preventDefault()
  // console.log(calendar.value)
  const selectedDate = calendar.value.replaceAll('-','/')
  console.log(selectedDate)
  const bookedRoomNumbers = bookingRepository.getBookedRoomNumbersByDate(selectedDate)
  rooms.getAvailableRooms(bookedRoomNumbers)
//rooms.availableRooms
 
}

function searchRoomsByType(){
  event.preventDefault()
  const selectedType = event.target.value
  const transformedSelectedType = selectedType.replace('-', ' ')
  console.log("type", event.target.value)
  console.log(transformedSelectedType)
  // const bookedRoomTypes = bookingRepository.getBookedRoomByType(selectedType)
  rooms.availableRooms = rooms.getAvailableRoomsByType(transformedSelectedType)
console.log(rooms.availableRooms)

showAvailableBookings()
// hide(heartBtn)
// show(pinkHeartBtn) 

}

function showAvailableBookings(){
 bookingContainer.innerHTML = ''
  rooms.availableRooms.forEach(room => {
   bookingContainer.innerHTML +=  `<div class="displayed-bookings">
    <p>Type:${room.roomType}<p>
    <p>Room Number${room.number}<p>
     </div>`
})
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