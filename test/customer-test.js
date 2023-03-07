import { expect } from 'chai';
import {customers, room, bookingRepository} from './sampleData'
import Customer from '../src/classes/Customer';
import BookingRepository from '../src/classes/BookingRepository';
import Rooms from '../src/classes/Rooms';




describe('Customer', () => {
  let customer1;
  let customer2;
  let allBookings
 
beforeEach(() => {
  customer1 = new Customer(customers[0])
  customer2 = new Customer(customers[1])
  allBookings = new BookingRepository(bookingRepository)

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
  
  customer1.checkBookings(allBookings)
  customer2.checkBookings(allBookings)
  expect(customer1.customerBookings).to.deep.equal([allBookings.bookings[0]]);
 
  expect(customer2.customerBookings).to.deep.equal([allBookings.bookings[1]]);
});

it('should caluclate cost', () => {
  const roomArray = new Rooms(room)
  customer1.checkBookings(allBookings)
  
  expect(customer1.calculateCost(roomArray)).to.equal(roomArray.rooms[2].costPerNight)
  
  })

});

