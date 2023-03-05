
class BookingRepository {
  constructor(bookings){
   this.bookings = bookings
   
  }
//match userid to booking id
getBookingByCustomerId(id){
 return this.bookings.filter(bookings =>  bookings.userID === id)
}

getBookedRoomNumbersByDate(date){
const bookingsMatchedDate = this.bookings.filter(booking => booking.date === date)
return bookingsMatchedDate.map(booking => booking.roomNumber)
}

// getBookedRoomByType(roomType){
//   const bookingMatchedByType = this.bookings.filter(booking => booking.roomType === roomType)
//   return bookingMatchedByType.map(booking => booking)
// }

}

export default BookingRepository