class Customer {
  constructor(customer){
 
    this.id = customer.id
 
    this.name = customer.name
    this.customerBookings = []
  }
  addBookingById(bookingsData){
    return this.customerBookings = bookingsData.filter(booking => booking.userID === this.id)

    }
  //   getNewBooking(booking){
  //     this.customerBookings.push(booking)
  // }

  }



export default Customer
