import { expect } from 'chai';
import {customers, rooms, bookings} from './sampleData'
import BookingRepository from '../src/classes/BookingRepository';




describe('Booking', () => {
  let bookings1;
  let bookings2;
 
beforeEach(() => {
  bookings1 = new Booking(bookings[0])
  bookings2 = new booking(bookings[1])
});
})