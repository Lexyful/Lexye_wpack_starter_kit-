
class Booking {
  constructor(bookings){
   this.bookings = bookings
  }
//match userid to booking id
getBookingByCustomerId(id){
 return this.bookings.filter(bookings =>  bookings.userID === id)
}

}

export default Booking