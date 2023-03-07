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
let selectedDate

// const signIn = document.getElementById('signInView')
// const hotelTuringPageWelcome = document.getElementById('navigationBarContainer')
const username = document.getElementById('userName')
const password = document.getElementById('passwordId')
const bookingContainer = document.querySelector('.main-section')
const searchButton = document.getElementById('dateSubmit')
const calendar = document.getElementById('calendar')
const dropdown = document.querySelector('.dropdown-container')
const signInButton = document.querySelector('.submit-button')
//  const buttonSelect = document.getElementById( `${room.number}`)

bookingContainer.addEventListener('click', function(event) {

if(event.target.className == "select-button"){
  newBooking(parseInt(event.target.id))
}
})

// function show(element) {
//   element.classList.remove('hidden');
// };

// function hide(element) {
//   element.classList.add('hidden');
// };

// function signIn(){
//   hide(hotelTuringPageWelcome)
//   show(signIn)
// }

// buttonSelect.addEventListener('click',showNewBooking)
// window.addEventListener('load', fetchThingy)

function fetchThingy(id){
  fetchAll(id)
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
  
}

dropdown.addEventListener('change', searchRoomsByType)
searchButton.addEventListener('click', searchRoomsByDate)
signInButton.addEventListener('click',  function() {
  event.preventDefault()
  signIn()
  //pass the query selector values for un and pw in signin
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
  // console.log("customer!!!!!", bookingRepository)
  // console.log(rooms)
  customer.checkBookings(bookingRepository)
  // console.log("customer booked", customer.customerBookings)
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
  // console.log(calendar.value)
  selectedDate = calendar.value.replaceAll('-','/')
  console.log(selectedDate)
  const bookedRoomNumbers = bookingRepository.getBookedRoomNumbersByDate(selectedDate)
  rooms.getAvailableRooms(bookedRoomNumbers)
  showAvailableBookings()
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
    //  const buttonSelect = document.getElementById( `${room.number}`)
    //  console.log(buttonSelect)
    //  bookingContainer
    //  buttonSelect.addEventListener('click',showNewBooking)
  
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
  console.log('Hi',)
  
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
      //if new booking is created after submit button is clicked, send confirmation, by displaying info of the booking/ a check mark (YOU DID IT!)
      //reGET data
      showBooking()
      
    })
    
    
    //  event.preventDefault()
    //  customer.makeNewBooking()
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

  
// // function getRandomSomethingId(){
// //   return Math.floor(Math.random() * 41);
// // };

// function show(element) {
// element.classList.remove('hidden');
// };

// function hide(element) {
// element.classList.add('hidden');
// };