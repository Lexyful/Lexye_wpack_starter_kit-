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

const greetingContainer = document.querySelector('.greeting-container')
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
  const bookedRoomNumbers = bookingRepository.getBookedRoomNumbersByDate(selectedDate)
  const availableRooms = rooms.getAvailableRooms(bookedRoomNumbers)
  console.log(availableRooms)
  // 2022/04/22
  
  // 2023-03-23
}

function searchRoomsByType(){
  event.preventDefault()
  const bookedRoomTypes = bookingRepository.getBookedRoomByType(selectedType)
  const availableRoomTypes = rooms.getAvailableRooms(bookedRoomTypes)
  const selectedType = dropdown.value
  if(dropdown.value === 'single room'){
   return availableRoomTypes.roomType.includes('single room')

 }
 if(dropdown.value === 'junior suite'){
  return availableRoomTypes.roomType.includes('junior suite')

}
if(dropdown.value === 'residential suite'){
  return availableRoomTypes.roomType.includes('residential suite')

}
if(dropdown.value === 'suite'){
  return availableRoomTypes.roomType.includes('suite')

}
console.log(availableRoomTypes)

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