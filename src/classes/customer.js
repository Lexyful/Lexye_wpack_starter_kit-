class Customer {
  constructor(customer){
 
    this.id = customer.id
 
    this.name = customer.name
    this.customerBookings = []
    
  }
  addBookings(){

  }

  checkBookings(bookingRepository){
    // console.log(this.id)
    this.customerBookings = bookingRepository.bookings.filter(booking => {
      return booking.userID === this.id
    })
    }
// store this in a variable to invoke it because of the direct return
    calculateCost(rooms){
    return  this.customerBookings.reduce((acc, booking) => {
      rooms.rooms.forEach(room => {
      if(booking.roomNumber === room.number){
          acc += room.costPerNight
      }
      })
      return acc
     }, 0)
    }

    makeNewBooking(bookingId){
      this.customerBookings.push(bookingId)

    }

  }



export default Customer
