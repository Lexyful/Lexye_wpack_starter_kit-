import { expect } from 'chai';
import {customers, rooms, bookings} from './sampleData'
import Customer from '../src/classes/Customer';
// import Booking from '../src/classes/Booking';




describe('Customer', () => {
  let customer1;
  let customer2;
 
 
beforeEach(() => {
  customer1 = new Customer(customers[0])
  customer2 = new Customer(customers[1])
  // booking1 = new Booking(bookings[0])
  // booking2 = new Booking(bookings[1])
});



  it('should be a function', () => {
      expect(Customer).to.be.a('function');
  })

  it('should be an instance of customer', () => {
      expect(customer1).to.be.an.instanceof(Customer);
      expect(customer2).to.be.an.instanceof(Customer);
  })
  it('should have an id', () => {
    
      expect(customer1.id).to.equal(1);
      expect(customer2.id).to.equal(2);
    
  });
  it('should have name', () => {
    
    expect(customer1.name).to.equal("Bri B");
    expect(customer2.name).to.equal("Bea O");
  
});

it('should be able to store bookings', () => {
  //   booking1 = new Booking(bookings[0])
  //  booking2 = new Booking(bookings[1])

  customer1.checkBookings(bookings)
  customer2.checkBookings(bookings)
 
  expect(customer1.customerBookings).to.deep.equal([bookings[0]]);
  expect(customer2.customerBookings).to.deep.equal([bookings[1]]);
});


});

