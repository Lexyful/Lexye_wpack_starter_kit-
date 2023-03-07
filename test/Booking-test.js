import { expect } from 'chai';
import {customers, rooms, bookings, bookingRepository} from './sampleData'
import BookingRepository from '../src/classes/BookingRepository';
import Booking from '../src/classes/Booking';




describe('Booking', () => {
  let booked1;
  
 
beforeEach(() => {
  booked1 = new Booking(bookingRepository[0])

});
it('should be an instance of Booking', () => {
  expect(booked1).to.be.an.instanceof(Booking);
})

it('Booking should have an id.', () => {
 expect(booked1.id).to.equal("5fwrgu4i7k55hl6t9");
})


it('should check if the booking has a user ID',  () => {
  expect(booked1.userID).to.equal(1);

});

it('should check if the booking has a user date',  () => {
  expect(booked1.date).to.equal("2023/12/14");

});

it('should check if the booking has a user room number',  () => {
  expect(booked1.roomNumber).to.equal(14);

});

})

