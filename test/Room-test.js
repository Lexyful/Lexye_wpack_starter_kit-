import { expect } from 'chai';
import {customers, room, bookings} from './sampleData'
import Room from '../src/classes/Room';




describe('Room', () => {
  let room1;
  let room2;
 
beforeEach(() => {
  room1 = new Room(room[0])
  room2 = new Room(room[1])
});
})

  it('should be a function', () => {
      expect(Room).to.be.a('function');
  })

  it('should be an instance of room', () => {
      expect(room1).to.be.an.instanceof(Room);
  })
  it('should have an id', () => {
    customerSampleData.forEach(customer => {
      expect(room).to.have.property('id');
    });
  });
