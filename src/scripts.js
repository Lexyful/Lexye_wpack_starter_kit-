import fetchAll from './apiCalls';
import Customer from './classes/Customer';
import Booking from './classes/Booking';
import Room from './classes/Rooms';

import './css/styles.css';
import BookingRepository from './classes/BookingRepository';

console.log('This is the JavaScript entry file - your code begins here.');


let customer;
let bookingsData;
let bookings;
let bookingRepository
let rooms;
let roomsData;
let selectedDate

const username = document.getElementById('userName')
const password = document.getElementById('passwordId')
const signInButton = document.querySelector('.submit-button')
const calendar = document.getElementById('calendar')
const searchButton = document.getElementById('dateSubmit')
const bookingContainer = document.querySelector('.main-section')
const dropdown = document.querySelector('.dropdown-container')
bookingContainer.addEventListener('click', function(event) {
if(event.target.className == "select-button"){
  newBooking(parseInt(event.target.id))
}
})


function fetchThingy(id){
  fetchAll(id)
  .then(data => {
  customer = new Customer(data[0])
  roomsData =  data[1].rooms
  rooms = new Room(roomsData)
  bookingsData =  data[2].bookings
  bookings = bookingsData.map(bookingData => {
   return new Booking(bookingData)
  })
  bookingRepository = new BookingRepository(bookings)
  viewCustomerGreeting()
  })
  
}

dropdown.addEventListener('change', searchRoomsByType)
searchButton.addEventListener('click', searchRoomsByDate)
signInButton.addEventListener('click',  function() {
  event.preventDefault()
  signIn()

})

function signIn(){
  console.log("hi", username.value, password.value)
  const id = validateInput(username.value, password.value) 
  if(id){
    fetchThingy(id)
  }
}

function validateInput(username, password){
  if(password !== 'overlook2021'){
    bookingContainer.innerHTML = ''
    bookingContainer.innerHTML +=  `<div class="displayed-bookings">
    <p>Sorry! Incorrect Password<p>`
    return 
  }
  if(username.substring(0, 8) !== 'customer'){
    bookingContainer.innerHTML = ''
    bookingContainer.innerHTML +=  `<div class="displayed-bookings">
    <p>Sorry! Incorrect Username<p>`
    return
  }
  if(parseInt(username.substring(8))  > 50 || parseInt(username.substring(8)) < 1){
    bookingContainer.innerHTML = ''
    bookingContainer.innerHTML +=  `<div class="displayed-bookings">
    <p>Sorry! Incorrect Username<p>`
    return
  } 
  return username.substring(8)
}


function viewCustomerGreeting(){
  customer.checkBookings(bookingRepository)
  const totalCost = customer.calculateCost(rooms)
  bookingContainer.innerHTML = `
   <h3>Hello ${customer.name}! You have bookings and they cost ${totalCost}</h3>
  `
   customer.customerBookings.forEach(booking => {
    bookingContainer.innerHTML +=  `<div class="displayed-bookings">
    <p>${booking.date}<p>
    <p>${booking.roomNumber}<p>
     </div>`
  }) 
}

function searchRoomsByDate(){
  event.preventDefault()
  selectedDate = calendar.value.replaceAll('-','/')
  console.log(selectedDate)
  const bookedRoomNumbers = bookingRepository.getBookedRoomNumbersByDate(selectedDate)
  rooms.getAvailableRooms(bookedRoomNumbers)
  showAvailableBookings()
}

function searchRoomsByType(){
  event.preventDefault()
  const selectedType = event.target.value
  const transformedSelectedType = selectedType.replace('-', ' ')
  console.log("type", event.target.value)
  console.log(transformedSelectedType)
  rooms.availableRooms = rooms.getAvailableRoomsByType(transformedSelectedType)
  showAvailableBookings()
}

function showAvailableBookings(){
 if(rooms.availableRooms.length > 0){
 bookingContainer.innerHTML = ''
  rooms.availableRooms.forEach(room => {
   bookingContainer.innerHTML +=  `<div class="displayed-bookings">
    <p>Type:${room.roomType}<p>
    <p>Room Number${room.number}<p>
    <button class="select-button"  id=${room.number}>Select</button>
     </div>`
  })
} else{
  bookingContainer.innerHTML = ''
  const thisThing = bookingContainer.innerHTML = ''
   bookingContainer.innerHTML +=  `<div class="displayed-bookings">
  <p>Nothing available<p>`
  setTimeout(fetchThingy, 3000)
  return thisThing
  }
} 

function newBooking(roomNumber){ 
if(!rooms.availableRooms.includes(roomNumber)){
   const newFetchy =fetch('http://localhost:3001/api/v1/bookings', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "userID": customer.id, "date": selectedDate, "roomNumber": roomNumber })
  })
     .then(response => response.json())
     .then(response => {
      showBooking()
      
    })
    return newFetchy
  } 
}

function showBooking(){
  console.log('hi')
  bookingContainer.innerHTML = ''
    bookingContainer.innerHTML +=  `<div class="displayed-bookings">
    <p>YA BOOKED!!!<p>`
  setTimeout(() => fetchThingy(customer.id), 3000)
}
