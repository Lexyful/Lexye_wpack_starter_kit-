class Customer {
  constructor(customer){
 
    this.id = customer.id
 
    this.name = customer.name
    this.customerBookings = []
    
  }
  addBookings(){

  }

  checkBookings(bookingsData){
    this.customerBookings = bookingsData.bookings.filter(booking => booking.userID === this.id)
     
    }

    calculateCost(){
     this.customerBookings
    }

  }



export default Customer
