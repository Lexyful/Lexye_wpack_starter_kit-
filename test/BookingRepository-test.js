import { expect } from 'chai';
import {customers, rooms, bookings, bookingRepository} from './sampleData'
import BookingRepository from '../src/classes/BookingRepository';




describe('BookingRepository', () => {
  let bookings1;
  let bookings2;
 
beforeEach(() => {
  bookings1 = new BookingRepository(bookingRepository[0])
  bookings2 = new BookingRepository(bookingRepository[1])
});

it('should be an instance of BookingRepository', () => {
  expect(bookings1).to.be.an.instanceof(BookingRepository);

 
})
it('should be able to store bookings', () => {
     expect(bookings1[bookings]).to.equal(bookings);
  })
})
