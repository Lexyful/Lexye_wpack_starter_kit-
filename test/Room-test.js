import { expect } from 'chai';

import Rooms from '../src/classes/Rooms';




describe('Rooms', () => {
  let rooms;
 
beforeEach(() => {
  rooms = new Rooms(
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
      expect(Rooms).to.be.a('function');
  })

  it('should be an instance of rooms', () => {
      expect(rooms).to.be.an.instanceof(Rooms);
  })
  it('should have an id', () => {
    customerSampleData.forEach(customer => {
      expect(rooms).to.have.property('id');
    });
  });
});