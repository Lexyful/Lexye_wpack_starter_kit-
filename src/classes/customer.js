class Customer {
  constructor(customer){
  
    this.id = customer.id
    this.name = customer.name
    this.customerBookings = []
    
  }
  addBookings(){

  }

  checkBookings(bookingRepository){
    this.customerBookings = bookingRepository.bookings.filter(booking => {
      return booking.userID === this.id
    })
  }
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

  }




export default Customer
