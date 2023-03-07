import { expect } from 'chai';
import {customers, room, bookingRepository} from './sampleData'
import Customer from '../src/classes/Customer';
import BookingRepository from '../src/classes/BookingRepository';
import Rooms from '../src/classes/Rooms';

describe('Rooms', () => {
  let rooms1;
  let rooms2;
  let allBookings
 
beforeEach(() => {
  rooms1 = new Rooms(room)
 
});
it('should be an instance of Rooms', () => {
  expect(rooms1).to.be.an.instanceof(Rooms);
  
})
it('get available Rooms', () => {

rooms1.getAvailableRooms([14])
expect(rooms1.availableRooms[0]).to.deep.equal(room[0])

});

it('should get available rooms by type', () => {
  rooms1.getAvailableRooms([14])
  const availableByType = rooms1.getAvailableRoomsByType("single room")
  expect(availableByType[0]).to.deep.equal(room[1])
  })
})
