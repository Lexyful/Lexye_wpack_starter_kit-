import { expect } from 'chai';

import Room from '../src/classes/Room';




describe('Room', () => {
  let room;
 
beforeEach(() => {
  rooms = new Room(
    {
      number: 982,
      roomType: "suite",
      bidet: false,
      bedSize: "full",
      numBeds: 5,
      costPerNight: 477.38
    }
  );
}); 
//not a real room


  it('should be a function', () => {
      expect(Room).to.be.a('function');
  })

  it('should be an instance of rooms', () => {
      expect(rooms).to.be.an.instanceof(Room);
  })
  it('should have an id', () => {
    customerSampleData.forEach(customer => {
      expect(room).to.have.property('id');
    });
  });
});