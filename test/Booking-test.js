import { expect } from 'chai';
import {customers, rooms, bookings} from './sampleData'
import Customer from '../src/classes/customer';




describe('Booking', () => {
  let booking1;
  let booking2;
 
beforeEach(() => {
  booking1 = new Booking(bookings[0])
  booking2 = new booking(bookings[1])
});
})