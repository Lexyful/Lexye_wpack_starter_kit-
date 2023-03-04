class Customer {
  constructor(customer){
    this.id = customer.id
    // console.log(id)
    this.name = customer.name
    this.bookings = []
  }
  addBookingById(){
    return this.bookings = bookingsData.filter(booking => bookings.userID === this.id)

    }
  }



export default Customer
